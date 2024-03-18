var size = 0;
var placement = 'point';
function categories_KAWASAN_STRATEGIS_PT_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'DP Pengembangan':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(215,25,28,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'DPP':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(237,110,67,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'FE':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(253,186,110,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'KEK':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(254,232,164,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'KI':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(231,245,183,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'KT':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(183,226,168,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PKSN':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(116,182,173,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SKPT':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size, points: 3,
            stroke: new ol.style.Stroke({color: 'rgba(128,17,25,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.52}), fill: new ol.style.Fill({color: 'rgba(43,131,186,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_KAWASAN_STRATEGIS_PT_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Status");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_KAWASAN_STRATEGIS_PT_7(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
