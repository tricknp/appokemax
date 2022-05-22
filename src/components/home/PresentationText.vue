<template>
  <div class="presentation__content">
    <appmax-text variant="title">Bem vindo ao APPokemoMAX</appmax-text>
    <appmax-text>
        Conheça tudo sobre pokemons e aventure-se nessa jornada com agente
    </appmax-text>

    <appmax-button size="large" theme="secondary">
      Explore por geração
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
    }
}
</script>