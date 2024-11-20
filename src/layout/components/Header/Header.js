import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react';
import Popper from '~/components/Popper';

import styles from './Header.module.scss';
import img from '~/assets/imgs';
import Navigation from '~/layout/components/Navigation';
import Search from '~/layout/components/Search';
import Button from '~/components/Button';
import routes from '~/config/routes';
import { Link } from 'react-router-dom';
import Payment from '~/components/Payment';
import { useCart, useUserInfor } from '~/components/store';
import User from '~/components/User';

const cx = classNames.bind(styles);
function Header() {
    const { cart } = useCart();
    const { user } = useUserInfor();

    const [showFullHeader, setShowFullHeader] = useState(true);
    const [showPayment, setShowPayment] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowFullHeader(false);
            } else {
                setShowFullHeader(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleShowPayment = () => {
        setShowPayment(true);
    };

    const handleClosePayment = () => {
        setShowPayment(false);
    };

    const totalProductCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className={cx(showFullHeader ? 'default-header' : 'min-header')}>
            <div className={cx('header', 'grid wide')}>
                <Link to={routes.home} className={cx('logo')}>
                    <img src={img.logo} alt="logo" />
                </Link>

                <div className={cx('header-center')}>
                    <Navigation />

                    {showFullHeader && <Search />}
                </div>

                <div className={cx('action')}>
                    {showFullHeader &&
                        (user ? (
                            <User />
                        ) : (
                            <Button text to={routes.logIn}>
                                Đăng Nhập
                            </Button>
                        ))}

                    <div className={cx('cart')} onClick={handleShowPayment}>
                        <span className={cx('quantity')}>{totalProductCount ? totalProductCount : ''}</span>
                        <button className={cx('icon-cart')}>
                            <FontAwesomeIcon icon={faBasketShopping} />
                        </button>
                    </div>
                </div>
            </div>
            {/*Cart Form*/}
            <Payment isVisible={showPayment} onClose={handleClosePayment} />
        </header>
    );
}

export default Header;
