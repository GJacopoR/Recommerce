import classes from './default.module.scss';

interface PaymentModalProps{
    setPayment:Function
}

export default function PaymentModal(props:PaymentModalProps){

    return <section className={classes.Container}>
        <div className={classes.Container__overlay}></div>
        <main className={classes.Container__body}>
            <header className={classes.Container__body__titleContainer}>
                <h2 className={classes.Container__body__titleContainer__title}>Scegliere il metodo di pagamento</h2>
            </header>
            <main className={classes.Container__body__bodyContainer}>
                <div className={classes.Container__body__bodyContainer__leftContainer}>
                    <label htmlFor='paymentPayPal' className={classes.Container__body__bodyContainer__leftContainer__methodContainer}>
                        <picture className={classes.Container__body__bodyContainer__leftContainer__methodContainer__method}>
                            <img src="https://www.artandpole.it/wp-content/uploads/2016/08/Paypal-logo.png.png" alt="PayPal logo per pagamento" />
                        </picture>
                    </label>
                    <div className={classes.Container__body__bodyContainer__leftContainer__radioContainer}>
                        <input type="radio" name='paymentMethod' id='paymentPayPal' />
                    </div>
                </div>
                <div className={classes.Container__body__bodyContainer__rightContainer}>
                    <label htmlFor='paymentCard' className={classes.Container__body__bodyContainer__rightContainer__methodContainer}>
                        <picture className={classes.Container__body__bodyContainer__rightContainer__methodContainer__method}>
                            <img src="https://img.cppng.com/download/2020-06/25920-8-major-credit-card-logo.png" alt="Carte di credito logo per pagamento" />
                        </picture>
                    </label>
                    <div className={classes.Container__body__bodyContainer__rightContainer__radioContainer}>
                        <input type="radio" name='paymentMethod' id='paymentCard' />
                    </div>
                </div>
            </main>
            <section className={classes.Container__body__bottomContainer}>
                <a className={classes.Container__body__bottomContainer__backButtonContainer}>
                    <button className={classes.Container__body__bottomContainer__backButtonContainer__backButton} onClick={() => props.setPayment(false)}>Indietro</button>
                </a>
                <a className={classes.Container__body__bottomContainer__proceedButtonContainer}>
                    <button className={classes.Container__body__bottomContainer__proceedButtonContainer__proceedButton} onClick={()=>{alert('handlePayment()')}}>Procedi</button>
                </a>
            </section>
        </main>
    </section>
}