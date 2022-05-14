//import React from 'react';
import './LoginKaYoung.scss';
//import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login_KaYoung() {
  const [id, setId] = useState('');
  function handleInput(event) {
    setId(event.target.value);
    console.log('id', id);
  }
  const [pw, setPw] = useState('');
  function handlePwInput(event) {
    setPw(event.target.value);
    console.log('pw', pw);
  }
  return (
    <div className="login_ky">
      <body>
        <div className="westaWrap">
          <header className="westa">Westagram</header>
          <form id="login_form" action="">
            <input
              type="text"
              className="login_id"
              id="id_field"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleInput}
            />
            <input
              type="password"
              className="login_pw"
              id="pw_field"
              placeholder="비밀번호"
              onChange={handlePwInput}
            />
            <Link to="/main-kayoung" className="main_btn">
              <button type="submit" className="login_btn1">
                로그인
              </button>
            </Link>
          </form>
          <footer className="login_footer">
            <a href="/" className="pw_link">
              비밀번호 잊으셨나요?
            </a>
          </footer>
        </div>
      </body>
    </div>
  );
}

export default Login_KaYoung;
