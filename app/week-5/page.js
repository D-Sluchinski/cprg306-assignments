
//DemoList
//import {ItemList} from "../week-3/item-list.js"; // from week 3
import Item from "./item.js";
import {ItemList} from "./item-list.js";

export default function Page() {
  
    return (
        <main>
            
          <h1 Class="text-3xl font-bold pl-24">SHOPPING LIST</h1>
          <ItemList></ItemList>
        </main>
    );
  }