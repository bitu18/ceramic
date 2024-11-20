import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { register } from 'swiper/element/bundle';
import 'swiper/swiper-bundle.css';
import { Fragment } from 'react';

import styles from './NewProduct.module.scss';
import ProductItem from '../../../components/ProductItem';
import SliderSwiper from '../../../components/SliderSwiper';
import { shuffleArray } from '~/components/method';

const cx = classNames.bind(styles);

register();
function NewProduct({ data }) {
    const newProducts = data.filter((newProduct) => newProduct.sale === 'New');
    const shuffleData = shuffleArray([...newProducts]);

    const rowData = [];

    // // show and slide 2 product at same time
    for (let i = 0; i < shuffleData.length; i += 2) {
        rowData.push(shuffleData.slice(i, i + 2));
    }

    return (
        <div className={cx('new-product')}>
            <SliderSwiper slidePerView={4} spaceBetween={30} navigation={true} grabCursor={true}>
                {rowData.map((products, index) => (
                    <Fragment key={index}>
                        <ProductItem data={products} />
                    </Fragment>
                ))}
            </SliderSwiper>
        </div>
    );
}
NewProduct.propTypes = {
    data: PropTypes.array.isRequired,
};
export default NewProduct;
