import React from 'react'
import dayjs from 'dayjs'
import { IconNote } from '../../../Icons'
import styles from './style.module.css'

function Meta({ date, timestamp, noteCount, postUrl }) {
  const formattedDate = dayjs(date).format('DD/MM/YYYY')

  return (
    <div className={styles.wrapper}>
      <a
        href={postUrl}
        target="_blank"
        rel="noreferrer"
        title={formattedDate}
        className={styles.timestamp}
      >
        {timestamp}
      </a>
      {noteCount > 0 && (
        <div className={styles.count}>
          <IconNote className={styles.count_icon} /> {noteCount} notes
        </div>
      )}
    </div>
  )
}

export default Meta
