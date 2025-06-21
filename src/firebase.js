// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNnp0HFqvb-8xBp4bvyVscGfzCR2aAJaI",
  authDomain: "SEU_DOMINIO.firebaseapp.com",
  projectId: "dashboard-adminps",
  appId: "SEU_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
