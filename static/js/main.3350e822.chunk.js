(this.webpackJsonpsurvey=this.webpackJsonpsurvey||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/survey-logo.7d0906b7.jpg"},31:function(e){e.exports=JSON.parse('[{"id":1,"question":"How would you describe your employment status ?","options":["Employed full-time","Employed part-time","Freelance/contract employee","Self-employed","Unemployed"],"selected":""},{"id":2,"question":"How many employees work at your company ?","options":["0-20","21-50","51-100","101-1,000","1,001+"],"selected":""},{"id":3,"question":"How would you classify your role ?","options":["Individual Contributor","Manager","Director","1VP","Executive"],"selected":""},{"id":4,"question":"How would you classify your industry ?","options":["Technology/software","Hospitality/dining","Services","Consulting","Entertainment"],"selected":""}]')},32:function(e,t,a){e.exports=a(62)},37:function(e,t,a){},38:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(25),r=a.n(c),o=(a(37),a(38),a(26)),s=a.n(o),i=a(7),u=function(){var e=Object(i.f)();return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"main-box"},l.a.createElement("div",{className:"sub-box"},l.a.createElement("img",{src:s.a,className:"image-style"}),l.a.createElement("div",{className:"button-wrap"},l.a.createElement("button",{onClick:function(){return e.push("/survey")}},"Start Survey")))))},m=a(9),d=a(14),E=a.n(d),v=a(29),p=a(2),g=a(30),f=a.n(g),b=function(){var e=Object(i.f)(),t=Object(n.useState)([]),a=Object(p.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(""),s=Object(p.a)(o,2),u=s[0],m=s[1],d=Object(n.useState)(""),g=Object(p.a)(d,2),b=g[0],h=g[1],y=Object(n.useState)(""),N=Object(p.a)(y,2),S=N[0],O=N[1],j=Object(n.useState)(""),k=Object(p.a)(j,2),w=k[0],x=k[1],C=Object(n.useState)(""),q=Object(p.a)(C,2),I=q[0],J=q[1],A=Object(n.useState)(""),U=Object(p.a)(A,2),F=U[0],H=U[1],R=Object(n.useState)(""),z=Object(p.a)(R,2),D=z[0],M=z[1],Q=Object(n.useState)(""),T=Object(p.a)(Q,2),Z=T[0],B=T[1],G=Object(n.useState)(""),W=Object(p.a)(G,2),$=W[0],_=W[1];Object(n.useEffect)((function(){Object(v.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://restcountries.eu/rest/v2/all");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})))()}),[]);var P=function(e,t){if(" "!=e)switch(t){case"name":m(e),h("");break;case"email":O(e),x("");break;case"country":J(e),H("");break;case"age":M(e),B("");break;case"gender":_(e)}};return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"main-box"},l.a.createElement("div",{className:"form"},l.a.createElement("p",null,"User Details"),l.a.createElement("div",{className:"single-field"},l.a.createElement("label",null,"Full Name ",l.a.createElement("sup",null,"*")),l.a.createElement("input",{value:u,onChange:function(e){P(e.target.value,"name")},type:"text",className:"form-control"}),b.length?l.a.createElement("div",{className:"error"},b):null),l.a.createElement("div",{className:"single-field"},l.a.createElement("label",null,"Email ",l.a.createElement("sup",null,"*")),l.a.createElement("input",{value:S,onChange:function(e){P(e.target.value,"email")},type:"text",className:"form-control"}),w.length?l.a.createElement("div",{className:"error"},w):null),l.a.createElement("div",{className:"single-field"},l.a.createElement("label",null,"Country ",l.a.createElement("sup",null,"*")),l.a.createElement("select",{value:I,onChange:function(e){P(e.target.value,"country")},className:"form-control"},l.a.createElement("option",{value:""},"Select"),c.map((function(e,t){return l.a.createElement("option",{key:t,value:e.name},e.name)}))),F.length?l.a.createElement("div",{className:"error"},F):null),l.a.createElement("div",{className:"two-in-one"},l.a.createElement("div",{className:"single-field padding-right"},l.a.createElement("label",null,"Age ",l.a.createElement("sup",null,"*")),l.a.createElement("input",{value:D,onChange:function(e){P(e.target.value,"age")},type:"number",className:"form-control"}),Z.length?l.a.createElement("div",{className:"error"},Z):null),l.a.createElement("div",{className:"single-field padding-left"},l.a.createElement("label",null,"Gender "),l.a.createElement("select",{value:$,onChange:function(e){P(e.target.value,"gender")},className:"form-control"},l.a.createElement("option",{value:""},"Select"),l.a.createElement("option",{value:"Male"},"Male"),l.a.createElement("option",{value:"Female"},"Female")))),l.a.createElement("div",{className:"md-button center"},l.a.createElement("button",{onClick:function(){return function(){var t=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;u.length||h("Full name cannot be blank."),S.length?t.test(S)||x("Invalid Email."):x("Email cannot be blank."),I.length||H("country cannot be blank."),D.length||B("Age cannot be blank."),u.length&&S.length&&t.test(S)&&I.length&&D.length&&(localStorage.setItem("USER",JSON.stringify({name:u,email:S,country:I,age:D,gender:$})),e.replace("/survey/question/1"))}()}},"Continue")))))},h=a(31),y=function(){var e=Object(i.f)();null==JSON.parse(String(localStorage.getItem("USER")))&&e.replace("/");var t=Object(n.useState)(Number(e.location.pathname[e.location.pathname.length-1])),a=Object(p.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(h),s=Object(p.a)(o,2),u=s[0],m=s[1];Object(n.useEffect)((function(){r(Number(e.location.pathname[e.location.pathname.length-1]))}),[e.location.pathname]);var d=function(t){t>=u.length-(u.length-1)&&t<=u.length&&e.push("/survey/question/".concat(t))},E=function(e,t){var a=[],n=!0,l=!1,c=void 0;try{for(var r,o=u[Symbol.iterator]();!(n=(r=o.next()).done);n=!0){var s=r.value;s.id==t&&(s.selected=e),a.push(s)}}catch(i){l=!0,c=i}finally{try{n||null==o.return||o.return()}finally{if(l)throw c}}m(a)};return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"main-box"},l.a.createElement("div",{className:"form"},u.map((function(e,t){if(e.id==c)return l.a.createElement("div",{key:t,className:"question-style"},l.a.createElement("div",{className:"align-questions"},l.a.createElement("p",null,e.id+".","\xa0"),l.a.createElement("p",null,e.question)),e.options.map((function(t,a){return l.a.createElement("div",{key:a,className:"options align-questions ".concat(e.selected==t?"green":"")},l.a.createElement("div",{onClick:function(){return E(t,c)},className:"custom-radio ".concat(e.selected==t?"custom-border":"")},e.selected==t?l.a.createElement("span",null):null),l.a.createElement("div",{className:"padding-left cursor",onClick:function(){return E(t,c)}},t))})))})),l.a.createElement("div",{className:"footer"},l.a.createElement("i",{className:"fa fa-chevron-left icon ".concat(c>u.length-(u.length-1)?"brand-color":"grey-color"),onClick:function(){return d(c-1)}}),l.a.createElement("i",{className:"fa fa-chevron-right icon ".concat(c<=u.length-1&&u[c-1].selected.length?"brand-color":"grey-color"),onClick:function(){return d(c+1)}})),u[u.length-1].selected.length?l.a.createElement("div",{className:"md-button center"},l.a.createElement("button",{className:"center1",onClick:function(){return localStorage.setItem("QUESTIONS",JSON.stringify(u)),void e.replace("/survey/report")}},"Submit")):null)))},N=function(){var e=Object(i.f)(),t=JSON.parse(String(localStorage.getItem("USER")));null==t&&e.replace("/");var a=JSON.parse(String(localStorage.getItem("QUESTIONS")));return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"main-box"},null!=t?l.a.createElement("div",{className:"form"},l.a.createElement("p",null,"Report"),l.a.createElement("div",{className:"userDetails"},l.a.createElement("div",null,l.a.createElement("b",null,"Name :")," ",l.a.createElement("span",null,t.name)),l.a.createElement("div",null,l.a.createElement("b",null,"Email :")," ",l.a.createElement("span",null,t.email)),l.a.createElement("div",null,l.a.createElement("b",null,"Country :")," ",l.a.createElement("span",null,t.country)),l.a.createElement("div",null,l.a.createElement("b",null,"Age :")," ",l.a.createElement("span",null,t.age)),l.a.createElement("div",null,l.a.createElement("b",null,"Gender :")," ",l.a.createElement("span",null,t.gender.length?t.gender:"not specified"))),l.a.createElement("p",null,"Questionnaires"),l.a.createElement("div",{className:"questions"},a.map((function(e,t){return l.a.createElement("div",{className:"align-questions-col"},l.a.createElement("div",{key:t,className:"align-questions"},l.a.createElement("b",null,e.id+".","\xa0"),l.a.createElement("div",null,e.question)),l.a.createElement("div",{key:t,className:"align-questions"},l.a.createElement("b",null,"Ans.\xa0"),l.a.createElement("div",null,e.selected)))})))):null))};var S=function(){return l.a.createElement(m.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:u}),l.a.createElement(i.a,{exact:!0,path:"/survey",component:b}),l.a.createElement(i.a,{exact:!0,path:"/survey/question/:id",component:y}),l.a.createElement(i.a,{exact:!0,path:"/survey/report",component:N})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.3350e822.chunk.js.map