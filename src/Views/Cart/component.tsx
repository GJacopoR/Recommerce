import { APIobj } from "../Home/model";
import classes from "./default.module.scss"

interface CartProps{
    cart:APIobj[];
    setCart:Function
}

export default function Cart(props:CartProps){
    return <section className={classes.Cart}>
        { props.cart[0]
        ? <p>{props.cart[0].title}</p>
        : <p>Il tuo carrello è vuoto!</p> }
    </section>
    
}