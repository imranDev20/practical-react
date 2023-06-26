import "./List.css";
function List() {
  const fruits = ["Apples", "Bananas", "Pineapple", "Guava"];

  return (
    <div className="list">
      {fruits.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))}
    </div>
  );
}

export default List;
