import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar/component';
import Home from './Views/Home/component';
import Product from './Views/Product/component';

function App() {
  return (
    <Router>
      <main className="App">
        <Navbar/>
        <section className="App__background_banner">
        </section>
        <section className="App__body">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/product" element={<Product />}/>
          </Routes>
        </section>
      </main>
    </Router>
  );
}

export default App;
