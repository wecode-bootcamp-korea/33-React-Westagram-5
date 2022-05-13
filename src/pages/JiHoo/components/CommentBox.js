import Comment from './Comment';

const CommentBox = ({ comment }) => {
  return (
    <ul>
      {comment.map(com => (
        <Comment key={com.id} comment={com} />
      ))}
    </ul>
  );
};

export default CommentBox;
