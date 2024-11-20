import Home from '~/pages/Home';
import News from '~/pages/News';
import Contact from '~/pages/Contact';
import LogIn from '~/pages/LogIn';
import config from '~/config';
import Product from '~/pages/Product';
import ProductDetail from '~/pages/ProductDetail';
import OrderProduct from '~/pages/OrderProduct/OrderProduct';
import SuccessPayment from '~/pages/SuccessPayment';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.products, component: Product },
    { path: config.routes.productDetail, component: ProductDetail },
    { path: config.routes.news, component: News },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.logIn, component: LogIn },
    { path: config.routes.order, component: OrderProduct },
    { path: config.routes.successPayment, component: SuccessPayment },
];

const privateRoutes = {};

export { publicRoutes, privateRoutes };
