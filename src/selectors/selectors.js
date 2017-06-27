import { statistics, statisticsByLift } from './exercises/exerciseSelectors';
import { levelLabels, standardsRowData } from './strength/strengthSelectors';
import { getAllTimePRs } from './records/recordSelectors';
import { createStructuredSelector } from 'reselect';


export const exerciseSelectors = createStructuredSelector({
  statistics, 
  statisticsByLift
});

export const strengthSelectors = createStructuredSelector({
  levelLabels,
  standardsRowData
});

export const recordSelectors = createStructuredSelector({
  getAllTimePRs
});