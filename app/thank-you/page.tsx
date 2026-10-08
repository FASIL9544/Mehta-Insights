import Link from "next/link";
import { ArrowRight, CircleCheck, ShieldCheck } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">

      <div className="thank-you-background">
        <div className="thank-you-glow thank-you-glow-one"></div>
        <div className="thank-you-glow thank-you-glow-two"></div>
      </div>

      <div className="thank-you-container">

        {/* Logo */}
        <Link href="/" className="thank-you-logo">
          <span>MEHTA</span>INSIGHTS
        </Link>

        {/* Thank You Card */}
        <div className="thank-you-card">

          {/* Success Icon */}
          <div className="thank-you-icon">
            <CircleCheck
              size={42}
              strokeWidth={2.2}
            />
          </div>

          {/* Small Heading */}
          <p className="thank-you-eyebrow">
            APPLICATION RECEIVED
          </p>

          {/* Main Heading */}
          <h1>
            Thank You for
            <span> Applying!</span>
          </h1>

          {/* Message */}
          <p className="thank-you-message">
            Your application for the{" "}
            <strong>
              16-Week Live-Mentored Trading Program
            </strong>{" "}
            has been successfully received.
          </p>

          {/* Secondary Message */}
          <p className="thank-you-subtext">
            Our team will review your application and get in touch
            with you shortly to discuss the next steps.
          </p>

          {/* Next Steps */}
          <div className="thank-you-next">

            <div className="thank-you-next-icon">
              <ShieldCheck size={22} />
            </div>

            <div>
              <strong>
                What happens next?
              </strong>

              <p>
                A member of the Mehta Insights team will contact you
                regarding your application.
              </p>
            </div>

          </div>

          {/* Back Home */}
          <Link
            href="/"
            className="thank-you-button"
          >
            Back to Home
            <ArrowRight size={18} />
          </Link>

          {/* Disclaimer */}
          <p className="thank-you-disclaimer">
            Educational program. No guaranteed returns or investment advice.
          </p>

        </div>

        {/* Footer */}
        <p className="thank-you-footer">
          © {new Date().getFullYear()} Mehta Insights.
          All rights reserved.
        </p>

      </div>

    </main>
  );
}