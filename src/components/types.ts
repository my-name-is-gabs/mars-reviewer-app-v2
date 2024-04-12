import React from 'react'

export type ButtonType = {
  children?: React.ReactNode | string
  attribs?: object
  className?: string
  onClick?: () => void
}

export type InputFieldType = {
  attribs?: object
  className: string
  onBlur?: () => void
  onChange?: () => void
}
