import classNames from 'classnames/bind';

import styles from './Feedback.module.scss';
import SliderSwiper from '~/components/SliderSwiper';
import feedback1 from '~/assets/imgs/feedback1.jpg';
import feedback2 from '~/assets/imgs/feedback2.jpg';
import feedback3 from '~/assets/imgs/feedback3.jpg';
import feedback4 from '~/assets/imgs/feedback4.jpg';
const cx = classNames.bind(styles);
function Feedback() {
    return (
        <div className={cx('wrapper')}>
            <SliderSwiper
                spaceBetween={10}
                slidesPerView={2}
                pagination={true}
                navigation={true}
                grab-cursor={true}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
            >
                {/* Have to pass <swiper-slide> because we have 2 classes to slide */}
                <swiper-slide>
                    <img src={feedback1} alt="img" className={cx('img')} />
                    <div className={cx('feedback')}>
                        <img
                            src="https://gomsu.netlify.app/static/media/a4.9c7a1f4fbd09e946c184.png"
                            alt="customer"
                            className={cx('avatar')}
                        ></img>
                        <div className={cx('text')}>
                            <h2>Thủy Tiên</h2>
                            <p>Hôm qua mua về mà chồng em cứ bảo em nấu nhìn ảo diệu hơn, nhìn bộ sứ đẹp quá!</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img src={feedback2} alt="img" className={cx('img')} />
                    <div className={cx('feedback')}>
                        <img
                            src="https://gomsu.netlify.app/static/media/a1.d27f5567f6e23f9f528b.png"
                            alt="customer"
                            className={cx('avatar')}
                        ></img>
                        <div className={cx('text')}>
                            <h2>Bà Hằng</h2>
                            <p>Được bộ sứ đẹp, ăn cơm ngon hẳn lun! Em thích lắm chị ạ!</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img src={feedback3} alt="img" className={cx('img')} />
                    <div className={cx('feedback')}>
                        <img
                            src="https://gomsu.netlify.app/static/media/a2.06e40a11cc8ef4364346.png"
                            alt="customer"
                            className={cx('avatar')}
                        ></img>
                        <div className={cx('text')}>
                            <h2>Chú Linh</h2>
                            <p>Mua về phải vào bếp nấu luôn chị ạ!! Bộ bát đĩa quá trời là đẹp, rất ủng hộ chị!</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <img src={feedback4} alt="img" className={cx('img')} />
                    <div className={cx('feedback')}>
                        <img
                            src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj"
                            alt="customer"
                            className={cx('avatar')}
                        ></img>
                        <div className={cx('text')}>
                            <h2>Minh Trần</h2>
                            <p>
                                Mẹ em cứ bảo mua về làm gì cho chật nhà, rồi đến giờ thì hôm nào nấu ăn cũng dùng bộ này
                                chị ạ!
                            </p>
                        </div>
                    </div>
                </swiper-slide>
            </SliderSwiper>
        </div>
    );
}

export default Feedback;
