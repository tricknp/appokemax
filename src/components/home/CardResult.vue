<template>
  <appmax-rotate-card>
    <div slot="frontside" class="selected">
      <picture class="selected__picture">
        <img
          :src="pokemon && pokemon.sprites && pokemon.sprites.front_default"
          alt=""
        />
      </picture>

      <p class="selected__id">#{{ pokemon.id }}</p>
      <p class="selected__title">{{ pokemon.name }}</p>
      <p class="selected__type">Tipo: {{ typeName }}</p>
    </div>

    <div slot="backside" class="selected">
      <h2 class="selected__detail selected__detail--title">Detalhes</h2>
      <p class="selected__detail">Id: {{ pokemon.id }}</p>
      <p class="selected__detail">Nome: {{ pokemon.name }}</p>
      <p class="selected__detail">Tipo: {{ typeName }}</p>
      <p class="selected__detail">Peso: {{ pokemon.weight }} g</p>
      <p class="selected__detail">Altura: {{ pokemon.height }} cm</p>
      <p class="selected__detail">XP base: {{ pokemon.base_experience }}</p>
    </div>
  </appmax-rotate-card>
</template>

<script>
import pokemonApi from "@/api/requests/pokemon";
import AppmaxRotateCard from "@/components/UI/RotateCard.vue";

export default {
  components: { AppmaxRotateCard },

  props: {
    selected: {
      type: String | Number,
      required: false,
    },
  },

  data() {
    return {
      default: 1,
      pokemon: null,
    };
  },

  watch: {
    async selected(pokemon) {
      await this.getSelected(pokemon);
    },
  },

  async created() {
    await this.getSelected(this.default);
  },

  computed: {
    typeName() {
      return this.pokemon.types[0].type.name;
    },
  },

  methods: {
    async getSelected(selected) {
      this.$emit("startLoading");
      try {
        const { data } = await pokemonApi.getByName(selected);
        this.pokemon = data;
      } catch (error) {
        this.$emit("error", error);
      } finally {
        this.$emit("finishLoading");
      }
    },
  },
};
</script>