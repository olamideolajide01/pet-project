<template>

	<div>
		<v-row v-if="!carts.length">
			<h2>No Item On Cart Yet</h2>
		</v-row>
		<v-row v-else class="mt-12">
		<v-btn><v-icon large color="primary" >mdi-arrow-left</v-icon></v-btn>	
		</v-row>
<v-row class="mt-5 px-6">
	<v-col 
	v-for="cart in carts"
	 :key="cart.src"
	 cols="12"
	 lg="3"
	 >
<v-card elevation="2">
 <v-img
       :src="cart.src"
           height="100"
           width="100"
           contain 
           class="mx-auto" 
 ></v-img> 
	<h5 class="text-center">{{ cart.subtitle }}</h5>
	  <p class="text-center"> Quantity: {{ cart.qty }} </p>
	  <p class="text-center mt-n5"> Sub-Price:  {{ cart.qty * cart.price2 }} </p>
	  <v-btn 
		 class=""
		@click="removeCart(cart)"
	  >
	  <v-icon small>mdi-cart</v-icon>
	   REMOVE
	  </v-btn>
</v-card>
	</v-col>
</v-row>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

	export default {
		name: 'Cart',
		computed: mapState(['carts']),

		 methods: {
    ...mapActions(['removeCart']),
	...mapActions(['addCart']), 
}, 
	}
</script>