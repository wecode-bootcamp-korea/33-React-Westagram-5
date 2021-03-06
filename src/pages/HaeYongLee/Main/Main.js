import './Main.scss';

function Main() {
  return (
    <div className="main">
      <nav className="westa_nav">
        <div className="container_nav1">
          <i className="fa-brands fa-instagram fa-2x" />
          <h1 className="westagram_head">Westagram</h1>
        </div>
        <div className="westa_search">
          <input
            type="text"
            placeholder="검색"
            className="searchbar_westa"
            maxlength="10"
          />
          <i className="fa-solid fa-magnifying-glass" />
          <div className="container_nav2" />
        </div>
        <div className="container_nav2">
          <img
            className="nav_img"
            src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          />
          <img
            className="nav_img"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          />
          <img
            className="nav_img"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png
      "
          />
        </div>
      </nav>

      <main className="westa_main">
        <div className="feeds">
          <article className="westa_article">
            <header>
              <div className="profile_article">
                <img
                  alt="프로필사진"
                  src="https://images.unsplash.com/photo-1651315450323-3c3ebec40539?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80"
                  className="user_info_img"
                />
                <span className="name">Camille</span>
              </div>
              <div className="more_icon">
                <i className="fa-solid fa-ellipsis" />
              </div>
            </header>
            <div className="feeds_image">
              <img
                className="feeds_img"
                src="https://images.unsplash.com/photo-1651232298012-d61ab5437bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              />
            </div>
            <div className="icon_reaction">
              <div className="reaction_left">
                <button onclick="Toggle1()" className="heartBtn" id="btn1">
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
                <img
                  className="picture"
                  src="https://images.unsplash.com/photo-1651522356854-624fcd9dc3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                />
                <p>
                  <span className="point-span">heyhey</span>님{' '}
                  <span className="point-span">외 200명</span>이 좋아합니다
                </p>
              </div>
              <div className="infomation">
                <p>
                  <span className="like_id">ka_doggy</span>
                  <span className="at-tag">I'm gonna be going to start...</span>
                  <span className="like_more">더 보기</span>
                </p>
              </div>
              <div className="comment_section">
                <ul className="comments">
                  <li>
                    <span>
                      <span className="point-span userID">justin_beboy</span>
                      푸하하하
                    </span>
                    <button onclick="Toggle2()" className="heartBtn2" id="btn2">
                      <i className="fa-regular fa-heart" />
                    </button>
                  </li>
                </ul>
                <div className="time_log">
                  <span>20분 전</span>
                </div>
                <ul id="comment-list" />
                <form id="comment-form" className="commentFormclass">
                  <input
                    type="text"
                    className="makeComment"
                    placeholder="댓글 달기..."
                    required
                  />
                  <button type="submit" className="comment-btn">
                    게시
                  </button>
                </form>
              </div>
            </div>
          </article>
        </div>

        <aside className="main_aside">
          <div className="main-right">
            <div className="myProfile">
              <img
                className="pic"
                src="https://i.pinimg.com/564x/a9/e3/6d/a9e36da99a46d46dbbb209a562c7e673.jpg"
                alt="whatever님의 프로필 사진"
              />
              <div className="users">
                <span className="user_id_span">whatever_4ever</span>
                <span className="sub_span">LEELEE | HI</span>
              </div>
            </div>
            <div className="story_section">
              <div className="menu_title">
                <span className="sub_title">스토리</span>
                <span className="more">모두 보기</span>
              </div>
              <ul className="story_list">
                <li>
                  <div className="gradient-wrap">
                    <img
                      className="story_image"
                      src="https://images.velog.io/images/inyong_pang/post/f0ea605d-c2d9-460c-aedc-a0ec77e6759f/wecode.png"
                      alt="wecode_bootcamp님의 프로필 사진"
                    />
                  </div>
                  <div className="profile_text">
                    <span className="user_id_span">wecode_bootcamp</span>
                    <span className="sub_span">12분 전</span>
                  </div>
                </li>
                <li>
                  <div className="gradient-wrap">
                    <img
                      className="story_image"
                      src="https://images.unsplash.com/photo-1651440204317-acca48e8a7bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="hihihi님의 프로필 사진"
                    />
                  </div>
                  <div className="profile_text">
                    <span className="user_id_span">hihihi</span>
                    <span className="sub_span">55분 전</span>
                  </div>
                </li>
                <li>
                  <div className="gradient-wrap">
                    <img
                      className="story_image"
                      src="https://i.pinimg.com/564x/af/28/6e/af286e38dfa0d08641aa1074ee84e48b.jpg"
                      alt="foeveryoung님의 프로필 사진"
                    />
                  </div>
                  <div className="profile_text">
                    <span className="user_id_span">foeveryoung</span>
                    <span className="sub_span">42분 전</span>
                  </div>
                </li>
                <li>
                  <div className="gradient-wrap">
                    <img
                      className="story_image"
                      src="https://images.unsplash.com/photo-1651326058982-b69e54101907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80"
                      alt="iwannabe님의 프로필 사진"
                    />
                  </div>
                  <div className="profile_text">
                    <span className="user_id_span">iwannabe</span>
                    <span className="sub_span">30분 전</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="recommend_section">
              <div className="menu_title">
                <span className="sub_title">회원님을 위한 추천</span>
                <span className="more">모두 보기</span>
              </div>
              <ul className="recommend-list">
                <li>
                  <div className="recommend_profile">
                    <img
                      className="profile_image"
                      src="https://images.unsplash.com/photo-1651535603013-fe0472dfdbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="balckpink님의 프로필 사진"
                    />
                    <div className="profile_text">
                      <span className="user_id_span">balckpink</span>
                      <span className="sub_span">suhjman님이 팔로우...</span>
                    </div>
                  </div>
                  <span className="btn_follow">팔로우</span>
                </li>
                <li>
                  <div className="recommend_profile">
                    <img
                      className="profile_image"
                      src="https://images.unsplash.com/photo-1651535602931-74144887e487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="hyuns2님의 프로필 사진"
                    />
                    <div className="profile_text">
                      <span className="user_id_span">hyuns2</span>
                      <span className="sub_span">bushman님이 팔로우...</span>
                    </div>
                  </div>
                  <span className="btn_follow">팔로우</span>
                </li>
                <li>
                  <div className="recommend_profile">
                    <img
                      className="profile_image"
                      src="https://images.unsplash.com/photo-1651436005721-d57a96a0a8df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
                      alt="bitcoinmillionair님의 프로필 사진"
                    />
                    <div className="profile_text">
                      <span className="user_id_span">bitcoinmillionair</span>
                      <span className="sub_span">jennyways님 외 5명이...</span>
                    </div>
                  </div>
                  <span className="btn_follow">팔로우</span>
                </li>
              </ul>
            </div>
          </div>
        </aside>
        <footer>
          <p className="script">
            소개 ∙ 도움말 ∙ 홍보 센터 ∙ API ∙ 채용 정보 ∙ 개인정보처리방침 ∙약관
            ∙ 위치 ∙ 인기계정 ∙ 해시태그 ∙ 언어
            <br />
            <br />© 2022 WESTAGRAM
          </p>
        </footer>
      </main>
    </div>
  );
}

export default Main;
