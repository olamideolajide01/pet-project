<template>
    <div>
        <v-row justify="center">
            <h1 class="secondary--text">What Our <span class="red--text">Clients</span> Say?</h1>
        </v-row>

       <v-row  justify="center">
      <v-col
       v-for="client in clients"
       :key="client.title"
       cols="12"
       sm="12"
        md="6" 
        lg="3"
        class="text-center"
        >
       

        <v-avatar class="mx-auto">
        <v-img>
          {{client.src}}
        </v-img>
        </v-avatar>

  <p class="text-center">{{client.text}}</p>

  <v-text-title class="max-auto">{{client.title}}</v-text-title>
          
      </v-col>
        </v-row>

    </div>
</template>

<script>
export default{
    data() {
      return {
       clients:[
            {
              title:'Mr Lekan',
              text: 'i love this pet store they never dissappoint..they have good pets which are friendly and funny lorem est que kihre sred you ryuer jewoj seo goeoret wor hneow queeue lome ruope utyer inhuty',
              src:'client.jpg',
              
            },
            {
              title:'Mr Buston',
              text: 'i love this pet store they never dissappoint..they have good pets which are friendly and funny hot and good pet and  quality service.patronize yofopet,they are indeed great',
              src:'client',
             

            },
            {
              title:'Brian Cobby',
              text: 'i love this pet store they never dissappoint..they have good pets which are friendly and funny',
              src:'client',
             
            },
           
          ]
      }
    },

    }
</script>

