import clsx from 'clsx'
import { Chart } from './Chart'
import styles from './Activity.module.scss'
import { Select } from '@/components'

export const Activity = () => {
  const years = ['2020', '2022', '2023']

  return (
    <div className={clsx(styles.activity)}>
      <div className={styles.chart}>
        <Chart />
      </div>
      <Select
        showTitle={false}
        className={styles.select}
        title={years[1]}
        options={years}
      />
    </div>
  )
}
