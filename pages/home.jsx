// Home page — all 6 sections

const { Link, Reveal, CountUp, useRouter } = window;

function HomeHero() {
  return (
    <section className="bg-navy-950" style={{
      position: "relative",
      minHeight: "100vh",
      paddingTop: 120,
      paddingBottom: 80,
      display: "flex",
      alignItems: "center",
      overflow: "hidden"
    }}>
      <div className="hero-bg" />
      <div className="container" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <Reveal>
          <span className="mono-label" style={{ color: "var(--teal-400)", marginBottom: 28, display: "inline-block", whiteSpace: "nowrap" }}>
            <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 50, background: "var(--teal-500)", marginRight: 10, verticalAlign: "middle" }} />
            Gaborone · Botswana · SADC
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="display-xl" style={{ maxWidth: 980, marginBottom: 28, color: "white" }}>
            We build the software<br/>Africa's enterprises need.
          </h1>
        </Reveal>

        <Reveal delay={0.22}>
          <p className="body-l" style={{ maxWidth: 620, color: "rgba(255,255,255,0.7)", marginBottom: 40 }}>
            AI-powered solutions for telcos, mining companies, banks, and logistics firms across the SADC region. Built by people who understand the context.
          </p>
        </Reveal>

        <Reveal delay={0.34}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link to="/solutions" className="btn btn-primary">
              See our solutions →
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get in touch
            </Link>
          </div>
        </Reveal>
      </div>


      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%",
        transform: "translateX(-50%)",
        color: "rgba(255,255,255,0.4)",
        fontFamily: "var(--mono-font)", fontSize: 11,
        letterSpacing: "0.12em", textTransform: "uppercase",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 10
      }}>
        <span>Scroll</span>
        <span style={{ width: 1, height: 32, background: "rgba(255,255,255,0.3)" }} />
      </div>
    </section>
  );
}

function HomeProblem() {
  return (
    <section className="bg-gray-50">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48 }} className="problem-grid">
          <Reveal>
            <div>
              <span className="eyebrow">Why we exist</span>
              <h2 className="display-l" style={{ color: "var(--navy-900)", maxWidth: 520 }}>
                Africa's enterprises are underserved by technology.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <p className="body-l">
                Global software is built for global markets. The pain points of a telco in Gaborone, a mine in the Kalahari, or a logistics company moving goods across five SADC borders are not the same as those of a bank in New York or a retailer in London.
              </p>
              <p className="body-l">
                Most technology deployed here is either too expensive, too generic, or built by people with no understanding of the local regulatory, operational, and infrastructure context.
              </p>
              <p className="body-l">
                We built The Brittany to close that gap — combining product thinking, AI engineering, and commercial experience in the African market.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
      <style>{`
        @media (min-width: 900px) {
          .problem-grid { grid-template-columns: 1fr 1.1fr !important; gap: 96px !important; }
        }
      `}</style>
    </section>
  );
}

