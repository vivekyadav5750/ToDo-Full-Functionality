import { createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { auth } from "../Config/firebaseInit";
import { db } from "../Config/firebaseInit";
import { formatFirebaseResponseError } from "../utils/formatFirebaseResponseError";

export const loginAPI = async ({email, password}) => {
  try{
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const User = userCredential.user;
    if (User && User.uid) {
        const docRef = doc(db, "users", User.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { userCred : docSnap.data(), error: null };
        } 
        else {
            return { userCred : null, error: "No such document!" };
        }
    }
    else{
        return { userCred : null, error: "User not found!" };
    }
  
  }
    catch (error) {
        //* Modify Error message
        error.message = formatFirebaseResponseError(error?.code);
        return {
            userCred: null,
            error: error.message,
        };
    }
};

export const registerAPI = async ({name, email, password}) => {
  try {
    const userCredential = await createUserWithEmailAndPassword( auth, email, password);
    const User = userCredential.user;
    if (User && User.uid) {
        const docRef = doc(db, "users", User.uid);
        await setDoc(docRef, { name: name, email: email,uid:User.uid ,date: new Date().toISOString() });
        return { userCred : {name, email, uid:User.uid}, error: null };
    }
    else{
        return { userCred : null, error: "User not created! (user db issue!)" };
    }
    
  } 
  catch (error) {
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
  } 
  catch (error) {
    //* Modify Error message
    error.message = formatFirebaseResponseError(error?.code);
    return {
        userCred: null,
        error: error.message,
    };
  }
};
