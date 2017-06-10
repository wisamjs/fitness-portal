import React from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

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

  return {
    standards: standards
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const Standards = ({standards}) => {
  const mapIndex = R.addIndex(R.map);
  const standardLevels = R.map(R.prop('name'), standards.levels);
  // const standardExercises = R.map(R.prop('name'), standards.exercises);
  const groupByExerciseId = R.groupBy(R.prop('exerciseId'));
  const listofRows = R.values(groupByExerciseId(standards.standards));

  const columnHeaders = standardLevels.map((label, id) =>
    <TableHeaderColumn key={id}>{label}</TableHeaderColumn>
    );

  const body = listofRows.map((row, id) => {
    const columns = mapIndex((column, columnKey) => <TableRowColumn 
      key={id + '' + columnKey}>
        {column.standard}
    </TableRowColumn> ,row);

    return <TableRow key={id} selected={false}>
      {columns}
    </TableRow>

  })

  return (
    <Table>

      <TableHeader
      displaySelectAll={false}
      adjustForCheckbox={false}>
        <TableRow>
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
