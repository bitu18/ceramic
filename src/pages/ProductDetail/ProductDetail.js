import { v4 as id } from 'uuid';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';
import Button from '~/components/Button';
import { useCart, useProduct } from '~/components/store';
import { formatPrice } from '~/components/method';
import BestSellerProduct from '~/layout/components/BestSellerProduct';
import { useEffect, useState } from 'react';
import ApiSearchData from '~/components/ApiSearchData';
import Toast from '~/components/Toast';

const cx = classNames.bind(styles);
function ProductDetail() {
    const [bestSellerProduct, setBestSellerProduct] = useState([]);
    const [listToasts, setListToasts] = useState([]);
    const [valueCount, setValueCount] = useState(1);
    const [lastTimeToast, setLastTimeToast] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            const data = await ApiSearchData();
            setBestSellerProduct(data);
        };

        fetchData();
    }, []);

    const { selectedProduct } = useProduct();
    const { addToCart } = useCart();

    if (!selectedProduct) {
        return <p style={{ textAlign: 'center' }}>Product not found.</p>; // Render a fallback message or return null
    }

    const handleCount = (type) => {
        setValueCount((prevCount) => {
            if (type === 'increment') {
                return prevCount + 1;
            } else if (type === 'decrement') {
                return prevCount > 1 ? prevCount - 1 : 1;
            }
            return prevCount;
        });
    };

    const handleChangeInput = (e) => {
        setValueCount(Number(e.target.value));
    };

    const handleAddToCart = () => {
        const now = Date.now();
        const timeLastToast = now - lastTimeToast;

        if (timeLastToast < 2000) {
            const errorToast = { id: id(), type: 'error', message: 'Bạn đã thao tác quá nhanh!' };
            setListToasts((prev) => [...prev, errorToast]);
        } else {
            const successToast = { id: id(), type: 'success', message: 'Đã thêm sản phẩm vào giỏ hàng' };
            setListToasts((prev) => [...prev, successToast]);
            addToCart(selectedProduct, valueCount);
            setLastTimeToast(now);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className="row">
                <div className={cx('img', 'col l-8')}>
                    <img src={selectedProduct?.img} alt={selectedProduct.name} />
                </div>
                <div className={cx('infor', 'col l-4')}>
                    <h3 className={cx('name')}>{selectedProduct?.name}</h3>
                    <div className={cx('price')}>
                        <p className={cx('new-price')}>Giá: {formatPrice(selectedProduct?.price)}đ</p>
                        <p className={cx('old-price')}>
                            {selectedProduct['old-price'] ? formatPrice(selectedProduct['old-price']) + 'đ' : ''}
                        </p>
                    </div>
                    <p className={cx('origin')}>Xuất sứ: {selectedProduct?.origin}</p>
                    <p className={cx('type')}>Loại: {selectedProduct?.category}</p>
                    <div className={cx('wrapper-counter')}>
                        <p className={cx('count')}>Số lượng:</p>

                        <div className={cx('counter')}>
                            <button className={cx('minus')} onClick={() => handleCount('decrement')}>
                                -
                            </button>
                            <input
                                type="text"
                                value={valueCount}
                                onChange={handleChangeInput}
                                className={cx('input')}
                            />
                            <button className={cx('plus')} onClick={() => handleCount('increment')}>
                                +
                            </button>
                        </div>
                    </div>
                    <Button primary large className={cx('btn')} onClick={handleAddToCart}>
                        chọn mua
                    </Button>
                </div>

                <div className={cx('des', 'col l-12')}>
                    <h3>Thông tin về sản phẩm</h3>
                    <p>{selectedProduct?.description}</p>
                </div>
            </div>

            <div className={cx('product-best')}>
                <h2>Sản phẩm bán chạy</h2>
                <BestSellerProduct data={bestSellerProduct} />
            </div>
            <Toast listToasts={listToasts} setListToasts={setListToasts} />
        </div>
    );
}

export default ProductDetail;
