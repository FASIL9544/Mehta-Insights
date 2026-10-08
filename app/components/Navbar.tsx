"use client";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="logo">
  <img
    src="/Mehta%20Insight%20logo.png"
    alt="Mehta Insights"
  />
</a>

        <nav className="nav-links">
          <a href="#program">Program</a>
          <a href="#learning">What You Learn</a>
          <a href="#why-mehta">Why Mehta</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a href="#lead-form" className="nav-button">
          Talk to a Mentor
        </a>

      </div>
    </header>
  );
}