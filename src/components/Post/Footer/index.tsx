import { IPost } from '@/actions/types'
import * as React from 'react'
import Wrapper, { Source, Tags } from './styled'

type Props = Pick<IPost, 'source_url' | 'source_title' | 'tags'>

const Footer: React.SFC<Props> = ({ source_url, source_title, tags }) => {
  const hasSource = source_title && source_url
  const hasTags = tags.length > 0

  return (
    <Wrapper>
      {hasSource ? (
        <Source>
          출처:{' '}
          <a href={source_url} target="_blank">
            {source_title}
          </a>
        </Source>
      ) : null}
      {hasTags ? <Tags>{tags.map(tag => `#${tag}`).join(' ')}</Tags> : null}
    </Wrapper>
  )
}

export default Footer
