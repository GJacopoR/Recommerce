import Card from "../../Components/Card/component";
import Search from "../../Components/Search/component";
import classes from "./default.module.scss";
import { objAmount } from "./model";

interface HomeProps{
    repository:objAmount[];
    handleAddToCart:Function;
    setSearchFilter:Function
}

export default function Home(props:HomeProps) {

    console.log(props.repository)

    return <section className={classes.Home}>
        <div className={classes.Home__toolbar}>
            <span className={classes.Home__toolbar__tagsContainer}>
                <h4 className={classes.Home__toolbar__tagsContainer__tags}>tags</h4>
            </span>
            <span className={classes.Home__toolbar__titleContainer}>
                <h1 className={classes.Home__toolbar__titleContainer__title}>Shop</h1>
            </span>
            <span className={classes.Home__toolbar__searchContainer}>
                <h4 className={classes.Home__toolbar__searchContainer__search}><Search setSearchFilter={props.setSearchFilter}/></h4>
            </span>
        </div>
        <div className={classes.Home__cardsContainer}>
            {props.repository.map((el, i) => {
                return <Card key={el.id} handleAddToCart={props.handleAddToCart} repository={props.repository[i]}/>
            })}
        </div>
    </section>
}
