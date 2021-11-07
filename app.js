// Randomizer for Zahlen von 1 - 10
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
        //document.getElementById("demo").innerHTML = "Next Page"
        window.location.href = 'levelone.html';
    }
}