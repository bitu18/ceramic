import classNames from 'classnames/bind';
import styles from './FeaturedProducts.module.scss';
import { formatPrice, shuffleArray } from '~/components/method';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
import { useProduct } from '~/components/store';

const cx = classNames.bind(styles);
function FeaturedProducts({ data }) {
    const shuffleData = shuffleArray([...data]).slice(0, 6);

    const { setSelectedProduct } = useProduct();

    return (
        <div className={cx('wrapper')}>
            {shuffleData.map((product, index) => (
                <div key={index} className={cx('feater-product', `feater-product-${index}`)}>
                    <Link to={routes.productDetail} onClick={() => setSelectedProduct(product)}>
                        <img src={product.img} alt="img" className={cx('img')} />
                    </Link>
                    <div className={cx('content')}>
                        <Link to={routes.productDetail} onClick={() => setSelectedProduct(product)}>
                            <h3 className={cx('name')}>{product.name}</h3>
                        </Link>
                        <p className={cx('price')}>{formatPrice(product.price)} vnđ</p>
                        <p className={cx('description')}>{product.description}</p>
                    </div>
                </div>
            ))}

            <div className={cx('line-between')}></div>
        </div>
    );
}

export default FeaturedProducts;
