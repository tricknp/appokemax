<template>
  <div class="dropdown">
    <input
      type="text"
      class="dropdown__input"
      :placeholder="label"
      :readonly="!digitable"
      v-model="selected"
      @click="toggleDropdown"
    />

    <div v-if="open" class="dropdown__content">
      <span
        class="dropdown__content__item"
        v-for="item in content"
        :key="item.name"
        @click="handleSelect(item)"
      >
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appmax-dropdown',

  props: {
    content: {
      type: Array,
      required: true,
    },

    label: {
      type: String,
      required: false,
      default: 'Escolha',
    },

    digitable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      selected: null,
      open: false,
    };
  },

  created() {
    this.fillSelect();
  },

  methods: {
    handleSelect(item) {
      this.selected = item.name;
      this.open = false;

      this.$emit('selected', item);
    },

    toggleDropdown() {
      this.open = !this.open;
      this.$emit('toggle');
    },

    fillSelect() {
      if (!this.selected && this.content) {
        this.selected = this.content[0].name;
      }
    },
  },
};
</script>