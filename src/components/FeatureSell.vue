<template>

<div>
     <div>
           <v-card-title>
      <h2 class="grey--text"> Featured </h2>
    </v-card-title>
    </div>

   <v-row 
       justify="center"
       v-for="set in sets"
          :key="`${set.src}-set`"
             class=" ma-3 text-center"
       >
           <div class="d-flex">
               <div>
         <v-list-item-avatar
        tile
        size="80"
        class="profile"
        color="red"
      > 
      <v-img :src="set.src"> </v-img>

      </v-list-item-avatar>
</div>
<div>
      <v-list-item-subtitle>{{set.subtitle}}</v-list-item-subtitle>
       <v-rating
        :value="4"
        background-color="white"
        color="red accent-4"
        dense
        half-increments
        hover
        size="18"
        class="mb-2"
      > {{set.rating}}</v-rating>
      <v-list-item-title class="text-decoration-line-through"> {{set.price1}}</v-list-item-title>
      <v-list-item-title> {{set.price2}}</v-list-item-title>
      </div>
         </div>
       
   </v-row>
   </div>
 
   
</template>

<script>
    export default {
        name:'FeatureSell',

        
    data() {
        return {
        sets: [
            {
                src:"fluf2.jpg",
                subtitle: "Hillary (wolf Breed)",
                rating: "4.5",
                price1: "599.99",
                price2: "499.00"
            },
            {
                src:"parrot1.jpg",
                subtitle: "Hillary (wolf Breed)",
                rating: "4.5",
                price1: "",
                price2: "499.00"
            },
            {
                src:"cameo.jpg",
                subtitle: "Hillary (wolf Breed)",
                rating: "4.5",
                price1: "599.99",
                price2: "499.00"
            },
           
        ]
        }
    },
        
    }
</script>

<style>

</style>