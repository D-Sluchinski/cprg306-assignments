"use client"
import {useState} from "react";

export default function NewItem({ onAddItem }) {
  let [quantity, setQuantity] = useState(1);
  let [name, setName] = useState("");
  let [category, setCategory] = useState("produce");

  const handleName = (event) => {
    let newName = event.target.value;
    setName(newName);
  };

  const handleCategory = (event) => {
    let newCategory = event.target.value;
    if (category == "") {
      return alert("Category cannot be empty");
    }
    setCategory(newCategory);
  };

  const handleSubmit = (event) => {
    if (name == "") {
      return alert("Name cannot be empty");
    }
    event.preventDefault();
    let id = Math.random().toString(36).substring(2, 18);
    let addItem = {
      id,
      name,
      quantity,
      category,
    };
    console.log(addItem);
    onAddItem(addItem);
    
    resetAll();
  };

  let resetAll = () => {
    setCategory("produce");
    setName("");
    setQuantity(1);
  };

  let increment = (event) => {
    event.preventDefault();
    if (quantity < 20) {
      setQuantity(quantity + 1);
    } else {
      warnPopup(quantity);
    }
  };

  let decrement = (event) => {
    event.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      warnPopup(quantity);
    }
  };

  let warnPopup = (quantity) => {
    if (quantity == 20) {
      alert("Warning: Cannot increment above 20");
    } else if (quantity == 1) {
      alert("Warning: Cannot decrement below 0");
    }
  };

  return (
    <main className="p-2 m-4 bg-slate-900 max-w-xl flex flex-col items-center">
      <div className="flex flex-row">
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="pb-2 mt-2">
            <span className="mr-7 ">Name</span>
            <input
              type="text"
              name="name"
              className="text-black pl-1 w-[275px]"
              onChange={(event) => handleName(event)}
            />
          </div>

          <div className="pb-2">
            <span className="mr-[6px]">Category</span>
            <select name="category"  className=" text-black justify-items-center w-[275px]" value={category} onChange={(event)=>{handleCategory(event)}}>
              <option value="produce" className="text-black">Produce</option>
              <option value="dairy" className="text-black">Dairy</option>
              <option value="bakery" className="text-black">Bakery</option>
              <option value="meat" className="text-black">Meat</option>
              <option value="frozen" className="text-black">Frozen</option>
              <option value="canned goods" className="text-black">Canned Goods</option>
              <option value="dry goods" className="text-black">Dry Goods</option>
              <option value="beverages" className="text-black">Beverages</option>
              <option value="snacks" className="text-black">Snacks</option>
              <option value="household" className="text-black">Household</option>
            </select>
          </div>

          <div className="flex flex-row justify-center items-center">
            <button               onClick={(event)=>{decrement(event)}}               className="text-xl bg-red-900 hover:bg-red-500 rounded-l  p-2 text-xl font-bold w-8 grid justify-items-center" >-            </button>
            <p className="bg-white p-2 text-xl font-bold text-black w-12 grid justify-items-center">              {quantity}            </p>
            <button               onClick={(event)=>{increment(event)}}               className="text-xl bg-green-900 hover:bg-green-500 rounded-r p-2 text-xl font-bold w-8 grid justify-items-center">+            </button>
          </div>

          <button             type="submit"             className='bg-blue-500 p-2 mt-3  mr-auto ml-auto rounded-md grid justify-items-center' >            Submit          </button>

      

        </form>

            
      </div>
    </main>
  );

};