function HomeSolutions() {
  return (
    <section className="bg-white" id="solutions">
      <div className="container">
        <div className="solutions-intro">
          <Reveal>
            <span className="eyebrow">What we build</span>
            <h2 className="display-l" style={{ color: "var(--navy-900)", maxWidth: 820 }}>
              Custom software for whatever your operation actually needs.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-l" style={{ color: "var(--gray-800)", opacity: 0.78, maxWidth: 580, marginTop: 20 }}>
              We take on any enterprise operational problem worth solving with software — AI tooling, internal platforms, integrations, data pipelines, customer-facing products. The four below are recent focus areas that show how we work. Your problem probably looks different, and that's the point.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="mono-label muted" style={{ marginTop: 64, marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 28, height: 1, background: "var(--gray-100)" }} />
            Recent focus areas
          </div>
        </Reveal>

        <div className="solutions-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 20 }}>
          {window.SOLUTIONS.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <Link to={`/solutions/${s.slug}`} className="solution-card" style={{ display: "block" }}>
                <div style={{
                  background: "white",
                  border: "none",
                  borderRadius: 16,
                  padding: 36,
                  height: "100%",
                  transition: "transform .25s ease-out"
                }} className="hoverable-card">
                  <h3 className="h2" style={{ color: "var(--navy-900)", marginBottom: 14, maxWidth: 420 }}>
                    {s.name}
                  </h3>
                  <p style={{ color: "var(--gray-800)", opacity: 0.82, marginBottom: 28, maxWidth: 540 }}>
                    {s.summary}
                  </p>
                  <span style={{ color: s.color, fontWeight: 600, fontSize: 14 }}>
                    Learn more →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="dont-see">
            <div>
              <div className="mono-label" style={{ color: "var(--teal-500)", marginBottom: 8 }}>
                Don't see your problem?
              </div>
              <h3 className="h2" style={{ color: "var(--navy-900)", maxWidth: 520 }}>
                If it's operationally painful and worth fixing, we'll scope it.
              </h3>
            </div>
            <Link to="/contact" className="btn btn-primary">Start a conversation →</Link>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (min-width: 900px) {
          .solutions-grid { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
        }
        .hoverable-card:hover { transform: translateY(-3px); }
        .dont-see {
          margin-top: 48px;
          padding: 36px;
          border: 1px solid var(--gray-100);
          border-radius: 16px;
          background: var(--gray-50);
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: flex-start;
        }
        @media (min-width: 800px) {
          .dont-see { flex-direction: row; justify-content: space-between; align-items: center; padding: 40px 44px; }
        }
      `}</style>
    </section>
  );
}

function HomeCapabilities() {
  return (
    <section className="bg-gray-50" id="capabilities">
      <div className="container">
        <Reveal>
          <span className="eyebrow">What we can build</span>
          <h2 className="display-l" style={{ color: "var(--navy-900)", maxWidth: 760 }}>
            The technical bench behind the work.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="body-l" style={{ color: "var(--gray-800)", opacity: 0.78, maxWidth: 600, marginTop: 20, marginBottom: 8 }}>
            Our focus areas are the front door. Behind them is a team that has shipped AI tools, enterprise apps, dashboards, integrations, and production infrastructure across multiple markets.
          </p>
        </Reveal>

        <div className="capability-grid">
          {window.CAPABILITIES.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.06}>
              <div className="capability-card">
                <div className="mono-label" style={{ color: "var(--teal-500)", marginBottom: 14 }}>
                  0{i + 1}
                </div>
                <h3 className="h3" style={{ color: "var(--navy-900)", marginBottom: 10 }}>{c.t}</h3>
                <p style={{ color: "var(--gray-800)", opacity: 0.78, fontSize: 14.5, lineHeight: 1.6 }}>{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .capability-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          margin-top: 48px;
        }
        @media (min-width: 700px) { .capability-grid { grid-template-columns: 1fr 1fr; gap: 20px; } }
        @media (min-width: 1000px) { .capability-grid { grid-template-columns: repeat(3, 1fr); gap: 24px; } }
        .capability-card {
          padding: 30px;
          border: 1px solid var(--gray-100);
          border-radius: 16px;
          background: white;
          height: 100%;
        }
      `}</style>
    </section>
  );
}

function HomeSelectedWork() {
  return (
    <section className="bg-white" id="selected-work">
      <div className="container">
        <div className="solutions-intro">
          <Reveal>
            <span className="eyebrow">Proof of build quality</span>
            <h2 className="display-l" style={{ color: "var(--navy-900)", maxWidth: 760 }}>
              Selected work from the team.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="body-l" style={{ color: "var(--gray-800)", opacity: 0.78, maxWidth: 600, marginTop: 20 }}>
              A few examples of what the people behind The Brittany have built. Some are named, some are anonymised to protect client confidentiality — but each one shows a real operational problem solved with software.
            </p>
          </Reveal>
        </div>

        <div className="work-grid">
          {window.SELECTED_WORK.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <div className={`work-card${w.featured ? " featured" : ""}`}>
                <div className="work-card-head">
                  <span className="mono-label" style={{ color: "var(--teal-500)" }}>{w.sector}</span>
                  {w.featured && <span className="work-flag">Flagship</span>}
                </div>
                <h3 className="h2" style={{ color: "var(--navy-900)", margin: "12px 0 18px", maxWidth: 460 }}>
                  {w.title}
                </h3>
                <div className="work-row">
                  <span className="work-row-label">Problem</span>
                  <p>{w.problem}</p>
                </div>
                <div className="work-row">
                  <span className="work-row-label">What we built</span>
                  <p>{w.built}</p>
                </div>
                <div className="work-chips">
                  {w.capability.map((c) => (
                    <span key={c} className="work-chip">{c}</span>
                  ))}
                </div>
                <p className="work-proof">{w.proof}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .work-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-top: 56px;
        }
        @media (min-width: 900px) {
          .work-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
          .work-card.featured { grid-column: 1 / -1; }
        }
        .work-card {
          background: var(--gray-50);
          border: 1px solid var(--gray-100);
          border-radius: 16px;
          padding: 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .work-card.featured {
          background: white;
          border-color: var(--teal-100);
          box-shadow: 0 18px 40px -28px rgba(0,178,169,0.4);
        }
        .work-card-head { display: flex; align-items: center; gap: 12px; }
        .work-flag {
          font-family: var(--mono-font);
          font-size: 10.5px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--teal-500);
          background: var(--teal-100);
          padding: 4px 9px;
          border-radius: 999px;
        }
        .work-row { margin-bottom: 16px; }
        .work-row-label {
          display: block;
          font-family: var(--mono-font);
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gray-400);
          margin-bottom: 5px;
        }
        .work-row p { color: var(--gray-800); opacity: 0.84; font-size: 14.5px; line-height: 1.6; }
        .work-chips { display: flex; flex-wrap: wrap; gap: 8px; margin: 4px 0 20px; }
        .work-chip {
          font-family: var(--mono-font);
          font-size: 11.5px;
          letter-spacing: 0.03em;
          padding: 6px 10px;
          border-radius: 6px;
          border: 1px solid var(--gray-100);
          background: white;
          color: var(--gray-800);
        }
        .work-proof {
          margin-top: auto;
          padding-top: 18px;
          border-top: 1px solid var(--gray-100);
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--gray-400);
          font-style: italic;
        }
      `}</style>
    </section>
  );
}

function HomeHowWeWork() {
  const steps = [
    { t: "Discover", d: "We spend time inside your operations before writing a line of code. We interview your team, map your workflows, and find the exact friction point worth solving." },
    { t: "Design", d: "We prototype quickly and put real interfaces in front of your people. We only build what gets a yes from the people who will use it." },
    { t: "Build", d: "Small, fast sprints. Working software in weeks, not months. No big reveals — you see progress every week." },
    { t: "Deploy", d: "We handle the full deployment: infrastructure, security, onboarding, and training. We do not disappear after launch." },
    { t: "Optimise", d: "We stay on as an ongoing technology partner. The software improves as your operations do." }
  ];
  return (
    <section className="bg-navy-900" id="how">
      <div className="container">
        <Reveal>
          <span className="eyebrow light">Our approach</span>
          <h2 className="display-l" style={{ color: "white", maxWidth: 720, marginBottom: 64 }}>
            We build with you, not for you.
          </h2>
        </Reveal>
        <div className="stepper">
          {steps.map((step, i) => (
            <Reveal key={step.t} delay={i * 0.08} className="step">
              <div className="step-num mono-label">0{i + 1}</div>
              <h3 className="h3" style={{ color: "white", marginBottom: 10, marginTop: 20 }}>{step.t}</h3>
              <p style={{ color: "rgba(255,255,255,0.66)", fontSize: 14.5, lineHeight: 1.6 }}>{step.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .stepper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 28px;
        }
        @media (min-width: 900px) {
          .stepper { grid-template-columns: repeat(5, 1fr); gap: 20px; }
        }
        .step { position: relative; padding-top: 20px; }
        .step::before {
          content: "";
          position: absolute; top: 0; left: 0; right: 0;
          height: 1px; background: rgba(255,255,255,0.14);
        }
        .step::after {
          content: "";
          position: absolute; top: -3px; left: 0;
          width: 28px; height: 5px; background: var(--teal-500);
        }
        .step-num {
          color: var(--teal-400);
          letter-spacing: 0.14em;
        }
      `}</style>
    </section>
  );
}

