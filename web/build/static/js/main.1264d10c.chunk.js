(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{127:function(e,t,n){},128:function(e,t,n){},163:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(38),r=n.n(o),i=(n(127),n(128),n(20)),s=(n(129),n(207)),l=n(205),j=n(208),b=n(5),d=n(11),u=n(65),O=n.n(u),h="localhost"===window.location.hostname.split(":")[0]?"http://localhost:5001":"",v=n(211),x=n(209),m=n(206),f=n(87),g=n(1);var p=function(){var e=Object(c.useState)({teamOne:"",teamTwo:"",bat:"",score:"",wicket:"",over:""}),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){O.a.get("".concat(h,"/api/v1/score")).then((function(e){console.log("res +++: ",e.data),a(e.data)}))}),[]),Object(g.jsxs)("div",{style:{margin:"0.5rem"},children:[Object(g.jsx)("h1",{style:{textAlign:"center",textDecorationLine:"underline",color:"#0d6efd",fontStyle:"italic"},children:"ScoreBoard Admin Panel "}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsxs)(v.a,{style:{textAlign:"center",borderRadius:"40px"},component:"form",sx:{"& > :not(style)":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(g.jsx)(m.a,{label:"Team 1",variant:"standard",value:n.teamOne,onChange:function(e){a((function(t){return Object(b.a)(Object(b.a)({},t),{},{teamOne:e.target.value})}))},placeholder:"Enter Team Name"}),Object(g.jsx)(m.a,{label:"Team 2",variant:"standard",value:n.teamTwo,onChange:function(e){a((function(t){return Object(b.a)(Object(b.a)({},t),{},{teamTwo:e.target.value})}))},placeholder:"Enter Team Name"}),Object(g.jsx)(m.a,{label:"Bating Team",variant:"standard",value:n.bat,onChange:function(e){a((function(t){return Object(b.a)(Object(b.a)({},t),{},{bat:e.target.value})}))},placeholder:"Batting Team"}),Object(g.jsx)(m.a,{label:"Runs/Score",variant:"standard",type:"number",value:n.score,onChange:function(e){a((function(t){return Object(b.a)(Object(b.a)({},t),{},{score:e.target.value})}))},placeholder:"Scores"}),Object(g.jsx)(m.a,{label:"Wicket",variant:"standard",type:"number",value:n.wicket,onChange:function(e){a((function(t){return Object(b.a)(Object(b.a)({},t),{},{wicket:e.target.value})}))},placeholder:"Wickets"}),Object(g.jsx)(m.a,{label:"Over",variant:"standard",type:"number",value:n.over,onChange:function(e){a((function(t){return Object(b.a)(Object(b.a)({},t),{},{over:e.target.value})}))},placeholder:"Overs"})," ",Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(x.a,{variant:"contained",onClick:function(){O.a.post("".concat(h,"/api/v1/score"),n).then((function(e){console.log("res: ",e.data)}))},children:"UPDATE ScoreBoard"})]})]})},y=n(204),C=n(212),S=n(213),k=n(214);var w=function(){var e=Object(c.useState)({}),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){O.a.get("".concat(h,"/api/v1/score")).then((function(e){console.log("res +++: ",e.data),a(e.data)}))}),[]),Object(c.useEffect)((function(){var e=Object(f.a)("http://localhost:5001");return e.on("connect",(function(){console.log("connected to server")})),e.on("disconnect",(function(e){console.log("disconnected from server: ",e)})),e.on("SCORE",(function(e){console.log(e),a(e)})),function(){e.close()}}),[]),Object(g.jsxs)("div",{style:{margin:"1rem"},children:[Object(g.jsx)("h1",{style:{textAlign:"center",textDecorationLine:"underline",color:"#0d6efd",fontStyle:"italic"},children:"Live ScoreBoard! "}),Object(g.jsxs)(y.a,{spacing:2,direction:"column",children:[Object(g.jsx)("br",{}),Object(g.jsx)(C.a,{sx:{minWidth:275},children:Object(g.jsxs)(S.a,{style:{textAlign:"center"},children:[Object(g.jsxs)(k.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:[null===n||void 0===n?void 0:n.teamOne," VS. ",null===n||void 0===n?void 0:n.teamTwo," (Bat ",n.bat,")"]}),Object(g.jsx)("br",{}),Object(g.jsxs)(k.a,{variant:"h5",component:"div",children:[null===n||void 0===n?void 0:n.score," / ",null===n||void 0===n?void 0:n.wicket]}),Object(g.jsx)("br",{}),Object(g.jsxs)(k.a,{sx:{mb:1.5},color:"text.secondary",children:["Over: ",n.over]}),Object(g.jsx)("br",{}),Object(g.jsxs)(k.a,{variant:"body2",children:["Commentry: ",Object(g.jsxs)("b",{children:[" ",(null===n||void 0===n?void 0:n.comentry)||"Catch drop by Ahmed Shahzad"]})]})]})})]})]})};var T=function(){var e=Object(i.g)();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(s.a,{bg:"primary",expand:"lg",variant:"dark",children:Object(g.jsxs)(l.a,{children:[Object(g.jsx)(s.a.Brand,{href:"#home",children:"Cricket Live ScoreBoard!!!"}),Object(g.jsx)("br",{}),Object(g.jsx)(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(s.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsxs)(j.a,{className:"me-auto",children:[Object(g.jsx)(j.a.Link,{onClick:function(){e.push("/")},children:"ScoreBoard"}),Object(g.jsx)("br",{}),Object(g.jsx)(j.a.Link,{onClick:function(){e.push("/admin")},children:"Admin Panel"})]})})]})}),Object(g.jsxs)(i.d,{children:[Object(g.jsx)(i.b,{exact:!0,path:"/",component:w}),Object(g.jsx)(i.b,{path:"/admin",component:p}),Object(g.jsx)(i.a,{to:"/"})]})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,216)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))},A=n(86);r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(A.a,{children:Object(g.jsx)(T,{})})}),document.getElementById("root")),B()}},[[163,1,2]]]);
//# sourceMappingURL=main.1264d10c.chunk.js.map