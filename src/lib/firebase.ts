import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClQOCrywkIc_BG_mwdgE4KJlfuCpSSsIQ",
  authDomain: "fafnirv2-8b658.firebaseapp.com",
  projectId: "fafnirv2-8b658",
  storageBucket: "fafnirv2-8b658.appspot.com", // ⚠️ ubah ke .appspot.com bukan .app
  messagingSenderId: "440048463610",
  appId: "1:440048463610:web:517092d361177f8c4ce343",
  measurementId: "G-TJTN787GTY",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
