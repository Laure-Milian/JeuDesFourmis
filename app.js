(function() { 

	creertableau(15, 15);
	var $cases = $("td");
	var $casefourmi1 = $($cases[6]);
	var fourmi1 = "#";
	$casefourmi1.html(fourmi1);


	function creertableau(colonnes, lignes) {
		for (var i = 0 ; i < colonnes ; i++) {
			$("table").append("<tr></tr>");
		}
		for (var i = 0 ; i < lignes ; i++) {
			$("tr").append("<td></td>");
		}
	};

	setInterval(function() {

		deplacementgauche();


		function deplacementdroite() {
			$casefourmi1.html("");
			$casefourmi1 = $($casefourmi1).next("");
			$casefourmi1.html(fourmi1);
		}

		function deplacementgauche() {
			$casefourmi1.html("");
			$casefourmi1 = $($casefourmi1).prev("");
			$casefourmi1.html(fourmi1);
		}

		function deplacementbas() {
			$casefourmi1.html("");
			$casefourmi1 = $($casefourmi1).next("tr");
			$casefourmi1.html(fourmi1);
		}

	}, 1000);


})();