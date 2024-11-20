import classNames from 'classnames/bind';
import styles from './SuccessPayment.module.scss';
import Popper from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';
import { useUserInfor } from '~/components/store';

const cx = classNames.bind(styles);
function SuccessPayment() {
    const { user } = useUserInfor();
    return (
        <div className={cx('wrapper')}>
            <Popper className={cx('popper')}>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faCartArrowDown} />
                </div>

                <div className={cx('content')}>
                    <h3>đặt hàng thành công!</h3>
                    <p>
                        Cảm ơn bạn <b>{user?.name}</b> đã đặt hàng.
                    </p>
                    <p>
                        Chúng tôi sẽ giao hàng đến bạn trong vòng <b>4 - 7 ngày</b> tới.
                    </p>
                    <p>
                        Để tiếp tục mua sắm xin hãy ấn vào <Link to={routes.products}>đây</Link>.
                    </p>
                </div>
            </Popper>
        </div>
    );
}

export default SuccessPayment;
