import { useState } from "react";

const LIGHT = {
  bg: "#F5F0E8", surface: "#ffffff", surface2: "#EDE7D9",
  text: "#1A3D4A", muted: "rgba(26,61,74,0.6)", dim: "rgba(26,61,74,0.45)",
  border: "rgba(26,61,74,0.08)", headerBg: "#072C2C",
  cardShadow: "0 2px 8px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)",
  navBtn: "rgba(255,255,255,0.05)", navTxt: "rgba(255,255,255,0.65)",
};
const DARK = {
  bg: "#041f1f", surface: "#072C2C", surface2: "#0a3535",
  text: "#EDB810", muted: "rgba(237,184,16,0.7)", dim: "rgba(237,184,16,0.5)",
  border: "rgba(237,184,16,0.1)", headerBg: "#020f0f",
  cardShadow: "0 2px 8px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)",
  navBtn: "rgba(237,184,16,0.07)", navTxt: "rgba(237,184,16,0.7)",
};

export default function Home() {
  const [dark, setDark] = useState(false);
  const T = dark ? DARK : LIGHT;

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", background: T.bg, minHeight: "100vh", transition: "background 0.3s, color 0.3s" }}>
      <header style={{ background: T.headerBg, position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 20px rgba(0,0,0,0.3)", transition: "background 0.3s" }}>
        <div style={{ height: "4px", background: "linear-gradient(90deg, #F07A1A 0%, #F07A1A 33%, #EDB810 33%, #EDB810 66%, #2D8B3A 66%, #2D8B3A 100%)" }} />
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
            <img src="/assets/mgsn-logo-main.png" alt="MGSN - Mabopane Green Space Network" style={{ height: "38px", width: "auto" }} />
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "#EDB810", lineHeight: 1.2 }}>MGSN</div>
              <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.5px", marginTop: "1px" }}>Mabopane Green Space Network</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "100px", padding: "6px 14px", flexShrink: 0 }}>
            <span style={{ fontSize: "18px" }}>☀️</span>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: 800, color: "#fff", lineHeight: 1 }}>12°C</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "1px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", marginTop: "1px" }}>Mabopane · Block M</div>
            </div>
          </div>
          <nav style={{ display: "flex", gap: "6px", alignItems: "center", flexShrink: 0 }} className="nav-links">
            {[["/noticeboard","📋 Notice Board"],["/volunteer","🌿 Our Story"],["/register","🤝 Register"]].map(([href, label]) => (
              <a key={href} href={"#"+href} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: T.navTxt, textDecoration: "none", padding: "7px 12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", background: T.navBtn, transition: "all 0.18s", whiteSpace: "nowrap" }}>
                {label}
              </a>
            ))}
            <button onClick={() => setDark(d => !d)} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#EDB810", background: "rgba(237,184,16,0.1)", border: "1px solid rgba(237,184,16,0.3)", borderRadius: "8px", padding: "7px 12px", cursor: "pointer" }}>
              {dark ? "☀️ Light" : "◐ Dark"}
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: "420px", display: "flex", alignItems: "center" }}>
        <img src="/assets/block-m-waterfall-hero.gif" alt="Block M Waterfall Park" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(7,44,44,0.85) 0%, rgba(7,44,44,0.5) 100%)", zIndex: 1 }} />
        <div style={{ maxWidth: "960px", width: "100%", margin: "0 auto", padding: "52px 20px 48px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" }}>
            <div style={{ width: "6px", height: "6px", background: "#EDB810", borderRadius: "50%" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "#EDB810" }}>Block M Waterfall Park · Mabopane</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,5vw,58px)", fontWeight: 900, color: "#fff", lineHeight: 1.02, marginBottom: "8px", letterSpacing: "-0.5px", textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
            Re a leboga,<br /><span style={{ color: "#EDB810", fontStyle: "italic" }}>Mabopane.</span>
          </h1>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: "14px" }}>
            Morafe o tshesha lefatshe — The community that tends the land, shapes it.
          </p>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, maxWidth: "480px", marginBottom: "22px", textShadow: "0 1px 6px rgba(0,0,0,0.25)" }}>
            We are Mabopane's own green movement. Fortnightly clean-ups, indigenous reforestation, and stream restoration at Block M Waterfall Park — led by residents, for residents.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="#/register" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#F07A1A", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", padding: "14px 24px", borderRadius: "100px", textDecoration: "none", boxShadow: "0 4px 18px rgba(240,122,26,0.35)" }}>
              Join the Movement
            </a>
            <a href="#/noticeboard" style={{ display: "inline-flex", alignItems: "center", gap: "6px", border: "2px solid rgba(255,255,255,0.3)", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", padding: "12px 20px", borderRadius: "100px", textDecoration: "none" }}>
              📋 Notice Board
            </a>
          </div>
          <div style={{ display: "flex", gap: "14px", marginTop: "22px", flexWrap: "wrap" }}>
            {["Fortnightly Sessions", "All Ages Welcome", "Earn Rewards"].map(m => (
              <div key={m} style={{ display: "flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "100px", padding: "5px 11px", fontSize: "10px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: "1px", color: "rgba(255,255,255,0.8)", textTransform: "uppercase" }}>{m}</div>
            ))}
          </div>
        </div>
      </section>

      {/* NEXT SESSIONS */}
      <section style={{ background: "linear-gradient(135deg, #072C2C 0%, #0D5050 100%)", padding: "32px 20px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
          <div style={{ flexShrink: 0, position: "relative" }}>
            <img src="/images/workshop-poster-26may.jpg" alt="May Sessions Poster" style={{ width: "140px", height: "180px", objectFit: "cover", borderRadius: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }} />
            <div style={{ position: "absolute", top: "-10px", left: "-10px", background: "#F07A1A", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", padding: "4px 10px", borderRadius: "100px" }}>Next Sessions</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "6px" }}>📅 Saturday, 23 May 2026</div>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "clamp(13px,2vw,16px)", fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", color: "#EDB810", marginBottom: "6px" }}>
              🧤 Clean-Up Session
            </h2>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px,3vw,28px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: "8px" }}>
              Session 3 — Block M Waterfall Park
            </h3>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "14px" }}>
              {["🕗 08:00–12:00", "📍 Timber Shelter", "🌿 Invasives removal", "🌱 Indigenous planting"].map(d => (
                <span key={d} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>{d}</span>
              ))}
            </div>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.55, marginBottom: "16px" }}>
              Bring the family. We'll clear invasives, plant indigenous species, and restore the stream bank. The UP team joins us for a plant ID workshop after. Refreshments provided — vouchers for regular volunteers.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="#/register" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#F07A1A", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", padding: "10px 20px", borderRadius: "100px", textDecoration: "none" }}>Register Now →</a>
              <a href="#/noticeboard" style={{ display: "inline-flex", alignItems: "center", gap: "6px", border: "2px solid rgba(255,255,255,0.2)", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", padding: "9px 18px", borderRadius: "100px", textDecoration: "none" }}>View Notice Board</a>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", right: "-50px", bottom: "-50px", width: "180px", height: "180px", borderRadius: "50%", border: "45px solid rgba(255,255,255,0.03)" }} />
      </section>

      {/* UNVEILING EVENT */}
      <section style={{ background: "linear-gradient(135deg, #1a3a1a 0%, #2d5a1e 100%)", padding: "28px 20px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
          <div style={{ flexShrink: 0, textAlign: "center" }}>
            <div style={{ width: "72px", height: "72px", background: "rgba(237,184,16,0.15)", border: "2px solid rgba(237,184,16,0.4)", borderRadius: "16px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "28px", fontWeight: 900, color: "#EDB810" }}>26</span>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", color: "rgba(237,184,16,0.7)", textTransform: "uppercase" }}>May</span>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "inline-block", background: "rgba(237,184,16,0.15)", border: "1px solid rgba(237,184,16,0.3)", borderRadius: "100px", padding: "3px 10px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#EDB810", marginBottom: "8px" }}>🎉 Signage Unveiling</div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "6px" }}>📅 Tuesday, 26 May 2026</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(18px,3vw,26px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "10px" }}>
              Green Spaces Signage<br /><span style={{ color: "#EDB810" }}>Unveiling Ceremony</span>
            </h2>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "6px" }}>Hi there, Green Friends</p>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "14px" }}>We are excited to invite you to the unveiling of the signage for the green spaces. Join us on the 26th May!</p>
            <div style={{ background: "rgba(237,184,16,0.1)", border: "1px solid rgba(237,184,16,0.3)", borderRadius: "10px", padding: "10px 16px", marginBottom: "14px" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 800, color: "#EDB810", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>⚠️ Space is Limited</div>
              <a href="https://forms.gle/K1erbiiDNUTfg4YV7" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "13px", fontWeight: 700, color: "#fff", textDecoration: "none" }}>→ RSVP via Google Form</a>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a href="https://forms.gle/K1erbiiDNUTfg4YV7" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#EDB810", color: "#1a3a1a", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", padding: "10px 20px", borderRadius: "100px", textDecoration: "none" }}>RSVP Now 🤩🌱</a>
              <a href="#/noticeboard" style={{ display: "inline-flex", alignItems: "center", gap: "6px", border: "2px solid rgba(255,255,255,0.2)", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", padding: "9px 18px", borderRadius: "100px", textDecoration: "none" }}>See Full Notice Board</a>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section style={{ background: T.surface, borderBottom: "1px solid " + T.border, padding: "20px", transition: "all 0.3s" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", textAlign: "center" }}>
          {[["3", "Clean-Up Sessions Run", "Since April 2026"], ["60+", "Registered Volunteers", "Across Block M"], ["2", "Partner Institutions", "UP · City of Tshwane"], ["12+", "Sessions Planned", "Through December 2026"]].map(item => (
            <div key={item[1]} style={{ padding: "8px 16px", borderRight: "1px solid " + T.border }}>
              <p style={{ fontSize: "28px", fontWeight: 900, color: dark ? "#EDB810" : "#0D5050" }}>{item[0]}</p>
              <p style={{ fontSize: "12px", fontWeight: 600, color: dark ? "#fff" : "#1A3D4A", marginTop: "2px" }}>{item[1]}</p>
              <p style={{ fontSize: "10px", color: T.muted, marginTop: "2px" }}>{item[2]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NOTICE BOARD PREVIEW */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "40px 20px 60px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "20px" }}>📋</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: T.dim }}>Latest from the Notice Board</h2>
          </div>
          <a href="#/noticeboard" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: dark ? "#EDB810" : "#0D5050", textDecoration: "none" }}>Full Notice Board →</a>
        </div>
        <div style={{ display: "grid", gap: "12px" }}>
          {[
            { cat: "notice", bar: "linear-gradient(90deg, #2D8B3A, #1E6028)", badge: "Event", badgeBg: dark ? "#0a3535" : "#E8F5EA", badgeColor: dark ? "#EDB810" : "#1E6028", title: "Green Spaces Signage Unveiling — 26 May 2026", body: "Join us for the unveiling of the green spaces signage at Block M Waterfall Park. Space is limited — RSVP via the Google Form link on the homepage.", date: "18 May 2026", author: "MGSN Management", href: "#/noticeboard" },
            { cat: "urgent", bar: "linear-gradient(90deg, #C0392B, #8B1C14)", badge: "Urgent", badgeBg: "#FDECEA", badgeColor: "#C0392B", title: "Freedom Day Launch — Monday 27 April 2026", body: "First clean-up session at Block M Waterfall Park. 24°C, clear skies. Meet at the timber shelter at 08:00. Gloves and bags provided. Re a leboga for showing up.", date: "26 April 2026", author: "MGSN Management", href: "#/noticeboard" },
            { cat: "news", bar: "linear-gradient(90deg, #1B7A7A, #0D5050)", badge: "Update", badgeBg: dark ? "#0a3535" : "#E6F4F4", badgeColor: dark ? "#EDB810" : "#0D5050", title: "Solar Floodlights Now Running at Block M Waterfall Park", body: "Two 12-metre timber poles with solar-powered floodlights are now installed. The park stays lit after dark — a real win for the community.", date: "25 April 2026", author: "Bra Tshego — MGSN", href: "#/noticeboard" },
          ].map(post => (
            <div key={post.title} style={{ background: T.surface, borderRadius: "14px", overflow: "hidden", boxShadow: T.cardShadow, border: "1px solid " + T.border, transition: "all 0.3s" }}>
              <div style={{ height: "3.5px", background: post.bar }} />
              <div style={{ padding: "16px 18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ padding: "3px 8px", borderRadius: "100px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", background: post.badgeBg, color: post.badgeColor }}>{post.badge}</span>
                  <span style={{ fontSize: "10px", color: T.dim, marginLeft: "auto" }}>{post.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 700, color: dark ? "#fff" : "#1A3D4A", lineHeight: 1.25, marginBottom: "6px" }}>{post.title}</h3>
                <p style={{ fontSize: "13px", color: T.muted, lineHeight: 1.6, marginBottom: "12px" }}>{post.body}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "10px", borderTop: "1px solid " + T.border }}>
                  <span style={{ fontSize: "11px", fontWeight: 600, color: T.muted }}>{post.author}</span>
                  <a href={post.href} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: dark ? "#EDB810" : "#0D5050", textDecoration: "none" }}>Read more →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WOULD YOU LIKE TO DO */}
      <section style={{ background: T.surface, borderTop: "1px solid " + T.border, borderBottom: "1px solid " + T.border, padding: "40px 20px", transition: "all 0.3s" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: T.dim, marginBottom: "16px" }}>What would you like to do?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
            {[
              { icon: "📋", title: "Notice Board", sub: "Session updates, announcements, community news. Stay in the loop.", href: "#/noticeboard", color: "#1B7A7A" },
              { icon: "🤝", title: "Register to Volunteer", sub: "Join the green team. Earn rewards, learn new skills, meet your neighbours.", href: "#/register", color: "#F07A1A" },
              { icon: "🌿", title: "Our Story", sub: "How a community came together to reclaim Block M Waterfall Park.", href: "#/volunteer", color: "#2D8B3A" },
              { icon: "💬", title: "Chat with MGSN", sub: "Questions, ideas, or partnership enquiries. We reply promptly.", href: "mailto:tshegofatso@duck.com", color: "#1565C0" },
            ].map(item => (
              <a key={item.title} href={item.href} style={{ background: T.surface2, borderRadius: "14px", padding: "20px 18px", textDecoration: "none", border: "1px solid " + T.border, display: "flex", flexDirection: "column", gap: "8px", boxShadow: T.cardShadow, transition: "all 0.3s" }}>
                <span style={{ fontSize: "28px" }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: 800, letterSpacing: "0.5px", color: item.color }}>{item.title}</div>
                  <div style={{ fontSize: "12px", color: T.muted, lineHeight: 1.4, marginTop: "4px" }}>{item.sub}</div>
                </div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: item.color, marginTop: "auto" }}>Open →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section style={{ background: "linear-gradient(135deg, #072C2C, #0D5050)", padding: "40px 20px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
          <div style={{ flexShrink: 0, textAlign: "center" }}>
            <img src="/images/whatsapp-qr.png" alt="MGSN WhatsApp QR" style={{ width: "110px", height: "110px", borderRadius: "12px", border: "3px solid rgba(255,255,255,0.2)", display: "block" }} />
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginTop: "6px" }}>Scan to join</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "6px" }}>💬 Your neighbourhood conversation</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px,3vw,28px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "8px" }}>
              MGSN Clean-Up Team-Up<br /><span style={{ color: "#EDB810" }}>WhatsApp Group</span>
            </h2>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "14px" }}>
              Session reminders, volunteer roll-calls, and community news — sent to your phone. No spam. Just Block M news from people who live here.
            </p>
            <a href="#/register" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#25D366", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", padding: "10px 18px", borderRadius: "100px", textDecoration: "none" }}>
              📱 Register to Join
            </a>
          </div>
        </div>
        <div style={{ position: "absolute", right: "-50px", bottom: "-50px", width: "180px", height: "180px", borderRadius: "50%", border: "45px solid rgba(255,255,255,0.03)", pointerEvents: "none" }} />
      </section>

      <footer style={{ background: T.headerBg, padding: "32px 20px", textAlign: "center", transition: "background 0.3s" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <img src="/assets/mgsn-logo-main.png" alt="MGSN" style={{ height: "40px", width: "auto", margin: "0 auto 14px", display: "block", objectFit: "contain" }} />
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", margin: "12px 0 16px", flexWrap: "wrap" }}>
            {[["#/", "Home"], ["#/noticeboard", "Notice Board"], ["#/volunteer", "Our Story"], ["#/register", "Register"], ["mailto:tshegofatso@duck.com", "Contact"]].map(([href, label]) => (
              <a key={label} href={href} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{label}</a>
            ))}
          </div>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", lineHeight: 1.7 }}>
            Mabopane Green Space Network · NPC Reg. 2025/422818/08<br />
            Block M Waterfall Park · Mabopane, City of Tshwane<br />
            <span style={{ fontStyle: "italic" }}>Kgosi ya lefatshe ke morafe — A community owns its land.</span>
          </div>
          <div style={{ height: "3px", background: "linear-gradient(90deg, #F07A1A, #EDB810, #2D8B3A)", width: "60px", margin: "20px auto 0", borderRadius: "100px" }} />
        </div>
      </footer>
    </div>
  );
}