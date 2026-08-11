'use client';

import { useRef, useState } from 'react';
import { SelectField, TextField, TextareaField } from './Field';
import { looksLikeEmail, useFormSubmit } from './useFormSubmit';
import { propertyTypeOptions, transactionTypeOptions } from '@/data/site';

/** Netlify's per-file ceiling. Caught here so the sender is not left guessing. */
const MAX_FILE_BYTES = 8 * 1024 * 1024;

const ACCEPT = '.pdf,.xlsx,.xls,.docx,.doc,.csv,.png,.jpg,.jpeg,.heic';

function validate(data: FormData) {
  const errors: Record<string, string> = {};
  const name = String(data.get('name') ?? '').trim();
  const email = String(data.get('email') ?? '').trim();
  const phone = String(data.get('phone') ?? '').trim();

  if (!name) errors.name = 'Please tell us who you are.';
  if (email && !looksLikeEmail(email)) errors.email = 'That email address does not look right.';
  if (!email && !phone) errors.email = 'Please leave an email address or a phone number.';

  return errors;
}

export function TransactionForm() {
  const { status, errors, handleSubmit } = useFormSubmit(validate);
  const fileInput = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<string[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);

  function onFilesChosen(event: React.ChangeEvent<HTMLInputElement>) {
    const chosen = Array.from(event.target.files ?? []);
    const tooBig = chosen.filter((file) => file.size > MAX_FILE_BYTES);
    if (tooBig.length > 0) {
      setFileError(
        `${tooBig.map((file) => file.name).join(', ')} exceeds 8MB. Email larger files to us directly.`,
      );
    } else {
      setFileError(null);
    }
    setFiles(chosen.map((file) => file.name));
  }

  return (
    <form
      className="form-panel"
      name="transaction"
      method="POST"
      action="/thank-you/"
      encType="multipart/form-data"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
    >
      <input type="hidden" name="form-name" value="transaction" />
      <p hidden>
        <label>
          Leave this field empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: 'var(--display)',
            fontSize: 'clamp(22px, 2.4vw, 30px)',
            fontWeight: 400,
            color: 'var(--aubergine)',
          }}
        >
          Transaction Summary
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: 10.5,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--muted-grey)',
          }}
        >
          All fields confidential
        </p>
      </div>

      <div className="field-row field-row--4">
        <TextField name="name" label="Name" error={errors.name} autoComplete="name" />
        <TextField name="company" label="Company" autoComplete="organization" />
        <TextField
          name="email"
          label="Email"
          type="email"
          error={errors.email}
          autoComplete="email"
        />
        <TextField name="phone" label="Phone" type="tel" autoComplete="tel" />
      </div>

      <TextField name="property-address" label="Property Address" autoComplete="street-address" />

      <div className="field-row field-row--4">
        <SelectField name="property-type" label="Property Type" options={propertyTypeOptions} />
        <SelectField
          name="transaction-type"
          label="Transaction Type"
          options={transactionTypeOptions}
        />
      </div>

      <div className="field-row field-row--4">
        <TextField name="value" label="Value / Purchase Price" />
        <TextField name="loan-amount" label="Requested Loan Amount" />
        <TextField name="current-debt" label="Current Debt" />
      </div>

      <div
        className="stack"
        style={{ gap: 22, borderTop: '1px solid var(--rule-light)', paddingTop: 26 }}
      >
        <div className="stack" style={{ gap: 6 }}>
          <h3
            className="eyebrow"
            style={{ margin: 0, fontSize: 10.5, letterSpacing: '0.2em', fontWeight: 400 }}
          >
            Property Economics
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: 13.5,
              lineHeight: 1.6,
              color: 'var(--body-grey)',
              fontWeight: 300,
              maxWidth: '60ch',
            }}
          >
            Best approximation is fine. Non-owner-occupied: net operating income, cap rate or P&amp;L.
            Owner-occupied: net profit from last year&rsquo;s tax return.
          </p>
        </div>

        <div className="field-row field-row--3">
          <TextField name="noi" label="Net Operating Income" placeholder="Approximate" />
          <TextField name="cap-rate" label="Cap Rate" placeholder="If known" />
          <TextField
            name="net-profit"
            label="Net Profit — Owner-Occupied"
            placeholder="Last year's tax return"
          />
        </div>

        <TextareaField
          name="pl-summary"
          label="P&L Summary — Non-Owner-Occupied"
          rows={2}
          placeholder="Gross income, operating expenses, vacancy — best approximation"
        />
      </div>

      <TextareaField name="summary" label="Brief Transaction Summary" rows={4} />

      <div className="stack" style={{ gap: 10 }}>
        <div className="upload-panel">
          <div className="stack" style={{ gap: 5 }}>
            <span className="field-label">Upload Documents</span>
            <span style={{ fontSize: 13.5, color: 'var(--muted-grey)', fontWeight: 300 }}>
              Rent roll, operating statements, offering memorandum, budget
            </span>
          </div>
          <button
            type="button"
            className="upload-trigger"
            onClick={() => fileInput.current?.click()}
          >
            Choose files
          </button>
          <input
            ref={fileInput}
            className="visually-hidden"
            type="file"
            id="field-documents"
            name="documents"
            multiple
            accept={ACCEPT}
            onChange={onFilesChosen}
          />
        </div>
        {files.length > 0 && (
          <p style={{ margin: 0, fontSize: 13, color: 'var(--body-grey)', fontWeight: 300 }}>
            {files.join(', ')}
          </p>
        )}
        {fileError && (
          <p className="field-error" role="alert">
            {fileError}
          </p>
        )}
      </div>

      <button type="submit" className="btn btn--aubergine btn--submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending' : 'Submit Transaction'}
      </button>

      <div aria-live="polite">
        {status === 'sent' && (
          <p className="form-success" style={{ margin: 0 }}>
            Received. A capital advisor will follow up directly.
          </p>
        )}
        {status === 'error' && (
          <p className="form-failure" style={{ margin: 0 }}>
            That did not send. Please email contact@luxcommercialcapital.com or call 934-600-4438.
          </p>
        )}
      </div>
    </form>
  );
}
