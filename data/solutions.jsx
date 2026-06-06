// Shared data and components for The Brittany site

const SOLUTIONS = [
  {
    slug: "insurance-financial",
    number: "01",
    name: "Insurance & Financial Services",
    short: "Insurance",
    color: "var(--teal-500)",
    colorToken: "teal",
    tagline: "Turn fragmented insurance workflows into visible, manageable pipelines.",
    summary: "We help insurers, brokers, and financial services teams digitise the workflows that slow them down, from quotation tracking and broker pipeline visibility to underwriting controls, claims, dashboards, and reporting.",
    problem: [
      "Insurance and financial services run on slow, document-heavy work. Quotes get buried in inboxes, broker and relationship-manager pipelines stay invisible to management, and underwriting and claims work is hard to prioritise, route, and report on.",
      "We pair local industry knowledge with a team that builds fast, usable software, and turn scattered work into pipelines you can actually see and manage. QuoteIQ, our quotation intelligence proof of concept, is where we start."
    ],
    flow: [
      { t: "Capture", d: "Quotes, submissions, and documents land in one place instead of scattered inboxes." },
      { t: "Track", d: "A quote register with SLA visibility shows what is requested, sent, pending, won, and lost." },
      { t: "Control", d: "Filtering by broker, RM, product, and region gives underwriting and management a live pipeline." },
      { t: "Report", d: "Executive dashboards turn that pipeline into conversion, loss, and productivity reporting." }
    ],
    stack: ["Next.js", "Postgres", "LLM Extraction", "Integrations", "Dashboards", "Supabase"],
    payer: "Insurers, brokers, and financial services teams losing time and revenue to manual quotation, underwriting, and service work. They pay for visibility, faster turnaround, and cleaner reporting.",
    risk: "Low",
    mvp: "In 90 days we stand up QuoteIQ for one team: a quote register, SLA visibility, broker, RM and region filtering, and a first executive dashboard. CRM and underwriting integrations follow.",
    proofPoint: {
      name: "QuoteIQ",
      label: "Proof of concept",
      blurb: "QuoteIQ is our working proof of concept for quotation intelligence. It is a control tower that helps insurance teams see what has been requested, what has been sent, what is pending, what converted, and what was lost. We show it as proof of how we think and build, not as a finished commercial product.",
      points: [
        "Quote register and SLA visibility.",
        "Broker, relationship manager, product line, and region filtering.",
        "Conversion and loss analysis.",
        "Executive dashboard views.",
        "A foundation for integrating into CRM, underwriting, policy, and reporting systems."
      ]
    }
  },
  {
    slug: "ai-workflow-automation",
    number: "02",
    name: "AI Workflow Automation",
    short: "AI Workflows",
    color: "var(--amber-500)",
    colorToken: "amber",
    tagline: "Clear the queue before a person ever has to touch it.",
    summary: "AI-assisted intake, triage, extraction, routing, and exception handling, so your team spends its time on the work that genuinely needs a human.",
    problem: [
      "Operational teams drown in repetitive intake. Emails, documents, forms, and tickets all need reading, classifying, and routing before any real work starts, and the backlog grows faster than headcount.",
      "We put an AI layer in front of the queue. It reads each item, pulls out the fields that matter, scores its confidence, drafts a branded reply, and sends only the genuine exceptions to a person, with the full context attached."
    ],
    flow: [
      { t: "Intake", d: "Email, document, form, and ticket queues funnel into one routing layer." },
      { t: "Extract", d: "Models pull structured fields and classify intent with a confidence score." },
      { t: "Resolve", d: "High-confidence items close automatically with a branded response." },
      { t: "Escalate", d: "Exceptions go to a person with history and a suggested next step." }
    ],
    stack: ["LLM Orchestration", "OCR + LLM", "Vector Search", "Python · FastAPI", "Supabase", "Integrations"],
    payer: "Operations leaders carrying high-volume intake. They pay for throughput and turnaround, not for seats.",
    risk: "Medium",
    mvp: "In 90 days we route one live workflow, usually a tier-one service or document queue, through the AI and human layer, with a weekly quality review."
  },
  {
    slug: "custom-enterprise-apps",
    number: "03",
    name: "Custom Enterprise Apps",
    short: "Enterprise Apps",
    color: "var(--violet-500)",
    colorToken: "violet",
    tagline: "Software shaped around how your operation actually works.",
    summary: "Purpose-built portals, internal platforms, CRM-style tools, and workflow systems, integrated with what you already run and designed for the people who use them daily.",
    problem: [
      "Off-the-shelf software rarely fits the way a specific operation runs. Teams end up bending their process to suit the tool, or holding it together with spreadsheets and email.",
      "We build the application that fits the work: portals, internal platforms, workflow systems, and data-capture tools that connect to your existing systems and feel natural to the people using them."
    ],
    flow: [
      { t: "Map", d: "We map the real workflow and the friction worth removing before designing anything." },
      { t: "Design", d: "Interfaces go in front of real users early, and we build what gets a yes." },
      { t: "Integrate", d: "The app connects to your existing systems, authentication, and data." },
      { t: "Operate", d: "We deploy, train your team, and stay on as the work evolves." }
    ],
    stack: ["Next.js", "Postgres", "Supabase", "Integrations", "Cloud Infrastructure", "Auth"],
    payer: "Operations and product owners who need software shaped to their workflow rather than the other way round. They pay for fit, adoption, and less manual overhead.",
    risk: "Medium",
    mvp: "In 90 days we ship a working first module, one portal, workflow, or internal tool, live with real users, then build from there."
  },
  {
    slug: "dashboards-control-towers",
    number: "04",
    name: "Dashboards & Control Towers",
    short: "Dashboards",
    color: "var(--green-500)",
    colorToken: "green",
    tagline: "One view that turns operational noise into action.",
    summary: "Management views that bring pipeline, SLA, revenue leakage, conversion, productivity, and exceptions into a single picture, drawn from the systems you already run.",
    problem: [
      "Plenty of operations have data everywhere and visibility nowhere. The numbers sit in separate systems, reporting is manual and late, and problems only show up once they have already cost money.",
      "We build the control tower: one operational view that pulls from your systems, tracks SLAs, flags leakage and exceptions, and turns raw activity into a ranked list of what needs attention."
    ],
    flow: [
      { t: "Connect", d: "We integrate the systems where your operational data already lives." },
      { t: "Model", d: "Metrics get defined once: pipeline, SLA, leakage, conversion, productivity." },
      { t: "Surface", d: "One control-tower view, with drill-downs for each team and owner." },
      { t: "Alert", d: "Threshold breaches and exceptions raise an alert before they escalate." }
    ],
    stack: ["Integrations", "Postgres", "Looker", "PowerBI", "Python · FastAPI", "Next.js"],
    payer: "Executives and operations leaders who need a live view across a distributed operation. They pay for earlier decisions and recovered leakage.",
    risk: "Low",
    mvp: "In 90 days we deliver a working control tower for one operation: connect the core systems, define the key metrics, and ship the executive view with exception alerts."
  }
];

