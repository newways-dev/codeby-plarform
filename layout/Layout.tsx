import { FC, ReactNode } from 'react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import styles from './Layout.module.scss'
import { useSelector } from 'react-redux'
import { selectOpenUpload } from '@/redux/modal/selector'
import { Modal } from '@/components'

export interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const openUpload = useSelector(selectOpenUpload)

  return (
    <div className={styles.layout}>
      {openUpload && <Modal type='upload' />}
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.main}>{children}</main>
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    )
  }
}
