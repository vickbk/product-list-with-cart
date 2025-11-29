export const ActionButton = ({
  onClick,
  increment = true,
  disabled,
}: {
  onClick: () => void;
  increment?: boolean;
  disabled: boolean;
}) => {
  const disable: { disabled?: boolean } = {};
  if (disabled) disable.disabled = true;
  return (
    <button
      className="rounded-full border b-rose-20 p-1 aspect-square"
      type="button"
      onClick={onClick}
      {...disable}
    >
      <img
        src={`./assets/images/icon-${
          increment ? "increment" : "decrement"
        }-quantity.svg`}
        alt={`${increment ? "increment" : "decrement"} the number of items`}
      />
    </button>
  );
};
