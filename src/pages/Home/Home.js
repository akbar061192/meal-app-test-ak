import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MealsContext } from '../../context/MealsContext';
import './Home.css';

const Home = () => {
  const [mealName, setMealName] = useState('');
  const { meals, searchUserMeals } = useContext(MealsContext);

  const mealInputHandler = e => {
    setMealName(e.target.value);
  };

  const searchMeal = e => {
    e.preventDefault();
    searchUserMeals(mealName);
  };

  return (
    <div className='container'>
      <form className='meal-search' onSubmit={searchMeal}>
        <input type='text' placeholder='Search Meal' value={mealName} onChange={mealInputHandler} />
        <button>Search</button>
      </form>

      <section className='meals'>
        {!meals ? (
          <h4>No Meals Found</h4>
        ) : meals.length === 0 ? (
          <h3 style={{ fontSize: '20px', color: 'red' }}>Loading...</h3>
        ) : (
          meals.map(meal => {
            return (
              <Link to={`/${meal.idMeal}`} className='meal' key={meal.idMeal} title='Click to view more details'>
                <img className='image' src={meal.strMealThumb} alt={meal.strMeal} />
                <h4>{meal.strMeal}</h4>
              </Link>
            );
          })
        )}
      </section>
    </div>
  );
};

export default Home;
