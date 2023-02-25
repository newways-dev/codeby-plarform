import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Sidebar } from '@/layout/Sidebar'
import { selectMenu } from '@/redux/mobileMenu/selector'
import { useSelector } from 'react-redux'
import styles from './MobileMenu.module.scss'

export interface MobileMenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const MobileMenu = ({ className }: MobileMenuProps) => {
  return (
    <div className={clsx(className, styles.mobileMenu)}>
      <Sidebar className={styles.mobileSidebar} />
    </div>
  )
}
