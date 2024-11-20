import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import ProductItem from '~/components/ProductItem';
import { useEffect, useRef, useState } from 'react';
import ApiSearchData from '~/components/ApiSearchData';
import { shuffleArray } from '~/components/method';
import Button from '~/components/Button';
import Category from '~/components/Category';

const cx = classNames.bind(styles);
function Product() {
    const [fetchDataResulted, setFetchDataResulted] = useState([]);
    const [filterDataResulted, setFilterDataResulted] = useState([]);
    const [activeType, setActiveType] = useState(null);

    const productRefs = useRef([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await ApiSearchData();
            setFetchDataResulted(data);
            setFilterDataResulted(data); // show all results at first time.
        };
        fetchData();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(cx('visible')); // Add visible class when in view
                    }
                });
            },
            { threshold: 0.1 }, // Trigger when 10% of the item is visible
        );

        // Observe each product
        productRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect(); // Clean up the observer on unmount
    }, [filterDataResulted]);

    // Category filter handler
    const handleClickCategory = (title) => {
        if (title === 'Tất cả') {
            // Shuffle and show all results if 'Tất cả' is selected
            const shuffleData = shuffleArray(fetchDataResulted);
            setFilterDataResulted(shuffleData);
        } else {
            // Filter products by category
            const filterData = fetchDataResulted.filter((productData) => productData.category === title);
            setFilterDataResulted(filterData);
        }
        setActiveType(null); // Reset active type filter when switching categories
    };

    // Filter within category function
    const handleClickFilter = (type) => {
        setActiveType(type);

        // Start with the currently filtered products
        let filterDataResults = [...filterDataResulted]; // Make a shallow copy

        switch (type) {
            case 'New':
                filterDataResults = [...filterDataResulted].filter((newProduct) => newProduct.sale === 'New');
                break;
            case 'Hot':
                filterDataResults = [...filterDataResulted].filter((hotProduct) => hotProduct['best-seller'] === 'Hot');
                break;
            case 'lowPrice':
                filterDataResults = [...filterDataResulted].sort((a, b) => a.price - b.price);
                break;
            case 'highPrice':
                filterDataResults = [...filterDataResulted].sort((a, b) => b.price - a.price);
                break;
            case 'discount':
                filterDataResults = [...filterDataResulted].filter((discountProduct) => discountProduct.discount);
                break;
            case 'all':
            default:
                filterDataResults = filterDataResulted; // Show all products
                break;
        }

        // Update the filtered data
        setFilterDataResulted([...filterDataResults]); // Set the filtered results
    };

    return (
        <div className={cx('wrapper')}>
            {/* Category */}
            <Category handleClickCategory={handleClickCategory} />

            <div className={cx('filter')}>
                <Button
                    outline
                    className={cx('btn', { active: activeType === 'New' })}
                    onClick={() => handleClickFilter('New')}
                >
                    Mới nhất
                </Button>
                <Button
                    outline
                    className={cx('btn', { active: activeType === 'Hot' })}
                    onClick={() => handleClickFilter('Hot')}
                >
                    Bán chạy
                </Button>
                <select onChange={(e) => handleClickFilter(e.target.value)}>
                    <option value="all">Tất cả</option>
                    <option value="lowPrice">Giá: Thấp - cao</option>
                    <option value="highPrice">Giá: Cao - thấp</option>
                    <option value="discount">Đang khuyến mãi</option>
                </select>
            </div>

            <div className={cx('product-item')}>
                <div className="row">
                    {filterDataResulted.map((data, index) => (
                        <div
                            key={`${data.id}-${index}`}
                            ref={(el) => (productRefs.current[index] = el)}
                            className="col l-3"
                        >
                            <ProductItem data={[data]} />
                        </div>
                    ))}
                </div>
                <h4 className={cx('end')}>Không còn sản phẩm nào</h4>
            </div>
        </div>
    );
}

export default Product;
