import Link from "next/link";

export default function StudentInfo () {
    return(
    <div>
    <h1 className="font-bold">Name: Derek Sluchinski</h1>
    <div><h1>Github Link: </h1> <Link className="hover:underline" href="https://github.com/D-Sluchinski/cprg306-webdev2">Web Dev 2 Assingments</Link></div>
    </div>
    );
}