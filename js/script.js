/* 
* TP PHYSIQUE 1
*/

// Preload functions

function fix(n,f) {
    return Number(n.toFixed(f));
}

// Mesures

var mesures = [
    13.700, 13.714, 13.720, 13.743, 13.733, 13.742, 13.748, 13.745, 13.725, 13.754,
    13.741, 13.712, 13.732, 13.726, 13.748 ,13.735, 13.726, 13.701, 13.731, 13.751,
    13.768, 13.737, 13.704, 13.742, 13.727, 13.743, 13.714, 13.721, 13.743, 13.745,
    13.719, 13.730, 13.717, 13.703, 13.739, 13.729, 13.749, 13.710, 13.722, 13.749,
    13.734, 13.716, 13.749, 13.713, 13.720, 13.738, 13.723, 13.740, 13.735, 13.765,
    13.755, 13.757, 13.775, 13.764, 13.753, 13.765, 13.778, 13.762, 13.758, 13.780,
]

// Classes

var classes = [];

for(var i = 0; i < 10; i++) {
    var a = i / 100;
    var b = (i + 1) / 100;
    var n = 13.7;
    classes.push([fix(a + n, 2), fix(b + n, 2)]);
}

// Valeurs centrales

var valeursCentrales = classes.map(function(n) {
    return fix(n[0] + 0.005, 3);
});

// Effectifs

var effectifs = Array(10).fill(0);

/* 
* We want to :
* Get an array of 10 elements from [mesures arr]
* Each element represent an array of 10 numbers
* The result is the first table on the page
*/
var mesuresSliced = Array.from({length: 6}, e => []);

for(var i = 0; i < mesures.length; i++) {
    // For the effectifs
    var n  = mesures[i];
    var frac = Math.floor(n * 100) % 10;
    effectifs[frac]++;
    // For the mesures sliced
    var indx = Math.floor(i / 10);
    mesuresSliced[indx].push(n.toString().padEnd(6,'0'));
}

// Get Points

var points = Array.from({length: 10}, function(e) {
    return {x: null, y: null};
});

for(var i = 0; i < points.length; i++) {
    // Get (valeursCentrales) between 0 and 10
    points[i].x = fix((valeursCentrales[i] - 13.7) * 100,2);
    points[i].y = effectifs[i];
}
