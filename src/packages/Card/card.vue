<template>
  <div
    v-bind="$attrs"
    :style="{
      '--cursor': $attrs.cursor || '',
      '--bg-color': $attrs['bg-color'] || '#ffffff',
      '--height': $attrs.height || '100%',
      '--width': $attrs.width || '100%',
      '--radius': $attrs.radius || '12px',
      '--shadow': $attrs.shadow || '0px 2px 16px 0px #f0f7fd',
      '--min-width': $attrs['min-width'] || 'auto',
      '--min-height': $attrs['min-height'] || 'auto'
    }"
    class="base-card"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseCard'
}
</script>
<style lang="scss" scoped>
.base-card {
  padding: 0 16px 16px 16px;
  cursor: var(--cursor);
  height: var(--height);
  width: var(--width);
  // min-width: var(--min-width);
  // min-height: var(----min-height);
  background: var(--bg-color);
  // box-shadow: 0px 2px 16px 0px #f0f7fd;
  box-shadow: var(--shadow);
  border-radius: var(--radius);

  .card-header {
    height: 48px;
    line-height: 48px;
    display: flex;
    justify-content: space-between;
    &-title {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.8);
      font-weight: 700;
    }
  }
}
</style>
