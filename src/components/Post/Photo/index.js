import React from 'react'
import classNames from 'classnames'
import { Image, Summary } from './styled'

const Photo = ({ photos, original_size, summary }) => {
  const src = photos[0].alt_sizes[2].url
  const isLow = photos[0].original_size.width < 540

  return (
    <div className="Photo">
      <Image
        data-src={src}
        alt=""
        className={classNames({
          lozad: true,
          'is-low': isLow
        })}
      />
      {summary ? <Summary>{summary}</Summary> : null}
    </div>
  )
}

export default Photo
