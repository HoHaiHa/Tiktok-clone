import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles)

function AccountItem(){
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='https://thuvien.hocviennhiepanh.com/wp-content/uploads/37177573_10156528970182840_1475777593566298112_o.jpg' alt=''></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Ho Hai Ha</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')} >nguyenhaiha</span>
            </div>
        </div>
    )
}
export default AccountItem;