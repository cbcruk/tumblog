import styled from 'styled-components'

export default styled.div`
  padding: 16px;
  background-color: #484848;

  > a {
    display: block;
    text-decoration: none;
    color: #fff;
  }
`

export const Title = styled.strong`
  background-color: transparent;
  transition: 0.5s all;

  &::after {
    content: ' >';
  }

  &:hover {
    background-color: #fce4ec;
    color: #484848;
  }
`

export const Publisher = styled.p`
  font-size: 12px;
  opacity: 0.8;
`

export const Excerpt = styled.p`
  margin-top: 12px;
  color: #fff;
`
