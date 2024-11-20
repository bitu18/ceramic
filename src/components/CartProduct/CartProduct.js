import classNames from 'classnames/bind';
import styles from './CartProduct.module.scss';
import { useCart } from '../store';
import { formatPrice } from '../method';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';

const cx = classNames.bind(styles);
function CartProduct() {
    const { cart, setCart } = useCart();

    const handleCount = (type, index) => {
        setCart((prevCart) =>
            prevCart.map((item, i) => {
                let updatedQuantity;
                if (i === index) {
                    if (type === 'increment') {
                        updatedQuantity = item.quantity + 1;
                    } else if (type === 'decrement') {
                        updatedQuantity = item.quantity > 1 ? item.quantity - 1 : item.quantity;
                    }
                    return { ...item, quantity: updatedQuantity };
                }
                return item;
            }),
        );
    };

    const handleChangeInput = (e, index) => {
        const value = Number(e.target.value);
        setCart((prevCart) =>
            prevCart.map((item, i) => (i === index ? { ...item, quantity: value > 0 ? value : 1 } : item)),
        );
    };
    const handleDeleteProduct = (index) => {
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
        /* underscore (_) is a convention in JavaScript to indicate that the value is not used. 
        Because prevCart (cart) receives 2 arguments (item, i) => first argument not used => using underscore */
    };
    return (
        <div className={cx('list-product')}>
            {cart.map((item, index) => (
                <div className={cx('item-product')} key={index}>
                    <img src={item?.img} alt="img" className={cx('img')} />

                    <div className={cx('product-infor')}>
                        <p className={cx('name')}>{item.name}</p>
                        <p className={cx('price')}>{formatPrice(item.price)} vnđ</p>
                        <div className={cx('counter')}>
                            <p className={cx('count')}>Số lượng:</p>
                            <button className={cx('minus')} onClick={() => handleCount('decrement', index)}>
                                -
                            </button>
                            <input
                                type="text"
                                className={cx('input')}
                                value={item.quantity}
                                onChange={(e) => handleChangeInput(e, index)}
                            />
                            <button className={cx('plus')} onClick={() => handleCount('increment', index)}>
                                +
                            </button>
                        </div>
                        <p className={cx('totalPerEach')}>Thành tiền: {formatPrice(item.price * item.quantity)} vnđ</p>
                    </div>

                    <Button
                        className={cx('btn-delete')}
                        rightIcon={<FontAwesomeIcon icon={faTrash} />}
                        onClick={() => handleDeleteProduct(index)}
                    >
                        {''}
                    </Button>
                </div>
            ))}
        </div>
    );
}

export default CartProduct;
