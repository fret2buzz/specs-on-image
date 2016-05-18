app.preferences.rulerUnits = Units.PIXELS;
var srcDoc = app.activeDocument;
var numOfLayers = srcDoc.layers.length;
var fileName = srcDoc.name;
var docName = fileName.substring(0,fileName.length -4);
var results = "";
var html = "";
var size = "";

for (var i = 0; i < numOfLayers-1  ; i++)
{
	var theLayer = srcDoc.layers[i];
	var lb = getLayerBounds(theLayer).toString();
	results += lb + "\n";
}

var lastLayer = srcDoc.layers[numOfLayers-1];
var imageWidth = parseFloat(lastLayer.bounds[2]) - parseFloat(lastLayer.bounds[0]);

var header ='<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <title>Specs | '+docName+'</title> <script type="text/javascript" src="https://code.jquery.com/jquery-2.2.3.min.js"></script> <script type="text/javascript" src="js/script.js"></script>  <link rel="stylesheet" href="css/styles.css"> </head> <body> <div class="container" style="width: '+imageWidth+'px;"> <h1>'+docName+'</h1> <ul class="actions"> <li id="showAll"><span>Show all</span></li> <li id="hideAll" class="active"><span>Hide all</span></li> </ul> <div class="prototype"> <img src="images/'+docName+'.png" alt="image"> <ul class="list">\n'
var footer ='</ul></div> </div> </body> </html>'
html = header + results + footer;

var file = new File();
var fileNew = file.saveDlg("Save new file");
fileNew.open("w");
fileNew.write(html);
fileNew.close();

function getLayerBounds(alayer)
{
	var x1 = parseFloat(alayer.bounds[0]);
	var y1 = parseFloat(alayer.bounds[1]);
	var x2 = parseFloat(alayer.bounds[2]);
	var y2 = parseFloat(alayer.bounds[3]);
	var w = x2 - x1;
	var h = y2 - y1;
	var layerName = alayer.name;
	
	layerName = layerName.split(";");
	if(layerName[0] == 'size'){
		if(w>=h){
			size = w;
			h = 10;
		} else {
			size = h;
			w = 10;
		}
		return '<li style="width: ' +  w + 'px; height: ' + h + 'px; top: '+ y1 +'px; left: '+ x1 +'px;" class="size '+layerName[2]+'">'+layerName[1]+'<span>'+size+'px</span></li>';
	} else {
		return '<li style="width: ' + 24 + 'px; height: ' + 24 + 'px; top: '+ y1 +'px; left: '+ x1 +'px;" class="'+layerName[2]+'">'+layerName[1]+'<span>'+layerName[0]+'</span></li>';
	};
	
}

