import classes from './default.module.scss';

interface DeleteFromCartModalProps{
    setDeleteCheck:Function;
    setModal:Function
}

export default function DeleteFromCartModal(props:DeleteFromCartModalProps){
    return <section className={classes.Container}>
        <div className={classes.Container__overlay}></div>
        <main className={classes.Container__body}>
            <header className={classes.Container__body__bodyTextContainer}>
                <h4 className={classes.Container__body__bodyTextContainer__text}>
                    Eliminere tutte le copie del prodotto dal carrello?
                </h4>
            </header>
            <section className={classes.Container__body__bottomContainer}>
                <a className={classes.Container__body__bottomContainer__backButtonContainer}>
                    <button className={classes.Container__body__bottomContainer__backButtonContainer__backButton} onClick={()=>{props.setModal(false)}}>Indietro</button>
                </a>
                <a className={classes.Container__body__bottomContainer__proceedButtonContainer}>
                    <button className={classes.Container__body__bottomContainer__proceedButtonContainer__proceedButton} onClick={() => {props.setModal(false); props.setDeleteCheck(true)}}>Procedi</button>
                </a>
            </section>
        </main>
    </section>
}