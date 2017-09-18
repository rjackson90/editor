// JS deps
var React = require('react')
var ReactDOM = require('react-dom')
var CodeMirror = require('react-codemirror')

// CSS deps
require('./index.css')
require('codemirror/lib/codemirror.css')

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { code: "// Code goes here" }
	}

	updateCode(newCode) {
		this.setState({
			code: newCode
		})
	}

	render() {
		var options = { lineNumbers: true }
		return(
			<div className="vertical-bag">
				<div className="title">Hello, World!</div>
				<CodeMirror 
					value={this.state.code}
					onchange={this.updateCode}
					options={options}
				/>
			</div>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);
