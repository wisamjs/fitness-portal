import { statistics, statisticsByLift } from './exercises/exerciseSelectors';
import { levelLabels, standardsRowData } from './strength/strengthSelectors';
import { getAllTimePRs } from './records/recordSelectors';
import { createSelector } from 'reselect';


export const exerciseSelectors = createSelector(
  statistics, 
  statisticsByLift,
  (statistics, statisticsByLift) => {
    return {
      statistics,
      statisticsByLift
    }

  }
);

export const strengthSelectors = createSelector(
  levelLabels,
  standardsRowData,
  (levelLabels, standardsRowData) => {
    return {
      levelLabels,
      standardsRowData
    }
  }
);

export const recordSelectors = createSelector(
  getAllTimePRs,
  (getAllTimePRs) => {
    return {
     getAllTimePRs
    }
  });