import { withLayout } from '@/layout/Layout'
import styles from '../styles/NotFound.module.scss'
import Image from 'next/image'

import notFound from '../public/images/bg404.png'
import { Button } from '@/components'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <Image src={notFound} alt='' />
      <span className={styles.title}>Страница не найдена</span>
      <Button
        className={styles.button}
        variant='green'
        text='Вернуться на главную'
      />
    </div>
  )
}

export default withLayout(NotFound)
