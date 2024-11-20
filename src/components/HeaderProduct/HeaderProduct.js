import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HeaderProduct.module.scss';

const cx = classNames.bind(styles);
function HeaderProduct({ title }) {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>{title}</h3>
            <div className={cx('underline')}></div>
        </div>
    );
}

HeaderProduct.propTypes = {
    title: PropTypes.string.isRequired,
};

export default HeaderProduct;
