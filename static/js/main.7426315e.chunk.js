(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,c){e.exports={container:"PageBase_container__2Gr5m",nav:"PageBase_nav__w-w6Z",filter:"PageBase_filter__2MtDP",body:"PageBase_body__2Zj88",foot:"PageBase_foot__yNvyr"}},19:function(e,t,c){e.exports={listIcon:"FilterIcon_listIcon__12pRh",icon:"FilterIcon_icon__3OVFn",iconSelected:"FilterIcon_iconSelected__1TLgb",title:"FilterIcon_title__YIQGQ",null:"FilterIcon_null__3HQMi"}},50:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(42),r=c.n(a),s=(c(50),c(3)),i=c.n(s),o=c(6),l=c(5),u=c(18),j=c.n(u),d=c.p+"static/media/logo-blanco.0b476479.png",b=c(0);function p(){return Object(b.jsx)("nav",{class:"navbar navbar-dark bg-dark footer",children:Object(b.jsxs)("div",{class:"container-md",children:[Object(b.jsx)("img",{src:d,className:"logoFoot",alt:"logoFoot"}),Object(b.jsx)("a",{class:"navbar-brand",href:"https://www.linkedin.com/in/jeremiasjalil/",target:"_blank",rel:"noreferrer",children:"Desarrollo de Jeremias Jalil"})]})})}function h(e){var t=e.nav,c=e.filter,n=e.body;return Object(b.jsxs)("div",{className:j.a.container,children:[Object(b.jsx)("div",{className:j.a.nav,children:t}),Object(b.jsx)("div",{className:j.a.filter,children:c}),Object(b.jsx)("div",{className:j.a.body,children:n}),Object(b.jsx)("div",{className:j.a.foot,children:Object(b.jsx)(p,{})})]})}var f=c(16),O=c(4),v=c.p+"static/media/logo-oscuro.e7f8c206.png";function m(e){var t=e.reload,c=Object(n.useState)(""),a=Object(l.a)(c,2),r=a[0],s=a[1],i=Object(O.f)();return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container-fluid",children:[Object(b.jsx)("img",{className:"navbar-brand logoNav",src:v,alt:"logonav"}),Object(b.jsx)("button",{className:"navbar-toggler ",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo03","aria-controls":"navbarTogglerDemo03","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo03",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(f.b,{className:"nav-link",activeClassName:"nav-link active",to:"/home",onClick:function(){return t?t():""},children:"Inicio "})}),Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)(f.b,{className:"nav-link",activeClassName:"nav-link active",to:"/newreference",children:"Aportar"})}),Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)(f.b,{className:"nav-link",activeClassName:"nav-link active",to:"/admin",children:"Administrar"})})]}),Object(b.jsxs)("form",{className:"d-flex",onSubmit:function(e){e.preventDefault(),i.push("home/".concat(r)),s("")},children:[Object(b.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Buscar","aria-label":"Search",onChange:function(e){return s(e.target.value)},value:r}),Object(b.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Buscar"})]})]})]})})}var x=c(19),g=c.n(x),y=c(13),w=c(8);function k(e){var t=e.title,c=e.list,a=e.iconConverter,r=e.filterAction,s=Object(n.useState)([]),i=Object(l.a)(s,2),o=i[0],u=i[1],j=Object(n.useState)(0),d=Object(l.a)(j,2),p=d[0],h=d[1],f=Object(n.useState)(!1),O=Object(l.a)(f,2),v=O[0],m=O[1];return Object(n.useEffect)((function(){a&&u(a(c))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:g.a.title,onClick:function(){return m(!v)},"data-bs-toggle":"collapse",href:"#collapse".concat(t),role:"button","aria-expanded":"false","aria-controls":"collapse".concat(t),children:[v?Object(b.jsx)(y.a,{icon:w.b},"plus"):Object(b.jsx)(y.a,{icon:w.c},"minus"),Object(b.jsx)("h3",{children:t})]}),Object(b.jsxs)("div",{className:"collapse",id:"collapse".concat(t),children:[r?Object(b.jsx)("div",{children:Object(b.jsx)("em",{className:g.a.icon,onClick:function(){r&&(r(null),h(0))},children:" -- All -- "})}):Object(b.jsx)("div",{}),Object(b.jsx)("div",{className:g.a.listIcon,children:null===o||void 0===o?void 0:o.map((function(e){return Object(b.jsxs)("div",{onClick:function(){return t=e,void(r&&(r(t),h(t)));var t},className:parseInt(e.id)===parseInt(p)?g.a.iconSelected:g.a.icon,children:[Object(b.jsx)(y.a,{icon:e.icon},e.id),Object(b.jsxs)("em",{children:[" ",e.name]})]},e.id)}))})]})]})}var N=c(14);function _(e){return e?e.map((function(e){return Object(N.a)(Object(N.a)({},e),{},{icon:C(e.categoryId)})})):[]}function C(e){var t=S.filter((function(t){return t.id===e}));return 0===t.length?{id:e,name:e,icon:w.e}:t[0].icon}var S=[{id:0,name:"Bd",icon:w.d},{id:1,name:"BackEnd",icon:w.f},{id:2,name:"FrontEnd",icon:w.i},{id:3,name:'"Deployment"',icon:w.h},{id:"4",name:"Others",icon:w.e}];function I(e){var t=e.items,c=e.filterAction;return Object(b.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{class:"container-fluid",children:[Object(b.jsx)("div",{class:"navbar-toggler","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)(y.a,{icon:w.g},"minus")}),Object(b.jsx)("div",{class:"collapse navbar-collapse ",id:"navbarScroll",children:Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h2",{children:"Categor\xedas"}),null===t||void 0===t?void 0:t.map((function(e){return Object(b.jsx)(k,{title:e.name,list:e.subcategories,iconConverter:_,filterAction:c})}))]})})]})})}var F=c(15),D=c.n(F);c(39).config();var A="https://fsguide.herokuapp.com";function B(){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(A,"/category"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function T(){return P.apply(this,arguments)}function P(){return(P=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(A,"/reference"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function q(e){return z.apply(this,arguments)}function z(){return(z=Object(o.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(A,"/reference/pending"),{headers:{Authorization:"Bearer ".concat(t)}});case 3:return c=e.sent,e.abrupt("return",c.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function L(){return(L=Object(o.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.post("".concat(A,"/reference"),t);case 3:return c=e.sent,e.abrupt("return",c);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function J(e,t,c){return M.apply(this,arguments)}function M(){return(M=Object(o.a)(i.a.mark((function e(t,c,n){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.put("".concat(A,"/reference/").concat(c),t,{headers:{Authorization:"Bearer ".concat(n)}});case 3:return a=e.sent,e.abrupt("return",a);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function G(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(o.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(A,"/reference?search=").concat(t));case 3:return c=e.sent,e.abrupt("return",c.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function H(e){return U.apply(this,arguments)}function U(){return(U=Object(o.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.post("".concat(A,"/user/login"),t);case 3:return c=e.sent,e.abrupt("return",c);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var Z=Object(n.createContext)();function R(e){var t=Object(n.useState)(!1),c=Object(l.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)([]),u=Object(l.a)(s,2),j=u[0],d=u[1];function p(){return(p=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){r(e)}Object(n.useEffect)((function(){!function(){p.apply(this,arguments)}()}),[]);var f=Object(n.useMemo)((function(){return{userAcces:a,authorization:h,categorys:j}}),[a,j]);return Object(b.jsx)(Z.Provider,Object(N.a)({value:f},e))}function V(){var e=Object(n.useContext)(Z);if(e)return e;throw new Error("Error en useContext")}var Y=c(24),K=c(44);function W(e){var t=e.filter,c=e.filterItem,a=e.references,r=e.reload,s=Object(n.useState)([]),i=Object(l.a)(s,2),o=i[0],u=i[1],j=V().userAcces;return Object(n.useEffect)((function(){u(t?a.filter((function(e){return e[c]===t.id})):a)}),[t,a]),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{children:null===t||void 0===t?void 0:t.name}),Object(b.jsx)("div",{className:"row",children:o.map((function(e){return Object(b.jsx)("div",{className:"col-sm-4",children:Object(b.jsxs)("div",{class:"card",style:{width:"98%"},children:[Object(b.jsxs)("div",{class:"card-header",children:[Object(b.jsxs)("div",{class:"github",onClick:function(){return window.open("https://github.com/".concat(e.user),"_blank")},children:[Object(b.jsx)(y.a,{icon:K.a}),e.user]}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[j?Object(b.jsx)(y.a,{className:"ok",icon:w.a,onClick:function(){return J({public:"acept"},e.id,j),void r()}}):"",j?Object(b.jsx)(y.a,{className:"noOk",icon:w.j,onClick:function(){return J({public:"deleted"},e.id,j),void r()}}):""]})})]}),Object(b.jsxs)("div",{class:"card-body",children:["pending"===e.public?Object(b.jsx)("h5",{class:"card-title",children:e.name}):Object(b.jsx)(b.Fragment,{}),Object(b.jsx)(Y.a,{url:e.link,width:"100%",descriptionLength:"150",textAlign:"right"},e.id),"pending"===e.public?Object(b.jsx)("p",{class:"card-text",children:e.description}):Object(b.jsx)(b.Fragment,{})]})]})})}))})]})}function X(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(null),u=Object(l.a)(s,2),j=u[0],d=u[1],p=Object(n.useState)(!0),f=Object(l.a)(p,2),v=f[0],x=f[1],g=V().categorys,y=Object(O.g)();function w(){return(w=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:t=e.sent,r(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(o.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(t);case 2:c=e.sent,r(c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){y.search?function(e){k.apply(this,arguments)}(y.search):function(){w.apply(this,arguments)}()}),[v]),Object(b.jsx)("div",{className:"home",children:Object(b.jsx)(h,{nav:Object(b.jsx)(m,{reload:function(){x(!v)}}),filter:Object(b.jsx)(I,{items:g,filterAction:function(e){d(e)}}),body:Object(b.jsx)(W,{filter:j,filterItem:"subcategoryId",references:a})})})}var $=c(23),ee=c(45);function te(e){var t=e.style;return Object(b.jsx)("div",{className:"aport card coment",style:t,children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{class:"card-title",children:"Publicaci\xf3n"}),Object(b.jsx)("p",{class:"card-text",children:"Estos aportes ser\xe1n publicados una vez sean aprobados por el administrador."}),Object(b.jsx)("p",{class:"card-text",children:"El fin de estos aportes es poder ayudar a los nuevos Full Stack Developper a encontrar facilmente la informaci\xf3n para sus proyectos"}),Object(b.jsx)("b",{class:"card-text",children:"Muchas gracias :D"})]})})}function ce(e){var t=e.loading,c=e.preview;return t?Object(b.jsx)("h1",{children:"Loading..."}):Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["Domain: ",c.domain]}),Object(b.jsxs)("p",{children:["Title: ",c.title]}),Object(b.jsxs)("p",{children:["Description: ",c.description]}),Object(b.jsx)("img",{height:"100px",width:"100px",src:c.img,alt:c.title})]})}function ne(e){var t,c=e.categorys,a={name:"",description:"",link:"",category:"",user:"",subcategory:"",public:"pending"},r=Object(n.useState)(a),s=Object(l.a)(r,2),i=s[0],o=s[1],u=Object(n.useState)(!1),j=Object(l.a)(u,2),d=j[0],p=j[1],h=Object(O.f)();function f(e){var t=e.target.name,c=e.target.value;o(Object(N.a)(Object(N.a)({},i),{},Object($.a)({},t,c)))}function v(e){if(e.preventDefault(),function(e){L.apply(this,arguments)}(i),d){var t=i.user;o(Object(N.a)(Object(N.a)({},a),{},{user:t}))}else o(a),h.push("/home")}return Object(b.jsxs)("div",{className:"aport card",children:[Object(b.jsxs)("div",{class:"card-body",children:[Object(b.jsx)("h3",{class:"card-title",children:"Aporta a la guia un enlace que te parezca interesante para compartir"}),Object(b.jsxs)("form",{class:"row g-3",onSubmit:function(e){return v(e)},children:[Object(b.jsx)("div",{class:"col-md-6",children:Object(b.jsx)("input",{class:"form-control",type:"text",placeholder:"T\xedtulo",name:"name",onChange:function(e){return f(e)},value:i.name,required:!0})}),Object(b.jsx)("div",{class:"col-md-6",children:Object(b.jsx)("input",{class:"form-control",type:"url",placeholder:"Url",name:"link",onChange:function(e){return f(e)},value:i.link,required:!0})}),Object(b.jsx)("div",{class:"col-md-12",children:Object(b.jsx)("textarea",{class:"form-control",type:"text",placeholder:"Descripci\xf3n, esto ayuda al buscador",name:"description",rows:"3",onChange:function(e){return f(e)},value:i.description,required:!0})}),Object(b.jsx)("div",{class:"col-md-3",children:Object(b.jsxs)("select",{class:"form-select form-select-lg mb-3",name:"category",onChange:function(e){return f(e)},value:i.category,required:!0,children:[Object(b.jsx)("option",{selected:!0,children:"Categor\xeda"}),c.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.name})}))]})}),Object(b.jsx)("div",{class:"col-md-3",children:Object(b.jsxs)("select",{class:"form-select form-select-lg mb-3",name:"subcategory",onChange:function(e){return f(e)},required:!0,children:[Object(b.jsx)("option",{selected:!0,children:"Subcategor\xeda"}),null===(t=c[i.category])||void 0===t?void 0:t.subcategories.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.name})}))]})}),Object(b.jsx)("div",{class:"col-md-6",children:Object(b.jsx)("input",{class:"form-control",type:"text",name:"user",placeholder:"Tu nombre de usuario de GitHub",onChange:function(e){return f(e)},value:i.github,required:!0})}),i.link?Object(b.jsxs)("div",{children:[Object(b.jsx)(Y.a,{url:i.link,width:"100%"})," ",Object(b.jsx)(ee.a,{url:i.link,render:ce})," "]}):Object(b.jsx)(b.Fragment,{}),Object(b.jsx)("div",{class:"d-grid gap-2",children:Object(b.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Enviar"})})]}),Object(b.jsxs)("div",{class:"form-check",children:[Object(b.jsx)("input",{class:"form-check-input",type:"checkbox",onChange:function(e){return p(e.target.checked)},id:"flexCheckDefault"}),Object(b.jsx)("label",{class:"form-check-label",for:"flexCheckDefault",children:"Activar para hacer multiples aportes"})]})]}),Object(b.jsx)(te,{})]})}function ae(){var e=V().categorys;return Object(b.jsx)("div",{children:Object(b.jsx)(h,{nav:Object(b.jsx)(m,{}),body:Object(b.jsx)(ne,{categorys:e})})})}function re(){var e=Object(O.f)(),t=V(),c=t.userAcces,a=t.categorys,r=Object(n.useState)([]),s=Object(l.a)(r,2),u=s[0],j=s[1],d=Object(n.useState)(null),p=Object(l.a)(d,2),f=p[0],v=p[1],x=Object(n.useState)(!0),g=Object(l.a)(x,2),y=g[0],w=g[1];return Object(n.useEffect)((function(){c?function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(c);case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()():e.push("/login")}),[y]),Object(b.jsx)("div",{children:Object(b.jsx)(h,{nav:Object(b.jsx)(m,{}),filter:Object(b.jsx)(I,{items:a,filterAction:function(e){v(e)}}),body:Object(b.jsx)(W,{filter:f,filterItem:"subcategoryId",references:u,reload:function(){w(!y)}})})})}function se(){var e=Object(O.f)(),t=V().authorization,c=Object(n.useState)(!1),a=Object(l.a)(c,2),r=a[0],s=a[1];function u(){return(u=Object(o.a)(i.a.mark((function c(n){var a;return i.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.prev=1,c.next=4,H({email:n.target[0].value,password:n.target[1].value});case 4:a=c.sent,console.log(a,"acces"),t(a.data.token),e.push("/admin"),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(1),s(!0),t(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return Object(b.jsx)("div",{className:"aport card ",style:{width:"18rem"},children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:"Inicie seci\xf3n para administrar las entradas"}),Object(b.jsxs)("form",{className:"row g-3",onSubmit:function(e){return function(e){return u.apply(this,arguments)}(e)},children:[Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("input",{className:"form-control",type:"email",placeholder:"email"})}),Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("input",{type:"password",className:"form-control",placeholder:"password"})}),Object(b.jsx)("div",{className:"mb-3",children:Object(b.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})}),r?Object(b.jsx)("div",{class:"alert alert-danger",role:"alert",children:"Usuario o contrase\xf1a incorrectas"}):""]})]})})}function ie(){return Object(b.jsx)("div",{className:"login",children:Object(b.jsx)(h,{nav:Object(b.jsx)(m,{}),body:Object(b.jsx)(se,{})})})}var oe=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O.a,{from:"/",to:"/home"}),Object(b.jsx)(O.b,{path:"/home",component:X}),Object(b.jsx)(O.b,{path:"/home/:search",component:X}),Object(b.jsx)(O.b,{path:"/newreference",component:ae}),Object(b.jsx)(O.b,{path:"/admin",component:re}),Object(b.jsx)(O.b,{path:"/login",component:ie})]})},le=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};c(39).config(),r.a.render(Object(b.jsx)(f.a,{basename:"/fs-guide",children:Object(b.jsx)(R,{children:Object(b.jsx)(oe,{})})}),document.getElementById("root")),le()}},[[82,1,2]]]);
//# sourceMappingURL=main.7426315e.chunk.js.map