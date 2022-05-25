import classes from './default.module.scss';
import { objAmount } from '../../Views/Home/model';

interface FilterProps{
    repository:objAmount[];
    setCategoryFilter:Function
}

export default function Filter(props:FilterProps){

    const activeCategories:string[] = Array.from(new Set (props.repository.map( el => el.categories).flat()))

    return <section className={classes.Filters}>
        <ul className={classes.Filters__container}>
            { activeCategories.map( (el, i) => <li key={i} className={classes.Filters__container__filter}>
                <button className={classes.Filters__container__filter__button} onClick={() => props.setCategoryFilter(el)} >{el[0].toUpperCase() + el.substring(1)}</button>
            </li>)}
            <li className={classes.Filters__container__filter}>
                <button className={classes.Filters__container__filter__button} onClick={() => props.setCategoryFilter('')} >Rimuovi filtri</button>
            </li>
        </ul>
    </section>
}