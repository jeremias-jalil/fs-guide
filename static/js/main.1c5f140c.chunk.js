(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,c){e.exports={container:"PageBase_container__2Gr5m",nav:"PageBase_nav__w-w6Z",filter:"PageBase_filter__2MtDP",body:"PageBase_body__2Zj88",foot:"PageBase_foot__yNvyr"}},19:function(e,t,c){e.exports={listIcon:"FilterIcon_listIcon__12pRh",icon:"FilterIcon_icon__3OVFn",iconSelected:"FilterIcon_iconSelected__1TLgb",title:"FilterIcon_title__YIQGQ",null:"FilterIcon_null__3HQMi"}},50:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(43),r=c.n(a),s=(c(50),c(3)),i=c.n(s),o=c(6),l=c(5),u=c(18),j=c.n(u),b=c.p+"static/media/logo-blanco.0b476479.png",d=c(0);function p(){return Object(d.jsx)("nav",{class:"navbar navbar-dark bg-dark footer",children:Object(d.jsxs)("div",{class:"container-md",children:[Object(d.jsx)("img",{src:b,className:"logoFoot",alt:"logoFoot"}),Object(d.jsx)("a",{class:"navbar-brand",href:"https://www.linkedin.com/in/jeremiasjalil/",target:"_blank",rel:"noreferrer",children:"Desarrollo de Jeremias Jalil"})]})})}function h(e){var t=e.nav,c=e.filter,n=e.body;return Object(d.jsxs)("div",{className:j.a.container,children:[Object(d.jsx)("div",{className:j.a.nav,children:t}),Object(d.jsx)("div",{className:j.a.filter,children:c}),Object(d.jsx)("div",{className:j.a.body,children:n}),Object(d.jsx)("div",{className:j.a.foot,children:Object(d.jsx)(p,{})})]})}var f=c(16),v=c(4),O=c.p+"static/media/logo-oscuro.e7f8c206.png";function m(e){var t=e.reload,c=Object(n.useState)(""),a=Object(l.a)(c,2),r=a[0],s=a[1],i=Object(v.f)();return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("img",{className:"navbar-brand logoNav",src:O,alt:"logonav"}),Object(d.jsx)("button",{className:"navbar-toggler ",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(f.b,{className:"nav-link",activeClassName:"nav-link active",to:"/home",onClick:function(){return t?t():""},children:"Inicio "})}),Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)(f.b,{className:"nav-link",activeClassName:"nav-link active",to:"/newreference",children:"Aportar"})}),Object(d.jsx)("li",{class:"nav-item",children:Object(d.jsx)(f.b,{className:"nav-link",activeClassName:"nav-link active",to:"/admin",children:"Administrar"})})]}),Object(d.jsxs)("form",{className:"d-flex",onSubmit:function(e){e.preventDefault(),i.push("home/".concat(r)),s("")},children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Buscar","aria-label":"Search",onChange:function(e){return s(e.target.value)},value:r}),Object(d.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Buscar"})]})]})]})})}var x=c(19),g=c.n(x),y=c(13),w=c(8);function k(e){var t=e.title,c=e.list,a=e.iconConverter,r=e.filterAction,s=Object(n.useState)([]),i=Object(l.a)(s,2),o=i[0],u=i[1],j=Object(n.useState)(0),b=Object(l.a)(j,2),p=b[0],h=b[1],f=Object(n.useState)(!1),v=Object(l.a)(f,2),O=v[0],m=v[1];return Object(n.useEffect)((function(){a&&u(a(c))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:g.a.title,onClick:function(){return m(!O)},"data-bs-toggle":"collapse",href:"#collapse".concat(t),role:"button","aria-expanded":"false","aria-controls":"collapse".concat(t),children:[O?Object(d.jsx)(y.a,{icon:w.b},"plus"):Object(d.jsx)(y.a,{icon:w.c},"minus"),Object(d.jsx)("h3",{children:t})]}),Object(d.jsxs)("div",{className:"collapse",id:"collapse".concat(t),children:[r?Object(d.jsx)("div",{children:Object(d.jsx)("em",{className:g.a.icon,onClick:function(){r&&(r(null),h(0))},children:" -- All -- "})}):Object(d.jsx)("div",{}),Object(d.jsx)("div",{className:g.a.listIcon,children:null===o||void 0===o?void 0:o.map((function(e){return Object(d.jsxs)("div",{onClick:function(){return t=e,void(r&&(r(t),h(t)));var t},className:parseInt(e.id)===parseInt(p)?g.a.iconSelected:g.a.icon,children:[Object(d.jsx)(y.a,{icon:e.icon},e.id),Object(d.jsxs)("em",{children:[" ",e.name]})]},e.id)}))})]})]})}var N=c(14);function _(e){return e?e.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{icon:C(e.categoryId)})})):[]}function C(e){var t=S.filter((function(t){return t.id===e}));return 0===t.length?{id:e,name:e,icon:w.e}:t[0].icon}var S=[{id:0,name:"Bd",icon:w.d},{id:1,name:"BackEnd",icon:w.f},{id:2,name:"FrontEnd",icon:w.i},{id:3,name:'"Deployment"',icon:w.h},{id:"4",name:"Others",icon:w.e}];function I(e){var t=e.items,c=e.filterAction;return Object(d.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{class:"container-fluid",children:[Object(d.jsx)("div",{class:"navbar-toggler","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)(y.a,{icon:w.g},"minus")}),Object(d.jsx)("div",{class:"collapse navbar-collapse ",id:"navbarScroll",children:Object(d.jsxs)("div",{className:"content",children:[Object(d.jsx)("h2",{children:"Categor\xedas"}),null===t||void 0===t?void 0:t.map((function(e){return Object(d.jsx)(k,{title:e.name,list:e.subcategories,iconConverter:_,filterAction:c})}))]})})]})})}var F=c(15),A=c.n(F);c(39).config();var D="https://fsguide.herokuapp.com";function B(){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("".concat(D,"/category"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function P(){return T.apply(this,arguments)}function T(){return(T=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("".concat(D,"/reference"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function q(e){return z.apply(this,arguments)}function z(){return(z=Object(o.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("".concat(D,"/reference/pending"),{headers:{Authorization:"Bearer ".concat(t)}});case 3:return c=e.sent,e.abrupt("return",c.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function L(){return(L=Object(o.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.post("".concat(D,"/reference"),t);case 3:return c=e.sent,e.abrupt("return",c);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function J(e,t,c){return M.apply(this,arguments)}function M(){return(M=Object(o.a)(i.a.mark((function e(t,c,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.put("".concat(D,"/reference/").concat(c),t,{headers:{Authorization:"Bearer ".concat(n)}});case 3:return a=e.sent,e.abrupt("return",a);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function G(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(o.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("".concat(D,"/reference?search=").concat(t));case 3:return c=e.sent,e.abrupt("return",c.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function H(e){return U.apply(this,arguments)}function U(){return(U=Object(o.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.post("".concat(D,"/user/login"),t);case 3:return c=e.sent,e.abrupt("return",c);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var Z=Object(n.createContext)();function R(e){var t=Object(n.useState)(!1),c=Object(l.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)([]),u=Object(l.a)(s,2),j=u[0],b=u[1];function p(){return(p=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){r(e)}Object(n.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]);var f=Object(n.useMemo)((function(){return{userAcces:a,authorization:h,categorys:j}}),[a,j]);return Object(d.jsx)(Z.Provider,Object(N.a)({value:f},e))}function V(){var e=Object(n.useContext)(Z);if(e)return e;throw new Error("Error en useContext")}c(40),c.p;var Y=c(24),K=c(45);function W(e){var t=e.filter,c=e.filterItem,a=e.references,r=e.reload,s=Object(n.useState)([]),i=Object(l.a)(s,2),o=i[0],u=i[1],j=V().userAcces;return Object(n.useEffect)((function(){u(t?a.filter((function(e){return e[c]===t.id})):a)}),[t,a]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:null===t||void 0===t?void 0:t.name}),Object(d.jsx)("div",{className:"row",children:o.map((function(e){return Object(d.jsx)("div",{className:"col-sm-4",children:Object(d.jsxs)("div",{class:"card",style:{width:"98%"},children:[Object(d.jsxs)("div",{class:"card-header",children:[Object(d.jsxs)("div",{class:"github",onClick:function(){return window.open("https://github.com/".concat(e.user),"_blank")},children:[Object(d.jsx)(y.a,{icon:K.a}),e.user]}),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{children:[j?Object(d.jsx)(y.a,{className:"ok",icon:w.a,onClick:function(){return J({public:"acept"},e.id,j),void r()}}):"",j?Object(d.jsx)(y.a,{className:"noOk",icon:w.j,onClick:function(){return J({public:"deleted"},e.id,j),void r()}}):""]})})]}),Object(d.jsxs)("div",{class:"card-body",children:["pending"===e.public?Object(d.jsx)("h5",{class:"card-title",children:e.name}):Object(d.jsx)(d.Fragment,{}),Object(d.jsx)(Y.a,{url:e.link,width:"100%",descriptionLength:"150",textAlign:"right"},e.id),"pending"===e.public?Object(d.jsx)("p",{class:"card-text",children:e.description}):Object(d.jsx)(d.Fragment,{})]})]})})}))})]})}function X(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(null),u=Object(l.a)(s,2),j=u[0],b=u[1],p=Object(n.useState)(!0),f=Object(l.a)(p,2),O=f[0],x=f[1],g=V().categorys,y=Object(v.g)();function w(){return(w=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(o.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t);case 2:c=e.sent,r(c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){y.search?function(e){k.apply(this,arguments)}(y.search):function(){w.apply(this,arguments)}()}),[O]),Object(d.jsx)("div",{className:"home",children:Object(d.jsx)(h,{nav:Object(d.jsx)(m,{reload:function(){x(!O)}}),filter:Object(d.jsx)(I,{items:g,filterAction:function(e){b(e)}}),body:Object(d.jsx)(W,{filter:j,filterItem:"subcategoryId",references:a})})})}var $=c(23);function ee(e){var t=e.style;return Object(d.jsx)("div",{className:"aport card coment",style:t,children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{class:"card-title",children:"Publicaci\xf3n"}),Object(d.jsx)("p",{class:"card-text",children:"Estos aportes ser\xe1n publicados una vez sean aprobados por el administrador."}),Object(d.jsx)("p",{class:"card-text",children:"El fin de estos aportes es poder ayudar a los nuevos Full Stack Developper a encontrar facilmente la informaci\xf3n para sus proyectos"}),Object(d.jsx)("b",{class:"card-text",children:"Muchas gracias :D"})]})})}function te(e){var t,c=e.categorys,a={name:"",description:"",link:"",category:"",user:"",subcategory:"",public:"pending"},r=Object(n.useState)(a),s=Object(l.a)(r,2),i=s[0],o=s[1],u=Object(n.useState)(!1),j=Object(l.a)(u,2),b=j[0],p=j[1],h=Object(v.f)();function f(e){var t=e.target.name,c=e.target.value;o(Object(N.a)(Object(N.a)({},i),{},Object($.a)({},t,c)))}function O(e){if(e.preventDefault(),function(e){L.apply(this,arguments)}(i),b){var t=i.user;o(Object(N.a)(Object(N.a)({},a),{},{user:t}))}else o(a),h.push("/home")}return Object(d.jsxs)("div",{className:"aport card",children:[Object(d.jsxs)("div",{class:"card-body",children:[Object(d.jsx)("h3",{class:"card-title",children:"Aporta a la guia un enlace que te parezca interesante para compartir"}),Object(d.jsxs)("form",{class:"row g-3",onSubmit:function(e){return O(e)},children:[Object(d.jsx)("div",{class:"col-md-6",children:Object(d.jsx)("input",{class:"form-control",type:"text",placeholder:"T\xedtulo",name:"name",onChange:function(e){return f(e)},value:i.name,required:!0})}),Object(d.jsx)("div",{class:"col-md-6",children:Object(d.jsx)("input",{class:"form-control",type:"url",placeholder:"Url",name:"link",onChange:function(e){return f(e)},value:i.link,required:!0})}),Object(d.jsx)("div",{class:"col-md-12",children:Object(d.jsx)("textarea",{class:"form-control",type:"text",placeholder:"Descripci\xf3n, esto ayuda al buscador",name:"description",rows:"3",onChange:function(e){return f(e)},value:i.description,required:!0})}),Object(d.jsx)("div",{class:"col-md-3",children:Object(d.jsxs)("select",{class:"form-select form-select-lg mb-3",name:"category",onChange:function(e){return f(e)},value:i.category,required:!0,children:[Object(d.jsx)("option",{selected:!0,children:"Categor\xeda"}),c.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name})}))]})}),Object(d.jsx)("div",{class:"col-md-3",children:Object(d.jsxs)("select",{class:"form-select form-select-lg mb-3",name:"subcategory",onChange:function(e){return f(e)},required:!0,children:[Object(d.jsx)("option",{selected:!0,children:"Subcategor\xeda"}),null===(t=c[i.category])||void 0===t?void 0:t.subcategories.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name})}))]})}),Object(d.jsx)("div",{class:"col-md-6",children:Object(d.jsx)("input",{class:"form-control",type:"text",name:"user",placeholder:"Tu nombre de usuario de GitHub",onChange:function(e){return f(e)},value:i.github,required:!0})}),i.link?Object(d.jsx)(Y.a,{url:i.link,width:"100%"}):Object(d.jsx)(d.Fragment,{}),Object(d.jsx)("div",{class:"d-grid gap-2",children:Object(d.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Enviar"})})]}),Object(d.jsxs)("div",{class:"form-check",children:[Object(d.jsx)("input",{class:"form-check-input",type:"checkbox",onChange:function(e){return p(e.target.checked)},id:"flexCheckDefault"}),Object(d.jsx)("label",{class:"form-check-label",for:"flexCheckDefault",children:"Activar para hacer multiples aportes"})]})]}),Object(d.jsx)(ee,{})]})}function ce(){var e=V().categorys;return Object(d.jsx)("div",{children:Object(d.jsx)(h,{nav:Object(d.jsx)(m,{}),body:Object(d.jsx)(te,{categorys:e})})})}function ne(){var e=Object(v.f)(),t=V(),c=t.userAcces,a=t.categorys,r=Object(n.useState)([]),s=Object(l.a)(r,2),u=s[0],j=s[1],b=Object(n.useState)(null),p=Object(l.a)(b,2),f=p[0],O=p[1],x=Object(n.useState)(!0),g=Object(l.a)(x,2),y=g[0],w=g[1];return Object(n.useEffect)((function(){c?function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(c);case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():e.push("/login")}),[y]),Object(d.jsx)("div",{children:Object(d.jsx)(h,{nav:Object(d.jsx)(m,{}),filter:Object(d.jsx)(I,{items:a,filterAction:function(e){O(e)}}),body:Object(d.jsx)(W,{filter:f,filterItem:"subcategoryId",references:u,reload:function(){w(!y)}})})})}function ae(){var e=Object(v.f)(),t=V().authorization,c=Object(n.useState)(!1),a=Object(l.a)(c,2),r=a[0],s=a[1];function u(){return(u=Object(o.a)(i.a.mark((function c(n){var a;return i.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.prev=1,c.next=4,H({email:n.target[0].value,password:n.target[1].value});case 4:a=c.sent,console.log(a,"acces"),t(a.data.token),e.push("/admin"),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(1),s(!0),t(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return Object(d.jsx)("div",{className:"aport card ",style:{width:"18rem"},children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Inicie seci\xf3n para administrar las entradas"}),Object(d.jsxs)("form",{className:"row g-3",onSubmit:function(e){return function(e){return u.apply(this,arguments)}(e)},children:[Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("input",{className:"form-control",type:"email",placeholder:"email"})}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("input",{type:"password",className:"form-control",placeholder:"password"})}),Object(d.jsx)("div",{className:"mb-3",children:Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})}),r?Object(d.jsx)("div",{class:"alert alert-danger",role:"alert",children:"Usuario o contrase\xf1a incorrectas"}):""]})]})})}function re(){return Object(d.jsx)("div",{className:"login",children:Object(d.jsx)(h,{nav:Object(d.jsx)(m,{}),body:Object(d.jsx)(ae,{})})})}var se=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v.a,{from:"/",to:"/home"}),Object(d.jsx)(v.b,{path:"/home",component:X}),Object(d.jsx)(v.b,{path:"/home/:search",component:X}),Object(d.jsx)(v.b,{path:"/newreference",component:ce}),Object(d.jsx)(v.b,{path:"/admin",component:ne}),Object(d.jsx)(v.b,{path:"/login",component:re})]})},ie=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};c(39).config(),r.a.render(Object(d.jsx)(f.a,{basename:"/fs-guide",children:Object(d.jsx)(R,{children:Object(d.jsx)(se,{})})}),document.getElementById("root")),ie()}},[[82,1,2]]]);
//# sourceMappingURL=main.1c5f140c.chunk.js.map