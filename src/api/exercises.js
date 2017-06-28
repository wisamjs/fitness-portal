import {fetchFromApi} from './utils';

export const getExercises = () =>
fetchFromApi('GET', 'exercises')
	.then(resp => resp.json());