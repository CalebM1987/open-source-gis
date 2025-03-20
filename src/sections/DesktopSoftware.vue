<script lang="ts" setup>
import { getMarkdownCode, type ISnippet } from '@/utils';
import CodeSnippet from '@/components/CodeSnippet.vue';
import CodeSlide from '@/components/CodeSlide.vue';

const postgres_city_query = `
SELECT * FROM public.brewery
WHERE city in ('Minneapolis', 'St. Paul')
ORDER BY name;`

const st_intersect = `
SELECT * FROM public.brewery
WHERE ST_Intersects(geom, 'SRID=4326;POLYGON((-93.52 45.2,-93.52 44.75,-92.89 44.75,-92.89 45.2,-93.52 45.2))')
ORDER BY name;`

const st_asmvt = `
WITH
bounds AS (
    SELECT {env} AS geom,
           {env}::box2d AS b2d
),
mvtgeom AS (
    SELECT ST_AsMVTGeom(ST_Transform(t.{geomColumn}, 3857), bounds.b2d) AS geom,
           {attrColumns}
    FROM {table} t, bounds
    WHERE ST_Intersects(t.{geomColumn}, ST_Transform(bounds.geom, {srid}))
)
SELECT ST_AsMVT(mvtgeom.*) FROM mvtgeom;`

const py = `
>>> import antigravity
>>> print(b"\x01\x02\x03")
>>> a = 2`
</script>

<template>
  <section class="desktop-software">
    <section class="postgres">
      <h3>Spatial Databases</h3>
      <ul>
        <li class="fragment"><a href="https://postgresql.org/" target="_blank" rel="noopener noreferrer">PostgreSQL</a> is a powerful, open source object-relational database system</li>
        <li class="fragment">PostgreSQL has a spatial extension called <a href="https://postgis.net/" target="_blank" rel="noopener noreferrer">PostGIS</a> that adds support for geometry types and operations</li>
        <ul> 
          <li class="fragment">geometry manipulation such as <span class="inline-code">buffer</span>, <span class="inline-code">clip</span>, and <span class="inline-code">generalize</span> and many more</li>
          <li class="fragment">geometry conversions between binary, well-known text, geojson, and vector tiles (<a href="https://wiki.openstreetmap.org/wiki/PBF_Format" target="_blank" rel="noopener noreferrer">pbf</a>).</li>
          <li class="fragment">other operations such as geocoding and reverse geocoding</li>
        </ul>
      </ul>
    </section>

    <section class="postgis-intersect">
      <h4>PostgreSQL queries with PostGIS</h4>
      <div class="fragment fade-in-then-semi-out">
        <div class="text-sm text-left">to find breweries in the Twin Cities traditionally would involve a query by <i>city</i> name</div>
        <CodeSnippet :code="postgres_city_query" lang="sql" />
      </div>
      <div class="fragment fade-up ">
        <div class="text-sm text-left">with PostGIS we can search by an area because it supports spatial operations such as <span class="inline-code">ST_Intersects</span></div>
        <CodeSnippet :code="st_intersect" lang="sql" :line-numbers="true" />
      </div>
    </section> 

    <section data-transition="slide-in fade-out">
      <img src="../assets/images/postgres_results.png" alt="">
    </section>

    <section data-transition="fade-in slide-out">
      <img src="../assets/images/postgis_geometry_viewer.png" alt="">
    </section>

    <CodeSlide 
      dense
      line-numbers="1-5|6-11|12" 
      title="PostGIS ST_AsMVT Example"
      :code="st_asmvt"
      lang="sql"
    >
      <div class="description text-md">an envelope can be passed in to find the intersecting features data and return as vector tiles</div>
    </CodeSlide>

    <section>
      <h2>Desktop Software</h2>
      <ul>
        <li class="fragment">the most common open source GIS mapping applications are <a href="https://qgis.org/" target="_blank" rel="noopener noreferrer">QGIS</a> and
          <a href="https://grass.osgeo.org/" target="_blank" rel="noopener noreferrer">GRASS</a>
        </li>
        <li class="fragment">QGIS and GRASS are both cross platform, meaning they can be installed on Windows, Mac, and Linux</li>
      </ul>
    </section>

    <section class="qgis">
      <h3>QGIS</h3>
      <ul>
        <li class="fragment"><a href="https://qgis.org/" target="_blank" rel="noopener noreferrer">QGIS</a> is a robust GIS application that has capabilities that are on par with ArcGIS Pro</li>
        <li class="fragment">QGIS supports many data formats including shapefile, GeoJSON, PostgreSQL databases, and Web Services</li>
        <li class="fragment">QGIS has many plugins available for additional functionality</li>
        <ul>
          <li class="fragment">You can create your own Plugins using <span class="inline-code">Python</span> and/or <span class="inline-code">C++</span></li>
          <li class="fragment">similar to ArcGIS, also has a model builder and supports Python for automation</li>
        </ul>
      </ul>
    </section>

    <section data-transition="slide-in">
      <h4>QGIS</h4>
      <img src="../assets/images/qgis.png" alt="">
    </section>
    
  </section>
</template>