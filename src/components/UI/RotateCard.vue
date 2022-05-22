<template>
    <div class="card">
      <div 
        ref="frontside" 
        :class="frontsideClasses"
        @mouseenter="spin"
      >
        <slot name="frontside" />
      </div>

      <div
        ref="backside"
        :class="`${backsideClasses} card__backside--rotate-back`"
        @mouseleave="spin"
      >
        <slot name="backside" />
      </div>
    </div>
</template>

<script>
import AppmaxButton from '@/components/UI/Button.vue';

export default {
  name: 'appmax-rotate-card',

  components: { AppmaxButton },

  props: {
    cardType: {
      type: String,
      required: false,
      default: 'normal',
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

    frontsideClasses() {
      return [
        this.cardSideClass('front'),
        this.cardType && `bg-${this.cardType}`
      ];
    },

    backsideClasses() {
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
