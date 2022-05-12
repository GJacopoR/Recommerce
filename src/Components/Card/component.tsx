import classes from "./default.module.scss";
import "./default.module.scss";
import CardBackground from "./CardBackground/component";
import { Link } from "react-router-dom";
import { APIobj } from "../../Views/Home/model";
import { useAppDispatch } from "../../app/Redux/hooks";
import addToCartSlice from "../../app/Redux/Slices/addToCart.slice";
import { cart } from "../../app/Redux/Slices/addToCart.slice";

interface CardProps{
    API:APIobj;
    setCart:Function
}

export default function Card(props:CardProps){

    const URLtitle:string = props.API.title.toLowerCase().split(" ").join("-")

    return <section className={classes.Card}>
            <div className={classes.toolbar}>
                <div className={classes.toolbar__searchSimilar}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7c-12.23-91.55-87.28-166-178.9-177.6c-136.2-17.24-250.7 97.28-233.4 233.4c11.6 91.64 86.07 166.7 177.6 178.9c53.81 7.191 104.3-6.235 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 .0003C515.9 484.7 515.9 459.3 500.3 443.7zM288 232H231.1V288c0 13.26-10.74 24-23.1 24C194.7 312 184 301.3 184 288V232H127.1C114.7 232 104 221.3 104 208s10.74-24 23.1-24H184V128c0-13.26 10.74-24 23.1-24S231.1 114.7 231.1 128v56h56C301.3 184 312 194.7 312 208S301.3 232 288 232z"/>
                    </svg>
                </div>
                <div className={classes.toolbar__addToCart} onClick={() => {props.setCart((prevState: APIobj[]) => {
                    let newState = [...prevState]
                    newState.push(props.API)
                    return newState})}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM272 180H316V224C316 235 324.1 244 336 244C347 244 356 235 356 224V180H400C411 180 420 171 420 160C420 148.1 411 140 400 140H356V96C356 84.95 347 76 336 76C324.1 76 316 84.95 316 96V140H272C260.1 140 252 148.1 252 160C252 171 260.1 180 272 180zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/>
                    </svg>
                </div>
                {/* <div className={classes.toolbar__addToChart}><FontAwesomeIcon icon='cart-plus' color={'black'} size={'lg'} /></div> */}
            </div>
        <Link to={`/${URLtitle}`} className={classes.clickArea}>
            <div className={classes.background}>
                <CardBackground />
            </div>
            <picture className={classes.img_container}>
                <img src={props.API.imageURL} alt={props.API.title + "_picture"} className={classes.img_container__img} />
            </picture>
            <div className={classes.text_container}>
                <header className={classes.text_container__title}>
                    {props.API.title}
                </header>
                <main className={classes.text_container__price}>
                    {props.API.pricing.price}
                </main>
            </div>
        </Link>
    </section>
}

// const dispatch = useAppDispatch();  

// onClick= {()=> dispatch(addToCartSlice(cart, props))}