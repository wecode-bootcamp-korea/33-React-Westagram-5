import React, { useState, useRef } from 'react';
import Nav from '../../../components/Nav/Nav';
// FIXME: 페이지 내에서 사용하는 컴포넌트 위치 (수정완료)
import CommentBox from './components/CommentBox';
import Users from './components/Users';
import './MainJiHoo.scss';

const MainJiHoo = () => {
  // FIXME: useRef 사용 이유 (블로그정리)

  const nextId = useRef(1);
  // FIXME: 변수명 (?)
  const [value, setValue] = useState('');
  const [comment, setComment] = useState([]);

  const saveState = e => {
    setValue(e.target.value);
  };

  // FIXME: 함수명 (수정완료)
  const addComment = e => {
    if (value.length > 0) {
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
    }
    e.preventDefault();
  };

  const handleDelete = id => {
    setComment(comment.filter(com => com.id !== id));
  };

  return (
    <div className="JiHoo">
      {/* //FIXME: class?  수정완료*/}
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
                      <li>1시간전</li>
                    </ul>
                  </div>
                  <form className="comment_upload" onSubmit={addComment}>
                    <input
                      className="commentUpload"
                      type="text"
                      placeholder="댓글 달기..."
                      onChange={saveState}
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
          {/* FIXME: className (수정완료) */}
          <div className="recommendFriend">
            <div className="users">
              {/* FIXME: 반복되는 UI (수정완료) */}
              <Users />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default MainJiHoo;
