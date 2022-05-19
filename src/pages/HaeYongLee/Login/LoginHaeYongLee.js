import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginHaeYongLee.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';

function LoginHaeYongLee() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-HaeYongLee');
    fetch('http://10.58.6.78:8000/', {
      method: 'POST',
      body: JSON.stringify({
        name: 'HaeYong',
        email: id,
        password: pw,
        phone_number: '010-1234-5678',
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.access_token) {
          localStorage.setItem('login-token', response.access_token);
        }
        console.log(response);
        console.log(localStorage);
      })
      .then(result => console.log('결과: ', result));
  };

  let token = localStorage.getItem('wtw-token') || '';

  fetch('http://10.58.4.207:8000/users/login', {
    headers: {
      Authorization: token,
    },
  })
    .then(response => response.json())
    .then(response => {
      console.log(response.data);
    });

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const handleIdInput = event => {
    const { value } = event.target;
    setId(value);
  };

  const handlePwInput = event => {
    const { value } = event.target;
    setPw(value);
  };
  // 객체로 바꿔서 한번에 정리 가능
  // const [userInput, setUserInput] = useState({id:””, pw: “”})

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
