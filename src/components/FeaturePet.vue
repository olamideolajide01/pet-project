<template>
    <div>
        <v-row justify="center">
    <v-col cols="12" class="text-center" style="max-width:600px">
    <h1> FEATURES <span class="red--text"> PETS</span></h1>
   <marquee>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsum sequi eum repellat excepturi, obcaecati ut asperiores, delectus sed illo, dignissimos dicta quaerat cupiditate nisi molestiae! Neque dolorem doloremque amet.</p></marquee>
</v-col>
    </v-row>
    <v-row justify="center">
 
          <v-col
           v-for="pet in pets"
          :key="`${pet.id}-pet`"
           cols="12"
           sm="6"
             md="4"
             lg="3"
             class="text-center"
            >

          <v-img
          :src="pet.src"
           height="300"
           width="300"
           contain 
           class="mx-auto"       
          
          >
          </v-img>

          <v-list-item-subtitle>{{pet.subtitle}}</v-list-item-subtitle>

         <v-rating
        :value="4.5"
        background-color="white"
        color="yellow accent-4"
        dense
        half-increments
        hover
        size="18"
        class="mb-2"
      > {{pet.rating}}</v-rating>

      <v-list-item-title class="text-decoration-line-through" v-if="pet.price1"> {{pet.price1}}</v-list-item-title>
      <v-list-item-title class="text-decoration-line-through" v-else><br></v-list-item-title>
      <v-list-item-title class="red--text"> {{pet.price2}}</v-list-item-title>

          <v-btn
           small
           class="mt-2"
           v-on:click="addCart(pet)"
           >
           <v-icon small>mdi-cart</v-icon>
          Add to cart
          </v-btn>
           </v-col>

  </v-row>
    </div>
</template>


<script>
import { mapState, mapActions } from 'vuex'
export default {
    name: "FeaturePet",

    data() {
        return {
        pets: [
            {
                id:"1",
                src:"fluf2.jpg",
                subtitle: "Hillary (wolf Breed)",
                rating: "4.5",
                qty:1,
                price1: "599.99",
                price2: "499.00"
            },
            {
                 id:"2",
                src:"parrot1.jpg",
                subtitle: "Hillary (wolf Breed)",
                rating: "4.5",
                 qty:1,
                price1: "",
                price2: "499.00"
            },
            {
                 id:"3",
                src:"cameo.jpg",
                subtitle: "Hillary (wolf Breed)",
                rating: "4.5",
                 qty:1,
                price1: "599.99",
                price2: "499.00"
            },
            {
                 id:"4",
                src:"fish1.jpg",
                subtitle: "Hillary (wolf Breed)",
                rating: "4.5",
                 qty:1,
                price1: "",
                price2: "499.00"
            }
        ]
        }
    },

    	computed: {
		...mapState(['carts'])
	},
    methods: {
    ...mapActions(['addCart']),
},
}
</script>