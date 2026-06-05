// Shared data and components for The Brittany site

const SOLUTIONS = [
  {
    slug: "solar-energy",
    number: "01",
    name: "Solar Energy Intelligence",
    short: "Solar Energy",
    color: "var(--teal-500)",
    colorToken: "teal",
    tagline: "Cut energy costs and predict faults before they happen — software only, no hardware changes.",
    summary: "AI-powered monitoring and optimisation for commercial solar installations. Cut energy costs, predict faults, and report on sustainability outcomes — without changing your hardware.",
    problem: [
      "Commercial solar in Botswana and the SADC region is scaling fast, but most installations are instrumented like hardware projects — not software systems. Operators see raw telemetry but miss the patterns that matter: drift, shading, inverter degradation, and grid-switch losses.",
      "We don't sell panels. We sit on top of whatever hardware is already installed and turn every kilowatt-hour into structured, actionable data."
    ],
    flow: [
      { t: "Ingest", d: "MQTT streams from existing inverters and smart meters land in our pipeline." },
      { t: "Normalise", d: "Per-site telemetry is cleaned, aligned, and cross-referenced against weather." },
      { t: "Detect", d: "Models flag underperformance, faults, and shading events in near real-time." },
      { t: "Optimise", d: "Operators get ranked actions. Finance gets sustainability-grade reports." }
    ],
    stack: ["MQTT", "AWS IoT", "TimescaleDB", "Python · FastAPI", "LLM Summaries", "Next.js"],
    payer: "Commercial & industrial site owners — mines, malls, agricultural operations, telco tower portfolios. They pay because every 1% of yield recovered pays for the software many times over.",
    risk: "Low",
    mvp: "90 days to a working MVP: ingest one client's existing MQTT feed, build their operator dashboard, ship the first weekly performance report. Iterate from there."
  },
  {
    slug: "bpo-operations",
    number: "02",
    name: "AI-Powered BPO",
    short: "BPO",
    color: "var(--amber-500)",
    colorToken: "amber",
    tagline: "AI handles 60–70% of your operations. Our team handles the rest. You pay for outcomes.",
    summary: "We become your outsourced operations partner. Our AI handles 60–70% of volume automatically. Our Botswana-based team handles the rest. Better than a call centre, cheaper than building in-house.",
    problem: [
      "African enterprises — telcos, banks, insurers — drown in repetitive customer service and document workflows. Traditional BPO shops sell heads; we sell outcomes.",
      "Our stack routes inbound volume through AI first. Everything the agent can resolve is resolved. Everything that needs a human lands in our Gaborone operations room, with full context and a suggested response."
    ],
    flow: [
      { t: "Intake", d: "Email, WhatsApp, voice, and document queues funnel into one routing layer." },
      { t: "Classify", d: "LLMs triage intent, extract fields, and score confidence." },
      { t: "Resolve", d: "High-confidence tickets close automatically with branded replies." },
      { t: "Escalate", d: "Edge cases route to trained human agents with full context attached." }
    ],
    stack: ["LLM Orchestration", "Twilio", "Vector Search", "Python · FastAPI", "Supabase", "Looker"],
    payer: "Enterprise ops leaders (COOs, Heads of Customer Service). They pay a blended per-ticket outcome fee — not a per-seat headcount cost.",
    risk: "Medium",
    mvp: "90 days to route one live workflow — typically a tier-1 customer service queue — through the hybrid AI + human layer, with a weekly QA loop."
  },
  {
    slug: "trade-compliance",
    number: "03",
    name: "Trade Compliance",
    short: "Trade",
    color: "var(--violet-500)",
    colorToken: "violet",
    tagline: "Stop losing days at SADC borders. Automate your customs docs and track every shipment in real time.",
    summary: "Automate customs documentation, validate before submission, and track shipments across SADC borders in real time. Built specifically for southern African trade corridors.",
    problem: [
      "SADC trade moves across 16 countries, a dozen currencies, and a tangle of bilateral agreements. Every border has its own rules. Every broker has their own quirks. A single rejected SAD500 can cost three days and tens of thousands of rands.",
      "We pre-validate documentation against the live rule set for each destination, flag issues before submission, and track shipments from depot to destination."
    ],
    flow: [
      { t: "Draft", d: "Importer or broker drafts declaration inside our platform." },
      { t: "Validate", d: "Rule engine checks HS codes, tariffs, and corridor-specific quirks." },
      { t: "Submit", d: "Clean declaration flows to the relevant revenue authority integration." },
      { t: "Track", d: "Live shipment status with corridor heatmap and delay forecasts." }
    ],
    stack: ["Postgres", "Rule Engine", "OCR + LLM", "Next.js", "PowerBI", "Mapbox"],
    payer: "Freight forwarders, clearing agents, and large importers with recurring cross-border volume. They pay per shipment, or a flat monthly platform fee with volume discount.",
    risk: "Medium-High",
    mvp: "90 days to a working MVP on one corridor (e.g. Gaborone ↔ Walvis Bay) with one revenue authority integration and one pilot clearing agent."
  },
  {
    slug: "film-creator-economy",
    number: "04",
    name: "Film & Creator Economy",
    short: "Film",
    color: "var(--green-500)",
    colorToken: "green",
    tagline: "Botswana has the world's greatest landscapes. We build the infrastructure to film them.",
    summary: "A production enablement platform for African film. Location database, crew directory, permit facilitation, and creator monetisation tools — built to make Botswana's incredible landscape accessible to the world.",
    problem: [
      "International productions that want to shoot in Botswana face a fragmented, relationship-driven industry. There is no central directory of locations, no searchable crew database, and no predictable path through permits.",
      "We build the rails. Scouts find verified locations in minutes, productions book vetted crew, and creators get monetisation tools that actually pay out in-country."
    ],
    flow: [
      { t: "Discover", d: "Searchable location database with drone plates, access notes, and permits." },
      { t: "Assemble", d: "Verified crew directory, rate cards, and availability calendars." },
      { t: "Clear", d: "Permit workflow with BFPA and district council templates built in." },
      { t: "Pay Out", d: "Creator monetisation rails — payments, rights management, analytics." }
    ],
    stack: ["Next.js", "Mapbox", "Stripe Connect", "Supabase", "Cloudflare R2", "LLM Search"],
    payer: "International production companies (per-project access fees), local creators (monetisation take rate), and sponsoring government film bodies during MVP.",
    risk: "Medium",
    mvp: "90 days to list 50 verified locations, onboard 30 crew, and facilitate one end-to-end international production from scout to payout."
  }
];

