// JS deps
var React = require('react')
var CodeMirror = require('react-codemirror')

// CSS deps
require('codemirror/lib/codemirror.css')

export default class Editor extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			text: props.default
		}
		this.codemirror_options = {
			lineNumbers: true
		}
	}

	handleChange(newText) {
		this.setState({
			text: newText
		})
	}

	render() {
		return(
			<div className={this.props.className}>
				<div className="title">{this.props.title}</div>
				<CodeMirror
					value={this.state.text}
					onchange={this.handleChange}
					options={this.codemirror_options}
				/>
			</div>
		)
	}
}

