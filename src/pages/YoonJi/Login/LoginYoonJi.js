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
            onClick={goToMain}
            className={isValid ? 'btnActive' : 'not'}
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
