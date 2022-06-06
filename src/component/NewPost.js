import { Link } from 'react-router-dom';

const NewPost = ({ user, signInHandler }) => {
  const popup = () => {
    return (
      <div className="overlay">
        <div className="modal">
          <div className="message-wrapper">
            <div className="main">
              Please whitelist us on your ad blocker to continue
            </div>
            <div className="sub-text">
              Ads keep Imgur's lights on and the content flowing freely. For an
              ad-free experience, sign up for <span>Imgur Emerald</span>.
            </div>
          </div>
          <div className="buttons-wrapper">
            <div className="button">Support Imgur</div>
            <div className="button green" onClick={signInHandler}>
              Sign In
            </div>
          </div>
          <button type="button" class="modal-close">
            <Link to="/">
              <img
                src="https://s.imgur.com/desktop-assets/desktop-assets/upload_dialog_close.a910cf045da9c85b3de5ba520f62b2d3.svg"
                alt="close button icon"
              />
            </Link>
          </button>
        </div>
      </div>
    );
  };
  const form = () => {
    return <>Upload your picture</>;
  };
  return <>{user ? form() : popup()}</>;
};

export default NewPost;
