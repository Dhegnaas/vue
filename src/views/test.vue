<!-- views/Home.vue ama App.vue -->
<template>
  <Test 
    type="text"
    magacaa="Geli-magacaaga"
  />
</template>

<script>
import Test from '../components/tests.vue';

export default {
  components: {
    Test
  },

  data(){
    return{
        magacaa: ''
    }
  }
}
</script>
