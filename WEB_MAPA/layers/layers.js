var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MapadeSolosdoParanEMBRAPA_1 = new ol.format.GeoJSON();
var features_MapadeSolosdoParanEMBRAPA_1 = format_MapadeSolosdoParanEMBRAPA_1.readFeatures(json_MapadeSolosdoParanEMBRAPA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapadeSolosdoParanEMBRAPA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapadeSolosdoParanEMBRAPA_1.addFeatures(features_MapadeSolosdoParanEMBRAPA_1);
var lyr_MapadeSolosdoParanEMBRAPA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MapadeSolosdoParanEMBRAPA_1, 
                style: style_MapadeSolosdoParanEMBRAPA_1,
                popuplayertitle: 'Mapa de Solos do Paraná EMBRAPA',
                interactive: true,
    title: 'Mapa de Solos do Paraná EMBRAPA<br />\
    <img src="styles/legend/MapadeSolosdoParanEMBRAPA_1_0.png" /> AFLORAMENTO  ROCHOSOS<br />\
    <img src="styles/legend/MapadeSolosdoParanEMBRAPA_1_1.png" /> AFLORAMENTO DE ROCHA<br />\
    <img src="styles/legend/MapadeSolosdoParanEMBRAPA_1_2.png" /> ARGISSOLO<br />\
    <img src="styles/legend/MapadeSolosdoParanEMBRAPA_1_3.png" /> CAMBISSOLO<br />\
    <img src="styles/legend/MapadeSolosdoParanEMBRAPA_1_4.png" /> ESPODOSSOLO<br />\
    <img src="styles/legend/MapadeSolosdoParanEMBRAPA_1_5.png" /> GLEISSOLO<br />\
    <img src="styles/legend/MapadeSolosdoParanEMBRAPA_1_6.png" /> LATOSSOLO<br />' });
var lyr_NDVI_LANDSAT9_2025_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NDVI_LANDSAT9_2025<br />\
    <img src="styles/legend/NDVI_LANDSAT9_2025_2_0.png" /> 0,0000<br />\
    <img src="styles/legend/NDVI_LANDSAT9_2025_2_1.png" /> 0,6415<br />\
    <img src="styles/legend/NDVI_LANDSAT9_2025_2_2.png" /> 0,7923<br />\
    <img src="styles/legend/NDVI_LANDSAT9_2025_2_3.png" /> 0,8513<br />\
    <img src="styles/legend/NDVI_LANDSAT9_2025_2_4.png" /> 0,9130<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NDVI_LANDSAT9_2025_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5431172.382040, -2983118.613377, -5428919.920273, -2981101.015696]
        })
    });
var lyr_DEM_sambaqui_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM_sambaqui<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_sambaqui_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5430855.339527, -2982752.359736, -5429384.080195, -2981128.766873]
        })
    });
var lyr_IndicedeRugosidade_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Indice de Rugosidade<br />\
    <img src="styles/legend/IndicedeRugosidade_4_0.png" /> 0.0486744<br />\
    <img src="styles/legend/IndicedeRugosidade_4_1.png" /> 45.2109<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IndicedeRugosidade_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5430855.339527, -2982752.359736, -5429384.080195, -2981128.766873]
        })
    });
var lyr_SuscetibilidadeErosiva_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Suscetibilidade Erosiva<br />\
    <img src="styles/legend/SuscetibilidadeErosiva_5_0.png" /> 0%<br />\
    <img src="styles/legend/SuscetibilidadeErosiva_5_1.png" /> 2,1%<br />\
    <img src="styles/legend/SuscetibilidadeErosiva_5_2.png" /> 4,3%<br />\
    <img src="styles/legend/SuscetibilidadeErosiva_5_3.png" /> 6,4%<br />\
    <img src="styles/legend/SuscetibilidadeErosiva_5_4.png" /> 8,6% ≥<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SuscetibilidadeErosiva_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-5430560.214941, -2982442.955103, -5429711.443488, -2981483.325732]
        })
    });
var format_UsodoSolo_6 = new ol.format.GeoJSON();
var features_UsodoSolo_6 = format_UsodoSolo_6.readFeatures(json_UsodoSolo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsodoSolo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsodoSolo_6.addFeatures(features_UsodoSolo_6);
var lyr_UsodoSolo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsodoSolo_6, 
                style: style_UsodoSolo_6,
                popuplayertitle: 'Uso do Solo',
                interactive: true,
    title: 'Uso do Solo<br />\
    <img src="styles/legend/UsodoSolo_6_0.png" /> Estrada/Soloexposto<br />\
    <img src="styles/legend/UsodoSolo_6_1.png" /> Área de Cultivo<br />\
    <img src="styles/legend/UsodoSolo_6_2.png" /> Vegetação<br />' });
