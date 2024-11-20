import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import Header from '../components/Header';
import styles from './DefaultLayout.module.scss';
import Footer from '../components/Footer/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [showIcon, setShowIcon] = useState(false);

    useEffect(() => {
        const handleSroll = () => {
            if (window.scrollY > 300) {
                setShowIcon(true);
            } else {
                setShowIcon(false);
            }
        };

        window.addEventListener('scroll', handleSroll);

        return () => window.removeEventListener('scroll', handleSroll);
    }, []);

    const handleGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className={cx('wrapper')}>
            <Header />

            <div className={cx('content')}>
                <div className="grid wide">{children}</div>

                {showIcon && (
                    <button className={cx('goToTop')} onClick={handleGoToTop}>
                        <FontAwesomeIcon icon={faAnglesUp} />
                    </button>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
