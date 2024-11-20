import classNames from 'classnames/bind';
import { faAward, faStore, faTruckFast } from '@fortawesome/free-solid-svg-icons';

import styles from './Home.module.scss';
import Policy from '~/layout/components/Policy';
import HeaderProduct from '~/components/HeaderProduct';
import { useEffect, useState } from 'react';
import ApiSearchData from '~/components/ApiSearchData';
import ImageSlider from '~/layout/components/ImageSlider';
import BestSellerProduct from '~/layout/components/BestSellerProduct';
import NewProduct from '~/layout/components/NewProduct';
import FeaturedProducts from '~/layout/components/FeaturedProducts';
import Feedback from '~/layout/components/Feedback';
import Contact from '../Contact';

const cx = classNames.bind(styles);
function Home() {
    const [showProduct, setShowProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await ApiSearchData();
            setShowProduct(data);
        };

        fetchData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className="row">
                <div className="col l-9">
                    <ImageSlider />
                </div>
                <div className="col l-3">
                    <Policy
                        icon={faAward}
                        title="Gốm sứ chất lượng cao"
                        description="Quy trình sản xuất đạt tiêu chuẩn"
                    />
                    <Policy icon={faStore} title="Mua hàng(T2-CN)" description="Mở cửa tất cả các ngày trong tuần!" />
                    <Policy
                        icon={faTruckFast}
                        title="Miễn phí giao hàng"
                        description="Dành cho hóa đơn trên 300k và < 4km"
                    />
                </div>
            </div>

            <div className={cx('content')}>
                <HeaderProduct title="Sản phẩm mới" />
                <NewProduct data={showProduct} />

                <HeaderProduct title="Sản phẩm bán chạy" />
                <BestSellerProduct data={showProduct} />

                <HeaderProduct title="Sản phẩm tiêu biểu" />
                <FeaturedProducts data={showProduct} />

                <HeaderProduct title="Phản hồi từ khách hàng" />
                <Feedback />

                <HeaderProduct title="Về chúng tôi" />
                <Contact />
            </div>
        </div>
    );
}

export default Home;
