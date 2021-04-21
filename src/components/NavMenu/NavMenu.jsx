import { NavLink } from 'react-router-dom';

import Container from '../Container';

import styles from './stylesNavMenu.module.scss';

const NavMenu = () => (
  <Container>
    <ul className={styles.naviLinks}>
      <li>
        <NavLink
          exact
          to="/"
          className={styles.navLink}
          activeClassName={styles.navLink__active}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          to="/movies"
          className={styles.navLink}
          activeClassName={styles.navLink__active}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </Container>
);

export default NavMenu;
