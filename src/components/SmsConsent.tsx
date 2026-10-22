'use client';

import Link from 'next/link';
import { Fragment } from 'react';
import { site } from '@/data/site';

type Segment =
  | { text: string }
  | { text: string; bold: true }
  | { text: string; href: string };

/**
 * The disclosure, as segments. The rendered label and the string submitted with
 * the form are both derived from this one array, so they cannot drift apart —
 * and the wording someone agreed to is the evidence of consent, so they must
 * never drift apart.
 */
const DISCLOSURE: Segment[] = [
  {
    text:
      `I agree to receive text messages from ${site.name} about my transaction at the phone ` +
      `number provided. Consent is not a condition of any financing, approval or engagement. ` +
      `Message frequency varies. Message and data rates may apply. Reply `,
  },
  { text: 'STOP', bold: true },
  { text: ' to opt out or ' },
  { text: 'HELP', bold: true },
  { text: ' for help. See our ' },
  { text: 'Privacy Policy', href: '/privacy-policy' },
  { text: ' and ' },
  { text: 'Terms of Use', href: '/terms-of-use' },
  { text: '.' },
];

/** The exact text submitted alongside the form, derived from the segments above. */
export const SMS_CONSENT_TEXT = DISCLOSURE.map((segment) => segment.text).join('');

/**
 * A2P 10DLC / TCPA consent checkbox. Unchecked by default and never required to
 * submit — carriers reject pre-checked or mandatory consent, and so does the
 * TCPA. Keep it out of each form's `validate` function.
 */
export function SmsConsent({
  checked,
  onChange,
  id = 'sms-consent',
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
}) {
  return (
    <div className="consent-panel">
      <input
        type="checkbox"
        id={id}
        name="sms-consent"
        className="consent-box"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        value="yes"
      />
      <label htmlFor={id} className="consent-label">
        {DISCLOSURE.map((segment, index) => {
          if ('href' in segment) {
            return (
              <Link key={index} href={segment.href} className="consent-link">
                {segment.text}
              </Link>
            );
          }
          if ('bold' in segment) {
            return <strong key={index}>{segment.text}</strong>;
          }
          return <Fragment key={index}>{segment.text}</Fragment>;
        })}
      </label>

      {/*
        Carried only when consent was actually given. There is deliberately no
        client timestamp here: Netlify stamps every submission server-side, and
        a browser clock is weaker evidence than the one we already get free.
      */}
      {checked && <input type="hidden" name="sms-consent-text" value={SMS_CONSENT_TEXT} />}
    </div>
  );
}
