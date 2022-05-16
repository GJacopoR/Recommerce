import Card from "../../Components/Card/component";
import classes from "./default.module.scss";
import { objAmount } from "./model";

interface HomeProps{
    API:objAmount[];
    handleAddToCart:Function
}

export default function Home(props:HomeProps) {
    return <section className={classes.Home}>
        <div className={classes.Home__toolbar}>
            <span className={classes.Home__toolbar__tagsContainer}>
                <h4 className={classes.Home__toolbar__tagsContainer__tags}>tags</h4>
            </span>
            <span className={classes.Home__toolbar__titleContainer}>
                <h1 className={classes.Home__toolbar__titleContainer__title}>Shop</h1>
            </span>
            <span className={classes.Home__toolbar__searchContainer}>
                <h4 className={classes.Home__toolbar__searchContainer__search}>Search</h4>
            </span>
        </div>
        <div className={classes.Home__cardsContainer}>
            {props.API.map((el, i) => {
                return <Card key={el.id} handleAddToCart={props.handleAddToCart} API={props.API[i]}/>
            })}
        </div>
    </section>
}
