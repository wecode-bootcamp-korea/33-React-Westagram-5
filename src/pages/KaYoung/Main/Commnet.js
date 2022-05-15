import './Comment.scss';
import CommentItem from './CommentItem';

function Comment({ comment }) {
  return (
    <ul id="comment-list">
      {comment.map(com => (
        <CommentItem key={com.id} comment={com.text} />
      ))}
    </ul>
  );
}

export default Comment;
