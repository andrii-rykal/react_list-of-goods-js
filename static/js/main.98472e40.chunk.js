(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(7),s=n.n(c),i=n(6),r=n(8),o=n(1),a=n(4),l=n.n(a),u=(n(13),n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="alphabetically",h="length";var d=function(){var t=Object(o.useState)(!1),e=Object(i.a)(t,2),n=e[0],c=e[1],s=Object(o.useState)(""),a=Object(i.a)(s,2),d=a[0],g=a[1],p=function(t,e,n){var c=Object(r.a)(t);return e&&c.sort((function(t,n){switch(e){case j:return t.localeCompare(n);case h:return t.length-n.length;default:return 0}})),n&&c.reverse(),c}(b,d,n);return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{onClick:function(){return g(j)},type:"button",className:l()("button","is-info",{"is-light":d!==j}),children:"Sort alphabetically"}),Object(u.jsx)("button",{onClick:function(){return g(h)},type:"button",className:l()("button","is-success",{"is-light":d!==h}),children:"Sort by length"}),Object(u.jsx)("button",{onClick:function(){return c(!n)},type:"button",className:l()("button","is-warning",{"is-light":!1===n}),children:"Reverse"}),(d||n)&&Object(u.jsx)("button",{onClick:function(){g(""),c(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(u.jsx)("ul",{children:p.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.98472e40.chunk.js.map