"use client";
import {useEffect, useState} from "react";

export default function MealIdeas({ingredient}) {

    let [meals, setMeals] = useState([]);

    
    async function fetchMealIdeas() {
        try {
            const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            console.log('JSON', json.meals || []);
            return json.meals || [];
        } catch (err) {
            console.error(err.message || err);
            alert(`Something went wrong: ${err.message || err}`);
            return [];
        }
    }
    
    
    const loadMealIdeas = async () => {
// fetchMealIdeas(ingredient);
        // fetchMealIdeas(ingredient);
        const mealData = await fetchMealIdeas(ingredient);
        setMeals(mealData); 
        
    };
    
    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    
    return (
        <div className="pt-[72px] pl-[10rem]">
            <h1 className="text-3xl font-bold ml-[7rem] pb-2">Meal Ideas</h1>
            {meals.length === 0 ? 
            ( <p className="ml-4">Select an item to see meal ideas</p>) :
            (
                meals.length > 0 ? (
                    <div>
                        <p className="ml-4">Here are some meal ideas using {ingredient}</p>
                        <ul>
                            {meals.map((meal) => {
                                return <li key={meal.idMeal} className=" bg-slate-900 max-w-sm p-2 m-2">{meal.strMeal}</li>
                            })}
                        </ul>
                    </div>
                ) : (
                    <div>
                        <p className="ml-4">No meal ideas found for {ingredient}</p>
                    </div>
                )
            )
            }
        </div>
    )

};


