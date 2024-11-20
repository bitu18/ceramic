import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../Category.module.scss';
import Button from '../../Button';

const cx = classNames.bind(styles);
function CategoryProduct({ img, title, onClick }) {
    return (
        <Button className={cx('wrapper-item')} onClick={onClick}>
            <img src={img} alt="img" className={cx('img')} />
            <h4 className={cx('title')}>{title}</h4>
        </Button>
    );
}

CategoryProduct.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default CategoryProduct;
