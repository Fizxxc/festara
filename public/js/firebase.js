// File: /public/js/firebase.js
// Firebase 9 Modular - Versi stabil untuk hosting static (Vercel, Netlify, GitHub Pages)

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.24.0/firebase-storage.js";

// Konfigurasi Project Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAjOu50b_CX4H2-0dA62CWgVQwWtyg08ag",
  authDomain: "festara-regist.firebaseapp.com",
  projectId: "festara-regist",
  storageBucket: "festara-regist.appspot.com", // FIX disini (.app → .appspot.com)
  messagingSenderId: "152376443438",
  appId: "1:152376443438:web:d0dd0c1f0e97c685df95bf",
  measurementId: "G-5P1TBX2HRB"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Export modules
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Helper
export function nowISO() {
  return new Date().toISOString();
}
