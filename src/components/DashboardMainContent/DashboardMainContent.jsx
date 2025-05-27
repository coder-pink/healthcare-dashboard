import React from 'react';
import styles from './DashboardMainContent.module.css';
import DashboardOverview from './DashboardOverview/DashboardOverview';

import ActivityChart from '../ActivityFeed/ActivityChart';
import CalendarView from '../CalendarView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';


const DashboardMainContent = () => (
  <div className={styles.container}>
     <div className={styles.column}>
      <DashboardOverview />
      <ActivityChart />
    </div>

    <div className={styles.column}>
      <CalendarView />

      <UpcomingSchedule/>
    
    </div>
  </div>
);

export default DashboardMainContent;
