const options = () => {
 return {
 	method: 'GET',
 	mode: 'no-cors',
 	headers: {
 		'Content-Type': 'application/json'
    }
	}
}

export const getWorkouts = () =>
fetch('http://fitness-portal-api.herokuapp.com/workouts', options)
	.then(resp => resp.json());