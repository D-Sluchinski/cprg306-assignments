// import ItemList from "./item-list";
//{name, quantity, category}

export default function Item({ props }) {
  const { name, quantity, category } = props;

  return (
    <div className="p-2 m-4 bg-slate-900 max-w-xl">
      <ol>
        <li className="text-xl font-bold">{name}</li>
        <li >Buy: {quantity} in {category}</li>
      </ol>
    </div>
  );
}

/// Web development 2_CPRG306_E ONLINE-20250213_165842-Meeting Recording