import '../../components/Comments/Comment.scss';
import CommentItem from '../../components/Comments/CommentItem';

function Comment({ comment }) {
  return (
    <div id="comment-list">
      {comment.map((com, index) => (
        <CommentItem key={index} comment={com} />
      ))}
    </div>
  );
}

export default Comment;
