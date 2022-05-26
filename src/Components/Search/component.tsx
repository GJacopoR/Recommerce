import { useState } from 'react';
import classes from './default.module.scss'

interface SearchProps{
    setSearchFilter:Function
}

export default function Search(props:SearchProps) {

    const [value, setValue] = useState<string>('')

    return <form className={classes.searchForm}>
        <input type="text" placeholder="Ricerca..." className={classes.searchForm__module} onChange={(e) => setValue(e.target.value)}/>
        <div className={classes.searchForm__buttonContainer}>
            <button className={classes.searchForm__buttonContainer__button} onClick={(e) => {e.preventDefault(); props.setSearchFilter(value.toLowerCase())}}>Go</button>
        </div>
        <button className={classes.searchForm__nullButton} onClick={(e) => {e.preventDefault(); props.setSearchFilter('')}}>×</button>
    </form>
}