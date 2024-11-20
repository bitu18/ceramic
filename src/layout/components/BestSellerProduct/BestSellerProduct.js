import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './BestSellerProduct.module.scss';
import SliderSwiper from '../../../components/SliderSwiper';
import { Fragment } from 'react';
import ProductItem from '../../../components/ProductItem';
import { shuffleArray } from '~/components/method';

const cx = classNames.bind(styles);
function BestSellerProduct({ data }) {
    const hotProducts = data.filter((hotProduct) => hotProduct['best-seller'] === 'Hot');

    const shuffleData = shuffleArray([...hotProducts]);

    const handleProductClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className={cx('best-seller')}>
            <SliderSwiper
                slidePerView={4}
                spaceBetween={30}
                navigation={true}
                grabCursor={true}
                loop={true}
                autoplay={{ delay: 1000, disableOnInteraction: false }}
            >
                {shuffleData.map((products, index) => (
                    <div key={index} onClick={handleProductClick}>
                        {/* Wrapper every product with [...] because the data in ProductItem receive array
                            If u not wrap, data just recieve an only 1 array with all products */}
                        <ProductItem data={[products]} />
                    </div>
                ))}
            </SliderSwiper>
        </div>
    );
}

BestSellerProduct.propTypes = {
    data: PropTypes.array.isRequired,
};

export default BestSellerProduct;
