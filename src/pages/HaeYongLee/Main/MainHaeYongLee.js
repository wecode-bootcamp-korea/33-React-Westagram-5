import React, { useState } from 'react';
import './MainHaeYongLee.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import Nav from '../../../components/Nav/Nav';
import CommentOutput from '../../../components/CommentOutput/CommentOutput';
import ReceiveComment from '../../../components/ReceiveComment/ReceiveComment';

function MainHaeYongLee() {
  const [comment, setComment] = useState('');
  const commentInput = event => setComment(event.target.value);

  const [commentArray, setCommentArray] = useState([]);
  const registComment = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    setCommentArray(commentValueList => [...commentValueList, comment]);
    setComment('');
  };

  const commentValid = comment.length >= 1;

  return (
    <>
      <Nav />
      <main className="mainHY">
        <div className="feeds">
          <article>
            <div className="feedHeader">
              <div className="feedHeaderStart">
                <a href="#!">
                  <img
                    alt="header profile"
                    src="/images/HaeYongLee/websta_circle.png"
                    width="32px"
                  />
                </a>
                <a href="#!">
                  <p>hey.yong44</p>
                </a>
              </div>
              <div className="feedHeaderEnd">
                <i className="fa-solid fa-ellipsis" />
              </div>
            </div>
            <div className="mainFeed">
              <img alt="main feed" src="/images/HaeYongLee/article1.jpg" />
            </div>
            <div className="articleCommu">
              <div className="commuStart">
                <i className="fa-regular fa-heart fa-xl" />
                <i className="fa-regular fa-comment fa-xl" />
                <i className="fa-solid fa-arrow-up-from-bracket fa-xl" />
              </div>
              <div className="commuEnd">
                <i className="fa-regular fa-bookmark fa-xl" />
              </div>
            </div>
            <div className="likeart">
              <img
                alt="pro"
                src="/images/HaeYongLee/changsik-circle.png"
                width="20px"
              />
              <a href="#!">
                <p>changsik_kim</p>
              </a>
              <span>
                님 외 <a href="#!">여러명</a>이 좋아합니다
              </span>
            </div>
            <div className="commentArt">
              <div className="myFeed">
                <a href="#!">hey.yong44</a>
                <p>저녁엔 피맥 한잔~</p>
                <span>더 보기</span>
              </div>
              <div className="yourComment">
                <a href="#!">changsik_kim</a>
                <p>맛있어보이네요</p>
              </div>
              <ul className="todo-list">
                <CommentOutput commentArray={commentArray} />
              </ul>
            </div>
            <div className="ago">
              <p>42 분전</p>
            </div>
            <section>
              <div className="commentSection">
                <form id="comment" onSubmit={registComment}>
                  <i className="fa-regular fa-face-smile fa-lg" />
                  <ReceiveComment
                    comment={comment}
                    commentInput={commentInput}
                  />
                  <button
                    type="button"
                    onClick={registComment}
                    className={
                      commentValid ? 'buttonEnabled' : 'buttonDisabled'
                    }
                  >
                    게시
                  </button>
                </form>
              </div>
            </section>
          </article>
          <article>
            <div className="feedHeader">
              <div className="feedHeaderStart">
                <a href="#!">
                  <img
                    alt="header profile"
                    src="/images/HaeYongLee/websta_circle.png"
                    width="32px"
                  />
                </a>
                <a href="#!">
                  <p>hey.yong44</p>
                </a>
              </div>
              <div className="feedHeaderEnd">
                <i className="fa-solid fa-ellipsis" />
              </div>
            </div>
            <div className="mainFeed">
              <img alt="main feed" src="/images/HaeYongLee/JjangAh.jpg" />
            </div>
            <div className="articleCommu">
              <div className="commuStart">
                <i className="fa-regular fa-heart fa-xl" />
                <i className="fa-regular fa-comment fa-xl" />
                <i className="fa-solid fa-arrow-up-from-bracket fa-xl" />
              </div>
              <div className="commuEnd">
                <i className="fa-regular fa-bookmark fa-xl" />
              </div>
            </div>
            <div className="likeart">
              <img
                alt="pro"
                src="/images/HaeYongLee/changsik-circle.png"
                width="20px"
              />
              <a href="#!">
                <p>changsik_kim</p>
              </a>
              <span>
                님 외 <a href="#!">여러명</a>이 좋아합니다
              </span>
            </div>
            <div className="commentArt">
              <div className="myFeed">
                <a href="#!">hey.yong44</a>
                <p>잘자는 댕댕이 짱아</p>
                <span>더 보기</span>
              </div>
              <div className="yourComment">
                <a href="#!">changsik_kim</a>
                <p>귀엽네요~</p>
              </div>
              <ul id="todo-list" />
            </div>
            <div className="ago">
              <p>3 일전</p>
            </div>
            <section>
              <div className="commentSection">
                <form id="comment">
                  <i className="fa-regular fa-face-smile fa-lg" />
                  <input type="text" placeholder="댓글 달기..." required />
                  <button type="button" className="buttonDisabled">
                    게시
                  </button>
                </form>
              </div>
            </section>
          </article>
          <article>
            <div className="feedHeader">
              <div className="feedHeaderStart">
                <a href="#!">
                  <img
                    alt="header profile"
                    src="/images/HaeYongLee/websta_circle.png"
                    width="32px"
                  />
                </a>
                <a href="#!">
                  <p>hey.yong44</p>
                </a>
              </div>
              <div className="feedHeaderEnd">
                <i className="fa-solid fa-ellipsis" />
              </div>
            </div>
            <div className="mainFeed">
              <img
                alt="main feed"
                src="/images/HaeYongLee/cherry_blossom.jpg"
              />
            </div>
            <div className="articleCommu">
              <div className="commuStart">
                <i className="fa-regular fa-heart fa-xl" />
                <i className="fa-regular fa-comment fa-xl" />
                <i className="fa-solid fa-arrow-up-from-bracket fa-xl" />
              </div>
              <div className="commuEnd">
                <i className="fa-regular fa-bookmark fa-xl" />
              </div>
            </div>
            <div className="likeart">
              <img
                alt="pro"
                src="/images/HaeYongLee/changsik-circle.png"
                width="20px"
              />
              <a href="#!">
                <p>changsik_kim</p>
              </a>
              <span>
                님 외 <a href="#!">여러명</a>이 좋아합니다
              </span>
            </div>
            <div className="commentArt">
              <div className="myFeed">
                <a href="#!">hey.yong44</a>
                <p>봄에는 역시 벚꽃 구경</p>
                <span>더 보기</span>
              </div>
              <div className="yourComment">
                <a href="#!">changsik_kim</a>
                <p>저도 벚꽃 좋아하는데...</p>
              </div>
              <ul id="todo-list" />
            </div>
            <div className="ago">
              <p>1 달전</p>
            </div>
            <section>
              <div className="commentSection">
                <form id="comment">
                  <i className="fa-regular fa-face-smile fa-lg" />
                  <input type="text" placeholder="댓글 달기..." required />
                  <button type="button">게시</button>
                </form>
              </div>
            </section>
          </article>
        </div>
        <div className="main-right">
          <div className="fixedRight">
            <div className="rightMyProfile">
              <a href="#!">
                <img
                  alt="profile"
                  src="/images/HaeYongLee/websta_circle.png"
                  width="56px"
                />
              </a>
              <div>
                <a href="#!">
                  <span>hey.yong44</span>
                </a>
                <div className="profileDescription">
                  <span>HaeYong</span>
                </div>
              </div>
            </div>
            <div className="rightStory">
              <div className="storyAll">
                <p>스토리</p>
                <a href="#!">모두보기</a>
              </div>
              <div className="storyPeople">
                <img
                  alt="profile"
                  src="/images/HaeYongLee/websta_circle.png"
                  width="32px"
                />
                <div className="inStory">
                  <a href="#!">
                    <span>hey.yong44</span>
                  </a>
                  <span>1 시간전</span>
                </div>
              </div>
            </div>
            <div className="rightRecommendForYou">
              <div className="recommendAll">
                <p>회원님을 위한 추천</p>
                <a href="#!">모두보기</a>
              </div>
              <div className="recommendPeople">
                <img
                  alt="profile"
                  src="/images/HaeYongLee/websta_circle.png"
                  width="32px"
                />
                <div className="recommend">
                  <a href="#!">
                    <span>hey.yong44</span>
                  </a>
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
