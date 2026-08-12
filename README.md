# LUX Commercial Capital — website

Marketing site for LUX Commercial Capital, a commercial real estate capital advisory and debt
placement firm. Built from the design handoff in `design_handoff_lux_website`.

The design is deliberately photo-free: type, thin rules, whitespace and two brand colours carry the
whole site. **Do not add stock photography, icon sets, gradients, or rounded cards.**

## Stack

- **Next.js 16** (App Router) with `output: 'export'` — every page is prerendered to static HTML.
- **React 19**, TypeScript.
- **Plain CSS** with custom properties in `src/app/globals.css`. No CSS framework: the design's
  values are literal (`clamp()` type scale, exact hexes, per-cell 1px rules), so tokens plus
  semantic classes reproduce them more faithfully and readably than utility classes would.
- **next/font** self-hosts Cormorant Garamond and Jost — no request ever leaves for Google Fonts.
- **Netlify Forms** takes both form submissions. There is no server and no API key to manage.

## Local development

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000. `npm run build` writes the static site to `out/`.

## Routes

| Route | Page |
|---|---|
| `/` | Home — 11 sections |
| `/capital-solutions` | 15 financing products in 4 families |
| `/property-types` | 15 asset classes |
| `/our-approach` | The 4-step process |
| `/about` | Firm positioning, leadership |
| `/insights` | Article index |
| `/contact` | Full transaction submission (with document upload) |
| `/submit-your-deal` | Short intake form — **this is the URL for social bios and paid traffic** |
| `/thank-you` | Where a submission lands if JavaScript is off |
| `/privacy-policy`, `/terms-of-use` | Placeholders, see below |

## Deploying to Netlify

1. Sign in at [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing
   project** → **GitHub** → pick `jcordeira/luxcommercialcapital`.
2. Netlify reads `netlify.toml`, so the build command (`npm run build`) and publish directory
   (`out`) are already filled in. Click **Deploy**.
3. The first deploy gives you a `random-name.netlify.app` URL. Check it works, then point the
   domain at it.

## Pointing luxcommercialcapital.com at the site (Porkbun)

In Netlify: **Domain management** → **Add a domain** → enter `luxcommercialcapital.com`. Netlify
will show you the records it wants. Then in Porkbun, open the domain → **DNS**:

1. Delete Porkbun's default parking records for `@` and `www` (the ALIAS and CNAME pointing at
   `pixie.porkbun.com`). Leave any MX or TXT records alone — those are your email.
2. Add these two:

| Type | Host | Answer |
|---|---|---|
| `ALIAS` | *(leave blank — this is the root)* | `apex-loadbalancer.netlify.com` |
| `CNAME` | `www` | *your Netlify subdomain, e.g.* `luxcommercial.netlify.app` |

Porkbun supports `ALIAS` at the root, which is what you want — do not use an `A` record with a
hard-coded IP.

3. **Add the domain in Netlify as well.** DNS alone is not enough: Netlify's apex load balancer
   routes by hostname, so until `luxcommercialcapital.com` is registered against this project it
   answers with a 404 and the default `*.netlify.app` certificate. Go to **Domain management** →
   **Add a domain**, enter `luxcommercialcapital.com`, and add `www.luxcommercialcapital.com` too.
4. Wait for the domain to verify (usually minutes, up to a few hours) and confirm **HTTPS** shows a
   provisioned Let's Encrypt certificate covering both names. Set `luxcommercialcapital.com` as the
   primary domain so `www` redirects to it.

To check from the outside: `https://luxcommercialcapital.com` should return the site, not a 404,
and the certificate should name the domain rather than `*.netlify.app`.

## Form submissions — set this up or you will not see leads

Both forms post to Netlify Forms. This takes **three** steps, in order, and the first one is easy
to miss.

### 1. Turn on form detection

Netlify does **not** scan for forms by default — this is opt-in per project, and until it is on,
the Forms page shows an "Enable form detection" button instead of your forms.

Go to <https://app.netlify.com/projects/luxcommercialcapital/forms> and select
**Enable form detection**.

### 2. Redeploy

Detection happens at build time, by parsing the HTML Netlify publishes. Turning it on does not
retroactively scan the deploy you already have — you have to build again.

**Deploys** → **Trigger deploy** → **Deploy site**.

When that build finishes, `transaction` and `deal-intake` appear on the Forms page. If they don't,
the forms were not found and nothing below will work — stop and check that.

### 3. Add the email notification

Go to **Project configuration** → **Notifications** → **Emails and webhooks** → **Form submission
notifications** → **Add notification** → **Email notification**, and send to
`contact@luxcommercialcapital.com`. Direct link:

<https://app.netlify.com/projects/luxcommercialcapital/configuration/notifications#form-submission-notifications>

You can point one notification at a specific form or at every verified submission on the project.
One catch-all covers both forms. Without this, submissions land in the dashboard silently and
nobody is told.

Then send a real test submission through both forms and confirm the email arrives.

### 4. Make sure the recipient can actually receive mail

`contact@luxcommercialcapital.com` is **not a mailbox** — the domain's MX points at
`fwd2.porkbun.com`, which is Porkbun's forwarding service. Mail only reaches a human if a
forwarding rule exists in Porkbun (**domain → Email**) mapping `contact@` to a real inbox. A
correctly configured notification will still appear to vanish if that rule is missing.

