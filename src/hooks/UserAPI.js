import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { auth } from "../Config/firebaseInit";
import { db } from "../Config/firebaseInit";
import { formatFirebaseResponseError } from "../utils/formatFirebaseResponseError";

import { GoogleAuthProvider } from 'firebase/auth';

export const loginAPI = async ({ email, password }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const User = userCredential.user;
    if (User && User.uid) {
      const docRef = doc(db, "users", User.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { userCred: docSnap.data(), error: null };
      } else {
        return { userCred: null, error: "No such document!" };
      }
    } else {
      return { userCred: null, error: "User not found!" };
    }
  } catch (error) {
    //* Modify Error message
    error.message = formatFirebaseResponseError(error?.code);
    return {
      userCred: null,
      error: error.message,
    };
  }
};

export const registerAPI = async ({ name, email, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const User = userCredential.user;
    if (User && User.uid) {
      const docRef = doc(db, "users", User.uid);
      await setDoc(docRef, {
        name: name,
        email: email,
        uid: User.uid,
        date: new Date().toISOString(),
      });
      return { userCred: { name, email, uid: User.uid }, error: null };
    } else {
      return { userCred: null, error: "User not created! (user db issue!)" };
    }
  } catch (error) {
    //* Modify Error message
    error.message = formatFirebaseResponseError(error?.code);
    return {
      userCred: null,
      error: error.message,
    };
  }
};

export const logoutAPI = async () => {
  try {
    await auth.signOut();
    return { userCred: null, error: null };
  } catch (error) {
    //* Modify Error message
    error.message = formatFirebaseResponseError(error?.code);
    return {
      userCred: null,
      error: error.message,
    };
  }
};

export const googleLoginAPI = async () => {
  try {
    console.log("Google Login API");
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    if (user && user.uid) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { userCred: docSnap.data(), error: null };
      } else {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          date: new Date().toISOString(),
        });
        return { userCred: { name: user.displayName, email: user.email, uid: user.uid }, error: null };
      }
    } else {
      return { userCred: null, error: "User not found!" };
    }

  } catch (error) {
    error.message = formatFirebaseResponseError(error?.code);
    return {
      userCred: null,
      error: error.message,
    };
  }
};
