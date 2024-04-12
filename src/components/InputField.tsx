import { InputFieldType } from './types'

const InputField = ({
  attribs,
  className,
  onBlur,
  onChange,
}: InputFieldType) => {
  return (
    <>
      <input
        {...attribs}
        className={className}
        onBlur={onBlur}
        onChange={onChange}
      />
    </>
  )
}

export default InputField
