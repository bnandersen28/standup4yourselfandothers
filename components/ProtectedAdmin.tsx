"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, type User } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";

export default function ProtectedAdmin({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Firebase Auth only on the client, after mount. Calling it at
    // module scope runs during prerender, where Firebase's heartbeat calls
    // `new Date()` and breaks the build with Cache Components enabled.
    const auth = getFirebaseAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.replace("/login");
      }

      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <p>Checking authentication...</p>;
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}