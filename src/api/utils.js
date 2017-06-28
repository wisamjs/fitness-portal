export const apiBaseUrl = 'https://fitness-portal-api.herokuapp.com';
export const apiOptions = (method) => 
	() => {
		return {
	 	method: method,
	 	mode: 'cors',
	 	headers: {
	 		'Content-Type': 'application/json',
	 		'Access-Control-Allow-Origin':'*'
	    }
	  }
	}

export const fetchFromApi = (method, route) => 
	fetch(`${apiBaseUrl}/${route}`, apiOptions(method))
