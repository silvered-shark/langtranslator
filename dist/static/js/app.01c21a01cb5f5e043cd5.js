webpackJsonp([0],{"+0qL":function(t,e){},0:function(t,e){},JG7k:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"translateForm"}},[a("form",{staticClass:"well",on:{submit:t.formSubmit}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.textToTranslate,expression:"textToTranslate"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.textToTranslate},on:{input:function(e){e.target.composing||(t.textToTranslate=e.target.value)}}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.language=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"hi"}},[t._v("Hindi")]),t._v(" "),a("option",{attrs:{value:"en"}},[t._v("English")]),t._v(" "),a("option",{attrs:{value:"ru"}},[t._v("Russian")]),t._v(" "),a("option",{attrs:{value:"zh"}},[t._v("Chinese")])]),t._v(" "),a("br"),t._v(" "),a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"Translate"}})])])},staticRenderFns:[]};var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"well",attrs:{id:"translateOutput"}},[e("h2",[this._v(this._s(this.translatedText))])])},staticRenderFns:[]};var l={name:"App",components:{translateForm:a("VU/8")({name:"translateForm",data:function(){return{textToTranslate:"",language:""}},created:function(){this.language="hi"},methods:{formSubmit:function(t){this.$emit("formSubmit",this.textToTranslate,this.language),t.preventDefault()}}},r,!1,function(t){a("NweT")},null,null).exports,translateOutput:a("VU/8")({name:"translateOutput",props:["translatedText"]},s,!1,function(t){a("JG7k")},null,null).exports},data:function(){return{translatedText:""}},methods:{translateText:function(t,e){var a=this;this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180311T060713Z.182ae4b0b4556324.29a7ed1deef76ff3ef9d615f07b11f4da8c000e7&lang="+e+"&text="+t).then(function(t){a.translatedText=t.body.text[0]})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center",attrs:{id:"app"}},[a("h1",[t._v("Language Translator")]),t._v(" "),a("h5",[t._v("Made with Vue.js")]),t._v(" "),a("hr"),t._v(" "),a("translateForm",{on:{formSubmit:t.translateText}}),t._v(" "),a("br"),t._v(" "),a("translateOutput",{domProps:{textContent:t._s(t.translatedText)}})],1)},staticRenderFns:[]};var i=a("VU/8")(l,o,!1,function(t){a("+0qL")},null,null).exports,u=a("8+8L");n.a.config.productionTip=!1,n.a.use(u.a),new n.a({el:"#app",components:{App:i},template:"<App/>"})},NweT:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.01c21a01cb5f5e043cd5.js.map