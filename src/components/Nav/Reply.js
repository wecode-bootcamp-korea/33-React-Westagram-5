import './Reply.scss';

function Reply(props) {
  const { replies, deleteBtn } = props;
  return (
    <>
      <ul className="reply">
        {replies.map(replie => (
          <li key={replie.id}>
            <div>
              <span>{replie.userName}</span>
              {replie.content}
            </div>
            <button onClick={deleteBtn}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Reply;
