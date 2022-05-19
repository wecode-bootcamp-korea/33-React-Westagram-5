import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginHaeYongLee.scss';
// FIXME: common, reset import 위치
import '../../../styles/reset.scss';
import '../../../styles/common.scss';

function LoginHaeYongLee() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-HaeYongLee');
  };

  //FIXME: 공통된 관심사는 같은 state
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  //FIXME: 구조분해할당 필요 여부
  const handleIdInput = event => {
    const { value } = event.target;
    setId(value);
  };

  const handlePwInput = event => {
    const { value } = event.target;
    setPw(value);
  };

  const isInputValid = id.includes('@') && pw.length >= 5;

  // FIXME : top level className
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
              // FIXME: 삼항연산자 true false
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
              <Link to="/Login-HaeYongLee" className="facebookLogin">
                <img
                  src="/images/HaeYongLee/facebookLogo.png"
                  width="14px"
                  alt="facebook logo"
                />
                Facebook으로 로그인
              </Link>
            </div>
            <Link className="forgetPW" to="/Login-HaeYongLee">
              비밀번호를 잊으셨나요?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginHaeYongLee;
