import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)
function AccountItem(){
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/37b35b4065bbdbc2d917bad6d978920e~c5_300x300.webp?x-expires=1681369200&x-signature=cI4bP0jhl7U21fRmx%2BqP7uGwpSs%3D" alt = "Hoaa"/>
            <div className={cx('infor')}>
                <p className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <span className= {cx('username')}>
                    nguyenvana
                </span>
            </div>
        </div>
    )
}
export default AccountItem