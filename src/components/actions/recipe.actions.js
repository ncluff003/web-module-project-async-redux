import axios from "axios";
import apikey from "../../../config";

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_SUCCESS = "GET_RECIPES_SUCCESS";

export const getRecipes = (searchTerm, page) => async (dispatch) => {
  let recipes;
  try {
    const options = {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
      params: {
        query: searchTerm,
        offset: `${page}`,
      },
      headers: {
        "X-RapidAPI-Key": apikey,
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    const response = await axios(options);
    console.log(response);
    recipes = response.data.results;
    console.log(recipes);
    return { type: GET_RECIPES, payload: recipes };
  } catch (error) {
    console.error(error);
  }
};

export const getRecipesSuccess = (recipes) => {
  return { type: GET_RECIPES_SUCCESS, payload: recipes };
};
// export const calculateRent = (options) => async (dispatch) => {
//   const money = new Intl.NumberFormat("en-us", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
//   let rent = money.format(options.income * options.percentage);
//   try {
//     const details = {
//       method: "POST",
//       url: "https://stylinandy-taxee.p.rapidapi.com/v1/calculate/2014",
//       // url: "https://stylinandy-taxee.p.rapidapi.com/v2/calculate/%7Byear%7D",
//       headers: {
//         "content-type": "application/x-www-form-urlencoded",
//         Authorization: process.env.AUTH,
//         "X-RapidAPI-Key": process.env.APIKEY,
//         "X-RapidAPI-Host": "stylinandy-taxee.p.rapidapi.com",
//       },
//       data: options,
//     };

//     const response = await axios(details);
//     console.log(response);
//   } catch (error) {}
//   return { type: CALCULATE_RENT, payload: rent };
