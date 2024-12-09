import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../route';
import styles from './Login.module.scss';
import illustration from '../../assets/illustration.svg';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('authToken', '1234567890qwertyuiophiwqryiqye1');
    navigate(ROUTES.DASHBOARD);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`${styles['login-container']}`}>
      {/* Left Illustration */}
      <div className={`${styles['illustration']} hidden md:block bg-loginSvgColor`}>
        <img
          src={illustration}
          alt="Illustration"
          className="w-full"
        />
      </div> 

      {/* Right Form */}
      <div className={`${styles['form-section']} px-6 md:px-12`}>
        <div className={`${styles['form-div']}`}>
          <h1 className={`${styles['title']} text-secondary`}>Welcome!</h1>
          <p className={styles['subtitle']}>Enter details to login.</p>
          <form>
            <div className={styles['input-group']}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:ring focus:ring-primary"
              />
            </div>
            <div className={`${styles['input-group']} relative`}>
              <input
                type={showPassword ? 'text' : 'password'} 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles['input']}
              />
              {/* Toggle Button */}
              <span
                className="absolute cursor-pointer right-3 top-3 text-primary"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? 'Hide' : 'Show'}
              </span>
            </div>

            <p className={`${styles['forgot-password']} hover:underline`}>
              FORGOT PASSWORD?
            </p>

            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              className={`${styles['login-button']} bg-primary hover:bg-opacity-90`}
            >
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
