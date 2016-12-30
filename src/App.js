import React, { Component } from 'react';
import './App.css';

import { LocalForm, Control } from 'react-redux-form'

import GridControl from './components/GridControl'
import StatePreview from './components/StatePreview'

class App extends Component {
  render() {
    return (
      <div className="App">

        <h2>Grid Component</h2>
        <LocalForm
          initialState={ this.props.state }
          onChange={ data => this.context.store.dispatch({
            type: 'UPDATE_STATE',
            data,
          })}
        >
          <Control.text model='.title' />
          <GridControl
            model='.grid'
            data={ this.props.state.grid }
            onAddRow={
              () => this.context.store.dispatch({
                type: 'UPDATE_STATE',
                data: {
                  ...this.props.state,
                  grid: [
                    ...this.props.state.grid,
                    Array.apply(null, Array(this.props.state.grid[0].length))
                      .map(String.prototype.valueOf, "")
                  ]
                }
              })
            }
          />
        </LocalForm>

        <h2>State preview</h2>
        <StatePreview />

      </div>
    )
  }
}

App.contextTypes = {
  store: React.PropTypes.object
}

import { connect } from 'react-redux'

export default connect(
  (state, ownProps) => ({
    state,
  })
)(App)
