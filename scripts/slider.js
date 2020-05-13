//setTimeout(first, 20000, 1)
var timeoutID;

function first(numb){
	if(numb === null || numb > 5) numb = 1;
    timeoutID = setTimeout(second, 10000, numb);
    }

function second(numb){
	var ourradio = document.getElementById("switch" + numb); //'switch"' + numb + '"'    ("[id ='" + numb + "'] input")
	ourradio.checked = true;
	numb++;
	first(numb);
}

function change(numb){
	clearTimeout(timeoutID);
	first(numb);
}