"use client" 


export default function itemSorter()
{
    let category = ["produce", "dairy", "bakery", "meat", "frozen foods", 
        "canned goods", "dry goods", "beverages", "snacks", "household", "other"]


        const handleCategorySort = (item) =>
        {
            alert(`you clicked on ${item}`);
        };


        return(

            <>            
            
            {category.map((item)=>
            {
                
            return (<button key={item}
                    onClick={()=>handleCategorySort(item)} 
                    Class="bg-orange-600 p-1 w-28 m-2" >Category
                </button>);
                
            }
            )}
            
            
            </>
        );
    };