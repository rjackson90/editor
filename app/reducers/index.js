import { combineReducers } from "redux"

import sourceReducer from "./source.js"

export default combineReducers({
	source: sourceReducer
})
