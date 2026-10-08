export default function Problem() {
  const problems = [
    {
      problem: "Constant strategy hopping.",
      solution: "One clear framework.",
    },
    {
      problem: "Poor timing.",
      solution: "Weekly practice.",
    },
    {
      problem: "Revenge trading.",
      solution: "Risk first.",
    },
    {
      problem: "Information overload.",
      solution: "Live weekly sessions.",
    },
    {
      problem: "No feedback.",
      solution: "Direct mentor feedback.",
    },
  ];

  return (
    <section className="problem-section">

      <div className="section-container">

        <div className="section-heading">

          <p className="section-eyebrow">
            THE PROBLEM
          </p>

          <h2>
            Stop Guessing. Start Understanding the Markets.
          </h2>

          <p>
            Random tips, conflicting opinions and emotional
            decisions can make trading difficult to navigate.
            A structured learning approach can help you
            understand the reasoning behind market decisions.
          </p>

        </div>

        <div className="problem-table">

          <div className="problem-table-header">

            <div>
              ❌ What's Going Wrong
            </div>

            <div>
              ✅ How the Program Fixes It
            </div>

          </div>

          {problems.map((item, index) => (

            <div
              className="problem-table-row"
              key={index}
            >

              <div>
                {item.problem}
              </div>

              <div>
                {item.solution}
              </div>

            </div>

          ))}

        </div>

        <div className="section-cta">

          <a
            href="#lead-form"
            className="primary-button"
          >
            Register for the 16 Week Program
          </a>

        </div>

      </div>

    </section>
  );
}