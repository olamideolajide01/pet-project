<template>
    <div>
<v-card
    v-if="item"
    :loading="loading"
    class="mx-auto my-12"
    max-width="200"
    height="70%"
    
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="5"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="fill"
      :src="item.src"
    ></v-img>

    <v-card-title>{{ item.title }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0 mt-n5"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        >

        <div class="grey--text ml-4">
          {{ item.rating }}
        </div>
        </v-rating>
      </v-row>

      <div class="my-4 subtitle-1">
        {{ item.price }}
      </div>
    </v-card-text>


   <v-btn
      dark
      color="orange accent-5"
      @click="snackbar = true"
      small
    >
    <v-icon>mdi-cart</v-icon>
      Add to Cart
    </v-btn>

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
  <h4 v-else>No item to display details</h4>
    </div>
</template>

<script>
    export default {
       name: 'DogDetails',
       props: {
           item: {
               type: Object,
               default: null 
           },
           loading: Boolean,
           selection: String,
       }, 

       data: () => ({
      snackbar: false,
      text: 'Item Added to Cart.',
      timeout: 2000,
    }),
    }
</script>
