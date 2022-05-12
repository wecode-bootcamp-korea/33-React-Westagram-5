import './MainYoonJi.scss';
// import React from "react";

function MainYoonji() {
  return (
    <>
      <nav>
        <div className="icon--left">
          <div className="icon--left__img">
            <img src="/images/YoonJi/instagram.png" alt="인스타로고" />
          </div>
          <span id="fontSpecial">Westagram</span>
        </div>
        <div className="icon--middle">
          <input type="text" className="search" placeholder="검색" />
          <i className="fas fa-search"></i>
        </div>
        <div className="icon--right">
          <img src="./images/YoonJi/explore.png" alt="" />
          <img src="images/YoonJi/heart.png" alt="" />
          <img src="images/YoonJi/profile.png" alt="" />
        </div>
      </nav>
      <main>
        <section className="feeds">
          <article>
            <div className="user">
              <div className="profile__container">
                <div className="myprofile">
                  <img src="./images/YoonJi/face.jpg" alt="신윤지" />
                </div>
                <span>Yoonji</span>
              </div>
              <div className="user__icon">
                <i className="fas fa-ellipsis-h"></i>
              </div>
            </div>
            <div className="photo">
              <img src="./images/YoonJi/snake.jpg" alt="신복순" />
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
                <span>syj3367</span> 복순이가 탈출해서 이불에 들어옴
              </div>
              <ul className="reply"></ul>
              <div className="time">42분 전</div>
            </div>
            <form className="reply__input">
              <input
                className="reply__input__text"
                type="text"
                placeholder="댓글 달기..."
                required
              />
              <button className="reply__input__btn">게시</button>
            </form>
          </article>
        </section>
        <aside className="main-right">
          <div className="yourId">
            <div className="yourId__profile">
              <img src="images/YoonJi/wecodeLogo.png" alt="" />
            </div>
            <div className="yourId__name">
              <div className="yourId__id">wecode_bootcamp</div>
              <div className="yourId__place">WeCode | 위코드</div>
            </div>
          </div>
          <div className="story__container">
            <div className="story">
              <div className="stroy__subject">
                <div className="story__name">스토리</div>
                <div className="story__view">모두 보기</div>
              </div>
              <div className="story__profile__box">
                <div className="story__profile">
                  <div className="story__profile__avartar">
                    <img src="images/YoonJi/yumyum.png" alt="" />
                  </div>
                  <div className="story__profile__container">
                    <div className="story__profile__id">yumyum</div>
                    <div className="story__profile__time">3시간 전</div>
                  </div>
                </div>
              </div>
              <div className="story__profile__box">
                <div className="story__profile">
                  <div className="story__profile__avartar">
                    <img src="images/YoonJi/yumyum.png" alt="" />
                  </div>
                  <div className="story__profile__container">
                    <div className="story__profile__id">yumyum</div>
                    <div className="story__profile__time">3시간 전</div>
                  </div>
                </div>
              </div>
              <div className="story__profile__box">
                <div className="story__profile">
                  <div className="story__profile__avartar">
                    <img src="images/YoonJi/yumyum.png" alt="" />
                  </div>
                  <div className="story__profile__container">
                    <div className="story__profile__id">yumyum</div>
                    <div className="story__profile__time">3시간 전</div>
                  </div>
                </div>
              </div>
              <div className="story__profile__box">
                <div className="story__profile">
                  <div className="story__profile__avartar">
                    <img src="images/YoonJi/yumyum.png" alt="" />
                  </div>
                  <div className="story__profile__container">
                    <div className="story__profile__id">yumyum</div>
                    <div className="story__profile__time">3시간 전</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="recommendation">
            <div className="story">
              <div className="stroy__subject">
                <div className="story__name">회원님을 위한 추천</div>
                <div className="story__view">모두 보기</div>
              </div>
              <div className="story__profile__box">
                <div className="story__profile recommendation__container">
                  <div className="story__profile__avartar">
                    <img
                      className="recommendation__img"
                      src="//source.unsplash.com/random/1"
                      alt=""
                    />
                  </div>
                  <div className="story__profile__container recommendation__profile__container">
                    <div className="story__profile__id">yumyum</div>
                    <div className="story__profile__time">
                      apple님 외 2명이...
                    </div>
                  </div>
                </div>
                <div className="recommendation__follow">팔로우</div>
              </div>
              <div className="story__profile__box">
                <div className="story__profile recommendation__container">
                  <div className="story__profile__avartar">
                    <img
                      className="recommendation__img"
                      src="//source.unsplash.com/random/2"
                      alt=""
                    />
                  </div>
                  <div className="story__profile__container recommendation__profile__container">
                    <div className="story__profile__id">yumyum</div>
                    <div className="story__profile__time">
                      ramb님 외 12명이...
                    </div>
                  </div>
                </div>
                <div className="recommendation__follow">팔로우</div>
              </div>
              <div className="story__profile__box">
                <div className="story__profile recommendation__container">
                  <div className="story__profile__avartar">
                    <img
                      className="recommendation__img"
                      src="//source.unsplash.com/random/3"
                      alt=""
                    />
                  </div>
                  <div className="story__profile__container recommendation__profile__container">
                    <div className="story__profile__id">yumyum</div>
                    <div className="story__profile__time">
                      solar님 외 11명이...
                    </div>
                  </div>
                </div>
                <div className="recommendation__follow">팔로우</div>
              </div>
            </div>
          </div>
          <div className="tags">
            Westagram 정보·지원·홍보 센터·API·채용
            정보·개인정보처리방침·약관·디렉터리·프로필·해시태그·언어
          </div>
          <div className="copyright">ⓒ 2022 INSTAGRAM</div>
        </aside>
      </main>
    </>
  );
}

export default MainYoonji;
