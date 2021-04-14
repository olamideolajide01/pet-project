<template>
<v-app>
<v-app-bar app >
    <v-toolbar-title v-show="!$vuetify.breakpoint.xsOnly"><h4>Yofo<span class="pt-4 red--text">PETs</span></h4> </v-toolbar-title>

    <v-spacer></v-spacer>

    <span   v-show="$vuetify.breakpoint.xsOnly" >
      <v-row>
     <v-text-field
        class=" primary--text mx-4"
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
        solo-inverted >
        </v-text-field>

       <v-badge  bordered class="mr-4"  color="error"  overlap >
  <template v-slot:badge>
    {{carts.length}} 
  </template>
<v-icon  @click="drawer = !drawer" color="success" left>mdi-cart</v-icon>
</v-badge>

    </v-row>
    </span>

    <v-toolbar-items class="hidden-xs-only align-center" >
<v-chip item: to= '/' class="mr-3 success pill" >
<v-icon small left>mdi-home</v-icon>
  Home  
</v-chip>
<v-chip item: to= '/about' class="mr-3 primary">
<v-icon small left>mdi-information</v-icon>
  About Us 
  </v-chip>
<v-chip item: to= '/pets' class="mr-3 secondary">
<v-icon small left>mdi-store</v-icon>
  Pets
</v-chip>

<v-badge  bordered class="mr-4"  color="error"  overlap >
  <template v-slot:badge>
    {{carts.length}} 
  </template>
  <v-chip  to="/cart"  class=" amber accent-4">
<v-icon small left>mdi-cart</v-icon>
  Cart
</v-chip>
</v-badge> 
 

<v-chip item: to= '/login' class=" teal accent-4">
<v-icon small left>mdi-account</v-icon>
  Login
</v-chip>
    </v-toolbar-items>
</v-app-bar>

<v-navigation-drawer
      v-model="drawer"
      app
      right
      temporary
      width="400px"
      v-show="$vuetify.breakpoint.xsOnly"
      hide-overlay
    >
    <MobileCart/>

    </v-navigation-drawer>


<v-bottom-navigation 
  v-model= "bottom"
  :app="mobile"
  v-show="mobile"
>

    <v-btn to="/">
        <span >Home</span>

        <v-icon color="primary">mdi-home</v-icon>
      </v-btn>

      <v-btn to="/about">
        <span>About</span>
     <v-icon color="success">mdi-information</v-icon>
      </v-btn>

      <v-btn to="/pets">
        <span>Pets</span>
        <v-icon color="red">mdi-store</v-icon>
      </v-btn>

      <v-btn to="/login">
        <span>Account</span>

        <v-icon color="teal">mdi-account</v-icon>
      </v-btn>
     
</v-bottom-navigation>

<v-container fluid >
<v-main >
    <router-view></router-view>
</v-main>
</v-container>


<v-footer app
v-show="!mobile"
 >

  <v-card width="100%" class="text-center">
<v-card-text>
  <div >
       <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2 black--text"
          justify = "center"
          icon 
          x-small
          
         
        >
          <v-icon size="20px" >
            {{ icon }}
          </v-icon>
         </v-btn>
         </div>
          <div  >
        Copyright @{{ new Date().getFullYear() }} — Yofo<span class="pt-4 red--text">PETs</span>
      </div>
      </v-card-text>
    </v-card>
    </v-footer>
  </v-app>  
</template>

vue <script>
import {mapState, mapActions} from 'vuex'
import MobileCart from "@/components/MobileCart";


export default {

  components:{
            MobileCart
        },
  
    data: () => ({
      bottom: false,
      drawer: false,
    
   icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin', 
       'mdi-instagram',
      ],

   }),
   computed: {
    
    mobile() {
      return this.$vuetify.breakpoint.smAndDown
    },
    
    
    ...mapState (['carts'])


  },
  watch: {
    mobile(newValue) {
      if (newValue) {
        this.hideBottom()
      }
    }
    
  },


  methods: {
    showDrawer(){
        this.drawer = true;
    },
    hideBottom(){
        this.bottom = false;
    },
    showBottom(){
        this.bottom = true;
    },
    ...mapActions(['addCart']),
      ...mapActions(['removeCart']),
  }

}
</script>

<style >
*{
  font-style: italic;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

</style>
