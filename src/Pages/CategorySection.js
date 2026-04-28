import ItemCard from "./ItemCard";

const CategorySection = ({ title, items }) => {
  return (
    <div className="category">
      <h2>{title}</h2> 

      <div className="grid">
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;