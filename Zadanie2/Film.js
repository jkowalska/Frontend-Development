class Film {
	constructor(json) {
		this.tytul = json.tytul;
		this.rezyser = json.rezyser;
		this.rok = json.rok;
		this.gatunek = json.gatunek;
		this.kraj = json.kraj;
	}

	toTableRow() {
		return `<tr><td>
		${this.tytul}</td><td>
		${this.rezyser}</td><td>
		${this.rok}</td><td>
		${this.gatunek}</td><td>
		${this.kraj}</tr></td>`;
	}
}

class listOfFilmy {
	constructor(){
		this.filmy = [];
		let self = this;
	}
	
	addFilm(json) {
		this.filmy.push(new Film(json));
	}

	toTable() {
		let table = `<tr><th>Tytul</th> <th>Rezyser</th> <th>Rok</th> <th>Gatunek</th> <th>Kraj</th></tr>`;
		
		for(let i=0; i<this.filmy.length; i++) {
			table += this.filmy[i].toTableRow();
		}

		table += `</table>`;
		return table;
	}
}

function init() {
	let req = new XMLHttpRequest();
	req.onload = reqListener;
	req.open("get", "./data.json", true);
	req.send();
	let json;

	function reqListener(e) {
   		json = JSON.parse(this.responseText);
   		listOfFilmy = new listOfFilmy();
    	for(let i=0; i<json.length; i++) {
        	listOfFilmy.addFilm(json[i]);
        }

    	let context = document.getElementById('table');
		context.innerHTML = listOfFilmy.toTable();
	}
}
