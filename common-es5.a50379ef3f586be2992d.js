function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{rBQ2:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return l}));var i,s,o=t("fXoL"),c=function e(n,t,i){_classCallCheck(this,e),this.id=n,this.name=t,this.amount=i},r=function e(n,t,i,s,o){_classCallCheck(this,e),this.id=n,this.name=t,this.description=i,this.imagePath=s,this.ingredients=o},a=t("LRne"),u=((s=function(){function e(){_classCallCheck(this,e),this.recipeSelected=new o.n,this.recipes=[new r(1,"Menudo","This is simple menudo recipe","https://scm-assets.constant.co/scm/unilever/f4b5026fe1dd6b46672ba349cfbb04e4/09324262-a78b-45d3-b2ff-44d2d59f07c5.jpg",[new c(1,"beef",2),new c(2,"potato",10),new c(3,"carrot",5)]),new r(2,"Adobo","This is simple adobo recipe","https://findfilipinolove.com/wp-content/uploads/2016/12/Pork-Adobo-768x576.jpg",[new c(4,"chicken",2),new c(5,"potato",5),new c(6,"egg",8)]),new r(3,"Tinola","This is simple tinola recipe","https://asset-apac.unileversolutions.com/content/dam/unilever/global/recipe_image/110/11027/110276-default.jpg.ulenscale.768x576.jpg",[new c(7,"chicken",2),new c(8,"chayote",3),new c(9,"papaya",3)])]}return _createClass(e,[{key:"getRecipeList",value:function(){return Object(a.a)(this.recipes)}},{key:"getRecipeById",value:function(e){return Object(a.a)(this.recipes.filter((function(n){return n.id===e})))}}]),e}()).\u0275fac=function(e){return new(e||s)},s.\u0275prov=o.Gb({token:s,factory:s.\u0275fac,providedIn:"root"}),s),l=((i=function(){function e(){_classCallCheck(this,e),this.ingredients=[new c(10,"Apples",2),new c(11,"Tomatoes",2)]}return _createClass(e,[{key:"getIngredients",value:function(){return Object(a.a)(this.ingredients)}},{key:"addNewSetOfIngredients",value:function(e){this.ingredients.push(e)}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275prov=o.Gb({token:i,factory:i.\u0275fac,providedIn:"root"}),i)}}]);