function HomeStats() {
  const stats = [
    { n: 4, suffix: "", label: "Solution verticals" },
    { n: 300, suffix: "M+", label: "SADC regional market" },
    { n: 70, suffix: "%", prefix: "60–", label: "BPO volume handled by AI", fixed: true },
    { n: 90, suffix: " days", label: "To a working MVP", nowrap: true }
  ];
  return (
    <section className="bg-gray-50">
      <div className="container">
        <Reveal>
          <span className="eyebrow">By the numbers</span>
          <h2 className="display-l" style={{ color: "var(--navy-900)", maxWidth: 680, marginBottom: 56 }}>
            Grounded in the market we serve.
          </h2>
        </Reveal>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="stat-cell">
              <div className="stat-num" style={{ whiteSpace: "nowrap" }}>
                {s.fixed ? (
                  <span style={{ whiteSpace: "nowrap" }}>60–<CountUp to={70} suffix="%" /></span>
                ) : (
                  <CountUp to={s.n} suffix={s.suffix} prefix={s.prefix || ""} />
                )}
              </div>
              <div className="mono-label muted" style={{ marginTop: 8 }}>{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          border-top: 1px solid var(--gray-100);
          padding-top: 48px;
        }
        @media (min-width: 900px) { .stats-grid { grid-template-columns: repeat(4, 1fr); gap: 40px; } }
        .stat-cell { border-left: 1px solid var(--gray-100); padding-left: 20px; text-align: center; }
        .stat-cell:first-child { border-left: none; padding-left: 0; }
        @media (max-width: 899px) {
          .stat-cell:nth-child(3) { border-left: none; padding-left: 0; }
        }
        .stat-num {
          font-family: var(--display-font);
          font-weight: 700;
          font-size: clamp(40px, 5.4vw, 64px);
          line-height: 1;
          color: var(--teal-500);
          letter-spacing: -0.015em;
        }
      `}</style>
    </section>
  );
}

function HomeCTA() {
  return (
    <section className="bg-teal" style={{ padding: "80px 0" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32, alignItems: "center" }} id="cta-grid">
        <Reveal>
          <h2 className="display-l" style={{ color: "white", maxWidth: 720 }}>
            Ready to build something that actually works?
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link to="/contact" className="btn btn-white">Start a conversation →</Link>
            <Link to="/solutions" className="btn btn-secondary" style={{ borderColor: "rgba(255,255,255,0.3)" }}>
              Explore solutions
            </Link>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (min-width: 900px) {
          #cta-grid { grid-template-columns: 1.4fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function HomePage() {
  return (
    <main id="main">
      <HomeHero />
      <HomeProblem />
      <HomeSolutions />
      <HomeCapabilities />
      <HomeSelectedWork />
      <HomeHowWeWork />
      <HomeStats />
      <HomeCTA />
    </main>
  );
}

window.HomePage = HomePage;
