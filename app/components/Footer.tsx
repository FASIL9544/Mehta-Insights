export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo */}
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <img
              src="/Mehta%20Insight%20logo.png"
              alt="Mehta Insights"
            />
          </a>

          <p className="footer-program">
            16-Week Live-Mentored Trading Program
          </p>

          <p className="footer-disclaimer">
            Mehta Insights provides educational content and structured
            learning programs related to financial markets and trading.
          </p>
        </div>

        {/* Disclaimer */}
       <div className="footer-disclaimer-box">
  <h3>Disclaimer</h3>

  <p>
    Mehta Insights provides educational and informational content only.
    Nothing on this website or through the program should be considered
    investment advice or a recommendation to buy or sell any security.
    Trading and investing involve market risks, and past performance is
    not indicative of future results. No returns or profits are guaranteed.
  </p>
</div>
        {/* Bottom */}
        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Mehta Insights. All rights reserved.
          </p>

          <p>
            Educational Program • No Guaranteed Returns
          </p>
        </div>

      </div>
    </footer>
  );
}