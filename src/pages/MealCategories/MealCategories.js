import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './MealCategories.css';

const MealCategories = () => {
  const [mealCategories, setMealCategories] = useState([]);

  useEffect(() => {
    const mealCategories = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`);
        setMealCategories(response.data.categories);
      } catch (err) {
        return err;
      }
    };
    mealCategories();
  }, []);

  console.log(mealCategories);

  return (
    <div className='category-container'>
      {mealCategories.map(meal => {
        return (
          <section className='category' key={meal.idCategory}>
            <div>
              <img style={{ width: '200px', borderRadius: '5px' }} src={meal.strCategoryThumb} alt={meal.strCategory} />
            </div>
            <div>
              <h3>{meal.strCategory}</h3>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default MealCategories;
