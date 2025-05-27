

import React from 'react';
import styles from './UpcomingSchedule.module.css';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';

import { scheduleData } from '../../data/healthData'; 

const UpcomingSchedule = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>The Upcoming Schedule</h3>
      {scheduleData.map((dayGroup, idx) => (
        <div key={idx} className={styles.dayGroup}>
          <div className={styles.dayLabel}>{dayGroup.day}</div>
          <div className={styles.cardsRow}>
            {dayGroup.appointments.map((appt, i) => (
              <SimpleAppointmentCard
                key={i}
                title={appt.title}
                time={appt.time}
                icon={appt.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
