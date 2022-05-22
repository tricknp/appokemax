<template>
  <div class="presentation">
    <picture class="presentation__background">
      <img
        class="presentation__background__image"
        src="https://images3.alphacoders.com/101/1018334.jpg"
        alt=""
        srcset=""
      />
        <!-- src="https://i.pinimg.com/originals/6d/0a/fd/6d0afd4267722fb8d44b4b5f192095ae.jpg" -->
    </picture>

    <div class="presentation__content">
      <appmax-text variant="title">Bem vindo ao APPokemoMAX</appmax-text>
      <appmax-text>Conheça tudo sobre pokemons e aventure-se nessa jornada com a gente</appmax-text>
      
      <appmax-button size="large" theme="secondary">
        Explore por geração
      </appmax-button>
    </div>

    <rotate-card buttonText="Ver informações" />
  </div>
</template>

<script>
import RotateCard from "@/components/UI/RotateCard.vue";
import AppmaxButton from "@/components/UI/Button.vue";
import AppmaxText from "@/components/UI/Text.vue";

export default {
  components: { RotateCard, AppmaxButton, AppmaxText },
};
</script>