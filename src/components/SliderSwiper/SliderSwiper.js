import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { register } from 'swiper/element/bundle';
import 'swiper/swiper-bundle.css';
import styles from './SliderSwiper.module.scss';
import { useEffect, useRef } from 'react';

register(); // Ensure Swiper is registered

const cx = classNames.bind(styles);

function SliderSwiper({ children, slidePerView, spaceBetween, navigation, grabCursor, loop, autoplay }) {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;

        // Ensure the swiperContainer exists and swiper is initialized
        if (swiperContainer && swiperContainer.swiper) {
            const swiper = swiperContainer.swiper;

            // Configure Swiper
            swiper.params.loop = loop;
            if (autoplay) {
                swiper.params.autoplay = {
                    delay: autoplay.delay || 3000,
                    disableOnInteraction: autoplay.disableOnInteraction || false,
                };
                swiper.autoplay.start();
            }
            swiper.update(); // Apply updated settings
        }
    }, [autoplay, loop]); // Rerun effect when autoplay or loop props change

    return (
        <swiper-container
            ref={swiperRef}
            slides-per-view={slidePerView}
            space-between={spaceBetween}
            navigation={navigation ? 'true' : 'false'}
            grab-cursor={grabCursor ? 'true' : 'false'}
        >
            {children.map((child, index) => (
                <swiper-slide key={index}>{child}</swiper-slide>
            ))}
        </swiper-container>
    );
}

SliderSwiper.propTypes = {
    children: PropTypes.node.isRequired,
    slidePerView: PropTypes.number,
    spaceBetween: PropTypes.number,
    navigation: PropTypes.bool,
    grabCursor: PropTypes.bool,
    loop: PropTypes.bool,
    autoplay: PropTypes.oneOfType([
        PropTypes.bool, // If false, autoplay is disabled
        PropTypes.shape({
            delay: PropTypes.number,
            disableOnInteraction: PropTypes.bool,
        }),
    ]), // Autoplay settings
};

export default SliderSwiper;
