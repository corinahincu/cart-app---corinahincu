// Money component
export function Money({cost,currency}) {
  return (
    <span className="money">
      {cost} {currency}
    </span>
  );
}
