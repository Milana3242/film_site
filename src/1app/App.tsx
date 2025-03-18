import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "../3widgets/Header";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Main } from "../2pageFlat/Main";
import { SignUp } from "../2pageFlat/Authorization/SignUp";
import { SignIn } from "../2pageFlat/Authorization/SignIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index path="" element={<Main/>}></Route>
          <Route index path="auth/signup" element={<SignUp/>}></Route>
          <Route index path="auth/signin" element={<SignIn/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
