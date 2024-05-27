import Link from "next/link";

//1:00:00 May 24th
export default function Navagation(){
	return(
	<nav>
		<ul>
			<li><Link href="/">home</Link></li>
			<li><Link href="/about">about</Link></li>
		</ul>
		
	</nav>
);
}
