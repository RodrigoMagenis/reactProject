import React, {Component} from 'react';
export default class BotaoCustomizado extends Component {
	render() {
		return (
			<div className="pure-control-group">                              
				<label>{this.props.label}</label> 
				<button id={this.props.id} type={this.props.type} className={this.props.className}>{this.props.title}</button>                                    
			</div>
		);
	}
}