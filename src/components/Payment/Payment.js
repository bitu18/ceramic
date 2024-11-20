import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Payment.module.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faClose } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';
import { useCart } from '../store';
import { formatPrice } from '../method';
import CartProduct from '../CartProduct';
import PaymentEmpty from '../PaymentEmpty/PaymentEmpty';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Payment({ isVisible, onClose }) {
    const { cart } = useCart();
    const navigate = useNavigate();

    const handlePayment = () => {
        onClose();
        navigate('/payment');
    };

    return (
        <Fragment>
            <div className={cx('wrapper', { show: isVisible })}>
                <h2 className={cx('cart')}>Giỏ hàng</h2>

                {cart.length === 0 ? (
                    <PaymentEmpty onClose={onClose} />
                ) : (
                    <Fragment>
                        {/* Cart Product*/}
                        <CartProduct />

                        <div className={cx('cart-bottom')}>
                            <p className={cx('total-all')}>
                                Tổng tiền đơn hàng:
                                {formatPrice(cart.reduce((total, item) => total + item.price * item.quantity, 0))} vnđ
                            </p>
                            <Button
                                primary
                                medium
                                leftIcon={<FontAwesomeIcon icon={faCartShopping} />}
                                className={cx('btn')}
                                onClick={handlePayment}
                            >
                                Thanh Toán
                            </Button>
                        </div>
                    </Fragment>
                )}

                <Button rightIcon={<FontAwesomeIcon icon={faClose} />} className={cx('btn-close')} onClick={onClose}>
                    {''}
                </Button>
            </div>
            {isVisible && <div className={cx('modal')} onClick={onClose}></div>}
        </Fragment>
    );
}

Payment.propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func,
};

export default Payment;
