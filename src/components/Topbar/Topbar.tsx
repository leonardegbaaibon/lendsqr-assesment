import React from 'react';
import styles from './Topbar.module.scss';
import Logo from '../../assets/icons/logo.svg';
import Search from '../../assets/icons/Vector.svg';


interface NavbarProps {
  profileImage: string;
  onSearch: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ profileImage, onSearch }) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <header className={styles.navbar} aria-label="Top navigation">
      <div className={styles.div}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search for anything"
            onChange={handleSearch}
            aria-label="Search bar"
          />
          <div className={styles.searchIcon}>
            <span><img src={Search} alt="searchIcon"/></span>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <button className={styles.docsButton}>Docs</button>
        <img
          src={profileImage}
          alt="User profile"
          className={styles.profileImage}
        />
      </div>
    </header>
  );
};

export default Navbar;
