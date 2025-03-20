<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { highlight } from '@/state'

interface Props {
  lang?: string;
  code: string;
  dataTrim?: boolean;
  dataNoEscape?: boolean;
  dense?: boolean;
  large?: boolean;
  lineNumbers?: string | boolean;
}

const {
  lang,
  code,
  lineNumbers,
  large=false,
  dense=false,
  dataTrim=true,
  dataNoEscape=true,
} = defineProps<Props>()

const codeRef = ref<null | HTMLDivElement>()
const codeRect = ref<DOMRect>()
const codeStyle = computed<any>(()=> large
  ? codeRect.value 
    ? { height: `${Math.min(document.body.clientHeight - (codeRect.value.top + 320), 600)}px` }
    : { height: '55vh' }
  : {}
)
const langClass = computed(()=> lang ? `language-${lang}`: '')

onMounted(()=> {
  if (codeRef.value){
    codeRect.value = codeRef.value.getBoundingClientRect()
    highlight.value?.highlightBlock(codeRef.value)
    if (lineNumbers){
      codeRef.value.setAttribute('data-line-numbers', typeof lineNumbers === 'boolean' ? '': lineNumbers)
    }
  }
})
</script>

<template>
  <pre :class="{ 'dense-code': dense }" :style="codeStyle" >
    <code 
      ref="codeRef"
      :class="langClass"
      :data-trim="dataTrim"
      :data-noescape="dataNoEscape"
    >{{ code }}</code>
  </pre>
</template>

<style lang="scss">
.large-code-wrapper {
  height: 60vh;
}

.dense-code {
  & code {
    font-size: 70%;
  }
}
</style>