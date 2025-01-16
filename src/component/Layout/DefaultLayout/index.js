import Header from "~/component/Layout/Components/Header";
import Sidebar from "./Sidebar";
import styles from "./DefaltLayout.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function DefaultLayout({children}){
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar/>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout