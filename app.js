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

function loadPresidentTask() {
    
    var randomID = Math.floor(Math.random() * 3)

    if (randomID == 0) {

        var imgPath = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/1200px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg"

        console.log(randomID);
        // console.log(document.getElementById(presidentImg).src);
        document.getElementById("level2presidentImg").src = imgPath;
        document.getElementById("level2presidentImg").name = "george washington"
    } else if (randomID == 1) {
        
        var imgPath = "https://upload.wikimedia.org/wikipedia/commons/4/44/Abraham_Lincoln_head_on_shoulders_photo_portrait.jpg"

        console.log(randomID);
        // console.log(document.getElementById(presidentImg).src);
        document.getElementById("level2presidentImg").src = imgPath;
        document.getElementById("level2presidentImg").name = "abraham lincoln"
    } else if (randomID == 2) {
        
        var imgPath = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/BenFranklinDuplessis.jpg/1200px-BenFranklinDuplessis.jpg"

        console.log(randomID);
        // console.log(document.getElementById(presidentImg).src);
        document.getElementById("level2presidentImg").src = imgPath;
        document.getElementById("level2presidentImg").name = "benjamin franklin"
    }
}

function Level2CheckPresidentName() {
    let inputValue = document.getElementById("level2presidentName").value;
    // console.log(inputValue.toLowerCase());
    if (inputValue.toLowerCase() == document.getElementById("level2presidentImg").name) {
        alert("Das war richtig! Gratuliere!");
        window.location.href = 'levelthree_des.html';
    } else {
        alert("Das war falsch :(\n\nProbiere es nochmal...");
    };
}

// Level Two App -> Level Three Decription
function getPresidentName() {
    window.location.href = 'levelthree_des.html';
}

// Level Three Decription -> Level Three App
function getLevelThree() {
    window.location.href = 'levelthree.html';
}

// Level Three App
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8","9","10"]
var x = 0;

async function getNumberBlocks() {
    if (x <= 6) {
        
        var i = numbers.splice(Math.random() * numbers.length, 1)[0];
                
                var api = "https://61867a63cd8530001765ab06.mockapi.io/olhafa/telnumbers/" + i;
                var response = await fetch(api);
                var data = await response.json();
                var { Klettercluster } = data;
                
            if (Klettercluster == "20"|| Klettercluster == "22"|| Klettercluster == "23"|| Klettercluster == "25"|| Klettercluster == "27"|| Klettercluster == "29") {
                document.getElementById('i').innerHTML = i;
                document.getElementById('Kletterpunkt').innerHTML = Klettercluster;
                document.getElementById("status").innerHTML = "Kletterpunkt gefunden";

                var checkKP = document.getElementById(Klettercluster).id;

                document.getElementById('CheckKP').innerHTML = checkKP;

                if (Klettercluster == checkKP) {
                    document.getElementById(Klettercluster).style.display = "block"; 
                }
                else{}

                x++;

                document.getElementById("x").innerHTML = x;
            }
            else {
                document.getElementById('i').innerHTML = i;
                document.getElementById('Kletterpunkt').innerHTML = Klettercluster;
                document.getElementById("status").innerHTML = "Kletterpunkt nicht gefunden";
                }
        }
}

function clearInput() {
    document.getElementById("telnum").value = "";
}

function putNum(val) {
    result = document.getElementById('telnum');
    result.value = result.value + val;
}

function checkNumber() {
    let inputValue = document.getElementById("telnum").value;
    var soltelnum = "01-562-6917439"
    if (inputValue.toLowerCase() == soltelnum) {

        alert("Das war richtig! Gratuliere!");

        window.location.href = 'levelfour_des.html';

    } else {

        alert("Das war falsch :(\n\nProbiere es nochmal...");

    };
}

// Level Three App -> Level Four Decription


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