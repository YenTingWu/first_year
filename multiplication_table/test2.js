//makeAMultiplication

function makeAMultiplication (x) {

var multiplication1 = x + " " + x + " ";
document.write('<h1 style="text-align: center" id="Yo">' + multiplication1 + 'multiplication table</h1>');

document.write("<table style='margin: 50px auto; width: 1200px' id='multiplication-table'><tr><td></td>")

for (var i = 1; i <= x; i++) {
    document.write("<td style='border: 1px solid black'>" + i + "</td>");
}
document.write ("</tr>")

for (var i = 1; i <= x; i++ ){
    document.write('<td style="border: 1px solid black">' + i + '</td>');
    for (var j = 1; j <= x; j++) {
        document.write('<td style="border: 1px solid black">' + i + '*' + j + "=" + i*j + '</td>');
    }
    document.write('</tr>');
}
document.write("</table>");
}


//end of function makeAMultiplication 

window.onload = function(){
    var button = document.getElementById("button");
    var input = document.getElementById("guessInput");
    button.addEventListener ("click", makeTable);
    input.addEventListener ("keypress", handleEnter);
}

function makeTable() {
    var guessInput = document.getElementById("guessInput").value;
    if (!guessInput) {
        alert("You didn't put anything inside, idiot!!!!");
    } 
    else if (isNaN(guessInput)) {
        alert("You have to put a number inside, idiot!!!!");
    }
    else {
        makeAMultiplication(guessInput);
    }
}
function handleEnter(e) {
    var button = document.getElementById("button");
    if (e.which === 13) {
        button.click();
        return false;
    }
}