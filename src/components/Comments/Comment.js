import '../../components/Comments/Comment.scss';
import CommentItem from '../../components/Comments/CommentItem';

function Comment({ comment }) {
  return (
    <div id="comment-list">
      {comment.map(com => (
        <CommentItem key={com.id} comment={com.text} />
      ))}
    </div>
  );
}

export default Comment;
