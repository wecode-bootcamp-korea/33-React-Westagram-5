import './Feeds.scss';
import { useState, useRef, useEffect } from 'react';
import Comment from '../Comments/Comment';

function Feeds({ name, text, src, profile }) {
  const [value, setValue] = useState(''); // value값을 저장해줌
  const [comment, setComment] = useState([]); // 들어온 value 값을 배열로 만들어준다.
  const nextId = useRef(0); // 아이디의 useRef에 0을 할당하면서 초기화해준다.
  const onChange = e => {
    setValue(e.target.value); // input에 값이 들어오면,(onChange에 e(이벤트)가 들어오면)
  };
  const onSubmit = e => {
    setComment([
      ...comment, // ...comment의 의미는 기존 comment의 모든 원소를 그대로 가져오고 그 뒤에 key,value값에  새로추가한 배열을 할당.
      value,
    ]);
    /* {
      id: nextId.current,
      text: value,*/
    nextId.current += 1;
    setValue('');
    e.preventDefault();
  };

  useEffect(() => {
    fetch('/data/commentData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setComment(data);
      });
  }, []);
  return (
    <div className="feeds">
      <article className="westa_article">
        <header>
          <div className="profile_article">
            <img alt="프로필사진" src={profile} className="user_info_img" />
            <span className="name">{name}</span>
          </div>
          <div className="more_icon">
            <i className="fa-solid fa-ellipsis" />
          </div>
        </header>
        <div className="feeds_image">
          <img
            className="feeds_img"
            alt="feedsImg"
            src="https://images.unsplash.com/photo-1651232298012-d61ab5437bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
        </div>
        <div className="icon_reaction">
          <div className="reaction_left">
            <button className="heart_btn " id="btn1">
              <i className="fa-regular fa-heart" />
            </button>
            <i className="fa-regular fa-comment fa-lg" />
            <i className="fa-regular fa-paper-plane fa-lg" />
          </div>
          <div className="reaction_right">
            <i className="fa-regular fa-bookmark fa-lg" />
          </div>
        </div>
        <div className="reaction">
          <div className="like_people">
            <img className="picture" alt="pictureImg" src={src} />
            <p>
              <span className="point-span">heyhey</span>님{' '}
              <span className="point-span">외 200명</span>이 좋아합니다
            </p>
          </div>
          <div className="infomation">
            <p>
              <span className="like_id">camille</span>
              <span className="at-tag">{text}</span>
              <span className="like_more">더 보기</span>
            </p>
          </div>
          <div className="comment_section">
            <div className="time_log">
              <span className="log_comment">20분 전</span>
            </div>

            <Comment comment={comment} />
            <form
              id="comment-form"
              className="comment_form_class"
              onSubmit={onSubmit}
            >
              <input
                type="text"
                className="makeComment"
                placeholder="댓글 달기..."
                required
                onChange={onChange}
                value={value}
                maxLength={10}
              />
              <button type="submit" className="comment-btn">
                게시
              </button>
            </form>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Feeds;
