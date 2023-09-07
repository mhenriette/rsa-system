import Category from "../cards/category";

const Categories = () => {
  const categorize = [
    {
      id: 1,
      category: "Squirrels",
      age: "4-6",
    },
    {
      id: 2,
      category: "Beavers",
      age: "6-8",
    },
    {
      id: 3,
      category: "Cubs",
      age: "8-10",
    },
    {
      id: 4,
      category: "Scouts",
      age: "10-14",
    },
    {
      id: 5,
      category: "Explorers",
      age: "14-18",
    },
    {
      id: 6,
      category: "Network",
      age: "18-25",
    },
  ];
  return (
    <div className="flex my-2 gap-y-2 justify-between items-center px-32">
      {categorize.map((category) => (
        <Category
          key={category.id}
          category={category.category}
          age={category.age}
        />
      ))}
    </div>
  );
};

export default Categories;
