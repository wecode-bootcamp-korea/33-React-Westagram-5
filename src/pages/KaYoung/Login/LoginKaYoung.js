import React, { useState } from 'react';
import './LoginKaYoung.scss';
import { Link, useNavigate } from 'react-router-dom';
// import { click } from '@testing-library/user-event/dist/click';
//import { configs } from 'eslint-plugin-prettier';

function LoginKaYoung() {
  //로그인 사용자 데이터 + 버튼 활성화
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate('');
  const goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.6.78:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.ACCESS_TOKEN) {
          localStorage.setItem('ACCESS_TOKEN', result.ACCESS_TOKEN);
        } else {
          alert('로그인을 실페하였습니다.');
        }
        navigate('/main-kayoung');
      });
  };

  /* 회원가입  
  fetch('http://10.58.4.219:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
        name: 'kayoung',
        mobile_number: '010-0000-0000',
        date_of_birth: '2022-05-09',
      }),
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
      });
  };*/

  const isValid = id.includes('@') && 5 <= pw.length;

  const handleIdInput = event => {
    setId(event.target.value);
  };
  const handlePwInput = event => {
    setPw(event.target.value);
  };

  return (
    <div className="login_ky">
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
          <button
            type="submit"
            //disabled={isValid ? true : false}
            //className="login_btn1"
            className={isValid ? 'main_btn2' : 'main_btn'}
            onClick={goToMain}
          >
            로그인
          </button>
        </form>
        <footer className="login_footer">
          <Link to="/login-kayoung" className="pw_link">
            비밀번호 잊으셨나요?
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default LoginKaYoung;
