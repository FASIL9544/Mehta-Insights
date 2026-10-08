const faqs = [
  {
    question: "Who can join the program?",
    answer:
      "The program is intended to help aspiring and developing traders build a structured understanding of the markets. Confirm the final eligibility criteria with the program team.",
  },
  {
    question: "Is this a live-mentored program?",
    answer:
      "The program is described as a 16-week live-mentored trading program. Contact the team to confirm session frequency, format and mentor access.",
  },
  {
    question: "Will I receive guaranteed returns?",
    answer:
      "No. The program is focused on education, market analysis, trading discipline and risk management. It does not promise or guarantee trading profits.",
  },
  {
    question: "How does the application process work?",
    answer:
      "Submit the application form with your details and trading experience. If suitable, the program team will contact you for the next step.",
  },
];

export default function FAQ() {
  return (
    <section className="faq-section" id="faq">

      <div className="section-container">

        <div className="section-heading faq-heading">

          <p className="section-eyebrow">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2>
            Your Questions, Answered
          </h2>

        </div>

        <div className="faq-list">

          {faqs.map((faq, index) => (

            <details
              className="faq-item"
              key={index}
            >

              <summary>
                {faq.question}

                <span className="faq-icon">
                  +
                </span>
              </summary>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>

            </details>

          ))}

        </div>

      </div>

    </section>
  );
}