<template>
  <input 
    :type="type"
    v-model="input"
    :placeholder="magacaa"
    class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
  >
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    magacaa: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      input: ''
    }
  }
}
</script>
