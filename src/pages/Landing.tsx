import { useState } from "react";

export default function Landing() {
  const [variant, setVariant] = useState<"a"|"b">("a");
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", background: "linear-gradient(135deg, #0A3A3A, #0D5050)", minHeight: "100vh" }}>
      {/* TOP BAR */}
      <div style={{ background: "rgba(0,0,0,0.2)", borderBottom: "1px solid rgba(255,255,255,0.1)", padding: "12px 20px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/assets/mgsn-logo-light.png" alt="MGSN" style={{ height: "36px", borderRadius: "8px", padding: "4px", background: "#fff" }} />
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 800, color: "#EDB810", letterSpacing: "2px", textTransform: "uppercase" }}>Mabopane Green Space Network</div>
              <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)" }}>NPC Reg. 2025/422818/08</div>
            </div>
          </div>
          <a href="#/volunteer" style={{ background: "#EDB810", color: "#072C2C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", padding: "8px 16px", borderRadius: "100px", textDecoration: "none" }}>
            Register →
          </a>
        </div>
      </div>

      {/* HERO */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "60px 20px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "rgba(237,184,16,0.15)", border: "1px solid rgba(237,184,16,0.3)", borderRadius: "100px", padding: "4px 16px", marginBottom: "24px" }}>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#EDB810" }}>
            Volunteer Recruitment · May 2026
          </span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px,6vw,64px)", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: "16px", letterSpacing: "-0.5px" }}>
          Pick your<br /><span style={{ color: "#EDB810" }}>entry point.</span>
        </h1>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.6, maxWidth: "480px", margin: "0 auto 32px" }}>
          No wrong answers. Every contribution matters. Choose what fits your life right now.
        </p>

        {/* THREE DOORS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "32px" }}>
          {[
            { icon: "🪣", title: "Show up and dig", desc: "Physical work — clearing, planting, surveying. No experience needed.", tag: "I have hands", color: "#2D8B3A" },
            { icon: "📣", title: "Spread the word", desc: "Share the event with your network. Bring one new person.", tag: "I have reach", color: "#1565C0" },
            { icon: "💰", title: "Fund the work", desc: "R50/month funds tools, gloves, and transport for one volunteer.", tag: "I have R50", color: "#F07A1A" },
          ].map(d => (
            <div key={d.tag} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "16px", padding: "28px 24px", textAlign: "center", cursor: "pointer" }} onClick={() => setShowModal(true)}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>{d.icon}</div>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "18px", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>{d.title}</h3>
              <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginBottom: "16px" }}>{d.desc}</p>
              <div style={{ background: d.color, color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", padding: "8px 16px", borderRadius: "100px", display: "inline-block" }}>
                {d.tag} →
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>
          All paths lead to the same place: showing up for your community.
        </p>
      </div>

      {/* MODAL */}
      {showModal && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", zIndex: 200 }}>
          <div style={{ background: "#fff", borderRadius: "20px", padding: "40px", maxWidth: "400px", width: "100%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}>
            <div style={{ fontSize: "56px", marginBottom: "16px" }}>🪣</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", color: "#1A3D4A", marginBottom: "12px" }}>You're in!</h2>
            <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6, marginBottom: "24px" }}>Register once and show up when you can. Session dates land in the WhatsApp group first.</p>
            <a href="#/register" style={{ display: "inline-block", background: "#0D5050", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", padding: "14px 28px", borderRadius: "100px", textDecoration: "none", marginBottom: "12px" }}>
              Register Now →
            </a>
            <br />
            <button onClick={() => setShowModal(false)} style={{ background: "none", border: "none", color: "#999", fontSize: "13px", cursor: "pointer", marginTop: "8px" }}>Close</button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "32px 20px", textAlign: "center", marginTop: "40px" }}>
        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
          Mabopane Green Space Network · NPC Reg. 2025/422818/08<br />
          <span style={{ fontStyle: "italic", fontSize: "10px" }}>Kgosi ya lefatshe ke morafe — A community owns its land.</span>
        </p>
      </footer>
    </div>
  );
}