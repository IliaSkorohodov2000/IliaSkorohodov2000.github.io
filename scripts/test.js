var counter = 1;
var numb;

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;

function checktest(){
 numb = document.querySelector('input[name="test' + counter + '"]:checked').value;
 
if(numb == 1) {
	count1+=1;
}
else if(numb == 2){
    count2+=1;
}
else if(numb == 3){
    count3+=1;
}
else if(numb == 4){
    count4+=1;
}
else if(numb == 5){
    count5+=1;
}

if(counter != 5){
	counter++;
	checktest();
}
else{
	alert('Колличество первых ответов:' + count1 + ' вторых:' + count2 + ' третьих:' + count3 + ' четвертых:' + count4 + ' пятых:' + count5  + '.');
}

}