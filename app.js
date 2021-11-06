// Randomizer for Zahlen von 1 - 10
var numbers = ["1","2","3","4","5","6","7","8",]
var x = 0;

async function getPresidents() {
var i = numbers[Math.floor(Math.random()*numbers.length)]
    if (x<=5) {
        if (i>0 && i<6) {
            var api = "https://61867a63cd8530001765ab06.mockapi.io/olhafa/presidents/"+i;
                var response = await fetch(api);
                var data = await response.json();
                var { name, year, imgPath } = data;

                document.getElementById('name').textContent = name;
                document.getElementById('year').textContent = year;
                document.getElementById('img').src = imgPath;
                document.getElementById('i').innerHTML = i;
                document.getElementById("demo").innerHTML = "Nice gefunden"  
            x++; 
        }
        else {
            document.getElementById('i').innerHTML = i;
            document.getElementById("demo").innerHTML = "Das war leider kein richtiger Kletterpunkt"
        }
    }
    else{
        document.getElementById("demo").innerHTML = "Next Page"
    }
}