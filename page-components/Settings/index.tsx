import clsx from 'clsx'
import { useState } from 'react'
import { SettingsPage } from '@/types/settings'
import styles from './Settings.module.scss'
import { Button } from '@/components'
import { Edit } from './Edit'

export const Settings = () => {
  const [page, setPage] = useState<SettingsPage>('edit')

  return (
    <div className={styles.settings}>
      <div className={styles.toolbar}>
        <ul>
          <li
            className={clsx({ [styles.active]: page === 'edit' })}
            onClick={() => setPage('edit')}
          >
            Редактировать профиль
          </li>
          <li
            className={clsx({ [styles.active]: page === 'safety' })}
            onClick={() => setPage('safety')}
          >
            Безопасность
          </li>
          <li
            className={clsx({ [styles.active]: page === 'notifications' })}
            onClick={() => setPage('notifications')}
          >
            Уведомления
          </li>
        </ul>
      </div>
      {page === 'edit' && <Edit />}
      <div className={styles.buttons}>
        <Button
          className={styles.save}
          text='Сохранить изменения'
          variant='green'
        />
        <button className={styles.delete}>Удалить аккаунт</button>
      </div>
    </div>
  )
}
