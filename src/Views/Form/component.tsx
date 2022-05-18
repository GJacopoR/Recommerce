import { useState } from 'react';
import { Link } from 'react-router-dom';
import useInput from '../../app/useInput';
import classes from './default.module.scss';

class Customer{
    name!:string;
    surname!:string;
    email!:string;
    birthdate!:Date;
    birtplace!:string;
    city!:string;
    country!:string;
    address!:string;
    cap!:string;
    telephone!:string;
}

export default function Form() {

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [sex, setSex] = useState<string>('')
    const [birthdate, setBirthdate] = useState<Date>(new Date())
    const [birthplace, setBirthplace] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [country, setCountry] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [cap, setCap] = useState<string>('')
    const [telephone, setTelephone] = useState<string>('')
    
    const handleSubmit = () => {
        alert("L'ordine sarà inviato a " + name + ' ' + surname)
    }

    return <section className={classes.formContainer}>
        <h1 className={classes.formContainer__headerText}>Inserimento dati anagrafici</h1>
        <form className={classes.formContainer__form}>
            <input type="text" placeholder='Inserire il nome' name='name' className={classes.formContainer__form__module} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder='Inserire il cognome' name='surname' className={classes.formContainer__form__module} onChange={(e) => setSurname(e.target.value)}/>
            {/* <select name='sex' className={classes.formContainer__form__module}>
                <option value="M" className={classes.formContainer__form__module}>Male</option>
                <option value="F" className={classes.formContainer__form__module}>Female</option>
                <option value="O" className={classes.formContainer__form__module}>Other</option>
            </select> */}
            <input type="text" placeholder="Inserire l'email" name='email' className={classes.formContainer__form__module} onChange={(e) => setEmail(e.target.value)}/>
            <input type="date" name='birthdate' className={classes.formContainer__form__module} onChange={(e) => setBirthdate(new Date(e.target.value))}/>
            <input type="text" placeholder='Inserire il luogo di nascita' name='birthplace' className={classes.formContainer__form__module} onChange={(e) => setBirthplace(e.target.value)} />
            <input type="text" placeholder='Inserire la città' name='city' className={classes.formContainer__form__module} onChange={(e) => setCity(e.target.value)}/>
            <input type="text" placeholder='Inserire il paese' name='country' className={classes.formContainer__form__module} onChange={(e) => setCountry(e.target.value)}/>
            <input type="text" placeholder="Inserire l'indirizzo" name='address' className={classes.formContainer__form__module} onChange={(e) => setAddress(e.target.value)}/>
            <input type="text" placeholder='Inserire il C.A.P.' name='cap' className={classes.formContainer__form__module} onChange={(e) => setCap(e.target.value)}/>
            <input type="text" placeholder='Inserire il numero di cellulare' name='telephone' className={classes.formContainer__form__module} onChange={(e) => setTelephone(e.target.value)}/>
            <Link className={classes.formContainer__form__buttonContainer} to={'/payment'}>
                <button type="submit" className={classes.formContainer__form__buttonContainer__button}
                onClick={handleSubmit}>Vai al pagamento</button>
            </Link>
        </form>
    </section>
}