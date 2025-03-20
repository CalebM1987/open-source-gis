<script setup lang="ts">
import { onMounted, useTemplateRef, defineAsyncComponent } from 'vue';
import Reveal from 'reveal.js';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import "reveal.js/plugin/highlight/monokai.css"
// @ts-ignore
import sql from 'highlight.js/lib/languages/sql';
import { highlight } from '@/state';
import { homepage as presentationUrl } from '../package.json';

const QRCode = defineAsyncComponent(() => import('./components/QRCode.vue'));
const DesktopSoftware = defineAsyncComponent(() => import('./sections/DesktopSoftware.vue'));
const DataFormats = defineAsyncComponent(() => import('./sections/DataFormats.vue'));
const WebServers = defineAsyncComponent(() => import('./sections/WebServers.vue'));
const MappingLibraries = defineAsyncComponent(() => import('./sections/MappingLibraries.vue'));

const revealContainer = useTemplateRef<HTMLElement>('reveal');

const repoUrl = 'https://github.com/CalebM1987/open-source-gis';

onMounted(()=> {
  console.log('container', revealContainer.value)
  const deck = new Reveal(revealContainer.value!,{
    plugins: [RevealMarkdown]
  });

  deck.initialize({
    controls: true,
    progress: true,
    center: true,
    hash: true,
    transition: 'slide',
    slideNumber: true,
    highlight: {
    beforeHighlight: (hljs) => hljs.registerLanguage('sql', sql),
  },
    plugins: [
      RevealMarkdown,
      RevealHighlight
    ]
  }).then((reveal)=> {

    console.log(reveal, deck)
    highlight.value = deck.getPlugin('highlight')
  })
})
</script>

<template>
  <div class="reveal" ref="reveal">
    <div class="slides">
      <section>
					<h1>Open Source GIS</h1>
					<p>Caleb Mackey<br/>
						<i style="font-style: italic;" class="text-md">GIS Development Lead at Bolton & Menk</i>
					</p>
          <QRCode :url="presentationUrl" />
          <p class="text-sm">slides source: <a :href="repoUrl" target="_blank" rel="noopener noreferrer">{{ repoUrl }}</a></p>
				</section>
				<section>
          <h3>Outline</h3>
          <ul>
            <li>Data formats and Specifications</li>
            <li>Desktop Software</li>
            <li>Web Servers</li>
            <li>Mapping Libraries</li>
            <ul>
              <li>Python</li>
              <li>Web</li>
              <li>Map Viewers</li>
            </ul>
          </ul>
        </section>
        <DataFormats />
        <DesktopSoftware />
        <WebServers />
        <MappingLibraries />
    </div>
  </div>
</template>

<style lang="scss">
$primary   : #046A38;
$secondary : #789D4A;
$accent    : #6D2077;

$dark      : #003B5C;

$positive  : #005DB8;
$negative  : #BA0C2F;
$info      : #FF8200;
$warning   : #FFB81D;

:root {
  --r-background-color: #191919;
  // --r-main-font: Noto Sans, sans-serif;
  --r-main-font: Optima, sans-serif;
  --r-main-font-size: 36px;
  --r-main-color: #fff;
  --r-block-margin: 20px;
  --r-heading-margin: 0 0 20px 0;
  --r-heading-font: Source Sans Pro, Helvetica, sans-serif;
  --r-heading-color: #FF8200;
  --r-heading-line-height: 1.2;
  --r-heading-letter-spacing: normal;
  --r-heading-text-transform: normal;
  --r-heading-text-shadow: none;
  --r-heading-font-weight: 600;
  --r-heading1-text-shadow: none;
  --r-heading1-size: 2.5em;
  --r-heading2-size: 1.6em;
  --r-heading3-size: 1.3em;
  --r-heading4-size: 1.1em;
  --r-code-font: monospace;
  --r-link-color: #42affa;
  --r-link-color-dark: #068de9;
  --r-link-color-hover: #8dcffc;
  --r-selection-background-color: rgba(66, 175, 250, 0.75);
  --r-selection-color: #fff;
  --r-overlay-element-bg-color: 240, 240, 240;
  --r-overlay-element-fg-color: 0, 0, 0;
}


#app {
  height: 100vh;
}

.inline-code {
  color: #BE398D;
  font-family: var(--r-code-font);
}

.large-code-wrapper > .code-wrapper {
  height: 55vh !important;
  // width: 70vw !important;
}

.text {
  &-xs {
    font-size: 40%;
  }
  &-sm {
    font-size: 55%;
  } 
  &-md {
    font-size: 70%;
  }
  &-left {
    text-align: left;
  }
  &-center {
    text-align: center;
  }
  &-right {
    text-align: right;
  }
}



.w {
  &-25 {
    width: calc(25vw) !important;
  }
  &-33 {
    width: calc(33.333vw) !important;
  }
  &-50 {
    width: calc(50vw) !important;
  }
  &-66 {
    width: calc(66.666vw) !important;
  }
  &-75 {
    width: calc(75vw) !important;
  }
  &-100 {
    width: calc(100vw) !important;
  }
}

.d-flex {
  display: flex;
}

.justify {
  &-between {
    justify-content: space-between;
  }
  &-start {
    justify-content: start;
  }
  &-end {
    justify-content: end;
  }
  &-around {
    justify-content: space-around;
  }
  &-evenly {
    justify-content: space-evenly;
  }
}

.bg-vertical-rectangle {
  margin: 0 !important;
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color: $primary;
  // border-radius: 80px;
  float: left;
  margin-right: 20px;   
}

.reveal ul ul {
  font-size: 80%;
}

.reveal code {
  font-size: 80%;
}
</style>
