import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Only these emails can access the dashboard
const ALLOWED_EMAILS = [
  "logan@korvatech.com",
  "cwilliams@korvatech.com",
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/dashboard/login",
    error: "/dashboard/login",
  },
  callbacks: {
    async signIn({ user }) {
      // Only allow specific emails
      if (!user.email || !ALLOWED_EMAILS.includes(user.email.toLowerCase())) {
        return false;
      }
      return true;
    },
    async session({ session }) {
      return session;
    },
  },
});
