import classes from "./Header.module.css"
import { Fragment } from "react"
import COVERIMAGE from './../../assets/foodcover.jpg'
import HeaderCartButton from "./HeaderCartButton"

function Header(props) {

    return (
        <Fragment>
            <header className={classes.header}>
                <h2 >Hungry Knight's </h2>
                <HeaderCartButton onShow={props.onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={COVERIMAGE} alt="cover-image" />
            </div>
        </Fragment>
    )
}

export default Header

