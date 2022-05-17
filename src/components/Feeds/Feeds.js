import '../../components/Feeds/Feeds.scss';

function Feeds() {
  <div className="feeds">
    <article className="westa_article">
      <header>
        <div className="profile_article">
          <img
            alt="프로필사진"
            src="https://images.unsplash.com/photo-1651315450323-3c3ebec40539?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80"
            className="user_info_img"
          />
          <span className="name">camille</span>
        </div>
        <div className="more_icon">
          <i className="fa-solid fa-ellipsis" />
        </div>
      </header>
      <div className="feeds_image">
        <img
          className="feeds_img"
          alt="feedsImg"
          src="https://images.unsplash.com/photo-1651232298012-d61ab5437bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
      </div>
      <div className="icon_reaction">
        <div className="reaction_left">
          <button className="heart_btn " id="btn1">
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
            alt="pictureImg"
            src="https://images.unsplash.com/photo-1651522356854-624fcd9dc3da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
          <p>
            <span className="point-span">heyhey</span>님{' '}
            <span className="point-span">외 200명</span>이 좋아합니다
          </p>
        </div>
        <div className="infomation">
          <p>
            <span className="like_id">camille</span>
            <span className="at-tag">I'm gonna be going to start...</span>
            <span className="like_more">더 보기</span>
          </p>
        </div>
        <div className="comment_section">
          <div className="time_log">
            <span className="log_comment">20분 전</span>
          </div>

          <Comment comment={comment} />
          <form
            id="comment-form"
            className="comment_form_class"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              className="makeComment"
              placeholder="댓글 달기..."
              required
              onChange={onChange}
              value={value}
              maxLength={10}
            />
            <button type="submit" className="comment-btn">
              게시
            </button>
          </form>
        </div>
      </div>
    </article>
  </div>;
}

export default Feeds;
