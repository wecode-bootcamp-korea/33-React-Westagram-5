import Comment from './/Comment';

const CommentBox = ({ comment, handleDelete }) => {
  return (
    <ul>
      {comment.map(com => (
        <Comment key={com.id} comment={com} handleDelete={handleDelete} />
      ))}
    </ul>
  );
};

export default CommentBox;
