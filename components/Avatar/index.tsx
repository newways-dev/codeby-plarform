import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import Image from 'next/image'
import styles from './Avatar.module.scss'

import Arrow from '../../public/icons/ArrowDown.svg'
import Icon from '../../public/icons/notification.svg'
import avatar from '../../public/images/avatar.jpg'

export interface AvatarProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Avatar = ({ className }: AvatarProps) => {
  return (
    <div className={styles.avatar}>
      <Image src={avatar} alt='' width={40} height={40} />
      <div>
        <Arrow />
      </div>
    </div>
  )
}
