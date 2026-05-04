// Shared UI: router, navbar, footer, reveal hook

const { useState, useEffect, useRef, useCallback, useMemo, createContext, useContext } = React;

// ---------- Router ----------
// Hash-based router so it works inside the preview with no server.
// Routes: "/", "/solutions", "/solutions/<slug>", "/about", "/contact"

const RouterCtx = createContext({ path: "/", navigate: () => {} });

function useRouter() {
  return useContext(RouterCtx);
}

function RouterProvider({ children }) {
  // Path is the part after "#" up to (but not including) any "#section" anchor.
  // e.g. "#/about#team"  ->  path: "/about", anchor: "team"
  const parse = () => {
    const raw = (window.location.hash || "#/").replace(/^#/, "");
    const [p, anchor] = raw.split("#");
    return { path: p || "/", anchor: anchor || "" };
  };
  const [{ path, anchor }, setState] = useState(parse());

  useEffect(() => {
    const onHash = () => {
      const next = parse();
      setState(next);
      // Defer scroll so the new page can render first
      requestAnimationFrame(() => {
        if (next.anchor) {
          const el = document.getElementById(next.anchor);
          if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
        }
        window.scrollTo({ top: 0, behavior: "auto" });
      });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const navigate = useCallback((to) => {
    const target = to.startsWith("/") ? to : "/" + to;
    // If navigating to the same path with just a different #anchor, hashchange
    // still fires as long as the full hash string differs.
    window.location.hash = target;
  }, []);

  return (
    <RouterCtx.Provider value={{ path, navigate }}>
      {children}
    </RouterCtx.Provider>
  );
}

function Link({ to, children, className, style, onClick }) {
  const { navigate } = useRouter();
  const handle = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to);
  };
  return (
    <a href={"#" + to} className={className} style={style} onClick={handle}>
      {children}
    </a>
  );
}

// ---------- Reveal-on-scroll ----------
function Reveal({ children, delay = 0, as: Tag = "div", className = "", style = {}, ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "-80px 0px" }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={`reveal ${seen ? "in" : ""} ${className}`}
      style={{ "--reveal-delay": delay + "s", ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// ---------- Count up ----------
function CountUp({ to, suffix = "", prefix = "", duration = 1400, format }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          setStarted(true);
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      });
    }, { rootMargin: "-40px 0px" });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration, started]);

  const display = format ? format(val) : Math.round(val).toLocaleString();
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

