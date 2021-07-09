import { auth, persistance } from "../backend/firebase-config";

export async function Login(email: string, password: string) {
  return new Promise<any>((resolve, reject) => {
    auth
      .setPersistence(persistance)
      .then(() => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then((userCred) => {
            resolve(true);
          })
          .catch((err) => {
            reject(err.code);
          });
      })
      .catch((err) => {
        console.log("Persistance error");
      });
  });
}
