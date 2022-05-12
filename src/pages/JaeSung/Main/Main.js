import './Main.scss';

function Mainjaesung() {
  return (
    <>
      <body className="mainbody">
        <nav className="navbar">
          <div className="nav-wrapper">
            <img src="/images/1.png" alt="" className="logo-img" />
            <h4>
              <span className="westagram-text">westagram</span>
            </h4>
            <input type="text" className="search-bar" placeholder="검색" />
            <div className="nav-items">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt=""
                className="icon"
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt=""
                className="icon"
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt=""
                className="icon"
              />
              <img src="/images/profile.jpeg" alt="" className="user-profile" />
            </div>
          </div>
        </nav>
        <section className="main">
          <div className="wrapper">
            <div className="left-col">
              <div className="status-wrapper">
                <div className="status-card">
                  <div className="profile-pic">
                    <img src="/images/메시.jpeg" alt="" />
                    <p className="username">leonel_messi</p>
                  </div>
                </div>
                <div className="status-card">
                  <div className="profile-pic">
                    <img src="/images/손흥민.jpeg" alt="" />
                    <p className="username">mbappe</p>
                  </div>
                </div>
                <div className="status-card">
                  <div className="profile-pic">
                    <img src="/images/호날두.jpeg" alt="" />
                    <p className="username">christiano</p>
                  </div>
                </div>
                <div classNamess="status-card">
                  <div className="profile-pic">
                    <img src="/images/음바페.jpeg" alt="" />
                    <p className="username">sonny</p>
                  </div>
                </div>
              </div>

              <div className="post">
                <div className="info">
                  <div className="user">
                    <div className="profile-pic">
                      <img src="/images/profile.jpeg" alt="" />
                    </div>
                    <p className="username">jungnaldo</p>
                  </div>
                  <img
                    className="option"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOC3poGzIqWF-GTj1r60gpibuc3DmB2r9MAQ&usqp=CAU"
                    alt=""
                  />
                </div>
                <img
                  src="/images/postiamge.jpeg"
                  className="post-image"
                  alt=""
                />
                <div className="post-content">
                  <p className="likes">20명이 좋아합니다</p>
                  <p className="description">
                    <span>jungnaldo</span> 놀러가고싶다~!!
                  </p>
                  <p className="post-time">20분전</p>
                  <ul id="commentLists">
                    <li></li>
                  </ul>
                </div>

                <div className="comment-wrapper">
                  <input
                    type="text"
                    className="comment-box"
                    placeholder="댓글을 입력하세요"
                  />
                  <button className="comment-btn">게시</button>
                </div>
              </div>
            </div>
            <div className="right-col">
              <div className="myanother">
                <div className="profile-pic">
                  <img src="/images/날순.png" alt="" />
                </div>
                <div>
                  <p classNamess="username">nalsoon</p>
                  <p className="sub-text">followed user</p>
                </div>
                <buttom class="action-btn">switch</buttom>
              </div>
              <p classNameass="suggestion-text">추천친구</p>
              <div className="profile-card">
                <div className="profile-pic">
                  <img src="/images/손흥민.jpeg" alt="" />
                </div>
                <div>
                  <p className="username">mbappe</p>
                  <p className="sub-text">followed user</p>
                </div>
                <buttom className="action-btn">follow</buttom>
              </div>
              <div className="profile-card">
                <div className="profile-pic">
                  <img src="/images/호날두.jpeg" alt="" />
                </div>
                <div>
                  <p className="username">christiano</p>
                  <p className="sub-text">followed user</p>
                </div>
                <buttom className="action-btn">follow</buttom>
              </div>
              <div className="profile-card">
                <div className="profile-pic">
                  <img src="/images/메시.jpeg" alt="" />
                </div>
                <div>
                  <p className="username">leonel_messi</p>
                  <p className="sub-text">followed user</p>
                </div>
                <buttom className="action-btn">follow</buttom>
              </div>
              <div className="profile-card">
                <div className="profile-pic">
                  <img src="/images/음바페.jpeg" alt=" " />
                </div>
                <div>
                  <p className="username">sonny</p>
                  <p className="sub-text">followed user</p>
                </div>
                <buttom className="action-btn">follow</buttom>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Mainjaesung;
