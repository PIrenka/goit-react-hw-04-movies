import PropTypes from 'prop-types';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './stylesButton.module.scss';

const Button = ({ onClick, isLoading }) => {
  return (
    <>
      {isLoading && (
        <Loader
          type="ThreeDots"
          color="#f5dbee"
          height={80}
          width={80}
          timeout={1000}
        />
      )}
      <button className={styles.Button} type="button" onClick={onClick}>
        Load more
      </button>
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Button;
