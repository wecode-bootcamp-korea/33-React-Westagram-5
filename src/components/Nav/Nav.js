import './Nav.scss';

function Nav() {
  return (
    <nav className="westa_nav">
      <div className="container_nav1">
        <i className="fa-brands fa-instagram fa-2x" />
        <h1 className="westagram_head">Westagram</h1>
      </div>
      <div className="westa_search">
        <input
          type="text"
          placeholder="검색"
          className="searchbar_westa"
          maxLength="10"
        />
        <i className="fa-solid fa-magnifying-glass" />
        <div className="container_nav2" />
      </div>
      <div className="container_nav2">
        <img
          className="nav_img"
          alt="navImg"
          src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
        />
        <img
          className="nav_img"
          alt="navImg"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        />
        <img
          className="nav_img"
          alt="navImg"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png
      "
        />
      </div>
    </nav>
  );
}

export default Nav;
