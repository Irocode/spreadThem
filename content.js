var dataContainer = new Array();
$("table").each(function(){
    var i = 0;

    var data = new Array();
	var trCount = 0;
    $(this).find("tr").each(function(){
		console.log($(this));
		console.log("entering tr for " + $(this).attr("class"));
        var row = []
        $(this).children().each(function(){
			console.log("entering td for " + $(this).attr("class"));
            row.push($(this).html());
			console.log($(this).html());
			console.log(row);
        });
        data[trCount] = row;
		trCount++;
		console.log("data:" + data);
    });
    dataContainer[i] = data;
    $(this).after("<button class='spreadsheet-button' index='" + i + "'></button>");
    $(this).after("<div class='spreadsheet-"+ i +"'></div>");
	$('div.spreadsheet-'+ i).hide();
	console.log("finaL data:" + data);
	$('div.spreadsheet-'+ i).handsontable({
    	data: data,
		colHeaders: true
  	});
    $(this).addClass("spreadsheet-" + i);
    i++;
});

$(".spreadsheet-button").each(function(){
    var className = $(this).attr("cname"); 
	var index = $(this).attr("index");       
    $(this).click(function(){
		console.log(dataContainer[index]);
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$('div.spreadsheet-'+ index).hide();	
			$("table.spreadsheet-" + index).show();				
		}else{
			$(this).addClass("on");
			$("table.spreadsheet-" + index).hide();
			$('div.spreadsheet-'+ index).show();
		}
    });
});

