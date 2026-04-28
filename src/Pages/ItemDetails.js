
import { useParams } from "react-router-dom";
import data from "../Data/data.json";

const ItemDetail = () => {
  const { name } = useParams();

  const item = data.find((i) => i.itemname === name);

  if (!item) return <h2>Item not found</h2>;

  return (
    <div className="detail">
      <h1>{item?.itemname}</h1>
      <p><strong>Category:</strong> {item.category}</p>

      <img src={item?.image} alt={item?.itemname} />

      <h3>Specifications:</h3>
      <ul>
        {item.itemprops.map((prop, index) => (
          <li key={index}>
            <strong>{prop?.label}:</strong> {prop?.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemDetail;