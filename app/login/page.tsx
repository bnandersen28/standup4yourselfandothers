
"use client";

import { useState, type SubmitEventHandler } from "react";
import PageTitle from "@/components/ui/PageTitle";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";
import styles from "./login.module.css";
import RainbowLine from "@/components/ui/RainbowLine";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


    const handleLogin: SubmitEventHandler<HTMLFormElement> = async (e) => { 
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const auth = getFirebaseAuth();
      await signInWithEmailAndPassword(auth, email, password);

      router.replace("/admin");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Unable to sign in. Check your email and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <RainbowLine />
    <section className={styles.loginSection}>
        <PageTitle
            firstWord="Admin"
            secondWord="Login"
            description="Please log in to access the admin dashboard."
        />
      
      <div className={styles.loginCard}>

        <form onSubmit={handleLogin} className={styles.loginForm}>
          <label htmlFor="email">Email:</label>

          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            required
          />

          <label htmlFor="password">Password:</label>

          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />

          {error && (
            <p className={styles.error} role="alert">
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    
    </section>
    </>
  );
}
