import './Reply.scss';
import { useState, useEffect } from 'react';

function Reply() {
  const [reply, setReply] = useState('');
  const [replies, setReplies] = useState([]);
  const onChange = event => setReply(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    if (reply === '') {
      return;
    }
    setReplies(currentArray => [...currentArray, reply]);
    setReply('');
  };
  const deleteBtn = event => {
    const li = event.target.parentElement;
    li.remove();
  };
  return (
    <>
      <ul className="reply">
        {replies.map((item, index) => (
          <li key={index}>
            <div>
              <span>I.like.U</span>
              {item}
            </div>
            <button onClick={deleteBtn}>❌</button>
          </li>
        ))}
      </ul>
      <div className="time">42분 전</div>
      <form className="reply__input" onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={reply}
          className="reply__input__text"
          type="text"
          placeholder="댓글 달기..."
        />
        <button className="reply__input__btn">게시</button>
      </form>
    </>
  );
}

export default Reply;
