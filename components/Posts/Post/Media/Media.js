import styles from './style.module.css'

function Media({ image, colors, sourceUrl }) {
  const { url, width, height } = image

  return (
    <div
      className={styles.wrapper}
      style={{
        '--width': width,
        '--height': height,
        '--gradient-start': `#${colors?.c0 ?? '#000'}`,
        '--gradient-end': `#${colors?.c1 ?? '#000'}`
      }}
    >
      <a href={sourceUrl} target="_blank" rel="noreferrer">
        <img src={url} alt="" loading="lazy" className={styles.image} />
      </a>
    </div>
  )
}

export default Media
