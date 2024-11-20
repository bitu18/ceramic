import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import routes from '~/config/routes';
import img from '~/assets/imgs';

const cx = classNames.bind(styles);
function Footer() {
    const handleClickToTop = () => {
        window.scrollTo(0, 0);
    };

    const handleClickEmail = () => {
        window.location.href = 'mailto:gomnha@ceramic.com';
    };
    return (
        <div className={cx('wrapper')}>
            <div className="grid wide">
                <div className="row">
                    <div className="col l-3">
                        <iframe
                            title="page"
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FG%25E1%25BB%2591m-nh%25C3%25A0-Khu%25C3%25AA-My-106591728105268&tabs&width=260&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=5147914965295677"
                            width="260"
                            height="140"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        />
                        <iframe
                            title="page-like"
                            src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FG%25E1%25BB%2591m-nh%25C3%25A0-Khu%25C3%25AA-My-106591728105268&width=260&layout=standard&action=like&size=small&share=true&height=35&appId=5147914965295677"
                            width="260"
                            height="45"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        />
                    </div>
                    <div className="col l-3">
                        <div className={cx('infor-shop')}>
                            <p>Địa chỉ: 123 Tô Ký, Phường 11, Hồ Chí Minh</p>
                            <p>Số điện thoại: 09325681</p>
                            <p>Số fax: 9966</p>
                            <p>
                                Email:{' '}
                                <span className={cx('email')} onClick={handleClickEmail}>
                                    gomnha@ceramic.com
                                </span>
                            </p>
                            <span className={cx('website')}>
                                Website:{' '}
                                <Link to={routes.home} onClick={handleClickToTop}>
                                    Gốm nhà Bi Tu
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="col l-3">
                        <div className={cx('infor-shop')}>
                            <p className={cx('strong-text')}>Gốm sứ chất lượng cao</p>
                            <p>Quy trình sản xuất đạt tiêu chuẩn</p>
                            <p className={cx('strong-text')}>Mua hàng(T2-CN)</p>
                            <p>Mở cửa tất cả các ngày trong tuần!</p>
                            <p className={cx('strong-text')}>Miễn phí giao hàng</p>
                        </div>
                    </div>
                    <div className="col l-3">
                        <div className={cx('logo')}>
                            <img src={img.logo} alt="logo" />
                        </div>
                    </div>
                </div>
                <div className={cx('copyright')}>
                    <p>Copyright 2024 © Bitu - Make & code by Bitu</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
