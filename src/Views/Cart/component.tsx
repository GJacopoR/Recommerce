import { APIobj, objAmount } from "../Home/model";
import classes from "./default.module.scss"

interface CartProps{
    cart:objAmount[];
    setCart:Function;
    handleRemove:Function
}

export default function Cart(props:CartProps){

    const cart:objAmount[] = []

    return <section className={classes.Cart}>
        <h3 className={classes.Cart__title}> I tuoi prodotti :</h3>
        <ul className={classes.Cart__list}>
            { props.cart[0]
            ? props.cart.map((el, i) => 
                <li key={i} className={classes.Cart__list__listItem}>
                    <p className={classes.Cart__list__listItem__itemTitle}>{el.title} + {el.amount}</p>
                    <button
                        className={classes.Cart__list__listItem__eraseButton}
                        onClick={() => props.handleRemove()}>Delete</button>
                </li>)
            : <p>Il tuo carrello è vuoto!</p> }
        </ul>
    </section>
    
}