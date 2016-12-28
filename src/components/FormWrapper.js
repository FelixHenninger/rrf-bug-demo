import React from 'react'
import Form from './Form'

export const FormWrapper = (props) =>
  <div>
    <Form />
  </div>

// Arbitrary connection to redux store
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  someProp: 'someValue'
})

export const ConnectedFormWrapper = connect(mapStateToProps)(FormWrapper)
