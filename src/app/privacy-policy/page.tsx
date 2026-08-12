import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How LUX Commercial Capital collects, uses, shares and protects the information you submit through this site.',
};

const sections: LegalSection[] = [
  {
    heading: 'Who this covers',
    body: [
      'This policy explains how LUX Commercial Capital handles information collected through luxcommercialcapital.com and through transactions submitted to the firm. It applies to this website. It does not govern the practices of lenders, capital sources or other third parties you deal with separately.',
      'Most information we receive concerns commercial real estate transactions and the entities behind them. Some of it identifies individuals, particularly where a transaction involves a personal guarantee, an owner-occupied property or an SBA loan.',
    ],
  },
  {
    heading: 'What we collect',
    body: [
      'We collect what you choose to send us. Nothing on this site requires an account, and we do not ask you to create one.',
      'Through the transaction submission and deal intake forms, that typically includes:',
    ],
    list: [
      'Contact details: name, company, email address and telephone number.',
      'Transaction details: property address, property type, transaction type, purchase price or value, requested loan amount and existing debt.',
      'Property economics: net operating income, capitalisation rate, net profit and profit and loss information.',
      'Documents you upload, such as rent rolls, operating statements, offering memoranda and budgets.',
      'Anything else you write in the free-text fields.',
    ],
  },
  {
    heading: 'What we do not collect',
    body: [
      'This site runs no advertising trackers, no analytics and no third-party scripts. It sets no cookies. We do not build profiles of visitors, and we do not track you across other websites.',
      'We do not ask for Social Security numbers, tax identification numbers, bank account numbers or credit card details through this website. Do not send them through the forms. Where an application later requires that information, it will be collected through a secure channel outside this site.',
      'Our hosting provider processes standard web server request data in the course of serving pages. We do not use it to identify individual visitors.',
    ],
  },
  {
    heading: 'How we use it',
    body: [
      'We use what you send to evaluate the transaction, determine an appropriate capital structure, identify suitable capital sources, position the opportunity, negotiate terms and support execution through closing. We also use your contact details to respond to you.',
      'We do not use your information to make automated decisions about you, and we do not use it for marketing unrelated to the transaction you submitted.',
    ],
  },
  {
    heading: 'When we share it, and who with',
    body: [
      'Placing debt requires showing your transaction to people who might finance it. This is the most significant sharing we do, and it is the point of engaging the firm.',
      'Specifically, we may share transaction information with:',
    ],
    list: [
      'Prospective capital sources: banks, credit unions, agency lenders, debt funds, private lenders, specialty finance providers and their advisers, so they can assess whether to lend.',
      'Service providers who help operate the firm and this site, including our website host and form processor, under obligations to protect the information.',
      'Professional advisers such as counsel and accountants, where reasonably required.',
      'Third parties where the law requires it, or to establish, exercise or defend legal claims.',
    ],
  },
  {
    heading: 'What we never do with it',
    body: [
      'We do not sell your information. We do not rent it, trade it, or share it with data brokers or advertising networks.',
      'Where a transaction is confidential or you tell us it is sensitive, say so and we will agree how it is handled before it goes to market. If you want a non-disclosure agreement in place first, ask.',
    ],
  },
  {
    heading: 'Documents you upload',
    body: [
      'Rent rolls, operating statements and similar documents often contain information about people who are not you, including tenants and guarantors. By uploading them you confirm you are entitled to share that information with us and with prospective capital sources for the purpose of arranging financing.',
      'If a document contains information that should not leave the firm, redact it before uploading or send it to us separately with an instruction.',
    ],
  },
  {
    heading: 'How long we keep it',
    body: [
      'We keep transaction information for as long as needed to advise on the transaction and to meet our legal, tax and recordkeeping obligations, after which it is deleted or archived.',
      'You can ask us to delete a submission. Where a transaction has closed, or where a legal or regulatory obligation requires us to retain records, we will explain what we are able to remove.',
    ],
  },
  {
    heading: 'Security',
    body: [
      'This site is served over HTTPS, and form submissions are encrypted in transit. Access to submissions is limited to people at the firm who need it.',
      'No method of transmission or storage is completely secure, and we cannot guarantee absolute security. Email in particular is not a secure channel. Do not send sensitive personal identifiers to us by email.',
    ],
  },
  {
    heading: 'Your choices',
    body: [
      'You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. Write to the address below and we will respond.',
      'Depending on where you live, you may have additional rights under state or national privacy law, including the right to know what is collected, the right to deletion and the right not to be discriminated against for exercising those rights. We do not sell personal information or share it for cross-context behavioural advertising, so there is nothing to opt out of on that front.',
      'The simplest control is the one you already have: send us only what the transaction requires.',
    ],
  },
  {
    heading: 'Children',
    body: [
      'This site is intended for commercial real estate professionals and is not directed to children. We do not knowingly collect information from anyone under 18.',
    ],
  },
  {
    heading: 'Changes',
    body: [
      'If this policy changes we will post the revised version here and update the effective date. Material changes will be described at the top of the page.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy."
      lead="What we collect, why we have it, and who sees it."
      effective="11 August 2026"
      sections={sections}
    />
  );
}
