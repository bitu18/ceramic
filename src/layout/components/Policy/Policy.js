import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Policy.module.scss';

const cx = classNames.bind(styles);
function Policy({ icon, title, description }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-icon')}>
                <FontAwesomeIcon icon={icon} className={cx('icon')} />
            </div>
            <div className={cx('infor')}>
                <h3 className={cx('title')}>{title}</h3>
                <span className={cx('description')}>{description}</span>
            </div>
        </div>
    );
}

Policy.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Policy;
