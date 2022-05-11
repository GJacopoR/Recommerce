import Card from "../../Components/Card/component";
import classes from "./default.module.scss";
import { APIobj } from "./model";

interface HomeProps{
    API:APIobj[]
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
            {props.API.map((el) => {
                return <Card key={el.id}
                    title={el.title}
                    categoriesIDs={el.categoriesIDs} 
                    imageURL={el.imageURL}
                    popularity={el.popularity}
                    description={el.description}
                    id={el.id} pricing={el.pricing}
                    brand={el.brand}
                    rating={el.rating}/>
            })}
        </div>
    </section>
}

{/* <Card title={'Title'} categoriesIDs={["hi-Tech"]} image={'https://picsum.photos/1080/1900?random=1'} popularity={0} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum neque illum fugiat accusantium beatae vel alias repellendus? Aspernatur illum aperiam beatae ab, porro delectus culpa temporibus. Iure, eum sapiente!'} id={''} pricing={42.99} brand={""} rating={[]}/>
<Card title={'Another title'} categoriesIDs={["hi-Tech"]} image={'https://picsum.photos/1700/900?random=1'} popularity={0} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum neque illum fugiat accusantium beatae vel alias repellendus? Aspernatur illum aperiam beatae ab, porro delectus culpa temporibus. Iure, eum sapiente!'} id={''} pricing={2.99} brand={""} rating={[]}/>
<Card title={'Another one'} categoriesIDs={["hi-Tech"]} image={'https://picsum.photos/700/1200?random=1'} popularity={0} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum neque illum fugiat accusantium beatae vel alias repellendus? Aspernatur illum aperiam beatae ab, porro delectus culpa temporibus. Iure, eum sapiente!'} id={''} pricing={4.99} brand={""} rating={[]}/>
<Card title={'Another again'} categoriesIDs={["hi-Tech"]} image={'https://picsum.photos/1200/720?random=1'} popularity={0} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum neque illum fugiat accusantium beatae vel alias repellendus? Aspernatur illum aperiam beatae ab, porro delectus culpa temporibus. Iure, eum sapiente!'} id={''} pricing={122.99} brand={""} rating={[]}/>
<Card title={'And Again'} categoriesIDs={["hi-Tech"]} image={'https://picsum.photos/640/800?random=1'} popularity={0} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum neque illum fugiat accusantium beatae vel alias repellendus? Aspernatur illum aperiam beatae ab, porro delectus culpa temporibus. Iure, eum sapiente!'} id={''} pricing={12.99} brand={""} rating={[]}/>
<Card title={'Last one'} categoriesIDs={["hi-Tech"]} image={'https://picsum.photos/1300/1300?random=1'} popularity={0} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nostrum neque illum fugiat accusantium beatae vel alias repellendus? Aspernatur illum aperiam beatae ab, porro delectus culpa temporibus. Iure, eum sapiente!'} id={''} pricing={50.99} brand={""} rating={[]}/> */}