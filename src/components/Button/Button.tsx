import { css } from '@emotion/react'


const Button = ({ children, disabled, icon, buttonHandler }: {
  children: string;
  icon?: string
  disabled?: boolean;
  buttonHandler?: () => void;
}
) => {

  return (
    
  <button 
    type="button"
    tabIndex={0}
    aria-label={children}
    css={buttonStyle(disabled)} 
    disabled={disabled} 
    onClick={buttonHandler}>
           {icon ? <div css={iconStyle(disabled)}>  
            <img src={icon} height={30} width={30} />   
           </div> : false}
    {children}
  </button>

  )
}

const buttonStyle = (disabled?: boolean) => css({
  display: 'flex',
  cursor: disabled ? 'not-allowed' : 'pointer',
  fontSize: 18,
  background: 'transparent',
  border: 'none',
  width: '210px',
  alignItems:'center',
})

const iconStyle = (disabled?: boolean) => css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: disabled ? .5 : 1,
  width: 20,
  marginRight: 20
 

})


export default Button