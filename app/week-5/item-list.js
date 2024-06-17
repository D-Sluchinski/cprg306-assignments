'use client'
import { useState} from "react";
import Item from "./item.js";
import groceries from "./items";

export function ItemList ({name, quantity, category}){

    const [sortBy, setSortBy] = useState("name");
     
    const [items, setItems] = useState(groceries); //

    const btn_active = "bg-orange-700 p-2 m-2";
    const btn_unactive = "bg-orange-900 p-2 m-2";
    


    function handleClick(event)
    {
        if(event.target.value==="name")
        {
            //setItem uses the list and then sorts it by comparing a & b
            setItems([...groceries].sort((a, b) => {
                //sorts by name
               return ( 
                    a.name.localeCompare(b.name));
            }));
        }
        else  
        {
            // setItems([...groceries].sort());
            //sorts by category
            setItems([...groceries].sort((a, b) => {
                return ( 
                     a.category.localeCompare(b.category))

             }));
         }
            
        }


        return (
            <div>
            <label>Sort By: </label>
            {/*value= goes to handleClick, giving it the event.target.value*/}
            
            <button  onClick={handleClick} value ="name" 
                className={btn_active} >Name</button>
            <button  onClick={handleClick} value ="category" 
                className={btn_unactive} >Category</button> 

                <ul>
                {/*takes ONE item at a time as grocery*/}
                {items.map((grocery)=>
                {
                return (
                <>
                <Item key={grocery.id} {...grocery}/>
                </>
                )}
                )}</ul>
            </div>
        
          );
    

};

