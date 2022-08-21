import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import MealInfo from './pages/MealInfo/MealInfo';
import MealCategories from './pages/MealCategories/MealCategories';
import RandomMeal from './pages/RandomMeal/RandomMeal';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<MealInfo />} />
        <Route path='/categories' element={<MealCategories />} />
        <Route path='/random-meal' element={<RandomMeal />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