Porkbun's forwarding normally installs two MX records — `fwd1.porkbun.com` at priority 10 and
`fwd2.porkbun.com` at priority 20. Only `fwd2` is present, so `fwd1` was lost when the parking
records were cleared for Netlify. Re-add it.

If a submission is stored in the Netlify dashboard but no email arrives, bisect it: temporarily
point the notification at a mailbox you know works (`Joseph@teamcordeira.com`, a real Google
Workspace account). Mail arriving there means Netlify is fine and the fault is Porkbun forwarding;
mail not arriving means the notification was never saved.

The domain also has **no SPF and no DMARC record**. That does not affect receiving, but anything
sent as `@luxcommercialcapital.com` will likely be filtered as spam until they are added.

Notes:

- The free tier covers **100 submissions per month** and 10MB of uploads. Watch this as traffic
  grows; the next tier up is inexpensive.
- Document uploads on `/contact` are capped at **8MB per file** by Netlify. The form tells the
  sender when a file is over that.
- Submissions contain confidential deal information. There is no third-party analytics on this
  site, and none should be added to the form pages.
- Send a test submission through both forms after the first deploy and confirm the email arrives.

## Still to supply

- **Selected Transactions** (home, section 10) — the four amounts in
  `selectedTransactions` in `src/data/site.ts` are layout placeholders. When real closed deals
  replace them, **delete the "Layout placeholders" tag** in `src/app/page.tsx`.
- **A licensing disclosure, if one is required.** The site makes no claim about licences or
  registrations held by the firm, because inventing one would be worse than omitting it. If LUX
  Commercial Capital holds a licence that has to be disclosed, add it to the footer and to the
  Terms of Use.
- **The formal legal entity name.** The legal pages refer to "LUX Commercial Capital" throughout.
  If the operating entity is an LLC or corporation with a fuller registered name, substitute it.

The Leadership section was removed from `/about` in August 2026. If bios are added later it should
be rebuilt rather than restored from history, since the layout has changed around it.

### The legal pages need a lawyer's eye

`/privacy-policy` and `/terms-of-use` carry real, specific content written for this business: a
debt placement firm that collects financial statements and uploaded documents, and that shares
transactions with prospective lenders as the substance of its service. That last point is the one
most template policies get wrong, and it is stated plainly.

They have not been reviewed by counsel. Before relying on them, have a lawyer check at minimum:
which privacy regimes apply given the mix of commercial and individual borrowers, whether the
liability and indemnity clauses are enforceable as drafted in New York, and whether any
disclosure is required for the firm's licensing status or its compensation arrangements.

## Content

Copy lives in `src/data/site.ts` — phone, email, the 15 property types, the 15 products, the four
approach steps. Editing it there updates every page that uses it.

All copy is final and client-approved unless listed above. Note the declarative, unhedged voice;
keep it if you add pages.

## Publishing an article

Articles live in `src/content/insights/`, one file each, as typed data rather than markdown. The
index page, the `/insights/[slug]` routes, the sitemap and the structured data all read from
`src/content/insights/index.ts`.

To add one: copy an existing article file, change the `slug`, `category`, `title`, `standfirst`,
`published` date and `blocks`, then import it in `index.ts` and add it to the `articles` array.
It appears everywhere automatically. Blocks can be `p`, `h2`, `list` or `quote`.

Two rules worth keeping:

- **Never change a `slug` after publication.** The URL is what search engines and inbound links
  point at. If a slug must change, the old path needs a redirect in `netlify.toml`.
- **The `standfirst` doubles as the meta description**, so keep it under about 155 characters and
  make it read as a promise about what the piece answers.

### On publishing cadence

Volume is not the lever. Google's spam policies explicitly target scaled content produced mainly
to rank, and a financial services site publishing bulk generated commentary is squarely in scope.
Three genuinely useful pieces that answer questions a sponsor actually types into a search box
will outperform thirty thin ones, and they will not put the domain at risk.

The other reason to go slowly: articles about debt structures published under the firm's name read
as professional opinion. Anything posted here should be reviewed by someone at the firm before it
goes live, for accuracy and for liability. Draft, review, publish. Not publish, then check.

## Where the build departs from the prototype

Three deliberate changes, all noted in the code:

1. **Focus rings.** The prototype signalled focus with colour alone, which is not enough for
   keyboard users. Every interactive element gets a visible gold ring.
2. **The 1:2 splits use flexbox, not grid.** The prototype draws them as an auto-fit grid with
   `grid-column: span 2`. Below the column minimum, that span forces a track the container has no
   room for and the wide side overflows its parent. Flex basis gives the same ratio when wide and
   stacks cleanly when narrow, with no extra breakpoint. See `.split` in `globals.css`.
3. **The intake chips are real checkboxes.** The prototype's chips were presentational; here they
   submit as a `capital-need` multi-select, and a selected chip fills aubergine.

The header breakpoint is a media query at 1040px rather than the prototype's resize listener.

## Brand assets

`public/brand/` is the approved logo pack, copied from the handoff. The keystone is the site mark;
the LC seal is secondary.

One thing to know: the supplied lockup SVGs (`brand/svg/lockup-*.svg`) reference `class="word"` and
`class="sub"` on their `<text>` elements, but carry no stylesheet, so the wordmark renders unstyled
if you open them on their own. The site does not use those files — the header and footer draw the
keystone inline and set the wordmark in HTML. Before any print or merch use, a designer needs to
convert the wordmark type to outlines and add CMYK/Pantone builds; see `public/brand/README.md`.
