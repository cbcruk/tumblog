import Media from './Media'
import Meta from './Meta'
import Text from './Text'
import styles from './style.module.css'

function Post({ content, timestamp, note_count, post_url, source_url, date }) {
  const image = content.find((content) => content.type === 'image')
  const text = content.find((content) => content.type === 'text')

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {image && (
          <Media
            image={image.picture}
            sourceUrl={source_url}
            colors={image.colors}
          />
        )}
        <div className={styles.details}>
          {text && <Text>{text.text}</Text>}
          <Meta
            date={date}
            timestamp={timestamp}
            noteCount={note_count}
            postUrl={post_url}
          />
        </div>
      </div>
    </div>
  )
}

export default Post
