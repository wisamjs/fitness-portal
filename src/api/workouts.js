import {fetchFromApi} from './utils';

export const getWorkouts = () =>
fetchFromApi('GET', 'workouts')
	.then(resp => resp.json());