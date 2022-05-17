import React from 'react';

const Comment = props => {
  return (
    <div>
      {props.commentList.map(function (a) {
        return (
          <li>
            <b>Haim Chi :</b> {a}
          </li>
        );
      })}
    </div>
  );
};

export default Comment;
