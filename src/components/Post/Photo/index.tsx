import { IPost } from '../../../actions/types'
import classNames from 'classnames'
import * as React from 'react'
import { Image, Summary } from './styled'

type Props = Pick<IPost, 'photos' | 'summary'>

const Photo: React.SFC<Props> = ({ photos, summary }) => {
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
