(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(24),a=c(7),r=c(2),s=c(12),j=c.n(s),i=(c(33),c(3)),l=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},o=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{className:l,to:"/",children:"Home"}),Object(i.jsx)(a.c,{className:l,to:"/people",children:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(r.b,{})})})]})},b=c(0),h=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},d=c(4),O=c(22),x=(c(35),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var m=function(e){var t=e.person,c=t.name,n=t.sex,s=t.born,l=t.died,o=t.fatherName,b=t.motherName,h=t.slug,d=t.mother,O=t.father,x=Object(r.r)().personSlug;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":h===x}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(a.b,{className:j()({"has-text-danger":"f"===n}),to:"../".concat(h),children:c})}),Object(i.jsx)("td",{children:n}),Object(i.jsx)("td",{children:s}),Object(i.jsx)("td",{children:l}),Object(i.jsx)("td",{children:d?Object(i.jsx)(a.b,{className:"has-text-danger",to:"../".concat(d.slug),children:b}):b||"-"}),Object(i.jsx)("td",{children:O?Object(i.jsx)(a.b,{to:"../".concat(O.slug),children:o}):o||"-"})]})},p=function(){var e=Object(b.useState)(!0),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(b.useState)(!1),r=Object(d.a)(a,2),s=r[0],j=r[1],l=Object(b.useState)([]),o=Object(d.a)(l,2),h=o[0],p=o[1];return Object(b.useEffect)((function(){u().then((function(e){p(function(e){return e.map((function(t){var c=e.find((function(e){return e.name===t.fatherName})),n=e.find((function(e){return e.name===t.motherName}));return Object(O.a)(Object(O.a)({},t),{},{father:c,mother:n})}))}(e))})).catch((function(){return j(!0)})).finally((function(){return n(!1)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[c&&Object(i.jsx)(x,{}),s&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!c&&!h.length&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!!h.length&&Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:h.map((function(e){return Object(i.jsx)(m,{person:e},e.slug)}))})]})]})})]})},f=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},g=function(){return Object(i.jsx)(a.a,{children:Object(i.jsx)(r.e,{children:Object(i.jsxs)(r.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(r.c,{index:!0,element:Object(i.jsx)(h,{})}),Object(i.jsx)(r.c,{path:"home",element:Object(i.jsx)(r.a,{to:"/",replace:!0})}),Object(i.jsx)(r.c,{path:"people",children:Object(i.jsx)(r.c,{path:":personSlug?",element:Object(i.jsx)(p,{})})}),Object(i.jsx)(r.c,{path:"*",element:Object(i.jsx)(f,{})})]})})})};c(36),c(37);Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(g,{}))}},[[38,1,2]]]);
//# sourceMappingURL=main.20b4bf95.chunk.js.map