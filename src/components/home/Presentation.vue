<template>
  <div class="presentation">
    <picture class="presentation__background">
      <img
        class="presentation__background__image"
        src="https://www.desktopbackground.org/download/1280x800/2011/06/16/219964_pokemon-widescreen-hd-wallpapers_1920x1080_h.jpg"
        alt=""
        srcset=""
      />
    </picture>

    <div class="presentation__content">
      <h1>Bem vindo ao APPokemoMAX</h1>
      <p>
        Conheça tudo sobre pokemons e aventure-se nessa jornada com a gente
      </p>
      <appmax-button size='large' theme="secondary">
          Explore por geração
      </appmax-button>
    </div>

    <rotate-card buttonText="Ver informações" />
  </div>
</template>

<script>
import RotateCard from "@/components/UI/RotateCard.vue";
import AppmaxButton from "@/components/UI/Button.vue";

export default {
    components: {RotateCard, AppmaxButton}
};
</script>