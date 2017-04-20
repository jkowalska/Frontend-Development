var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');
keyups.throttleTime(500).map(function(x) {
        return q.val();
    })
    .switchMap(function(x) {
        return searchWikipedia(x)
    })
    .do(function(x) {
        toTableRow(x);
    })
    .subscribe(function(x) {  
        $('#results').text(toTableRow(x));           
    });

function toTableRow(x) {
    let myTable = document.getElementById("myTable");
    let rowCount = myTable.rows.length; 
        while(myTable.rows[0]) {
            myTable.deleteRow(0);
            }
    if(x[1] != null || typeof x[1] != 'undefined') {
        for(let i=0; i<x[1].length; i++) {
            let myRow = myTable.insertRow(0);
            let myCell1 = myRow.insertCell(0);
            let myCell2 = myRow.insertCell(1);           
            myCell1.innerHTML =`<p align="left"><a href=${x[3][i]}>${x[1][i]}</a></p>`;
            myCell2.innerHTML =`<p align="justify">${x[2][i]}</p>`;
        }
    }
}

function searchWikipedia(term) {
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}
