import React from 'react';

// FIXME: 컴포넌트별 스타일링 파일
// FIXME: 매개변수에서 구조분해
const Comment = props => {
  return (
    <div>
      {/* FIXME: callback은 arrow function으로 */}
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
