import React from 'react';
import styles from './CalendarView.module.css';
import { calendarData } from '../../data/healthData';

const CalendarView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.month}>October 2021</span>
        <div className={styles.nav}>
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
      </div>

      <div className={styles.weekRow}>
        {calendarData.week.map((day, idx) => (
          <div key={day} className={styles.dayBlock}>
            <span className={styles.dayName}>{day}</span>
            <span className={styles.date}>{calendarData.dates[idx]}</span>

            <div className={styles.times}>
              {calendarData.appointments[calendarData.dates[idx]]?.map((appt, i) => (
                <div key={i} className={styles.timeSlot}>
                  {appt.time}
                </div>
              )) || ['08:00', '09:00', '10:00', '12:00', '14:00', '16:00'].slice(0, 2).map((t, i) => (
                <div key={i} className={styles.emptyTime}>{t}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.details}>
        <div className={styles.cardBlue}>
          <h4>Dentist <span>🦷</span></h4>
          <p>09:00–11:00</p>
          <span>Dr. Cameron Williamson</span>
        </div>
        <div className={styles.cardLight}>
          <h4>Physiotherapy Appointment <span>💪</span></h4>
          <p>11:00–12:00</p>
          <span>Dr. Kevin Djones</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
