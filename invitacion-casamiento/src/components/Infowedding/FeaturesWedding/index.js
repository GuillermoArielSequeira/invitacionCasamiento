import React from 'react';
import styles from './FeaturesWedding.module.scss';
import Feature from './Feature';
import { features } from '../../../constants/features';

const FaturesWedding = () => (
  <div className={styles.containerFeatures}>
    {features.map(feature => <Feature {...feature} />)}
  </div>
)

export default FaturesWedding;
