import {
  BarChart3,
  LineChart,
  ClipboardList,
  ShieldCheck,
  Brain,
  Search,
} from "lucide-react";

const topics = [
  {
    icon: BarChart3,
    title: "Market Fundamentals",
    description:
      "Understand market terminology, instruments and trading basics.",
  },
  {
    icon: LineChart,
    title: "Technical Analysis",
    description:
      "Explore charts, price action, trends and technical indicators.",
  },
  {
    icon: ClipboardList,
    title: "Trade Planning",
    description:
      "Understand how traders assess entries, exits and potential risk.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    description:
      "Learn why position sizing, stop-loss planning and capital protection matter.",
  },
  {
    icon: Brain,
    title: "Trading Psychology",
    description:
      "Recognise emotional biases and the importance of consistency.",
  },
  {
    icon: Search,
    title: "Market Analysis",
    description:
      "Develop a framework for interpreting market information before making decisions.",
  },
];

export default function Learn() {
  return (
    <section className="learn-section" id="learning">

      <div className="section-container">

        <div className="section-heading">

          <p className="section-eyebrow">
            WHAT YOU WILL LEARN
          </p>

          <h2>
            Build the Skills Behind Better Trading Decisions
          </h2>

          <p>
            Explore the concepts and analytical approaches that
            support a more structured understanding of the
            financial markets.
          </p>

        </div>

        <div className="learning-grid">

          {topics.map((topic) => {
            const Icon = topic.icon;

            return (
              <div
                className="learning-card"
                key={topic.title}
              >

                <div className="learning-icon">
                  <Icon size={30} strokeWidth={1.8} />
                </div>

                <h3>{topic.title}</h3>

                <p>{topic.description}</p>

              </div>
            );
          })}

        </div>

        <div className="section-cta">

          <a
            href="#lead-form"
            className="primary-button"
          >
            Get the Program Curriculum
          </a>

        </div>

      </div>

    </section>
  );
}