window.SOLUTIONS = SOLUTIONS;

// ---------- Selected work / proof of build quality ----------
// Anonymised capability cards (Showcase Request Pack §3–5). Per the pack, proof
// can be anonymised: a well-written card that explains the problem, what was
// built, and the capability it proves is valid without naming every client.
const SELECTED_WORK = [
  {
    featured: true,
    title: "QuoteIQ quotation control tower",
    sector: "Insurance",
    problem:
      "Brokers and underwriters lost quotes in inboxes and had no clear view of what was requested, sent, pending, won, or lost.",
    built:
      "A quotation control tower that tracks every enquiry through its lifecycle, with broker, RM, and region filtering and executive dashboards.",
    capability: ["AI / LLM", "Enterprise app", "Dashboards", "Integrations"],
    proof:
      "Our working proof of concept for insurance. It shows how we think and build, and it is not yet a commercial product.",
  },
  {
    title: "AI-assisted claims triage platform",
    sector: "Insurance & financial services",
    problem:
      "High-volume manual intake made it hard for teams to prioritise, route, and resolve work quickly.",
    built:
      "A workflow layer that combines document intake, classification, routing, dashboard visibility, and exception handling.",
    capability: [
      "AI workflow automation",
      "Enterprise app",
      "Integrations",
      "Dashboards",
      "Operational design",
    ],
    proof:
      "Built by people who have shipped production-grade enterprise software in several markets.",
  },
  {
    title: "Operations control tower",
    sector: "Logistics & field operations",
    problem:
      "Leaders had no single, real-time view across a distributed operation, so problems surfaced late and cost money.",
    built:
      "A control-tower dashboard that pulls from several systems into one view, with SLA tracking and exception alerts.",
    capability: [
      "Dashboards",
      "Integrations",
      "Cloud infrastructure",
      "Operational design",
    ],
    proof:
      "An anonymised example, shared to show how we build rather than to name a client.",
  },
];
window.SELECTED_WORK = SELECTED_WORK;
