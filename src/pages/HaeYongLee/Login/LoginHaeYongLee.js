import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginHaeYongLee.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';

function LoginHaeYongLee() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-HaeYongLee');
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const handleIdInput = event => {
    setId(event.target.value);
  };

  const handlePwInput = event => {
    setPw(event.target.value);
  };

  const isInputValid = id.includes('@') && pw.length >= 5;

  return (
    <section className="loginSection">
      <div className="login">
        <div className="loginBorder">
          <div className="westa">
            <span>westagram</span>
          </div>
          <div className="westsaLogin">
            <div className="inputID">
              <input
                type="text"
                className="westaID"
                name="userID"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleIdInput}
                required
              />
            </div>
            <div className="inputPW">
              <input
                type="password"
                name="userPassword"
                className="westaPW"
                placeholder="비밀번호"
                onChange={handlePwInput}
                required
              />
            </div>
            <button
              type="button"
              onClick={goToMain}
              className={isInputValid ? 'buttonLogin' : 'buttonLoginDisabled'}
              disabled={isInputValid ? false : true}
            >
              로그인
            </button>
            <div className="orStick">
              <div className="stick">
                <hr />
              </div>
              <div className="or">또는</div>
              <div className="stick">
                <hr />
              </div>
            </div>
            <div className="fbLogin">
              <a className="facebookLogin" href="#!">
                <img
                  src="/images/HaeYongLee/facebookLogo.png"
                  width="14px"
                  alt="facebook logo"
                />{' '}
                Facebook으로 로그인
              </a>
            </div>
            <a className="forgetPW" href="#!">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginHaeYongLee;
