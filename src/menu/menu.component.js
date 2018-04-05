import React from 'react';
import PropTypes from 'prop-types';

import styles from './menu.module.css';

const Menu = ({
  toggleMenu,
  isMenuVisible,
  children
}) => {
  // console.log('MENU: ', toggleMenu, isMenuVisible, children);
  return (
    <div className={styles['menu-container']}>
      <div className={`${styles['hamburger-button']} ${isMenuVisible ? styles.visible : ''}`}
           onClick={() => toggleMenu()}>
        <div />
        <div />
        <div />
      </div>

      <div className={`${styles.menu} ${isMenuVisible ? styles.visible : ''}`}>
        <div className={styles['menu-header']}>
          <span className={styles['logo-header']}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 676.18 676.18"> <path d="M338.08 0C151.66 0 0 151.66 0 338.09c0 182.8 145.86 332.09 327.3 337.81a209.43 209.43 0 0 0 21.56 0c181.45-5.72 327.32-155 327.32-337.81 0-95.84-41.12-187.62-112.8-251.83l-.53-.47a32.91 32.91 0 0 1-4.45 5.47l.43.4c70.1 62.85 110.3 152.66 110.3 246.42 0 152.97-104.31 281.98-245.52 319.78 73.13-32.8 124.22-106.24 124.22-191.44 0-115.65-94.1-209.74-209.75-209.74-50.95 0-100.22 18.77-138.72 52.84l-.54.47a32.98 32.98 0 0 1 5.04 4.94l.44-.4a203.56 203.56 0 0 1 67.15-39.25c-37.8 22.73-63.22 64.02-63.22 111.24 0 71.6 58.25 129.84 129.84 129.84 32.23 0 63.22-12.06 87.27-33.98l.52-.47a33.32 33.32 0 0 1-5.36-4.65l-.44.42a122.4 122.4 0 0 1-81.98 31.64c-67.7 0-122.8-55.09-122.8-122.8s55.1-122.8 122.8-122.8c67.71 0 122.8 55.09 122.8 122.8 0 12.3-1.83 24.5-5.46 36.22l-.17.56a32.7 32.7 0 0 1 6.43 2.98l.22-.71a129.3 129.3 0 0 0 6.03-39.05c0-47.62-25.84-89.22-64.16-111.82 79.61 27.36 137.01 102.93 137.01 191.7 0 108.29-85.33 197.02-192.28 202.46-3.48.1-6.92.26-10.42.26s-6.95-.16-10.42-.26C220.72 663.42 135.4 574.69 135.4 466.4c0-35.22 9.39-70.1 27.14-100.87l.3-.52a32.95 32.95 0 0 1-5.82-3.96l-.36.62a209.2 209.2 0 0 0-28.3 104.74c0 85.2 51.09 158.64 124.22 191.44C111.36 620.06 7.05 491.05 7.05 338.08c0-182.53 148.5-331.04 331.03-331.04a330.28 330.28 0 0 1 167.06 45.42l.53.32a33.08 33.08 0 0 1 3.86-5.92l-.62-.36A337.24 337.24 0 0 0 338.08 0zm197.04 50.3a17.4 17.4 0 1 0 0 34.8 17.4 17.4 0 0 0 0-34.8zM178.4 318.53a17.4 17.4 0 1 0 0 34.8 17.4 17.4 0 0 0 0-34.8zm159.69 17.4a50.6 50.6 0 1 0 0 101.18 50.6 50.6 0 0 0 0-101.18zm106.44 101.2a17.4 17.4 0 1 0 0 34.8 17.4 17.4 0 0 0 0-34.8z"/></svg>

            <p className={styles['logo-title']}>Astrosat</p>
          </span>
        </div>
        {children}
      </div>
    </div>
  );
};

Menu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isMenuVisible: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.shape(PropTypes.object.isRequired))
};

export default Menu;
