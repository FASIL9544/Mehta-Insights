export default function WhyMehta() {
  const reasons = [
    "Taught by a SEBI-registered analyst with a verifiable regulatory identity.",
    "Live mentoring, so your questions never go unanswered.",
    "Fundamentals and technicals taught together, not in isolation.",
    "Complete transparency on methods, fees and risks, with no hidden fine print.",
    "Independent by design: we never manage your money or execute trades for you.",
  ];

  return (
    <section className="why-section" id="why-mehta">

      <div className="section-container">

        <div className="section-heading">

          <p className="section-eyebrow">
            WHY MEHTA INSIGHTS?
          </p>

          <h2>
            Learn with a Research-Driven Perspective
          </h2>

        </div>

        <div className="why-grid">

          <div className="mentor-card">

            <div className="mentor-placeholder">
               <img
            
             src="/mehtas%20photo.png.jpeg"
         alt="Ankit Mehta"
             />

             </div>

            <h3>
              Ankit Mehta
            </h3>

            <p className="mentor-title">
              CMT, CFTe, QPFP
            </p>

            <p>
              Ankit Mehta is a SEBI Registered Research Analyst
              (INH000025577, BSE Enlistment 7060).
            </p>

            <p>
              Focuses on independent equity research informed by
              fundamental and technical analysis, with an emphasis
              on transparency, documented reasoning and informed
              decisions.
            </p>

          </div>

          <div className="reasons-card">

            <h3>
              Why traders choose Mehta Insights
            </h3>

            <ul>

              {reasons.map((reason, index) => (

                <li key={index}>
                  <span className="reason-check">
                    ✓
                  </span>

                  <span>
                    {reason}
                  </span>
                </li>

              ))}

            </ul>

          </div>

        </div>

        <div className="why-description">

          <p>
            The program explains why more information doesn't
            automatically lead to better decisions. It then
            walks you through a structured process for reading,
            planning and reviewing trades.
          </p>

          <p>
            There's no pressure. If the approach makes sense
            to you, you can take the next step with confidence.
          </p>

        </div>

        <div className="section-cta">

          <a
            href="#lead-form"
            className="primary-button"
          >
            Know More About Mehta Insights
          </a>

        </div>

      </div>

    </section>
  );
}