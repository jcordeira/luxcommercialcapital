import type { Metadata } from 'next';
import { LegalPlaceholder } from '@/components/LegalPlaceholder';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How LUX Commercial Capital handles information submitted to the firm.',
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPlaceholder
      eyebrow="Legal"
      title="Privacy Policy."
      lead="How the firm handles the information you submit."
    />
  );
}
