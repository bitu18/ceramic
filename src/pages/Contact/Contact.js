import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
function Contact() {
    const handleClickToTop = () => {
        window.scrollTo(0, 0);
    };

    const handleClickEmail = () => {
        window.location.href = 'mailto:gomnha@ceramic.com';
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('background')}>
                <div className={cx('img')} />
                <div className={cx('contact')}>
                    <h2>Liên Hệ</h2>
                    <p>Chăm sóc khách hàng là niềm vui của chúng tôi!</p>
                </div>
            </div>

            <div className={cx('contact-store')}>
                <div className="row">
                    <div className="col l-6">
                        <div className={cx('contact-element')}>
                            <h2 className={cx('name')}>Cửa hàng 1</h2>
                            <p className={cx('address')}>Địa chỉ: 123 Tô Ký, Phường 11, Hồ Chí Minh</p>
                            <p className={cx('phone-number')}>Số điện thoại: 09325681</p>
                            <p className={cx('fax')}>Số fax: 9966</p>
                            <p className={cx('email')}>
                                Email: <span onClick={handleClickEmail}>gomnha@ceramic.com</span>
                            </p>
                            <span className={cx('website')}>
                                Website:
                                <Link to={routes.home} onClick={handleClickToTop}>
                                    {' '}
                                    Gốm nhà Bi Tu
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="col l-6">
                        <div className={cx('contact-element')}>
                            <h2 className={cx('name')}>Cửa hàng 2</h2>
                            <p className={cx('address')}>Địa chỉ: 456 Hoàng Kiếm, Phường 9, Hà Nội</p>
                            <p className={cx('phone-number')}>Số điện thoại: 09339061</p>
                            <p className={cx('fax')}>Số fax: 6699</p>
                            <p className={cx('email')}>
                                Email: <span onClick={handleClickEmail}>gomnha@ceramic.com</span>
                            </p>
                            <span className={cx('website')}>
                                Website:
                                <Link to={routes.home} onClick={handleClickToTop}>
                                    Gốm nhà Bi Tu
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
