"use client";
import { useState } from "react";
import Item from "./item";
import grocery from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [items, setItems] = useState(grocery);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy == "name") {
      return a.name.localeCompare(b.name); // sort alphabetically
    }

    if (sortBy == "category") {
      return a.category.localeCompare(b.category);
    }

    if (sortBy == "group") {
      return a.category.localeCompare(b.category);
    }

    return 0; // returns original order of list
  });

  return (
    <div>
      <div>
        <button
          onClick={() => setSortBy("name")}
          className="ml-4 bg-blue-950 rounded-sm p-1 w-[145px]"
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className="ml-5 bg-blue-950 rounded-sm p-1 w-[145px]"
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className="ml-5 bg-blue-950 rounded-sm p-1 w-[145px]"
        >
          Sort by Group
        </button>
      </div>

      <ul>
        {sortedItems.map((i) => (
          <li key={i.id}>
            {sortBy === "group" && (
              <h1 className="capitalize mt-3 ml-4 bg-red-900 font-bold text-3xl 900 max-w-sm">{i.category}</h1>
            )}
            <Item {...i} props={i} />
          </li>
        ))}
      </ul>
    </div>
  );
}
