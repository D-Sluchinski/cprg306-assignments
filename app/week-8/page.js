"use client";
import Link from "next/link";
import ItemList from "./item-list";
import React from "react";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = React.useState([...itemsData]);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (ingredient) => {
    let selectedItem = ingredient.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
    .split(',')[0]
    .trim()
    .replace(" ", "_");
    console.log(`handleItemSelected: ${selectedItem}`);
    setSelectedItem(selectedItem);
  };

  return (
    <main>
      <div className="flex flex-row">
        {/* Left Section */}
        <div className="flex-1">
          <div className="p-5">
            <Link href={'/'} className="hover:underline">Back</Link>
          </div>
          <div>
            <h1 className="text-3xl font-bold ml-[13rem] pb-2">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect}/>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-1 flex-col">
          <MealIdeas ingredient={selectedItem} />
        </div>
      </div>
    </main>
  );
}