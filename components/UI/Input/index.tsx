import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Input.module.scss'

export interface InputProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string
  placeholder: string
  type: 'text' | 'textarea'
}

export const Input = ({ className, title, placeholder, type }: InputProps) => {
  return (
    <div className={clsx(className, styles.inputContainer)}>
      <span className={styles.title}>{title}</span>
      {type === 'text' && <input placeholder={placeholder} />}
      {type === 'textarea' && <textarea placeholder={placeholder}></textarea>}
    </div>
  )
}
