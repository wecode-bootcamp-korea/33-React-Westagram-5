//import React from 'react';
import './Login.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Loginjaesung() {
  const navigate = useNavigate();

  const goTomain = () => {
    navigate('/main-Jaesung');
  };

  return (
    <body className="loginbody">
      <div class="login-background">
        <main class="container">
          <span class="logo">westagram</span>
          <div class="input-box">
            <input
              class="login-input"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              class="password-input"
              type="password"
              placeholder="비밀번호"
            />
            <button class="login-button" onClick={goTomain}>
              로그인
            </button>
          </div>
        </main>
        <span class="miss-password">
          <a href="">비밀번호를 잊으셨습니까?</a>
        </span>
      </div>
    </body>
  );
}

export default Loginjaesung;
