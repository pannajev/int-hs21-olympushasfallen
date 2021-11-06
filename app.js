/* var api1 = "https://61867a63cd8530001765ab06.mockapi.io/olhafa/presidents/1";
async function getPresidents1() {
        var response = await fetch(api1);
        var data = await response.json();
        var { name, year, imgPath } = data;

        document.getElementById('name1').textContent = name;
        document.getElementById('img1').src = imgPath;
        document.getElementById('year1').textContent = year;
    }

var api2 = "https://61867a63cd8530001765ab06.mockapi.io/olhafa/presidents/2";
async function getPresidents2() {
        var response = await fetch(api2);
        var data = await response.json();
        var { name, year } = data;

        document.getElementById('name2').textContent = name;
        document.getElementById('year2').textContent = year;
    }
 
var api3 = "https://61867a63cd8530001765ab06.mockapi.io/olhafa/presidents/3";
async function getPresidents3() {
        var response = await fetch(api3);
        var data = await response.json();
        var { name, year } = data;

        document.getElementById('name3').textContent = name;
        document.getElementById('year3').textContent = year;
    }

var api4 = "https://61867a63cd8530001765ab06.mockapi.io/olhafa/presidents/4";
async function getPresidents4() {
        var response = await fetch(api4);
        var data = await response.json();
        var { name, year } = data;

        document.getElementById('name4').textContent = name;
        document.getElementById('year4').textContent = year;
    }

var api5 = "https://61867a63cd8530001765ab06.mockapi.io/olhafa/presidents/5";
async function getPresidents5() {
        var response = await fetch(api5);
        var data = await response.json();
        var { name, year } = data;

        document.getElementById('name5').textContent = name;
        document.getElementById('year5').textContent = year;
    }

*/
var numbers = ["1","2","3","4","5","6"] 
var i =  Math.floor(Math.random() * numbers.length);


// Randomizer for Zahlen von 1 - 10
//var i = 0;
async function getPresidents() {
    //i += 1;
    var numbers = ["1","2","3","4","5","6"] 
    var i =  Math.floor(Math.random() * numbers.length);
    
    
    var api = "https://61867a63cd8530001765ab06.mockapi.io/olhafa/presidents/"+i;
        var response = await fetch(api);
        var data = await response.json();
        var { name, year, imgPath } = data;

        document.getElementById('name').textContent = name;
        document.getElementById('img'+i).src = imgPath;
        console.log('img');
        document.getElementById('year').textContent = year;
        document.getElementById('i').innerHTML = i;
        console.log('president'+i);
        document.getElementById("president").firstChild.style = "";
}