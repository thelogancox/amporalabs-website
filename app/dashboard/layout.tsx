import { Metadata } from "next";

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
    <div className="min-h-screen bg-black text-white">
      {children}
    </div>
  );
}
