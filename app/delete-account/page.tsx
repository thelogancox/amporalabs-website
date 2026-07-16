import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Delete Your Account | Ampora",
  description:
    "How to permanently delete your Ampora account and associated data, either directly in the app or by contacting us.",
  alternates: {
    canonical: "https://amporalabs.com/delete-account",
  },
  robots: { index: true, follow: true },
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="pt-20">
        <article className="max-w-3xl mx-auto px-6 py-12">
          <nav className="text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Delete Account</span>
          </nav>

          <h1 className="text-4xl font-bold mb-4">Delete Your Ampora Account</h1>
          <p className="text-white/70 mb-10">
            You can permanently delete your Ampora account and the data
            associated with it at any time. Deletion is immediate and cannot be
            undone.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">
              Option 1: Delete in the app (fastest)
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-white/80">
              <li>Open Ampora and sign in</li>
              <li>Go to your <span className="text-white font-medium">Profile</span></li>
              <li>
                Choose{" "}
                <span className="text-white font-medium">Delete Account</span>{" "}
                and confirm
              </li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">
              Option 2: Request deletion by email
            </h2>
            <p className="text-white/80">
              If you can no longer access the app, email{" "}
              <a
                href="mailto:logan@korvatech.com?subject=Ampora%20Account%20Deletion%20Request"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                logan@korvatech.com
              </a>{" "}
              from the email address on your account with the subject
              &quot;Account Deletion Request.&quot; We verify the request and
              complete the deletion within 30 days.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">
              What gets deleted
            </h2>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              <li>Your account credentials and profile</li>
              <li>Your chat history and usage statistics</li>
              <li>Photos you submitted for analysis</li>
            </ul>
            <p className="text-white/60 mt-4 text-sm">
              Some records we are legally required to keep (such as purchase
              and tax records processed by Apple or Google) may be retained for
              the period required by law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-3">
              Active subscriptions
            </h2>
            <p className="text-white/80">
              Deleting your account does <span className="font-semibold">not</span>{" "}
              cancel an active subscription. Cancel it first in{" "}
              <span className="text-white font-medium">
                Google Play → Payments &amp; subscriptions
              </span>{" "}
              (Android) or{" "}
              <span className="text-white font-medium">
                Settings → Apple ID → Subscriptions
              </span>{" "}
              (iPhone).
            </p>
          </section>

          <p className="text-white/60 text-sm">
            Questions? See our{" "}
            <a
              href="https://korvatech.com/privacy-policy"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              Privacy Policy
            </a>{" "}
            or contact{" "}
            <a
              href="mailto:logan@korvatech.com"
              className="text-purple-400 hover:text-purple-300 underline"
            >
              logan@korvatech.com
            </a>
            .
          </p>
        </article>
      </div>
    </main>
  );
}
