<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        Delivery
      </v-stepper-step>

     

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Payment
      </v-stepper-step>

     

      <v-stepper-step step="3">
        Summary
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content>
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Proceed To Payment
        </v-btn>
      </v-stepper-content>

      <v-stepper-content>
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
         Proceed To Summary 
        </v-btn>
      </v-stepper-content>

      <v-stepper-content>
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          CONFIRM
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>


<script>
  export default {
    name: "Cashout",
    data () {
      return {
        e1: 1,
      }
    },
  }
</script>