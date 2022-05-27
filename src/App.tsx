import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar/component';
import Cart from './Views/Cart/component';
import Form from './Views/Form/component';
import Home from './Views/Home/component';
import { objAmount } from './app/Global/model';
import Product from './Views/Product/component';

// const API:objAmount[] = [
// 	{
// 		id: "samsung_GS20U",
// 		title: "Samsung Galaxy S20 Ultra",
//         categories: ["smartphones", "electronics", "media"],
// 		brand: "Samsung",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti quo nam ipsum itaque nemo facilis praesentium, natus necessitatibus quas consequuntur illum eveniet provident eum omnis modi tenetur laudantium doloribus.",
// 		pricing: {
//             price: "899.90",
// 			discount: "50"
// 		},
// 		imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ftLXIJmkSDojdUmhmQGkc56yS2aO33P8hA&usqp=CAU",
//         popularity: 4,
//         rating: [4, 4, 5],
//         amount: 0
// 	},
// 	{
// 		id: "iphone_13PM",
// 		title: "iPhone 13 Pro Max",
//         categories: ["smartphones", "electronics", "media"],
// 		brand: "Apple",
//         description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsam dolorem. Ipsa cumque minima perspiciatis magnam, culpa placeat, tempore saepe incidunt eius fugiat officiis ab, vitae quisquam laboriosam explicabo ratione!",
// 		pricing: {
//             price: "1499.90",
// 			discount: "50"
// 		},
// 		imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0l_R2V1zog0BWQD1v4hUZrKqhIhAwmH1xYQ&usqp=CAU",
//         popularity: 5,
//         rating: [3, 5, 3],
//         amount: 0
// 	},
// 	{
// 		id: "moto_GPro",
// 		title: "Moto G Pro 2022",
//         categories: ["smartphones", "electronics", "media"],
// 		brand: "Motorola",
//         description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro vero iste voluptates itaque cum necessitatibus modi aperiam! Doloribus, eum voluptatem odio est nam quis? Ipsam pariatur nisi fugiat mollitia omnis.",
// 		pricing: {
//             price: "599.90",
// 			discount: "100"
// 		},
// 		imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpgCIcb2JhSIKH3vakEgUaXAg3icfcTgP_zA&usqp=CAU",
//         popularity: 3,
//         rating: [2, 4, 3],
//         amount: 0
// 	},
// 	{
// 		id: "usbc_headphones",
// 		title: "USB C Premium Headphones",
//         categories: ["electronics", "media", "accessories"],
// 		brand: "Sony",
//         description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dignissimos fuga in odit nobis, dicta omnis neque, consequuntur tenetur placeat, minima exercitationem! Esse minus incidunt quibusdam aperiam vel culpa omnis!",
// 		pricing: {
//             price: "49.90",
// 		},
// 		imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwbTUaYClLCZq2PMJCwJWeNbS99QovRs4-pA&usqp=CAU",
//         popularity: 3,
//         rating: [4, 4, 3],
//         amount: 0
// 	},
// 	{
// 		id: "iphone_cover_prem",
// 		title: "iPhone Premium Quality Silicon Cover",
//         categories: ["smartphones", "accessories"],
// 		brand: "Apple",
//         description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam illum fuga fugiat earum nesciunt consequatur deserunt voluptate itaque voluptatum quis cupiditate dignissimos quas culpa autem omnis necessitatibus, repellendus reprehenderit sapiente.",
// 		pricing: {
//             price: "29.90",
// 		},
// 		imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWShr1GESazgqK40OiRrsuAIcNkFcZkMudOWJg4vs5DiQfIAo0MgN0-hfISnmpXL-ajg&usqp=CAU",
//         popularity: 4,
//         rating: [3, 1, 5],
//         amount: 0
// 	},
//     {
//         id: "Xiaomi_12",
// 		title: "Xiaomi 12 Blue",
//         categories: ["smartphones", "electronics", "media"],
// 		brand: "Xiaomi",
//         description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sapiente odio illo sit! Commodi reiciendis tenetur voluptatem? Explicabo, reiciendis dolores ullam unde labore mollitia tempora fugit beatae autem aperiam dignissimos.",
// 		pricing: {
//             price: "799.90",
//             discount: "100"
// 		},
// 		imageURL: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1646735920.09252692.png",
//         popularity: 3,
//         rating: [3, 4, 5],
//         amount: 0
        
