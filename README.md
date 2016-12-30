## Demonstration of a grid component in react-redux-form

This is a minimal app, built to demonstrate a difficulty the author has experienced with array-based grids based on react-redux-form.

The demo can be run using `npm install && npm start`. The browser should then open, and show a basic form including a grid display. Below, the state is shown in a serialized format. Note how the state is changed correctly if the values in the grid are changed. Now, add a row and again manipulate the values in the grid. If one of the previously visible values is changed, the row disappears. If one of the new fields is changed, an exception is thrown.
