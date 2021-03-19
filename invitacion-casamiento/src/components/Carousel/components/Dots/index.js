import React from 'react';
import { func, number, arrayOf } from 'prop-types';
import styles from '../../Carousel.module.scss';
import Circle from '../Circle';

const Dots = ({ pages, activePage, onClick }) => (
  <div className={styles.carouselDots}>
    {pages.map(page => {
      const isActivePage = activePage === page;
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

Dots.propTypes = {
  onClick: func.isRequeired,
  pages: arrayOf(),
  activePage: number
}

export default Dots;
