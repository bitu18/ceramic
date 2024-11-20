import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './ProductSearch.module.scss';

const cx = classNames.bind(styles);
function ProductSearch({ data }) {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('img')} src={data.img} alt={data.name} />

            <div className={cx('infor')}>
                <h4 className={cx('name')}>{data.name}</h4>
                <p className={cx('price')}>{data.price}</p>
            </div>
        </div>
    );
}

ProductSearch.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ProductSearch;
