import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginJiHoo.scss';

function LoginJiHoo() {
  // FIXME: 공통된 관심사는 같은 state (수정완료)

  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  });

  const { id, pw } = inputValue;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const isInputValid = id.includes('@') && pw.length >= 5;

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-JiHoo');
  };

  return (
    <div className="LoginJiHoo">
      {/* FIXME: body tag (수정완료) */}
      <div className="mainBox">
        <div className="loginBox">
          <span className="loginTitle">Westagram</span>
          <div className="idPassWord">
            <input
              type="text"
              className="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              // input 창에 안에 들어있는 글자 (수정완료)
              // FIXME: value property (수정완료)
              value={id}
              name="id"
              onChange={handleInput}
            />
            <input
              type="password"
              className="passWord"
              placeholder="비밀번호"
              value={pw}
              name="pw"
              onChange={handleInput}
            />
            <button
              className="loginBtn"
              onClick={goToMain}
              disabled={!isInputValid}
            >
              로그인
            </button>
          </div>
          <span className="forget">비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    </div>
  );
}
export default LoginJiHoo;
