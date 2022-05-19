import '../../pages/YoonJi/Main/MainYoonJi.scss';
import { useState, useEffect, useRef } from 'react';
import Reply from './Reply';
function Feed({ userName, content, src, userProfile }) {
  const [reply, setReply] = useState('');
  const [replies, setReplies] = useState([]);
  const nextId = useRef(4);
  const onChange = event => setReply(event.target.value);
  const onSubmit = event => {
    event.preventDefault();
    if (reply === '') {
      return;
    }
    setReplies(currentArray => [
      ...currentArray,
      {
        id: nextId.current,
        userName: 'wow1984',
        content: reply,
      },
    ]);
    setReply('');
    nextId.current += 1;
  };
  const deleteBtn = event => {
    const li = event.target.parentElement;
    li.remove();
  };

  // Mockdata 가져오기
  useEffect(() => {
    fetch('data/CommentData.json')
      .then(res => res.json())
      .then(data => {
        setReplies(data);
      });
  }, []);

  return (
    <section className="feeds">
      <article>
        <div className="user">
          <div className="profile__container">
            <div className="myprofile">
              <img src={userProfile} alt="신윤지" />
            </div>
            <span>{userName}</span>
          </div>
          <div className="user__icon">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <div className="photo">
          <img src={src} alt="신복순" />
        </div>
        <div className="reaction__container">
          <div className="reaction">
            <div className="reaction__left">
              <i className="fas fa-heart"></i>
              <i className="far fa-comment"></i>
              <i className="far fa-share-square"></i>
            </div>
            <div className="reaction__right">
              <i className="far fa-bookmark"></i>
            </div>
          </div>
          <div className="like">
            <div className="like__profile">
              <img src="./images/YoonJi/like__profile.jpg" alt="박계영" />
            </div>
            <p className="like__text">
              <span>Sally</span>님 <span>외 10명</span>이 좋아합니다
            </p>
          </div>
          <div className="feeds__text">
            <span>{userName}</span> {content}
          </div>
          <br />
          {/* 리플 들어가는 곳 */}

          <Reply replies={replies} deleteBtn={deleteBtn} />

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
        </div>
      </article>
    </section>
  );
}
export default Feed;