//     },
// ]

function App() {

    const [API, setAPI] = useState<objAmount[]>([]) // data from API just formatted

    const [repository, setRepository] = useState<objAmount[]>([]) // data from API eventually filtered

    const [cart, setCart] = useState<objAmount[]>([])
    
    const [searchFilter, setSearchFilter] = useState<string>('')

    const [categoryFilter, setCategoryFilter] = useState<string>('')

    useEffect(() => {
        fetch('http://localhost:1337/api/products/?populate=*')
        .then(res => res.json())
        .then(data => {
            let API:objAmount[] = data.data.map((el:any) => el.attributes)
            API.map((el:any) => (el.brand.data) ? el.brand = el.brand.data.attributes.name : el.brand = '')
            API.map((el:any) => (el.rating) ? el.rating = el.rating.rating : el.rating = [])
            API.map((el:any) => el.categories = el.categories.data.map((el:any) => el.attributes.category))
            API.map((el:any) => (el.product_carousel.data) ? el.product_carousel = el.product_carousel.data.attributes.images.images : el.product_carousel = el.imageURL)
            setRepository(API)
            setAPI(API)
        })
    },[])

    useEffect(() => {
        if(searchFilter){
            setRepository(API)
            console.log(searchFilter)
            setRepository(repository.filter((el) => el.title.toLowerCase().includes(searchFilter)))
        } else {
            setRepository(API)
        }
    }, [searchFilter])
    
    useEffect(() => {
        if(categoryFilter){
            setRepository(API)
            setRepository(repository.filter((el) => el.categories.includes(categoryFilter)))
        } else {
            setRepository(API)
        }
    }, [categoryFilter])

    const handleRemoveAll = (id:string) => {
        setCart(cart.filter(el => el.slugid !== id))
    }

    const handleAddToCart = (item:objAmount) => {
        setCart((prevState: objAmount[]) => {
            let newState = [...prevState]
            newState.push(item)
            return newState
        })
    }

    const handleDecrement = (item:objAmount) => {
        setCart((prevState: objAmount[]) => {
            let newState = [...prevState]//.sort()
            newState.splice(newState.indexOf(item), 1)
            return newState
        })
    }

    return (
        <Router>
            {(repository && cart) && 
            <main className="App">
                <Navbar cart={cart}/>
                <section className="App__background_banner">
                </section>
                <section className="App__body">
                <Routes>
                    <Route path="/" element={<Home repository={repository} setSearchFilter={setSearchFilter} handleAddToCart={handleAddToCart} setCategoryFilter={setCategoryFilter}/> }/>
                    <Route path="/:product" element={ <Product repository={repository} handleAddToChart={handleAddToCart} /> }/>
                    <Route path="/cart" element={ <Cart cart={cart} setCart={setCart} handleRemoveAll={handleRemoveAll} handleIncrement={handleAddToCart} handleDecrement={handleDecrement}/> }/>
                    <Route path="/form" element={ <Form /> }/>
                    <Route path="*" element={<Home repository={repository} setSearchFilter={setSearchFilter} handleAddToCart={handleAddToCart} setCategoryFilter={setCategoryFilter}/> }/>
                </Routes>
                </section>
            </main>
            }
        </Router>
    );
}

// const handleRemove = (id:string) => {
//     let eraseProduct:objAmount;

//     cart.forEach( el => {
//         if(el.id === id){
//             eraseProduct = el
//         }
//     })

//     setCart((prevState: objAmount[]) => {
//         console.log(prevState)
//         let newState = [...prevState]
//         newState.splice(cart.indexOf(eraseProduct)+1,1)
//         console.log(newState)
//         return newState
//     })
// }

