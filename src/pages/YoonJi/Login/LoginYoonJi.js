import React from 'react';
import './LoginYoonJi.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function LoginYoonji() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-yoonji');
  };

  const [id, setId] = useState('');
  const handleIdInput = event => setId(event.target.value);
  const [pw, setPw] = useState('');
  const handlePwInput = event => setPw(event.target.value);

  const isValid = id.includes('@') && pw.length >= 5;

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
    //   .then(response => response.json())
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
      <div className="container">
        <div className="header">Westagram</div>
        <form>
          <input
            onChange={handleIdInput}
            type="text"
            name=""
            id="userId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={handlePwInput}
            type="password"
            name=""
            id="userPwd"
            placeholder="비밀번호"
          />
          <button
            onClick={login}
            className={isValid ? 'btnActive' : ''}
            disabled={isValid ? false : true}
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
