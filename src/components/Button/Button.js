import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    primary = false,
    outline = false,
    rounded = false,
    text = false,
    large = false,
    medium = false,
    small = false,
    disabled = false,
    leftIcon,
    rightIcon,
    to,
    href,
    className,
    onClick,
    passProps,
}) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    }
    if (href) {
        props.href = href;
        Comp = 'a';
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        large,
        medium,
        small,
        text,
        disabled,
        leftIcon,
        rightIcon,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    large: PropTypes.bool,
    medium: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    leftIcon: PropTypes.object,
    rightIcon: PropTypes.object,
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    passProps: PropTypes.object,
};

export default Button;
