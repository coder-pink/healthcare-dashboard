

import React from 'react';
import styles from './AnatomySection.module.css';
// import { anatomyLabels } from './mockData';
import { anatomyLabels} from '../../../../data/healthData';

// Replace this URL with any high-quality anatomy image you want to use

const bodyImageUrl = 'https://media.sciencephoto.com/c0/02/37/69/c0023769-800px-wm.jpg'; // public domain body image


const AnatomySection = () => (
  <div className={styles.container}>
    <img src={bodyImageUrl} alt="Human Anatomy" className={styles.image} />
    {anatomyLabels.map((item, index) => (
      <div
        key={index}
        className={styles.label}
        style={{
          top: item.position.top,
          left: item.position.left,
          backgroundColor: item.color,
          position: 'absolute',
        }}
      >
        {item.label}
      </div>
    ))}
  </div>
);

export default AnatomySection;
