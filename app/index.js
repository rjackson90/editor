// JS deps
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from "react-redux"

import Editor from './components/editor.js'
import store from './store'

// CSS deps
require('./index.css')

@connect((store) => {
	return {
		source: store.source
	}
})
class App extends React.Component {
	render() {
		return(
			<div className="horizontal-bag">
				<div className="vertical-bag">
					<Editor
						className="item"
						title="HTML" 
						default="// Code goes here..."
					/>
					<Editor
						className="item"
						title="Content (YAML)" 
						default="Write your content here"
					/>
				</div>
				<div className="vertical-bag">
					<div className="item">
						<p>Placeholder</p>
					</div>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);
