<script lang="ts" setup>
import { ref } from 'vue'
</script>

<template>
  <section class="mapping-libraries">
    <h2>Mapping Libraries</h2>
    <p class="text-md">There are many open source mapping libraries available for spatial analysis, data manipulation, and usage in web and mobile applications. Some of the most popular utility libraries include:</p>
    <ul class="text-md">
      <li>Python</li>
      <ul>
        <li><a href="https://gdal.org/en/stable/" target="_blank" rel="noopener noreferrer">GDAL (python bindings)</a> - most popular library used for analysis and manipulation of vector and raster data. The GDAL binaries (<span class="inline-code">C++</span> core) is heavily used by QGIS.</li>
        <li class="fragment"><a href="https://shapely.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">shapley</a> - package for manipulation and analysis of planar geometric objects</li>
        <li class="fragment"><a href="https://rasterio.readthedocs.io/en/stable/" target="_blank" rel="noopener noreferrer">rasterio</a> - package for working with raster and imagery data</li>
        <li class="fragment"><a href="https://geopandas.org/en/stable/" target="_blank" rel="noopener noreferrer">GeoPandas</a> - an extension of the popular <a href="http://pandas.pydata.org/" target="_blank" rel="noopener noreferrer">pandas</a> package with a focus on geospatial data and visualizing data in charts and maps</li>
        <li class="fragment"><a href="https://github.com/Bolton-and-Menk-GIS/restapi" target="_blank" rel="noopener noreferrer">bmi-arcgis-restapi</a> - open source library for interfacing with ArcGIS REST Services built by <a href="https://github.com/CalebM1987" target="_blank" rel="noopener noreferrer">myself</a> and <a href="https://github.com/philnagel" target="_blank" rel="noopener noreferrer">Phil Nagel</a></li>
      </ul>
    </ul>
  </section>

  <section class="mapping-libraries-js">
    <h2>JavaScript Mapping Libraries</h2>
    <ul>
      <li>Utility Libraries:</li>
      <ul>
        <li class="fragment"><a href="https://turfjs.org/" target="_blank" rel="noopener noreferrer">turf.js</a> - lightweight library with tons of utility functions</li>
        <li class="fragment"><a href="https://github.com/calvinmetcalf/shapefile-js" target="_blank" rel="noopener noreferrer">shapefile-js</a> - client side library for reading and writing shapefiles in the browser and Node.js</li>
        <li class="fragment"><a href="https://developers.arcgis.com/arcgis-rest-js/" target="_blank" rel="noopener noreferrer">arcgis-rest-js</a> - open source library maintained by esri staff for interfacing with ArcGIS REST Services</li>
      </ul>
      <li class="fragment">Mapping Software Development Kits (SDKs)</li>
      <ul>
        <li class="fragment"><a href="https://openlayers.org/" target="_blank" rel="noopener noreferrer">OpenLayers</a></li>
        <li class="fragment"><a href="https://maplibre.org/" target="_blank" rel="noopener noreferrer">MapLibre</a> (formerly <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer">MapBox</a>)</li>
        <li class="fragment"><a href="https://leafletjs.com/" target="_blank" rel="noopener noreferrer">Leaflet</a></li>
        <ul>
          <li class="fragment"><a href="https://developers.arcgis.com/esri-leaflet/" target="_blank" rel="noopener noreferrer">esri-leaflet</a> - open source Leaflet plugin for accessing ArcGIS Location and Map Services</li>
        </ul>
      </ul>
    </ul>
  </section>

  <section class="demos">
    <h2>Demos</h2>
    <p><a href="https://gis.bolton-menk.com/presentations/fastapi-vector-tiles-mngis-2023/" target="_blank" rel="noopener noreferrer">Serving Vector Tiles with PostGIS and FastAPI</a></p>
    <p><a href="https://github.com/CalebM1987/koop-provider-open-brewery" target="_blank" rel="noopener noreferrer">Koop.js Provider for OpenBrewery</a></p>
  </section>

</template>