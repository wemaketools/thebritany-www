// Solutions overview page + individual solution pages

const { Link, Reveal, useRouter } = window;

function SolutionsHero() {
  return (
    <section className="bg-navy-900" style={{
      position: "relative",
      paddingTop: 160,
      paddingBottom: 96,
      overflow: "hidden"
    }}>
      <div className="hero-bg" />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <Reveal>
          <span className="mono-label" style={{ color: "var(--teal-400)" }}>
            The Brittany · Solutions
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="display-l" style={{ color: "white", maxWidth: 900, marginTop: 24, marginBottom: 24 }}>
            Four problems. Four focused solutions.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="body-l" style={{ color: "rgba(255,255,255,0.7)", maxWidth: 680 }}>
            Each vertical is designed around a specific, documented enterprise pain point in the SADC region. We build software that solves it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function SolutionBlock({ solution, index }) {
  const isDark = index % 2 === 1;
  return (
    <section className={isDark ? "bg-navy-900" : "bg-gray-50"}>
      <div className="container">
        <div className="solution-block-grid">
          {/* Left: identity */}
          <div>
            <Reveal>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ width: 42, height: 4, background: solution.color, borderRadius: 2 }} />
                <span className="mono-label" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "var(--gray-400)" }}>
                  Vertical {solution.number}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="display-l" style={{
                color: isDark ? "white" : "var(--navy-900)",
                marginBottom: 20,
                fontSize: "clamp(32px, 4vw, 48px)"
              }}>
                {solution.name}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p style={{
                color: isDark ? "rgba(255,255,255,0.7)" : "var(--gray-800)",
                fontSize: 17, lineHeight: 1.65, marginBottom: 24, maxWidth: 500
              }}>
                {solution.problem[0]}
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <Link to={`/solutions/${solution.slug}`}
                className="btn"
                style={{
                  background: solution.color, color: "white",
                  padding: "12px 22px"
                }}>
                Explore {solution.short} →
              </Link>
            </Reveal>
          </div>

          {/* Right: how it works */}
          <div>
            <Reveal delay={0.08}>
              <div className="mono-label" style={{
                color: isDark ? "rgba(255,255,255,0.6)" : "var(--gray-400)",
                marginBottom: 20
              }}>
                How it works
              </div>
            </Reveal>
            <div className="flow-row">
              {solution.flow.map((step, i) => (
                <Reveal key={step.t} delay={0.14 + i * 0.08} className="flow-step">
                  <div className="flow-num" style={{ color: solution.color }}>0{i + 1}</div>
                  <div className="flow-title" style={{ color: isDark ? "white" : "var(--navy-900)" }}>
                    {step.t}
                  </div>
                  <div className="flow-desc" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "var(--gray-400)" }}>
                    {step.d}
                  </div>
                  {i < solution.flow.length - 1 && <div className="flow-arrow" aria-hidden>→</div>}
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div style={{ marginTop: 36 }}>
                <div className="mono-label" style={{
                  color: isDark ? "rgba(255,255,255,0.6)" : "var(--gray-400)",
                  marginBottom: 14
                }}>Stack</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {solution.stack.map((t) => (
                    <span key={t} style={{
                      fontFamily: "var(--mono-font)",
                      fontSize: 12,
                      letterSpacing: "0.04em",
                      padding: "6px 10px",
                      borderRadius: 6,
                      border: isDark ? "1px solid rgba(255,255,255,0.14)" : "1px solid var(--gray-100)",
                      color: isDark ? "rgba(255,255,255,0.78)" : "var(--gray-800)",
                      background: isDark ? "rgba(255,255,255,0.04)" : "white"
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.38}>
              <div style={{
                marginTop: 28,
                padding: 20,
                borderRadius: 12,
                background: isDark ? "rgba(255,255,255,0.04)" : "white",
                border: isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid var(--gray-100)"
              }}>
                <div className="mono-label" style={{ color: solution.color, marginBottom: 8 }}>Who pays</div>
                <p style={{
                  color: isDark ? "rgba(255,255,255,0.78)" : "var(--gray-800)",
                  fontSize: 14.5, lineHeight: 1.6
                }}>
                  {solution.payer}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      <style>{`
        .solution-block-grid { display: grid; grid-template-columns: 1fr; gap: 56px; }
        @media (min-width: 1000px) {
          .solution-block-grid { grid-template-columns: 0.9fr 1.3fr; gap: 96px; }
        }
        .flow-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; position: relative; }
        @media (min-width: 700px) { .flow-row { grid-template-columns: repeat(4, 1fr); gap: 14px; } }
        .flow-step { position: relative; padding-top: 18px; border-top: 1px solid ${isDark => "rgba(255,255,255,0.12)"}; }
        .flow-step .flow-num {
          font-family: var(--mono-font); font-size: 12px; letter-spacing: 0.1em;
          margin-bottom: 8px; font-weight: 500;
        }
        .flow-step .flow-title {
          font-family: var(--display-font); font-weight: 600; font-size: 16px; margin-bottom: 6px;
        }
        .flow-step .flow-desc { font-size: 13px; line-height: 1.55; }
        .flow-arrow { display: none; position: absolute; right: -11px; top: 30px; opacity: 0.35; }
      `}</style>
    </section>
  );
}

function SolutionsPage() {
  return (
    <main id="main">
      <SolutionsHero />
      {window.SOLUTIONS.map((s, i) => (
        <SolutionBlock key={s.slug} solution={s} index={i} />
      ))}
      <CTAStrip />
    </main>
  );
}

function CTAStrip() {
  return (
    <section className="bg-teal" style={{ padding: "72px 0" }}>
      <div className="container" style={{
        display: "flex", flexWrap: "wrap", gap: 24,
        justifyContent: "space-between", alignItems: "center"
      }}>
        <Reveal>
          <h2 className="h1" style={{ color: "white", maxWidth: 720 }}>
            Have a specific problem? Let's scope it together.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/contact" className="btn btn-white">Start a conversation →</Link>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Individual Solution Detail Page ----------
function SolutionDetail({ slug }) {
  const s = window.SOLUTIONS.find((x) => x.slug === slug);
  if (!s) return <NotFoundInline />;

  return (
    <main id="main">
      <section style={{
        position: "relative",
        background: "var(--navy-950)",
        color: "white",
        paddingTop: 160,
        paddingBottom: 96,
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: `radial-gradient(600px circle at 80% 0%, ${s.color}38, transparent 60%), radial-gradient(900px circle at 20% 100%, ${s.color}20, transparent 60%)`
        }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <Reveal>
            <Link to="/solutions" style={{
              fontFamily: "var(--mono-font)", fontSize: 12,
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.6)", marginBottom: 40, display: "inline-block"
            }}>
              ← Back to solutions
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <span style={{ width: 48, height: 4, background: s.color, borderRadius: 2 }} />
              <span className="mono-label" style={{ color: s.color }}>Vertical {s.number}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-l" style={{ color: "white", marginBottom: 20, maxWidth: 900 }}>
              {s.name}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="body-l" style={{ color: "rgba(255,255,255,0.75)", maxWidth: 720 }}>
              {s.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Problem statement */}
      <section className="bg-gray-50">
        <div className="container">
          <div className="detail-two-col">
            <Reveal>
              <div>
                <span className="eyebrow">The problem</span>
                <h2 className="h1" style={{ color: "var(--navy-900)", maxWidth: 380 }}>
                  Where the friction lives.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                {s.problem.map((p, i) => (
                  <p key={i} className="body-l" style={{ marginBottom: 20 }}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white">
        <div className="container">
          <Reveal>
            <span className="eyebrow">How it works</span>
            <h2 className="display-l" style={{ color: "var(--navy-900)", marginBottom: 48, maxWidth: 700 }}>
              The flow, end to end.
            </h2>
          </Reveal>
          <div className="detail-flow">
            {s.flow.map((step, i) => (
              <Reveal key={step.t} delay={i * 0.08}>
                <div className="detail-flow-card">
                  <div style={{
                    fontFamily: "var(--mono-font)", fontSize: 12,
                    letterSpacing: "0.1em", color: s.color, marginBottom: 12
                  }}>STEP 0{i + 1}</div>
                  <h3 className="h3" style={{ color: "var(--navy-900)", marginBottom: 10 }}>{step.t}</h3>
                  <p style={{ color: "var(--gray-800)", opacity: 0.8, fontSize: 14.5, lineHeight: 1.6 }}>
                    {step.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="bg-gray-50">
        <div className="container">
          <div className="detail-two-col">
            <Reveal>
              <div>
                <span className="eyebrow">Tech stack</span>
                <h2 className="h1" style={{ color: "var(--navy-900)", maxWidth: 420 }}>
                  Built with the right tools for the job.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 14 }}>
                {s.stack.map((t, i) => (
                  <div key={t} style={{
                    padding: "18px 22px",
                    background: "white", border: "1px solid var(--gray-100)",
                    borderRadius: 12,
                    display: "flex", alignItems: "center", gap: 16
                  }}>
                    <span style={{ width: 8, height: 8, borderRadius: 50, background: s.color }} />
                    <span style={{
                      fontFamily: "var(--mono-font)", fontSize: 13,
                      letterSpacing: "0.04em", color: "var(--navy-900)",
                      fontWeight: 500, minWidth: 160
                    }}>{t}</span>
                    <span style={{ color: "var(--gray-400)", fontSize: 14 }}>
                      {stackExplain(t)}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who pays + Risk + MVP */}
      <section className="bg-white">
        <div className="container">
          <div className="detail-three-col">
            <Reveal>
              <div className="detail-info-card">
                <span className="mono-label" style={{ color: s.color }}>Who pays</span>
                <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.6 }}>{s.payer}</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="detail-info-card">
                <span className="mono-label" style={{ color: s.color }}>Execution risk</span>
                <div style={{ marginTop: 14, fontFamily: "var(--display-font)", fontWeight: 700, fontSize: 28, color: "var(--navy-900)" }}>
                  {s.risk}
                </div>
                <p style={{ marginTop: 10, fontSize: 14, color: "var(--gray-400)" }}>
                  Scored internally against technical complexity, integration cost, and regulatory exposure.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="detail-info-card">
                <span className="mono-label" style={{ color: s.color }}>90-day MVP</span>
                <p style={{ marginTop: 14, fontSize: 15, lineHeight: 1.6 }}>{s.mvp}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: s.color, padding: "72px 0" }}>
        <div className="container" style={{
          display: "flex", flexWrap: "wrap", gap: 24,
          justifyContent: "space-between", alignItems: "center"
        }}>
          <Reveal>
            <h2 className="h1" style={{ color: "white", maxWidth: 640 }}>
              Interested in this solution? Let's talk.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/contact" className="btn btn-white">Start a conversation →</Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        .detail-two-col { display: grid; grid-template-columns: 1fr; gap: 48px; }
        @media (min-width: 900px) { .detail-two-col { grid-template-columns: 1fr 1.3fr; gap: 80px; } }
        .detail-flow { display: grid; grid-template-columns: 1fr; gap: 18px; }
        @media (min-width: 700px) { .detail-flow { grid-template-columns: repeat(4, 1fr); gap: 18px; } }
        .detail-flow-card {
          padding: 28px;
          border: 1px solid var(--gray-100);
          background: white;
          border-radius: 14px;
          height: 100%;
        }
        .detail-three-col { display: grid; grid-template-columns: 1fr; gap: 18px; }
        @media (min-width: 800px) { .detail-three-col { grid-template-columns: repeat(3, 1fr); gap: 20px; } }
        .detail-info-card {
          padding: 28px;
          background: var(--gray-50);
          border-radius: 14px;
          height: 100%;
        }
      `}</style>
    </main>
  );
}

function stackExplain(t) {
  const m = {
    "MQTT": "Lightweight pub/sub protocol used by most solar inverters.",
    "AWS IoT": "Managed device gateway and rules engine.",
    "TimescaleDB": "Postgres extension optimised for time-series telemetry.",
    "Python · FastAPI": "Service layer for pipelines and APIs.",
    "LLM Summaries": "Generates human-readable weekly performance reports.",
    "Next.js": "Operator dashboards and public-facing apps.",
    "LLM Orchestration": "Routes queries to the right model with guardrails.",
    "Twilio": "Voice, SMS, and WhatsApp channels for customer contact.",
    "Vector Search": "Semantic retrieval over knowledge bases and past tickets.",
    "Supabase": "Auth, Postgres, and storage with generous free tier.",
    "Looker": "Business-facing analytics and QA dashboards.",
    "Postgres": "Primary relational store for declarations and rules.",
    "Rule Engine": "Declarative validation against live corridor rule sets.",
    "OCR + LLM": "Extracts structured fields from scanned invoices and BoL.",
    "PowerBI": "Finance and compliance reporting for large clients.",
    "Mapbox": "Corridor heatmaps and shipment routing visualisations.",
    "Stripe Connect": "Split payouts to creators, crew, and partners.",
    "Cloudflare R2": "Low-cost object storage for media assets.",
    "LLM Search": "Natural-language search across locations and crew."
  };
  return m[t] || "Purpose-selected for this workflow.";
}

function NotFoundInline() {
  return (
    <main id="main" style={{ minHeight: "80vh", display: "flex", alignItems: "center" }}>
      <div className="container">
        <span className="eyebrow">404</span>
        <h1 className="display-l" style={{ color: "var(--navy-900)" }}>
          That page doesn't exist.
        </h1>
        <p className="body-l" style={{ marginTop: 20, marginBottom: 28, color: "var(--gray-400)" }}>
          Try one of the solutions below, or head home.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link to="/" className="btn btn-primary">Go home</Link>
          <Link to="/solutions" className="btn btn-secondary-light">See solutions</Link>
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { SolutionsPage, SolutionDetail, NotFoundInline });
