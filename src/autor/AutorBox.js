import React, { Component } from 'react';
import FormularioAutor      from './FormularioAutor';
import TabelaAutor          from './TabelaAutor';
import $                    from 'jquery';
import PubSub               from 'pubsub-js';

export default class AutorBox extends Component {

	constructor() {
    	super();
    	this.state = {lista: []};
    }

	componentDidMount() {
		$.ajax({
	    	url:"http://cdc-react.herokuapp.com/api/autores",
	    	dataType: 'json',
	    	success:function(resposta) {
	      	this.setState({lista:resposta});
	    	}.bind(this)
		});
		
		PubSub.subscribe( 'atualiza-lista-autores', function(topico, novaLista) {
			this.setState({lista:novaLista});
		}.bind(this));
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