import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import Tippy from "@tippyjs/react/headless";
import {Wrapper as PopperWrapper} from "~/component/Popper";

const cx = classNames.bind(styles)

function Menu({children, items  = []}){
    const renderItems= ()=>{

    }

    return (
        <Tippy
        interactive
        placement="bottom-end"
        render={(attr)=> (
            <div className={cx('content')} tabIndex="-1" {...attr}>
                <PopperWrapper>
                    <h2>MenuItem</h2>
                </PopperWrapper>
            </div>
        )}
        >
            {children}
        </Tippy>
    )
}
export default Menu;