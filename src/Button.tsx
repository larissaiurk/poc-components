import React, {HTMLAttributes, ReactNode} from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement>{
  /** Provide a text for the button */
  children: ReactNode

  /** Witch variant look would you like to use */
  variant: 'primary' | 'secondary'
}

/** This is a special button */
export const Button = ({children, variant = 'primary', ...props}: Props) => {
  return (
    <button 
      {...props} 
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : 'gray', 
        color: 'white',
        border: 'none',
        borderRadius: '100px',
        padding: '10px'
      }}>
      {children}
    </button>
  )
}
