"use client";
// import {useEffect, useState} from "react";

// export default function MealIngredientList({idM}) {

//     let [mealIngredients, setMealIngredients] = useState([]);

    
//     async function fetchMealIngredients() {
//         try {
//             const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idM}`;
//             const response = await fetch(apiUrl);
//             if (!response.ok) {
//                 throw new Error(`HTTP error! status: ${response.status}`);
//             }
//             const json = await response.json();
//             console.log('JSON', json.mealIngredients || []);
//             return json.meals || [];
//         } catch (err) {
//             console.error(err.message || err);
//             alert(`Something went wrong: ${err.message || err}`);
//             return [];
//         }
//     }
    
    
//     const loadMealIngredients = async () => {
//         const mealData = await fetchMealIngredients(ingredient);
        
        

//         if (mealData !== undefined) {
//             return setMealIngredients(mealData);
//         }
//         else {
//             return setMealIngredients(0);
//         }
    
//     };
    
//     useEffect(() => {
//         loadMealIngredients();
//     }, [ingredient]);

//     return (
//         <div>

//         </div>
//     )

// };


