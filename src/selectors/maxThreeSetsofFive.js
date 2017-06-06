// import { createSelector } from 'reselect';
// import { CORE_EXERCISES } from '../utils/constants';
// import {
//   getSpecificExercise,
//   getSetsFor,
//   getSetsWithFiveReps,
//   getSortedSets,
//   getSortedMaxSetPerWorkout,
//   getSetsWithDates,
//   getFiveSetsofFive,
//   groupSetsByWorkout
// } from './exerciseSelectors';

// import { getState } from './utils';

// export const statsForMaxThreeSetOfFive = createSelector(
// 	getState,
// 	(state) => {
// 		return CORE_EXERCISES.map((exerciseName) => {
// 			const coreExercise = getSpecificExercise(exerciseName);
// 			const workingSets = getSetsFor(coreExercise);
// 			const setsWithFiveReps = getSetsWithFiveReps(workingSets);
// 			const maxSetsWithFiveReps = getSortedSets(setsWithFiveReps);
// 			const workoutsWithThreeRepSets = groupSetsByWorkout(maxSetsWithFiveReps);
// 			const threeSetOfFives = getThreeSetsOfFive(workoutsWiththreeRepSets);

// 			const sortedThreeSetOfFives = getSortedMaxSetPerWorkout(threeSetOfFives);

// 			return {
// 				exerciseName: exerciseName,
// 				description: 'Most weight lifted in 5 sets of 5 reps',
// 				data: getSetsWithDates(sortedThreeSetOfFives)(state)
// 			}
// 		});
// 	});

