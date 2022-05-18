//import React from 'react';
import './Login.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loginjaesung() {
  const navigate = useNavigate();
  const goTomain = () => {
    fetch('http://10.58.3.119:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log('결과:', result);
        if (result.ACCESS_TOKEN) {
          localStorage.setItem('token', result.ACCESS_TOKEN);
        }
      });
    navigate('/main-Jaesung');
  };
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const InputValue = id.includes('@') && pw.length >= 5;

  const handleIdIput = event => {
    const { value } = event.target;
    setId(value);
  };
  // const handleIdIput = event => {
  //   setId(event.target.value);
  // };
  const handlePwInput = event => {
    const { value } = event.target;
    setPw(value);
  };

  // const handlePwInput = event => {
  //   setPw(event.target.value);
  // };

  // const loginApi = () => {
  //   fetch('http://10.58.3.119:8000/users/signin', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: id,
  //       password: pw,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => console.log('결과: ', result))
  //     .then(response => {
  //       if (response.ACCESS_TOKEN) {
  //         localStorage.setItem('token', response.ACCESS_TOKEN);
  //       }
  //     });
  //   navigate('/main-Jaesung');
  // };

  return (
    <html className="loginhtml">
      <body className="loginbody">
        <div className="login-background">
          <main className="container">
            <span className="logo">westagram</span>
            <div className="input-box">
              <input
                className="login-input"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleIdIput}
              />
              <input
                className="password-input"
                type="password"
                placeholder="비밀번호"
                onChange={handlePwInput}
              />
              <button
                className={InputValue ? 'login-button' : 'login-buttonDisabled'}
                onClick={goTomain}
                disabled={InputValue ? false : true}
              >
                로그인
              </button>
            </div>
          </main>
          <span className="miss-password">
            <a href=" ">비밀번호를 잊으셨습니까?</a>
          </span>
        </div>
      </body>
    </html>
  );
}

export default Loginjaesung;
