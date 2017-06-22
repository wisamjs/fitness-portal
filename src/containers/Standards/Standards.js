import React from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import { strengthSelectors } from '../../selectors/selectors';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

window.R = R;

function mapStateToProps({workouts, preferences, standards}) {
  const selectors = strengthSelectors(standards);
  window.workouts = workouts;

  return {
    standards: standards,
    levelLabels: selectors.levelLabels,
    rowData: selectors.standardsRowData
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const Standards = ({standards, levelLabels, rowData}) => {
  const mapIndex = R.addIndex(R.map);

  const standardExercises = R.map(R.prop('name'), standards.exercises);

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
