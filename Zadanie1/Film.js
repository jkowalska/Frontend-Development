var Film = (function(json) {
	var self = this;
	function Film(json) {
		self.tytul = json.tytul;
		self.rezyser = json.rezyser;
		self.rok = json.rok;
		self.gatunek = json.gatunek;
		self.kraj = json.kraj;
	}	

	Film.prototype.toTableRow = function() {
		return '<tr><td>'
		+ self.tytul
		+ '</td><td>'
		+ self.rezyser
		+ '</td><td>'
		+ self.rok
		+ '</td><td>'
		+ self.gatunek
		+ '</td><td>'
		+ self.kraj
		+ '</tr></td>';
	}
	return Film;
})();

function ListOfFilmy() {
	var filmy = [];
	var self = this;

	self.addFilm = function(json) {
		filmy.push(new Film(json));
	}

	self.toTable = function() {
		var table = '<table>';
		table += generateTableHeader();
		for(var i=0; i<filmy.length; i++) {
			table += filmy[i].toTableRow();
		}
		table += '</table>';
		console.log(table);
		return table;
	}

	var generateTableHeader = function() {
		return '<tr><th>Tytul</th> <th>Rezyser</th> <th>Rok</th> <th>Gatunek</th> <th>Kraj</th></tr>';
	}
}

function init() {
	var req = new XMLHttpRequest();
	req.onload = reqListener;
	req.open("get", "./data.json", true);
	req.send();
	var json;

	function reqListener(e) {
   		json = JSON.parse(this.responseText);
   		listOfFilmy = new ListOfFilmy();
    	for(var i=0;json.length>i;i++) {
        	listOfFilmy.addFilm(json[i]);
        }

    	var context = document.getElementById('table');
		context.innerHTML = listOfFilmy.toTable();
	}
}
