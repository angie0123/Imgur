import { useState } from 'react';

const Register = ({ registerSubmitHandler }) => {
  const [userNameInput, setUserNameInput] = useState('');

  return (
    <>
      You have authenticated with <span className="green">Google</span>. Now
      just choose an Imgur username.
      <form onSubmit={(e) => registerSubmitHandler(e, userNameInput)}>
        <input
          id="username"
          type="text"
          minLength="4"
          maxLength="64"
          placeholder="Username"
          onInput={(e) => setUserNameInput(e.target.value)}
        />
        <button>Continue</button>
      </form>
    </>
  );
};

export default Register;
