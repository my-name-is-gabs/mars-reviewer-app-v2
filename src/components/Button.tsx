import { ButtonType } from './types'

const Button = ({ children, attribs, className, onClick }: ButtonType) => {
  return (
    <button {...attribs} className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
