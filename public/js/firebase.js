// Firebase 9 Modular - Versi Stabil

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAjOu50b_CX4H2-0dA62CWgVQwWtyg08ag",
  authDomain: "festara-regist.firebaseapp.com",
  projectId: "festara-regist",
  storageBucket: "festara-regist.appspot.com",
  messagingSenderId: "152376443438",
  appId: "1:152376443438:web:d0dd0c1f0e97c685df95bf",
  measurementId: "G-5P1TBX2HRB",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export function nowISO() {
  return new Date().toISOString();
}
