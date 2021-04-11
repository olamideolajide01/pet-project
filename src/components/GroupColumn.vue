<template>
<v-sheet
    class="mx-auto"
    

  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="white"
      show-arrows
    >
      <v-slide-item
        v-for="dog in dogs"
        :key="dog.src"
        v-slot="{toggle }"
      >
        <div class="text-center">
          <v-img          
          class="ma-4 elevation-6"
         :src = "dog.src"
          @click="toggle"
          height="200"
          width="200"
        >     
          
        </v-img>
        <v-chip 
        class="mt-n10" 
        align="center"
        link
        to="/Pets"
        >
          {{dog.title.split('.')[0]}}
        </v-chip>
        </div>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
 
</template>

<script>
    export default {
        name: 'GroupColumn',
       

        data:() =>({
           model: null,
          dogs:[
            {
           src: 'autralian.jpg',
           title: 'Australian'
           
         },
         {
           src: 'persian.jpeg',
           title: 'persians'
         },
         {
           src: 'military.jpg',
           title: 'millary dog'
         },
         {
           src: 'scat1.jpg',
           title: 'Beautiful Cats'

         },
         {
           src: 'fluf1.jpg',
           title: 'Fluffy'
         },
         {
           src: 'playful.jpg',
           title: 'Sporty And Friendly'
         },
         
          ]

        }),


        //  computed: mapState(['uploads']),
    }
</script>