var format_OutrosStiosArqueolgicosdoParan_7 = new ol.format.GeoJSON();
var features_OutrosStiosArqueolgicosdoParan_7 = format_OutrosStiosArqueolgicosdoParan_7.readFeatures(json_OutrosStiosArqueolgicosdoParan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OutrosStiosArqueolgicosdoParan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OutrosStiosArqueolgicosdoParan_7.addFeatures(features_OutrosStiosArqueolgicosdoParan_7);
var lyr_OutrosStiosArqueolgicosdoParan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OutrosStiosArqueolgicosdoParan_7, 
                style: style_OutrosStiosArqueolgicosdoParan_7,
                popuplayertitle: 'Outros Sítios Arqueológicos do Paraná',
                interactive: true,
                title: '<img src="styles/legend/OutrosStiosArqueolgicosdoParan_7.png" /> Outros Sítios Arqueológicos do Paraná'
            });
var format_PontosAmostrais_8 = new ol.format.GeoJSON();
var features_PontosAmostrais_8 = format_PontosAmostrais_8.readFeatures(json_PontosAmostrais_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PontosAmostrais_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PontosAmostrais_8.addFeatures(features_PontosAmostrais_8);
var lyr_PontosAmostrais_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PontosAmostrais_8, 
                style: style_PontosAmostrais_8,
                popuplayertitle: 'Pontos Amostrais',
                interactive: true,
                title: '<img src="styles/legend/PontosAmostrais_8.png" /> Pontos Amostrais'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_MapadeSolosdoParanEMBRAPA_1.setVisible(false);lyr_NDVI_LANDSAT9_2025_2.setVisible(false);lyr_DEM_sambaqui_3.setVisible(true);lyr_IndicedeRugosidade_4.setVisible(false);lyr_SuscetibilidadeErosiva_5.setVisible(true);lyr_UsodoSolo_6.setVisible(false);lyr_OutrosStiosArqueolgicosdoParan_7.setVisible(false);lyr_PontosAmostrais_8.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_MapadeSolosdoParanEMBRAPA_1,lyr_NDVI_LANDSAT9_2025_2,lyr_DEM_sambaqui_3,lyr_IndicedeRugosidade_4,lyr_SuscetibilidadeErosiva_5,lyr_UsodoSolo_6,lyr_OutrosStiosArqueolgicosdoParan_7,lyr_PontosAmostrais_8];