window.SOLUTIONS = SOLUTIONS;

// ---------- Capability strip ----------
// Technical strengths shown as proof of breadth (Showcase Request Pack §6).
const CAPABILITIES = [
  {
    t: "AI / LLM tools",
    d: "Classification, extraction, summarisation, agents, workflow routing, and decision support.",
  },
  {
    t: "Enterprise apps",
    d: "Internal platforms, customer portals, workflow apps, SaaS products, CRM-style tools, and admin systems.",
  },
  {
    t: "Dashboards / control towers",
    d: "Operational visibility layers, BI dashboards, pipeline views, SLA tracking, and management reporting.",
  },
  {
    t: "Integrations / infrastructure",
    d: "APIs, cloud architecture, authentication, data pipelines, deployment, monitoring, and scalable systems.",
  },
  {
    t: "Product / UX quality",
    d: "Interface improvements, product flows, user testing, and designs that busy operators actually use.",
  },
  {
    t: "Relevant sectors",
    d: "Insurance, fintech, energy, logistics, mining, telecoms, education, and government.",
  },
];
window.CAPABILITIES = CAPABILITIES;

// ---------- Selected work / proof of build quality ----------
// Anonymised capability cards (Showcase Request Pack §3–5). Per the pack, proof
// can be anonymised: a well-written card that explains the problem, what was
// built, and the capability it proves is valid without naming every client.
const SELECTED_WORK = [
  {
    featured: true,
    title: "QuoteIQ — insurance quoting & intake",
    sector: "Insurance",
    problem:
      "Manual quoting and intake slowed brokers down and made it hard to respond to customers quickly and consistently.",
    built:
      "A guided quoting and intake tool that structures customer data, standardises quotes, and gives the team a clean view of every enquiry.",
    capability: ["AI / LLM", "Enterprise app", "Dashboarding", "Integrations"],
    proof:
      "The Brittany's insurance wedge for the Botswana market, grounded in local client context.",
  },
  {
    title: "AI-assisted claims triage platform",
    sector: "Insurance / financial services",
    problem:
      "High-volume manual intake made it hard for teams to prioritise, route, and resolve work quickly.",
    built:
      "A workflow layer combining document intake, classification, routing, dashboard visibility, and exception handling.",
    capability: [
      "AI workflow automation",
      "Enterprise app",
      "Integrations",
      "Dashboarding",
      "Operational design",
    ],
    proof:
      "Built by team members who have shipped production-grade enterprise software across multiple markets.",
  },
  {
    title: "Operations control tower",
    sector: "Logistics / field operations",
    problem:
      "Leaders had no single, real-time view across a distributed operation, so issues surfaced late and cost money.",
    built:
      "A control-tower dashboard pulling from multiple systems into one operational view, with SLA tracking and exception alerts.",
    capability: [
      "Dashboards",
      "Integrations",
      "Cloud infrastructure",
      "Operational design",
    ],
    proof:
      "Anonymised capability example — shown to demonstrate build quality, not to disclose a client.",
  },
];
window.SELECTED_WORK = SELECTED_WORK;
