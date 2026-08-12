import type { Metadata } from 'next';
import { LegalPage, type LegalSection } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'The terms governing use of the LUX Commercial Capital website and the submission of transactions to the firm.',
};

const sections: LegalSection[] = [
  {
    heading: 'Acceptance',
    body: [
      'By using luxcommercialcapital.com you agree to these terms. If you do not agree to them, do not use the site.',
      'We may revise these terms. The version posted here when you use the site is the version that applies.',
    ],
  },
  {
    heading: 'What this site is',
    body: [
      'This site describes the capital advisory and debt placement services of LUX Commercial Capital. It is informational.',
      'Nothing on this site is an offer to lend, a commitment to lend, or an offer to arrange financing on any particular terms. Loan amounts, structures and terms described here are illustrative of the market we work in, not quotations. Any financing depends on underwriting, third-party reports, credit approval by a capital source and the execution of definitive documents.',
      'References to a minimum transaction size of $1 million and to no stated maximum describe the transactions the firm takes on. They are not a promise that financing is available at any size.',
    ],
  },
  {
    heading: 'This is not advice',
    body: [
      'Nothing on this site is legal, tax, accounting, investment or appraisal advice. Commercial real estate financing has consequences in all of those areas. Take your own professional advice before acting.',
      'Using this site, reading it, or sending us a transaction does not create an advisory, agency, fiduciary or broker relationship between you and the firm. That relationship begins only when we and you sign a written engagement.',
    ],
  },
  {
    heading: 'Submitting a transaction',
    body: [
      'When you submit a transaction through this site you confirm that the information you provide is accurate to the best of your knowledge, and that you are authorised to provide it. Approximations are welcome where the forms ask for them. Fabrications are not.',
      'Where your submission includes information about other people or entities, including tenants, partners and guarantors, you confirm you are entitled to share it with us and with prospective capital sources for the purpose of arranging financing.',
      'We treat submissions as confidential and review them internally. Placing debt necessarily involves showing a transaction to prospective capital sources. How we handle your information is described in the Privacy Policy. If a transaction requires a non-disclosure agreement before it goes anywhere, tell us before you send it.',
      'We are not obliged to accept, pursue or respond to any submission. Where a transaction is not a fit, we will say so directly.',
    ],
  },
  {
    heading: 'Fees',
    body: [
      'There is no charge for submitting a transaction or for an initial conversation.',
      'Where the firm is engaged, compensation is set out in a separate written agreement signed before work begins. Fees may be payable by the borrower, by the capital source, or by both, and the arrangement will be disclosed to you in that agreement.',
    ],
  },
  {
    heading: 'Acceptable use',
    body: ['You agree not to:'],
    list: [
      'Use the site for any unlawful purpose, or to submit information you have no right to share.',
      'Submit false, misleading or fraudulent transaction information.',
      'Attempt to gain unauthorised access to the site, its forms or any connected system.',
      'Scrape, harvest or bulk-collect content from the site, or use automated means to submit the forms.',
      'Upload malicious code, or files you have reason to believe are unsafe.',
      'Reproduce or republish material from the site as your own.',
    ],
  },
  {
    heading: 'Intellectual property',
    body: [
      'The content of this site, including its text, layout, typography and the LUX Commercial Capital name and keystone mark, belongs to the firm or its licensors. You may read it, and you may share links to it.',
      'You may not copy, reproduce, adapt or distribute the content for commercial purposes without written permission. The firm’s name and marks may not be used in a way that suggests an association or endorsement that does not exist.',
    ],
  },
  {
    heading: 'Third-party sites',
    body: [
      'This site may link to sites the firm does not control. We link to them because they may be useful, not because we endorse them, and we are not responsible for their content, their accuracy or their privacy practices.',
    ],
  },
  {
    heading: 'Availability and accuracy',
    body: [
      'The site is provided as it is and as it is available. We make no warranty that it will be uninterrupted, error-free, or free of harmful components, and we disclaim all warranties to the fullest extent the law allows, including any implied warranties of merchantability, fitness for a particular purpose and non-infringement.',
      'Market conditions change. Information about financing structures, capital sources and terms reflects our understanding at the time of writing and may be out of date when you read it.',
    ],
  },
  {
    heading: 'Limitation of liability',
    body: [
      'To the fullest extent permitted by law, LUX Commercial Capital and its members, officers, employees and agents will not be liable for any indirect, incidental, special, consequential, exemplary or punitive damages, or for lost profits, lost opportunities, lost data or business interruption, arising out of your use of this site, whether the claim is in contract, tort or otherwise, and even if we have been advised that such damages are possible.',
      'Nothing in these terms excludes or limits liability where the law does not permit it to be excluded or limited.',
    ],
  },
  {
    heading: 'Indemnity',
    body: [
      'You agree to indemnify LUX Commercial Capital against claims, losses and reasonable costs arising from your misuse of the site, your breach of these terms, or your submission of information you were not entitled to provide.',
    ],
  },
  {
    heading: 'Governing law',
    body: [
      'These terms are governed by the laws of the State of New York, without regard to its conflict of law rules. Disputes arising out of them are subject to the exclusive jurisdiction of the state and federal courts located in New York.',
    ],
  },
  {
    heading: 'If part of this is unenforceable',
    body: [
      'If any provision of these terms is held unenforceable, the rest remains in force and the unenforceable provision is applied to the extent it can be.',
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Use."
      lead="The terms that apply when you use this site or send us a transaction."
      effective="11 August 2026"
      sections={sections}
    />
  );
}
