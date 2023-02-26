import { AdminPages } from '@/types/admin'
import clsx from 'clsx'
import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
  useState,
} from 'react'
import ArrowIcon from '../../../public/icons/select-arrow.svg'
import styles from './Select.module.scss'

export interface SelectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  active: string | AdminPages
  setActive: Dispatch<SetStateAction<string | AdminPages>>
  options: string[]
  title: string
  showTitle: boolean
  variant: 'gray' | 'black'
}

export const Select = ({
  active,
  setActive,
  className,
  options,
  title,
  showTitle,
  variant,
}: SelectProps) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div
      onClick={() => setOpen(!open)}
      className={clsx(
        className,
        styles.dropdownContainer,
        { [styles.black]: variant === 'black' },
        { [styles.gray]: variant === 'gray' }
      )}
    >
      {showTitle && <p>{title}</p>}
      {!showTitle && <p>{active}</p>}
      {open && (
        <div className={styles.options}>
          <ul>
            {options.map((option, index) => (
              <li onClick={() => setActive(option as string)} key={index}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
      <ArrowIcon className={clsx({ [styles.openArrow]: open })} />
    </div>
  )
}
