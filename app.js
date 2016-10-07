(function() { 

	// Pour créer le tableau
	creertableau(15, 15);
	var $casefourmi1

	function creertableau(colonnes, lignes) {
		for (var i = 0 ; i < colonnes ; i++) {
			$("table").append("<tr></tr>");
		}
		for (var i = 0 ; i < lignes ; i++) {
			$("tr").append("<td></td>");
		}
		var max = colonnes * lignes;
		var min = 0
		var numeroCase = getRandomIntInclusive(min, max);
		console.log(numeroCase);
		var $cases = $("td");
		$casefourmi1 = $($cases[numeroCase]);
		var fourmi1 = "#";
		$casefourmi1.html(fourmi1);
	};

	
	function getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min +1)) + min;
	}


	// Lancement des déplacements
	var objPositionFourmi1 = $casefourmi1.offset();

	setInterval(function() {

		var queldeplacement = getRandom();

		if (queldeplacement <= 0.25) {
			objDeplacements["droite"]();
		} else if (queldeplacement <= 0.5) {
			objDeplacements["gauche"]();
		} else if (queldeplacement <= 0.75) {
			objDeplacements["haut"]();
		} else {
			objDeplacements["bas"]();
		}
		
	}, 1000);

	var objDeplacements = {
		droite : function deplacementdroite() {
			objPositionFourmi1["left"] = objPositionFourmi1["left"] + 50;
			$casefourmi1.offset({ left: objPositionFourmi1["left"] });
		},
		gauche : function deplacementgauche() {
			objPositionFourmi1["left"] = objPositionFourmi1["left"] - 50;
			$casefourmi1.offset({ left: objPositionFourmi1["left"] });
		},
		haut : function deplacementhaut() {
			objPositionFourmi1["top"] = objPositionFourmi1["top"] - 50;
			$casefourmi1.offset({ top: objPositionFourmi1["top"] });
		},
		bas : function deplacementbas() {
			objPositionFourmi1["top"] = objPositionFourmi1["top"] + 50;
			$casefourmi1.offset({ top: objPositionFourmi1["top"] });
		},
	}


	function getRandom() {
		return Math.random();
	}


})();