import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 16px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  text-decoration: none;
  font-size: 12px;
  color: #212121;
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: box-shadow;

  &:hover,
  &:active {
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
      0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  &.is-prev {
    &::before {
      content: '<';
      margin-right: 1em;
    }
  }

  &.is-next {
    background-color: #212121;
    color: #fff;

    &::after {
      content: '>';
      margin-left: 1em;
    }
  }
`
