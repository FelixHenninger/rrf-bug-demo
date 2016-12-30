import React from 'react'
import { Control } from 'react-redux-form'

const GridRow = ({ data, rowIndex }) =>
  <tr>{
    data.map(
      (cell, colIndex) => <td key={ colIndex }>
        <Control.text
          model={ `.grid[${ rowIndex }][${ colIndex }]` }
          className="form-control code"
        />
      </td>
    )
  }</tr>

const GridControl = ({ data, onAddRow }) =>
  <table>
    <tbody>
      {
      data.map(
        (row, rowIndex) =>
          <GridRow key={ rowIndex } data={ row } rowIndex={ rowIndex }  />
      )
      }
      <tr>
        <td
          colSpan={ data[0].length }
          style={{ textAlign: 'center'}}
          onClick={ onAddRow }
        >
          add row
        </td>
      </tr>
    </tbody>
  </table>

export default GridControl