// ---------- Navbar ----------
function Navbar() {
  const { path } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isHome = path === "/";
  // Dark pages keep transparent navbar over dark hero until scroll
  const darkHeaderPages = ["/", "/solutions", "/about", "/contact"];
  const hasDarkHero = darkHeaderPages.includes(path) || path.startsWith("/solutions/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setDrawerOpen(false), [path]);

  const transparent = hasDarkHero && !scrolled;

  const links = [
    { to: "/solutions", label: "Solutions" },
    { to: "/#how", label: "How We Work" },
    { to: "/about", label: "About" }
  ];

  return (
    <React.Fragment>
      <header className={`navbar ${transparent ? "transparent" : "solid"}`}>
        <div className="navbar-inner">
          <Link to="/" className="nav-logo" style={{ whiteSpace: "nowrap" }}>
            <BuildingLogo size={28} />
            <span>The Brittany</span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={path === l.to ? "active" : ""}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary" style={{ padding: "10px 18px", fontSize: 14 }}>
              Contact
            </Link>
          </nav>
          <button
            className="nav-hamburger"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>
      <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`}>
        <div className="mobile-drawer-head">
          <div className="nav-logo" style={{ color: "white" }}>
            <BuildingLogo size={28} />
            <span>The Brittany</span>
          </div>
          <button
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
            style={{ width: 36, height: 36, color: "white", fontSize: 22 }}
          >✕</button>
        </div>
        <nav className="mobile-drawer-nav">
          <Link to="/solutions" onClick={() => setDrawerOpen(false)}>Solutions</Link>
          <Link to="/#how" onClick={() => setDrawerOpen(false)}>How We Work</Link>
          <Link to="/about" onClick={() => setDrawerOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setDrawerOpen(false)}>Contact</Link>
        </nav>
      </div>
    </React.Fragment>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="nav-logo" style={{ color: "white", marginBottom: 18 }}>
              <BuildingLogo size={28} />
              <span>The Brittany</span>
            </div>
            <p style={{ maxWidth: 360, color: "rgba(255,255,255,0.66)", fontSize: 15, lineHeight: 1.6 }}>
              AI-powered software for African enterprises. Built in Gaborone, deployed across the SADC region.
            </p>

          </div>
          <div>
            <h4>Quick Links</h4>
            <Link to="/solutions">Solutions</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:hello@thebrittany.ai">hello@thebrittany.ai</a>
            <div style={{ padding: "6px 0", fontSize: 15, color: "rgba(255,255,255,0.82)" }}>
              Gaborone, Botswana
            </div>
            <div style={{ padding: "6px 0", fontSize: 15, color: "rgba(255,255,255,0.82)" }}>
              SADC region
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 The Brittany. All rights reserved.</span>
        </div>
      </div>
      <div className="footer-accent-line" />
    </footer>
  );
}

const BuildingLogo = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Base platform */}
    <rect x="1" y="25" width="26" height="2" rx="0.5" fill="currentColor"/>
    {/* Left wing */}
    <rect x="1" y="17" width="7" height="8" fill="currentColor"/>
    {/* Left wing windows */}
    <rect x="2.5" y="18.5" width="1.5" height="2" fill="black" opacity="0.3"/>
    <rect x="5" y="18.5" width="1.5" height="2" fill="black" opacity="0.3"/>
    <rect x="2.5" y="22" width="1.5" height="2" fill="black" opacity="0.3"/>
    <rect x="5" y="22" width="1.5" height="2" fill="black" opacity="0.3"/>
    {/* Right wing */}
    <rect x="20" y="17" width="7" height="8" fill="currentColor"/>
    {/* Right wing windows */}
    <rect x="21.5" y="18.5" width="1.5" height="2" fill="black" opacity="0.3"/>
    <rect x="24" y="18.5" width="1.5" height="2" fill="black" opacity="0.3"/>
    <rect x="21.5" y="22" width="1.5" height="2" fill="black" opacity="0.3"/>
    <rect x="24" y="22" width="1.5" height="2" fill="black" opacity="0.3"/>
    {/* Centre body */}
    <rect x="8" y="13" width="12" height="12" fill="currentColor"/>
    {/* Centre columns (implied by vertical stripes) */}
    <rect x="9.5" y="14" width="1.2" height="11" fill="black" opacity="0.15"/>
    <rect x="12.4" y="14" width="1.2" height="11" fill="black" opacity="0.15"/>
    <rect x="15.3" y="14" width="1.2" height="11" fill="black" opacity="0.15"/>
    <rect x="18.2" y="14" width="1.2" height="11" fill="black" opacity="0.15"/>
    {/* Pediment / cornice */}
    <rect x="7" y="11" width="14" height="2" fill="currentColor"/>
    {/* Central tower */}
    <rect x="11" y="4" width="6" height="7" fill="currentColor"/>
    {/* Tower windows */}
    <rect x="12.5" y="5.5" width="1.2" height="2" fill="black" opacity="0.3"/>
    <rect x="14.8" y="5.5" width="1.2" height="2" fill="black" opacity="0.3"/>
    {/* Tower cap */}
    <polygon points="14,1 17,4 11,4" fill="currentColor"/>
  </svg>
);
window.BuildingLogo = BuildingLogo;

Object.assign(window, { RouterProvider, useRouter, Link, Reveal, CountUp, Navbar, Footer, BuildingLogo });
