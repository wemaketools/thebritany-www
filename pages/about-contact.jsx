// About + Contact pages

const { Link, Reveal } = window;

function AboutPage() {
  const values = [
    {
      t: "Specificity over generics",
      d: "We build for exact problems, not broad markets. A product that does one thing exceptionally well beats one that does ten things passably.",
    },
    {
      t: "Ship, then improve",
      d: "Working software in weeks, not decks and workshops. We'd rather get 60% of it wrong in production than 100% of it right in a deck.",
    },
    {
      t: "Local roots, global standards",
      d: "African context, internationally competitive execution. We hold ourselves to the same engineering bar as any firm in London or New York.",
    },
    {
      t: "Long-term partners",
      d: "We stay on after launch. We do not disappear. The software improves as your operations do, and we stay accountable for that improvement.",
    },
  ];

  // Bio structure (Showcase Request Pack §7): title · location · capability · proof.
  const team = [
    {
      n: "Kabo Botlhole",
      r: "Founder & Market Lead",
      loc: "Gaborone, Botswana",
      cap: "Insurance and digital transformation, with deep local client context.",
      proof: "Leads The Brittany's Botswana market entry and the QuoteIQ insurance wedge.",
    },
    {
      n: "Andrew Hewitt",
      r: "Head of Engineering",
      loc: "Japan",
      cap: "AI, application engineering, and cloud infrastructure.",
      proof: "Has shipped production-grade enterprise platforms across fintech and energy.",
    },
    {
      n: "Thomas Messier",
      r: "Head of Operations",
      loc: "Canada",
      cap: "Delivery, customer operations, and enterprise execution.",
      proof: "Runs delivery and customer operations across our projects.",
    },
    {
      n: "Kwaku Otchere",
      r: "Head of Product",
      loc: "United States",
      cap: "Product, design, and UX for tools busy operators actually use.",
      proof: "Designs and ships the product experience across our platforms.",
    },
  ];

  return (
    <main id="main">
      <section
        className="bg-navy-900"
        style={{
          position: "relative",
          paddingTop: 160,
          paddingBottom: 96,
          overflow: "hidden",
        }}
      >
        <div className="hero-bg" />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <Reveal>
            <span className="mono-label" style={{ color: "var(--teal-400)" }}>
              About · The Brittany
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              className="display-l"
              style={{ color: "white", marginTop: 24, maxWidth: 900 }}
            >
              Built for Africa. Built to last.
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p
              className="body-l"
              style={{
                color: "rgba(255,255,255,0.72)",
                maxWidth: 640,
                marginTop: 20,
              }}
            >
              We are a technology company rooted in Gaborone, Botswana, with a
              distributed engineering and product team across North America,
              Asia, and Africa. We build AI-powered software for enterprises in
              Botswana and the wider region.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50">
        <div className="container">
          <div className="about-two-col">
            <Reveal>
              <div>
                <span className="eyebrow">Why we exist</span>
                <h2
                  className="display-l"
                  style={{ color: "var(--navy-900)", maxWidth: 400 }}
                >
                  The gap between global software and African enterprise.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 22 }}
              >
                <p className="body-l">
                  Global enterprise software is built, priced, and supported for
                  global enterprise buyers. When it lands in an African context,
                  it rarely fits. Integrations break on unreliable connectivity,
                  pricing assumes USD budgets, and support teams have no feel for
                  the workflows they're being asked to fix.
                </p>
                <p className="body-l">
                  The local alternatives are often the opposite problem:
                  under-engineered, built on tight budgets by teams that never
                  had the room to do things properly.
                </p>
                <p className="body-l">
                  We built The Brittany to sit in between. Product thinking, AI
                  engineering, and real commercial experience in the African
                  market, held to a bar that competes globally.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="container">
          <Reveal>
            <span className="eyebrow">How we work</span>
            <h2
              className="display-l"
              style={{
                color: "var(--navy-900)",
                marginBottom: 56,
                maxWidth: 700,
              }}
            >
              Four principles we hold ourselves to.
            </h2>
          </Reveal>
          <div className="values-grid">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.08}>
                <div className="value-card">
                  <div
                    className="mono-label"
                    style={{ color: "var(--teal-500)" }}
                  >
                    Principle 0{i + 1}
                  </div>
                  <h3
                    className="h2"
                    style={{ color: "var(--navy-900)", margin: "14px 0 12px" }}
                  >
                    {v.t}
                  </h3>
                  <p
                    style={{
                      color: "var(--gray-800)",
                      opacity: 0.78,
                      lineHeight: 1.65,
                    }}
                  >
                    {v.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gray-50">
        <div className="container">
          <Reveal>
            <span className="eyebrow">The team</span>
            <h2
              className="display-l"
              style={{
                color: "var(--navy-900)",
                marginBottom: 12,
                maxWidth: 700,
              }}
            >
              Small team. Deep benches.
            </h2>
            <p
              className="body-l muted"
              style={{ maxWidth: 620, marginBottom: 48 }}
            >
              A Botswana-based partner and a distributed engineering and product
              team across North America, Asia, and Africa. Everyone here has
              shipped enterprise software before.
            </p>
          </Reveal>
          <div className="team-grid">
            {team.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.06}>
                <div className="team-card">
                  <div className="avatar" aria-hidden>
                    <span>
                      {p.n
                        .split(" ")
                        .map((x) => x[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="mono-label muted" style={{ marginTop: 20 }}>
                    {p.r}
                  </div>
                  <h3
                    className="h3"
                    style={{
                      color: "var(--navy-900)",
                      marginTop: 6,
                      marginBottom: 4,
                    }}
                  >
                    {p.n}
                  </h3>
                  <div
                    style={{
                      fontFamily: "var(--mono-font)",
                      fontSize: 11.5,
                      letterSpacing: "0.04em",
                      color: "var(--teal-500)",
                      marginBottom: 12,
                    }}
                  >
                    {p.loc}
                  </div>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: "var(--gray-800)",
                      opacity: 0.78,
                      marginBottom: 14,
                    }}
                  >
                    {p.cap}
                  </p>
                  <div className="team-proof">
                    <span className="mono-label" style={{ color: "var(--gray-400)", fontSize: 10.5, display: "block", marginBottom: 5 }}>
                      Proof
                    </span>
                    {p.proof}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal" style={{ padding: "72px 0" }}>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <Reveal>
            <h2 className="h1" style={{ color: "white", maxWidth: 640 }}>
              Want to build with us?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/contact" className="btn btn-white">
              Get in touch →
            </Link>
          </Reveal>
        </div>
      </section>

      <style>{`
        .about-two-col { display: grid; grid-template-columns: 1fr; gap: 48px; }
        @media (min-width: 900px) { .about-two-col { grid-template-columns: 1fr 1.2fr; gap: 96px; } }
        .values-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 800px) { .values-grid { grid-template-columns: 1fr 1fr; gap: 24px; } }
        .value-card {
          padding: 36px;
          border: 1px solid var(--gray-100);
          border-radius: 16px;
          background: var(--gray-50);
          height: 100%;
        }
        .team-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        @media (min-width: 800px) { .team-grid { grid-template-columns: repeat(4, 1fr); } }
        .team-card {
          padding: 28px;
          background: white;
          border: 1px solid var(--gray-100);
          border-radius: 14px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .team-proof {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid var(--gray-100);
          font-size: 13px;
          line-height: 1.55;
          color: var(--gray-800);
          opacity: 0.86;
        }
        .avatar {
          width: 72px; height: 72px;
          border-radius: 14px;
          background: linear-gradient(135deg, var(--navy-900), var(--teal-500));
          display: flex; align-items: center; justify-content: center;
          color: white; font-family: var(--display-font);
          font-weight: 700; font-size: 22px; letter-spacing: 0.04em;
        }
      `}</style>
    </main>
  );
}

