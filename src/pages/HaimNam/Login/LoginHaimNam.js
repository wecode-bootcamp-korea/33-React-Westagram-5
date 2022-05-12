import React from 'react';
import './LoginHaimNam.scss';
import { useNavigate } from 'react-router-dom';

function LoginHaimNam() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };
  return (
    <>
      <div className="big-container">
        <h1 className="title">Westagram</h1>

        <div className="inputs">
          <input
            className="firstBox"
            type="text"
            placeholder="Phone number,username,or email"
          />
          <input className="secondBox" type="password" placeholder="Password" />

          <button onClick={goToMain} className="blueButton">
            Log in
          </button>

          <span className="forgot-password">Forgot password?</span>
        </div>
      </div>
    </>
  );
}

export default LoginHaimNam;
