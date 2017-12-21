export function updateSource(source) {
	return {
		"type": "UPDATE_SOURCE",
		"payload": source
	}
}

export function updateType(type) {
	return {
		"type": "UPDATE_TYPE",
		"payload": type
	}
}

export function updateLabel(label) {
	return {
		"type": "UPDATE_LABEL",
		"payload": label
	}
}
