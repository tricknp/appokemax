<template>
  <button 
    :type="type" 
    :disabled="disabled" 
    :class="classes" 
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'appmax-button',

  props: {
    type: {
      type: String,
      required: false,
      default: 'button',
      validator(value) {
        return ['button', 'submit', 'reset'].includes(value);
      },
    },
    variant: {
      type: String,
      required: false,
      default: 'square',
      validator(value) {
        return ['square', 'rounded'].includes(value);
      },
    },
    theme: {
      type: String,
      required: false,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary'].includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },

    size: {
      type: String,
      required: false,
      default: 'medium',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value);
      },
    },

    fullWidth: {
      type: Boolean,
    },
  },

  computed: {
    classes() {
      const mainClass = 'appmax-button';
      return [
        mainClass,
        `${mainClass}--theme-${this.theme}`,
        `${mainClass}--size-${this.size}`,
        `${mainClass}--${this.variant}`,
        this.fullWidth && `${mainClass}--full-width`,
        this.disabled && `${mainClass}--disabled`
      ];
    },
  },
};
</script>