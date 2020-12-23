import React from 'react'
import styles from './style.module.css'

function Media({ image, sourceUrl }) {
  const { url, width, height, colors } = image.media[2]

  return (
    <div
      className={styles.wrapper}
      style={{
        '--width': width,
        '--height': height,
        '--gradient-start': `#${colors.c0}`,
        '--gradient-end': `#${colors.c1}`
      }}
    >
      <a href={sourceUrl} target="_blank" rel="noreferrer">
        <img src={url} alt="" loading="lazy" className={styles.image} />
      </a>
    </div>
  )
}

export default Media
