const Comment = ({ comment, handleDelete }) => {
  const { text, name, id } = comment;

  return (
    <li>
      <span>
        {name} : {text}
      </span>
      <span>
        <i class="fa-regular fa-heart" />
        <i class="fa-solid fa-trash" onClick={() => handleDelete(id)} />
      </span>
    </li>
  );
};

export default Comment;
