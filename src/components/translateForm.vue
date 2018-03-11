<template>
  <div id="translateForm">
     <form class="well" v-on:submit="formSubmit">
       <input class="form-control" type="text" v-model="textToTranslate">
       <select class="form-control" v-model="language">
         <option value='hi'>Hindi</option>
         <option value='en'>English</option>
         <option value='ru'>Russian</option>
         <option value='zh'>Chinese</option>
         <option value='fr'>French</option>
         <option value='ja'>Japenese</option>
         <option value='pa'>Punjabi</option>
         
       </select>
       <br>
       <input class="btn btn-primary" type="submit" value="Translate">
     </form>
  </div>
</template>

<script>

export default {
  name: 'translateForm',
  data() {
    return{
      textToTranslate:'',
      language:''
    }
  },
  created(){
    this.language = 'hi';
  },
  methods:{
    formSubmit:function(e){
      this.$emit('formSubmit',this.textToTranslate,this.language);
      e.preventDefault();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
