import { useState } from "react";

export default function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ fname: "", lname: "", phone: "", block: "", age: "", sessions: [] as string[], roles: [] as string[], skills: "", source: "", consent: false });

  const handleRoleToggle = (role: string) => {
    setForm(f => ({ ...f, roles: f.roles.includes(role) ? f.roles.filter(r => r !== role) : [...f.roles, role] }));
  };
  const handleSessionToggle = (s: string) => {
    if (s === "All") {
      setForm(f => ({ ...f, sessions: f.sessions.length === 5 ? [] : ["27 Apr", "9 May", "23 May", "6 Jun", "20 Jun"] }));
    } else {
      setForm(f => ({ ...f, sessions: f.sessions.includes(s) ? f.sessions.filter(x => x !== s) : [...f.sessions, s] }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) { alert("Please accept the POPIA consent statement to continue."); return; }
    setLoading(true);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbzLJXKmU8P7zLFiatanPV2F7E8Y9kCLCG2nJ5Kgd/exec", {
        method: "POST", mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() })
      });
      setSubmitted(true);
    } catch { setSubmitted(true); }
    setLoading(false);
  };

  if (submitted) {
    return (
      <div style={{ fontFamily: "'Barlow', sans-serif", background: "linear-gradient(150deg, #0A3A3A 0%, #0D4A3A 100%)", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 16px" }}>
        <div style={{ background: "#fff", borderRadius: "18px", padding: "40px 28px", maxWidth: "480px", width: "100%", textAlign: "center", boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
          <div style={{ fontSize: "56px", marginBottom: "16px" }}>🌳</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", color: "#0D5050", marginBottom: "8px" }}>You're In!</h2>
          <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6, marginBottom: "16px" }}>Thank you for registering with MGSN. Our Session Lead will add you to the <strong>Clean-Up Team-Up WhatsApp group</strong> shortly.</p>
          <img src="/assets/mgsn-logo-main.png" alt="MGSN" style={{ maxWidth: "160px", margin: "12px auto", display: "block" }} />
          <p style={{ marginTop: "14px", fontSize: "13px", color: "#444" }}>Next session: <strong>Saturday 23 May 2026 · 08:00</strong><br />Block M · Mabopane</p>
          <p style={{ marginTop: "12px", fontSize: "13px", color: "#0D5050", fontWeight: 600 }}>Kea leboga 🙏🏾 — MGSN</p>
          <a href="#/" style={{ display: "block", marginTop: "20px", fontSize: "12px", color: "rgba(26,61,74,0.45)", textDecoration: "none" }}>← Back to MGSN Home</a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", background: "linear-gradient(150deg, #0A3A3A 0%, #0D4A3A 100%)", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "32px 16px 60px" }}>
      <div style={{ width: "100%", maxWidth: "520px" }}>
        <div style={{ background: "#0D5050", borderRadius: "18px 18px 0 0", padding: "28px 28px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "180px", height: "180px", background: "rgba(255,255,255,0.04)", borderRadius: "50%" }} />
          <div style={{ width: "100px", margin: "0 auto 16px", background: "#fff", borderRadius: "10px", padding: "8px", boxShadow: "0 4px 16px rgba(0,0,0,0.2)", position: "relative", zIndex: 1 }}>
            <img src="/assets/mgsn-logo-main.png" alt="MGSN" style={{ width: "100%", display: "block", borderRadius: "6px" }} />
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: "6px", position: "relative", zIndex: 1 }}>
            Join the <span style={{ color: "#EDB810" }}>Green Team</span>
          </h1>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "14px", position: "relative", zIndex: 1 }}>Community-Owned, Community-Led · NPC 2025/422818/08</p>
          <div style={{ height: "4px", background: "linear-gradient(90deg, #F07A1A, #EDB810, #2D8B3A)", borderRadius: "2px", margin: "0 auto", width: "80%", position: "relative", zIndex: 1 }} />
        </div>

        <div style={{ background: "#fff", borderRadius: "0 0 18px 18px", padding: "28px", boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "#1B7A7A", margin: "22px 0 12px", display: "flex", alignItems: "center", gap: "8px" }}>
            Personal Details
            <div style={{ flex: 1, height: "1.5px", background: "#D8E8E8" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#1A3D4A", marginBottom: "5px" }}>First Name <span style={{ color: "#F07A1A" }}>*</span></label>
              <input type="text" placeholder="e.g. Refilwe" value={form.fname} onChange={e => setForm({...form, fname: e.target.value})} required
                style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #D8E8E8", borderRadius: "9px", fontSize: "14px", fontFamily: "'Barlow', sans-serif", color: "#1A3D4A", outline: "none" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#1A3D4A", marginBottom: "5px" }}>Surname <span style={{ color: "#F07A1A" }}>*</span></label>
              <input type="text" placeholder="e.g. Mokgotho" value={form.lname} onChange={e => setForm({...form, lname: e.target.value})} required
                style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #D8E8E8", borderRadius: "9px", fontSize: "14px", fontFamily: "'Barlow', sans-serif", color: "#1A3D4A", outline: "none" }} />
            </div>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#1A3D4A", marginBottom: "5px" }}>WhatsApp Number <span style={{ color: "#F07A1A" }}>*</span></label>
            <input type="tel" placeholder="+27 XX XXX XXXX" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} required
              style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #D8E8E8", borderRadius: "9px", fontSize: "14px", fontFamily: "'Barlow', sans-serif", color: "#1A3D4A", outline: "none" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "16px" }}>
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#1A3D4A", marginBottom: "5px" }}>Ward / Block <span style={{ color: "#F07A1A" }}>*</span></label>
              <select value={form.block} onChange={e => setForm({...form, block: e.target.value})} required
                style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #D8E8E8", borderRadius: "9px", fontSize: "14px", fontFamily: "'Barlow', sans-serif", color: "#1A3D4A", outline: "none", appearance: "none", background: "white" }}>
                <option value="">Select block</option>
                {["Block A","Block B","Block C","Block D","Block E","Block F","Block G","Block H","Block J","Block K","Block L","Other"].map(b => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#1A3D4A", marginBottom: "5px" }}>Age Group <span style={{ color: "#F07A1A" }}>*</span></label>
              <select value={form.age} onChange={e => setForm({...form, age: e.target.value})} required
                style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #D8E8E8", borderRadius: "9px", fontSize: "14px", fontFamily: "'Barlow', sans-serif", color: "#1A3D4A", outline: "none", appearance: "none", background: "white" }}>
                <option value="">Select</option>
                <option>Under 18</option><option>18–25</option><option>26–35</option><option>36–50</option><option>50+</option>
              </select>
            </div>
          </div>

          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "#1B7A7A", margin: "22px 0 12px", display: "flex", alignItems: "center", gap: "8px" }}>
            Availability & Sessions
            <div style={{ flex: 1, height: "1.5px", background: "#D8E8E8" }} />
          </div>
          <div style={{ display: "grid", gap: "7px", marginBottom: "16px" }}>
            {[
              { s: "27 Apr", label: "Freedom Day Launch — Trial Run · 08:00–11:00" },
              { s: "9 May", label: "Session 2 — May Clean-Up · 08:00–11:00" },
              { s: "23 May", label: "Session 3 — May Clean-Up · 08:00–11:00" },
              { s: "6 Jun", label: "Session 4 — June Clean-Up · 08:00–11:00" },
              { s: "20 Jun", label: "Session 5 — June Clean-Up · 08:00–11:00" },
            ].map(sess => (
              <label key={sess.s} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "8px", border: form.sessions.includes(sess.s) ? "1.5px solid #F07A1A" : "1.5px solid #D8E8E8", background: form.sessions.includes(sess.s) ? "#FEF5EC" : "#fff", cursor: "pointer", transition: "all 0.18s" }}>
                <input type="checkbox" checked={form.sessions.includes(sess.s)} onChange={() => handleSessionToggle(sess.s)} style={{ accentColor: "#1B7A7A", width: "16px", height: "16px", flexShrink: 0 }} />
                <span style={{ fontWeight: 700, color: "#0D5050", minWidth: "32px", fontSize: "13px" }}>{sess.s}</span>
                <span style={{ fontSize: "13px", color: "#444" }}>{sess.label}</span>
              </label>
            ))}
            <label style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", borderRadius: "8px", border: form.sessions.length === 5 ? "1.5px solid #F07A1A" : "1.5px solid #D8E8E8", background: form.sessions.length === 5 ? "#FEF5EC" : "#fff", cursor: "pointer", transition: "all 0.18s" }}>
              <input type="checkbox" checked={form.sessions.length === 5} onChange={() => handleSessionToggle("All")} style={{ accentColor: "#1B7A7A", width: "16px", height: "16px", flexShrink: 0 }} />
              <span style={{ fontWeight: 700, color: "#F07A1A", minWidth: "32px", fontSize: "13px" }}>ALL</span>
              <span style={{ fontSize: "13px", color: "#444" }}>I'm available for all sessions</span>
            </label>
          </div>

          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "#1B7A7A", margin: "22px 0 12px", display: "flex", alignItems: "center", gap: "8px" }}>
            Your Role Preferences
            <div style={{ flex: 1, height: "1.5px", background: "#D8E8E8" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "16px" }}>
            {[
              { r: "Session Lead", icon: "📋" },
              { r: "Grass Cutter", icon: "🌿" },
              { r: "Beds Keeper", icon: "🌸" },
              { r: "Compost", icon: "♻️" },
              { r: "Shelter Steward", icon: "🪵" },
              { r: "Structural", icon: "🔩" },
            ].map(role => (
              <label key={role.r} style={{ display: "flex", alignItems: "center", gap: "8px", padding: "9px 12px", borderRadius: "8px", border: form.roles.includes(role.r) ? "1.5px solid #1B7A7A" : "1.5px solid #D8E8E8", background: form.roles.includes(role.r) ? "#E8F5F5" : "#fff", cursor: "pointer", fontSize: "12px", fontWeight: 600, color: form.roles.includes(role.r) ? "#0D5050" : "#555", transition: "all 0.18s" }}>
                <input type="checkbox" checked={form.roles.includes(role.r)} onChange={() => handleRoleToggle(role.r)} style={{ position: "absolute", opacity: 0, width: 0, height: 0 }} />
                <span style={{ fontSize: "16px", flexShrink: 0 }}>{role.icon}</span>
                {role.r}
              </label>
            ))}
          </div>

          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase", color: "#1B7A7A", margin: "22px 0 12px", display: "flex", alignItems: "center", gap: "8px" }}>
            Additional Info
            <div style={{ flex: 1, height: "1.5px", background: "#D8E8E8" }} />
          </div>
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#1A3D4A", marginBottom: "5px" }}>Skills, tools or equipment you can bring</label>
            <textarea placeholder="e.g. I own a lawnmower / I can weld / I have a bakkie..." value={form.skills} onChange={e => setForm({...form, skills: e.target.value})}
              style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #D8E8E8", borderRadius: "9px", fontSize: "14px", fontFamily: "'Barlow', sans-serif", color: "#1A3D4A", outline: "none", resize: "vertical", minHeight: "80px" }} />
          </div>

          <div style={{ background: "#E8F5F5", borderRadius: "10px", padding: "14px", marginBottom: "20px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <input type="checkbox" checked={form.consent} onChange={e => setForm({...form, consent: e.target.checked})} style={{ marginTop: "2px", accentColor: "#1B7A7A", flexShrink: 0, width: "16px", height: "16px" }} />
            <p style={{ fontSize: "12px", color: "#555", lineHeight: 1.6 }}>
              <strong style={{ color: "#1A3D4A" }}>POPIA Consent:</strong> I agree to my details being securely stored by MGSN for volunteer coordination. My information will never be shared with third parties. Participation is voluntary.
            </p>
          </div>

          <button onClick={handleSubmit} disabled={loading}
            style={{ width: "100%", padding: "16px", border: "none", borderRadius: "11px", background: "linear-gradient(130deg, #0D5050, #1B7A7A)", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "16px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", cursor: loading ? "not-allowed" : "pointer", boxShadow: "0 4px 18px rgba(27,122,122,0.3)", opacity: loading ? 0.7 : 1, transition: "all 0.2s" }}>
            {loading ? "Registering..." : "🌿 Join the Green Team"}
          </button>
        </div>
        <p style={{ textAlign: "center", marginTop: "20px", fontSize: "10px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.5px" }}>
          MGSN · NPC Reg. 2025/422818/08 · Mabopane, City of Tshwane<br />
          <span style={{ fontStyle: "italic" }}>Kgosi ya lefatshe ke morafe — A community owns its land.</span>
        </p>
      </div>
    </div>
  );
}