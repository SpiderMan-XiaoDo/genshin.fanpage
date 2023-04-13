import classNames from "classnames/bind";
import { Link } from 'react-router-dom'
import styles from './Button.module.scss';
const cx = classNames.bind(styles)
function Button({ to,
    href,
    primary = false,
    outline = false,
    disabled = false,
    rounded = false,
    small = false,
    text = false,
    large = false,
    children,
    leftIcon,
    rightIcon,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button'
    const _props = { onClick, ...passProps };
    // Remove events listener:
    if(disabled){
        Object.keys(_props).forEach(key=>{
            if(key.startsWith('on') && typeof _props[key] == 'function'){
                delete _props[key]
            }
        })
    }
    if (to) {
        _props.to = to
        Comp = Link
    }
    if (href) {
        _props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper',
                    { [className]: className,
                        primary,
                        outline,
                        small,
                        large,
                        text,
                        disabled,
                        rounded
                    })
    return (
        <Comp className={classes} {..._props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}
export default Button