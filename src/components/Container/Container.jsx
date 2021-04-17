import styles from './stylesContainer.module.scss';
import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Container;
