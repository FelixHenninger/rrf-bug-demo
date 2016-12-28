import React, { Component } from 'react'
import { LocalForm, Control } from 'react-redux-form'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }
  handleChange(values) {
    console.log('handling change', values)
    this.setState({
      username: values.username,
      password: values.password,
    })
  }
  handleUpdate(form) {
    console.log('handling update', form)
    this.setState({
      username: form.username ? form.username.value : '',
      password: form.password ? form.password.value : '',
    })
  }

  render() {
    return (
      <LocalForm
        onUpdate={(form) => this.handleUpdate(form)}
        onChange={(values) => this.handleChange(values)}
      >
        <Control.text model=".username" />
        <Control.text model=".password" />
        <dl>
          <dt>Username</dt>
          <dd>{ this.state.username }</dd>
          <dt>Password</dt>
          <dd>{ this.state.password }</dd>
        </dl>
      </LocalForm>
    );
  }
}

export default Form
