import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Upload } from './Upload'
import styles from './Modal.module.scss'

export interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: 'upload'
}

export const Modal = ({ className, type }: ModalProps) => {
  return (
    <div className={clsx(styles.modalWrapper, className)}>
      {type === 'upload' && <Upload />}
    </div>
  )
}
