import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar/component';
import Cart from './Views/Cart/component';
import Home from './Views/Home/component';
import { APIobj } from './Views/Home/model';
import Product from './Views/Product/component';

const API:APIobj[] = [
	{
		id: "samsung_GS20U",
		title: "Samsung Galaxy S20 Ultra",
        categoriesIDs: ["smartphones", "electronics", "media"],
		brand: "Samsung",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora deleniti quo nam ipsum itaque nemo facilis praesentium, natus necessitatibus quas consequuntur illum eveniet provident eum omnis modi tenetur laudantium doloribus.",
		pricing: {
            price: "899.90",
			discount: "50"
		},
		imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ftLXIJmkSDojdUmhmQGkc56yS2aO33P8hA&usqp=CAU",
        popularity: 4,
        rating: [4, 4, 5]
	},
	{
		id: "iphone_13PM",
		title: "iPhone 13 Pro Max",
        categoriesIDs: ["smartphones", "electronics", "media"],
		brand: "Apple",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ipsam dolorem. Ipsa cumque minima perspiciatis magnam, culpa placeat, tempore saepe incidunt eius fugiat officiis ab, vitae quisquam laboriosam explicabo ratione!",
		pricing: {
            price: "1499.90",
			discount: "50"
		},
		imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0l_R2V1zog0BWQD1v4hUZrKqhIhAwmH1xYQ&usqp=CAU",
        popularity: 5,
        rating: [3, 5, 3]
	},
	{
		id: "moto_GPro",
		title: "Moto G Pro 2022",
        categoriesIDs: ["smartphones", "electronics", "media"],
		brand: "Motorola",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro vero iste voluptates itaque cum necessitatibus modi aperiam! Doloribus, eum voluptatem odio est nam quis? Ipsam pariatur nisi fugiat mollitia omnis.",
		pricing: {
            price: "599.90",
			discount: "100"
		},
		imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpgCIcb2JhSIKH3vakEgUaXAg3icfcTgP_zA&usqp=CAU",
        popularity: 3,
        rating: [2, 4, 3]
	},
	{
		id: "usbc_headphones",
		title: "USB C Premium Headphones",
        categoriesIDs: ["electronics", "media", "accessories"],
		brand: "Sony",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid dignissimos fuga in odit nobis, dicta omnis neque, consequuntur tenetur placeat, minima exercitationem! Esse minus incidunt quibusdam aperiam vel culpa omnis!",
		pricing: {
            price: "49.90",
		},
		imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwbTUaYClLCZq2PMJCwJWeNbS99QovRs4-pA&usqp=CAU",
        popularity: 3,
        rating: [4, 4, 3]
	},
	{
		id: "iphone_cover_prem",
		title: "iPhone Premium Quality Silicon Cover",
        categoriesIDs: ["smartphones", "accessories"],
		brand: "Apple",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam illum fuga fugiat earum nesciunt consequatur deserunt voluptate itaque voluptatum quis cupiditate dignissimos quas culpa autem omnis necessitatibus, repellendus reprehenderit sapiente.",
		pricing: {
            price: "29.90",
		},
		imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWShr1GESazgqK40OiRrsuAIcNkFcZkMudOWJg4vs5DiQfIAo0MgN0-hfISnmpXL-ajg&usqp=CAU",
        popularity: 4,
        rating: [3, 1, 5]
	},
    {
        id: "Xiaomi_12",
		title: "Xiaomi 12 Blue",
        categoriesIDs: ["smartphones", "electronics", "media"],
		brand: "Xiaomi",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sapiente odio illo sit! Commodi reiciendis tenetur voluptatem? Explicabo, reiciendis dolores ullam unde labore mollitia tempora fugit beatae autem aperiam dignissimos.",
		pricing: {
            price: "799.90",
            discount: "100"
		},
		imageURL: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1646735920.09252692.png",
        popularity: 3,
        rating: [3, 4, 5]
        
    },
]

function App() {

    const [cart, setCart] = useState<APIobj[]>([])

    return (
        <Router>
        <main className="App">
            <Navbar/>
            <section className="App__background_banner">
            </section>
            <section className="App__body">
            <Routes>
                <Route path="/" element={<Home API={API} setCart={setCart}/> }/>
                <Route path="/:product" element={ <Product API={API} /> }/>
                <Route path="/cart" element={ <Cart cart={cart} setCart={setCart}/> }/>
            </Routes>
            </section>
        </main>
        </Router>
    );
}

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
