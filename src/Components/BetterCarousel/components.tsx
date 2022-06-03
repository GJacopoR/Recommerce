import { useState } from "react"
import classes from './default.module.scss'
import SliderButton from "./SliderButton/components";

interface BetterCarouselProps{
    images:string[];
    name:string
}

export default function BetterCarousel(props:BetterCarouselProps){

    const [slideIndex, setSlideIndex] = useState<number>(1)

    const nextSlide = () => {
        if (slideIndex !== props.images.length){
            setSlideIndex(slideIndex + 1)
        } else {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if( slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        } else {
            setSlideIndex(props.images.length)
        }
    }

    const indexDot = (index:number) => {
        setSlideIndex(index)
    }

    return <section className={classes.Container}>
        { props.images.map((el, i) => <picture key={i} className={(slideIndex === i + 1) ? (classes.Container__slide + ' ' + classes.Container__activeAnimation) : classes.Container__slide}>
            <img src={props.images[i]} alt="" />
        </picture>) }
        <SliderButton moveSlide={nextSlide} direction={true}/>
        <SliderButton moveSlide={prevSlide} direction={false}/>

        <footer className={classes.Container__dotsContainer}>
            { props.images.map((el, i) => <div key={i} onClick={() => indexDot(i + 1)} className={(slideIndex === i + 1) ? (classes.Container__dotsContainer__dot + ' ' + classes.Container__dotsContainer__dotActive) : classes.Container__dotsContainer__dot}></div>) }
        </footer>
    </section>
}