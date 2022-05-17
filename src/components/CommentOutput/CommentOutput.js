import React from 'react';
import './CommentOutput.scss';

function CommentOutput({ commentArray }) {
  return commentArray.map((value, index) => (
    <li key={index}>
      <span>Hey.yong44</span>
      <span>{value}</span>
      <button>x</button>
    </li>
  ));
}

export default CommentOutput;
