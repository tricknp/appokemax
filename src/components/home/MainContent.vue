<template>
  <div>
    <appmax-dropdown
      label="Escolha um pokemon"
      :content="content"
      @selected="selectedPokemon"
    />

    <card-result :selected="selected" />
  </div>
</template>

<script>
import pokemonApi from "@/api/requests/pokemon";
import AppmaxDropdown from "@/components/UI/Dropdown.vue";
import AppmaxText from "@/components/UI/Text.vue";
import CardResult from "@/components/home/CardResult.vue";

export default {
  components: {
    AppmaxDropdown,
    AppmaxText,
    CardResult,
  },

  data() {
    return {
      content: '',
      selected: 1,
    };
  },


  async created() {
    await this.getPokemons();
  },

  methods: {
    async getPokemons() {
      try {
        const { data } = await pokemonApi.get();
        this.content = data.results;
      } catch (error) {
        console.log(error);
      }
    },

    selectedPokemon(pokemon) {
      this.selected = pokemon.name;
    },
  },
};
</script>