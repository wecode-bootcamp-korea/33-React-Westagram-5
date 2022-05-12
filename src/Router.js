/*
import LoginJiHoo from './pages/JiHoo/Login/Login';
import MainJiHoo from './pages/JiHoo/Main/Main';

import LoginKaYoung from './pages/KaYoung/Login/Login';
import MainKayoung from './pages/KaYoung/Main/Main';


import LoginYoonJi from './pages/YoonJi/Login/Login';
import MainYoonJi from './pages/YoonJi/Main/Main';


import LoginJaeSung from './pages/JaeSung/Login/Login';
import MainJaeSung from './pages/JaeSung/Main/Main';

import LoginYong from './pages/HaeYongLee/Login/Login';
import MainYong from './pages/HaeYongLee/Main/Main';


import LoginHaimNam from './pages/HaimNam/Login/Login';
import MainHaimNam from './pages/HaimNam/Main/Main';

<Route path='/login-HaimNam' element={<LoginHaimNam />} />
<Route path='/main-HaimNam' element={<MainHaimNam  />} />

<Route path='/login-HaeYongLee' element={<LoginHaeYongLee />} />
<Route path='/main-HaeYongLee' element={<MainHaeYongLee />} />

<Route path='/login-JiHoo' element={<LoginJoon />} />
<Route path='/main-JiHoo' element={<MainJoon />} />

<Route path='/login-yoonji' element={<LoginJongTaek />} />
<Route path='/main-yoonji' element={<MainJongTaek />} />

<Route path='/login-Jaesung' element={<Loginjaesung />} />
<Route path='/main-Jaesung' element={<Loginjaesung  />} />

<Route path='/login-KaYoung' element={<LoginHaimNam />} />
<Route path='/main-KaYoung' element={<MainHaimNam  />} />

*/
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginjaesung from './pages/JaeSung/Login/Login';
import Mainjaesung from './pages/JaeSung/Main/Main';
// import Login from './pages/KaYoung/Login/Login';
// import Main from './pages/KaYoung/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-Jaesung" element={<Loginjaesung />} />
        <Route path="/main-Jaesung" element={<Mainjaesung />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
