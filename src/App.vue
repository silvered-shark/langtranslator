<template>
  <div class="text-center" id="app">
    <h1>Language Translator</h1>
    <h5>Made with Vue.js</h5>
    <hr>
    <translateForm v-on:formSubmit="translateText"></translateForm>
    <br>
    <translateOutput v-text="translatedText"></translateOutput>
  </div>
</template>

<script>
import translateForm from './components/translateForm'
import translateOutput from './components/translateOutput'

export default {
  name: 'App',
  components: {
    translateForm,translateOutput
  },
  data() {
    return {
      translatedText:''
    }
  },
  methods: {
    translateText: function(text,lang){
      //console.log(text);
         this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180311T060713Z.182ae4b0b4556324.29a7ed1deef76ff3ef9d615f07b11f4da8c000e7&lang='+lang+'&text='+text)
         .then( (res) => {
             this.translatedText = res.body.text[0];
         });

         
    }
  }
}
</script>

<style>
body{
  background: #fefefe;

}
</style>