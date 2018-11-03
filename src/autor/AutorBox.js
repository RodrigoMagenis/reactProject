import React, { Component } from 'react';
import FormularioAutor      from './FormularioAutor';
import TabelaAutor          from './TabelaAutor';
import $ from 'jquery';

export default class AutorBox extends Component {

	constructor() {
    	super();
    	this.state = {lista: []};
    	this.setLista = this.setLista.bind(this);
    }

	componentDidMount() {
		$.ajax({
	    	url:"http://cdc-react.herokuapp.com/api/autores",
	    	dataType: 'json',
	    	success:function(resposta) {
	      	this.setState({lista:resposta});
	    	}.bind(this)
		})
	}

	setLista( novaLista ) {
		this.setState( {lista:novaLista} );
	}

	render() {
		return (
			<div className="content" id="content">
	            <FormularioAutor setLista={this.setLista}/>
	            <TabelaAutor lista={this.state.lista}/>            
            </div>
		);
	}
}