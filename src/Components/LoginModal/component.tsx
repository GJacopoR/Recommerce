import classes from './default.module.scss';

interface LoginModalProps{
    setLoginModal:Function;
}

export default function LoginModal(props:LoginModalProps){

    return <section className={classes.Container}>
        <div className={classes.Container__overlay}>
            <main className={classes.Container__overlay__body}>
                <header className={classes.Container__overlay__body__titleContainer}>
                    <h4 className={classes.Container__overlay__body__titleContainer__text}>
                        Login
                    </h4>
                </header>
                <section className={classes.Container__overlay__body__bodyContainer}>
                    <a className={classes.Container__overlay__body__bodyContainer__backButtonContainer}>
                        <button className={classes.Container__overlay__body__bodyContainer__backButtonContainer__backButton} onClick={() => {props.setLoginModal(false)}}>Indietro</button>
                    </a>
                    <a className={classes.Container__overlay__body__bodyContainer__proceedButtonContainer}>
                        <button className={classes.Container__overlay__body__bodyContainer__proceedButtonContainer__proceedButton}>Accedi</button>
                    </a>
                </section>
            </main>
        </div>
    </section>
}