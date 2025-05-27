import React from 'react';
import styles from './ActivityChart.module.css';
import { weeklyActivity} from '../../data/healthData';

const ActivityChart = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <span className={styles.title}>Activity</span>
      <span className={styles.subtext}>3 appointment on this week</span>
    </div>
    <div className={styles.chart}>
      {weeklyActivity.map((day, idx) => (
        <div key={idx} className={styles.dayColumn}>
          <div className={styles.bars}>
            {day.bars.map((height, i) => (
              <div
                key={i}
                className={`${styles.bar} ${i === 0 ? styles.primary : i === 1 ? styles.secondary : styles.tertiary}`}
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
          <span className={styles.dayLabel}>{day.day}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ActivityChart;
