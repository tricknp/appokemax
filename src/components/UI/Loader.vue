<template>
  <div :class="classes"></div>
</template>

<script>
export default {
  name: 'appmax-loader',

  props: {
    size: {
      type: String,
      required: false,
      default: 'medium',
    },
  },

  computed: {
    classes() {
      return `loading loading--${this.size}`;
    },
  },
};
</script>
