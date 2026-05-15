"use client";

import { SessionProvider as Provider } from "next-auth/react";

type SessionProviderProps = {
  children: React.ReactNode;
  session?: any;
};

export function SessionProvider({ children, session }: SessionProviderProps) {
  return <Provider session={session}>{children}</Provider>;
}

export default SessionProvider;

// This component is a wrapper around the NextAuth SessionProvider, which provides session context to the entire application. It allows us to access the user's session and authentication state throughout the app.
