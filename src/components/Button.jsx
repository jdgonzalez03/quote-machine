// eslint-disable-next-line react/prop-types
export function Button ({ children, onClick, id }){
  return(
    <button id={id} onClick={onClick}>
      {children}
    </button>
  )
}