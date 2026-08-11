'use client';

import { SelectField, TextField, TextareaField } from './Field';
import { looksLikeEmail, looksLikePhone, useFormSubmit } from './useFormSubmit';
import { capitalNeedOptions, propertyTypeOptions } from '@/data/site';

function validate(data: FormData) {
  const errors: Record<string, string> = {};
  const name = String(data.get('name') ?? '').trim();
  const contact = String(data.get('contact') ?? '').trim();

  if (!name) errors.name = 'Please tell us who you are.';
  if (!contact) {
    errors.contact = 'Please leave an email address or a phone number.';
  } else if (!looksLikeEmail(contact) && !looksLikePhone(contact)) {
    errors.contact = 'That does not look like an email address or a phone number.';
  }

  return errors;
}

export function IntakeForm() {
  const { status, errors, handleSubmit } = useFormSubmit(validate);

  return (
    <form
      className="form-panel split__wide"
      style={{ gap: 26 }}
      name="deal-intake"
      method="POST"
      action="/thank-you/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
    >
      <input type="hidden" name="form-name" value="deal-intake" />
      <p hidden>
        <label>
          Leave this field empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="field-row field-row--4">
        <TextField name="name" label="Name" error={errors.name} autoComplete="name" />
        <TextField
          name="contact"
          label="Email or Phone"
          error={errors.contact}
          autoComplete="email"
        />
      </div>

      <div className="field-row field-row--3">
        <SelectField name="property-type" label="Property Type" options={propertyTypeOptions} />
        <TextField name="location" label="Location" placeholder="City, State" />
        <TextField name="loan-amount" label="Loan Amount Needed" />
      </div>

      <fieldset style={{ border: 'none', margin: 0, padding: 0 }}>
        <legend className="field-label" style={{ paddingBottom: 12 }}>
          What do you need capital for?
        </legend>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {capitalNeedOptions.map((option) => (
            <label key={option} className="chip">
              <input type="checkbox" name="capital-need" value={option} />
              {option}
            </label>
          ))}
        </div>
      </fieldset>

      <TextareaField
        name="notes"
        label="Anything Else Worth Knowing"
        rows={3}
        placeholder="Timing, current debt, occupancy, business plan"
      />

      <button
        type="submit"
        className="btn btn--gold btn--gold-to-aubergine btn--submit"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending' : 'Send It Over'}
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
