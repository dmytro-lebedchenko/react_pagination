(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{12:function(e,a,c){},13:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),r=c(4),i=c(1),l=c(14),s=c(2),o=c.n(s),j=c(0),u=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,r=t-1,i=t+1,s=Math.ceil(a/c),u=Array.from({length:s},(function(e,a){return a+1}));return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:1===t}),children:Object(j.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#".concat(r),"aria-disabled":1===t,onClick:function(){return n(r)},children:"\xab"})}),u.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:t===e}),children:Object(j.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})},Object(l.a)())})),Object(j.jsx)("li",{className:o()("page-item",{disabled:t===s}),children:Object(j.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#".concat(i),"aria-disabled":t===s,onClick:function(){return n(i)},children:"\xbb"})})]})};function d(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}c(12);var b=[3,5,10,20],h=function(){var e=Object(i.useState)(1),a=Object(r.a)(e,2),c=a[0],t=a[1],n=Object(i.useState)(5),s=Object(r.a)(n,2),o=s[0],h=s[1],m=Math.ceil(42/o),p=1+(c-1)*o,g=c===m?42:c*o;return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(c," (items ").concat(p," - ").concat(g," of ").concat(42,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:" col-3 col-sm-2 col-xl-1",children:Object(j.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:o,onChange:function(e){return h(+e.target.value),void t(1)},children:b.map((function(e){return Object(j.jsx)("option",{value:e,children:e},Object(l.a)())}))})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(u,{total:42,perPage:o,currentPage:c,onPageChange:function(e){return function(e){e<=0||e>m||t(e)}(e)}}),Object(j.jsx)("ul",{children:d(p,g).map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},Object(l.a)())}))})]})};n.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.edf00ac6.chunk.js.map