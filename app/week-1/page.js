import Link from "next/link";

export default function Page() {
  return (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="p-5"><Link href={'/'} className="hover:underline">Back</Link></div>
        <div>
            <h1>Derek Sluchinski</h1>
            <Link href={'https://github.com/D-Sluchinski/cprg306-assignments'} className="hover:underline">Github Link</Link>
        </div>
    </div>
  );
}