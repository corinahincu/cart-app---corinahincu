// Product component
export function Product({ name, image }) {
  return (
    <div className="product">
      <h3>{name}</h3>
      <img src={image} alt={name} style={{ width: "200px" }} />
    </div>
  );
}
/* export function Product (props) {
  return (
    <div className="product">
      {props.children}
      <h3>{props.name}</h3>
      <img src={props.image} alt={props.name} style={{ width: "100px" }} />
    </div>
  )
} */
