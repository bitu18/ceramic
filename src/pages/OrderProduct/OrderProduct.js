import { Fragment, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './OrderProduct.module.scss';
import Popper from '~/components/Popper';
import Button from '~/components/Button';
import CartProduct from '~/components/CartProduct';
import { useCart } from '~/components/store';
import PaymentEmpty from '~/components/PaymentEmpty/PaymentEmpty';
import { formatPrice } from '~/components/method';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function OrderProduct() {
    const { cart } = useCart();
    const navigate = useNavigate();

    const [inforUser, setInforUser] = useState({ name: '', phoneNumber: '', address: '', note: '' });
    const [errorMessage, setErrorMessage] = useState({ name: '', phoneNumber: '', address: '' });

    const handleChangeInput = (e) => {
        const { name, value } = e.target;

        setInforUser((prevInforUser) => ({
            ...prevInforUser,
            [name]: value,
        }));

        // handle clear errorMessage when user typing
        if (value.trim() !== '') {
            setErrorMessage((prevErrorMessage) => ({
                ...prevErrorMessage,
                [name]: '',
            }));
        }
    };

    const handleSubmitPayment = () => {
        const errorUpdate = {};
        if (!inforUser.name.trim()) {
            errorUpdate.name = 'Vui lòng nhập họ và tên.';
        }
        const phoneRegex = /^[0-9]{10,15}$/;
        if (!inforUser.phoneNumber.trim()) {
            errorUpdate.phoneNumber = 'Vui lòng nhập số điện thoại.';
        } else if (!phoneRegex.test(inforUser.phoneNumber.trim())) {
            errorUpdate.phoneNumber = 'Số điện thoại không hợp lệ!';
        }
        if (!inforUser.address.trim()) {
            errorUpdate.address = 'Vui lòng nhập địa chỉ nhận hàng.';
        }

        setErrorMessage(errorUpdate);

        if (Object.values(errorUpdate).every((error) => error === '') && cart.length > 0) {
            // submit payment request to server

            navigate('/successPayment');
        }
    };
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>Thanh toán</h2>

            <div className="row">
                <div className="col l-6">
                    <Popper className={cx('form')}>
                        <h3>Đơn hàng</h3>
                        {cart.length > 0 ? (
                            <Fragment>
                                <CartProduct />
                                <div className={cx('coupon')}>
                                    <input type="text" placeholder="Nhập mã giảm giá" />
                                    <Button className={cx('btn-coupon')} primary>
                                        Áp dụng mã
                                    </Button>
                                </div>
                                <div className={cx('payment', 'payment--ligh')}>
                                    <p>Tạm tính:</p>
                                    <p>
                                        {formatPrice(
                                            cart.reduce((total, item) => total + item.price * item.quantity, 0),
                                        )}{' '}
                                        vnđ
                                    </p>
                                </div>
                                <div className={cx('payment', 'payment--ligh')}>
                                    <p>Giảm giá:</p>
                                    <p>- 0 vnđ</p>
                                </div>
                                <div className={cx('payment')}>
                                    <p>Tổng tiền đơn hàng:</p>
                                    <p>
                                        {formatPrice(
                                            cart.reduce((total, item) => total + item.price * item.quantity, 0),
                                        )}{' '}
                                        vnđ
                                    </p>
                                </div>
                            </Fragment>
                        ) : (
                            <PaymentEmpty />
                        )}
                    </Popper>
                </div>
                <div className="col l-6">
                    <Popper className={cx('form')}>
                        <h3>Thông tin khách hàng</h3>
                        {cart.length > 0 ? (
                            <Fragment>
                                <form>
                                    <div className={cx('payment-item')}>
                                        <label>Họ tên:</label>
                                        <input
                                            value={inforUser.name}
                                            type="text"
                                            placeholder="Họ và tên"
                                            name="name"
                                            onChange={handleChangeInput}
                                        />
                                    </div>
                                    {errorMessage.name && <p className={cx('error')}>{errorMessage.name}</p>}
                                    <div className={cx('payment-item')}>
                                        <label>Điện thoại:</label>
                                        <input
                                            value={inforUser.phoneNumber}
                                            type="text"
                                            placeholder="Số điện thoại"
                                            name="phoneNumber"
                                            onChange={handleChangeInput}
                                        />
                                    </div>
                                    {errorMessage.phoneNumber && (
                                        <p className={cx('error')}>{errorMessage.phoneNumber}</p>
                                    )}
                                    <div className={cx('payment-item')}>
                                        <label>Địa chỉ:</label>
                                        <input
                                            value={inforUser.address}
                                            type="text"
                                            placeholder="Địa chỉ nhận hàng"
                                            name="address"
                                            onChange={handleChangeInput}
                                        />
                                    </div>
                                    {errorMessage.address && <p className={cx('error')}>{errorMessage.address}</p>}
                                    <div className={cx('payment-item')}>
                                        <label>Ghi chú:</label>
                                        <textarea
                                            type="text"
                                            placeholder="Ghi chú cho cửa hàng"
                                            name="note"
                                            spellCheck="false"
                                        />
                                    </div>
                                </form>

                                <Button primary large className={cx('btn-payment')} onClick={handleSubmitPayment}>
                                    Xác nhận thanh toán
                                </Button>
                            </Fragment>
                        ) : (
                            <p className={cx('empty-cart')}>Vui lòng thêm sản phẩm vào giỏ hàng để điền thông tin.</p>
                        )}
                    </Popper>
                </div>
            </div>
        </div>
    );
}

export default OrderProduct;
