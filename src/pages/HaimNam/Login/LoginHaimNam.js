import React from 'react';
import './LoginHaimNam.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginHaimNam() {
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

  return (
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

        <button onClick={goToMain} className="blueButton">
          Log in
        </button>

        <span className="forgot-password">Forgot password?</span>
      </div>
    </div>
  );
}

export default LoginHaimNam;
