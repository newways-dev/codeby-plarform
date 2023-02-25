import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import styles from './Button.module.scss'

export interface ButtonProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: 'green' | 'white'
  text: string
}

export const Button = ({ className, variant, text }: ButtonProps) => {
  switch (variant) {
    case 'green':
      return (
        <button className={clsx(className, styles.button, styles.green)}>
          {text}
        </button>
      )
    case 'white':
      return (
        <button className={clsx(className, styles.button, styles.white)}>
          {text}
        </button>
      )
    default:
      return <></>
  }
}
