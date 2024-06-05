"use client"
import React, {useState} from "react";

export default function NewItem (){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    // name field
	const handleTextChange = (event) =>
        {
        
        const text = event.target.value;
        setName(text);
        
        }


    const handleQuantityChange = (event) =>
        {
        
        const text = event.target.value;
        setQuantity(text);
        }

        const category1 = {
            categoryName: ("produce"),
        };
        const category2 = {
            categoryName: "dairy",
        };
        const category3 = {
            categoryName: "bakery",
        };
        const category4 = {
            categoryName: "meat",
        };
        const category5 = {
            categoryName: "frozen foods",
        };
        const category6 = {
            categoryName: "canned goods",
        };
        const category7 = {
            categoryName: "dry goods",
        };
        const category8 = {
            categoryName: "beverages",
        };
        const category9 = {
            categoryName: "snacks",
        };
        const category10 = {
            categoryName: "household",
        };
        const category11 = {
            categoryName: "other",
        };






    const handleCategoryChange = (event) =>
        {
        


        const text = event.target.value;
        
        setCategory(text);
        }
        

        

    const handleSubmit = (event) =>
        {
            event.preventDefault();

            alert(` Name: ${name} Quantity: ${quantity} Category ${category}`);
        }
    

        return(
            <form class="p-3 m-10 bg-slate-900 max-w-sm w-full rounded-lg">  
            
            <div class="pt-8 pb-8 ">
                <input type="texr" required="" value={name} onChange={handleTextChange} 
                    Class="border-2 bg-black p-4 rounded-lg w-full" placeholder="item"></input>
            </div>

            
            <div class="flex justify-between-8">
                <input type="number" value={quantity} onChange={handleQuantityChange} Class="border-2 bg-black p-4 rounded-lg mr-10 min-w-5" min="1" max="99"></input>

                <select value={category} onChange={handleCategoryChange} Class="border-2 bg-black p-4 rounded-lg w-full">
                        <option value disabled >Category</option>
                        <option value={category1.categoryName}>{category1.categoryName.charAt(0).toUpperCase() + category1.categoryName.slice(1)}</option>
                        <option value={category2.categoryName} selected="">{category2.categoryName.charAt(0).toUpperCase() + category2.categoryName.slice(1)}</option>
                        <option value={category3.categoryName}>{category3.categoryName.charAt(0).toUpperCase() + category3.categoryName.slice(1)}</option>
                        <option value={category4.categoryName}>{category4.categoryName.charAt(0).toUpperCase() + category4.categoryName.slice(1)}</option>
                        <option value={category5.categoryName}>{category5.categoryName.charAt(0).toUpperCase() + category5.categoryName.slice(1)}</option>
                        <option value={category6.categoryName}>{category6.categoryName.charAt(0).toUpperCase() + category6.categoryName.slice(1)}</option>
                        <option value={category7.categoryName}>{category7.categoryName.charAt(0).toUpperCase() + category7.categoryName.slice(1)}</option>
                        <option value={category8.categoryName}>{category8.categoryName.charAt(0).toUpperCase() + category8.categoryName.slice(1)}</option>
                        <option value={category9.categoryName}>{category9.categoryName.charAt(0).toUpperCase() + category9.categoryName.slice(1)}</option>
                        <option value={category10.categoryName}>{category10.categoryName.charAt(0).toUpperCase() + category10.categoryName.slice(1)}</option>
                        <option value={category11.categoryName}>{category11.categoryName.charAt(0).toUpperCase() + category11.categoryName.slice(1)}</option>
                </select>

            </div>


            <div>    
                <button type="submit" onClick={handleSubmit} Class="bg-blue bg-slate-500 p-5 w-full mt-8 rounded-lg border-2">+</button>
            </div>
            </form>
        );
}





{/* <div class="flex p-2">
<form class="max-w-sm bg-white">  

    <ul>
        <li class="pt-8 pb-8 ">
        <h1 class="text-2xl">Name</h1>
        <input value={name} onChange={handleTextChange} Class="border-2 bg-black p-4 rounded-lg w-full"></input>
        </li>
        <li class="pb-8">
        <h1 class="text-2xl">Quantity</h1>
        <input type="number" value={quantity} onChange={handleQuantityChange} Class="border-2 bg-black p-4 rounded-lg w-full"></input>
        </li>
        <li class="pb-8">
        <h1 class="text-2xl ">Category</h1>
        <select value={category} onChange={handleCategoryChange} Class="border-2 bg-black p-4 rounded-lg w-full">
            <option value disabled >Category</option>
            <option value={category1.categoryName}>{category1.categoryName.charAt(0).toUpperCase() + category1.categoryName.slice(1)}</option>
            <option value={category2.categoryName}>{category2.categoryName.charAt(0).toUpperCase() + category2.categoryName.slice(1)}</option>
            <option value={category3.categoryName}>{category3.categoryName.charAt(0).toUpperCase() + category3.categoryName.slice(1)}</option>
            <option value={category4.categoryName}>{category4.categoryName.charAt(0).toUpperCase() + category4.categoryName.slice(1)}</option>
            <option value={category5.categoryName} selected>{category5.categoryName.charAt(0).toUpperCase() + category5.categoryName.slice(1)}</option>
            <option value={category6.categoryName}>{category6.categoryName.charAt(0).toUpperCase() + category6.categoryName.slice(1)}</option>
            <option value={category7.categoryName}>{category7.categoryName.charAt(0).toUpperCase() + category7.categoryName.slice(1)}</option>
            <option value={category8.categoryName}>{category8.categoryName.charAt(0).toUpperCase() + category8.categoryName.slice(1)}</option>
            <option value={category9.categoryName}>{category9.categoryName.charAt(0).toUpperCase() + category9.categoryName.slice(1)}</option>
            <option value={category10.categoryName}>{category10.categoryName.charAt(0).toUpperCase() + category10.categoryName.slice(1)}</option>
            <option value={category11.categoryName}>{category11.categoryName.charAt(0).toUpperCase() + category11.categoryName.slice(1)}</option>

        </select>
        
        </li>


        <li class="pt-5 pl-20">    
        <button onClick={handleSubmit} Class="bg-blue bg-slate-500 p-2">+</button>
        </li>
    </ul>
</form>
</div> */}