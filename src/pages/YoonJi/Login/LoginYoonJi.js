import React from 'react';
import './LoginYoonJi.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginYoonji() {
  // FIXME: 문맥별 공백
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-yoonji');
  };

  // FIXME: 공통된 관심사는 하나의 state에
  // user input
  // {key: value, key:value}
  // object
  // user id save

  const [userInput, setUserInput] = useState({
    id:"",
    pw:""
  })

  // FIXME: refactoring checklist
  const handleIdInput = event => setId(event.target.value);
  const handlePwInput = event => setPw(event.target.value);

  const isValid = id.includes('@') && pw.length >= 5;

  const login = e => {
    e.preventDefault();
    //   fetch('http://10.58.4.15:8000/users/signup', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       id: id,
    //       pw: pw,
    //       name: 'yoonji',
    //       phonenumber: '01051023367',
    //       personal: 'test',
    //     }),
    //   })
    //     .then(response => response.json())
    //     .then(result => console.log('결과: ', result));
    // };
    fetch('http://10.58.4.15:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        pw: pw,
      }),
    })
      .then(response => {
        if(response.status === 200){
          return response.json()
        }else {
          alter("로그인에 실패했습니다.")
        }
      })
      .then(response => {
        if (response.access_token) {
          localStorage.setItem('token', response.access_token);
        }
      });
    // FIXME: http 성공 여부는 status code
  };

  return (
    <>
      <div className="loginYoonJi">
        <div className="header">Westagram</div>
        <form>
          <input
            onChange={handleIdInput}
            type="text"
            name=""
            // FIXME: id attribute
            id="userId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={handlePwInput}
            type="password"
            name=""
            id="userPwd"
            placeholder="비밀번호"
          />
          <button
            onClick={login}
            className={isValid ? 'btnActive' : ''}
            // FIXME: 삼항연산자 true false X
            // condition ? true value : false value
            disabled={!isValid}
          >
            로그인
          </button>
        </form>
        <div className="footer">비밀번호를 잊으셨나요?</div>
      </div>
    </>
  );
}

export default LoginYoonji;
