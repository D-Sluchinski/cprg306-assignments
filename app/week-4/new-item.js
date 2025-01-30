"use client"
import {useState} from "react";    


export default function NewItem() {
    let [quantity, setQuantity] = useState(1);
    


    let increment = () => {
    
        if(quantity <= 19) {
            setQuantity(quantity+1);
        }
        else{
            warnPopup(quantity);
        }
    
        };
    let decrement = () => {
            
        if(quantity > 1) {
            setQuantity(quantity-1);
        }
        else{
            warnPopup(quantity);
        }
    
    }

    let warnPopup = (quantity) => {
        if (quantity == 20 ){
            alert("Warning: Cannot increment above 20");
        }
        else if (quantity == 1){
            alert("Warning: Cannot decrement below 0");
        }

    };





    return(

        <main className="p-5 bg-blue-900 m-5 w-min rounded-sm">
            <div className="flex flex-row">

                <button onClick={decrement} className="text-xl bg-red-900 hover:bg-red-500 rounded-l rounded-r p-2 text-xl font-bold w-8 grid justify-items-center" >-</button>

                <p className="bg-white p-2 text-xl font-bold text-black w-12 grid justify-items-center">{quantity}</p>
                
                <button onClick={increment} className="text-xl bg-green-900 hover:bg-green-500 rounded-r rounded-r p-2 text-xl font-bold w-8 grid justify-items-center">+</button>

            </div>
        </main>
    );
    


};