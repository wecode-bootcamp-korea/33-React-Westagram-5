import React from 'react';
import './LoginHaimNam.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginHaimNam() {
  // FIXME: 공통 관심사는 하나의 state
  const [inputId, setIdInput] = useState('');
  const [inputPw, setPwInput] = useState('');

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-HaimNam');
  };

  const handleIdInput = e => {
    setIdInput(e.target.value);
  };

  const handlePwInput = e => {
    setPwInput(e.target.value);
  };

  // FIXME: 함수명
  const btnValidation = () => {
    // FIXME: 삼항연산자 true false X
    const inputCondition =
      inputId.includes('@') && inputPw.length > 5 ? true : false;
    return !inputCondition;
  };

  return (
    // FIXME: top level className
    <div className="big-container">
      <h1 className="title">Westagram</h1>

      <div className="inputs">
        <input
          className="firstBox"
          type="text"
          placeholder="Phone number,username,or email"
          onChange={handleIdInput}
        />
        <input
          className="secondBox"
          type="password"
          placeholder="Password"
          onChange={handlePwInput}
        />

        <button
          onClick={goToMain}
          className="blueButton"
          disabled={btnValidation()}
        >
          Log in
        </button>

        <span className="forgot-password">Forgot password?</span>
      </div>
    </div>
  );
}

export default LoginHaimNam;
