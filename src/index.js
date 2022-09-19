import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import LogoutPage from './components/pages/LogoutPage'
import ProtectedPage from './components/pages/ProtectedPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {RecoilRoot} from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedPage/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/logout' element={<LogoutPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
