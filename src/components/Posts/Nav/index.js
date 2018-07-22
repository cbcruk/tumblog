import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { createSelector } from 'reselect'
import Wrapper, { Button } from './styled'

const Nav = ({ match, last }) => {
  const page = parseInt(match.params.page, 10) || 1
  const prev = page - 1
  const next = page + 1

  return (
    <Wrapper>
      {prev ? (
        <Button to={`/page/${prev}`} className="is-prev">
          이전
        </Button>
      ) : null}

      {last >= next ? (
        <Button to={`/page/${next}`} className="is-next">
          다음
        </Button>
      ) : null}
    </Wrapper>
  )
}

const getLastPage = createSelector(
  [state => state.posts.total_posts],
  totalPosts => Math.floor(totalPosts / 5)
)

const mapStateToProps = state => ({
  last: getLastPage(state)
})

export default withRouter(connect(mapStateToProps)(Nav))
