"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[503],{383:function(t,n,e){e.d(n,{IR:function(){return m},Ku:function(){return l},Pg:function(){return p},fI:function(){return h},jF:function(){return s}});var r=e(861),a=e(757),u=e.n(a),c=e(243),i="84029c9837f956e6efcec3397d1d9066";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/all/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"},510:function(t,n,e){e.d(n,{e:function(){return i}});var r=e(87),a=e(689),u="MovieList_list__link__VFc9j",c=e(184),i=function(t){var n=t.data,e=(0,a.TH)();return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:n.map((function(t){var n=t.id,a=t.title,i=t.name;return(0,c.jsx)("li",{children:(0,c.jsxs)(r.Link,{className:u,state:{from:e},to:"/movies/".concat(n),children:[" ",a||i]})},n)}))})})}},503:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(861),a=e(439),u=e(757),c=e.n(u),i=e(791),s=e(184),o=function(t){var n=t.onSubmit,e=(0,i.useState)(""),r=(0,a.Z)(e,2),u=r[0],c=r[1];return(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n(u),c("")},children:[(0,s.jsx)("input",{type:"text",name:"movie",onChange:function(t){return c(t.target.value)}}),(0,s.jsx)("button",{type:"submit",children:"Search"})]})},p=e(383),f=e(87),l=e(510),d=function(){var t,n=(0,i.useState)(null),e=(0,a.Z)(n,2),u=e[0],d=e[1],h=(0,f.useSearchParams)(),v=(0,a.Z)(h,2),m=v[0],x=v[1],g=null!==(t=m.get("filter"))&&void 0!==t?t:"";if((0,i.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.IR(n);case 2:return e=t.sent,t.abrupt("return",d(e));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();t(g)}),[g]),u){return(0,s.jsxs)("main",{children:[(0,s.jsx)(o,{onSubmit:function(t){x(""!==t?{filter:t}:{})}}),(0,s.jsx)(l.e,{data:u})]})}}}}]);
//# sourceMappingURL=503.b4dd03fd.chunk.js.map