// length={0} toString={undefined} toLocaleString={undefined} pop={function (): ProductProps | undefined {
//   throw new Error('Function not implemented.');
// } } push={function (...items: ProductProps[]): number {
//   throw new Error('Function not implemented.');
// } } concat={function (...items: ConcatArray<ProductProps>[]): ProductProps[] {
//   throw new Error('Function not implemented.');
// } } join={function (separator?: string): string {
//   throw new Error('Function not implemented.');
// } } reverse={function (): ProductProps[] {
//   throw new Error('Function not implemented.');
// } } shift={function (): ProductProps | undefined {
//   throw new Error('Function not implemented.');
// } } slice={function (start?: number, end?: number): ProductProps[] {
//   throw new Error('Function not implemented.');
// } } sort={function (compareFn?: (a: ProductProps, b: ProductProps) => number): IntrinsicAttributes & ProductProps[] {
//   throw new Error('Function not implemented.');
// } } splice={function (start: number, deleteCount?: number): ProductProps[] {
//   throw new Error('Function not implemented.');
// } } unshift={function (...items: ProductProps[]): number {
//   throw new Error('Function not implemented.');
// } } indexOf={function (searchElement: ProductProps, fromIndex?: number): number {
//   throw new Error('Function not implemented.');
// } } lastIndexOf={function (searchElement: ProductProps, fromIndex?: number): number {
//   throw new Error('Function not implemented.');
// } } every={function <S extends ProductProps>(predicate: (value: ProductProps, index: number, array: ProductProps[]) => value is S, thisArg?: any): this is S[] {
//   throw new Error('Function not implemented.');
// } } some={function (predicate: (value: ProductProps, index: number, array: ProductProps[]) => unknown, thisArg?: any): boolean {
//   throw new Error('Function not implemented.');
// } } forEach={function (callbackfn: (value: ProductProps, index: number, array: ProductProps[]) => void, thisArg?: any): void {
//   throw new Error('Function not implemented.');
// } } map={function <U>(callbackfn: (value: ProductProps, index: number, array: ProductProps[]) => U, thisArg?: any): U[] {
//   throw new Error('Function not implemented.');
// } } filter={function <S extends ProductProps>(predicate: (value: ProductProps, index: number, array: ProductProps[]) => value is S, thisArg?: any): S[] {
//   throw new Error('Function not implemented.');
// } } reduce={function (callbackfn: (previousValue: ProductProps, currentValue: ProductProps, currentIndex: number, array: ProductProps[]) => ProductProps): ProductProps {
//   throw new Error('Function not implemented.');
// } } reduceRight={function (callbackfn: (previousValue: ProductProps, currentValue: ProductProps, currentIndex: number, array: ProductProps[]) => ProductProps): ProductProps {
//   throw new Error('Function not implemented.');
// } } find={function <S extends ProductProps>(predicate: (this: void, value: ProductProps, index: number, obj: ProductProps[]) => value is S, thisArg?: any): S | undefined {
//   throw new Error('Function not implemented.');
// } } findIndex={function (predicate: (value: ProductProps, index: number, obj: ProductProps[]) => unknown, thisArg?: any): number {
//   throw new Error('Function not implemented.');
// } } fill={function (value: ProductProps, start?: number, end?: number): IntrinsicAttributes & ProductProps[] {
//   throw new Error('Function not implemented.');
// } } copyWithin={function (target: number, start: number, end?: number): IntrinsicAttributes & ProductProps[] {
//   throw new Error('Function not implemented.');
// } } entries={function (): IterableIterator<[number, ProductProps]> {
//   throw new Error('Function not implemented.');
// } } keys={function (): IterableIterator<number> {
//   throw new Error('Function not implemented.');
// } } values={function (): IterableIterator<ProductProps> {
//   throw new Error('Function not implemented.');
// } } includes={function (searchElement: ProductProps, fromIndex?: number): boolean {
//   throw new Error('Function not implemented.');
// } } flatMap={function <U, This = undefined>(callback: (this: This, value: ProductProps, index: number, array: ProductProps[]) => U | readonly U[], thisArg?: This): U[] {
//   throw new Error('Function not implemented.');
// } } flat={function <A, D extends number = 1>(this: A, depth?: D): FlatArray<A, D>[] {
//   throw new Error('Function not implemented.');
// } } at={function (index: number): ProductProps | undefined {
//   throw new Error('Function not implemented.');
// } } 

export default App;
