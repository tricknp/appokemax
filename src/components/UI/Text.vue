<template>
  <component :is="componentToRender" :class="classes">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'appmax-text',

  props: {
    variant: {
      type: String,
      required: false,
      default: 'default',
      validator(value) {
        return ['title', 'subtitle', 'default'].includes(value);
      },
    },

    type: {
      type: String,
      required: false,
      default: 'default',
      validator(value) {
        return ['bold', 'italic', 'default'].includes(value);
      },
    },
  },

  computed: {
    componentToRender() {
      if (this.variant === 'title') {
        return 'h1';
      }

      if (this.variant === 'subtitle') {
        return 'h2';
      }

      if (this.variant === 'default') {
        return 'p';
      }
    },

    classes() {
      const mainClass = 'text';

      return [
        mainClass,
        `${mainClass}--${this.variant}`,
        this.type !== 'default' && `${mainClass}--${this.type}`,
      ];
    },
  },
};
</script>