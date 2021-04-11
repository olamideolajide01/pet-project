<template>
<div>

<div  class=" teal lighten-5">
     <AboutPage />
</div>

 <div>
     <ServicePag class="mt-16"/>
 </div>
    
</div>
     
  
</template>

<script>
import AboutPage from '@/components/AboutPage';
import  ServicePag from '@/components/ServicePag';

    export default {
        name: "About",

        components: {
            AboutPage,
            ServicePag,
        }
        
    }
</script>

