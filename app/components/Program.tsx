export default function Program() {
  const suitableFor = [
    "Want to move beyond tips and random strategies.",
    "Want a structured trading framework.",
    "Are willing to learn and practise.",
    "Want direct mentor interaction.",
    "Want to become more independent in their market analysis.",
  ];

  const notFor = [
    "Guaranteed returns",
    "Sure-shot stock calls",
    "Get-rich-quick strategies",
    "Someone to trade on your behalf",
  ];

  const programDetails = [
    "16 weeks of live mentorship",
    "Structured curriculum",
    "Practical market analysis",
    "Trade-planning framework",
    "Risk-management concepts",
    "Trading psychology",
    "Market analysis",
    "Session recordings",
  ];

  return (
    <section className="program-section" id="program-details">

      <div className="section-container">

        <div className="program-grid">

          {/* LEFT SIDE */}

          <div className="audience-card">

            <p className="section-eyebrow">
              WHO THIS IS FOR
            </p>

            <h2>
              This Program Is For Traders Who:
            </h2>

            <ul className="check-list">

              {suitableFor.map((item, index) => (
                <li key={index}>
                  <span>✓</span>
                  <p>{item}</p>
                </li>
              ))}

            </ul>

            <div className="not-for-box">

              <h3>
                Not for you if you're looking for:
              </h3>

              <ul>

                {notFor.map((item, index) => (
                  <li key={index}>
                    <span>×</span>
                    {item}
                  </li>
                ))}

              </ul>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div className="program-details-card">

            <p className="section-eyebrow">
              PROGRAM DETAILS
            </p>

            <h2>
              16 Weeks of Live Mentorship
            </h2>

            <p className="program-intro">
              A structured learning experience designed to
              help you build a more disciplined approach to
              understanding and analysing the markets.
            </p>

            <h3>
              Your program includes:
            </h3>

            <ul className="program-list">

              {programDetails.map((item, index) => (
                <li key={index}>
                  <span>✓</span>
                  {item}
                </li>
              ))}

            </ul>

            <a
              href="#lead-form"
              className="primary-button"
            >
              Apply for the Program →
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}