lyr_MapadeSolosdoParanEMBRAPA_1.set('fieldAliases', {'fid': 'fid', 'sbcs': 'sbcs', 'tipo_unida': 'tipo_unida', 'ordem_1': 'ordem_1', 'sub_ordem_': 'sub_ordem_', 'grande_gru': 'grande_gru', 'sub_grupo_': 'sub_grupo_', 'familia_1_': 'familia_1_', 'familia_11': 'familia_11', 'familia_12': 'familia_12', 'familia_13': 'familia_13', 'familia_14': 'familia_14', 'fase_veget': 'fase_veget', 'fase_relev': 'fase_relev', 'ordem_2': 'ordem_2', 'sub_ordem1': 'sub_ordem1', 'grande_g_1': 'grande_g_1', 'sub_grupo1': 'sub_grupo1', 'familia_2_': 'familia_2_', 'familia_21': 'familia_21', 'familia_23': 'familia_23', 'familia_24': 'familia_24', 'familia_26': 'familia_26', 'fase_veg_1': 'fase_veg_1', 'fase_rel_1': 'fase_rel_1', 'ordem_3': 'ordem_3', 'sub_orde_1': 'sub_orde_1', 'grande_g_2': 'grande_g_2', 'sub_grup_1': 'sub_grup_1', 'familia_3_': 'familia_3_', 'familia_31': 'familia_31', 'familia_33': 'familia_33', 'familia_34': 'familia_34', 'familia_36': 'familia_36', 'fase_veg_2': 'fase_veg_2', 'fase_rel_2': 'fase_rel_2', 'legenda': 'legenda', 'area_km2': 'area_km2', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_UsodoSolo_6.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'USO': 'USO', });
lyr_OutrosStiosArqueolgicosdoParan_7.set('fieldAliases', {'fid': 'fid', 'id_bem': 'id_bem', 'identificacao_bem': 'identificacao_bem', 'co_iphan': 'co_iphan', 'no_logradouro': 'no_logradouro', 'nu_logradouro': 'nu_logradouro', 'id_natureza': 'id_natureza', 'ds_natureza': 'ds_natureza', 'codigo_iphan': 'codigo_iphan', 'id_classificacao': 'id_classificacao', 'ds_classificacao': 'ds_classificacao', 'id_tipo_bem': 'id_tipo_bem', 'ds_tipo_bem': 'ds_tipo_bem', 'sg_tipo_bem': 'sg_tipo_bem', 'sintese_bem': 'sintese_bem', 'dt_cadastro': 'dt_cadastro', });
lyr_PontosAmostrais_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'valor': 'valor', });
lyr_MapadeSolosdoParanEMBRAPA_1.set('fieldImages', {'fid': 'TextEdit', 'sbcs': 'TextEdit', 'tipo_unida': 'TextEdit', 'ordem_1': 'TextEdit', 'sub_ordem_': 'TextEdit', 'grande_gru': 'TextEdit', 'sub_grupo_': 'TextEdit', 'familia_1_': 'TextEdit', 'familia_11': 'TextEdit', 'familia_12': 'TextEdit', 'familia_13': 'TextEdit', 'familia_14': 'TextEdit', 'fase_veget': 'TextEdit', 'fase_relev': 'TextEdit', 'ordem_2': 'TextEdit', 'sub_ordem1': 'TextEdit', 'grande_g_1': 'TextEdit', 'sub_grupo1': 'TextEdit', 'familia_2_': 'TextEdit', 'familia_21': 'TextEdit', 'familia_23': 'TextEdit', 'familia_24': 'TextEdit', 'familia_26': 'TextEdit', 'fase_veg_1': 'TextEdit', 'fase_rel_1': 'TextEdit', 'ordem_3': 'TextEdit', 'sub_orde_1': 'TextEdit', 'grande_g_2': 'TextEdit', 'sub_grup_1': 'TextEdit', 'familia_3_': 'TextEdit', 'familia_31': 'TextEdit', 'familia_33': 'TextEdit', 'familia_34': 'TextEdit', 'familia_36': 'TextEdit', 'fase_veg_2': 'TextEdit', 'fase_rel_2': 'TextEdit', 'legenda': 'TextEdit', 'area_km2': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_UsodoSolo_6.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'USO': 'TextEdit', });
lyr_OutrosStiosArqueolgicosdoParan_7.set('fieldImages', {'fid': 'TextEdit', 'id_bem': 'Range', 'identificacao_bem': 'TextEdit', 'co_iphan': 'TextEdit', 'no_logradouro': 'TextEdit', 'nu_logradouro': 'TextEdit', 'id_natureza': 'Range', 'ds_natureza': 'TextEdit', 'codigo_iphan': 'TextEdit', 'id_classificacao': 'Range', 'ds_classificacao': 'TextEdit', 'id_tipo_bem': 'Range', 'ds_tipo_bem': 'TextEdit', 'sg_tipo_bem': 'TextEdit', 'sintese_bem': 'TextEdit', 'dt_cadastro': 'DateTime', });
lyr_PontosAmostrais_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'valor': 'TextEdit', });
lyr_MapadeSolosdoParanEMBRAPA_1.set('fieldLabels', {'fid': 'no label', 'sbcs': 'no label', 'tipo_unida': 'no label', 'ordem_1': 'no label', 'sub_ordem_': 'no label', 'grande_gru': 'no label', 'sub_grupo_': 'no label', 'familia_1_': 'no label', 'familia_11': 'no label', 'familia_12': 'no label', 'familia_13': 'no label', 'familia_14': 'no label', 'fase_veget': 'no label', 'fase_relev': 'no label', 'ordem_2': 'no label', 'sub_ordem1': 'no label', 'grande_g_1': 'no label', 'sub_grupo1': 'no label', 'familia_2_': 'no label', 'familia_21': 'no label', 'familia_23': 'no label', 'familia_24': 'no label', 'familia_26': 'no label', 'fase_veg_1': 'no label', 'fase_rel_1': 'no label', 'ordem_3': 'no label', 'sub_orde_1': 'no label', 'grande_g_2': 'no label', 'sub_grup_1': 'no label', 'familia_3_': 'no label', 'familia_31': 'no label', 'familia_33': 'no label', 'familia_34': 'no label', 'familia_36': 'no label', 'fase_veg_2': 'no label', 'fase_rel_2': 'no label', 'legenda': 'no label', 'area_km2': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_UsodoSolo_6.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'USO': 'header label - visible with data', });
lyr_OutrosStiosArqueolgicosdoParan_7.set('fieldLabels', {'fid': 'no label', 'id_bem': 'header label - visible with data', 'identificacao_bem': 'header label - visible with data', 'co_iphan': 'no label', 'no_logradouro': 'no label', 'nu_logradouro': 'no label', 'id_natureza': 'no label', 'ds_natureza': 'no label', 'codigo_iphan': 'no label', 'id_classificacao': 'header label - visible with data', 'ds_classificacao': 'no label', 'id_tipo_bem': 'no label', 'ds_tipo_bem': 'no label', 'sg_tipo_bem': 'header label - visible with data', 'sintese_bem': 'no label', 'dt_cadastro': 'no label', });
lyr_PontosAmostrais_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'valor': 'header label - visible with data', });
lyr_PontosAmostrais_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});