var Film = (function() {
	function Film(json) {
		this.tytul = json.tytul;
		this.rezyser = json.rezyser;
		this.rok = json.rok;
		this.gatunek = json.gatunek;
		this.kraj = json.kraj;
	}	

	Film.prototype.toTableRow = function() {
		return '<tr><td>'
		+ this.tytul
		+ '</td><td>'
		+ this.rezyser
		+ '</td><td>'
		+ this.rok
		+ '</td><td>'
		+ this.gatunek
		+ '</td><td>'
		+ this.kraj
		+ '</td></tr>';
	}
	return Film;
})();

var ListOfFilmy = (function () {
	function ListOfFilmy() {
        this.filmy = [];
	}

	ListOfFilmy.prototype.addFilm = function(json) {
		this.filmy.push(new Film(json));
	}

	ListOfFilmy.prototype.toTable = function() {
		var self = this;
		self.table = '<table>';
		self.table += this.generateTableHeader();
		for(var i=0; i<this.filmy.length; i++) {
			self.table += this.filmy[i].toTableRow();
		}
		self.table += '</table>';
		return self.table;
	}

	ListOfFilmy.prototype.generateTableHeader = function() {
		return '<tr><th>Tytul</th> <th>Rezyser</th> <th>Rok</th> <th>Gatunek</th> <th>Kraj</th></tr>';
	}	
	return ListOfFilmy;
})();

function init() {
	var req = new XMLHttpRequest();
	req.onload = reqListener;
	req.open("get", "./data.json", true);
	req.send();
	var json;

	function reqListener(e) {
   		json = JSON.parse(this.responseText);
   		var listOfFilmy = new ListOfFilmy();
    	for(var i=0;json.length>i;i++) {
        	listOfFilmy.addFilm(json[i]);
        }

    	var context = document.getElementById('table');
		context.innerHTML = listOfFilmy.toTable();
	}
}
