import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginJiHoo.scss';

function LoginJiHoo() {
  // FIXME: 공통된 관심사는 같은 state
  const [isId, setIsId] = useState('');
  const [isPassWord, setIsPassWord] = useState('');

  const handleIdInput = e => {
    setIsId(e.target.value);
  };
  const handlePwInput = e => {
    setIsPassWord(e.target.value);
  };

  const isInputValid = isId.includes('@') && isPassWord.length >= 5;

  // FIXME: 필요없음

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-JiHoo');
  };

  return (
    <div>
      {/* FIXME: body tag */}
      <body>
        <div className="mainBox">
          <div className="loginBox">
            <span className="login_Title">Westagram</span>
            <div className="idPassWord">
              <input
                type="text"
                className="id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                // input 창에 안에 들어있는 글자
                // FIXME: value property
                value={isId}
                onChange={handleIdInput}
              />
              <input
                type="password"
                className="passWord"
                placeholder="비밀번호"
                onChange={handlePwInput}
              />
              <button
                className="login_Btn"
                onClick={goToMain}
                disabled={!isInputValid}
              >
                로그인
              </button>
            </div>
            <span className="forget">비밀번호를 잊으셨나요?</span>
          </div>
        </div>
      </body>
    </div>
  );
}
export default LoginJiHoo;
