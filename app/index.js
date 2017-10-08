// JS deps
var React = require('react')
var ReactDOM = require('react-dom')
import Editor from './components/editor.js'

// CSS deps
require('./index.css')

class App extends React.Component {
	render() {
		return(
			<div className="horizontal-bag">
				<div className="vertical-bag">
					<Editor 
						title="Code" 
						default="// Code goes here..."
					/>
					<Editor 
						title="Content" 
						default="Write your content here"
					/>
				</div>
				<div className="vertical-bag">
					<p>Placeholder</p>
				</div>
			</div>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);
