// function to display tables

function displayTable(arrRows, parent) {
    for(var i = 0; i < arrRows.length; i++) {
        var row = document.createElement('tr');
        for(var j = 0; j < arrRows[i].length; j++) {
            var value = arrRows[i][j];
            var col = document.createElement('td');
            col.innerHTML = value;
            row.appendChild(col);
        }
        parent.appendChild(row);
    }
}

// Render :: (tableau de mesures)

var parentMesures = document.getElementById('mesures');
displayTable(mesuresSliced , parentMesures);

// Render ;; (la famille de classes)

var familyEl = document.getElementById('family');
var familyClass = classes.map(function([a,b]) {
    var li = document.createElement('li');
    li.innerHTML = `
    <b>[</b>
    ${a.toString().padEnd(5,'0')}, 
    ${b.toString().padEnd(5,'0')}
    <b>[</b>
    `
    return li;
});

for(var fam of familyClass) familyEl.appendChild(fam);

// Render :: (resultats experimentaux)

var resultatsEl = document.getElementById('result');
var classesNums = classes.map((e,i) => ++i);

var tableRows = [
    ['Classes (i)', ...classesNums],
    ['Valeurs Centrales Xi', ...valeursCentrales],
    ['Effectifs ni', ...effectifs]
]

displayTable(tableRows, resultatsEl);