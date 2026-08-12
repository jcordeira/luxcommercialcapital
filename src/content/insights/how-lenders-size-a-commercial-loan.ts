import type { Article } from './types';

export const article: Article = {
  slug: 'how-lenders-size-a-commercial-loan',
  category: 'Structure',
  title: 'How Lenders Actually Size a Commercial Loan',
  standfirst:
    'Loan-to-value, debt service coverage and debt yield each produce a different number. The smallest one is your loan.',
  published: '2026-08-11',
  blocks: [
    {
      type: 'p',
      text: 'Most sponsors arrive at a financing conversation with a loan-to-value ratio in mind. They have a value, they apply a percentage, and that is the proceeds figure they build the deal around. Then a term sheet comes back materially smaller and nobody can explain why.',
    },
    {
      type: 'p',
      text: 'The reason is that loan-to-value is only one of three tests, and it is often not the one that governs. A lender runs all three, and the loan is the smallest result. Understanding which test binds on your transaction is the difference between a business plan that survives underwriting and one that gets repriced two weeks before closing.',
    },
    { type: 'h2', text: 'Test one: loan-to-value' },
    {
      type: 'p',
      text: 'The familiar one. Loan amount divided by appraised value, capped at whatever the lender is willing to advance. Conventional permanent debt on stabilised commercial assets typically runs in the mid-sixties to mid-seventies as a percentage. Agency multifamily reaches higher. Construction and transitional debt are usually quoted against cost or against stabilised value rather than as-is value, which is a different calculation with a different answer.',
    },
    {
      type: 'p',
      text: 'The trap is that value is not your number. It is the appraiser\'s number, and it is produced late in the process. A transaction sized off an optimistic value assumption has a gap that only appears after you have spent money on third-party reports.',
    },
    { type: 'h2', text: 'Test two: debt service coverage' },
    {
      type: 'p',
      text: 'Net operating income divided by annual debt service. A lender wants the property to produce meaningfully more cash than the loan consumes, and expresses that as a minimum ratio. On stabilised assets a common floor sits around 1.20 to 1.25 times, with the exact requirement moving by asset class, sponsor and market.',
    },
    {
      type: 'p',
      text: 'Coverage is where interest rates enter the calculation. Debt service is a function of rate and amortisation, so the same property supports a different loan on a Tuesday than it did the previous quarter. When rates rise, the coverage test tightens without anything at the property changing. This is the mechanism behind most of the sizing gaps sponsors encountered through the recent rate cycle: values held up better than coverage did.',
    },
    {
      type: 'p',
      text: 'Two details matter more than sponsors expect. Lenders underwrite to their own net operating income, not yours, and they will normalise it. Expect management fees, replacement reserves and a vacancy factor to be imposed whether or not they appear in your operating statement. And many lenders size coverage against a stressed rate or a constant floor rather than the actual note rate, which reduces proceeds again.',
    },
    { type: 'h2', text: 'Test three: debt yield' },
    {
      type: 'p',
      text: 'Net operating income divided by the loan amount, expressed as a percentage. If a property produces $900,000 of net operating income and the loan is $10,000,000, the debt yield is nine percent.',
    },
    {
      type: 'p',
      text: 'Debt yield is the test sponsors know least and lenders trust most, because it is the only one that cannot be flattered. It contains no rate, no amortisation schedule and no appraisal. It answers a single question: if the lender took the keys tomorrow, what unlevered return would the loan balance earn? Falling rates cannot inflate it and an aggressive appraisal cannot move it.',
    },
    {
      type: 'p',
      text: 'Securitised lenders lean on it hardest, and minimums in the high single digits to low teens are common depending on asset class. Office and hospitality carry higher requirements than multifamily and industrial, for the reasons you would expect.',
    },
    { type: 'h2', text: 'Which test binds, and why it matters' },
    {
      type: 'p',
      text: 'In a low-rate environment, debt service is cheap, coverage is easy to clear, and loan-to-value is usually the binding constraint. Sponsors in that environment learn to think in terms of leverage percentages, and the habit sticks.',
    },
    {
      type: 'p',
      text: 'In a higher-rate environment the picture inverts. Coverage and debt yield bind first, often well before the leverage cap is reached, and a transaction that pencils at seventy percent of value gets sized at fifty-eight. The property has not changed. The test that governs has.',
    },
    {
      type: 'quote',
      text: 'The number that matters is not the one you like. It is the smallest one the lender calculates.',
    },
    {
      type: 'p',
      text: 'Knowing which constraint binds tells you what to do about it. If coverage governs, the levers are structural: longer amortisation, an interest-only period, a rate buydown, or a lender whose stress assumptions are less punitive. If debt yield governs, no structural change helps, because the test ignores structure. The only answers are more equity, a lower basis, or genuinely higher net operating income. If loan-to-value governs, you are arguing about the appraisal, and you should be prepared with the comparable sales before the appraiser is engaged.',
    },
    { type: 'h2', text: 'What to do before you go to market' },
    {
      type: 'p',
      text: 'Run the three tests yourself, using conservative assumptions, before a lender does. It takes an afternoon and it changes the conversation entirely.',
    },
    {
      type: 'list',
      items: [
        'Build the lender\'s net operating income, not yours. Impose a management fee, a replacement reserve and a market vacancy factor even if the property is fully leased to a strong covenant.',
        'Size to coverage at a rate above where the market is today, and against a realistic amortisation schedule rather than interest-only.',
        'Calculate the debt yield at your requested proceeds. If it starts with a number lower than the market requires for the asset class, the proceeds are wrong and no amount of structuring fixes it.',
        'Identify which test produces the smallest loan. That is your real proceeds figure, and it is the one to underwrite the equity against.',
      ],
    },
    {
      type: 'p',
      text: 'A sponsor who arrives with all three numbers already run, and who leads with the binding constraint rather than the flattering one, is treated differently by a credit officer. It signals that the rest of the file will hold up.',
    },
    {
      type: 'p',
      text: 'Sizing is where most transactions are won or lost, and it happens before anyone discusses a rate. If you want the three tests run against a specific property before you take it to market, send us the rent roll and the operating statements and we will tell you what the market will actually lend.',
    },
  ],
};
