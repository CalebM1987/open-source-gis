<script lang="ts" setup>
import CodeSnippet from './CodeSnippet.vue'

interface Props {
  title?: string;
  lang?: string;
  code: string;
  dataTrim?: boolean;
  dataNoEscape?: boolean;
  dense?: boolean;
  large?: boolean;
  headerType?: string;
  lineNumbers?: string;
}

const {
  title,
  lang,
  code,
  headerType='h4',
  lineNumbers,
  large=false,
  dense=false,
  dataTrim=true,
  dataNoEscape=true
} = defineProps<Props>()

</script>

<template>
  <section>
    <slot name="header">
      <Component :is="headerType ?? 'h4'" v-if="title">{{ title }}</Component>
    </slot>
    <slot></slot>
    <slot name="code">
      <CodeSnippet v-bind="{ lang, code, large, dense, dataTrim, dataNoEscape, lineNumbers }" />
    </slot>
    <slot name="footer"></slot>
  </section>
</template>

<style lang="scss" scoped>

.large-code-wrapper {
  height: 58vh;
}

.dense-code {
  code {
    font-size: 80% !important;
  }
}
</style>