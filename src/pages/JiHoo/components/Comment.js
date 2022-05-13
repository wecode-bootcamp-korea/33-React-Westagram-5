const Comment = ({ comment }) => {
  const { text, name } = comment;
  return (
    <li>
      {name} : {text}
    </li>
  );
};

export default Comment;