// ---------- Contact ----------
function ContactPage() {
  const [form, setForm] = React.useState({
    name: "",
    company: "",
    email: "",
    solution: "",
    problem: "",
  });
  const [errs, setErrs] = React.useState({});
  const [state, setState] = React.useState("idle"); // idle | submitting | success | error

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Your name is required.";
    if (!form.company.trim()) e.company = "Company is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Use a valid email address.";
    if (!form.problem.trim())
      e.problem = "Tell us what you're trying to solve.";
    else if (form.problem.trim().length < 20)
      e.problem = "A bit more context, please (minimum 20 characters).";
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrs(e);
    if (Object.keys(e).length) return;
    setState("submitting");
    // Simulate API call
    await new Promise((r) => setTimeout(r, 900));
    setState("success");
  };

  return (
    <main id="main">
      <section
        className="bg-navy-900"
        style={{
          position: "relative",
          paddingTop: 150,
          paddingBottom: 72,
          overflow: "hidden",
        }}
      >
        <div className="hero-bg" />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <Reveal>
            <span className="mono-label" style={{ color: "var(--teal-400)" }}>
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display-l" style={{ color: "white", marginTop: 20 }}>
              Let's build something.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-gray-50" style={{ paddingTop: 72 }}>
        <div className="container">
          <div className="contact-grid">
            {/* Left column */}
            <div>
              <Reveal>
                <p
                  className="body-l"
                  style={{ maxWidth: 440, marginBottom: 18 }}
                >
                  We work best with organisations that have a specific problem
                  they want solved, not organisations that want a general
                  technology review.
                </p>
                <p
                  className="body-l"
                  style={{ maxWidth: 440, marginBottom: 18 }}
                >
                  Send us a few lines about what you're trying to fix and we'll
                  respond within two working days. If it's a fit, we'll book a
                  scoping call. If it isn't, we'll tell you that too.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div style={{ marginTop: 36 }}>
                  <div
                    className="mono-label"
                    style={{ color: "var(--teal-500)", marginBottom: 18 }}
                  >
                    Good fit signals
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: 14,
                    }}
                  >
                    {[
                      "You have a real operational pain that costs money or time.",
                      "You want a partner who ships, not just advises.",
                      "You're operating in Botswana or the broader SADC region.",
                    ].map((t) => (
                      <li
                        key={t}
                        style={{
                          display: "flex",
                          gap: 12,
                          alignItems: "flex-start",
                        }}
                      >
                        <span
                          style={{
                            marginTop: 9,
                            width: 8,
                            height: 8,
                            borderRadius: 50,
                            background: "var(--teal-500)",
                            flex: "0 0 auto",
                          }}
                        />
                        <span style={{ fontSize: 15.5, lineHeight: 1.55 }}>
                          {t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div
                  style={{
                    marginTop: 40,
                    padding: 24,
                    borderRadius: 12,
                    border: "1px solid var(--gray-100)",
                    background: "white",
                  }}
                >
                  <div className="mono-label muted" style={{ marginBottom: 8 }}>
                    Email us directly
                  </div>
                  <a
                    href="mailto:hello@thebrittany.ai"
                    style={{
                      color: "var(--teal-500)",
                      fontWeight: 600,
                      fontSize: 18,
                    }}
                  >
                    hello@thebrittany.ai
                  </a>
                  <div
                    className="mono-label muted"
                    style={{ marginTop: 20, marginBottom: 4 }}
                  >
                    Location
                  </div>
                  <div style={{ fontSize: 15 }}>Gaborone, Botswana</div>
                </div>
              </Reveal>
            </div>

            {/* Right column — form */}
            <div>
              <div className="contact-form-wrap">
                {state === "success" ? (
                  <div className="form-success">
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 50,
                        background: "var(--teal-100)",
                        color: "var(--teal-500)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 22,
                        marginBottom: 20,
                      }}
                    >
                      ✓
                    </div>
                    <h3
                      className="h2"
                      style={{ color: "var(--navy-900)", marginBottom: 12 }}
                    >
                      Message received.
                    </h3>
                    <p
                      style={{
                        color: "var(--gray-800)",
                        opacity: 0.78,
                        marginBottom: 24,
                        lineHeight: 1.65,
                      }}
                    >
                      Thanks, {form.name.split(" ")[0] || "there"}. We'll get
                      back to you within two working days at{" "}
                      <strong>{form.email}</strong>.
                    </p>
                    <button
                      className="btn btn-secondary-light"
                      onClick={() => {
                        setForm({
                          name: "",
                          company: "",
                          email: "",
                          solution: "",
                          problem: "",
                        });
                        setState("idle");
                      }}
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} noValidate>
                    <div
                      className="mono-label muted"
                      style={{ marginBottom: 18 }}
                    >
                      Tell us about the problem
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 16,
                      }}
                      className="name-row"
                    >
                      <div className="form-field">
                        <label htmlFor="name">Name *</label>
                        <input
                          id="name"
                          type="text"
                          value={form.name}
                          onChange={update("name")}
                          placeholder="Your name"
                        />
                        {errs.name && <div className="err">{errs.name}</div>}
                      </div>
                      <div className="form-field">
                        <label htmlFor="company">Company *</label>
                        <input
                          id="company"
                          type="text"
                          value={form.company}
                          onChange={update("company")}
                          placeholder="Your organisation"
                        />
                        {errs.company && (
                          <div className="err">{errs.company}</div>
                        )}
                      </div>
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">Email *</label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={update("email")}
                        placeholder="you@company.com"
                      />
                      {errs.email && <div className="err">{errs.email}</div>}
                    </div>
                    <div className="form-field">
                      <label htmlFor="solution">
                        Which area is closest to your problem?
                      </label>
                      <select
                        id="solution"
                        value={form.solution}
                        onChange={update("solution")}
                      >
                        <option value="">Select one...</option>
                        <option value="insurance">Insurance & Financial Services</option>
                        <option value="ai-workflow">AI Workflow Automation</option>
                        <option value="enterprise-apps">Custom Enterprise Apps</option>
                        <option value="dashboards">Dashboards & Control Towers</option>
                        <option value="other">Other</option>
                        <option value="unsure">Not sure yet</option>
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor="problem">
                        Tell us about the problem you're trying to solve *
                      </label>
                      <textarea
                        id="problem"
                        value={form.problem}
                        onChange={update("problem")}
                        placeholder="What's the operational pain? Who does it affect? What have you tried?"
                      />
                      {errs.problem && (
                        <div className="err">{errs.problem}</div>
                      )}
                      <div
                        style={{
                          fontSize: 12,
                          color: "var(--gray-400)",
                          fontFamily: "var(--mono-font)",
                        }}
                      >
                        {form.problem.length} / minimum 20 characters
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={state === "submitting"}
                      style={{
                        marginTop: 12,
                        width: "100%",
                        justifyContent: "center",
                        padding: "14px 22px",
                      }}
                    >
                      {state === "submitting" ? "Sending..." : "Send message →"}
                    </button>
                    <p
                      style={{
                        fontSize: 12,
                        color: "var(--gray-400)",
                        marginTop: 14,
                        fontFamily: "var(--mono-font)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      We reply within two working days. Messages route to
                      hello@thebrittany.ai.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr; gap: 56px; padding-bottom: 40px; }
        @media (min-width: 900px) { .contact-grid { grid-template-columns: 1fr 1.2fr; gap: 80px; } }
        .contact-form-wrap {
          background: white; border: 1px solid var(--gray-100);
          border-radius: 16px; padding: 36px;
          box-shadow: 0 1px 2px rgba(10,15,30,0.04);
        }
        @media (max-width: 500px) {
          .name-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}

Object.assign(window, { AboutPage, ContactPage });
