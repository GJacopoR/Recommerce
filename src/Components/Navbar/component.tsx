import { Link } from "react-router-dom";
import { objAmount } from "../../Views/Home/model";
import classes from "./default.module.scss";

interface NavbarProps{
    cart:objAmount[]
}

export default function Navbar(props:NavbarProps) {

    // let cartItems:number = props.cart[0] ? (props.cart.map(el => el.amount).reduce((t, n) => t+n)) : 0

    let cartItems = props.cart.length

    return <nav className={classes.Navbar}>
        <section className={classes.Navbar__logo}>
            <Link to={"/"} className={classes.Navbar__logo__link}>
                <h2 className={classes.Navbar__logo__link__pageName}>
                    JCommerce
                </h2>
            </Link>
        </section>
        <section className={classes.Navbar__cart}>
            <Link to={'/cart'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/>
            </svg>
            <div className={classes.Navbar__cart__cartFullness}>
                <h6 className={classes.Navbar__cart__cartFullness__number}>{cartItems <= 9 ? cartItems :  "9+"}</h6>
            </div>
            </Link>
        </section>
    </nav>
}