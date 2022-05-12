import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginJiHoo.scss';

function LoginJiHoo() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-JiHoo');
  };
  return (
    <div>
      <body>
        <div className="mainBox">
          <div className="loginBox">
            <span className="login_Title">Westagram</span>
            <div className="idPassWord">
              <input
                type="text"
                className="id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                type="password"
                className="passWord"
                placeholder="비밀번호"
              />
              <button className="login_Btn" onClick={goToMain}>
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
