import React, { useState } from 'react';
import './LoginKaYoung.scss';
//import React { useState } from 'react';
import { Link } from 'react-router-dom';
//import { configs } from 'eslint-plugin-prettier';

function Login_KaYoung() {
  //로그인 사용자 데이터 + 버튼 활성화
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const isValid = id.includes('@') && 5 <= pw.length;

  const handleIdInput = event => {
    setId(event.target.value);
    console.log('id', id);
  };
  const handlePwInput = event => {
    setPw(event.target.value);
    console.log('pw', pw);
  };

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
              onChange={handleIdInput}
            />
            <input
              type="password"
              className="login_pw"
              id="pw_field"
              placeholder="비밀번호"
              onChange={handlePwInput}
            />
            <Link
              to="/main-kayoung"
              className={isValid ? 'main_btn2' : 'main_btn'}
            >
              <button
                type="submit"
                disabled={isValid ? true : false}
                className="login_btn1"
              >
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

/*id.includes('@') && pw.length >= 5
                    ? 'login_btn3'
                    : 'login_btn1'*/
