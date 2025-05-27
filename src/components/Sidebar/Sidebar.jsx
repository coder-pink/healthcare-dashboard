
import React from 'react';
import styles from './Sidebar.module.css';
import {
  LayoutDashboard,
  History,
  CalendarDays,
  ClipboardList,
  BarChart3,
  MessageCircle,
  Phone,
  Settings
} from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      

      <nav className={styles.section}>
        <p className={styles.sectionTitle}>General</p>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.active}`}>
            <LayoutDashboard className={styles.icon} />
            <span>Dashboard</span>
          </li>
          <li className={styles.navItem}>
            <History className={styles.icon} />
            <span>History</span>
          </li>
          <li className={styles.navItem}>
            <CalendarDays className={styles.icon} />
            <span>Calendar</span>
          </li>
          <li className={styles.navItem}>
            <ClipboardList className={styles.icon} />
            <span>Appointments</span>
          </li>
          <li className={styles.navItem}>
            <BarChart3 className={styles.icon} />
            <span>Statistics</span>
          </li>
        </ul>
      </nav>

      <nav className={styles.section}>
        <p className={styles.sectionTitle}>Tools</p>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <MessageCircle className={styles.icon} />
            <span>Chat</span>
          </li>
          <li className={styles.navItem}>
            <Phone className={styles.icon} />
            <span>Support</span>
          </li>
        </ul>
      </nav>

      <div className={styles.setting}>
        <Settings className={styles.icon} />
        <span>Settings</span>
      </div>
    </aside>
  );
};

export default Sidebar;
