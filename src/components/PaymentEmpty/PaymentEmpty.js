import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './PaymentEmpty.module.scss';
import img from '~/assets/imgs';

import routes from '~/config/routes';

const cx = classNames.bind(styles);
function PaymentEmpty({ onClose }) {
    return (
        <div className={cx('empty-cart')}>
            <p className={cx('des')}>Giỏ hàng trống</p>
            <p className={cx('des')}>
                Để tiếp tục mua sắm xin hãy ấn vào
                <Link to={routes.products} className={cx('link')} onClick={onClose}>
                    {' '}
                    đây
                </Link>
                .
            </p>
            <img src={img.emptyCart} alt="img" className={cx('empty-img')} />
        </div>
    );
}

PaymentEmpty.propTypes = {
    onClose: PropTypes.func,
};

export default PaymentEmpty;
