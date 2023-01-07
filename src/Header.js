import logo from "./images/logo.svg";
import intro from "./images/illustration-intro.png";
const Header = () => {
  return (
    <header>
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Team</a>
            </li>
            <li>
              <a href="/">Sign In</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <div className="img-wrapper">
          <img src={intro} alt="" />
        </div>
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends,
          family, and co-workers.
        </p>
        <button>Get Started</button>
      </div>
    </header>
  );
};

export default Header;
