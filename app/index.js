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
		this.state = { 
			code: "// Code goes here",
			content: "Write your content here!"
		}
	}

	updateCode(newCode) {
		this.setState({
			code: newCode,
			content: this.state.content
		})
	}

	updateContent(newContent) {
		this.setState({
			code: this.state.code,
			content: newContent
		})
	}

	render() {
		var options = { lineNumbers: true }
		return(
			<div className="vertical-bag">
				<div className="title">Editors</div>
				<CodeMirror 
					value={this.state.code}
					onchange={this.updateCode}
					options={options}
				/>
				<CodeMirror
					value={this.state.content}
					onchange={this.updateContent}
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
