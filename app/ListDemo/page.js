//[1:12:00] & [1:26:00]

'use client'
let week = ["sat", "sun", "mon", "tues","wed", "thurs", "fri"];
       
export default function Page() {    

    function handleItem(item)
    {
        alert(`you clicked on${item}`);
    }

  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ul>
        {week.map((item)=>
        {
        return <li key={item} onClick={()=>handleItem(item)}>{item}</li>

        }
        )}</ul>
    </main>

  );
};

//TEMPORARY IN MAIN PAGE
// <li>
//<a href="./ListDemo" class="hover:underline">ListDemo</a>
//</li>