import { IPost } from '../../../actions/types'
import * as React from 'react'
import Wrapper, { Excerpt, Publisher, Title } from './styled'

type Props = Pick<IPost, 'title' | 'publisher' | 'excerpt' | 'url'>

const Link: React.SFC<Props> = ({ title, publisher, excerpt, url }) => (
  <Wrapper>
    <a href={url} target="_blank">
      <Title>{title}</Title>
      <Publisher>{publisher}</Publisher>
    </a>
    <Excerpt>{excerpt}</Excerpt>
  </Wrapper>
)

export default Link
