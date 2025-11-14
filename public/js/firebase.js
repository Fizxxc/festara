// Firebase v10 Modular - Aman untuk static hosting (Vercel, Netlify, GitHub Pages)

// Import Firebase Modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjOu50b_CX4H2-0dA62CWgVQwWtyg08ag",
  authDomain: "festara-regist.firebaseapp.com",
  projectId: "festara-regist",
  storageBucket: "festara-regist.appspot.com",
  messagingSenderId: "152376443438",
  appId: "1:152376443438:web:d0dd0c1f0e97c685df95bf",
  measurementId: "G-5P1TBX2HRB"
};

// Init Firebase App
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Helper waktu ISO
export function nowISO() {
  return new Date().toISOString();
}
