import React, { useState, useRef } from 'react';
import Nav from '../../../components/Nav/Nav';
import CommentBox from '../components/CommentBox';
import './MainJiHoo.scss';

const MainJiHoo = () => {
  const nextId = useRef(1);
  const [value, setValue] = useState('');
  const [comment, setComment] = useState([]);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    setComment([
      ...comment,
      {
        id: nextId.current,
        text: value,
        name: 'dlwlrma',
      },
    ]);
    setValue('');
    nextId.current += 1;
    e.preventDefault();
  };
  const handleDelete = id => {
    setComment(comment.filter(com => com.id !== id));
  };

  return (
    <div class="JiHoo">
      <section>
        <Nav />
        <main>
          <div className="feeds">
            <article>
              <div className="userInfor">
                <img
                  className="usericon"
                  src="/images/JiHoo/usericon.png"
                  alt="usericon"
                />
                <span className="nickName">jihoo</span>
                <img className="more" src="/images/JiHoo/more.PNG" alt="more" />
              </div>
              <img
                className="img"
                src="/images/JiHoo/icecream.jpg"
                alt="icecream"
              />
              <div className="feed">
                <div className="feed_icons">
                  <span className="like_icon">
                    <i className="fa-solid fa-heart fa-2x" />
                  </span>
                  <span className="comment_icon">
                    <i className="fa-regular fa-comment fa-2x" />
                  </span>
                  <span className="send_icon">
                    <i className="fa-regular fa-paper-plane fa-2x" />
                  </span>
                  <span className="bookmark_icon">
                    <i className="fa-regular fa-bookmark fa-2x" />
                  </span>
                </div>
                <div className="feed_content">
                  <div className="like">
                    <img
                      className="user_icon"
                      src="/images/JiHoo/usericon.PNG"
                      alt="usericon"
                    />
                    <span className="name">jihoo</span>님
                    <span className="name">외 306명</span>이 좋아합니다
                  </div>
                  <div className="comment">
                    <ul>
                      <li>&nbsp;jihoo 청담 베스킨라빈스 브라운에서~~ 더보기</li>
                      <li>dlwlrma 다음에 같이가자~~~</li>
                      <CommentBox
                        comment={comment}
                        setComment={setComment}
                        handleDelete={handleDelete}
                      />
                      1시간전
                    </ul>
                  </div>
                  <form className="comment_upload" onSubmit={onSubmit}>
                    <input
                      className="commentUpload"
                      type="text"
                      placeholder="댓글 달기..."
                      onChange={onChange}
                      value={value}
                    />
                    <button className="btn" type="submit">
                      게시
                    </button>
                  </form>
                </div>
              </div>
            </article>
          </div>
          <div className="main-right">
            <div className="users">
              <img
                src="/images/JiHoo/usericon2.PNG"
                className="storyicon"
                alt="usericon2"
              />
              <span className="jihoo">jihoo1</span>
              <span className="follow">팔로우</span>
            </div>
            <div className="users">
              <img
                src="/images/JiHoo/usericon2.PNG"
                className="storyicon"
                alt="usericon2"
              />
              <span className="jihoo">jihoo2</span>
              <span className="follow">팔로우</span>
            </div>
            <div className="users">
              <img
                src="/images/JiHoo/usericon2.PNG"
                className="storyicon"
                alt="usericon2"
              />
              <span className="jihoo">jihoo3</span>
              <span className="follow">팔로우</span>
            </div>
            <div className="users">
              <img
                src="/images/JiHoo/usericon2.PNG"
                className="storyicon"
                alt="usericon2"
              />
              <span className="jihoo">jihoo4</span>
              <span className="follow">팔로우</span>
            </div>
            <div className="users">
              <img
                src="/images/JiHoo/usericon2.PNG"
                className="storyicon"
                alt="usericon2"
              />
              <span className="jihoo">jihoo5</span>
              <span className="follow">팔로우</span>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default MainJiHoo;
