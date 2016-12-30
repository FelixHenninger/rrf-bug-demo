import React from 'react'

const statePreview = ({ state }) =>
  <code>
    { JSON.stringify(state, null, 2) }
  </code>

import { connect } from 'react-redux'

export default connect(
  (state, ownProps) => ({
    state,
  })
)(statePreview)
