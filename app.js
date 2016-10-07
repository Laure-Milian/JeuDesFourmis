(function() { 

	// Pour créer le tableau
	creertableau(15, 15);

	function creertableau(colonnes, lignes) {
		for (var i = 0 ; i < colonnes ; i++) {
			$("table").append("<tr></tr>");
		}
		for (var i = 0 ; i < lignes ; i++) {
			$("tr").append("<td></td>");
		}
	};

	// Variables globales
	var $cases = $("td");
	var $casefourmi1 = $($cases[65]);
	var fourmi1 = "#";
	$casefourmi1.html(fourmi1);
	console.log($casefourmi1);


	// Lancement des déplacements
	var objPositionFourmi1 = $casefourmi1.offset();

	setInterval(function() {

		var queldeplacement = getRandom();
		console.log(queldeplacement);

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