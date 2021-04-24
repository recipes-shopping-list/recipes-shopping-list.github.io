(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"q5z/":function(t,e,n){"use strict";n.r(e),n.d(e,"ShoppingListModule",(function(){return R}));var i=n("PCNd"),s=n("tyNb"),r=n("mrSG"),o=n("VfN6"),b=n("fXoL"),c=n("rBQ2"),d=n("3Pt+"),u=n("bOdf"),l=n("AJBB"),a=n("ofXK");function m(t,e){1&t&&(b.Pb(0),b.wc(1," Update "),b.Ob())}function p(t,e){1&t&&b.wc(0," Add ")}let f=(()=>{let t=class{constructor(t,e){this.fb=t,this.sls=e,this.editMode=!1}ngOnInit(){this.buildForm(),this.sls.startedEditing.pipe(Object(o.b)(this),Object(u.a)(t=>this.sls.getIngredientById(t))).subscribe(t=>{var e,n,i;this.form.patchValue({id:null===(e=t[0])||void 0===e?void 0:e.id,name:null===(n=t[0])||void 0===n?void 0:n.name,amount:null===(i=t[0])||void 0===i?void 0:i.amount}),this.editMode=!0})}buildForm(){this.form=this.fb.group({id:[null],name:[null,d.n.required],amount:[null,[d.n.required,d.n.min(1)]]})}submit(){if(this.editMode){const t=this.form.getRawValue();this.sls.updateNewSetOfIngredients(t),this.editMode=!1,this.reset()}else this.sls.getIngredients().subscribe(t=>{const e=t.sort((t,e)=>e.id-t.id)[0],n=this.form.getRawValue();this.sls.addNewSetOfIngredients({id:(null==e?void 0:e.id)+1,name:n.name,amount:n.amount})})}deleteIngredients(){this.sls.getIngredients().subscribe(t=>{const e=this.form.getRawValue();if(e.id){const n=t.findIndex(t=>t.id===e.id);this.sls.removeNewSetOfIngredients(n)}else alert("please select ingredients");this.reset()})}reset(){this.name.reset(),this.amount.reset(),this.id.reset()}get name(){return this.form.get("name")}get amount(){return this.form.get("amount")}get id(){return this.form.get("id")}};return t.\u0275fac=function(e){return new(e||t)(b.Mb(d.c),b.Mb(c.b))},t.\u0275cmp=b.Gb({type:t,selectors:[["app-shopping-edit"]],decls:24,vars:4,consts:[[3,"formGroup","submit"],[1,"row"],[1,"col-lg-12"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","formControlName","amount",1,"form-control"],["type","sumbit",1,"btn","btn-success","mr-1",3,"disabled"],[4,"ngIf","ngIfElse"],["showAddButton",""],["type","button",1,"btn","btn-danger","mx-1",3,"click"],["type","button",1,"btn","btn-primary","mx-1",3,"click"]],template:function(t,e){if(1&t&&(b.Rb(0,"form",0),b.Zb("submit",(function(){return e.submit()})),b.Rb(1,"div",1),b.Rb(2,"div",2),b.Rb(3,"div",1),b.Rb(4,"div",3),b.Rb(5,"label",4),b.wc(6,"Name"),b.Qb(),b.Rb(7,"app-form-control"),b.Nb(8,"input",5),b.Qb(),b.Qb(),b.Rb(9,"div",6),b.Rb(10,"label",7),b.wc(11,"Amount"),b.Qb(),b.Rb(12,"app-form-control"),b.Nb(13,"input",8),b.Qb(),b.Qb(),b.Qb(),b.Rb(14,"div",1),b.Rb(15,"div",2),b.Rb(16,"button",9),b.uc(17,m,2,0,"ng-container",10),b.uc(18,p,1,0,"ng-template",null,11,b.vc),b.Qb(),b.Rb(20,"button",12),b.Zb("click",(function(){return e.deleteIngredients()})),b.wc(21,"Delete"),b.Qb(),b.Rb(22,"button",13),b.Zb("click",(function(){return e.reset()})),b.wc(23,"Clear"),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb(),b.Qb()),2&t){const t=b.nc(19);b.gc("formGroup",e.form),b.Ab(16),b.gc("disabled",e.form.invalid),b.Ab(1),b.gc("ngIf",e.editMode)("ngIfElse",t)}},directives:[d.o,d.k,d.e,l.a,d.a,d.j,d.d,d.l,a.k],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid #ef5350!important}"]}),t=Object(r.a)([Object(o.a)()],t),t})();function g(t,e){if(1&t){const t=b.Sb();b.Rb(0,"a",4),b.Zb("click",(function(){b.oc(t);const n=e.$implicit;return b.bc().onEditItem(n.id)})),b.wc(1),b.Qb()}if(2&t){const t=e.$implicit;b.Ab(1),b.zc(" ",t.name," (",t.amount,") ")}}let h=(()=>{let t=class{constructor(t,e,n){this.sls=t,this.rs=e,this.ar=n,this.ingredients=[]}ngOnInit(){this.ar.paramMap.pipe(Object(o.b)(this)).subscribe(t=>{if(t.has("id")){const e=+t.get("id");this.rs.getRecipeById(e).subscribe(t=>{t[0].ingredients.map(t=>{this.sls.addNewSetOfIngredients(t)})})}this.sls.getIngredients().pipe(Object(o.b)(this)).subscribe(t=>{this.ingredients=t})})}onEditItem(t){this.sls.startedEditing.next(t)}ngAfterViewInit(){}ngOnChanges(t){}};return t.\u0275fac=function(e){return new(e||t)(b.Mb(c.b),b.Mb(c.a),b.Mb(s.a))},t.\u0275cmp=b.Gb({type:t,selectors:[["app-shopping-list"]],features:[b.yb],decls:6,vars:1,consts:[[1,"row"],[1,"col-lg-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer;",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(t,e){1&t&&(b.Rb(0,"div",0),b.Rb(1,"div",1),b.Nb(2,"app-shopping-edit"),b.Nb(3,"hr"),b.Rb(4,"ul",2),b.uc(5,g,2,2,"a",3),b.Qb(),b.Qb(),b.Qb()),2&t&&(b.Ab(5),b.gc("ngForOf",e.ingredients))},directives:[f,a.j],styles:[""]}),t=Object(r.a)([Object(o.a)()],t),t})();const w=[{path:"",component:h},{path:":id",component:h}];let v=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(e){return new(e||t)},imports:[[s.f.forChild(w)],s.f]}),t})(),R=(()=>{class t{}return t.\u0275mod=b.Kb({type:t}),t.\u0275inj=b.Jb({factory:function(e){return new(e||t)},imports:[[i.a,v]]}),t})()}}]);