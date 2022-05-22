<template>
  <div>
    <div class="card">
      <div ref="frontside" :class="frontsideClass">
        <slot name="frontside" />
      </div>

      <div
        ref="backside"
        :class="`${backsideClass} card__backside--rotate-back`"
      >
        <slot name="backside" />
      </div>
    </div>

    <appmax-button @click="spin">
      {{ buttonText }}
    </appmax-button>
  </div>
</template>

<script>
import AppmaxButton from '@/components/UI/Button.vue';

export default {
  components: { AppmaxButton },
  props: {
    cardType: {
      type: String,
      required: false,
      default: 'normal',
    },

    buttonText: {
      type: String,
      required: false,
      default: 'Girar',
    },
  },

  data() {
    return {
      defaultSide: true,
    };
  },

  computed: {
    cardSideClass() {
      return (value) => `card__${value}side`;
    },

    frontsideClass() {
      return `${this.cardSideClass('front')} bg-${this.cardType}`;
    },

    backsideClass() {
      return this.cardSideClass('back');
    },
  },

  methods: {
    spin() {
      const { frontside, backside } = this.$refs;

      this.toggleRotate(frontside, backside);

      this.defaultSide = !this.defaultSide;
    },

    toggleRotate(frontside, backside) {
      const cardFrontside = this.cardSideClass('front');
      const cardBackside = this.cardSideClass('back');

      if (this.defaultSide) {
        frontside.classList.add(`${cardFrontside}--rotate-front`);
        backside.classList.remove(`${cardBackside}--rotate-back`);

        return;
      }

      frontside.classList.remove(`${cardFrontside}--rotate-front`);
      backside.classList.add(`${cardBackside}--rotate-back`);
    },
  },
};
</script>
