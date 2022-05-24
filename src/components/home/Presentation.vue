<template>
  <div class="presentation">
    <picture class="presentation__background">
      <img
        class="presentation__background__image"
        alt="imagem ilustrativa de uma floresta"
        src="@/assets/images/background.jpg"
      />
    </picture>

    <presentation-text />

    <main-content />
  </div>
</template>

<script>
import PresentationText from "@/components/home/PresentationText.vue";
import MainContent from "@/components/home/MainContent.vue";

export default {
  components: {
    PresentationText,
    MainContent,
  },
};
</script>