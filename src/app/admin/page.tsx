"use client";

import { useEffect, useState } from "react";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const ADMIN_EMAILS = ["luxardd@gmail.com"]; // ganti dengan email admin

export default function AdminPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.push("/login"); // belum login → redirect ke login
      } else if (!ADMIN_EMAILS.includes(u.email || "")) {
        router.push("/"); // bukan admin → balik ke home
      } else {
        setUser(u); // admin sah → simpan user
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!user) {
    return <p className="p-6">Checking access...</p>;
  }

  return (
    <main className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        🔧 Admin Panel
      </h1>

      <button
        onClick={() => signOut(auth)}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
      >
        Keluar
      </button>
    </main>
  );
}
