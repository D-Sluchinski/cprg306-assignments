"use client"
import React, {useState} from "react";

export default function NewItem (){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    // NAME FIELD
	const handleTextChange = (event) =>
        {  
        const text = event.target.value;
        setName(text);
        };


    const handleQuantityChange = (event) =>
        {
        const text = event.target.value;
        setQuantity(text);
        };
    

    const handleCategoryChange = (event) =>
        {
        const text = event.target.value;
        
        setCategory(text);
        };
        
        //JUST FOR DROP DOWN
        const category1 = {
            categoryName: "produce",
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

        

    const handleSubmit = (event) =>
        {   
            event.preventDefault();

            let addNewItem = {name: name, quantity: quantity, category: category};
            
            //REQUIREMENT HANDLER
            if(addNewItem.name == "" || addNewItem.quantity > 100 || addNewItem.quantity < 1){
                
                if(addNewItem.name == "")
                    {
                        alert("Name required");
                    };
                
                if (addNewItem.quantity > 100 || addNewItem.quantity < 1){
                    alert("quantity required to be between 1 & 100");
                };
                    
            }

            else
                alert(`name: ${addNewItem.name} quantity: ${addNewItem.quantity}, category: ${addNewItem.category}`);

            //LOG ITEM INTO CONSOLE
            console.log(addNewItem.name + addNewItem.quantity + addNewItem.category );

            //RESETS
            setName("");
            setCategory("Produce");
            setQuantity(1);


        };
    

        return(
            <form class="p-3 m-10 bg-slate-900 max-w-sm w-full rounded-lg" action="">  
                {/* ITEM NAME */}
                <div class="pt-8 pb-8 ">
                    <input type="text" required onChange={handleTextChange} 
                        Class="border-2 bg-black p-4 rounded-lg w-full" placeholder="item" value={name}/>
                </div>


                {/* QUANTITY                 */}
                <div class="flex justify-between-8">
                    <input type="number" required value={quantity} onChange={handleQuantityChange} 
                    Class="border-2 bg-black p-4 rounded-lg mr-10 min-w-5" min="1" max="99"/>
                    {/* DROP DOWN LIST */}
                    <select value={category} onChange={handleCategoryChange} Class="border-2 bg-black p-4 rounded-lg w-full">
                            <option value="" disabled >Category</option>
                            <option value="produce" selected>{category1.categoryName.charAt(0).toUpperCase() + category1.categoryName.slice(1)}</option>
                            <option value="dairy" >{category2.categoryName.charAt(0).toUpperCase() + category2.categoryName.slice(1)}</option>
                            <option value="bakery">{category3.categoryName.charAt(0).toUpperCase() + category3.categoryName.slice(1)}</option>
                            <option value="meat">{category4.categoryName.charAt(0).toUpperCase() + category4.categoryName.slice(1)}</option>
                            <option value="frozen foods">{category5.categoryName.charAt(0).toUpperCase() + category5.categoryName.slice(1)}</option>
                            <option value="canned goods">{category6.categoryName.charAt(0).toUpperCase() + category6.categoryName.slice(1)}</option>
                            <option value="dry goods">{category7.categoryName.charAt(0).toUpperCase() + category7.categoryName.slice(1)}</option>
                            <option value="beverages">{category8.categoryName.charAt(0).toUpperCase() + category8.categoryName.slice(1)}</option>
                            <option value="snacks">{category9.categoryName.charAt(0).toUpperCase() + category9.categoryName.slice(1)}</option>
                            <option value="household">{category10.categoryName.charAt(0).toUpperCase() + category10.categoryName.slice(1)}</option>
                            <option value="other">{category11.categoryName.charAt(0).toUpperCase() + category11.categoryName.slice(1)}</option>
                    </select>

                </div>


                <div>    
                    <button type="submit" onClick={handleSubmit}
                         Class="bg-blue bg-slate-500 p-5 w-full mt-8 rounded-lg border-2">+</button>
                </div>
            </form>
        );
}



