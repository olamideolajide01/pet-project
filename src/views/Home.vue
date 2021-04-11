<template>
<div>


<div col=12, md=5, sm=12>
    <SlideBanner/>
    </div>

    
 
    <FeaturePet class="mt-12"
     @click="addCart(pet)"/>

    <GroupColumn class="mt-12 grey lighten-4 "/>
    

<div class="mt-12">
<v-row justify="center">
    <v-col cols="12" sm="12"  md="4"  lg="3" >
    <SetPrice/> 
    </v-col>  
    <v-col  cols="12" sm="12"  md="4"  lg="3"> 
    <BestSell/> 
    </v-col>   
    <v-col cols="12" sm="12"  md="4"  lg="3" > 
    <FeatureSell/> 
    </v-col>   
</v-row>
</div>

<ClientView class="mt-12 bg  pa-16"/>
<ContactAdd class="mt-12"/>

<div v-show="$vuetify.breakpoint.xsOnly" class="text-center mt-10">
<div  >
       <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2 black--text"
          icon 
          x-small  
        >
          <v-icon size="20px" >
            {{ icon }}
          </v-icon>
         </v-btn>
         </div>
          <div class="text-center" >
        Copyright @{{ new Date().getFullYear() }} — Yofo<span class="pt-4 red--text">PETs</span>
      </div>
</div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import GroupColumn from '@/components/GroupColumn';
import SlideBanner from '@/components/SlideBanner';
import FeaturePet from '@/components/FeaturePet';
import SetPrice from '@/components/SetPrice';
import BestSell from '@/components/BestSell';
import FeatureSell from '@/components/FeatureSell';
import ClientView from '@/components/ClientView';
import ContactAdd from '@/components/ContactAdd.vue';

  
  
  export default {
      name: "home",

  components: {
    GroupColumn,
    SlideBanner,
    FeaturePet,
    SetPrice,
    BestSell,
    FeatureSell,
    ClientView,
    ContactAdd
},

data() {
    return {
        icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin', 
       'mdi-instagram',
      ],
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

<style scoped>
.bg{
  background-color: bisque;
}
</style>