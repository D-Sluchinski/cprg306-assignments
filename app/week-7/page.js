"use client";
import Link from "next/link";
import ItemList from "./item-list";
import React from "react";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = React.useState([...itemsData]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main>
      <div className="p-5">
        <Link href={'/'} className="hover:underline">Back</Link>
      </div>
      <div className=" ">
        <h1 className="text-3xl font-bold ml-[13rem] pb-2">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}