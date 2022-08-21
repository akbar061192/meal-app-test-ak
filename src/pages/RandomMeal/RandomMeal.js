import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './RandomMeal.css';

const RandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState([]);
  const [getMeal, setGetMeal] = useState(false);

  useEffect(() => {
    const getRandomeMeal = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`);
        setRandomMeal(response.data.meals);
      } catch (err) {
        return err;
      }
    };
    getRandomeMeal();
  }, [getMeal]);

  return (
    <div className='random'>
      {randomMeal.length === 0 ? (
        <h4>Loading...</h4>
      ) : (
        randomMeal.map(meal => (
          <div key={meal.idMeal} className='random-meal'>
            <img style={{ width: '500px' }} src={meal.strMealThumb} alt='#' />
            <h4>Instructions</h4>
            <p>{meal.strInstructions}</p>
            <button onClick={() => setGetMeal(prev => !prev)}> Generate Another Meal</button>
          </div>
        ))
      )}
    </div>
  );
};

export default RandomMeal;
