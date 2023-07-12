import classes from "./Header.module.css"
import { Fragment } from "react"
import COVERIMAGE from './../../assets/foodcover.jpg'
import HeaderCartButton from "./HeaderCartButton"

function Header(props) {

    return (
        <Fragment>
            <header className={classes.header}>
                <div>
                    {/* <span><img src="https://icons8.com/icon/cnqqiKgByMn1/knight" alt="knight-logo" /></span> */}
                    <h2 >Hungry Knight's </h2>
                </div>
                <HeaderCartButton onShow={props.onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={COVERIMAGE} alt="cover-image" />
            </div>
        </Fragment>
    )
}

export default Header

