const CommentItem = ({ comment }) => {
  return (
    <li>
      <div className="comment_text">
        <span>
          <span className="point-span userID">justin_beboy</span>
          {comment}
        </span>
      </div>

      <div className="comment_like">
        <button onclick="Toggle2()" className="heartBtn2" id="btn2">
          <i className="fa-regular fa-heart" />
        </button>
      </div>
    </li>
  );
};

export default CommentItem;
