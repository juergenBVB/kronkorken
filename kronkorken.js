javascript:(

function (){
	
	var str = prompt("Bitte Tans mit Komma getrennt eingeben", "");
	var tans = str.split(",");
	for (i=0; i < tans.length; i++ ) {
  			tans[i] = tans[i].trim();
  		}
	partA1();

	function partA1(){
		
		button = document.getElementById('btn_vote_active');
		
		if (button != null){		
			document.getElementById('btn_vote_active').children[0].click();
		}
		setTimeout(partA, 3000);
	}
	

	function partA(){
		
		/*console.log('Tans verbleibend: ' + tans.length);
		for (i=0; i < tans.length; i++ ) {
  			console.log(tans[i]);
  		}*/

		if (tans.length == 0){
		console.log('Alle Tans wurden eingegeben');
		return;
		}
		
		var tan = document.getElementById('TB_iframeContent').contentDocument.getElementById('tan');
		
		if(tan == null){
				taneingabe = tans.pop();
				console.log("Fehler bei " + taneingabe);
				setTimeout(partC, 4000);
		} else {
			taneingabe = tans.pop();
			console.log(taneingabe + " wird eingegeben.");
			tan.value = taneingabe;
			document.getElementById('TB_iframeContent').contentDocument.getElementById('submit').click();
			setTimeout(partB,2000);
		}
	}
	
	function partB(){
		
		var email = document.getElementById('TB_iframeContent').contentDocument.getElementById('lead_daten_email_value');
		
		if(email == null){
				console.log("Fehler bei " + taneingabe);
				setTimeout(partC, 4000);
		} else {
			email.value = 'juser.huber@gmail.com';
			document.getElementById('TB_iframeContent').contentDocument.getElementById('submit').click();
			setTimeout(partC,2000);
		}
	}

	function partC(){
				
		document.getElementById('TB_iframeContent').contentWindow.location.href=document.getElementById('TB_iframeContent').contentWindow.location.href;
		setTimeout(partA,2000);
	}
}


)();
