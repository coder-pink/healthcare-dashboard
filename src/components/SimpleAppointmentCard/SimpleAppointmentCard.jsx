
import React from 'react';
import styles from './SimpleAppointmentCard.module.css';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        {title} <span className={styles.icon}>{icon}</span>
      </div>
      <div className={styles.time}>{time}</div>
    </div>
  );
};

export default SimpleAppointmentCard;
