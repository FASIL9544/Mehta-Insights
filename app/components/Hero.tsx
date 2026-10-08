export default function Hero() {
  return (
    <section className="hero" id="program">

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <p className="hero-eyebrow">
            16-WEEK LIVE-MENTORED TRADING PROGRAM
          </p>

          <h1>
            Master Trading with{" "}
            <span>16-Week Live-Mentored Program</span>
          </h1>

          <p className="hero-description">
            Build your understanding of the markets through a
            16-week live-mentored trading program designed to
            help you develop analytical skills, trading discipline
            and a more structured approach to market decisions.
          </p>

          <div className="hero-buttons">

            <a
              href="#learning"
              className="primary-button"
            >
              Explore the Program
            </a>

            <a
              href="#lead-form"
              className="secondary-button"
            >
              Talk to a Mentor
            </a>

          </div>

          <div className="hero-trust">

            <strong>
              Led by Ankit Mehta, CMT, CFTe, QPFP
            </strong>

            <span>
              SEBI Registered Research Analyst (INH000025577)
            </span>

          </div>

        </div>

        {/* SMALL 16-WEEK CARD */}
        <div className="hero-visual">

          <div className="hero-card">

            <div className="hero-card-label">
              LIVE MENTORSHIP
            </div>

            <div className="hero-card-number">
              16
            </div>

            <div className="hero-card-text">
              Weeks of Structured Learning
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
