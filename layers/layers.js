var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__03_BATAS_ADMINISTRASI_KABKOT_AR_1 = new ol.format.GeoJSON();
var features__03_BATAS_ADMINISTRASI_KABKOT_AR_1 = format__03_BATAS_ADMINISTRASI_KABKOT_AR_1.readFeatures(json__03_BATAS_ADMINISTRASI_KABKOT_AR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__03_BATAS_ADMINISTRASI_KABKOT_AR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__03_BATAS_ADMINISTRASI_KABKOT_AR_1.addFeatures(features__03_BATAS_ADMINISTRASI_KABKOT_AR_1);
var lyr__03_BATAS_ADMINISTRASI_KABKOT_AR_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__03_BATAS_ADMINISTRASI_KABKOT_AR_1, 
                style: style__03_BATAS_ADMINISTRASI_KABKOT_AR_1,
                popuplayertitle: "_03_BATAS_ADMINISTRASI_KABKOT_AR",
                interactive: true,
                title: '<img src="styles/legend/_03_BATAS_ADMINISTRASI_KABKOT_AR_1.png" /> _03_BATAS_ADMINISTRASI_KABKOT_AR'
            });
var format_KawasanTransmigrasi_2 = new ol.format.GeoJSON();
var features_KawasanTransmigrasi_2 = format_KawasanTransmigrasi_2.readFeatures(json_KawasanTransmigrasi_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanTransmigrasi_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanTransmigrasi_2.addFeatures(features_KawasanTransmigrasi_2);
var lyr_KawasanTransmigrasi_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KawasanTransmigrasi_2, 
                style: style_KawasanTransmigrasi_2,
                popuplayertitle: "Kawasan Transmigrasi",
                interactive: true,
                title: '<img src="styles/legend/KawasanTransmigrasi_2.png" /> Kawasan Transmigrasi'
            });
var format_KawasanPerdesaanPrioritasNasional_3 = new ol.format.GeoJSON();
var features_KawasanPerdesaanPrioritasNasional_3 = format_KawasanPerdesaanPrioritasNasional_3.readFeatures(json_KawasanPerdesaanPrioritasNasional_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KawasanPerdesaanPrioritasNasional_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KawasanPerdesaanPrioritasNasional_3.addFeatures(features_KawasanPerdesaanPrioritasNasional_3);
var lyr_KawasanPerdesaanPrioritasNasional_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KawasanPerdesaanPrioritasNasional_3, 
                style: style_KawasanPerdesaanPrioritasNasional_3,
                popuplayertitle: "Kawasan Perdesaan Prioritas Nasional",
                interactive: true,
                title: '<img src="styles/legend/KawasanPerdesaanPrioritasNasional_3.png" /> Kawasan Perdesaan Prioritas Nasional'
            });
var format_TITIK_LOKPRI_KATEGORI_PT_4 = new ol.format.GeoJSON();
var features_TITIK_LOKPRI_KATEGORI_PT_4 = format_TITIK_LOKPRI_KATEGORI_PT_4.readFeatures(json_TITIK_LOKPRI_KATEGORI_PT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIK_LOKPRI_KATEGORI_PT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIK_LOKPRI_KATEGORI_PT_4.addFeatures(features_TITIK_LOKPRI_KATEGORI_PT_4);
var lyr_TITIK_LOKPRI_KATEGORI_PT_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TITIK_LOKPRI_KATEGORI_PT_4, 
                style: style_TITIK_LOKPRI_KATEGORI_PT_4,
                popuplayertitle: "TITIK_LOKPRI_KATEGORI_PT",
                interactive: true,
    title: 'TITIK_LOKPRI_KATEGORI_PT<br />\
    <img src="styles/legend/TITIK_LOKPRI_KATEGORI_PT_4_0.png" /> Kawasan Perkotaan<br />\
    <img src="styles/legend/TITIK_LOKPRI_KATEGORI_PT_4_1.png" /> Ketahanan Air, Pangan, Energi<br />\
    <img src="styles/legend/TITIK_LOKPRI_KATEGORI_PT_4_2.png" /> Pariwisata<br />\
    <img src="styles/legend/TITIK_LOKPRI_KATEGORI_PT_4_3.png" /> Pertambangan<br />\
    <img src="styles/legend/TITIK_LOKPRI_KATEGORI_PT_4_4.png" /> Pertanian<br />'
        });
