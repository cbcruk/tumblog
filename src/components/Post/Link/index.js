import React from 'react'
import Wrapper, { Title, Publisher, Excerpt } from './styled'

const Link = ({ title, publisher, excerpt, url }) => (
  <Wrapper>
    <a href={url} target="_blank">
      <Title>{title}</Title>
      <Publisher>{publisher}</Publisher>
    </a>
    <Excerpt>{excerpt}</Excerpt>
  </Wrapper>
)

export default Link
