// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import Todos from "./pages/todos";
import Register from "./pages/register";
import Layout from "./Layout";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Config/firebaseInit";

function App() {
  const dispatch = useDispatch();

  // Check user is logged in or not
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log("check User logged in : ", user);
      if (user) {
        const { uid, email } = user;
        dispatch({ type: "user/setUser", payload: { uid, email } });
      } else {
        dispatch({ type: "user/setUser", payload: null });
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Todos />} />
          <Route path="signIn" element={<Login />} />
          <Route path="signUp" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
