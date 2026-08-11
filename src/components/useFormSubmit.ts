'use client';

import { useState, type FormEvent } from 'react';

export type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** Ten digits or more, allowing the usual separators and a country prefix. */
const PHONE = /^\+?[\d\s().-]{10,}$/;

export const looksLikeEmail = (value: string) => EMAIL.test(value.trim());
export const looksLikePhone = (value: string) =>
  PHONE.test(value.trim()) && value.replace(/\D/g, '').length >= 10;

/**
 * Posts the form to Netlify Forms without leaving the page, so the inline
 * success message in the design is what the sender sees. If JavaScript never
 * runs, the form's own `action` carries the browser to the thank-you page
 * instead, so a submission is never silently lost.
 */
export function useFormSubmit(validate: (data: FormData) => Record<string, string>) {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      setStatus('idle');
      // Look the control up by name: aria-invalid is not on the DOM until React
      // re-renders, so querying for it here would find nothing.
      const control = form.elements.namedItem(firstInvalid);
      if (control instanceof HTMLElement) control.focus();
      return;
    }

    setStatus('sending');
    try {
      // Netlify accepts the submission on the path the form lives on. The
      // browser sets the multipart boundary, so no Content-Type header here.
      const response = await fetch(window.location.pathname, { method: 'POST', body: data });
      if (!response.ok) throw new Error(`Submission failed: ${response.status}`);
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return { status, errors, handleSubmit };
}
