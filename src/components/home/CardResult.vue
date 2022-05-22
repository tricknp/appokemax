<template>
  <appmax-rotate-card v-if="typeName" :cardType="typeName">
    <div slot="frontside" class="card-result">
      <picture class="card-result__picture">
        <img
          :src="pokemon && pokemon.sprites && pokemon.sprites.front_default"
          alt=""
        />
      </picture>

      <p class="card-result__id">#{{ pokemon.id }}</p>
      <p class="card-result__title">{{ pokemon.name }}</p>
      <p class="card-result__type">Tipo: {{ typeName }}</p>
    </div>

    <div slot="backside" class="card-result">
      <h2 class="card-result__detail card-result__detail--title">Detalhes</h2>
      <p class="card-result__detail">Id: {{ pokemon.id }}</p>
      <p class="card-result__detail">Nome: {{ pokemon.name }}</p>
      <p class="card-result__detail">Tipo: {{ typeName }}</p>
      <p class="card-result__detail">Peso: {{ pokemon.weight }} g</p>
      <p class="card-result__detail">Altura: {{ pokemon.height }} cm</p>
      <p class="card-result__detail">XP base: {{ pokemon.base_experience }}</p>
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
      return this.pokemon?.types[0]?.type?.name;
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