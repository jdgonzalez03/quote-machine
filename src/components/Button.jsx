// eslint-disable-next-line react/prop-types
export function Button({ children, onClick, id, style }) {
  return (
    <button id={id} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
