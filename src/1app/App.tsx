import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import '../App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../3widgets/Header';
import { DefaultLayout } from './layout/DefaultLayout';
import { Main } from '../2pageFlat/Main';
import { SignUp } from '../2pageFlat/Authorization/SignUp';
import { SignIn } from '../2pageFlat/Authorization/SignIn';
import { AllFilmsRender } from '../2pageFlat/FilmsRender/AllFilmsRender';
import { OneFilmRender } from '../2pageFlat/FilmsRender/OneFilmRender';

function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index path="" element={<Main />}></Route>
          <Route index path="auth/signup" element={<SignUp />}></Route>
          <Route index path="auth/signin" element={<SignIn />}></Route>
          <Route index path="films" element={<AllFilmsRender />}></Route>
          <Route index path="film-open/:id" element={<OneFilmRender />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
