import React from 'react';
import Nav from '../../../components/Nav/Nav';
import './MainJiHoo.scss';

const MainJiHoo = () => {
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
                    <span className="name">jihoo</span> 청담 베스킨라빈스
                    브라운에서~~ 더보기
                    <br />
                    <span className="name">dlwlrma</span> 다음에 같이가자~~~
                    <br /> 1시간전
                  </div>
                  <div className="comment_upload">
                    <input
                      className="commentUpload"
                      type="text"
                      placeholder="댓글 달기..."
                    />
                    <button className="btn" disabled="disabled">
                      게시
                    </button>
                  </div>
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
