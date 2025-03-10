"use client";
import { useState } from "react";
import Item from "./item";
// import grocery from "./items.json"; //before week 6

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");
  // const [items, setItems] = useState(grocery); //before week 6

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

    return 0;
  });

  let previousCategory = null;

  return (
    <div className="max-w-2xl">
      <div className="flex flex-row justify-center items-center max-w-xl">
        <button
          onClick={() => setSortBy("name")}
          className="ml-2 mr-2 bg-blue-950 rounded-sm p-1 w-[145px]"
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className="ml-2 mr-2 bg-blue-950 rounded-sm p-1 w-[145px]"
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy("group")}
          className="ml-2 mr-2 bg-blue-950 rounded-sm p-1 w-[145px]"
        >
          Sort by Group
        </button>
      </div>

      <div className="max-w-2xl">
        <ul>
          {sortedItems.map((i) => {
            const showCategoryHeader = sortBy === "group" && i.category !== previousCategory;
            if (showCategoryHeader) {
              previousCategory = i.category;
            }
            return (
              <li key={i.id}>
                {showCategoryHeader && (
                  <h1 className="capitalize mt-3 ml-4 bg-red-900 font-bold text-3xl max-w-sm">
                    {i.category}
                  </h1>
                )}
                <Item {...i} props={i} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
