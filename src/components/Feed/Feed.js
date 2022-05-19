import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CommentOutput from '../CommentOutput/CommentOutput';
import ReceiveComment from '../ReceiveComment/ReceiveComment';

function Feed({ profileSrc, profileId, imgSrc, feedScript }) {
  const [comment, setComment] = useState('');
  const commentInput = event => {
    const { value } = event.target;
    setComment(value);
  };

  const [commentArray, setCommentArray] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentArray(data);
      });
  }, []);

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
    <article>
      <div className="feedHeader">
        <div className="feedHeaderStart">
          <img alt="header profile" src={profileSrc} width="32px" />
          <Link to="/main-HaeYongLee" className="feedId">
            <p>{profileId}</p>
          </Link>
        </div>
        <div className="feedHeaderEnd">
          <i className="fa-solid fa-ellipsis" />
        </div>
      </div>
      <div className="mainFeed">
        <img alt="main feed" src={imgSrc} />
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
        <Link to="/main-HaeYongLee" className="likeArtPeople">
          <p>changsik_kim</p>
        </Link>
        <span>
          님 외{' '}
          <Link to="/main-HaeYongLee" className="likeArtPeople">
            여러명
          </Link>
          이 좋아합니다
        </span>
      </div>
      <div className="commentArt">
        <div className="myFeed">
          <Link to="/main-HaeYongLee" className="feedMyId">
            hey.yong44
          </Link>
          <p>{feedScript}</p>
          <span>더 보기</span>
        </div>
        <div className="yourComment">
          <Link to="/main-HaeYongLee" className="feedYourId">
            changsik_kim
          </Link>
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
            <ReceiveComment comment={comment} commentInput={commentInput} />
            <button
              type="button"
              onClick={registComment}
              className={commentValid ? 'buttonEnabled' : 'buttonDisabled'}
            >
              게시
            </button>
          </form>
        </div>
      </section>
    </article>
  );
}

export default Feed;