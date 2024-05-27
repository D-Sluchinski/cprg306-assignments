
export function Student({id, name, gpa}) //having this doesnt need prop.name etc
{
	let student ={name: "Same Jones", 
	id:1, 
	GPA:3.4,
	course:{
	  name:"CPRG-306",
	  id:306,
	  instructor:"Hani"}
	  } 
	// const = {id,name,gpa} = props; if we have props in function
	const msg = `hello ${name}`; /*use the top left single quote near tilde ~*/


	return(

	   <>
	   <h1>{msg}</h1>
		<h1 ClassName="fontbold text -2x1 text-blue-600">Student: {student.id}</h1>
		<h2>Name: {name}</h2>
		{/* props.gpa if name in function is props */}
		<h2>GPA: {student.GPA}</h2> 
        </>
	);
}

