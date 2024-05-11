// eslint-disable-next-line react/prop-types
export function Button ({ children, onClick }){
  return(
    <button onClick={onClick}>
      {children}
    </button>
  )
}