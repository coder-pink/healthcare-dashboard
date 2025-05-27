import React from 'react';
import styles from './HealthStatusCards.module.css';
import { healthStatusCards } from '../../../../data/healthData';

const HealthStatusCards = () => (
  <div className={styles.cardContainer}>
    {healthStatusCards.map((card, index) => (
      <div className={styles.card} key={index}>
        <div className={styles.icon}>{card.icon}</div>
        <div className={styles.info}>
          <div className={styles.title}>{card.title}</div>
          <div className={styles.date}>Date: {card.date}</div>
          <div className={styles.bar} style={{ backgroundColor: card.color }} />
        </div>
      </div>
    ))}
  </div>
);

export default HealthStatusCards;
