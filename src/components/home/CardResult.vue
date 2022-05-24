<template>
  <div>
    <appmax-loader v-if="loading" />

    <appmax-rotate-card
      v-else
      :cardType="typeName"
      buttonText="Mostrar detalhes"
    >
      <div slot="frontside" class="card-result">
        <picture class="card-result__picture">
          <img
            :src="pokemon.sprites.front_default"
            alt="imagem de um pokemon"
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
        <p class="card-result__detail">
          XP base: {{ pokemon.base_experience }}
        </p>
      </div>
    </appmax-rotate-card>
  </div>
</template>

<script>
import pokemonApi from '@/api/requests/pokemon';
import AppmaxRotateCard from '@/components/UI/RotateCard.vue';
import AppmaxLoader from '@/components/UI/Loader.vue';
import { loading } from '@/mixins/loading';

export default {
  components: { AppmaxRotateCard, AppmaxLoader },

  mixins: [loading],

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
      this.showLoader(true);
      try {
        const { data } = await pokemonApi.getByName(selected);
        this.pokemon = data;
      } catch ({ response }) {
        this.$emit('error', response);
      } finally {
        this.showLoader(false);
      }
    },
  },
};
</script>