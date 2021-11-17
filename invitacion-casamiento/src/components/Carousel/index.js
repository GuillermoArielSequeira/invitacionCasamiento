import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";
import Arrow from "./components/Arrow";
import styles from "./Carousel.module.scss";
import Dots from "./components/Dots";
import Info from "./components/Info";
import asset1 from "../../assets/foto1.jpg";
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
        <div className={`lazyload ${styles.containerItem}`}>
          <div className={styles.gradientOverlay} />
        </div>
        <div className={`lazyload ${styles.containerItem2}`}>
          <div className={styles.gradientOverlay} />
        </div>
        <div className={`lazyload ${styles.containerItem3}`}>
          <div className={styles.gradientOverlay} />
        </div>
        <div className={`lazyload ${styles.containerItem4}`}>
          <div className={styles.gradientOverlay} />
        </div>
        <div className={`lazyload ${styles.containerItem5}`}>
          <div className={styles.gradientOverlay} />
        </div>
        <div className={`lazyload ${styles.containerItem6}`}>
          <div className={styles.gradientOverlay} />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
