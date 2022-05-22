<template>
  <div class="presentation">
    <picture class="presentation__background">
      <img
        class="presentation__background__image"
        src="https://images3.alphacoders.com/101/1018334.jpg"
        alt="Imagem de pokemon"
      />
    </picture>

    <presentation-text />
    
    <main-content />
  </div>
</template>

<script>
import PresentationText from '@/components/home/PresentationText.vue';
import MainContent from '@/components/home/MainContent.vue';

export default {
  components: {  
      PresentationText,
      MainContent
    }
};
</script>