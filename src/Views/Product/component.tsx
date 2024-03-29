import classes from "./default.module.scss";
import { useParams } from "react-router-dom";
import { objAmount } from "../Home/model";

interface ProductProps{
    repository:objAmount[];
    handleAddToChart:Function
}

export default function Product(props:ProductProps){

    const productURI = useParams()

    const product:objAmount = props.repository.filter((el) => {return (el.title.toLowerCase().split(" ").join("-") === productURI.product)})[0]

    return (product 
        ? <section className={classes.Product}>
            <div className={classes.Product__toolbar}>
                <span className={classes.Product__toolbar__categoriesContainer}>
                    <ul className={classes.Product__toolbar__categoriesContainer__categories}>
                        {product.categoriesIDs.map((el, i) => <li key={i} className={classes.Product__toolbar__categoriesContainer__categories__category}>{el}</li>)}
                    </ul>
                </span>
                <span className={classes.Product__toolbar__titleContainer}>
                    <h1 className={classes.Product__toolbar__titleContainer__title}>{product.title}</h1>
                </span>
                <span className={classes.Product__toolbar__brandContainer}>
                    <h4 className={classes.Product__toolbar__brandContainer__brand}>{product.brand}</h4>
                </span>
            </div>
            <picture className={classes.Product__imgContainer}>
                <img src={product.imageURL} alt={product.title + "_picture"} className={classes.Product__imgContainer__img}/>
            </picture>
            <div className={classes.Product__descriptionContainer}>
                <p className={classes.Product__descriptionContainer__description}>{product.description}</p>
            </div>
            <div className={classes.Product__priceContainer}>
                {product.pricing.discount 
                    ? <div className={classes.Product__priceContainer__discountContainer}>
                        <h4 className={classes.Product__priceContainer__discountContainer__discountedPrice}>{product.pricing.price}</h4>
                        <h6 className={classes.Product__priceContainer__discountContainer__discount}>-{product.pricing.discount}</h6>
                        <h3 className={classes.Product__priceContainer__discountContainer__price}>{(Number(product.pricing.price) - Number(product.pricing.discount)).toFixed(2)}</h3>
                    </div>
                    : <h3 className={classes.Product__priceContainer__fullPrice}>{product.pricing.price}</h3>
                }
                <button className={classes.Product__priceContainer__button}>Add to Cart!</button>
            </div> 

        </section>
        : <section className={classes.Product}>
            <div className={classes.Product__notFoundContainer}>
                <h1 className={classes.Product__notFoundContainer__unavaliable}>Il prodotto che stai cercando non è al momento disponibile</h1>
            </div>
        </section>
    )
}