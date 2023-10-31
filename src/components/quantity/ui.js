// Quantity component
export function Quantity({ quantity }) {
  return (
    <div className="quantity">
      <button>-</button>
      <span>{quantity}</span>
      <button>+</button>
    </div>
  );
}
