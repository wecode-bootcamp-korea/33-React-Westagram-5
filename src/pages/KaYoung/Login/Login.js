//import React from 'react';
import './Login.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login">
      <body>
        <div className="westaWrap">
          <header className="westa">Westagram</header>
          <form id="login_form" action="">
            <input
              type="text"
              className="login_id"
              id="id_field"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              type="password"
              className="login_pw"
              id="pw_field"
              placeholder="비밀번호"
            />
            <Link to="/main">
              <button type="submit" className="login_btn">
                로그인
              </button>
            </Link>
          </form>
          <footer className="login_footer">
            <a href="">비밀번호 잊으셨나요?</a>
          </footer>
        </div>
      </body>
    </div>
  );
}

export default Login;
