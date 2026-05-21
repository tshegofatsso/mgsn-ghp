import { useState, useEffect } from "react";

const LIGHT = {
  bg: "#F5F0E8", surface: "#ffffff", surface2: "#EDE7D9",
  text: "#1A3D4A", muted: "rgba(26,61,74,0.6)", dim: "rgba(26,61,74,0.45)",
  border: "rgba(26,61,74,0.08)", headerBg: "#072C2C",
  cardShadow: "0 2px 8px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)",
  heroGrad: "linear-gradient(135deg, #0D5050 0%, #072C2C 100%)",
  navBtn: "rgba(255,255,255,0.05)", navTxt: "rgba(255,255,255,0.65)",
};
const DARK = {
  bg: "#041f1f", surface: "#072C2C", surface2: "#0a3535",
  text: "#EDB810", muted: "rgba(237,184,16,0.7)", dim: "rgba(237,184,16,0.5)",
  border: "rgba(237,184,16,0.1)", headerBg: "#020f0f",
  cardShadow: "0 2px 8px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)",
  heroGrad: "linear-gradient(135deg, #0a3535 0%, #020f0f 100%)",
  navBtn: "rgba(237,184,16,0.07)", navTxt: "rgba(237,184,16,0.7)",
};

export default function Noticeboard() {
  const [dark, setDark] = useState(false);
  const [filter, setFilter] = useState("All");
  const [weather, setWeather] = useState<any>(null);
  const T = dark ? DARK : LIGHT;
  useEffect(() => {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=-25.49&longitude=28.09&current=temperature_2m,weather_code,wind_speed_10m&hourly=temperature_2m,precipitation_probability&temperature_unit=celsius&wind_speed_unit=kmh&timezone=Africa%2FJohannesburg&forecast_days=1")
      .then(r => r.json()).then(d => setWeather(d)).catch(() => {});
  }, []);
  const posts = [
    { cat: "notice", bar: "linear-gradient(90deg, #2D8B3A, #1E6028)", badge: "Notice", badgeBg: dark ? "#0a3535" : "#E8F5EA", badgeColor: dark ? "#EDB810" : "#1E6028", title: "Volunteer Registration Now Open — Earn Rewards", body: "Register to join the Clean-Up Team-Up group. Volunteers earn points redeemable for vouchers from Shoprite, Cashbuild and food vendors.", date: "24 April 2026", author: "MGSN Management", full: "Join the Clean-Up Team-Up volunteer programme and earn rewards for your time:\n\n• 5 sessions completed → R50 grocery voucher (Shoprite or Checkers)\n• 8 sessions completed → R100 partner voucher (Cashbuild, food vendors, local nurseries)\n• 10+ sessions → Named in the MGSN Annual Report as a Founding Volunteer\n\nHow to register: Click 'Register' in the navigation or scan the WhatsApp QR code to join the group and complete your onboarding session.\n\nNo prior experience needed. Students, retirees, working professionals — all welcome." },
    { cat: "meeting", bar: "linear-gradient(90deg, #1565C0, #0D47A1)", badge: "Meeting", badgeBg: dark ? "#0a3535" : "#E3F0FF", badgeColor: dark ? "#EDB810" : "#1565C0", title: "Committee Meeting Minutes — April 2026", body: "Resolutions passed: (1) Fortnightly volunteer schedule adopted starting 27 April. (2) Volunteer rewards programme approved. (3) UP Architecture partnership acknowledged.", date: "20 April 2026", author: "Thomas Mathiba — Chairperson", full: "Meeting held: 18 April 2026, Mabopane Indoor Centre\nChairperson: Thomas Mathiba\nAttendance: 8 of 11 committee members present\n\nResolutions:\n1. Fortnightly volunteer schedule adopted — sessions starting 27 April\n2. Volunteer Rewards Programme approved in principle\n3. UP Architecture Dept. partnership formally acknowledged\n4. City of Tshwane Environmental Compliance partnership confirmed\n5. Next meeting: 14 May 2026" },
    { cat: "news", bar: "linear-gradient(90deg, #1B7A7A, #0D5050)", badge: "News", badgeBg: dark ? "#0a3535" : "#E6F4F4", badgeColor: dark ? "#EDB810" : "#0D5050", title: "Solar Floodlights Installed at Block M Waterfall Park", body: "Two 12-metre timber poles with solar-powered IK10-rated floodlights installed. Park now lit after dark.", date: "25 April 2026", author: "Bra Tshego — MGSN", full: "Two 12-metre treated timber poles installed with IK10-rated solar-powered LED floodlights. The system includes an anti-climb collar and indigenous thorn planting (Senegalia mellifera) around the base.\n\nSupervision: City of Tshwane Environmental Compliance\nEngineering: CONSUS Engineering\nFunding: Municipal environmental grant" },
    { cat: "urgent", bar: "linear-gradient(90deg, #C0392B, #8B1C14)", badge: "Urgent", badgeBg: "#FDECEA", badgeColor: "#C0392B", title: "Freedom Day Launch — Monday 27 April 2026", body: "First clean-up session at Block M Waterfall. Weather confirmed clear — 24°C. Meet at the timber shelter at 08:00. All welcome.", date: "26 April 2026", author: "MGSN Management", full: "First clean-up session at Block M Waterfall Park. Meet at the timber shelter at 08:00. Weather: clear, 24°C. Wear layers, bring sunscreen and water. Gloves and bags provided. Open to all Mabopane residents.\n\nWhat to expect: Site assessment, invasive species walk, hands-on clearing, plant ID workshop with the UP team, and refreshments." },
  ];
  const events = [
    { day: "27", mo: "APR 2026", title: "Freedom Day Launch — Clean-Up Session 1", meta: "08:00–11:00 · Block M Waterfall Park", badge: "Past", badgeBg: dark ? "#0a3535" : "#EDE9E4", badgeColor: dark ? "#EDB810" : "#888", barColor: "#888" },
    { day: "09", mo: "MAY 2026", title: "Session 2 — May Clean-Up", meta: "08:00–12:00 · Block M Waterfall Park", badge: "Past", badgeBg: dark ? "#0a3535" : "#EDE9E4", badgeColor: dark ? "#EDB810" : "#888", barColor: "#888" },
    { day: "14", mo: "MAY 2026", title: "MGSN Committee Meeting", meta: "18:00 · Mabopane Indoor Centre", badge: "Past", badgeBg: dark ? "#0a3535" : "#EDE9E4", badgeColor: dark ? "#EDB810" : "#888", barColor: "#888" },
    { day: "23", mo: "MAY 2026", title: "Session 3 — Clean-Up Session", meta: "08:00–12:00 · Block M Waterfall Park", badge: "Open", badgeBg: dark ? "#0a3535" : "#E8F5EA", badgeColor: dark ? "#EDB810" : "#1E6028", barColor: "#2D8B3A" },
    { day: "26", mo: "MAY 2026", title: "Green Spaces Signage Unveiling", meta: "📍 Block M Waterfall Park · Open to all", badge: "Open", badgeBg: dark ? "#0a3535" : "#E8F5EA", badgeColor: dark ? "#EDB810" : "#1E6028", barColor: "#2D8B3A" },
    { day: "13", mo: "JUN 2026", title: "Session 4 — June Clean-Up", meta: "08:00–12:00 · Block M Waterfall Park", badge: "Open", badgeBg: dark ? "#0a3535" : "#E8F5EA", badgeColor: dark ? "#EDB810" : "#1E6028", barColor: "#2D8B3A" },
    { day: "27", mo: "JUN 2026", title: "MGSN Committee Meeting", meta: "18:00 · Mabopane Indoor Centre", badge: "Open", badgeBg: dark ? "#0a3535" : "#E3F0FF", badgeColor: dark ? "#EDB810" : "#1565C0", barColor: "#1565C0" },
  ];
  const filters = ["All", "News", "Events", "Notices", "Urgent", "Meetings"];
  const filtered = filter === "All" ? posts : posts.filter(p => p.cat.toLowerCase() === filter.toLowerCase());
  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", background: T.bg, minHeight: "100vh", transition: "all 0.3s" }}>
      <header style={{ background: T.headerBg, position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 20px rgba(0,0,0,0.3)", transition: "background 0.3s" }}>
        <div style={{ height: "4px", background: "linear-gradient(90deg, #F07A1A 0%, #F07A1A 33%, #EDB810 33%, #EDB810 66%, #2D8B3A 66%, #2D8B3A 100%)" }} />
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/assets/mgsn-logo-main.png" alt="MGSN" style={{ height: "38px", width: "auto" }} />
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "#EDB810", lineHeight: 1.2 }}>MGSN</div>
              <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.5px", marginTop: "2px", textTransform: "uppercase" }}>Mabopane Green Space Network</div>
            </div>
          </div>
          {weather && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "100px", padding: "6px 14px", flexShrink: 0 }}>
              <span style={{ fontSize: "18px" }}>☀️</span>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "14px", fontWeight: 800, color: "#fff", lineHeight: 1 }}>{weather.current?.temperature_2m}°C</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "1px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", marginTop: "1px" }}>Mabopane · Block M</div>
              </div>
            </div>
          )}
          <nav style={{ display: "flex", gap: "6px" }} className="hidden-mobile">
            <a href="#/" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: T.navTxt, textDecoration: "none", padding: "7px 12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", background: T.navBtn }}>Home</a>
            <a href="#/volunteer" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: T.navTxt, textDecoration: "none", padding: "7px 12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", background: T.navBtn }}>Our Story</a>
            <a href="#/register" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: T.navTxt, textDecoration: "none", padding: "7px 12px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.08)", background: T.navBtn }}>Register</a>
            <button onClick={() => setDark(d => !d)} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: "#EDB810", background: "rgba(237,184,16,0.1)", border: "1px solid rgba(237,184,16,0.3)", borderRadius: "8px", padding: "7px 12px", cursor: "pointer" }}>{dark ? "☀ Light" : "◐ Dark"}</button>
          </nav>
        </div>
      </header>

      <div style={{ background: T.heroGrad, padding: "28px 20px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "10px" }}>Community Notice Board</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px,4vw,46px)", fontWeight: 900, color: "#fff", lineHeight: 1.05, marginBottom: "6px" }}>News, Notices <span style={{ color: "#EDB810" }}>& Events</span></h1>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.55 }}>Block M Waterfall Park · Mabopane · Stay informed, stay connected.</p>
        </div>
      </div>

      <main style={{ maxWidth: "960px", margin: "0 auto", padding: "20px 16px 60px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "0 0 14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "16px" }}>📅</span>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: T.dim }}>Events Journal — Past & Upcoming</span>
          </div>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, color: dark ? "#EDB810" : "#0D5050" }}>{events.length} Events</span>
        </div>
        <div style={{ display: "grid", gap: "8px", marginBottom: "28px" }}>
          {events.map(e => (
            <div key={e.day + e.mo} style={{ background: T.surface, borderRadius: "12px", display: "flex", alignItems: "center", gap: "14px", padding: "13px 16px", boxShadow: T.cardShadow, border: "1px solid " + T.border, transition: "all 0.3s", borderLeft: e.barColor ? "4px solid " + e.barColor : "4px solid " + T.border }}>
              <div style={{ width: "48px", height: "48px", minWidth: "48px", background: dark ? "#0a3535" : "#072C2C", borderRadius: "10px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "19px", fontWeight: 900, color: "#EDB810", lineHeight: 1 }}>{e.day}</div>
                <div style={{ fontSize: "7.5px", color: "rgba(255,255,255,0.55)", fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginTop: "1px" }}>{e.mo}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "13px", fontWeight: 600, color: dark ? "#fff" : "#1A3D4A", marginBottom: "2px", lineHeight: 1.3 }}>{e.title}</div>
                <div style={{ fontSize: "11px", color: T.muted }}>{e.meta}</div>
              </div>
              <div style={{ padding: "4px 10px", borderRadius: "100px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", background: e.badgeBg, color: e.badgeColor, flexShrink: 0 }}>{e.badge}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "0", background: T.surface, borderBottom: "1px solid " + T.border, overflowX: "auto", position: "sticky", top: "68px", zIndex: 90 }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ flexShrink: 0, padding: "13px 16px", background: "none", border: "none", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: filter === f ? (dark ? "#EDB810" : "#0D5050") : T.dim, cursor: "pointer", borderBottom: filter === f ? "2.5px solid " + (dark ? "#EDB810" : "#0D5050") : "2.5px solid transparent", marginBottom: "-2px" }}>{f}</button>
          ))}
        </div>

        {filtered.map(post => {
          const [open, setOpen] = useState(false);
          return (
            <div key={post.title} style={{ background: T.surface, borderRadius: "14px", marginBottom: "12px", overflow: "hidden", boxShadow: T.cardShadow, border: "1px solid " + T.border }}>
              <div style={{ height: "3.5px", background: post.bar }} />
              <div style={{ padding: "15px 16px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                  <span style={{ padding: "3px 8px", borderRadius: "100px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", background: post.badgeBg, color: post.badgeColor }}>{post.badge}</span>
                  <span style={{ fontSize: "10px", color: T.dim, marginLeft: "auto" }}>{post.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 700, color: dark ? "#fff" : "#1A3D4A", lineHeight: 1.25, marginBottom: "6px" }}>{post.title}</h3>
                <p style={{ fontSize: "13px", color: T.muted, lineHeight: 1.6 }}>{post.body}</p>
                {post.full && (
                  <div style={{ marginTop: open ? "12px" : 0, maxHeight: open ? "500px" : "0", overflow: "hidden", transition: "all 0.3s ease" }}>
                    <div style={{ fontSize: "13px", color: T.muted, lineHeight: 1.7, whiteSpace: "pre-line", padding: "14px", background: T.surface2, borderRadius: "10px", border: "1px solid " + T.border }}>{post.full}</div>
                  </div>
                )}
                {post.full && (
                  <button onClick={() => setOpen(o => !o)} style={{ marginTop: "10px", background: "none", border: "none", cursor: "pointer", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", color: dark ? "#EDB810" : "#0D5050", display: "flex", alignItems: "center", gap: "4px", padding: "0" }}>
                    {open ? "▲ Collapse" : "▼ Read full notice"}
                  </button>
                )}
                {post.cat === "notice" && (
                  <a href="#/register" style={{ marginTop: "10px", display: "inline-flex", alignItems: "center", gap: "6px", background: "#F07A1A", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "1px", textTransform: "uppercase", padding: "8px 16px", borderRadius: "100px", textDecoration: "none" }}>Register now →</a>
                )}
              </div>
            </div>
          );
        })}

        <div style={{ background: T.heroGrad, borderRadius: "16px", padding: "28px 24px", display: "flex", alignItems: "center", gap: "24px", boxShadow: "0 4px 24px rgba(7,44,44,0.3)", marginTop: "32px", flexWrap: "wrap" }}>
          <div style={{ flexShrink: 0, textAlign: "center" }}>
            <img src="/images/whatsapp-qr.png" alt="MGSN WhatsApp QR" style={{ width: "100px", height: "100px", borderRadius: "10px", border: "3px solid rgba(255,255,255,0.2)", display: "block" }} />
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: "6px" }}>Scan to join</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "6px" }}>💬 Join the conversation</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "8px" }}>MGSN Clean-Up Team-Up<br /><span style={{ color: "#EDB810" }}>WhatsApp Group</span></div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, marginBottom: "12px" }}>Get session updates, volunteer reminders, and community news delivered straight to your phone.</div>
            <a href="#/register" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#25D366", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", padding: "9px 18px", borderRadius: "100px", textDecoration: "none" }}>📱 Register to Join</a>
          </div>
        </div>
      </main>

      <footer style={{ background: T.headerBg, padding: "28px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <img src="/assets/mgsn-logo-main.png" alt="MGSN" style={{ height: "40px", width: "auto", margin: "0 auto 14px", display: "block", objectFit: "contain" }} />
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", margin: "12px 0 16px", flexWrap: "wrap" }}>
            {[["#/", "Home"], ["#/noticeboard", "Notice Board"], ["#/volunteer", "Our Story"], ["#/register", "Register"], ["mailto:tshegofatso@duck.com", "Contact"]].map(([href, label]) => (
              <a key={label} href={href} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{label}</a>
            ))}
          </div>
          <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", lineHeight: 1.7 }}>Mabopane Green Space Network · NPC Reg. 2025/422818/08<br />Block M Waterfall Park · Mabopane, City of Tshwane</div>
          <div style={{ height: "3px", background: "linear-gradient(90deg, #F07A1A, #EDB810, #2D8B3A)", width: "60px", margin: "20px auto 0", borderRadius: "100px" }} />
        </div>
      </footer>
      <style>{"@media (max-width: 600px) { .hidden-mobile { display: none !important; } }"}</style>
    </div>
  );
}