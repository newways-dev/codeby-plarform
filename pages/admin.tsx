import clsx from 'clsx'
import { FormEvent, useState } from 'react'
import { withLayout } from '@/layout/Layout'
import { AdminPages } from '@/types/admin'
import styles from '../styles/Admin.module.scss'
import { Select } from '@/components'
import { AdminInfo } from '@/page-components'

const Admin = () => {
  const [page, setPage] = useState<AdminPages>('Инфо')
  const [mobilePage, setMobilePage] = useState<string>('Инфо' as AdminPages)
  const links = ['Инфо', 'Cписок юзеров']

  return (
    <div className={styles.admin}>
      <div className={styles.mobileToolbar}>
        <Select
          active={mobilePage}
          setActive={setMobilePage}
          variant='black'
          showTitle={false}
          title={mobilePage}
          options={links}
        />
      </div>
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
