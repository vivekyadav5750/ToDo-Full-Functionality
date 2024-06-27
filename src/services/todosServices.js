import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";

import { db } from "../firebase";



export const getTodos = async () => {
  const querySnapshot = await getDocs(collection(db, "todos"));
  const todos = [];
  querySnapshot.forEach((doc) => {
    todos.push({ ...doc.data(), id: doc.id });
  });
  console.log(todos);


//   store the todos in redux store

  return todos;
};

export const getTodo = async (id) => {
  const docRef = doc(db, "todos", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

export const createTodo = async (todo) => {
  const docRef = await addDoc(collection(db, "todos"), todo);
  return docRef.id;
};

// getTodos().then((todos) => {
//     console.log(todos);
// });
