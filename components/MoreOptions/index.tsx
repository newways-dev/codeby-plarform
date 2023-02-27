import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './MoreOptions.module.scss'

export interface MoreOptionsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const MoreOptions = ({ className }: MoreOptionsProps) => {
  return (
    <div className={clsx(styles.moreOptions, className)}>
      <span>Скрыть</span>
      <span>Редактировать</span>
      <span>Удалить</span>
    </div>
  )
}
