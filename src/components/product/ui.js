// Product component
export function Product({ name, image }) {
  return (
    <div className="product">
      <h3>{name}</h3>
      <img src={image} alt={name} style={{ width: "200px" }} />
    </div>
  );
}

