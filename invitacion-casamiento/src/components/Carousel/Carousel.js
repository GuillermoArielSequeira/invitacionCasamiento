import React, { useRef } from 'react';
import { func } from 'prop-types';
import classNames from 'classnames/bind';
import Carousel, { consts } from 'react-elastic-carousel';
import styles from './Carousel.module.scss';
import Circle from './components/Circle/Circle';
/* eslint-disable no-debugger */

let cx = classNames.bind(styles);

const myArrow = ({ type, onClick, isEdge }) => {

  let className = cx({
    prev: type === consts.PREV,
    next: type === consts.NEXT,
    disabled: isEdge
  });

  return (
    <button
      className={className}
      disabled={isEdge}
      onClick={() => onClick()} />
  )
}

NextArrow.propTypes = {
  onClick: func
}

const CarouselComponent = () => {
  const carouselEl = useRef(null);

  const Dots = ({ pages, activePage, onClick }) => {

    return (
      <div className={styles.carouselDots}>
        {pages.map(page => {
          const isActivePage = activePage === page
          return (
            <Circle
              key={page}
              onClick={() => onClick(page)}
              active={isActivePage}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        ref={carouselEl}
        renderArrow={myArrow}
        renderPagination={Dots}
        itemsToScroll={1}
        itemsToShow={1}
        infinite
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
