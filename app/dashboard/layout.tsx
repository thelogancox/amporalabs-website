import { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Dashboard | Ampora",
  description: "Ampora analytics dashboard",
  robots: "noindex, nofollow",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="min-h-screen bg-black text-white">
        {children}
      </div>
    </SessionProvider>
  );
}
