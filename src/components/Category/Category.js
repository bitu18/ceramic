import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import CategoryProduct from './CategoryProduct/CategoryProduct';

const cx = classNames.bind(styles);
function Category({ handleClickCategory }) {
    return (
        <div className={cx('wrapper-category')}>
            <CategoryProduct
                img="https://gomsu.netlify.app/static/media/all.53fc54c8efd07a83368d.jpg"
                title="Tất cả"
                onClick={() => handleClickCategory('Tất cả')}
            />
            <CategoryProduct
                img="https://gomsu.netlify.app/static/media/binh.12c8e035856323bf0272.jpg"
                title="Bình hoa"
                onClick={() => handleClickCategory('Bình Hoa')}
            />
            <CategoryProduct
                img="https://gomsu.netlify.app/static/media/chen.1f2b11a6f2bab3bafb3f.jpg"
                title="Tách trà"
                onClick={() => handleClickCategory('Tách trà')}
            />
            <CategoryProduct
                img="https://gomsu.netlify.app/static/media/bat.089629457f241ad0902c.jpg"
                title="Bát"
                onClick={() => handleClickCategory('Bát')}
            />
            <CategoryProduct
                img="https://gomsu.netlify.app/static/media/dia.265157eeca59fe9e53a1.jpg"
                title="Đĩa"
                onClick={() => handleClickCategory('Đĩa')}
            />

            <CategoryProduct
                img="https://gomsu.netlify.app/static/media/au.f68e635a0d50936a0ae5.jpg"
                title="Âu"
                onClick={() => handleClickCategory('Âu')}
            />
            <CategoryProduct
                img="https://gomsu.netlify.app/static/media/am.e574da8ad4d517a571c5.jpg"
                title="Bộ trà"
                onClick={() => handleClickCategory('Bộ Trà')}
            />
        </div>
    );
}

Category.propTypes = {
    handleClickCategory: PropTypes.func.isRequired,
};

export default Category;
