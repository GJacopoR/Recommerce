import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteFromCartModal from "../../Components/DeleteFromCartModal/component";
import { objAmount } from "../../app/Global/model";
import classes from "./default.module.scss"

interface CartProps{
    cart:objAmount[];
    setCart:Function;
    handleRemoveAll:Function;
    handleIncrement:Function;
    handleDecrement:Function
}

export default function Cart(props:CartProps){

    const [modal, setModal] = useState<boolean>(false)

    const [deleteCheck, setDeleteCheck] = useState<boolean>(false)

    const cart:(objAmount | number)[][] = props.cart.map(el => [el, props.cart.filter((x:objAmount) => x.slugid === el.slugid).length]).filter((value, index, self) => index === self.findIndex((t) => t[0] === value[0]))

    const discounted = (item:objAmount):string => {
        if(item.pricing.discount){
            return (+item.pricing.price - +item.pricing.discount).toFixed(2)
        } else {
            return item.pricing.price
        }
    }

    const totalForItem = (item:objAmount, amount:number):string => (+discounted(item) * amount).toFixed(2)

    const total = ():string =>{
        let totale:number = 0
        cart.forEach((el:(objAmount | number)[]) => totale += Number(totalForItem(el[0] as objAmount, el[1] as number)))
        return totale.toFixed(2)
    }

    // const handleRemoveCheck = (obj:objAmount) => {
    //     setModal(true)

    //     modal && <DeleteFromCartModal setDeleteCheck={setDeleteCheck} setModal={setModal}/>
        
    //     if(deleteCheck){
    //         props.handleRemove(obj.slugid)
    //         setDeleteCheck(false)
    //     }
    // }

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
                            <button className={classes.Cart__list__listItem__itemContainer__itemPricing__decrementButton} onClick={() => props.handleDecrement(el[0])}>-</button>
                            <span className={classes.Cart__list__listItem__itemContainer__itemPricing__itemAmount}>{el[1]}</span>
                            <button className={classes.Cart__list__listItem__itemContainer__itemPricing__incrementButton} onClick={() => props.handleIncrement(el[0])}>+</button>
                            <span className={classes.Cart__list__listItem__itemContainer__itemPricing__itemSinglePrice}>×{discounted(el[0])}€ =</span>
                            <span className={classes.Cart__list__listItem__itemContainer__itemPricing__itemFinalPrice}>{totalForItem(el[0], el[1])}€</span>
                        </div>
                    </div>

                    <button className={classes.Cart__list__listItem__eraseButton} onClick={() => props.handleRemoveAll(el[0].slugid)}>Delete</button>
                </li>)}
                <div className={classes.Cart__list__totalContainer}>
                    <span className={classes.Cart__list__totalContainer__label}>Totale :</span>
                    <span className={classes.Cart__list__totalContainer__total}>{total()}</span>
                </div>
                <div className={classes.Cart__list__goToForm}>
                    <Link to={"/form"} className={classes.Cart__list__goToForm__container}>
                        <button className={classes.Cart__list__goToForm__container__button}>Procedi alla spedizione</button>
                    </Link>
                </div>
                </ul>
            : <div className={classes.Cart__emptyContainer}>
                <h1 className={classes.Cart__emptyContainer__message}>Il tuo carrello è vuoto!</h1>
                <Link to={"/"} className={classes.Cart__emptyContainer__goToHome}>
                    <button className={classes.Cart__emptyContainer__goToHome__button}>Torna alla home</button>
                </Link>
            </div>
            }

            { modal && <DeleteFromCartModal setDeleteCheck={setDeleteCheck} setModal={setModal}/> }
    </section>
    
}