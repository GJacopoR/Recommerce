import { Link } from "react-router-dom";
import { objAmount } from "../Home/model";
import classes from "./default.module.scss"

interface CartProps{
    cart:objAmount[];
    setCart:Function;
    handleRemove:Function
}

interface Cart{
    cart:objAmount;
    amount:number
}

export default function Cart(props:CartProps){

    let cart:any = props.cart.map(el => [el, props.cart.filter((x:objAmount) => x.id === el.id).length]).filter((value, index, self) => index === self.findIndex((t) => t[0] === value[0]))

    return <section className={classes.Cart}>
        <h3 className={classes.Cart__title}> I tuoi prodotti :</h3>
            { props.cart[0]
            ? <ul className={classes.Cart__list}> {cart.map((el: any[], i:number) => 
                <li key={i} className={classes.Cart__list__listItem}>
                    <div className={classes.Cart__list__listItem__itemContainer}>
                        <picture className={classes.Cart__list__listItem__itemContainer__itemImageContainer}>
                            <img className={classes.Cart__list__listItem__itemContainer__itemImageContainer__image} src={el[0].imageURL} alt={el[0].imageURL + '_picture'} />
                        </picture>
                        <span className={classes.Cart__list__listItem__itemContainer__itemTitle}>{el[0].title}</span>
                        <div className={classes.Cart__list__listItem__itemContainer__itemPricing}>
                            <span className={classes.Cart__list__listItem__itemContainer__itemPricing__itemAmount}>{el[1]}</span>
                            <span className={classes.Cart__list__listItem__itemContainer__itemPricing__itemSinglePrice}>×{el[0].pricing.price}€ =</span>
                            <span className={classes.Cart__list__listItem__itemContainer__itemPricing__itemFinalPrice}>{(+el[1] * +el[0].pricing.price)}€</span>
                        </div>
                    </div>

                    <button className={classes.Cart__list__listItem__eraseButton} onClick={() => props.handleRemove()}>Delete</button>
                </li>)}
                <div className={classes.Cart__list__goToForm}>
                    <Link to={"/form"} className={classes.Cart__list__goToForm__container}>
                        <button className={classes.Cart__list__goToForm__container__button}>Procedi alla spedizione</button>
                    </Link>
                </div>
                </ul>
            : <p>Il tuo carrello è vuoto!</p> }
    </section>
    
}

// pz. ×