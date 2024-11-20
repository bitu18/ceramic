import { register } from 'swiper/element/bundle';

import classNames from 'classnames/bind';

import styles from './ImageSlider.module.scss';
import SliderSwiper from '~/components/SliderSwiper';

register();

const cx = classNames.bind(styles);
function ImageSlider() {
    // useEffect(() => {
    //     const swiper = document.querySelector('swiper-container').swiper;

    //     swiper.params.autoplay = {
    //         delay: 3000,
    //         disableOnInteraction: false,
    //     };
    //     swiper.params.loop = true;

    //     swiper.update(); // Update Swiper to apply the effect
    //     swiper.autoplay.start(); // Start autoplay

    //     // Responsive
    //     // swiper.params.breakpoints = {
    //     //     1024: {
    //     //         slidesPerView: 3,
    //     //         spaceBetween: 20,
    //     //     },
    //     //     320: {
    //     //         slidesPerView: 1,
    //     //         spaceBetween: 0,
    //     //     },
    //     // };
    // }, []);

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
                {/* Dont need add <swiper-slide> because it only has img compare to Feedback */}
                <img
                    className={cx('img')}
                    src="https://gomsu.netlify.app/static/media/slide-1.ec337962e2b01d38a2e9.jpg"
                    alt="slider 1"
                />
                <img
                    className={cx('img')}
                    src="https://gomsu.netlify.app/static/media/slide-2.8deba960365ef6552c80.jpg"
                    alt="slider 2"
                />
            </SliderSwiper>
        </div>
    );
}

export default ImageSlider;
