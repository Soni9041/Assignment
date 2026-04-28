import data from "../Data/data.json";
import CategorySection from "./CategorySection";

const Home = () => {
  // group by category
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item?.category]) acc[item?.category] = [];
    acc[item?.category].push(item);
    return acc;
  }, {});

  return (
    <div className="container">
      <h1>Product Catalog</h1>

      {Object.keys(groupedData).map((category) => (
        <CategorySection
          key={category}
          title={category}
          items={groupedData[category]}
        />
      ))}
    </div>
  );
};

export default Home;