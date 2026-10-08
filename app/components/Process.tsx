const steps = [
  {
    number: "01",
    title: "Apply for the Program",
    description:
      "Submit a short application and tell us about your experience.",
  },
  {
    number: "02",
    title: "Consultation Call",
    description:
      "If shortlisted, you'll be invited for a short consultation.",
  },
  {
    number: "03",
    title: "Decide If It's Right for You",
    description:
      "Take the next step only if the program is suitable for you.",
  },
];

export default function Process() {
  return (
    <section className="process-section">

      <div className="section-container">

        <div className="process-heading">

          <p className="section-eyebrow">
            HOW IT WORKS
          </p>

          <h2>
            A Simple 3-Step Process
          </h2>

        </div>

        <div className="process-grid">

          {steps.map((step) => (

            <div
              className="process-card"
              key={step.number}
            >

              <div className="process-number">
                {step.number}
              </div>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}