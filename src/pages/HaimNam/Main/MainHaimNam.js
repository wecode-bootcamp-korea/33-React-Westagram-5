import React from 'react';
import Nav from '../../../components/Nav/Nav';
import './MainHaimNam.scss';

function MainHaimNam() {
  return (
    <div className="Haim">
      <Nav />
      <div className="mainBox">
        <div className="upRightBox">
          <img
            className="circleOrange"
            src="/images/HaimNam/갤러리 로고.png"
            alt="galleryLogo"
          />
          <span className="orangeIds">Wecode Gallery</span>
        </div>

        <div className="feedsBox">
          <div className="pencilAndName">
            <img
              className="circlePencils"
              src="/images/HaimNam/profile.png"
              alt="pencils"
            />
            <span className="myName">Haim_Chi</span>
            <span className="dot">•••</span>
          </div>
          <img
            className="gallery"
            src="https://images.unsplash.com/photo-1569084024058-1632922a4e1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=419&q=80"
            alt="gallery"
          />
          <h3 className="likes">1218 Likes</h3>
          <ul className="commentList">
            <li>
              <b>Haim_Chi</b>&nbsp Found it difficult to leave the building once
              I saw this amazing art. Amazing, interesting and joyful. “Art” is
              fantastic!
            </li>
          </ul>
          <input
            className="commentBox"
            type="text"
            placeholder="Add a Comment"
          />
          <button className="commentBtn">Post</button>
        </div>

        <div className="main-rightBox">
          <h3 className="story">Story</h3>
          <div className="innerRightBox">
            <img
              className="circleBallon"
              src="/images/HaimNam/ballon.png"
              alt="ballon"
            />
            <p className="ballonIds">_love_Art</p>
            <div className="innerRightBox2">
              <img
                className="circleBallon"
                src="/images/HaimNam/ballon.png"
                alt="ballon"
              />
              <p className="ballonIds">_love_Art</p>
              <div className="innerRightBox3">
                <img
                  className="circleBallon"
                  src="/images/HaimNam/ballon.png"
                  alt="ballon"
                />
                <p className="ballonIds">_love_Art</p>
              </div>
              <div className="innerRightBox4">
                <img
                  className="circleBallon"
                  src="/images/HaimNam/ballon.png"
                  alt="ballon"
                />
                <p className="ballonIds">_love_Art</p>
              </div>
            </div>
          </div>
        </div>
        <div className="unvisiableBox" />
      </div>
    </div>
  );
}

export default MainHaimNam;
