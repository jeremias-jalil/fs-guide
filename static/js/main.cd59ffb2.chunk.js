(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,c){e.exports={container:"PageBase_container__2Gr5m",nav:"PageBase_nav__w-w6Z",filter:"PageBase_filter__2MtDP",body:"PageBase_body__2Zj88",foot:"PageBase_foot__yNvyr"}},19:function(e,t,c){e.exports={listIcon:"FilterIcon_listIcon__12pRh",icon:"FilterIcon_icon__3OVFn",iconSelected:"FilterIcon_iconSelected__1TLgb",title:"FilterIcon_title__YIQGQ",null:"FilterIcon_null__3HQMi"}},49:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(42),s=c.n(r),i=(c(49),c(2)),o=c.n(i),l=c(6),u=c(5),j=c(18),d=c.n(j),b=c.p+"static/media/logo-blanco.0b476479.png",p=c(0);function h(){return Object(p.jsx)("nav",{class:"navbar navbar-dark bg-dark footer",children:Object(p.jsxs)("div",{class:"container-md",children:[Object(p.jsx)("img",{src:b,className:"logoFoot",alt:"logoFoot"}),Object(p.jsx)("a",{class:"navbar-brand",href:"https://www.linkedin.com/in/jeremiasjalil/",target:"_blank",rel:"noreferrer",children:"Desarrollo de Jeremias Jalil"})]})})}function f(e){var t=e.nav,c=e.filter,n=e.body;return Object(p.jsxs)("div",{className:d.a.container,children:[Object(p.jsx)("div",{className:d.a.nav,children:t}),Object(p.jsx)("div",{className:d.a.filter,children:c}),Object(p.jsx)("div",{className:d.a.body,children:n}),Object(p.jsx)("div",{className:d.a.foot,children:Object(p.jsx)(h,{})})]})}var v=c(16),O=c(4),m=c.p+"static/media/logo-oscuro.e7f8c206.png";function x(e){e.search;var t=e.reload,c=Object(n.useState)(""),a=Object(u.a)(c,2),r=a[0],s=a[1],i=Object(O.e)();return Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(p.jsxs)("div",{className:"container-fluid",children:[Object(p.jsx)("img",{className:"navbar-brand logoNav",src:m,alt:"logonav"}),Object(p.jsx)("button",{className:"navbar-toggler ",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03",children:[Object(p.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(v.b,{className:"nav-link",activeClassName:"nav-link active",to:"/home",onClick:function(){return t?t():""},children:"Inicio "})}),Object(p.jsx)("li",{class:"nav-item",children:Object(p.jsx)(v.b,{className:"nav-link",activeClassName:"nav-link active",to:"/newreference",children:"Aportar"})}),Object(p.jsx)("li",{class:"nav-item",children:Object(p.jsx)(v.b,{className:"nav-link",activeClassName:"nav-link active",to:"/admin",children:"Administrar"})})]}),Object(p.jsxs)("form",{className:"d-flex",onSubmit:function(e){e.preventDefault(),i.push("home/".concat(r)),s("")},children:[Object(p.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Buscar","aria-label":"Search",onChange:function(e){return s(e.target.value)},value:r}),Object(p.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Buscar"})]})]})]})})}var g=c(19),y=c.n(g),w=c(13),k=c(8);function N(e){var t=e.title,c=e.list,a=e.iconConverter,r=e.filterAction,s=Object(n.useState)([]),i=Object(u.a)(s,2),o=i[0],l=i[1],j=Object(n.useState)(0),d=Object(u.a)(j,2),b=d[0],h=d[1],f=Object(n.useState)(!1),v=Object(u.a)(f,2),O=v[0],m=v[1];return Object(n.useEffect)((function(){a&&l(a(c))}),[]),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:y.a.title,onClick:function(){return m(!O)},"data-bs-toggle":"collapse",href:"#collapse".concat(t),role:"button","aria-expanded":"false","aria-controls":"collapse".concat(t),children:[O?Object(p.jsx)(w.a,{icon:k.b},"plus"):Object(p.jsx)(w.a,{icon:k.c},"minus"),Object(p.jsx)("h3",{children:t})]}),Object(p.jsxs)("div",{className:"collapse",id:"collapse".concat(t),children:[r?Object(p.jsx)("div",{children:Object(p.jsx)("em",{className:y.a.icon,onClick:function(){r&&(r(null),h(0))},children:" -- All -- "})}):Object(p.jsx)("div",{}),Object(p.jsx)("div",{className:y.a.listIcon,children:null===o||void 0===o?void 0:o.map((function(e){return Object(p.jsxs)("div",{onClick:function(){return t=e,void(r&&(r(t),h(t)));var t},className:parseInt(e.id)===parseInt(b)?y.a.iconSelected:y.a.icon,children:[Object(p.jsx)(w.a,{icon:e.icon},e.id),Object(p.jsxs)("em",{children:[" ",e.name]})]},e.id)}))})]})]})}var _=c(14);function C(e){return e?e.map((function(e){return Object(_.a)(Object(_.a)({},e),{},{icon:S(e.categoryId)})})):[]}function S(e){var t=I.filter((function(t){return t.id===e}));return 0===t.length?{id:e,name:e,icon:k.e}:t[0].icon}var I=[{id:0,name:"Bd",icon:k.d},{id:1,name:"BackEnd",icon:k.f},{id:2,name:"FrontEnd",icon:k.i},{id:3,name:'"Deployment"',icon:k.h},{id:"4",name:"Others",icon:k.e}];function F(e){var t=e.items,c=e.filterAction;return Object(p.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(p.jsxs)("div",{class:"container-fluid",children:[Object(p.jsx)("div",{class:"navbar-toggler","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)(w.a,{icon:k.g},"minus")}),Object(p.jsx)("div",{class:"collapse navbar-collapse ",id:"navbarScroll",children:Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("h2",{children:"Categor\xedas"}),null===t||void 0===t?void 0:t.map((function(e){return Object(p.jsx)(N,{title:e.name,list:e.subcategories,iconConverter:C,filterAction:c})}))]})})]})})}var A=c(15),D=c.n(A);c(39).config();var B="https://fsguide.herokuapp.com";function E(){return P.apply(this,arguments)}function P(){return(P=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(B),e.prev=1,e.next=4,D.a.get("".concat(B,"/category"));case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function T(){return q.apply(this,arguments)}function q(){return(q=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(B,"/reference"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function z(e){return L.apply(this,arguments)}function L(){return(L=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(B,"/reference/pending"),{headers:{Authorization:"Bearer ".concat(t)}});case 3:return c=e.sent,e.abrupt("return",c.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function M(){return(M=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.post("".concat(B,"/reference"),t);case 3:return c=e.sent,e.abrupt("return",c);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function J(e,t,c){return G.apply(this,arguments)}function G(){return(G=Object(l.a)(o.a.mark((function e(t,c,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.put("".concat(B,"/reference/").concat(c),t,{headers:{Authorization:"Bearer ".concat(n)}});case 3:return a=e.sent,e.abrupt("return",a);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Q(e){return H.apply(this,arguments)}function H(){return(H=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(B,"/reference?search=").concat(t));case 3:return c=e.sent,e.abrupt("return",c.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function U(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.post("".concat(B,"/user/login"),t);case 3:return c=e.sent,e.abrupt("return",c);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var R=Object(n.createContext)();function V(e){var t=Object(n.useState)(!1),c=Object(u.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)([]),i=Object(u.a)(s,2),j=i[0],d=i[1];function b(){return(b=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){r(e)}Object(n.useEffect)((function(){!function(){b.apply(this,arguments)}()}),[]);var f=Object(n.useMemo)((function(){return{userAcces:a,authorization:h,categorys:j}}),[a,j]);return Object(p.jsx)(R.Provider,Object(_.a)({value:f},e))}function Y(){var e=Object(n.useContext)(R);if(e)return e;throw new Error("Error en useContext")}var K=c(24),W=c(44);function X(e){var t=e.filter,c=e.filterItem,a=e.references,r=e.reload,s=Object(n.useState)([]),i=Object(u.a)(s,2),o=i[0],l=i[1],j=Y().userAcces;return Object(n.useEffect)((function(){l(t?a.filter((function(e){return e[c]===t.id})):a)}),[t,a]),Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h1",{children:null===t||void 0===t?void 0:t.name}),Object(p.jsx)("div",{className:"row",children:o.map((function(e){return Object(p.jsx)("div",{className:"col-sm-4",children:Object(p.jsxs)("div",{class:"card",style:{width:"98%"},children:[Object(p.jsxs)("div",{class:"card-header",children:[Object(p.jsxs)("div",{class:"github",onClick:function(){return window.open("https://github.com/".concat(e.user),"_blank")},children:[Object(p.jsx)(w.a,{icon:W.a}),e.user]}),Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[j?Object(p.jsx)(w.a,{className:"ok",icon:k.a,onClick:function(){return J({public:"acept"},e.id,j),void r()}}):"",j?Object(p.jsx)(w.a,{className:"noOk",icon:k.j,onClick:function(){return J({public:"deleted"},e.id,j),void r()}}):""]})})]}),Object(p.jsxs)("div",{class:"card-body",children:["pending"===e.public?Object(p.jsx)("h5",{class:"card-title",children:e.name}):Object(p.jsx)(p.Fragment,{}),Object(p.jsx)(K.a,{url:e.link,width:"100%",descriptionLength:"150",textAlign:"right"},e.id),"pending"===e.public?Object(p.jsx)("p",{class:"card-text",children:e.description}):Object(p.jsx)(p.Fragment,{})]})]})})}))})]})}function $(e){var t=Object(n.useState)([]),c=Object(u.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(null),i=Object(u.a)(s,2),j=i[0],d=i[1],b=Object(n.useState)(!0),h=Object(u.a)(b,2),v=h[0],m=h[1],g=Y().categorys,y=Object(O.f)();function w(){return(w=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q(t);case 2:c=e.sent,r(c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){y.search?function(e){k.apply(this,arguments)}(y.search):function(){w.apply(this,arguments)}()}),[v]),Object(p.jsx)("div",{className:"home",children:Object(p.jsx)(f,{nav:Object(p.jsx)(x,{reload:function(){m(!v)}}),filter:Object(p.jsx)(F,{items:g,filterAction:function(e){d(e)}}),body:Object(p.jsx)(X,{filter:j,filterItem:"subcategoryId",references:a})})})}var ee=c(23);function te(e){var t=e.style;return Object(p.jsx)("div",{className:"aport card coment",style:t,children:Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h5",{class:"card-title",children:"Publicaci\xf3n"}),Object(p.jsx)("p",{class:"card-text",children:"Estos aportes ser\xe1n publicados una vez sean aprobados por el administrador."}),Object(p.jsx)("p",{class:"card-text",children:"El fin de estos aportes es poder ayudar a los nuevos Full Stack Developper a encontrar facilmente la informaci\xf3n para sus proyectos"}),Object(p.jsx)("b",{class:"card-text",children:"Muchas gracias :D"})]})})}function ce(e){var t,c=e.categorys,a={name:"",description:"",link:"",category:"",user:"",subcategory:"",public:"pending"},r=Object(n.useState)(a),s=Object(u.a)(r,2),i=s[0],o=s[1],l=Object(n.useState)(!1),j=Object(u.a)(l,2),d=j[0],b=j[1],h=Object(O.e)();function f(e){var t=e.target.name,c=e.target.value;o(Object(_.a)(Object(_.a)({},i),{},Object(ee.a)({},t,c)))}function v(e){if(e.preventDefault(),function(e){M.apply(this,arguments)}(i),d){var t=i.user;o(Object(_.a)(Object(_.a)({},a),{},{user:t}))}else o(a),h.push("/home")}return Object(p.jsxs)("div",{className:"aport card",children:[Object(p.jsxs)("div",{class:"card-body",children:[Object(p.jsx)("h3",{class:"card-title",children:"Aporta a la guia un enlace que te parezca interesante para compartir"}),Object(p.jsxs)("form",{class:"row g-3",onSubmit:function(e){return v(e)},children:[Object(p.jsx)("div",{class:"col-md-6",children:Object(p.jsx)("input",{class:"form-control",type:"text",placeholder:"T\xedtulo",name:"name",onChange:function(e){return f(e)},value:i.name,required:!0})}),Object(p.jsx)("div",{class:"col-md-6",children:Object(p.jsx)("input",{class:"form-control",type:"url",placeholder:"Url",name:"link",onChange:function(e){return f(e)},value:i.link,required:!0})}),Object(p.jsx)("div",{class:"col-md-12",children:Object(p.jsx)("textarea",{class:"form-control",type:"text",placeholder:"Descripci\xf3n, esto ayuda al buscador",name:"description",rows:"3",onChange:function(e){return f(e)},value:i.description,required:!0})}),Object(p.jsx)("div",{class:"col-md-3",children:Object(p.jsxs)("select",{class:"form-select form-select-lg mb-3",name:"category",onChange:function(e){return f(e)},value:i.category,required:!0,children:[Object(p.jsx)("option",{selected:!0,children:"Categor\xeda"}),c.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.name})}))]})}),Object(p.jsx)("div",{class:"col-md-3",children:Object(p.jsxs)("select",{class:"form-select form-select-lg mb-3",name:"subcategory",onChange:function(e){return f(e)},required:!0,children:[Object(p.jsx)("option",{selected:!0,children:"Subcategor\xeda"}),null===(t=c[i.category])||void 0===t?void 0:t.subcategories.map((function(e){return Object(p.jsx)("option",{value:e.id,children:e.name})}))]})}),Object(p.jsx)("div",{class:"col-md-6",children:Object(p.jsx)("input",{class:"form-control",type:"text",name:"user",placeholder:"Tu nombre de usuario de GitHub",onChange:function(e){return f(e)},value:i.github,required:!0})}),i.link?Object(p.jsx)(K.a,{url:i.link,width:"100%"}):Object(p.jsx)(p.Fragment,{}),Object(p.jsx)("div",{class:"d-grid gap-2",children:Object(p.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Enviar"})})]}),Object(p.jsxs)("div",{class:"form-check",children:[Object(p.jsx)("input",{class:"form-check-input",type:"checkbox",onChange:function(e){return b(e.target.checked)},id:"flexCheckDefault"}),Object(p.jsx)("label",{class:"form-check-label",for:"flexCheckDefault",children:"Activar para hacer multiples aportes"})]})]}),Object(p.jsx)(te,{})]})}function ne(){var e=Y().categorys;return Object(p.jsx)("div",{children:Object(p.jsx)(f,{nav:Object(p.jsx)(x,{}),body:Object(p.jsx)(ce,{categorys:e})})})}function ae(){var e=Object(O.e)(),t=Y(),c=t.userAcces,a=t.categorys,r=Object(n.useState)([]),s=Object(u.a)(r,2),i=s[0],j=s[1],d=Object(n.useState)(null),b=Object(u.a)(d,2),h=b[0],v=b[1],m=Object(n.useState)(!0),g=Object(u.a)(m,2),y=g[0],w=g[1];return Object(n.useEffect)((function(){c?function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(c);case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():e.push("/login")}),[y]),Object(p.jsx)("div",{children:Object(p.jsx)(f,{nav:Object(p.jsx)(x,{}),filter:Object(p.jsx)(F,{items:a,filterAction:function(e){v(e)}}),body:Object(p.jsx)(X,{filter:h,filterItem:"subcategoryId",references:i,reload:function(){w(!y)}})})})}function re(){var e=Object(O.e)(),t=Y(),c=t.authorization,a=t.userAcces;console.log(a);var r=Object(n.useState)(!1),s=Object(u.a)(r,2),i=s[0],j=s[1];function d(){return(d=Object(l.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,U({email:n.target[0].value,password:n.target[1].value});case 4:a=t.sent,console.log(a,"acces"),c(a.data.token),e.push("/admin"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),j(!0),c(!1);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}return Object(p.jsx)("div",{className:"aport card ",style:{width:"18rem"},children:Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h5",{className:"card-title",children:"Inicie seci\xf3n para administrar las entradas"}),Object(p.jsxs)("form",{className:"row g-3",onSubmit:function(e){return function(e){return d.apply(this,arguments)}(e)},children:[Object(p.jsx)("div",{className:"mb-3",children:Object(p.jsx)("input",{className:"form-control",type:"email",placeholder:"email"})}),Object(p.jsx)("div",{className:"mb-3",children:Object(p.jsx)("input",{type:"password",className:"form-control",placeholder:"password"})}),Object(p.jsx)("div",{className:"mb-3",children:Object(p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})}),i?Object(p.jsx)("div",{class:"alert alert-danger",role:"alert",children:"Usuario o contrase\xf1a incorrectas"}):""]})]})})}function se(){return Object(p.jsx)("div",{className:"login",children:Object(p.jsx)(f,{nav:Object(p.jsx)(x,{}),body:Object(p.jsx)(re,{})})})}var ie=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(O.a,{exact:!0,path:"/home",component:$}),Object(p.jsx)(O.a,{exact:!0,path:"/home/:search",component:$}),Object(p.jsx)(O.a,{exact:!0,path:"/newreference",component:ne}),Object(p.jsx)(O.a,{exact:!0,path:"/admin",component:ae}),Object(p.jsx)(O.a,{exact:!0,path:"/login",component:se})]})},oe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};c(39).config(),s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(v.a,{children:Object(p.jsx)(V,{children:Object(p.jsx)(ie,{})})})}),document.getElementById("root")),oe()}},[[81,1,2]]]);
//# sourceMappingURL=main.cd59ffb2.chunk.js.map