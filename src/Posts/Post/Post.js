import React from 'react'
import Media from './Media'
import Meta from './Meta'
import Texts from './Texts'
import styles from './style.module.css'

function Post({ id, content, timestamp, noteCount, postUrl, sourceUrl, date }) {
  const image = content.find((content) => content.type === 'image')
  const texts = content.filter((content) => content.type === 'text')

  return (
    <div key={id} className={styles.wrapper}>
      <div className={styles.content}>
        {image && <Media image={image} sourceUrl={sourceUrl} />}
        <div className={styles.details}>
          <Texts texts={texts} />
          <Meta
            date={date}
            timestamp={timestamp}
            noteCount={noteCount}
            postUrl={postUrl}
          />
        </div>
      </div>
    </div>
  )
}

export default Post
