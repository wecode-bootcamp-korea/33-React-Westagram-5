import React, { useState, useEffect } from 'react';
import './MainHaeYongLee.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import Nav from '../../../components/Nav/Nav';
import { Link } from 'react-router-dom';
// FIXME: component 위치
import Feed from '../../../components/Feed/Feed';

function MainHaeYongLee() {
  // FIXME: 변수명, 복수, 단수
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    // FIXME: localhost 생략
    fetch('http://localhost:3000/data/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setFeed(data);
      });
  }, []);

  return (
    <>
      <Nav />
      <main className="mainHY">
        <div className="feeds">
          {/* FIXME: 변수명, 구조분해할당 */}
          {feed.map(f => (
            <Feed
              key={f.id}
              profileSrc={f.profileSrc}
              profileId={f.profileId}
              imgSrc={f.imgSrc}
              feedScript={f.feedScript}
            />
          ))}
        </div>
        {/* FIXME: className */}
        <div className="main-right">
          <div className="fixedRight">
            <div className="rightMyProfile">
              <img
                alt="profile"
                src="/images/HaeYongLee/websta_circle.png"
                width="56px"
              />
              <div>
                <Link to="/main-HaeYongLee" className="rightProfileMyId">
                  <span>hey.yong44</span>
                </Link>
                <div className="profileDescription">
                  <span>HaeYong</span>
                </div>
              </div>
            </div>
            <div className="rightStory">
              <div className="storyAll">
                <p>스토리</p>
                <Link to="/main-HaeYongLee" className="seeAll">
                  모두보기
                </Link>
              </div>
              <div className="storyPeople">
                <img
                  alt="profile"
                  src="/images/HaeYongLee/websta_circle.png"
                  width="32px"
                />
                <div className="inStory">
                  <Link to="/main-HaeYongLee" className="inStoryYourId">
                    <span>hey.yong44</span>
                  </Link>
                  <span>1 시간전</span>
                </div>
              </div>
            </div>
            <div className="rightRecommendForYou">
              <div className="recommendAll">
                <p>회원님을 위한 추천</p>
                <Link to="/main-HaeYongLee" className="seeAll">
                  모두보기
                </Link>
              </div>
              <div className="recommendPeople">
                <img
                  alt="profile"
                  src="/images/HaeYongLee/websta_circle.png"
                  width="32px"
                />
                <div className="recommend">
                  <Link to="/main-HaeYongLee" className="recommendYourId">
                    <span>hey.yong44</span>
                  </Link>
                  <span>회원님을 팔로우합니다.</span>
                </div>
              </div>
            </div>
            <div className="likeFooter">
              <p>
                Instagram 정보 . 지원 . 홍보 센터 . API . 채용정보 .
                개인정보처리방침 . 약관 . 디렉터리 . 프로필 . 해시태그 . 언어
              </p>
              <p>© 2022 INSTAGRAM FROM META</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default MainHaeYongLee;
