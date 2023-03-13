<template>
  <button
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'el-button--' + type : '',
      size ? 'el-button--' + size : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-radius': radius,
        'is-icon': icon || iconBorder,
        'is-icon-border': iconBorder,
        'is-icon-text': $slots.default && icon
      }
    ]"
    :style="{
      minWidth: minWidth && `${minWidth}px`,
      maxWidth: maxWidth && `${maxWidth}px`
    }"
    :title="labelTitle"
    class="el-button"
    @click="handleClick"
    @mouseover.self="handleMouseover"
  >
    <!-- <i class="el-icon-loading" v-if="loading" @click="handleInnerClick"></i> -->
    <el-load-icon
      v-if="loading"
      class="h-icon-loading"
      @click="handleInnerClick"
    />
    <i v-if="icon && !loading" :class="icon" />
    <i
      v-if="iconBorder && !loading"
      :class="iconBorder"
      @click="handleInnerClick"
    />
    <!-- <i :class="outicon" v-if="outicon" @click="handleInnerClick"></i> -->
    <span v-if="$slots.default" @click="handleInnerClick">
      <slot />
    </span>
  </button>
</template>
<script>
export default {
  name: 'ElButton',
  props: {
    minWidth: {
      type: Number,
      default: null
    },
    maxWidth: {
      type: Number,
      default: null
    },
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: null
    },
    icon: { type: String, default: null },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: {
      type: Boolean,
      default: null
    },
    disabled: {
      type: Boolean,
      default: null
    },
    iconBorder: {
      type: String,
      default: null
    },
    plain: {
      type: Boolean,
      default: null
    },
    autofocus: {
      type: Boolean,
      default: null
    },
    radius: {
      type: Boolean,
      default: null
    }
  },

  data() {
    return {
      labelTitle: ''
    };
  },

  computed: {
    buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },

  methods: {
    handleInnerClick(e) {
      if (this.disabled) {
        e.stopPropagation();
      }
    },

    handleClick(evt) {
      this.$emit('click', evt);
    },

    handleMouseover(e) {
      const t = e.target;
      // 如果设置了默认的title就用默认的
      if (this.$attrs.title) return;
      this.labelTitle = t.scrollWidth > t.offsetWidth ? t.innerText : '';
    }
  }
};
</script>
