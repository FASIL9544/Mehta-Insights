import { CircleX, CircleCheck } from "lucide-react";

export default function Problem() {
  const problems = [
    ["Constant strategy hopping.", "One clear framework."],
    ["Poor timing.", "Weekly practice."],
    ["Revenge trading.", "Risk first."],
    ["Information overload.", "Live weekly sessions."],
    ["No feedback.", "Direct mentor feedback."],
  ];

  return (
    <section className="problem-section">
      <div className="section-container">

        <div className="section-heading">
          <p className="section-eyebrow">THE PROBLEM</p>

          <h2>Stop Guessing. Start Understanding the Markets.</h2>

          <p>
            Random tips, conflicting opinions and emotional decisions can
            make trading difficult to navigate. A structured learning
            approach can help you understand the reasoning behind market
            decisions.
          </p>
        </div>

        <div className="problem-table">

          <div className="problem-table-header">

            <div className="problem-header-title">
              <CircleX className="problem-header-icon problem-icon-danger" />
              <span>What's Going Wrong</span>
            </div>

            <div className="problem-header-title">
              <CircleCheck className="problem-header-icon problem-icon-success" />
              <span>How the Program Fixes It</span>
            </div>

          </div>

          {problems.map(([problem, solution]) => (
            <div className="problem-table-row" key={problem}>
              <div>{problem}</div>
              <div>{solution}</div>
            </div>
          ))}

        </div>

        <div className="section-cta">
          <a href="#lead-form" className="primary-button">
            Register for the 16 Week Program
          </a>
        </div>

      </div>
    </section>
  );
}