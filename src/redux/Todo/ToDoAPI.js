import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../../Config/firebaseInit";

export const addItemAPI = async (item) => {
  const docRef = doc(collection(db, "todos"));
  item = { ...item, Date: new Date().toISOString()};
  await setDoc(docRef, item);
  return { id: docRef.id, ...item };
};

export const editItemAPI = async (id, updates) => {
    console.log("editItemAPI : ", id, updates);
    const docRef = doc(db, "todos", id);
    await setDoc(docRef, updates, { merge: true });
    // return { id, ...updates };
};

export const deleteItemAPI = async (id) => {
  const docRef = doc(db, "todos", id);
  await deleteDoc(docRef);
};

export const toggleItemAPI = async (id) => {
  const todoRef = doc(db, "todos", id);
  const docSnap = await getDoc(todoRef);

  if (docSnap.exists()) {
    // Toggle the completed status
    const currentStatus = docSnap.data().completed;
    await setDoc(todoRef, { completed: !currentStatus }, { merge: true });
  } else {
    console.log("No such document!");
  }
  console.log("Toggled : ", id);
};

export const fetchItemsAPI = async () => {
  // const q = query(collection(db, "cities"), where("capital", "==", true));
  const q = query(collection(db, "todos"));
  const querySnapshot = await getDocs(q);
  const items = [];
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
};
