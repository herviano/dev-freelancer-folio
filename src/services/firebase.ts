import { initializeApp } from "firebase/app";
import env from "../env";

const app = initializeApp(env.firebaseConfig);

export { app };