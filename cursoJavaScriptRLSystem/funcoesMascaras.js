

function maskDate(){
		//Vai pegar o dados atraves do id pegando o o tamanha do valor 
		// Pega o número de caracteres dentro do elemento 
		var nChar = document.getElementById("dateTxt").value.length;
		if (nChar == 2){
			document.getElementById("dateTxt").value = document.getElementById("dateTxt").value + "/";
		} else if (nChar == 5){ 
			document.getElementById("dateTxt").value = document.getElementById("dateTxt").value + "/";
		}
	
	}

	function maskCep(){
		var nCharCep = document.getElementById("cepTxt").value.length;
		if (nCharCep == 5){
		document.getElementById("cepTxt").value = document.getElementById("cepTxt").value + " - ";
		}
	}
	
	function maskTel(){
		var nCharTel =  document.getElementById("telTxt").value.length;
		
		if (nCharTel == 3){
			document.getElementById("telTxt").value = document.getElementById("telTxt").value + " ";
		} else if (nCharTel == 6){
		document.getElementById("telTxt").value = "(" + document.getElementById("telTxt").value + ")";
		} else if (nCharTel == 12) {
		document.getElementById("telTxt").value = document.getElementById("telTxt").value + "-";
		}
		
	}