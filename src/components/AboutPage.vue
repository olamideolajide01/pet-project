<template>
<div>
    <v-row justify="center"> 
     <h1>ABOUT <span class="green--text text-center ">US</span> </h1>
    </v-row>


    <v-row justify="space-around" class=" mt-12">
        <v-col cols="12" sm="12" md="8" lg="6" class="text-center">
<v-img 
  src="about.png"
  height="300"
  width="300"
  class="text-center mx-auto"
>
</v-img>
 </v-col>


      <v-col cols="12" sm="12" md="4" lg="6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi dolore molestias maxime, officiis praesentium ea tenetur cum aut provident eos ab repellendus non nostrum. Ut sunt consequuntur minus saepe.</p>
          <v-card-actions class="mt-n4">
      <v-btn
        color="orange lighten-2"
        text
      >
        Read More

        <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      </v-btn>

      
    </v-card-actions>
      <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi commodi quam cum veritatis, iure aut hic suscipit sunt magnam quibusdam, ut sit tempore repellat, qui iusto obcaecati neque autem! Eum.
         Animi eius consectetur totam quo a enim quos labore iure, deserunt quam distinctio hic explicabo ipsum similique dolorum placeat debitis tempora quidem officiis earum, assumenda laboriosam illum rerum iste! Dolorum!
         Beatae illum eius similique itaque molestias expedita corporis suscipit iure! Ducimus quia nobis, voluptas id eos rerum, nemo eligendi culpa et exercitationem perspiciatis voluptate veniam dolorem? Exercitationem maxime modi nulla.
         Ipsum eaque, accusamus aliquam nemo hic totam modi ea voluptate in deserunt, omnis aut quas eveniet nostrum tenetur sunt eos dolor. Omnis dignissimos repudiandae nobis laudantium debitis fugiat quos incidunt?
         Quidem porro corrupti, inventore accusamus laboriosam asperiores error, laudantium debitis non nesciunt sunt dolorum deserunt ut! Alias similique ipsam doloremque voluptatum ad saepe pariatur dolor. Vitae rem sint libero molestiae.
         Rerum, architecto placeat consequuntur magni saepe optio, excepturi id sed, maiores facere doloribus? At libero hic nemo omnis obcaecati nobis animi a sequi, error explicabo. Nostrum eaque totam quis asperiores!
         Fugiat omnis atque eaque! Magni beatae minus fuga facilis sapiente dicta aspernatur aliquam doloremque eaque vitae architecto, provident sit quod ratione atque similique ipsum eum! Placeat animi alias exercitationem soluta!
         Excepturi dignissimos ipsum, aliquam doloremque delectus atque incidunt dolores illo, deserunt modi, tenetur sunt eveniet fuga impedit tempore aliquid quis at iste repellendus omnis. Pariatur officia a dolore facere tempore.
         Consequuntur, maiores in. Ab mollitia nemo numquam laudantium incidunt repellendus ullam culpa quia, unde, voluptatum ipsam voluptatibus odit ex laboriosam quam obcaecati corrupti tenetur earum quo praesentium asperiores inventore! Corporis?
         Possimus, dicta deserunt nostrum accusamus quis eos maxime, beatae nemo asperiores sit in repellendus quibusdam, aut quam magni. Illo dolorem maiores dicta perspiciatis, modi voluptatibus laboriosam molestias vitae recusandae minima!
        </v-card-text>
      </div>
    </v-expand-transition>
        </v-col>

    </v-row>

    </div>
</template>

<script>
    export default {
        name:"AboutPage",

         data: () => ({
      show: false,
    }),
        
    }
</script>

