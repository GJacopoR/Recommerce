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

    const [logged, setLogged] = useState<boolean>(false)

    useEffect(() => {
        fetch('http://localhost:1337/api/products/?populate=*')
        .then(res => res.json())
        .then(data => {
            let API:objAmount[] = data.data.map((el:any) => el.attributes)
            API.map((el:any) => (el.brand.data) ? el.brand = el.brand.data.attributes.name : el.brand = '')
            API.map((el:any) => (el.rating) ? el.rating = el.rating.rating : el.rating = [])
            API.map((el:any) => el.categories = el.categories.data.map((el:any) => el.attributes.category))
            API.map((el:any) => (el.product_carousel.data) ? el.product_carousel = el.product_carousel.data.attributes.images.images : el.product_carousel = null) // el.imageURL)
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
                <Navbar cart={cart} logged={logged} setLogged={setLogged}/>
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

export default App;