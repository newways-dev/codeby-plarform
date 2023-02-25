import { Badge } from '@/components'
import styles from './NewsCard.module.scss'

import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

import Time from '../../public/icons/time.svg'

export interface NewsCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  options?: boolean
  published: string
  title: string
  news: string[]
  color: 'black' | 'gray'
}

export const NewsCard = ({
  className,
  published,
  title,
  news,
  color,
}: NewsCardProps) => {
  return (
    <div
      className={clsx(
        styles.newsCard,
        { [styles.newsCardBlack]: color === 'black' },
        { [styles.newsCardGray]: color === 'gray' },
        className
      )}
    >
      <div className={styles.badges}>
        <Badge title='Криптография' />
        <Badge title='Реверс-инжиниринг' />
      </div>
      <span className={styles.title}>{title}</span>
      <ul>
        {news.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className={styles.publish}>
        <Time />
        Опубликовано {published}
      </div>
    </div>
  )
}
