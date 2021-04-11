<template>
    <div class="grey lighten-5 ">
        <v-row justify="center">
            <h1 class=" bold mt-12">CONTACT  <span class="wine--text"> US</span> </h1>
        </v-row>
   <v-row justify="center" class="mx-auto mt-12" >
       <v-col cols="12" sm="12" md="4" lg="4" class="text-center">
           <h3 class="grey lighten-5">Contact</h3>
          <p><v-icon>mdi-office-building</v-icon> No 40,Baria street 133/2 New York,United State. </p> 
          <p><v-icon>mdi-web</v-icon> www.yofopet.com </p> 
          <p><v-icon>mdi-phone-plus</v-icon> (888) 342345567 </p> 
       </v-col>
      <v-col cols="12" sm="12" md="4" lg="4" >
          <h3 class="grey lighten-5">Newsletter</h3>
           <v-text-field
            label="Enter your Email"
            solo
            dense
          ></v-text-field>
          <v-btn
        color="teal accent-4"
        depressed
        class="mt-n8"
      >
        Subscribe
      </v-btn>

      </v-col>
       <v-col cols="12" sm="12" md="8" lg="4" class="text-center" >
     <h3 class="grey lighten-5">Follow Instagram</h3>
          <v-img 
          src="insta.jpeg"
          height="200"
          width="300"
          class="mx-auto"
       >
          </v-img>
       </v-col>   
   </v-row>
   
   <v-row  justify="center">
     <v-col>
       <h2 class="teal--text">Need Help? Call Our Award-Warning</h2>
       <p>Support Team 24/7 At (888)-5555-2584</p>
     </v-col>
       <v-col cols="12" lg-12 class=" text-center mt-10 ">
       <p>PAYMENT METHOD AND DELIVERY PARTNERS</p>
      <img src="https://img.icons8.com/color/48/000000/ebay.png" class="ma-1" title="ebay"/> 
      <img src="https://img.icons8.com/cute-clipart/30/000000/paypal.png" class="ma-1" title="paypal"/>
       <img src="https://img.icons8.com/cute-clipart/30/000000/visa.png" class="ma-1" title="verve card"/>
     <img src="https://img.icons8.com/color/30/000000/mastercard.png" class="ma-1" title="mastercard"/>
       </v-col>
   </v-row>
   <v-row></v-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>

