<script lang="ts" setup>
import featureCollection from '@/data/breweryFeatureCollection.json'
import CodeSnippet from '@/components/CodeSnippet.vue'
import CodeSlide from '@/components/CodeSlide.vue'

const geojson = JSON.stringify(featureCollection, null, 2)

</script>

<template>
  <section class="data-formats">

    <section>
      <h2>Data Formats and Specifications</h2>
      <p>There are many different data formats and specifications used in GIS. Some of the most common include:</p>
      <ul>
        <li>Shapefile</li>
        <li>KML</li>
        <li>GeoJSON</li>
        <li>GeoTIFF</li>
        <li>WKT (well-known text)</li>
        <li>WKB (well-known binary)</li>
        <li>MVT/PBF (Mapbox Vector Tiles)</li>
      </ul>
    </section>

    <section class="shapefile">
      <h3>Shapefile</h3>
      <p class="text-md text-left">Shapefiles are a popular geospatial vector data format for GIS software. It is developed and regulated by Esri as a mostly open specification for data interoperability among Esri and other GIS and CAD software products.</p>
      <p class="fragment text-md text-left">it is comprised of several files:</p>
      <ul>
        <li class="fragment">shp - the geometry</li>
        <li class="fragment">shx - the index</li>
        <li class="fragment">dbf - the attributes</li>
        <li class="fragment">prj - the projection</li>
      </ul>
    </section>

    <section class="kml">
      <h3>KML</h3>
      <p class="text-md text-left"><a href="https://developers.google.com/kml/documentation/kml_tut" target="_blank" rel="noopener noreferrer">KML (Keyhole Markup Language)</a>  is an XML-based file format used to display geographic data in an Earth browser such as Google Earth, Google Maps, and Google Maps for mobile.</p>
      <p class="fragment text-md text-left">It is comprised of a single XML file with tags for:</p>
      <ul>
        <li class="fragment">Placemarks</li>
        <li class="fragment">Paths</li>
        <li class="fragment">Polygons</li>
        <li class="fragment">Styles</li>
      </ul>
    </section>

    <section class="geojson">
      <h3>GeoJSON</h3>
      <ul>
        <li><a href="https://geojson.org/" target="_blank" rel="noopener noreferrer">GeoJSON</a> is an open standard format designed for representing simple geographical features, along with their non-spatial attributes. It is based on JavaScript Object Notation (JSON).</li>
        <li class="fragment text-left">It is comprised of a single JSON object with properties for <span class="inline-code">type</span> (set to <span class="inline-text">Feature</span>), <span class="inline-text">properties</span> (the feature attributes), and <span class="inline-code">geometry</span></li>
        <ul>
          <li class="fragment">supports these geometry types: <span class="inline-code">Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon, </span></li>
        </ul>
        <li class="fragment">a group of features can be stored in a <span class="inline-code">FeatureCollection</span></li>
      </ul>
    </section>

    <CodeSlide 
      large
      dense
      title="GeoJSON Feature Collection"
      :code="geojson"
      lang="json"
    />

    <section class="geotiff">
      <h3>GeoTIFF</h3>
      <ul>
        <li><a href="https://geotiff.io/" target="_blank" rel="noopener noreferrer">GeoTIFF</a> is a georeferenced TIFF (Tagged Image File Format) file that embeds geospatial metadata, allowing for the display and analysis of raster imagery in GIS applications.</li>
        <li class="fragment">For web usage, Cloud Optimized GeoTIFF (COG) is a standard based on GeoTIFF are designed to be highly performant on the web, so that users and software can make use of partial data within the file without having to download the entire file</li>
      </ul>
    </section>

    <section class="wkt-wkb">
      <h3>Well-Known Text and Well-Known Binary</h3>
      <ul>
        <li><a href="https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry" target="_blank" rel="noopener noreferrer">Well-Known Text (WKT)</a> and <a href="https://en.wikipedia.org/wiki/Well-known_text_representation_of_geometry" target="_blank" rel="noopener noreferrer">Well-Known Binary (WKB)</a> are formats for representing geometry objects in human readable text and compact binary formats, respectively.</li>
        <li class="fragment">Both formats are used in databases and GIS software to store and exchange spatial data</li>
      </ul>
    </section>
    
    <section class="wkt-table">
      <h3>Well-Known Text Examples</h3>
      <img src="../assets/images/wkt-table.png" alt="">
    </section>

    <section class="mvt-pbf">
      <h3>Mapbox Vector Tiles and Protocol Buffers</h3>
      <ul>
        <li><a href="https://docs.mapbox.com/vector-tiles/specification/" target="_blank" rel="noopener noreferrer">Mapbox Vector Tiles (MVT)</a> are an efficient format for storing and transferring geographic data in vector format</li>
        <li class="fragment">MVT is based on <a href="https://developers.google.com/protocol-buffers" target="_blank" rel="noopener noreferrer">Protocol Buffers (PBF)</a>, a binary format for serializing structured data</li>
        <li class="fragment">MVT is used by Mapbox and other mapping services to deliver vector data to web and mobile clients</li>
        <li class="fragment">most commonly used for basemaps (also true for ArcGIs)</li>
      </ul>
    </section>

  </section>
</template>