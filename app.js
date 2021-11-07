// Startsite 
function getIndex() {
    window.location.href = 'index.html';
}
// Begin with Level One Description
function getLevelOneDes() {
    window.location.href = 'levelone_des.html';
}

///// GAME /////------------------------------------------------------

// Level One Description -> Level One App
function getLevelOne() {
    window.location.href = 'levelone.html';
}

// Level One App
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8",]
var x = 0;

async function getPresidents() {
    var i = numbers.splice(Math.random() * numbers.length, 1)[0];
    if (x <= 4) {
        if (i > 0 && i < 6) {
            x++;
            var api = "https://61867a63cd8530001765ab06.mockapi.io/olhafa/presidents/" + i;
            var response = await fetch(api);
            var data = await response.json();
            var { name, year, imgPath } = data;

            document.getElementById('name' + i).textContent = name;
            document.getElementById('year' + i).textContent = year;
            document.getElementById('i').innerHTML = i;
            document.getElementById("demo").innerHTML = "Nice gefunden";
            document.getElementById('img' + i).src = imgPath;
            document.getElementById('president').style = "";
        }
        else {
            document.getElementById('i').innerHTML = i;
            document.getElementById("demo").innerHTML = "Das war leider kein richtiger Kletterpunkt"
            document.getElementById('numberofx').innerHTML = x;
        }
    }
    else {
// Level One App -> Level Two Decription
        window.location.href = 'leveltwo_des.html';
    }
}

// Level Two Description -> Level Two App
function getLevelTwo() {
    window.location.href = 'leveltwo.html';
}

// Level Two App
// Level Two App -> Level Three Decription
function getPresidentName() {
    window.location.href = 'levelthree_des.html';
}

// Level Three Decription -> Level Three App
function getLevelThree() {
    window.location.href = 'levelthree.html';
}

// Level Three App
// Level Three App -> Level Four Decription
function getNumberBlocks() {
    window.location.href = 'levelfour_des.html';
}

// Level Four Decription -> Level Four Game
function getLevelFour() {
    window.location.href = 'levelfour.html';
}

// Level Four App App
// Level Four App -> End Game
function getRepeat() {
    window.location.href = 'end.html'
}

///// GAME /////------------------------------------------------------