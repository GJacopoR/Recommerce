import Slider from "./Slider/component";
import classes from './default.module.scss';
import { useState } from "react";

interface CarouselProps{
    images:string[];
    name:string
}

export default function Carousel(props:CarouselProps){

    const [sliderIndex, setSliderIndex] = useState<number>(0)

    const goNextSlide = () => {
        sliderIndex < props.images.length ? setSliderIndex(sliderIndex + 1) : setSliderIndex(0)
    }

    const goPrevSlide = () => {
        sliderIndex > 0 ? setSliderIndex(sliderIndex - 1) : setSliderIndex(props.images.length)
    }

    return <section className={classes.Container}>
        <div className={classes.Container__slidesContainer}>
            { props.images.map((el, i) => <Slider key={i} imageURL={el} show={(i % props.images.length == sliderIndex) || (i == sliderIndex)} imageName={props.name} />)}
        </div>
        <div className={classes.Container__buttonsContainer}>
            <button className={classes.Container__buttonsContainer__prevButton} onClick={goPrevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                    <path d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z"/>
                </svg>
            </button>
            <button className={classes.Container__buttonsContainer__nextButton} onClick={goNextSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                    <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"/>
                </svg>
            </button>
        </div>
    </section>
}