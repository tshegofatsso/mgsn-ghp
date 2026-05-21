import { useState } from "react";

export default function Volunteer() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ fullName: "", surname: "", email: "", phone: "", role: "", location: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      <div style={{ fontFamily: "'Barlow', sans-serif", background: "#F5F0E8", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 16px" }}>
        <div style={{ background: "#fff", borderRadius: "18px", padding: "40px 28px", maxWidth: "480px", width: "100%", textAlign: "center", boxShadow: "0 8px 40px rgba(0,0,0,0.1)" }}>
          <div style={{ fontSize: "56px", marginBottom: "16px" }}>🌿</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", color: "#0D5050", marginBottom: "8px" }}>O tla iswa mooeng.</h2>
          <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.6, marginBottom: "16px" }}>You are on the list. Keep your WhatsApp on — session dates land in the group first.</p>
          <p style={{ fontSize: "13px", color: "#0D5050", fontWeight: 600, marginBottom: "8px" }}>Each session is capped at 20 volunteers. Once it fills, it fills.</p>
          <a href="https://chat.whatsapp.com/Kfw4KEr9V1C6XX5gMEgAG7" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-block", background: "#25D366", color: "#fff", fontWeight: 700, fontSize: "13px", padding: "12px 24px", borderRadius: "100px", textDecoration: "none", marginBottom: "12px" }}>
            Join WhatsApp Group
          </a>
          <br />
          <a href="#/" style={{ display: "block", marginTop: "16px", fontSize: "12px", color: "rgba(26,61,74,0.4)", textDecoration: "none" }}>← Back to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", background: "#F5F0E8", minHeight: "100vh" }}>
      {/* HEADER */}
      <header style={{ background: "#072C2C", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
        <div style={{ height: "4px", background: "linear-gradient(90deg, #F07A1A 0%, #F07A1A 33%, #EDB810 33%, #EDB810 66%, #2D8B3A 66%, #2D8B3A 100%)" }} />
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <img src="/assets/mgsn-logo-light.png" alt="MGSN" style={{ height: "38px", width: "auto" }} />
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", color: "#EDB810", lineHeight: 1.2 }}>Mabopane Green Space Network</div>
              <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.5px", marginTop: "2px", textTransform: "uppercase" }}>NPC 2025/422818/08</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <a href="#/register" style={{ background: "#F07A1A", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", padding: "8px 16px", borderRadius: "100px", textDecoration: "none" }}>Join Us</a>
            <a href="#/" style={{ color: "#EDB810", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase", padding: "8px 12px", border: "1px solid rgba(237,184,16,0.3)", borderRadius: "8px", textDecoration: "none" }}>Board</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: "#072C2C", padding: "48px 20px", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-block", background: "rgba(237,184,16,0.15)", border: "1px solid rgba(237,184,16,0.3)", borderRadius: "100px", padding: "4px 12px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#EDB810", marginBottom: "16px" }}>
              Volunteer Recruitment Campaign · May 2026
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px,5vw,56px)", fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: "8px" }}>Join Us.<br /><span style={{ color: "#EDB810" }}>Re a leema.</span></h1>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontStyle: "italic", color: "rgba(255,255,255,0.5)", marginBottom: "16px" }}>["Re a leema" — Pitori Setswana: "We are ready."]</p>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: "24px" }}>
              The next restoration session starts soon. We need hands in the field, voices in the community, and people who know these streets. No experience needed. Just the willingness to show up.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="#/register" style={{ background: "#EDB810", color: "#072C2C", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "12px", letterSpacing: "1.5px", textTransform: "uppercase", padding: "12px 24px", borderRadius: "100px", textDecoration: "none" }}>Register Now</a>
              <a href="#story" style={{ border: "2px solid rgba(255,255,255,0.3)", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase", padding: "11px 20px", borderRadius: "100px", textDecoration: "none" }}>See Our Story</a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "20px" }}>
              <div style={{ display: "flex" }}>
                {["B", "K", "T", "M", "D"].map((l, i) => (
                  <div key={i} style={{ width: "28px", height: "28px", borderRadius: "50%", background: "#0D5050", border: "2px solid #072C2C", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "10px", fontWeight: 700, marginLeft: "-8px" }}>{l}</div>
                ))}
              </div>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
                <span style={{ color: "#fff", fontWeight: 700 }}>60+ Mabopane residents</span> already registered
              </p>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="/images/workshop-02.jpg" alt="MGSN community at work" style={{ width: "100%", maxWidth: "360px", borderRadius: "16px", boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }} />
            <div style={{ marginTop: "12px", display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
              {[{ icon: "🌱", text: "Clear invasives" }, { icon: "🌿", text: "Plant indigenous" }, { icon: "📣", text: "Spread the word" }].map(item => (
                <div key={item.text} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "100px", padding: "5px 12px", display: "flex", alignItems: "center", gap: "6px", fontSize: "11px", color: "rgba(255,255,255,0.8)" }}>
                  <span>{item.icon}</span> {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.08)", padding: "20px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", textAlign: "center", gap: "0" }}>
          {[["60+", "Community Members", "Blocks A through L"], ["3", "Partner Institutions", "UP · CoT · MGSN"], ["9", "Species Identified", "Invasive + indigenous"], ["2 km", "Stream Surveyed", "Block M watercourse"]].map(item => (
            <div key={item[1]} style={{ padding: "8px 16px", borderRight: "1px solid rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize: "28px", fontWeight: 900, color: "#0D5050" }}>{item[0]}</p>
              <p style={{ fontSize: "12px", fontWeight: 600, color: "#1A3D4A", marginTop: "2px" }}>{item[1]}</p>
              <p style={{ fontSize: "10px", color: "rgba(26,61,74,0.5)", marginTop: "2px" }}>{item[2]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THE STORY */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 20px" }} id="story">
        <div style={{ marginBottom: "32px" }}>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, color: "#F07A1A", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "8px" }}>30 April 2026 · Block M, Mabopane</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,4vw,38px)", fontWeight: 900, color: "#1A3D4A", lineHeight: 1.1, marginBottom: "12px" }}>
            Re tshwanela go nna moo.<br /><span style={{ color: "#0D5050" }}>We are the rightful people of this place.</span>
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(26,61,74,0.6)", lineHeight: 1.6, maxWidth: "560px" }}>
            That's what one elder said before the workshop began. Not as a statement — as a fact. As if the land had already confirmed it.
          </p>
        </div>

        {[
          { img: "workshop-03.jpg", label: "01 · The field guides", heading: "Gum trees. Bugweed. Pom pom weed.", body: "Solanum mauritianum — bugweed — was first. A tall, grey-green shrub that drains the soil dry. Someone from the crowd said: 'Ke ya di tseba dila.' — 'I know these ones.'" },
          { img: "workshop-07.jpg", label: "02 · Indigenous alternatives", heading: "What do we plant when the invasives are gone?", body: "Below bugweed, the board listed indigenous replacements. Vachellia karroo — sweet thorn. The same thorn that used to line the paths between compounds before anyone called it landscaping." },
          { img: "workshop-08.jpg", label: "03 · Eucalyptus camaldulensis", heading: '"This one takes 40 litres a day."', body: "The City of Tshwane sign for Gum trees sat on the concrete with its cartoon boy and its green star rating. 'When we say invasive, we don't mean ugly. We mean: it takes more than it gives. Every day. Without stopping.'" },
          { img: "workshop-05.jpg", label: "04 · The community speaks", heading: "Danny & Meme. The trailer. The phones.", body: "In front of the white trailer marked DANNY & MEME, a speaker held up a sign and addressed the seated crowd. Blue chairs. Overcast sky. Phones being held up to take pictures of the board. One woman in a pink tracksuit was already texting someone." },
          { img: "workshop-06.jpg", label: "05 · Sixty people", heading: "No one was waiting for permission.", body: "Sixty people. Different ages. Different reasons. Some came because the ward councillor told them. Some came because their neighbour said 'ke ya di tseba.' But when the field guides came out — everyone leaned in. Together." },
        ].map(row => (
          <div key={row.label} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "32px", alignItems: "center" }}>
            <img src={"/images/" + row.img} alt={row.img} style={{ width: "100%", height: "240px", objectFit: "cover", borderRadius: "16px" }} />
            <div>
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, color: "#F07A1A", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>{row.label}</p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: "#1A3D4A", marginBottom: "8px", lineHeight: 1.2 }}>{row.heading}</h3>
              <p style={{ fontSize: "13px", color: "rgba(26,61,74,0.6)", lineHeight: 1.7 }}>{row.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* PARTNERS */}
      <section style={{ background: "#fff", padding: "48px 20px", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px,3vw,32px)", fontWeight: 900, color: "#1A3D4A", marginBottom: "24px" }}>
            Institutions showed up. <span style={{ color: "#0D5050" }}>The community did the rest.</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "32px" }}>
            {[
              { logo: "📘", name: "University of Pretoria", detail: "Environmental Sciences", people: "Dr. N. Mkhize + UP team" },
              { logo: "🏛️", name: "City of Tshwane", detail: "Dept. Environmental Compliance", people: "Officials · Contractors · Field teams" },
              { logo: "🌿", name: "MGSN", detail: "Mabopane Green Space Network · NPC", people: "Danny & Meme · Block representatives" },
            ].map(p => (
              <div key={p.name} style={{ background: "#F5F0E8", borderRadius: "14px", padding: "20px", border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{p.logo}</div>
                <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#1A3D4A", marginBottom: "4px" }}>{p.name}</h3>
                <p style={{ fontSize: "11px", color: "#0D5050", fontWeight: 600, marginBottom: "6px" }}>{p.detail}</p>
                <p style={{ fontSize: "11px", color: "rgba(26,61,74,0.6)" }}>{p.people}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "#072C2C", borderRadius: "16px", padding: "28px" }}>
            <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "10px", fontWeight: 700, color: "#EDB810", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>The people who made it happen</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>The UP Team. Named and celebrated.</h3>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[{ name: "Ida", role: "Team Lead" }, { name: "Ketla", role: "Coordination" }, { name: "Tania", role: "Coordination" }, { name: "Siegwalt", role: "Construction Expert" }].map(p => (
                <div key={p.name} style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "12px", padding: "16px 20px", textAlign: "center" }}>
                  <div style={{ fontSize: "28px", marginBottom: "6px" }}>👷</div>
                  <p style={{ fontWeight: 700, color: "#fff", fontSize: "14px" }}>{p.name}</p>
                  <p style={{ fontSize: "11px", color: "#EDB810", fontWeight: 600 }}>{p.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REGISTER CTA */}
      <section style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 20px" }} id="register">
        <div style={{ background: "#fff", borderRadius: "18px", padding: "32px", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1px solid rgba(0,0,0,0.06)" }}>
          <div style={{ display: "inline-block", background: "#E8F5F5", border: "1px solid rgba(13,80,80,0.2)", borderRadius: "100px", padding: "4px 12px", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "9px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "#0D5050", marginBottom: "16px" }}>
            Registration Open
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,34px)", fontWeight: 900, color: "#1A3D4A", marginBottom: "8px" }}>
            Register once. <span style={{ color: "#0D5050" }}>Show up when you can.</span>
          </h2>
          <p style={{ fontSize: "13px", color: "rgba(26,61,74,0.6)", lineHeight: 1.6, marginBottom: "24px" }}>Sessions run every Saturday. No commitment — we know things come up. But when you can make it, your hands will be useful.</p>
          <a href="#/register" style={{ display: "inline-flex", background: "#F07A1A", color: "#fff", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", padding: "14px 28px", borderRadius: "100px", textDecoration: "none" }}>🌿 Register — Re a leboga →</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#072C2C", padding: "32px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <img src="/assets/mgsn-logo-light.png" alt="MGSN" style={{ height: "36px", width: "auto", margin: "0 auto 14px", display: "block" }} />
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", margin: "12px 0", flexWrap: "wrap" }}>
            {[["#/", "Home"], ["#/noticeboard", "Notice Board"], ["#/register", "Register"]].map(([href, label]) => (
              <a key={label} href={href} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{label}</a>
            ))}
          </div>
          <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)" }}>MGSN · NPC Reg. 2025/422818/08 · Mabopane, City of Tshwane</p>
          <p style={{ fontStyle: "italic", fontSize: "10px", color: "rgba(255,255,255,0.2)", marginTop: "4px" }}>Kgosi ya lefatshe ke morafe — A community owns its land.</p>
        </div>
      </footer>
    </div>
  );
}