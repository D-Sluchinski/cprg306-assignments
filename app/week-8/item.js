// import ItemList from "./item-list";
//{name, quantity, category}

export default function Item({props, onSelect}) {
  const { name, quantity, category } = props;

  return (
    <div className="p-2 m-4 bg-slate-900 max-w-xl hover:bg-orange-800" onClick={onSelect}>
      <ol>
        <li className="text-xl font-bold">{name}</li>
        <li >Buy: {quantity} in {category}</li>
      </ol>
    </div>
  );
}