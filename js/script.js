 $(document).ready(function () {
 	count = 1;
    var counter=1,flag=0;
 	//table = $('<table></table>').attr({ id: "Table" });

            $("#api").click(function () {
            	var index = ($("#para").val());
            	if (index == "") {
            		console.log("Please input data");
            		return false;
            	}
            	else{
            		$.ajax({
                    url: 'https://jsonplaceholder.typicode.com/todos/'+index,
                    type: 'GET',
                    dataType: 'json',
                    crossDomain: true,
                    success: function (data, textStatus, xhr) {
                        console.log(data);
                       
	                    var tr = [];
                        //var count=1;
                        if(flag==0){
                    mytable = $('<table></table>').attr({ id: "basicTable", class:"basicTable1" });

                       for (var i = 0; i < count; i++) {
                       var ab = $('<h1>API Data</h1>').appendTo("#h");
                      var row = $('<tr></tr>').appendTo(mytable);
                      var row1 = $('<tr id="row'+counter+'" ></tr>').appendTo(mytable);
                       $.each(data, function(key, val) {
                      $('<th></th>').text(key).appendTo(row); 
                      $('<td></td>').text(val).appendTo(row1); 

                          });
                        var row = $('<button class="button1" id="button'+ counter+'" onclick=removeFun('+ counter+')>remove Row</button>').appendTo(row1);
                    flag=1;
                      counter++;
                      }
                  mytable.appendTo("#data");

                     }
                    else{
                   for (var i = 0; i < count; i++) {
                   var row = $('<tr id="row'+counter+'" ></tr>').appendTo(mytable);
                   $.each(data, function(key, val) {
                  $('<td></td>').text(val).appendTo(row); 
                  });
                  var row = $('<button class="button1" id="button'+ counter+'" onclick=removeFun('+ counter+')>remove Row</button>').appendTo(row);
                  counter++;
                   }
                       mytable.appendTo("#data");   
} 
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        console.log(errorThrown);
                    }
                });

            	}
                  
             });


        });
function removeFun(a){
$("#row"+a).remove();
}