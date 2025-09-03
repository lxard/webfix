"use client";

import { auth } from "../../lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider(); // ✅ definisikan provider
      await signInWithPopup(auth, provider);
      router.push("/admin"); // redirect ke admin setelah login
    } catch (err) {
      console.error(err);
      alert("Login gagal!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Login dengan Google
      </button>
    </div>
  );
}
