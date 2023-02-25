import { Tag } from '@/components'
import { Tags } from '@/types/tags'
import { Chart } from './Chart'
import styles from './Points.module.scss'

export const Points = () => {
  return (
    <div className={styles.points}>
      <Chart />
      <div className={styles.tags}>
        <Tag active type={Tags.Administration} />
        <Tag active type={Tags.Crypto} />
        <Tag active type={Tags.Forensics} />
        <Tag active={false} type={Tags.Entertainment} />
        <Tag active={false} type={Tags.ReverseEngineering} />
        <Tag active={false} type={Tags.Steganography} />
        <Tag active={false} type={Tags.Web} />
        <Tag active={false} type={Tags.PWN} />
        <Tag active={false} type={Tags.Quest} />
      </div>
    </div>
  )
}
