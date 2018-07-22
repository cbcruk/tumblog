import React from 'react'
import Wrapper, { Tags, Source } from './styled'

const Footer = ({ source_url, source_title, tags }) => {
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
