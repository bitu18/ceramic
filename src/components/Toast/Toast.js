import classNames from 'classnames/bind';
import styles from './Toast.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircleExclamation, faClose } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
function Toast({ listToasts, setListToasts }) {
    const icons = {
        success: faCheckCircle,
        error: faCircleExclamation,
    };

    // Handle individual toast removal based on duration
    useEffect(() => {
        const timers = listToasts.map((toast) => {
            const fadeOutTimer = setTimeout(() => {
                setListToasts((prev) => prev.map((t) => (t.id === toast.id ? { ...t, fadeOut: true } : t)));
            }, 1500); // Start fade-out after duration

            const removeToastTimer = setTimeout(() => {
                setListToasts((prev) => prev.filter((t) => t.id !== toast.id));
            }, 2000); // Remove after fade-out completes

            return [fadeOutTimer, removeToastTimer];
        });

        // Clear up function
        return () =>
            timers.forEach(([fadeOutTimer, removeToastTimer]) => {
                clearTimeout(fadeOutTimer);
                clearTimeout(removeToastTimer);
            });
    }, [listToasts, setListToasts]);

    // // Manual removal of a toast
    // const removeToast = (id) => {
    //     setListToasts((prev) => prev.map((toast) => (toast.id === id ? { ...toast, fadeOut: true } : toast)));
    //     setTimeout(() => {
    //         setListToasts((prev) => prev.filter((toast) => toast.id !== id));
    //     }, 500);
    // };

    return (
        <div className={cx('container')}>
            {listToasts.map((toast) => (
                <div
                    className={cx('wrapper', `${toast.type}`, {
                        'fade-out': toast.fadeOut,
                    })}
                    key={toast.id}
                >
                    <div className={cx('alert')}>
                        <FontAwesomeIcon icon={icons[toast.type]} className={cx('check', `check--${toast.type}`)} />
                        <span className={cx('text')}>{toast.message}</span>
                    </div>
                    <button className={cx('delete')}>
                        <FontAwesomeIcon icon={faClose} className={cx('delte')} />
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Toast;