var format_PLBN_5 = new ol.format.GeoJSON();
var features_PLBN_5 = format_PLBN_5.readFeatures(json_PLBN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PLBN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PLBN_5.addFeatures(features_PLBN_5);
var lyr_PLBN_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PLBN_5, 
                style: style_PLBN_5,
                popuplayertitle: "PLBN",
                interactive: true,
                title: '<img src="styles/legend/PLBN_5.png" /> PLBN'
            });
var format_PKSN_6 = new ol.format.GeoJSON();
var features_PKSN_6 = format_PKSN_6.readFeatures(json_PKSN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PKSN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PKSN_6.addFeatures(features_PKSN_6);
var lyr_PKSN_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PKSN_6, 
                style: style_PKSN_6,
                popuplayertitle: "PKSN",
                interactive: true,
                title: '<img src="styles/legend/PKSN_6.png" /> PKSN'
            });
var format_KAWASAN_STRATEGIS_PT_7 = new ol.format.GeoJSON();
var features_KAWASAN_STRATEGIS_PT_7 = format_KAWASAN_STRATEGIS_PT_7.readFeatures(json_KAWASAN_STRATEGIS_PT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASAN_STRATEGIS_PT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASAN_STRATEGIS_PT_7.addFeatures(features_KAWASAN_STRATEGIS_PT_7);
var lyr_KAWASAN_STRATEGIS_PT_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KAWASAN_STRATEGIS_PT_7, 
                style: style_KAWASAN_STRATEGIS_PT_7,
                popuplayertitle: "KAWASAN_STRATEGIS_PT",
                interactive: true,
    title: 'KAWASAN_STRATEGIS_PT<br />\
    <img src="styles/legend/KAWASAN_STRATEGIS_PT_7_0.png" /> DP Pengembangan<br />\
    <img src="styles/legend/KAWASAN_STRATEGIS_PT_7_1.png" /> DPP<br />\
    <img src="styles/legend/KAWASAN_STRATEGIS_PT_7_2.png" /> FE<br />\
    <img src="styles/legend/KAWASAN_STRATEGIS_PT_7_3.png" /> KEK<br />\
    <img src="styles/legend/KAWASAN_STRATEGIS_PT_7_4.png" /> KI<br />\
    <img src="styles/legend/KAWASAN_STRATEGIS_PT_7_5.png" /> KT<br />\
    <img src="styles/legend/KAWASAN_STRATEGIS_PT_7_6.png" /> PKSN<br />\
    <img src="styles/legend/KAWASAN_STRATEGIS_PT_7_7.png" /> SKPT<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr__03_BATAS_ADMINISTRASI_KABKOT_AR_1.setVisible(true);lyr_KawasanTransmigrasi_2.setVisible(true);lyr_KawasanPerdesaanPrioritasNasional_3.setVisible(true);lyr_TITIK_LOKPRI_KATEGORI_PT_4.setVisible(true);lyr_PLBN_5.setVisible(true);lyr_PKSN_6.setVisible(true);lyr_KAWASAN_STRATEGIS_PT_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__03_BATAS_ADMINISTRASI_KABKOT_AR_1,lyr_KawasanTransmigrasi_2,lyr_KawasanPerdesaanPrioritasNasional_3,lyr_TITIK_LOKPRI_KATEGORI_PT_4,lyr_PLBN_5,lyr_PKSN_6,lyr_KAWASAN_STRATEGIS_PT_7];
lyr__03_BATAS_ADMINISTRASI_KABKOT_AR_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'Nama wilayah administrasi Kabupaten/Kota', 'WADMPR': 'Nama wilayah administrasi Provinsi', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Keterangan': 'Keterangan', 'Keterangan2': 'Keterangan2', 'Keterangan3': 'Keterangan3', });
lyr_KawasanTransmigrasi_2.set('fieldAliases', {'namobj': 'namobj', 'fcode': 'fcode', 'lcode': 'lcode', 'remark': 'remark', 'srs_id': 'srs_id', 'metadata': 'metadata', 'luas_ha': 'luas_ha', 'status': 'status', 'sumber': 'sumber', 'thn_produk': 'thn_produk', 'KK': 'KK', 'Komoditas': 'Komoditas', 'Provinsi': 'Provinsi', });
lyr_KawasanPerdesaanPrioritasNasional_3.set('fieldAliases', {'Id': 'Id', 'KabKota': 'KabKota', });
lyr_TITIK_LOKPRI_KATEGORI_PT_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Kelompok': 'Kelompok', 'WADMKK': 'WADMKK', 'WADMKK_1': 'WADMKK_1', 'WADMPR': 'WADMPR', 'Keterangan': 'Keterangan', 'Keterang_1': 'Keterang_1', 'Keterang_2': 'Keterang_2', 'Catatan': 'Catatan', 'Catatan_2': 'Catatan_2', });
lyr_PLBN_5.set('fieldAliases', {'Name': 'Name', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_PKSN_6.set('fieldAliases', {'PKSN': 'PKSN', 'Keterangan': 'Keterangan', });
lyr_KAWASAN_STRATEGIS_PT_7.set('fieldAliases', {'Id': 'Id', 'Status': 'Status', 'Nama': 'Nama', });
lyr__03_BATAS_ADMINISTRASI_KABKOT_AR_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Keterangan': 'TextEdit', 'Keterangan2': 'TextEdit', 'Keterangan3': 'TextEdit', });
lyr_KawasanTransmigrasi_2.set('fieldImages', {'namobj': 'TextEdit', 'fcode': 'TextEdit', 'lcode': 'TextEdit', 'remark': 'TextEdit', 'srs_id': 'TextEdit', 'metadata': 'TextEdit', 'luas_ha': 'TextEdit', 'status': 'TextEdit', 'sumber': 'TextEdit', 'thn_produk': 'TextEdit', 'KK': 'TextEdit', 'Komoditas': 'TextEdit', 'Provinsi': 'TextEdit', });
lyr_KawasanPerdesaanPrioritasNasional_3.set('fieldImages', {'Id': 'Range', 'KabKota': 'TextEdit', });
lyr_TITIK_LOKPRI_KATEGORI_PT_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'Kelompok': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKK_1': 'TextEdit', 'WADMPR': 'TextEdit', 'Keterangan': 'TextEdit', 'Keterang_1': 'TextEdit', 'Keterang_2': 'TextEdit', 'Catatan': 'TextEdit', 'Catatan_2': 'TextEdit', });
lyr_PLBN_5.set('fieldImages', {'Name': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_PKSN_6.set('fieldImages', {'PKSN': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_KAWASAN_STRATEGIS_PT_7.set('fieldImages', {'Id': 'Range', 'Status': 'TextEdit', 'Nama': 'TextEdit', });
lyr__03_BATAS_ADMINISTRASI_KABKOT_AR_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'Keterangan': 'no label', 'Keterangan2': 'no label', 'Keterangan3': 'no label', });
lyr_KawasanTransmigrasi_2.set('fieldLabels', {'namobj': 'no label', 'fcode': 'no label', 'lcode': 'no label', 'remark': 'no label', 'srs_id': 'no label', 'metadata': 'no label', 'luas_ha': 'no label', 'status': 'no label', 'sumber': 'no label', 'thn_produk': 'no label', 'KK': 'no label', 'Komoditas': 'no label', 'Provinsi': 'no label', });
lyr_KawasanPerdesaanPrioritasNasional_3.set('fieldLabels', {'Id': 'no label', 'KabKota': 'no label', });
lyr_TITIK_LOKPRI_KATEGORI_PT_4.set('fieldLabels', {'OBJECTID': 'no label', 'Kelompok': 'no label', 'WADMKK': 'no label', 'WADMKK_1': 'no label', 'WADMPR': 'no label', 'Keterangan': 'no label', 'Keterang_1': 'no label', 'Keterang_2': 'no label', 'Catatan': 'no label', 'Catatan_2': 'no label', });
lyr_PLBN_5.set('fieldLabels', {'Name': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_PKSN_6.set('fieldLabels', {'PKSN': 'no label', 'Keterangan': 'no label', });
lyr_KAWASAN_STRATEGIS_PT_7.set('fieldLabels', {'Id': 'no label', 'Status': 'no label', 'Nama': 'no label', });
lyr_KAWASAN_STRATEGIS_PT_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});