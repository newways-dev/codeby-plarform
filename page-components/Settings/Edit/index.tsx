import styles from './Edit.module.scss'
import { Input } from '@/components'

import Upload from '../../../public/icons/upload.svg'

export const Edit = () => {
  return (
    <>
      <div className={styles.edit}>
        <span>Изображение профиля</span>
        <div>
          <Upload />
          <span>Загрузите иконку</span>
        </div>
      </div>
      <div className={styles.inputs}>
        <Input
          className={styles.name}
          title='Полное имя'
          placeholder='Пожалуйста, введите свое полное имя'
          type='text'
        />
        <Input
          className={styles.telegram}
          title='Telegram:'
          placeholder='Вставьте ссылку'
          type='text'
        />
        <Input
          className={styles.nickname}
          title='Никнейм'
          placeholder='Пожалуйста, введите свой никнейм'
          type='text'
        />
        <Input
          className={styles.github}
          title='GitHub:'
          placeholder='Вставьте ссылку'
          type='text'
        />
        <Input
          className={styles.about}
          title='Обо мне'
          placeholder='Напишите здесь свою биографию, например, ваши хобби, интересы и т.д.'
          type='textarea'
        />
      </div>
    </>
  )
}
