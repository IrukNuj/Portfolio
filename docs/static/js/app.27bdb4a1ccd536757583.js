webpackJsonp([1],{"+Wgx":function(t,i){},"9vG0":function(t,i,e){t.exports=e.p+"static/img/daru-girl_home.20bff6a.png"},JM6e:function(t,i,e){t.exports=e.p+"static/img/react_todo_app.434ca08.jpg"},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("7+uW"),s={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"menu"},[i("div",{staticClass:"menu-content"},[i("ul",{staticClass:"menu-list"},[i("router-link",{attrs:{to:"/Home"}},[i("p",{staticClass:"menu-list"},[this._v("Home")])]),this._v(" "),i("router-link",{attrs:{to:"/About"}},[i("p",{staticClass:"menu-list"},[this._v("About")])]),this._v(" "),i("router-link",{attrs:{to:"/work"}},[i("p",{staticClass:"menu-list"},[this._v("Works")])]),this._v(" "),i("router-link",{attrs:{to:"/Contact"}},[i("p",{staticClass:"menu-list"},[this._v("Contact")])])],1)])])},staticRenderFns:[]};var n={components:{Menu:e("VU/8")({name:"Menu",data:function(){return{msg:"Welcome to Your Vue.js App"}}},s,!1,function(t){e("US3E")},"data-v-9b5fadc6",null).exports},name:"App"},r={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column is-2 aside-content"},[i("Menu")],1),this._v(" "),i("div",{staticClass:"column is-10 main-content"},[i("router-view")],1)])])},staticRenderFns:[]};var o=e("VU/8")(n,r,!1,function(t){e("+Wgx")},null,null).exports,c=e("/ocq"),u={name:"WorkCard",props:{id:{type:Number,required:!1},name:{type:String,required:!0},description:{type:String,required:!0},url:{type:String,required:!1},path:{type:String,required:!1}},data:function(){return{show:!0}},computed:{imagePath:function(){return e("iGGu")("./"+this.path)}}},l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"column"},[e("transition",{attrs:{appear:""}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"card card-parent"},[e("div",{staticClass:"card-image"},[e("figure",{staticClass:"image is-4by3"},[e("img",{staticClass:"card-image",attrs:{src:t.imagePath,alt:"Placeholder image"}})])]),t._v(" "),e("div",{staticClass:"card-content"},[e("div",{staticClass:"media"},[e("div",{staticClass:"media-content"},[e("p",{staticClass:"title is-5"},[t._v(t._s(t.name))])])]),t._v(" "),e("div",{staticClass:"content"},[t._v("\n          "+t._s(t.description)+"\n        ")]),t._v(" "),e("div",{staticClass:"link-button"},[e("a",{staticClass:"button is-info is-outlined",attrs:{href:t.url}},[t._v("詳細")])])])])])],1)},staticRenderFns:[]};var d=e("VU/8")(u,l,!1,function(t){e("sm19")},"data-v-741145f6",null).exports,p=(e("mtWM"),{components:{WorkCard:d},name:"Work",data:function(){return{msg:"Welcome to Your Vue.js App",works:null}},methods:{},created:function(){this.works=e("WfVo")}}),m={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"contents"},[e("div",{staticClass:"columns"},t._l(t.works,function(i){return e("div",{key:"{{ work.id }}"},[i.id<=3?e("div",[e("WorkCard",{attrs:{id:i.id,name:i.name,description:i.description,url:i.url,path:i.path}})],1):t._e()])})),t._v(" "),e("div",{staticClass:"columns"},t._l(t.works,function(i){return e("div",{key:"{{ work.id }}"},[i.id>=4&&i.id<=6?e("div",[e("WorkCard",{attrs:{id:i.id,name:i.name,description:i.description,url:i.url,path:i.path}})],1):t._e()])})),t._v(" "),e("div",{staticClass:"columns"},t._l(t.works,function(i){return e("div",{key:"{{ work.id }}"},[i.id>=7&&i.id<=9?e("div",[e("WorkCard",{attrs:{id:i.id,name:i.name,description:i.description,url:i.url,path:i.path}})],1):t._e()])}))])},staticRenderFns:[]};var v=e("VU/8")(p,m,!1,function(t){e("f1ZQ")},"data-v-3ce034fe",null).exports,f={components:{WorkCard:d},name:"About",data:function(){return{msg:"Welcome to Your Vue.js App",image_src:e("WAlq")}}},g={render:function(){var t=this.$createElement,i=this._self._c||t;return i("transition",[i("div",{staticClass:"box zoomIn limitation"},[i("article",{staticClass:"media"},[i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-64x64"},[i("img",{staticClass:"is-rounded",attrs:{src:e("WAlq"),alt:"Image"}})])]),this._v(" "),i("div",{staticClass:"media-content"},[i("div",{staticClass:"content"},[i("p",[this._v("\n            石川でぽちぽち開発をしているWebエンジニアです。"),i("br"),this._v("\n            気まぐれでWebアプリを作ったりフロントを書いたりしています。"),i("br"),this._v("\n            生息区域は主にTwitter、話しかけたりふぁぼで反応を与えると喜びます。"),i("br")]),this._v(" "),i("p",[this._v("Twittet : @Iruk_Nuj")])])])])])])},staticRenderFns:[]};var h=e("VU/8")(f,g,!1,function(t){e("eiL3")},"data-v-f4105070",null).exports,_={render:function(){var t=this.$createElement,i=this._self._c||t;return i("transition",[i("div",{staticClass:"box zoomIn limitation"},[i("article",{staticClass:"media"},[i("div",{staticClass:"media-left"},[i("figure",{staticClass:"image is-64x64"},[i("img",{staticClass:"is-rounded",attrs:{src:e("WAlq"),alt:"Image"}})])]),this._v(" "),i("div",{staticClass:"media-content"},[i("div",{staticClass:"content"},[i("p",[this._v("Twittet : @Iruk_Nuj")]),this._v(" "),i("p",[this._v("Mail : kurijune(@)gmail(.)com")])])])])])])},staticRenderFns:[]};var C=e("VU/8")({name:"Contact",data:function(){return{msg:"Welcome to Your Vue.js App"}}},_,!1,function(t){e("pLi/")},"data-v-5a67fb3d",null).exports,k={render:function(){var t=this.$createElement,i=this._self._c||t;return i("transition",{attrs:{appear:""}},[i("div",{staticClass:"box home-content level"},[i("div",{staticClass:"level-left"},[i("h1",{staticClass:"subtitle"},[this._v("Welcome to Iruk's site!")])]),this._v(" "),i("div",{staticClass:"daru-girl-image"},[i("img",{attrs:{src:e("9vG0")}})])])])},staticRenderFns:[]};var b=e("VU/8")({name:"Home",data:function(){return{}}},k,!1,function(t){e("cI43")},"data-v-22ff49c4",null).exports;a.a.use(c.a);var x=new c.a({routes:[{path:"/",name:"Home",component:b},{path:"/Home",name:"Home",component:b},{path:"/work",name:"work",component:v},{path:"/about",name:"about",component:h},{path:"/contact",name:"Contact",component:C}]});a.a.config.productionTip=!1,new a.a({el:"#app",router:x,components:{App:o},template:"<App/>"})},RMUx:function(t,i,e){t.exports=e.p+"static/img/daru-girl.a3cb7a2.jpg"},US3E:function(t,i){},WAlq:function(t,i,e){t.exports=e.p+"static/img/daru-girl.830385a.jpeg"},WfVo:function(t,i){t.exports=[{id:1,name:"Mint",description:"初めて作ったWebアプリ。ユーザー登録と記事の投稿機能を備えた簡単なブロクSNSっぽいアプリ。",url:"https://github.com/IrukNuj/mint_app",path:"mint.jpg"},{id:2,name:"だる子(TwitterBot)",description:"RubyとSinatraで簡単なTwitterBotを作成、Webアプリの概念をざっくりと学ぶいい経験でした。",url:"https://twitter.com/Daru_Girl",path:"daru-girl.jpg"},{id:3,name:"だる子(Alexa)",description:"先のTwitterBotに追随するアプリをRubyとralyxaで開発。当時はralyxaの記事が少なくて苦労した覚えがあります((",url:"URL",path:"daru-girl_alexa.jpg"},{id:4,name:"Trend-getter",description:"日経新聞社のインターンで作成したアプリ、Googleの検索トレンドに応じてそれに類推した記事を表示します。",url:"https://trend-getter-2018.herokuapp.com/",path:"trend-getter.jpg"},{id:5,name:"React Todo App",description:"Reactの習作、Props云々コンポーネント試行をざっくり把握してmaterial-designで簡単に色付けしました。",url:"https://iruknuj.github.io/React_Todo_App/",path:"react_todo_app.jpg"}]},bfnQ:function(t,i,e){t.exports=e.p+"static/img/daru-girl_alexa.13a503f.jpg"},cI43:function(t,i){},eiL3:function(t,i){},f1ZQ:function(t,i){},iGGu:function(t,i,e){var a={"./daru-girl.jpg":"RMUx","./daru-girl_alexa.jpg":"bfnQ","./mint.jpg":"upZ1","./react_todo_app.jpg":"JM6e","./trend-getter.jpg":"oH74"};function s(t){return e(n(t))}function n(t){var i=a[t];if(!(i+1))throw new Error("Cannot find module '"+t+"'.");return i}s.keys=function(){return Object.keys(a)},s.resolve=n,t.exports=s,s.id="iGGu"},oH74:function(t,i,e){t.exports=e.p+"static/img/trend-getter.fdbf814.jpg"},"pLi/":function(t,i){},sm19:function(t,i){},upZ1:function(t,i,e){t.exports=e.p+"static/img/mint.9382dd7.jpg"}},["NHnr"]);
//# sourceMappingURL=app.27bdb4a1ccd536757583.js.map