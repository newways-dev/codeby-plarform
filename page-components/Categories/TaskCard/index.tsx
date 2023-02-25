import Image from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { TaskStatus } from '@/types/task'
import { Check, Status } from '@/components'
import styles from './TaskCard.module.scss'

import image from '../../../public/images/avatar.jpg'
import clsx from 'clsx'

export interface TaskCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  status: TaskStatus
  title: string
  desc: string
  check: boolean
}

export const TaskCard = ({
  className,
  title,
  desc,
  status,
  check,
}: TaskCardProps) => {
  return (
    <div className={clsx(styles.taskCard, className)}>
      <div className={styles.top}>
        <Image src={image} alt='' />
        <Status status={status} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.bottom}>
        <button>Подробнее</button>
        <Check check={check} />
      </div>
    </div>
  )
}
