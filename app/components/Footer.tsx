export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <a href="/" className="footer-logo">
            MEHTA<span>INSIGHTS</span>
          </a>

          <p>
            16-Week Live-Mentored Trading Program
          </p>

          <p className="footer-disclaimer">
            Educational program. No guaranteed returns or
            investment advice.
          </p>

        </div>

        <div className="footer-links">

          <a href="#program">
            Program
          </a>

          <a href="#learning">
            What You Learn
          </a>

          <a href="#why-mehta">
            Why Mehta
          </a>

          <a href="#faq">
            FAQ
          </a>

          <a href="#lead-form">
            Apply Now
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Mehta Insights. All rights reserved.
        </p>

        <p>
          SEBI Registered Research Analyst (INH000025577)
        </p>

      </div>

    </footer>
  );
}