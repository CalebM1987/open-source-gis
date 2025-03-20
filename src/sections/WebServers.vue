<script lang="ts" setup>
import { ref } from 'vue'
</script>

<template>
  <section class="web-servers">
    <h2>Open Source Web Services</h2>
    <ul class="text-md">
      <li><a href="https://www.mapserver.org/" target="_blank" rel="noopener noreferrer">MapServer</a> - used to publish spatial data and creating interactive mapping applications. Can read and serve spatial data in many formats such as Shapefiles, WMS, PostGIS and GeoTIFF. Also supports tile caching. </li>
      <li class="fragment"><a href="https://geoserver.org/" target="_blank" rel="noopener noreferrer">GeoServer</a> - used to publish and edit spatial data, making maps available in a service-oriented architecture. It has a large focus on interoperability through OGC standards and does not store data, but rather supports data access through a variety of source types.</li>
      <li class="fragment"><a href="https://koopjs.github.io/" target="_blank" rel="noopener noreferrer">Koop.js</a> - a <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">Node.js</a> based web server that can be used to translate any data source to conform into the ArcGIS API specification through data provider plugins. It can expose data in esriJSON, GeoJSON, vector tiles, and WMS/WFS. While it is developed and maintained by esri, it is completely open source and allows for easy interoperability with ArcGIS Applications.</li>
      <li class="fragment"><a href="https://www.openstreetmap.org/" target="_blank" rel="noopener noreferrer">OpenStreetMap (OSM)</a> - while technically not a web server like those mentioned above, OSM is a free, editable map of the world created by volunteers. Anyone is free to contribute by adding, editing, and correcting information in the map.</li>
    </ul>
    
  </section>
</template>