import React from 'react';
import styles from './DashboardOverview.module.css';
import AnatomySection from './AnatomySection/AnatomySection';
import HealthStatusCards from './HealthStatusCards/HealthStatusCards';

const DashboardOverview = () => (
  <div className={styles.overview}>
    <AnatomySection />
    <HealthStatusCards />
  </div>
);

export default DashboardOverview;
