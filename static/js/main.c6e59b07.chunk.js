(this["webpackJsonpblog-api-cms"]=this["webpackJsonpblog-api-cms"]||[]).push([[0],{31:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/comments.475722ba.svg"},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),o=n(15),r=n.n(o),a=n(6),i=n(16),u=Object(i.b)({name:"token",initialState:{token:""},reducers:{setToken:function(t,e){t.token=e.payload}}}),b=u.actions.setToken,j=u.reducer,l=Object(i.a)({reducer:{token:j}}),p=n(9),m=n.n(p),h=n(11),d=n(4),O=n(10),f=n(2),x=(n(31),n(1)),g=function(){var t=Object(f.f)(),e=Object(a.c)((function(t){return t.token})).token;return Object(x.jsx)("nav",{children:Object(x.jsxs)("ul",{children:["success"===e.status&&Object(x.jsx)("li",{onClick:function(){return t("/blog-cms/posts")},children:"Home"}),"success"!==e.status&&Object(x.jsx)("li",{onClick:function(){return t("/blog-cms/")},children:"Login"}),Object(x.jsx)("li",{onClick:function(){return t("/blog-cms/new-post")},children:"New post"})]})})},v=(n(33),function(){return Object(x.jsxs)("footer",{children:[Object(x.jsx)("p",{children:"\xa9 Jonthejon10, 2021"}),Object(x.jsx)("button",{className:"github-button",onClick:function(){window.open("https://github.com/Jonthejon10")}})]})}),y=n(8),k=n(3),N=(n(34),function(){var t=Object(f.f)(),e=Object(a.b)(),n=Object(c.useState)({}),s=Object(d.a)(n,2),o=s[0],r=s[1],i=Object(a.c)((function(t){return t.token})).token,u=function(t){r(Object(k.a)(Object(k.a)({},o),{},Object(y.a)({},t.target.name,t.target.value)))};return Object(c.useEffect)((function(){"success"===i.status&&t("/blog-cms/posts")}),[i]),Object(x.jsx)("div",{className:"content-container login-container",children:Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault(),fetch("https://obscure-refuge-23971.herokuapp.com/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:o.username,password:o.password})}).then((function(t){return t.json()})).then((function(t){return e(b(t))})).catch((function(t){return console.log(t)}))},children:[Object(x.jsx)("input",{type:"text",name:"username",placeholder:"Enter username",required:!0,onChange:u}),Object(x.jsx)("input",{type:"password",name:"password",placeholder:"Enter password",required:!0,onChange:u}),Object(x.jsx)("input",{type:"submit"})]})})}),S=n(7),w=n(14),C=(n(35),function(t){var e=t.posts,c=t.setPosts,s=Object(f.f)(),o=Object(a.c)((function(t){return t.token})).token;return Object(x.jsxs)("div",{className:"content-container posts-container",children:["success"===o.status&&e.map((function(t,r){return Object(x.jsxs)("div",{className:"post-container ".concat(t.visible?"visible":"hidden"),children:[Object(x.jsx)("h2",{children:t.title}),Object(x.jsxs)("h3",{children:[" by ",t.author]}),t.timestamp&&Object(x.jsxs)("p",{children:[Object(w.a)(new Date(t.timestamp),new Date)," ","ago"]}),Object(x.jsxs)("div",{className:"comments-container",children:[Object(x.jsx)("img",{src:n(36).default,alt:""}),Object(x.jsx)("span",{children:t.comments.length})]}),Object(x.jsx)("div",{className:"buttons-container",children:Object(x.jsx)("button",{className:"post-button",onClick:function(){return s("/blog-cms/posts/"+t._id)},children:"Open post"})}),Object(x.jsxs)("div",{className:"edit-buttons-container",children:[Object(x.jsx)("button",{className:"post-admin-btn visible-post-btn",onClick:function(){return function(t){var n=e.find((function(e){return e._id===t}));c(Object(S.a)(e).map((function(t){return t._id===n._id?Object(k.a)(Object(k.a)({},t),{},{visible:!n.visible}):t}))),fetch("https://obscure-refuge-23971.herokuapp.com/api/posts/".concat(t,"/update"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o.token},body:JSON.stringify({author:n.author,timestamp:n.timestamp,title:n.title,text:n.text,comments:n.comments,visible:!n.visible,refId:n._id})}).catch((function(t){return console.log(t)}))}(t._id)}}),Object(x.jsx)("button",{className:"post-admin-btn delete-post-btn",onClick:function(){return function(t){fetch("https://obscure-refuge-23971.herokuapp.com/api/posts/".concat(t,"/delete"),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+o.token},body:JSON.stringify({id:t})});var n=e.filter((function(e){return e._id!==t}));c(n)}(t._id)}})]})]},r)})),"success"!==o.status&&Object(x.jsx)("div",{className:"failure-container",children:Object(x.jsxs)("h2",{children:["Access forbidden, ",Object(x.jsx)("a",{href:"/blog-cms/",children:"log in"})," first !"]})})]})}),T=(n(37),function(t){var e=t.posts,n=t.setPosts,s=Object(f.f)(),o=Object(c.useState)({comments:[]}),r=Object(d.a)(o,2),i=r[0],u=r[1],b=Object(a.c)((function(t){return t.token})).token,j=function(t){u(Object(k.a)(Object(k.a)({},i),{},Object(y.a)({},t.target.name,t.target.value)))},l=function(){var t=Object(h.a)(m.a.mark((function t(c){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.preventDefault(),fetch("https://obscure-refuge-23971.herokuapp.com/api/posts",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+b.token},body:JSON.stringify({author:"Jonthejon10",title:i.title,text:i.text})}).catch((function(t){return console.log(t)})),n([].concat(Object(S.a)(e),[i])),u({comments:[]}),s("/blog-cms/posts");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"content-container newpost-container",children:["success"===b.status&&Object(x.jsxs)("form",{onSubmit:l,children:[Object(x.jsx)("label",{htmlFor:"title",children:"Title"}),Object(x.jsx)("input",{type:"text",name:"title",id:"title",required:!0,onChange:j}),Object(x.jsx)("label",{htmlFor:"text",children:"Text"}),Object(x.jsx)("textarea",{id:"text",name:"text",required:!0,rows:"5",cols:"30",onChange:j}),Object(x.jsx)("input",{type:"submit"})]}),"success"!==b.status&&Object(x.jsx)("div",{className:"failure-container",children:Object(x.jsxs)("h2",{children:["Access forbidden, ",Object(x.jsx)("a",{href:"/blog-cms/",children:"log in"})," first !"]})})]})}),E=(n(38),function(t){var e=t.posts,n=t.setPosts,s=Object(f.f)(),o=Object(f.g)().id,r=Object(c.useState)({}),i=Object(d.a)(r,2),u=i[0],b=i[1],j=Object(c.useState)({}),l=Object(d.a)(j,2),p=l[0],O=l[1],g=Object(a.c)((function(t){return t.token})).token,v=Object(c.useState)(!1),N=Object(d.a)(v,2),C=N[0],T=N[1];function E(){return _.apply(this,arguments)}function _(){return(_=Object(h.a)(m.a.mark((function t(){var e,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("fetching"),t.prev=1,t.next=4,fetch("https://obscure-refuge-23971.herokuapp.com/api/posts/".concat(o));case 4:return e=t.sent,t.next=7,e.json();case 7:return n=t.sent,t.abrupt("return",b(n.post));case 11:t.prev=11,t.t0=t.catch(1),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})))).apply(this,arguments)}Object(c.useEffect)((function(){E();var t=setInterval((function(){E()}),1e4);return function(){return clearInterval(t)}}),[o]);var D=function(t){O(Object(k.a)(Object(k.a)({},p),{},Object(y.a)({},t.target.name,t.target.value)))},J=function(t){b(Object(k.a)(Object(k.a)({},u),{},Object(y.a)({},t.target.name,t.target.value)))},P=function(t){t.preventDefault(),T(!1),fetch("https://obscure-refuge-23971.herokuapp.com/api/posts/".concat(o,"/update"),{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer "+g.token},body:JSON.stringify({author:u.author,timestamp:u.timestamp,title:u.title,text:u.text,comments:u.comments,visible:u.visible,refId:o})}).catch((function(t){return console.log(t)})),n([].concat(Object(S.a)(e),[u])),n(Object(S.a)(e).map((function(t){return t._id===u._id?Object(k.a)(Object(k.a)({},t),{},{title:u.title,text:u.text,author:u.author}):t})))};return Object(x.jsxs)("div",{className:"content-container fullpost-container",children:[Object(x.jsx)("button",{className:"styled-btn",onClick:function(){return s("/blog-cms/posts")},children:"Go back"}),Object(x.jsx)("h1",{children:u.title}),C&&Object(x.jsxs)("form",{onSubmit:function(t){return P(t)},children:[Object(x.jsx)("input",{type:"text",name:"title",value:u.title,onChange:function(t){return J(t)}}),Object(x.jsx)("button",{type:"submit",className:"styled-btn",children:"Submit"})]}),Object(x.jsxs)("h3",{children:["by ",u.author]}),C&&Object(x.jsxs)("form",{onSubmit:P,children:[Object(x.jsx)("input",{type:"text",name:"author",value:u.author,onChange:function(t){return J(t)}}),Object(x.jsx)("button",{type:"submit",className:"styled-btn",children:"Submit"})]}),u.timestamp&&Object(x.jsxs)("p",{children:[Object(w.a)(new Date(u.timestamp),new Date)," ago"]}),Object(x.jsx)("p",{className:"post-text",children:u.text}),C&&Object(x.jsxs)("form",{onSubmit:P,children:[Object(x.jsx)("textarea",{type:"text",name:"text",value:u.text,onChange:function(t){return J(t)}}),Object(x.jsx)("button",{type:"submit",className:"styled-btn",children:"Submit"})]}),Object(x.jsx)("button",{type:"button",className:"edit-post-btn",onClick:function(){return T(!C)}}),Object(x.jsxs)("form",{className:"comments-form",onSubmit:function(t){t.preventDefault(),fetch("https://obscure-refuge-23971.herokuapp.com/api/posts/".concat(o,"/comments"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({author:p.author,text:p.text,reference:o})}).catch((function(t){return console.log(t)}));var e=Object(S.a)(u.comments);e.push(p),b(Object(k.a)(Object(k.a)({},u),{},{comments:Object(S.a)(e)})),O({})},children:[Object(x.jsx)("p",{children:"Got something to say ? "}),Object(x.jsx)("input",{type:"text",required:!0,name:"author",onChange:D,placeholder:"Enter your name"}),Object(x.jsx)("textarea",{type:"text",required:!0,name:"text",onChange:D,rows:"6",placeholder:"Enter your comment"}),Object(x.jsx)("button",{type:"submit",className:"styled-btn",children:"Submit"})]}),Object(x.jsx)("div",{className:"post-comments-container",children:u.comments&&u.comments.map((function(t,e){return Object(x.jsxs)("div",{className:"post-comment",children:[Object(x.jsx)("p",{children:t.text}),Object(x.jsxs)("p",{children:["by ",t.author]}),t.timestamp&&Object(x.jsxs)("p",{children:[Object(w.a)(new Date(t.timestamp),new Date)," ","ago"]}),"success"===g.status&&Object(x.jsx)("button",{type:"button",className:"comment-delete-btn",onClick:function(){return function(t){fetch("https://obscure-refuge-23971.herokuapp.com/api/posts/".concat(o,"/comments/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+g.token},body:JSON.stringify({id:t,post_id:o})}).catch((function(t){return console.log(t)}));var e=u.comments.filter((function(e){return e._id!==t}));b(Object(k.a)(Object(k.a)({},u),{},{comments:Object(S.a)(e)})),O({})}(t._id)}})]},e)}))})]})}),_=(n(39),function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],s=e[1];function o(){return(o=Object(h.a)(m.a.mark((function t(){var e,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://obscure-refuge-23971.herokuapp.com/api/posts");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,s(n.posts),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[n.length]),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)(O.a,{children:[Object(x.jsx)(g,{}),Object(x.jsxs)(f.c,{children:[Object(x.jsx)(f.a,{exact:!0,path:"/blog-cms/",element:Object(x.jsx)(N,{})}),Object(x.jsx)(f.a,{exact:!0,path:"/blog-cms/posts",element:Object(x.jsx)(C,{posts:n,setPosts:s})}),Object(x.jsx)(f.a,{exact:!0,path:"/blog-cms/posts/:id",element:Object(x.jsx)(E,{posts:n,setPosts:s})}),Object(x.jsx)(f.a,{exact:!0,path:"/blog-cms/new-post",element:Object(x.jsx)(T,{posts:n,setPosts:s})})]}),Object(x.jsx)(v,{})]})})});r.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(a.a,{store:l,children:Object(x.jsx)(_,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.c6e59b07.chunk.js.map