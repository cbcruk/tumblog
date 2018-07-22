import React from 'react'
import Footer from './Footer'
import Wrapper from './styled'
import Photo from './Photo'
import Link from './Link'

const Post = ({
  type,
  photos,
  summary,
  title,
  publisher,
  excerpt,
  url,
  tags,
  source_title,
  source_url
}) => {
  const isPhoto = type === 'photo'
  const isLink = type === 'link'

  return (
    <Wrapper>
      {isPhoto && <Photo {...{ photos, summary }} />}
      {isLink && <Link {...{ title, publisher, excerpt, url }} />}

      <Footer {...{ tags, source_title, source_url }} />
    </Wrapper>
  )
}

export default Post
