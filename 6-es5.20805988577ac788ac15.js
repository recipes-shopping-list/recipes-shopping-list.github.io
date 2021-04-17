function _createForOfIteratorHelper(e,t){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,a=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var e=i.next();return c=e.done,e},e:function(e){a=!0,o=e},f:function(){try{c||null==i.return||i.return()}finally{if(a)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{kQpD:function(e,t,i){"use strict";i.r(t),i.d(t,"RecipesModule",(function(){return S}));var n,r=i("PCNd"),o=i("tyNb"),c=i("fXoL"),a=((n=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"canDeactivate",value:function(e,t,i,n){return e.canDeactivate()}}]),e}()).\u0275fac=function(e){return new(e||n)},n.\u0275prov=c.Hb({token:n,factory:n.\u0275fac,providedIn:"root"}),n),s=i("mrSG"),b=i("VfN6"),l=i("rBQ2"),u=i("ofXK"),d=i("dZIy"),p=function(e){return["/shopping-list",e]};function f(e,t){if(1&e){var i=c.Rb();c.Qb(0,"ul",9),c.Qb(1,"li",10),c.Qb(2,"a",11),c.oc(3,"To Shopping List"),c.Pb(),c.Pb(),c.Qb(4,"li",10),c.Qb(5,"a",12),c.Yb("click",(function(){c.ic(i);var e=c.ac(2);return e.onRecipeEdit(e.recipeDetails.id)})),c.oc(6,"Edit Recipe"),c.Pb(),c.Pb(),c.Qb(7,"li",10),c.Qb(8,"a",12),c.Yb("click",(function(){c.ic(i);var e=c.ac(2);return e.onDeleteRecipe(e.recipeDetails.id)})),c.oc(9,"Delete Recipe"),c.Pb(),c.Pb(),c.Pb()}if(2&e){var n=c.ac(2);c.Ab(2),c.dc("routerLink",c.fc(1,p,n.recipeDetails.id))}}function m(e,t){if(1&e&&(c.Qb(0,"li",13),c.oc(1),c.Pb()),2&e){var i=t.$implicit;c.Ab(1),c.rc(" ",i.name," - ",i.amount," ")}}function v(e,t){if(1&e&&(c.Ob(0),c.Qb(1,"div",1),c.Qb(2,"div",2),c.Mb(3,"img",3),c.Pb(),c.Pb(),c.Qb(4,"div",1),c.Qb(5,"div",2),c.Qb(6,"h1"),c.oc(7),c.Pb(),c.Pb(),c.Pb(),c.Qb(8,"div",1),c.Qb(9,"div",2),c.Qb(10,"div",4),c.Qb(11,"button",5),c.oc(12,"Manage Recipe"),c.Pb(),c.mc(13,f,10,3,"ul",6),c.Pb(),c.Pb(),c.Pb(),c.Qb(14,"div",1),c.Qb(15,"div",2),c.oc(16),c.Pb(),c.Pb(),c.Qb(17,"div",1),c.Qb(18,"div",2),c.Qb(19,"ul",7),c.mc(20,m,2,2,"li",8),c.Pb(),c.Pb(),c.Pb(),c.Nb()),2&e){var i=c.ac();c.Ab(3),c.ec("alt",i.recipeDetails.name),c.dc("src",i.recipeDetails.imagePath,c.jc),c.Ab(4),c.pc(i.recipeDetails.name),c.Ab(9),c.qc(" ",i.recipeDetails.description," "),c.Ab(4),c.dc("ngForOf",i.recipeDetails.ingredients)}}var g,h=((g=function(){function e(t,i,n){_classCallCheck(this,e),this.ar=t,this.rs=i,this.router=n}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.ar.paramMap.pipe(Object(b.b)(this)).subscribe((function(t){if(t.has("id")){var i,n=+t.get("id");e.rs.getRecipeById(n).subscribe((function(e){i=e.filter((function(e){return e.id===n}))})),e.recipeDetails=i[0]}}))}},{key:"onRecipeEdit",value:function(e){this.router.navigateByUrl("recipes/".concat(e,"/edit"))}},{key:"onDeleteRecipe",value:function(e){this.rs.removeNewSetOfRecipe(e),this.router.navigate(["/recipes"])}}]),e}()).\u0275fac=function(e){return new(e||g)(c.Lb(o.a),c.Lb(l.a),c.Lb(o.b))},g.\u0275cmp=c.Fb({type:g,selectors:[["app-recipe-detail"]],decls:1,vars:1,consts:[[4,"ngIf"],[1,"row"],[1,"col-lg-10"],[1,"img-fluid",3,"src","alt"],["dropdown","",1,"btn-group"],["dropdownToggle","",1,"btn","btn-primary","dropdown-toggle"],["class","dropdown-menu","role","menu",4,"dropdownMenu"],[1,"ist-group","pl-0"],["class","list-group-item",4,"ngFor","ngForOf"],["role","menu",1,"dropdown-menu"],["role","menuitem"],[1,"dropdown-item","pointer",3,"routerLink"],[1,"dropdown-item","pointer",3,"click"],[1,"list-group-item"]],template:function(e,t){1&e&&c.mc(0,v,21,5,"ng-container",0),2&e&&c.dc("ngIf",t.recipeDetails)},directives:[u.j,d.a,d.d,d.b,u.i,o.e],styles:[""]}),g=Object(s.a)([Object(b.a)()],g)),P=i("3Pt+"),y=i("AJBB");function Q(e,t){1&e&&(c.Ob(0),c.oc(1," Update "),c.Nb())}function w(e,t){1&e&&c.oc(0," Add ")}function k(e,t){1&e&&(c.Qb(0,"div",20),c.Qb(1,"div",21),c.Mb(2,"input",22),c.Pb(),c.Qb(3,"div",23),c.Mb(4,"input",24),c.Pb(),c.Qb(5,"div",23),c.Qb(6,"button",25),c.oc(7,"X"),c.Pb(),c.Pb(),c.Pb()),2&e&&c.dc("formGroupName",t.index)}var C,A,O=((C=function(){function e(t,i,n,r,o){_classCallCheck(this,e),this.ar=t,this.fb=i,this.rs=n,this.router=r,this.sls=o,this.editMode=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.ar.paramMap.pipe(Object(b.b)(this)).subscribe((function(t){t.has("id")?(e.id=+t.get("id"),e.rs.getRecipeById(e.id).subscribe((function(t){e.recipe=t,e.buildForm(),e.ingridientsListForm(),e.editMode=!0})),e.editMode=!0):(e.buildForm(),e.editMode=!1)}))}},{key:"buildForm",value:function(){var e,t,i,n;this.form=this.fb.group({id:[this.recipe?null===(e=this.recipe[0])||void 0===e?void 0:e.id:null],name:[this.recipe?null===(t=this.recipe[0])||void 0===t?void 0:t.name:null,P.l.required],imagePath:[this.recipe?null===(i=this.recipe[0])||void 0===i?void 0:i.imagePath:null,P.l.required],description:[this.recipe?null===(n=this.recipe[0])||void 0===n?void 0:n.description:null,P.l.required],ingredients:this.fb.array([])})}},{key:"ingridientsListForm",value:function(){var e,t,i=_createForOfIteratorHelper(null===(e=this.recipe[0])||void 0===e?void 0:e.ingredients);try{for(i.s();!(t=i.n()).done;){var n=t.value,r=this.fb.group({id:[n.id||null],name:[n.name||null,P.l.required],amount:[n.amount||null,[P.l.required,P.l.min(1)]]});this.ingredients.push(r)}}catch(o){i.e(o)}finally{i.f()}}},{key:"submit",value:function(){var e=this;if(this.editMode){var t=this.form.getRawValue();this.rs.updateNewSetOfRecipe(t)}else this.rs.getRecipeList().subscribe((function(t){var i=t.sort((function(e,t){return t.id-e.id}))[0],n=e.form.getRawValue(),r=Object.assign(Object.assign({},n),{id:(null==i?void 0:i.id)+1,name:n.name,imagePath:n.imagePath,description:n.description});console.log(r),e.rs.addNewSetOfRecipe(r)}));this.onCancel()}},{key:"onAddIngredient",value:function(){var e=this.fb.group({id:[1],name:[null,P.l.required],amount:[null,[P.l.required,P.l.min(1)]]});this.ingredients.push(e)}},{key:"onCancel",value:function(){this.router.navigate(["../"],{relativeTo:this.ar})}},{key:"ingredients",get:function(){return this.form.get("ingredients")}}]),e}()).\u0275fac=function(e){return new(e||C)(c.Lb(o.a),c.Lb(P.c),c.Lb(l.a),c.Lb(o.b),c.Lb(l.b))},C.\u0275cmp=c.Fb({type:C,selectors:[["app-recipe-edit"]],decls:44,vars:6,consts:[[1,"row"],[1,"col-lg-12"],[3,"formGroup","submit"],[1,"row","mb-2"],["type","submit",1,"btn","btn-success","mr-1",3,"disabled"],[4,"ngIf","ngIfElse"],["showAddButton",""],["type","submit",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"img-fluid","mb-2",3,"src"],["for","description"],["type","text","id","description","rows","6","formControlName","description",1,"form-control"],["formArrayName","ingredients",1,"col-lg-12"],["class","row mb-2",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"row","mb-2",3,"formGroupName"],[1,"col-8","col-lg-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-2","col-lg-2"],["type","number","formControlName","amount",1,"form-control"],["type","button",1,"btn","btn-danger"]],template:function(e,t){if(1&e&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Qb(2,"form",2),c.Yb("submit",(function(){return t.submit()})),c.Qb(3,"div",3),c.Qb(4,"div",1),c.Qb(5,"button",4),c.mc(6,Q,2,0,"ng-container",5),c.mc(7,w,1,0,"ng-template",null,6,c.nc),c.Pb(),c.Qb(9,"button",7),c.Yb("click",(function(){return t.onCancel()})),c.oc(10,"Cancel"),c.Pb(),c.Pb(),c.Pb(),c.Qb(11,"div",0),c.Qb(12,"div",1),c.Qb(13,"div",8),c.Qb(14,"app-form-control"),c.Qb(15,"label",9),c.oc(16,"Name"),c.Pb(),c.Mb(17,"input",10),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(18,"div",0),c.Qb(19,"div",1),c.Qb(20,"div",8),c.Qb(21,"app-form-control"),c.Qb(22,"label",11),c.oc(23,"Image URL"),c.Pb(),c.Mb(24,"input",12,13),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(26,"div",0),c.Qb(27,"div",1),c.Mb(28,"img",14),c.Pb(),c.Pb(),c.Qb(29,"div",0),c.Qb(30,"div",1),c.Qb(31,"div",8),c.Qb(32,"app-form-control"),c.Qb(33,"label",15),c.oc(34,"Description"),c.Pb(),c.Mb(35,"textarea",16),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(36,"div",0),c.Qb(37,"div",17),c.mc(38,k,8,1,"div",18),c.Mb(39,"hr"),c.Qb(40,"div",0),c.Qb(41,"div",1),c.Qb(42,"button",19),c.Yb("click",(function(){return t.onAddIngredient()})),c.oc(43," Add Ingredients "),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&e){var i=c.hc(8),n=c.hc(25);c.Ab(2),c.dc("formGroup",t.form),c.Ab(3),c.dc("disabled",t.form.invalid),c.Ab(1),c.dc("ngIf",t.editMode)("ngIfElse",i),c.Ab(22),c.dc("src",n.value,c.jc),c.Ab(10),c.dc("ngForOf",null==t.ingredients?null:t.ingredients.controls)}},directives:[P.m,P.i,P.e,u.j,y.a,P.a,P.h,P.d,P.b,u.i,P.f,P.j],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid #ef5350!important}"]}),C=Object(s.a)([Object(b.a)()],C)),I=function(e){return[e]},_=((A=function(){function e(t){_classCallCheck(this,e),this.rs=t}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||A)(c.Lb(l.a))},A.\u0275cmp=c.Fb({type:A,selectors:[["app-recipe-item"]],inputs:{recipe:["recipes","recipe"]},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix","pointer",3,"routerLink"],[1,"float-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"float-right"],[1,"img-responsive",2,"max-height","50px",3,"src","alt"]],template:function(e,t){1&e&&(c.Qb(0,"a",0),c.Qb(1,"div",1),c.Qb(2,"h4",2),c.oc(3),c.Pb(),c.Qb(4,"p",3),c.oc(5),c.Pb(),c.Pb(),c.Qb(6,"span",4),c.Mb(7,"img",5),c.Pb(),c.Pb()),2&e&&(c.dc("routerLink",c.fc(5,I,t.recipe.id)),c.Ab(3),c.pc(t.recipe.name),c.Ab(2),c.pc(t.recipe.description),c.Ab(2),c.dc("src",t.recipe.imagePath,c.jc)("alt",t.recipe.name))},directives:[o.e,o.d],styles:[".pointer[_ngcontent-%COMP%]{cursor:pointer}"]}),A);function M(e,t){1&e&&c.Mb(0,"app-recipe-item",5),2&e&&c.dc("recipes",t.$implicit)}var L,F,j,R,D=((L=function(){function e(t){_classCallCheck(this,e),this.router=t}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.router.data.subscribe((function(t){e.recipes=t.recipeList,console.log(e.recipes)}))}}]),e}()).\u0275fac=function(e){return new(e||L)(c.Lb(o.a))},L.\u0275cmp=c.Fb({type:L,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-lg-12"],["routerLink","new",1,"btn","btn-success"],[1,"row","mb-2"],[3,"recipes",4,"ngFor","ngForOf"],[3,"recipes"]],template:function(e,t){1&e&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Qb(2,"button",2),c.oc(3," New Recipe "),c.Pb(),c.Pb(),c.Pb(),c.Mb(4,"hr"),c.Qb(5,"div",3),c.Qb(6,"div",1),c.mc(7,M,1,1,"app-recipe-item",4),c.Pb(),c.Pb()),2&e&&(c.Ab(7),c.dc("ngForOf",t.recipes))},directives:[o.c,u.i,_],styles:[""]}),L),N=[{path:"",canDeactivate:[a],component:(F=function(){function e(t){_classCallCheck(this,e),this.rs=t}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.rs.recipeSelected.subscribe((function(t){console.log(t),e.recipeFromRecipeItem=t}))}},{key:"canDeactivate",value:function(){return!0}}]),e}(),F.\u0275fac=function(e){return new(e||F)(c.Lb(l.a))},F.\u0275cmp=c.Fb({type:F,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-lg-5"],[1,"col-lg-7","mb-5"]],template:function(e,t){1&e&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Mb(2,"app-recipe-list"),c.Pb(),c.Qb(3,"div",2),c.Mb(4,"router-outlet"),c.Pb(),c.Pb())},directives:[D,o.g],styles:[""]}),F),children:[{path:"new",component:O},{path:":id",component:h},{path:":id/edit",component:O}]}],x=((R=function e(){_classCallCheck(this,e)}).\u0275mod=c.Jb({type:R}),R.\u0275inj=c.Ib({factory:function(e){return new(e||R)},imports:[[o.f.forChild(N)],o.f]}),R),S=((j=function e(){_classCallCheck(this,e)}).\u0275mod=c.Jb({type:j}),j.\u0275inj=c.Ib({factory:function(e){return new(e||j)},imports:[[r.a,x]]}),j)}}]);