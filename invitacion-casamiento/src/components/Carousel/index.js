import React, { useRef } from 'react';
import Carousel from 'react-elastic-carousel';
import Arrow from './components/Arrow';
import styles from './Carousel.module.scss';
import Dots from './components/Dots';
import Info from './components/Info';
/* eslint-disable no-debugger */

const CarouselComponent = () => {
  const carouselEl = useRef(null);

  return (
    <div className={styles.carouselContainer}>
      <Info />
      <Carousel
        ref={carouselEl}
        renderArrow={Arrow}
        renderPagination={Dots}
        itemsToScroll={1}
        itemsToShow={1}
      >
        <div className={styles.containerItem}>
          <div className={styles.gradientOverlay} />
        </div>
        <div className={styles.containerItem2}>
          <div className={styles.gradientOverlay} />
        </div>
        <div className={styles.containerItem}>
          <div className={styles.gradientOverlay} />
        </div>
        <div className={styles.containerItem2}>
          <div className={styles.gradientOverlay} />
        </div>
      </Carousel>
    </div>
  )
}

export default CarouselComponent;
