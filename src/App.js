import React, { Component } from 'react';
import './App.css';

import { LocalForm, Control, actions } from 'react-redux-form'

import GridControl from './components/GridControl'
import StatePreview from './components/StatePreview'

const addGridRow = (grid) =>
  [
    ...grid,
    Array.apply(null, Array(grid[0].length))
      .map(String.prototype.valueOf, "")
  ]

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
          getDispatch={ dispatch => this.formDispatch = dispatch }
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
                  grid: addGridRow(this.props.state.grid)
                }
              })
            }
          />
          <div>
            <button onClick={ () => this.formDispatch(actions.change('.title', 'I just changed via the form\'s dispatch method!') )}>
              Change title via LocalForm dispatch
            </button>
            <button onClick={ () => this.formDispatch(actions.change('.grid[0][0]', 'Sweet!') )}>
              Change grid cell via LocalForm dispatch
            </button>
            <button onClick={ () => this.formDispatch(actions.change('.grid', addGridRow(this.props.state.grid)) )}>
              Add grid row via LocalForm dispatch
            </button>
          </div>
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
