import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './ProductItem.module.scss';
import Button from '../Button';
import routes from '~/config/routes';
import { useProduct } from '../store';
import { formatPrice } from '../method';

const cx = classNames.bind(styles);
function ProductItem({ data }) {
    const { setSelectedProduct } = useProduct();

    return data.map((product, index) => (
        <div key={index} className={cx('wrapper')}>
            <Link to={routes.productDetail} onClick={() => setSelectedProduct(product)} className={cx('infor')}>
                <div className={cx('tag')}>
                    <p className={cx('discount')}>{product.discount ? product.discount + '%' : ''}</p>
                    <p className={cx('new')}>{product.sale}</p>
                    <p className={cx('hot')}>{product['best-seller']}</p>
                </div>
                <div className={cx('wrapper-img')}>
                    <img className={cx('img')} src={product.img} alt="img" />
                </div>
                <div className={cx('description')}>
                    <h3 className={cx('name')}>{product.name}</h3>
                    <div className={cx('price')}>
                        <p className={cx('new-price')}>{formatPrice(product.price) + 'đ'}</p>
                        <p className={cx('old-price')}>
                            {product['old-price'] ? formatPrice(product['old-price']) + 'đ' : ''}
                        </p>
                    </div>

                    <Button primary small className={cx('btn')}>
                        mua ngay
                    </Button>
                </div>
            </Link>
        </div>
    ));
}

ProductItem.propTypes = {
    data: PropTypes.array.isRequired,
};

export default ProductItem;
