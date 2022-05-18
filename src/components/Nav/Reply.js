import './Reply.scss';

function Reply(props) {
  const {replies, deleteBtn } = props;
  return (
    <>
      <ul className="reply">
        {replies.map((item, index) => (
          <li key={index}>
            <div>
              <span>I.like.U</span>
              {item}
            </div>
            <button onClick={deleteBtn}>❌</button>
          </li>
        ))}
      </ul>
     
    </>
  );
}

export default Reply;
