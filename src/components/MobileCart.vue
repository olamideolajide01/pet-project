<template>
<div>
     <v-row justify="center" class="mt-5" v-if="!carts.length">
			<h2>No Item On Cart Yet</h2>
		</v-row>
    <v-row v-else class="col-10" >
	<v-col
   v-for="cart in carts" 
   :key="cart.src"
   cols="12"
   sm="12"
   md="12"
   lg="12"
    >
<v-card
     elevation="3"
    >
  <div class="d-flex">
    <div>
 <v-img
       :src="cart.src"
           height="100"
           width="100"
           contain 
           class="mx-auto" 
 ></v-img> 
 </div>
 <div>
	<h5 class="text-center">{{ cart.subtitle }}</h5>
	  <p class="text-center"> Quantity: {{ cart.qty }} </p>
	  <p class="text-center mt-n5"> Sub-Price:  {{ cart.qty * cart.price2 }} </p>
    </div>
    </div>
	  <v-btn 
        text
		class="text-center"
		@click="removeCart(cart)"
	  >
	  <v-icon small>mdi-cart</v-icon>
	   REMOVE
	  </v-btn>
    </v-card > 
	</v-col>
</v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
    export default {
        name:"MobileCart",
        computed: mapState(['carts']),


 methods: {
    ...mapActions(['removeCart']),
	...mapActions(['addCart']), 
}, 
    }
</script>

<style lang="scss" scoped>

</style>