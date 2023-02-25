import clsx from 'clsx'
import { useState } from 'react'
import { withLayout } from '@/layout/Layout'
import { AdminPages } from '@/types/admin'
import { AdminInfo } from '@/page-components'
import styles from '../styles/Admin.module.scss'

const Admin = () => {
  const [page, setPage] = useState<AdminPages>('Инфо')

  return (
    <div className={styles.admin}>
      <div className={styles.toolbar}>
        <ul>
          <li
            className={clsx({ [styles.active]: page === 'Инфо' })}
            onClick={() => setPage('Инфо')}
          >
            Инфо
          </li>
          <li
            className={clsx({ [styles.active]: page === 'Список юзеров' })}
            onClick={() => setPage('Список юзеров')}
          >
            Список юзеров
          </li>
          <li
            className={clsx({ [styles.active]: page === 'Новости' })}
            onClick={() => setPage('Новости')}
          >
            Новости
          </li>
          <li
            className={clsx({ [styles.active]: page === 'Категории' })}
            onClick={() => setPage('Категории')}
          >
            Категории
          </li>
          <li
            className={clsx({ [styles.active]: page === 'Задания' })}
            onClick={() => setPage('Задания')}
          >
            Задания
          </li>
          <li
            className={clsx({ [styles.active]: page === 'Архив' })}
            onClick={() => setPage('Архив')}
          >
            Архив
          </li>
        </ul>
      </div>
      {page === 'Инфо' && <AdminInfo />}
    </div>
  )
}

export default withLayout(Admin)
