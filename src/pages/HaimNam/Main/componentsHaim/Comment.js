import React from 'react';

const Comment = props => {
  return (
    <div>
      {props.commentList.map(function (a) {
        return (
          <li className="commentSingleList">
            <span className="haimChi">Haim Chi :</span> {a}
          </li>
        );
      })}
    </div>
  );
};

export default Comment;
