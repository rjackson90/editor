export default function reducer( state = {
		data: "",
		type: "",
		label: ""
	}, action) {
		
		switch(action.type) {
			case "UPDATE_SOURCE": {
				return {...state, data: action.payload }
			}
			case "UPDATE_TYPE": {
				return {...state, type: action.payload }
			}
			case "UPDATE_LABEL": {
				return {...state, label: action.payload }
			}
		}
	return state
}
