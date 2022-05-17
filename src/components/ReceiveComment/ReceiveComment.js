import React from 'react';
import './ReceiveComment.scss';

function ReceiveComment({ comment, commentInput }) {
  return (
    <input
      type="text"
      placeholder="댓글 달기..."
      value={comment}
      onChange={commentInput}
    />
  );
}

export default ReceiveComment;
