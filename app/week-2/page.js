// http://localhost:3000/week-2

import StudentInfo from "./student-info";
import Link from "next/link";

export default function Page() {
  return (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="p-5"><Link href={'/'} className="hover:underline">Back</Link></div>
      <StudentInfo/>
    </div>
  );
}