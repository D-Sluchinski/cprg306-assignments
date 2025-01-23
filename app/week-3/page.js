import Link from "next/link";
import ItemList from "./item-list";

export default function Page(){
return(
<div title="Shopping List" className="">
    <div className="p-5"><Link href={'/'} className="hover:underline">Back</Link></div>
    
    <div className="">
    <h1 className="text-3xl font-bold">Shopping List</h1>
    <ItemList />
    </div>
</div>
);

}