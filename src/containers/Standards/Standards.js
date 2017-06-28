import React from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import { strengthSelectors } from '../../selectors/strength';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

window.R = R;

function mapStateToProps(state) {
  const selectors = strengthSelectors(state);

  return {
    standards: [],
    levelLabels: selectors.levelLabels,
    rowData: selectors.standardsRowData,
    exercises: selectors.exercises
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const Standards = ({levelLabels, rowData, exercises}) => {

  const mapIndex = R.addIndex(R.map);

  const standardExercises = R.map(R.prop('name'), exercises);

  const columnHeaders = levelLabels.slice(0, levelLabels.length - 3 ).map((label, id) =>
    <TableHeaderColumn key={id}>{label}</TableHeaderColumn>
    );

  const body = rowData.map((row, id) => {
    const columns = mapIndex((column, columnKey) => <TableRowColumn 
      key={id + '' + columnKey}>
        {column.standard}
    </TableRowColumn> ,row);

    return <TableRow key={id} selected={false}>
      <TableRowColumn>{standardExercises[id]}</TableRowColumn>
      {columns.slice(0, columns.length - 3 )}
    </TableRow>

  })

  return (
      <Table>

      <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}>
        <TableRow>
        <TableHeaderColumn>Exercises</TableHeaderColumn>
          {columnHeaders}
        </TableRow>
      </TableHeader>

      <TableBody displayRowCheckbox={false}>
          {body}     
      </TableBody>
    </Table>
  );

}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Standards);
