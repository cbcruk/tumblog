import { IPost } from '@/actions/types'
import * as React from 'react'
import Footer from './Footer'
import Link from './Link'
import Photo from './Photo'
import Wrapper from './styled'

const Post: React.SFC<IPost> = ({
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
