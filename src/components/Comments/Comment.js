import '../../components/Comments/Comment.scss';
// FIXME: 이 페이지 안에서만 쓰이는 컴포넌트는 해당 폴더 안에서
import CommentItem from '../../components/Comments/CommentItem';

function Comment({ comment }) {
  return (
    <div id="comment-list">
      {/* FIXME: 변수명 정확히 */}
      {comment.map(com => (
        <CommentItem key={com.id} comment={com.text} />
      ))}
    </div>
  );
}

export default Comment;
