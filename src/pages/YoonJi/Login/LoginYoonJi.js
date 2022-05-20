import React from 'react';
import './LoginYoonJi.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function LoginYoonji() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-yoonji');
  };

  const [userInput, setUserInput] = useState({
    id: '',
    pw: '',
  });
  const handleInput = e => {
    // const {name, value} = e.target;
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
      // [name]: value;
    });
  };

  const isValid = userInput.id.includes('@') && userInput.pw.length >= 5;

  const login = e => {
    e.preventDefault();
    //   fetch('http://10.58.4.15:8000/users/signup', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       id: id,
    //       pw: pw,
    //       name: 'yoonji',
    //       phonenumber: '01051023367',
    //       personal: 'test',
    //     }),
    //   })
    //     .then(response => response.json())
    //     .then(result => console.log('결과: ', result));
    // };
    // fetch('http://10.58.4.15:8000/users/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     id: id,
    //     pw: pw,
    //   }),
    // })
    //   .then(response => {
    //     // json()가 body만 받아와서 두번째 then에서는 status값을 찾을 수 없음
    //     if (response.ok) {
    //     return response.json()
    //   })
    //   .then(response => {
    //     if (response.access_token) {
    //       // localStorage에 토큰 저장
    //       localStorage.setItem('token', response.access_token);
    goToMain();
    //   }
    // });
  };

  // localStorage에서 token 가져오기
  let token = localStorage.getItem('token') || '';

  return (
    <>
      <div className="yoonji-container">
        <div className="header">Westagram</div>
        <form>
          <input
            onChange={handleInput}
            type="text"
            name="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={handleInput}
            type="password"
            name="pw"
            placeholder="비밀번호"
          />
          <button
            onClick={login}
            className={isValid ? 'btnActive' : ''}
            disabled={!isValid}
          >
            로그인
          </button>
        </form>
        <div className="footer">비밀번호를 잊으셨나요?</div>
      </div>
    </>
  );
}

export default LoginYoonji;
