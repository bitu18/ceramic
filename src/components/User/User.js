import classNames from 'classnames/bind';
import styles from './User.module.scss';
import { useUserInfor } from '../store';
import Tippy from '@tippyjs/react';
import Popper from '../Popper';
import Button from '../Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';

const cx = classNames.bind(styles);
function User() {
    const { user, setUser } = useUserInfor();

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    const handleLogOut = () => {
        setUser(null);
        localStorage.removeItem('user');

        window.location.reload();
        window.location.href = '/';
    };

    return (
        <div>
            <Tippy
                interactive
                placement="bottom"
                visible={visible}
                onClickOutside={hide}
                render={(attrs) =>
                    visible && (
                        <div className={cx('user-select')} tabIndex="-1" {...attrs}>
                            <Popper>
                                <Link to={routes.order} onClick={hide} className={cx('btn')}>
                                    Đơn Hàng
                                </Link>
                                <Link className={cx('btn')} onClick={handleLogOut}>
                                    Đăng xuất
                                </Link>
                            </Popper>
                        </div>
                    )
                }
            >
                <div className={cx('user')} onClick={visible ? hide : show}>
                    <img src={user.avatar} alt="avatar" className={cx('avatar')} />
                    <span className={cx('name')}>{user.name}</span>
                </div>
            </Tippy>
        </div>
    );
}

export default User;
