import './MainYoonJi.scss';
import Feed from '../../../components/Nav/Feed';
import { useState, useEffect } from 'react';

function MainYoonji() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('data/feedData.json')
      .then(res => res.json())
      .then(data => {
        setFeed(data);
      });
  }, []);
  // const [reply, setReply] = useState('');
  // const [replies, setReplies] = useState([]);
  // const nextId = useRef(4);
  // const onChange = event => setReply(event.target.value);
  // const onSubmit = event => {
  //   event.preventDefault();
  //   if (reply === '') {
  //     return;
  //   }
  //   setReplies(currentArray => [
  //     ...currentArray,
  //     {
  //       id: nextId.current,
  //       userName: 'wow1984',
  //       content: reply,
  //     },
  //   ]);
  //   setReply('');
  //   nextId.current += 1;
  // };
  // const deleteBtn = event => {
  //   const li = event.target.parentElement;
  //   li.remove();
  // };

  // // Mockdata 가져오기
  // useEffect(() => {
  //   fetch('data/CommentData.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setReplies(data);
  //     });
  // }, []);

  // feedData 가져오기

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
          <img src="/images/YoonJi/explore.png" alt="compass" />
          <img src="/images/YoonJi/heart.png" alt="heart" />
          <img src="/images/YoonJi/profile.png" alt="user" />
        </div>
      </nav>
      <main>
        <div className="main__left">
          {feed.map(f => (
            <Feed
              key={f.id}
              userName={f.userName}
              content={f.content}
              src={f.src}
              userProfile={f.userProfile}
            />
          ))}
        </div>
        <aside className="main-right">
          <div className="yourId">
            <div className="yourId__profile">
              <img src="/images/YoonJi/wecodeLogo.png" alt="" />
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
                    <img src="/images/YoonJi/yumyum.png" alt="" />
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
                    <img src="/images/YoonJi/yumyum.png" alt="" />
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
                    <img src="/images/YoonJi/yumyum.png" alt="" />
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
                    <img src="/images/YoonJi/yumyum.png" alt="" />
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
