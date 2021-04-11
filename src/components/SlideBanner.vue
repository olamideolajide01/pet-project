<template>
<div col=12, md=5, sm=12>
  <v-carousel
    cycle 
    hide-delimiter-background
    show-arrows-on-hover
   height="100%"   
  >
    <v-carousel-item
      v-for="slide in slides"
      :key="slide.src"
       :src="slide.src"      
    >

    </v-carousel-item>
  </v-carousel>
</div>
</template>


<script>

  export default {
    name:"SlideBanner",

    data () {
      return {
        slides: [
         {
           src: 'adol-cats.jpg'
         },
         {
           src: 'sod.jpg'
         },
         {
           src: 'parrots.jpg'
         },
         {
           src: 'fishgp.jpg'
         },
         
        ],
      }
    },

  
  }
</script>