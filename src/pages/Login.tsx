import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../route';
import styles from '../styles/Login.module.scss';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

//   useEffect(() => {
//     if (localStorage.getItem('authToken')) {
//       navigate(ROUTES.DASHBOARD);
//     }
//   }, [navigate]);

  const handleLogin = () => {
    localStorage.setItem('authToken', '1234567890qwertyuiophiwqryiqye1');
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <div className={`${styles['login-container']} bg-white`}>
      {/* Left Illustration */}
      <div className={`${styles['illustration']} hidden md:block`}>
        <img
          src="/assets/illustration.svg"
          alt="Illustration"
          className="w-full"
        />
      </div>

      {/* Right Form */}
      <div className={`${styles['form-section']} px-6 md:px-12`}>
        <h1 className={`${styles['title']} text-secondary`}>Welcome!</h1>
        <p className={styles['subtitle']}>Enter details to login.</p>

        <form>
          <div className={styles['input-group']}>
            <input
              type="email"
              placeholder="Email"
              className="focus:ring focus:ring-primary"
            />
          </div>
          <div className={styles['input-group']}>
            <input
              type="password"
              placeholder="Password"
              className="focus:ring focus:ring-primary"
            />
          </div>

          <p className={`${styles['forgot-password']} hover:underline`}>
            FORGOT PASSWORD?
          </p>

          <button
            type="submit"
            className={`${styles['login-button']} bg-primary hover:bg-opacity-90`}
          >
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;