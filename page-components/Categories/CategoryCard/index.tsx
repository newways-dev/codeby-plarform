import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Chart } from '../../CompleteCard/Chart'
import styles from './CategoryCard.module.scss'

export interface CategoryCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  image: string | StaticImageData
  title: string
  desc: string
  value: number
}

export const CategoryCard = ({
  image,
  className,
  title,
  desc,
  value,
}: CategoryCardProps) => {
  return (
    <div className={clsx(styles.categoryCard, className)}>
      <div className={styles.left}>
        <Image src={image} alt='' />
        <div className={styles.info}>
          <span className={styles.title}>{title}</span>
          <span className={styles.desc}>{desc}</span>
        </div>
      </div>
      <div className={styles.chart}>
        <Chart value={value} />
        <span className={styles.complete}>Выполнено:</span>
        <p>
          6<span>/20</span>
        </p>
      </div>
    </div>
  )
}
