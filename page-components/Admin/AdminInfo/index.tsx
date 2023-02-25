import { Card, PointsCard } from '@/page-components'
import styles from './AdminInfo.module.scss'

export const AdminInfo = () => {
  return (
    <div className={styles.info}>
      <Card title='Задания'>
        <PointsCard value={49} title='Количество' />
        <PointsCard value={2791} title='Решено' />
      </Card>
    </div>
  )
}
