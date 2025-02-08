"use client";
import Link from "next/link";
import NewItem from "./new-item";

export default function Page(){

    return (

        <main>
            <div className="p-5"><Link href={'/'} className="hover:underline">Back</Link></div>
        <div className="grid justify-center">
            <NewItem/>
        </div>
        </main>
    );
}