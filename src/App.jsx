import React,{createContext} from 'react'
import Navbar from "./components/Navbar";
import Home from "./home/Home";
import Product from "./home/Product";
import { Route, Routes } from 'react-router-dom';
import CategorySelection from './components/CategorySelection';
import Vegetables from './components/products/Vegetables';
import Bakery from './components/products/Bakery';
import ColdDrink from './components/products/ColdDrink';
import Dairy from './components/products/Dairy';
import Snacks from './components/products/Snacks';
import Tea from './components/products/Tea';
import VerticalTabs from './components/VerticalTabs';
import {categoryData,vegetablesData, fruitsData } from "./Data";

const CategoryContext = createContext();
const VegetablesContext = createContext();
const FruitsContext = createContext();


function App() {
  return (
    <>
    <CategoryContext.Provider value={categoryData}>
      <VegetablesContext.Provider value={vegetablesData}>
        <FruitsContext.Provider value={fruitsData}>
      <Navbar/>

      <Routes>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<CategorySelection/>} />
        <Route path="/bakery" element={<Bakery/>} />
        <Route path="/colddrink" element={<ColdDrink/>} />
        <Route path="/dairy" element={<Dairy/>} />
        <Route path="/snacks" element={<Snacks/>} />
        <Route path="/tea" element={<Tea/>} />
        <Route path="/vegetables" element={<Vegetables/>} />
        <Route path="/VerticalTabs" element={<VerticalTabs/>} />
        <Route path="/category/vegetables" element={<Vegetables/>} />
            <Route path="/category/bakery" element={<Bakery/>} />
            <Route path="/category/coldrink" element={<ColdDrink/>} />
            <Route path="/category/dairy" element={<Dairy/>} />
            <Route path="/category/snacks" element={<Snacks/>} />
            <Route path="/category/tea" element={<Tea/>} />

      </Routes>

        </FruitsContext.Provider>
      </VegetablesContext.Provider>
    </CategoryContext.Provider>
    </>

  );
}

export default App;
export {CategoryContext,VegetablesContext, FruitsContext};
