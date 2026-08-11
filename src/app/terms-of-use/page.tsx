import type { Metadata } from 'next';
import { LegalPlaceholder } from '@/components/LegalPlaceholder';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'The terms governing use of the LUX Commercial Capital website.',
  robots: { index: false, follow: true },
};

export default function TermsOfUsePage() {
  return (
    <LegalPlaceholder
      eyebrow="Legal"
      title="Terms of Use."
      lead="The terms governing use of this website."
    />
  );
}
