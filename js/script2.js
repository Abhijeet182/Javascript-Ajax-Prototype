$(document).ready(function(){

var counter=1,flag=0;

$("#api").click(function(){
var value1 = $("#para").val();
if(value1=="")
{
alert("please enter ID");
}
else
{
$.ajax({

url: 'https://jsonplaceholder.typicode.com/todos/' + value1,
dataType: 'json',
success: function(data) {
var tr = [];
var count=1;
if(flag==0){
mytable = $('<table></table>').attr({ id: "basicTable", class:"basicTable1" });

for (var i = 0; i < count; i++) {
var row = $('<tr></tr>').appendTo(mytable);
var row1 = $('<tr></tr>').appendTo(mytable);
$.each(data, function(key, val) {
$('<td></td>').text(key).appendTo(row); 
$('<td></td>').text(val).appendTo(row1); 

});
var row = $('<button class="button1" id="button'+ counter+'">remove Row</button>').appendTo(row1);
flag=1;
counter++;
}
mytable.appendTo("#box");

}
else{
for (var i = 0; i < count; i++) {
var row = $('<tr></tr>').appendTo(mytable);
$.each(data, function(key, val) {
$('<td></td>').text(val).appendTo(row); 
});
var row = $('<button class="button1" id="button'+ counter+'" onclick=removeFun("dsds")>remove Row</button>').appendTo(row);
counter++;
}
mytable.appendTo("#box");	
} 
},
statusCode: {
404: function() {
alert('There was a problem with the server. Try again soon!');
}
}
});
}
});



/*
$(document).on('click', '#button'+ counter, function() {
var trIndex = $(this).closest("row").index();
if(trIndex>1) {

$(this).closest("row").prev().remove();
} else {
alert("Sorry!! Can't remove first row!");
}
});*/

});



function removeFun(id){
console.log(id, 'id');
}