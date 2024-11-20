import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NewsInfor.module.scss';

const cx = classNames.bind(styles);
function NewsInfor({
    date,
    title,
    firstDes,
    secondDes,
    thirdDes,
    fourthDes,
    firstImg,
    secondImg,
    thirdImg,
    fourthImg,
}) {
    return (
        <div className={cx('new-item')}>
            <h3 className={cx('date')}>{date}</h3>
            <h1 className={cx('title')}>{title}</h1>
            <p className={cx('des')}>{firstDes}</p>
            <img src={firstImg} alt="img" className={cx('img')} />
            <p className={cx('des')}>{secondDes}</p>
            <img src={secondImg} alt="img" className={cx('img')} />
            <p className={cx('des')}>{thirdDes}</p>
            <img src={thirdImg} alt="img" className={cx('img')} />
            <p className={cx('des')}>{fourthDes}</p>
            <img src={fourthImg} alt="img" className={cx('img')} />
        </div>
    );
}

NewsInfor.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    firstDes: PropTypes.string.isRequired,
    secondDes: PropTypes.string.isRequired,
    thirdDes: PropTypes.string.isRequired,
    fourthDes: PropTypes.string.isRequired,
    firstImg: PropTypes.string.isRequired,
    secondImg: PropTypes.string.isRequired,
    thirdImg: PropTypes.string.isRequired,
    fourthImg: PropTypes.string.isRequired,
};

export default NewsInfor;
