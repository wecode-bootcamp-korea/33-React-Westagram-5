const CommentItem = ({ comment }) => {
  return (
    <li>
      <div className="comment_text">
        <span>
          <span className="point-span userID">camille</span>
          {comment}
        </span>
      </div>

      <div className="comment_like">
        <button className="heart_btn2" id="btn2">
          <i className="fa-regular fa-heart" />
        </button>
      </div>
    </li>
  );
};

export default CommentItem;
