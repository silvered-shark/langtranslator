<template>
  <div class="well" id="translateOutput">
     
     <h2>{{this.translatedText}}</h2>   
  </div>
</template>

<script>

export default {
  name: 'translateOutput',
  props: ['translatedText']
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
