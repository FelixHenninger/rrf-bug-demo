const defaultState = {
  title: 'Behold the fancy grid!',
  grid: [
    ['1a', '1b', '1c'],
    ['2a', '2b', '2c'],
    ['3a', '3b', '3c'],
  ]
}

const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      return {
        ...state,
        ...action.data,
      }
    default:
      return state
  }
}

export default reducer
