import {fetchFromApi} from './utils';

export const getWorkingSets = () =>
fetchFromApi('GET', 'workingSets')
	.then(resp => resp.json());