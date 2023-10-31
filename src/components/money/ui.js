// Money component
export function Money(props) {
  return (
    <span className="money">
      {props.cost} {props.currency}
    </span>
  );
}
