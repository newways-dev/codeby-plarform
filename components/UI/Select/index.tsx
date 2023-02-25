import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import ArrowIcon from '../../../public/icons/select-arrow.svg'
import styles from './Select.module.scss'

export interface SelectProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  options: string[]
  title: string
  showTitle: boolean
}

export const Select = ({
  className,
  options,
  title,
  showTitle,
}: SelectProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [active, setActive] = useState<string>(options[0])

  return (
    <div
      onClick={() => setOpen(!open)}
      className={clsx(className, styles.selectContainer)}
    >
      {showTitle && <p>{title}</p>}
      {!showTitle && <p>{active}</p>}
      {open && (
        <div className={styles.options}>
          <ul>
            {options.map((option, index) => (
              <li onClick={() => setActive(option)} key={index}>
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
