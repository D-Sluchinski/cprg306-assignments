

export default function Item ({name, quantity, category})
{



    return(
    <>
    <ul>
        <li class="p-2 m-4 bg-slate-900 max-w-sm">
            <h2 class="text-xl font-bold">{name}</h2>
            <div>
                <h3 class="text-sm">buy {quantity} in {category}</h3>
            </div>
        </li>
    </ul>
    </>
    );
}