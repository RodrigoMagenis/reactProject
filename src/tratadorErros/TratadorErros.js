import PubSub from 'pubsub-js';
export default class TratadorErros {
	publicaErros( resposta ) {
		for ( var i = 0; i < resposta.errors.length; i++ ) {
			var erro = resposta.errors[i];
        	console.log(erro);
        	PubSub.publish("erro-validacao", erro);
		}
	}
}