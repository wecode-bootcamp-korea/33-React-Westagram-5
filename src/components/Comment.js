import './Comment.scss';
function Comment({ commentArray, comment }) {
  return (
    <>
      {commentArray.map(function (a, i) {
        return (
          <div>
            <p className="addComment">
              <span className="addComentUsername">christiano</span>
              {a}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default Comment;
