<template>
  <div class="presentation__content">
    <appmax-text variant="title">Bem vindo ao APPokemoMAX</appmax-text>
    <appmax-text>
        Conheça tudo sobre pokemons e aventure-se nessa jornada com agente
    </appmax-text>

    <appmax-button size="large" theme="secondary" @click=redirect>
      Conheça todas gerações
    </appmax-button>
  </div>
</template>

<script>
import AppmaxButton from '@/components/UI/Button.vue';
import AppmaxText from '@/components/UI/Text.vue';

export default {
    components: {
        AppmaxButton,
        AppmaxText
    },

    data() {
      return {
        generationsUrl: 'https://pokemon.fandom.com/pt-br/wiki/Pok%C3%A9mon_Gera%C3%A7%C3%B5es'
      };
    },

    methods: {
      redirect() {
        window.open(this.generationsUrl, '_blank');
      }
    }
}
</script>