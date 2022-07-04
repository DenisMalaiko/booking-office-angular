"use strict";(self.webpackChunkbooking=self.webpackChunkbooking||[]).push([[16],{6016:(q,c,s)=>{s.r(c),s.d(c,{AuthModule:()=>N});var u=s(9808),Z=s(6554),r=s(3287),t=s(5e3),p=s(6531),I=s(605),v=s(8332);function U(o,a){1&o&&(t.TgZ(0,"div",8),t._UZ(1,"router-outlet"),t.qZA())}function C(o,a){1&o&&t._UZ(0,"app-loader")}function y(o,a){if(1&o&&t._UZ(0,"app-alert",9),2&o){const n=t.oxw();t.Q6J("message",n.mess)("status",n.stat)}}let S=(()=>{class o{constructor(n,e){this.router=n,this.store=e,this.mess="",this.stat="error",this.loading=!1}ngOnInit(){this.store.select("auth").subscribe(n=>{this.token=n.token,this.mess=n.error,this.loading=n.loading,this.token&&this.router.navigate(["/booking/developers"])})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.F0),t.Y36(p.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-auth"]],outputs:{mess:"mess",stat:"stat"},decls:8,vars:3,consts:[[1,"sign"],[1,"container"],[1,"row"],[1,"col-12"],[1,"sign-wrap"],["class","sign-inner",4,"ngIf"],[4,"ngIf"],[3,"message","status",4,"ngIf"],[1,"sign-inner"],[3,"message","status"]],template:function(n,e){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t.YNc(5,U,2,0,"div",5),t.YNc(6,C,1,0,"app-loader",6),t.YNc(7,y,1,2,"app-alert",7),t.qZA()()()()()),2&n&&(t.xp6(5),t.Q6J("ngIf",!e.loading),t.xp6(1),t.Q6J("ngIf",e.loading),t.xp6(1),t.Q6J("ngIf",!e.loading&&e.mess))},directives:[u.O5,r.lC,I.R,v.w],styles:[".sign[_ngcontent-%COMP%]{height:100vh}.sign-wrap[_ngcontent-%COMP%]{height:100vh;display:flex;align-items:center;justify-content:center;flex-direction:column}.sign-wrap[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%]{margin-top:20px}.sign-inner[_ngcontent-%COMP%]{margin-bottom:20px}.sign-form[_ngcontent-%COMP%]{width:350px;height:max-content;display:flex;flex-direction:column}"]}),o})();var h=s(5861),i=s(3075),l=s(8457),m=s(3489),d=s(7531),f=s(7423),A=s(8995);let x=(()=>{class o{constructor(n,e){this.router=n,this.store=e}ngOnInit(){this.setSignInForm()}onSignIn(){var n=this;return(0,h.Z)(function*(){if(!n.signInForm.valid)return;const e=n.signInForm.value;yield n.store.dispatch(new l.lA({email:e.email,password:e.password})),yield n.store.dispatch(new l.Lz({email:e.email}))})()}toSignUp(){this.signInForm.reset(),this.router.navigate(["auth/sign-up"]).then(),this.store.dispatch(new l.PH)}setSignInForm(){this.signInForm=new i.cw({email:new i.NI("malaiko.denis@gmail.com",[i.kI.required,i.kI.email]),password:new i.NI("1234567890",[i.kI.required])})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.F0),t.Y36(p.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sign-in"]],decls:21,vars:17,consts:[[1,"sign-form",3,"formGroup","ngSubmit"],["appearance","fill",1,"example-full-width"],["formControlName","email","matInput",""],["formControlName","password","matInput","","type","password"],[1,"example-button-row"],["color","primary","mat-raised-button","","type","submit",3,"disabled"],["mat-button","","type","button",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return e.onSignIn()}),t.TgZ(1,"h1"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"mat-form-field",1)(5,"mat-label"),t._uU(6),t.ALo(7,"translate"),t.qZA(),t._UZ(8,"input",2),t.qZA(),t.TgZ(9,"mat-form-field",1)(10,"mat-label"),t._uU(11),t.ALo(12,"translate"),t.qZA(),t._UZ(13,"input",3),t.qZA(),t.TgZ(14,"div",4)(15,"button",5),t._uU(16),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"button",6),t.NdJ("click",function(){return e.toSignUp()}),t._uU(19),t.ALo(20,"translate"),t.qZA()()()),2&n&&(t.Q6J("formGroup",e.signInForm),t.xp6(2),t.Oqu(t.lcZ(3,7,"auth.signIn")),t.xp6(4),t.Oqu(t.lcZ(7,9,"form.email")),t.xp6(5),t.Oqu(t.lcZ(12,11,"form.password")),t.xp6(4),t.Q6J("disabled",!e.signInForm.valid&&e.signInForm.touched),t.xp6(1),t.hij("",t.lcZ(17,13,"auth.signIn")," "),t.xp6(3),t.hij("",t.lcZ(20,15,"auth.signUp")," "))},directives:[i._Y,i.JL,i.sg,m.KE,m.hX,i.Fj,d.Nt,i.JJ,i.u,f.lW],pipes:[A.X$],styles:[".sign-form[_ngcontent-%COMP%]{width:350px;height:max-content;display:flex;flex-direction:column}"]}),o})();var F=s(6363),T=s(4107),w=s(508);function b(o,a){if(1&o&&(t.TgZ(0,"mat-option",11),t._uU(1),t.qZA()),2&o){const n=a.$implicit;t.Q6J("value",n),t.xp6(1),t.Oqu(n)}}const O=[{path:"",component:S,children:[{path:"sign-in",component:x},{path:"sign-up",component:(()=>{class o{constructor(n,e){this.router=n,this.store=e,this.roles=Object.values(F.b)}ngOnInit(){this.setSignUpForm()}setSignUpForm(){this.signUpForm=new i.cw({name:new i.NI("",[i.kI.required]),email:new i.NI("",[i.kI.required,i.kI.email]),role:new i.NI("",[i.kI.required]),password:new i.NI("",[i.kI.required,i.kI.minLength(6)])})}onSignUp(){var n=this;return(0,h.Z)(function*(){if(!n.signUpForm.valid)return;const e=n.signUpForm.value;yield n.store.dispatch(new l.Jj({name:e.name,email:e.email,role:e.role,password:e.password}))})()}toSignIn(){this.signUpForm.reset(),this.router.navigate(["auth/sign-in"]),this.store.dispatch(new l.PH)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(r.F0),t.Y36(p.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sign-up"]],decls:32,vars:24,consts:[[1,"sign-form",3,"formGroup","ngSubmit"],["appearance","fill",1,"example-full-width"],["formControlName","name","matInput",""],["formControlName","email","matInput",""],["appearance","fill"],["formControlName","role"],[3,"value",4,"ngFor","ngForOf"],["formControlName","password","matInput","","type","password"],[1,"example-button-row"],["color","primary","mat-raised-button","","type","submit",3,"disabled"],["mat-button","","type","button",3,"click"],[3,"value"]],template:function(n,e){1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return e.onSignUp()}),t.TgZ(1,"h1"),t._uU(2),t.ALo(3,"translate"),t.qZA(),t.TgZ(4,"mat-form-field",1)(5,"mat-label"),t._uU(6),t.ALo(7,"translate"),t.qZA(),t._UZ(8,"input",2),t.qZA(),t.TgZ(9,"mat-form-field",1)(10,"mat-label"),t._uU(11),t.ALo(12,"translate"),t.qZA(),t._UZ(13,"input",3),t.qZA(),t.TgZ(14,"mat-form-field",4)(15,"mat-label"),t._uU(16),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"mat-select",5),t.YNc(19,b,2,2,"mat-option",6),t.qZA()(),t.TgZ(20,"mat-form-field",1)(21,"mat-label"),t._uU(22),t.ALo(23,"translate"),t.qZA(),t._UZ(24,"input",7),t.qZA(),t.TgZ(25,"div",8)(26,"button",9),t._uU(27),t.ALo(28,"translate"),t.qZA(),t.TgZ(29,"button",10),t.NdJ("click",function(){return e.toSignIn()}),t._uU(30),t.ALo(31,"translate"),t.qZA()()()),2&n&&(t.Q6J("formGroup",e.signUpForm),t.xp6(2),t.Oqu(t.lcZ(3,10,"auth.signUp")),t.xp6(4),t.Oqu(t.lcZ(7,12,"form.name")),t.xp6(5),t.Oqu(t.lcZ(12,14,"form.email")),t.xp6(5),t.Oqu(t.lcZ(17,16,"form.role")),t.xp6(3),t.Q6J("ngForOf",e.roles),t.xp6(3),t.Oqu(t.lcZ(23,18,"form.password")),t.xp6(4),t.Q6J("disabled",!e.signUpForm.valid&&e.signUpForm.touched),t.xp6(1),t.hij("",t.lcZ(28,20,"auth.signUp")," "),t.xp6(3),t.hij("",t.lcZ(31,22,"auth.signIn")," "))},directives:[i._Y,i.JL,i.sg,m.KE,m.hX,i.Fj,d.Nt,i.JJ,i.u,T.gD,u.sg,w.ey,f.lW],pipes:[A.X$],styles:[".sign-form[_ngcontent-%COMP%]{width:350px;height:max-content;display:flex;flex-direction:column}"]}),o})()}]}];let J=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[r.Bz.forChild(O)],r.Bz]}),o})(),N=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,Z.m,J]]}),o})()}}]);