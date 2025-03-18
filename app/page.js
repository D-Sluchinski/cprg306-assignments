import Link from "next/link";
//https://cprg306-webdev2.vercel.app/


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <h1 >WEB DEV 2</h1>
          <ul>
          <li><Link href={"/week-1"} className="hover:underline">Week 1</Link></li>
          <li><Link href={"/week-2"} className="hover:underline">Week 2</Link></li>
          <li><Link href={"/week-3"} className="hover:underline">Week 3</Link></li>
          <li><Link href={"/week-4"} className="hover:underline">Week 4</Link></li>
          <li><Link href={"/week-5"} className="hover:underline">Week 5</Link></li>
          <li><Link href={"/week-6"} className="hover:underline">Week 6</Link></li>
          <li><Link href={"/week-7"} className="hover:underline">Week 7</Link></li>
          <li><Link href={"/week-8"} className="hover:underline">Week 8</Link></li>
          {/* <li><Link href={"/week-9"} className="hover:underline">Week 9</Link></li> */}
          {/* <li><Link href={"/week-10"} className="hover:underline">Week 10</Link></li> */}
          </ul>
        </div>
      </main>
    </div>
  );
}
