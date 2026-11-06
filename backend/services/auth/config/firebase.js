   import { initializeApp, cert, getApps, getApp } from "firebase-admin/app";
   import { getAuth } from "firebase-admin/auth";

   const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

   export const app = getApps().length
     ? getApp()
     : initializeApp({ credential: cert(serviceAccount) });

   export const auth = getAuth(app);
   export default app;