
const Button = ({ children, disabled, buttonHandler }: {
  children: React.ReactNode;
  disabled?: boolean;
  buttonHandler: () => void;
}
) => {

  return (
  <button 
    style={buttonStyle(disabled)} 
    disabled={disabled} 
    onClick={buttonHandler}>
    {children}
  </button>
  )
}

const buttonStyle = (disabled?: boolean) => ({
  cursor: disabled ? 'not-allowed' : 'pointer'
})


export default Button