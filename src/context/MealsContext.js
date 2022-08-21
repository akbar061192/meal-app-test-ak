import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MealsContext = createContext();

export const MealsContextProvider = props => {
  const [meals, setMeals] = useState([]);

  function makeid(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${makeid(1)}`);
        setMeals(response.data.meals);
      } catch (err) {
        return err;
      }
    };
    fetchMeals();
  }, []);

  const searchUserMeals = async meal => {
    setMeals([]);
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
      setMeals(response.data.meals);
    } catch (err) {
      return err;
    }
  };

  return <MealsContext.Provider value={{ meals, searchUserMeals }}>{props.children}</MealsContext.Provider>;
};
