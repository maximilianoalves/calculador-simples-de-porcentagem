javascript: void((
	function(f) { 
		var pegaValor = prompt('Digite o valor desejado:');
		var pegaPorcentagem = prompt("Digite a pocentagem desejada: ");
		valor = pegaValor.replace(',','.');
		porcentagem = pegaPorcentagem.replace(',','.');
		valor = parseFloat(valor);
		porcentagem = parseFloat(porcentagem);
		resultado = valor * porcentagem / 100;
		desconto = valor - resultado;
		acrescimo = valor + resultado;

		alert('Resultado: ' + resultado + '\n' + 'Desconto de : ' + desconto + '%\n' + 'Acrescido ao valor: ' + acrescimo  );
	})());