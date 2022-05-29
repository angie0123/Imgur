import { Link, Outlet } from 'react-router-dom';

const LayoutWithNav = ({ user, signOutHandler, signInHandler }) => {
  return (
    <>
      <nav className="top-nav">
        <div className="left-container">
          <div className="logo">
            <svg
              width="94"
              height="34"
              viewBox="0 0 94 34"
              class="icon stroke fill"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Imgur</title>
              <path
                d="M86.8012 17.5H81.1185V22.5745C81.1185 25.0344 82.0176 26.2484 83.9599 26.2484C85.9018 26.2484 86.8012 25.0344 86.8012 22.5745V17.5Z"
                fill="#FFD500"
              ></path>
              <path
                d="M86.8012 17.336C86.8012 15.6108 86.981 15.0039 88.5637 14.3332C89.1292 14.0977 89.7077 13.9104 90.2587 13.7321C91.9506 13.1844 93.3833 12.7206 93.3833 11.2023C93.3833 9.86082 92.0884 8.71124 90.5059 8.71124C89.175 8.71124 87.8441 9.28633 86.6572 10.4038C85.9738 9.31752 85.0747 8.8066 83.9599 8.8066C82.0176 8.8066 81.1185 9.98885 81.1185 12.4487V17.5C81.1185 17.5 82.0577 17.5 84 17.5C85.9419 17.5 86.8012 17.5 86.8012 17.5V17.336Z"
                fill="#005BBB"
              ></path>
              <path
                d="M61.085 19.1569C61.085 23.9801 64.1422 26.5359 69.6448 26.5359C75.148 26.5359 78.2051 23.9801 78.2051 19.1569V17.5H72.5582V18.1345C72.5582 20.4984 71.9469 21.8081 69.6448 21.8081C67.3433 21.8081 66.7314 20.4984 66.7314 18.1345V17.5H61.085V19.1569Z"
                fill="#FFD500"
              ></path>
              <path
                d="M61.085 17.5C61.085 17.5 63.9974 17.5 69.5 17.5C75.0032 17.5 78.2051 17.5 78.2051 17.5V12.4487C78.2051 9.98883 77.342 8.80658 75.3995 8.80658C73.4576 8.80658 72.5582 9.98883 72.5582 12.4487V17.5H69.5H66.7314V12.4487C66.7314 9.98883 65.8326 8.80658 63.9264 8.80658C61.9841 8.80658 61.085 9.98883 61.085 12.4487V17.5Z"
                fill="#005BBB"
              ></path>
              <path
                d="M48.245 33.3078C52.2732 33.3078 55.2229 31.9981 56.877 29.5382C57.9919 27.9092 58.2077 25.6094 58.2077 22.5745V17.5276C51.2162 17.5276 39.5052 17.5276 39.5052 17.5276C39.5052 22.6387 43.2456 26.2802 47.7057 26.2802C49.9351 26.2802 51.6262 25.4814 52.8485 23.9163C52.8485 24.0322 52.8582 24.1398 52.8675 24.2432C52.8762 24.339 52.8845 24.4313 52.8845 24.5234C52.8845 27.2705 51.2304 28.7718 48.4607 28.7718C46.6897 28.7718 45.3742 28.2995 44.3043 27.9153C43.5708 27.652 42.9527 27.43 42.3822 27.43C40.9796 27.43 39.9367 28.3565 39.9367 29.6342C39.9367 31.6152 43.0655 33.3078 48.245 33.3078ZM45.3676 17.5276H52.8125C52.8125 20.0829 51.1944 21.7442 49.0726 21.7442C46.9506 21.7442 45.3676 20.1149 45.3676 17.5276Z"
                fill="#FFD500"
              ></path>
              <path
                d="M58.2077 17.5276V12.4487C58.2077 9.98884 57.3086 8.80659 55.3663 8.80659C54.5036 8.80659 53.4964 9.34959 52.8485 10.4038C51.6982 9.19008 50.2589 8.61499 48.317 8.61499C43.4974 8.61499 39.5052 12.4166 39.5052 17.5276H58.2077ZM45.3676 17.5276C45.3676 15.0039 46.9864 13.4067 49.0726 13.4067C51.1583 13.4067 52.8125 15.0039 52.8125 17.5276C52.8125 17.5276 51.1218 17.5276 49 17.5276C46.878 17.5276 45.3676 17.5276 45.3676 17.5276Z"
                fill="#005BBB"
              ></path>
              <path
                d="M31.5924 22.5745C31.5924 25.0344 32.4558 26.2484 34.3975 26.2484C36.34 26.2484 37.2388 25.0344 37.2388 22.5745V17L9.40125 17V22.5745C9.40125 25.0344 10.3 26.2484 12.2426 26.2484C14.1842 26.2484 15.0836 25.0344 15.0836 22.5745V17H20.4788V22.5745C20.4788 25.0344 21.3776 26.2484 23.3202 26.2484C25.2624 26.2484 26.1615 25.0344 26.1615 22.5745V17H29L31.5924 17V22.5745Z"
                fill="#FFD500"
              ></path>
              <path
                d="M31.5924 17C31.5924 17 32.5583 17 34.5 17C36.4425 17 37.2388 17 37.2388 17V15.3553C37.2388 11.011 34.7573 8.74301 30.8371 8.74301C28.4996 8.74301 26.8446 9.41374 25.1184 11.1069C23.7877 9.54177 21.9172 8.74301 19.4717 8.74301C17.5655 8.74301 16.1268 9.25423 14.9396 10.4038C14.2563 9.3175 13.3575 8.80658 12.2426 8.80658C10.3 8.80658 9.40125 9.98883 9.40125 12.4487V17C9.40125 17 10.5574 17 12.5 17C14.4416 17 15.0836 17 15.0836 17V16.8251C15.0836 14.3332 15.8753 13.0556 17.925 13.0556C19.7595 13.0556 20.4788 14.3332 20.4788 16.8887V17C20.4788 17 21.0574 17 23 17C24.9422 17 26.1615 17 26.1615 17V16.8251C26.1615 14.3332 26.9526 13.0556 29.0026 13.0556C30.8371 13.0556 31.5924 14.3332 31.5924 16.8887V17Z"
                fill="#005BBB"
              ></path>
              <path
                d="M6.23549 12.4487C6.23549 9.98883 5.33669 8.80658 3.43046 8.80658C1.48851 8.80658 0.589111 9.98883 0.589111 12.4487V17C0.589111 17 1.48851 17 3.43046 17C5.373 17 6.23549 17 6.23549 17V12.4487Z"
                fill="#005BBB"
              ></path>
              <path
                d="M6.23549 17C6.23549 17 5.33669 17 3.43046 17C1.48851 17 0.589111 17 0.589111 17V22.5745C0.589111 25.0344 1.48851 26.2484 3.43046 26.2484C5.373 26.2484 6.23549 25.0344 6.23549 22.5745V17Z"
                fill="#FFD500"
              ></path>
              <path
                d="M3.51952 0.756104C1.58599 0.756104 0 2.1078 0 3.75626C0 5.43752 1.54695 6.7561 3.51952 6.7561C5.45305 6.7561 7 5.43752 7 3.75626C7 2.1078 5.45305 0.756104 3.51952 0.756104Z"
                fill="#005BBB"
              ></path>
            </svg>
          </div>
          <div className="new-post button green">
            <Link to="/upload">
              <img
                src="https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.13ab64f9f36ad8f25ae3544b350e2ae1.svg"
                alt="add icon"
              />
              New post
            </Link>
          </div>
        </div>
        <div className="search-bar">Searchbar</div>
        {user ? (
          <>
            <div>{user.name}</div>
            <div>{user.photoURL}</div>
            <div className="sign-out" onClick={signOutHandler}>
              Sign Out
            </div>
          </>
        ) : (
          <div className="right-container">
            <div className="sign-in button" onClick={signInHandler}>
              Sign In
            </div>
            <div className="sign-up button green">Sign Up</div>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default LayoutWithNav;
