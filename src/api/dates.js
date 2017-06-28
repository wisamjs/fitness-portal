import {fetchFromApi} from './utils';

export const getDates = () =>
fetchFromApi('GET', 'dates')
	.then(resp => resp.json());