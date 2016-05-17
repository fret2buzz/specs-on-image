var doc = activeDocument;

var l = doc.artLayers.add(); 
doc.selection.fill(app.foregroundColor); 
doc.selection.deselect();
doc.activeLayer.opacity = 50;
app.doAction("LayerProperty", "specOnImage");


