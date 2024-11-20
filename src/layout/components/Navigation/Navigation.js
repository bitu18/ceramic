import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import routes from '~/config/routes';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);
function Navigation() {
    return (
        <ul className={cx('navigation')}>
            <li>
                <NavLink to={routes.home} className={(nav) => cx('nav-item', { active: nav.isActive })}>
                    Trang Chủ
                </NavLink>
            </li>
            <li>
                <NavLink to={routes.products} className={(nav) => cx('nav-item', { active: nav.isActive })}>
                    Sản phẩm
                </NavLink>
            </li>
            <li>
                <NavLink to={routes.news} className={(nav) => cx('nav-item', { active: nav.isActive })}>
                    Tin mới
                </NavLink>
            </li>
            <li>
                <NavLink to={routes.contact} className={(nav) => cx('nav-item', { active: nav.isActive })}>
                    Liên hệ
                </NavLink>
            </li>
        </ul>
    );
}

export default Navigation;
