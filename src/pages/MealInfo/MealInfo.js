import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './MealInfo.css';

const MealInfo = () => {
  const [singleMeal, setSingleMeal] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const getSingleMeal = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`);
        setSingleMeal(response.data.meals);
      } catch (err) {
        return err;
      }
    };
    getSingleMeal();
  }, [params.id]);

  const backtoHome = () => {
    navigate('/');
  };

  return (
    <div className='single-meal-container'>
      <button style={{ marginBottom: '20px' }} onClick={backtoHome}>
        Back
      </button>
      {singleMeal.length === 0 ? (
        <h3 style={{ fontSize: '20px', color: 'red', margin: '40px', textAlign: 'center' }}>Loading...</h3>
      ) : (
        singleMeal.map(meal => {
          return (
            <section key={meal.idMeal} className='single-meal'>
              <div>
                <img style={{ width: '500px', borderRadius: '5px' }} src={meal.strMealThumb} alt={meal.strMeal} />
              </div>
              <div className='single-meal-data'>
                <div>Instructions: {meal.strInstructions}</div>
                <div>Meal: {meal.strMeal}</div>
                <div>
                  Youtube:
                  <a style={{ marginLeft: '5px' }} href={meal.strYoutube} target='_blank'>
                    {meal.strYoutube}
                  </a>
                </div>
              </div>
            </section>
          );
        })
      )}
    </div>
  );
};

export default MealInfo;
