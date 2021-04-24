function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"q5z/":function(t,e,n){"use strict";n.r(e),n.d(e,"ShoppingListModule",(function(){return C}));var i=n("PCNd"),r=n("tyNb"),o=n("mrSG"),s=n("VfN6"),c=n("fXoL"),a=n("rBQ2"),u=n("3Pt+"),l=n("bOdf"),b=n("AJBB"),d=n("ofXK");function f(t,e){1&t&&(c.Pb(0),c.wc(1," Update "),c.Ob())}function m(t,e){1&t&&c.wc(0," Add ")}var p,g=((p=function(){function t(e,n){_classCallCheck(this,t),this.fb=e,this.sls=n,this.editMode=!1}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.buildForm(),this.sls.startedEditing.pipe(Object(s.b)(this),Object(l.a)((function(e){return t.sls.getIngredientById(e)}))).subscribe((function(e){var n,i,r;t.form.patchValue({id:null===(n=e[0])||void 0===n?void 0:n.id,name:null===(i=e[0])||void 0===i?void 0:i.name,amount:null===(r=e[0])||void 0===r?void 0:r.amount}),t.editMode=!0}))}},{key:"buildForm",value:function(){this.form=this.fb.group({id:[null],name:[null,u.n.required],amount:[null,[u.n.required,u.n.min(1)]]})}},{key:"submit",value:function(){var t=this;if(this.editMode){var e=this.form.getRawValue();this.sls.updateNewSetOfIngredients(e),this.editMode=!1,this.reset()}else this.sls.getIngredients().subscribe((function(e){var n=e.sort((function(t,e){return e.id-t.id}))[0],i=t.form.getRawValue();t.sls.addNewSetOfIngredients({id:(null==n?void 0:n.id)+1,name:i.name,amount:i.amount})}))}},{key:"deleteIngredients",value:function(){var t=this;this.sls.getIngredients().subscribe((function(e){var n=t.form.getRawValue();if(n.id){var i=e.findIndex((function(t){return t.id===n.id}));t.sls.removeNewSetOfIngredients(i)}else alert("please select ingredients");t.reset()}))}},{key:"reset",value:function(){this.name.reset(),this.amount.reset(),this.id.reset()}},{key:"name",get:function(){return this.form.get("name")}},{key:"amount",get:function(){return this.form.get("amount")}},{key:"id",get:function(){return this.form.get("id")}}]),t}()).\u0275fac=function(t){return new(t||p)(c.Mb(u.c),c.Mb(a.b))},p.\u0275cmp=c.Gb({type:p,selectors:[["app-shopping-edit"]],decls:24,vars:4,consts:[[3,"formGroup","submit"],[1,"row"],[1,"col-lg-12"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","formControlName","amount",1,"form-control"],["type","sumbit",1,"btn","btn-success","mr-1",3,"disabled"],[4,"ngIf","ngIfElse"],["showAddButton",""],["type","button",1,"btn","btn-danger","mx-1",3,"click"],["type","button",1,"btn","btn-primary","mx-1",3,"click"]],template:function(t,e){if(1&t&&(c.Rb(0,"form",0),c.Zb("submit",(function(){return e.submit()})),c.Rb(1,"div",1),c.Rb(2,"div",2),c.Rb(3,"div",1),c.Rb(4,"div",3),c.Rb(5,"label",4),c.wc(6,"Name"),c.Qb(),c.Rb(7,"app-form-control"),c.Nb(8,"input",5),c.Qb(),c.Qb(),c.Rb(9,"div",6),c.Rb(10,"label",7),c.wc(11,"Amount"),c.Qb(),c.Rb(12,"app-form-control"),c.Nb(13,"input",8),c.Qb(),c.Qb(),c.Qb(),c.Rb(14,"div",1),c.Rb(15,"div",2),c.Rb(16,"button",9),c.uc(17,f,2,0,"ng-container",10),c.uc(18,m,1,0,"ng-template",null,11,c.vc),c.Qb(),c.Rb(20,"button",12),c.Zb("click",(function(){return e.deleteIngredients()})),c.wc(21,"Delete"),c.Qb(),c.Rb(22,"button",13),c.Zb("click",(function(){return e.reset()})),c.wc(23,"Clear"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&t){var n=c.nc(19);c.gc("formGroup",e.form),c.Ab(16),c.gc("disabled",e.form.invalid),c.Ab(1),c.gc("ngIf",e.editMode)("ngIfElse",n)}},directives:[u.o,u.k,u.e,b.a,u.a,u.j,u.d,u.l,d.k],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid #ef5350!important}"]}),p=Object(o.a)([Object(s.a)()],p));function h(t,e){if(1&t){var n=c.Sb();c.Rb(0,"a",4),c.Zb("click",(function(){c.oc(n);var t=e.$implicit;return c.bc().onEditItem(t.id)})),c.wc(1),c.Qb()}if(2&t){var i=e.$implicit;c.Ab(1),c.zc(" ",i.name," (",i.amount,") ")}}var v,y,w,k=((v=function(){function t(e,n,i){_classCallCheck(this,t),this.sls=e,this.rs=n,this.ar=i,this.ingredients=[]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.ar.paramMap.pipe(Object(s.b)(this)).subscribe((function(e){if(e.has("id")){var n=+e.get("id");t.rs.getRecipeById(n).subscribe((function(e){e[0].ingredients.map((function(e){t.sls.addNewSetOfIngredients(e)}))}))}t.sls.getIngredients().pipe(Object(s.b)(t)).subscribe((function(e){t.ingredients=e}))}))}},{key:"onEditItem",value:function(t){this.sls.startedEditing.next(t)}},{key:"ngAfterViewInit",value:function(){}},{key:"ngOnChanges",value:function(t){}}]),t}()).\u0275fac=function(t){return new(t||v)(c.Mb(a.b),c.Mb(a.a),c.Mb(r.a))},v.\u0275cmp=c.Gb({type:v,selectors:[["app-shopping-list"]],features:[c.yb],decls:6,vars:1,consts:[[1,"row"],[1,"col-lg-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Nb(2,"app-shopping-edit"),c.Nb(3,"hr"),c.Rb(4,"ul",2),c.uc(5,h,2,2,"a",3),c.Qb(),c.Qb(),c.Qb()),2&t&&(c.Ab(5),c.gc("ngForOf",e.ingredients))},directives:[g,d.j],styles:[""]}),v=Object(o.a)([Object(s.a)()],v)),R=[{path:"",component:k},{path:":id",component:k}],I=((w=function t(){_classCallCheck(this,t)}).\u0275mod=c.Kb({type:w}),w.\u0275inj=c.Jb({factory:function(t){return new(t||w)},imports:[[r.f.forChild(R)],r.f]}),w),C=((y=function t(){_classCallCheck(this,t)}).\u0275mod=c.Kb({type:y}),y.\u0275inj=c.Jb({factory:function(t){return new(t||y)},imports:[[i.a,I]]}),y)}}]);