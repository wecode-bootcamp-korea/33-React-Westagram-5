import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LoginKaYoung from './pages/KaYoung/Login/LoginKaYoung';
// import MainKaYoung from './pages/KaYoung/Main/MainKaYoung';
// import LoginYoonJi from './pages/YoonJi/Login/LoginYoonJi';
// import MainYoonJi from './pages/YoonJi/Main/MainYoonJi';
// import LoginJiHoo from './pages/JiHoo/Login/LoginJiHoo';
// import MainJiHoo from './pages/JiHoo/Main/MainJiHoo';
import LoginHaeYongLee from './pages/HaeYongLee/Login/LoginHaeYongLee';
import MainHaeYongLee from './pages/HaeYongLee/Main/MainHaeYongLee';
// import LoginHaimNam from './pages/HaimNam/Login/LoginHaimNam';
// import MainHaimNam from './pages/HaimNam/Main/MainHaimNam';
// import Loginjaesung from './pages/JaeSung/Login/Login';
// import Mainjaesung from './pages/JaeSung/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login-kayoung" element={<LoginKaYoung />} />
        <Route path="/main-kayoung" element={<MainKaYoung />} />
        <Route path="/login-yoonji" element={<LoginYoonJi />} />
        <Route path="/main-yoonji" element={<MainYoonJi />} />
        <Route path="/login-JiHoo" element={<LoginJiHoo />} />
        <Route path="/main-JiHoo" element={<MainJiHoo />} /> */}
        <Route path="/login-HaeYongLee" element={<LoginHaeYongLee />} />
        <Route path="/main-HaeYongLee" element={<MainHaeYongLee />} />
        {/* <Route path="/login-HaimNam" element={<LoginHaimNam />} />
        <Route path="/main-HaimNam" element={<MainHaimNam />} />
        <Route path="/login-Jaesung" element={<Loginjaesung />} />
        <Route path="/main-Jaesung" element={<Mainjaesung />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
