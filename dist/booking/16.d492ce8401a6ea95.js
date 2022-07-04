"use strict";(self.webpackChunkbooking=self.webpackChunkbooking||[]).push([[16],{6016:(O,c,s)=>{s.r(c),s.d(c,{AuthModule:()=>x});var u=s(9808),A=s(6554),a=s(3287),t=s(5e3),p=s(6531),I=s(605),v=s(8332);function Z(e,r){1&e&&(t.TgZ(0,"div",8),t._UZ(1,"router-outlet"),t.qZA())}function U(e,r){1&e&&t._UZ(0,"app-loader")}function S(e,r){if(1&e&&t._UZ(0,"app-alert",9),2&e){const n=t.oxw();t.Q6J("message",n.message)("status",n.status)}}let C=(()=>{class e{constructor(n,o){this.router=n,this.store=o,this.message="",this.status="error",this.loading=!1}ngOnInit(){this.store.select("auth").subscribe(n=>{this.token=n.token,this.message=n.error,this.loading=n.loading,this.token&&this.router.navigate(["/booking/developers"])})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.F0),t.Y36(p.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-auth"]],outputs:{message:"message",status:"status"},decls:8,vars:3,consts:[[1,"sign"],[1,"container"],[1,"row"],[1,"col-12"],[1,"sign-wrap"],["class","sign-inner",4,"ngIf"],[4,"ngIf"],[3,"message","status",4,"ngIf"],[1,"sign-inner"],[3,"message","status"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t.YNc(5,Z,2,0,"div",5),t.YNc(6,U,1,0,"app-loader",6),t.YNc(7,S,1,2,"app-alert",7),t.qZA()()()()()),2&n&&(t.xp6(5),t.Q6J("ngIf",!o.loading),t.xp6(1),t.Q6J("ngIf",o.loading),t.xp6(1),t.Q6J("ngIf",!o.loading&&o.message))},directives:[u.O5,a.lC,I.R,v.w],styles:[".sign[_ngcontent-%COMP%]{height:100vh}.sign-wrap[_ngcontent-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column}.sign-wrap[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{margin-top:20px}.sign-inner[_ngcontent-%COMP%]{margin-bottom:20px}.sign-form[_ngcontent-%COMP%]{width:350px;height:max-content;display:flex;flex-direction:column}"]}),e})();var d=s(5861),i=s(3075),m=s(8457),l=s(3489),h=s(7531),f=s(7423);let y=(()=>{class e{constructor(n,o){this.router=n,this.store=o}ngOnInit(){this.setSignInForm()}setSignInForm(){this.signInForm=new i.cw({email:new i.NI("",[i.kI.required,i.kI.email]),password:new i.NI("",[i.kI.required])})}onSignIn(){var n=this;return(0,d.Z)(function*(){if(!n.signInForm.valid)return;const o=n.signInForm.value;yield n.store.dispatch(new m.lA({email:o.email,password:o.password})),yield n.store.dispatch(new m.Lz({email:o.email}))})()}toSignUp(){this.signInForm.reset(),this.router.navigate(["auth/sign-up"]),this.store.dispatch(new m.PH)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.F0),t.Y36(p.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sign-in"]],decls:16,vars:2,consts:[[1,"sign-form",3,"formGroup","ngSubmit"],["appearance","fill",1,"example-full-width"],["formControlName","email","matInput",""],["type","password","formControlName","password","matInput",""],[1,"example-button-row"],["type","submit","mat-raised-button","","color","primary",3,"disabled"],["type","button","mat-button","",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.onSignIn()}),t.TgZ(1,"h1"),t._uU(2,"Sign In"),t.qZA(),t.TgZ(3,"mat-form-field",1)(4,"mat-label"),t._uU(5,"Email"),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.TgZ(7,"mat-form-field",1)(8,"mat-label"),t._uU(9,"Password"),t.qZA(),t._UZ(10,"input",3),t.qZA(),t.TgZ(11,"div",4)(12,"button",5),t._uU(13,"Sign In"),t.qZA(),t.TgZ(14,"button",6),t.NdJ("click",function(){return o.toSignUp()}),t._uU(15,"Sign Up"),t.qZA()()()),2&n&&(t.Q6J("formGroup",o.signInForm),t.xp6(12),t.Q6J("disabled",!o.signInForm.valid&&o.signInForm.touched))},directives:[i._Y,i.JL,i.sg,l.KE,l.hX,i.Fj,h.Nt,i.JJ,i.u,f.lW],styles:[".sign-form[_ngcontent-%COMP%]{width:350px;height:max-content;display:flex;flex-direction:column}"]}),e})();var F=s(6363),w=s(4107),T=s(508);function b(e,r){if(1&e&&(t.TgZ(0,"mat-option",11),t._uU(1),t.qZA()),2&e){const n=r.$implicit;t.Q6J("value",n),t.xp6(1),t.Oqu(n)}}const J=[{path:"",component:C,children:[{path:"sign-in",component:y},{path:"sign-up",component:(()=>{class e{constructor(n,o){this.router=n,this.store=o,this.roles=Object.values(F.b)}ngOnInit(){this.setSignUpForm()}setSignUpForm(){this.signUpForm=new i.cw({name:new i.NI("",[i.kI.required]),email:new i.NI("",[i.kI.required,i.kI.email]),role:new i.NI("",[i.kI.required]),password:new i.NI("",[i.kI.required,i.kI.minLength(6)])})}onSignUp(){var n=this;return(0,d.Z)(function*(){if(!n.signUpForm.valid)return;const o=n.signUpForm.value;yield n.store.dispatch(new m.Jj({name:o.name,email:o.email,role:o.role,password:o.password}))})()}toSignIn(){this.signUpForm.reset(),this.router.navigate(["auth/sign-in"]),this.store.dispatch(new m.PH)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(a.F0),t.Y36(p.yh))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sign-up"]],decls:25,vars:3,consts:[[1,"sign-form",3,"formGroup","ngSubmit"],["appearance","fill",1,"example-full-width"],["formControlName","name","matInput",""],["formControlName","email","matInput",""],["appearance","fill"],["formControlName","role"],[3,"value",4,"ngFor","ngForOf"],["type","password","formControlName","password","matInput",""],[1,"example-button-row"],["type","submit","mat-raised-button","","color","primary",3,"disabled"],["type","button","mat-button","",3,"click"],[3,"value"]],template:function(n,o){1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.onSignUp()}),t.TgZ(1,"h1"),t._uU(2,"Sign Up"),t.qZA(),t.TgZ(3,"mat-form-field",1)(4,"mat-label"),t._uU(5,"Name"),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.TgZ(7,"mat-form-field",1)(8,"mat-label"),t._uU(9,"Email"),t.qZA(),t._UZ(10,"input",3),t.qZA(),t.TgZ(11,"mat-form-field",4)(12,"mat-label"),t._uU(13,"Role"),t.qZA(),t.TgZ(14,"mat-select",5),t.YNc(15,b,2,2,"mat-option",6),t.qZA()(),t.TgZ(16,"mat-form-field",1)(17,"mat-label"),t._uU(18,"Password"),t.qZA(),t._UZ(19,"input",7),t.qZA(),t.TgZ(20,"div",8)(21,"button",9),t._uU(22,"Sign Up"),t.qZA(),t.TgZ(23,"button",10),t.NdJ("click",function(){return o.toSignIn()}),t._uU(24,"Sign In"),t.qZA()()()),2&n&&(t.Q6J("formGroup",o.signUpForm),t.xp6(15),t.Q6J("ngForOf",o.roles),t.xp6(6),t.Q6J("disabled",!o.signUpForm.valid&&o.signUpForm.touched))},directives:[i._Y,i.JL,i.sg,l.KE,l.hX,i.Fj,h.Nt,i.JJ,i.u,w.gD,u.sg,T.ey,f.lW],styles:[".sign-form[_ngcontent-%COMP%]{width:350px;height:max-content;display:flex;flex-direction:column}"]}),e})()}]}];let N=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.Bz.forChild(J)],a.Bz]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[u.ez,A.m,N]]}),e})()}}]);