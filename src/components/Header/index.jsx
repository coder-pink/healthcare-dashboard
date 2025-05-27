import React from 'react';
import styles from './Header.module.css';
import { Bell, Plus } from 'lucide-react';


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>  
        <span className={styles.logoBlue}>Health</span>
        <span className={styles.logoDark}>care.</span>
      </div>

      <div className={styles.searchBarWrapper}>
        <input type="text" placeholder="Search" className={styles.searchInput} />
        <Bell className={styles.bellIcon} size={18} />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.avatarWrapper}>
       
          <svg
            className={styles.avatar}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4A5568"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="7" r="4" />
            <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
          </svg>
        </div>
        <div className={styles.addButton}>
          <Plus size={20} color="#fff" />
        </div>
      </div>
    </header>
  );
};

export default Header;
