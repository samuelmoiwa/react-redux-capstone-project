(this["webpackJsonpreact-redux-crud-app"]=this["webpackJsonpreact-redux-crud-app"]||[]).push([[0],{67:function(e,c,t){},68:function(e,c,t){"use strict";t.r(c);var n=t(0),a=t(32),r=t.n(a),s=t(11),i=t(9),d=t(3),o=t(12),j=t(15),l=t(16),u=t.n(l),b={SET_PRODUCTS:"SET_PRODUCTS",SELECTED_PRODUCT:"SELECTED_PRODUCT",REMOVE_SELECTED_PRODUCT:"REMOVE_SELECTED_PRODUCT"},O=function(e){return{type:b.SET_PRODUCTS,payload:e}},h=function(e){return{type:b.SELECTED_PRODUCT,payload:e}},p=t(1),x=function(){var e=Object(i.c)((function(e){return e.allProducts.products})).map((function(e){var c=e.id,t=e.title,n=e.image,a=e.price,r=e.category;return Object(p.jsx)("div",{className:"eight wide column main_container",children:Object(p.jsx)(s.b,{to:"/product/".concat(c),children:Object(p.jsx)("div",{className:"ui link cards",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("div",{className:"image",children:Object(p.jsx)("img",{src:n,alt:t})}),Object(p.jsxs)("div",{className:"content",children:[Object(p.jsx)("div",{className:"header",children:t}),Object(p.jsxs)("div",{className:"meta price",children:["$",a]}),Object(p.jsx)("div",{className:"meta",children:r})]})]})})})},c)}));return Object(p.jsx)(p.Fragment,{children:e})},m=function(){var e=Object(i.c)((function(e){return e.allProducts.products})),c=Object(i.b)(),t=function(){var e=Object(j.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://fakestoreapi.com/products").catch((function(e){console.log("Err: ",e)}));case 2:t=e.sent,c(O(t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){t()}),[]),console.log("Products :",e),Object(p.jsx)("div",{className:"ui grid container",children:Object(p.jsx)(x,{})})},E=function(){return Object(p.jsx)("div",{className:"ui fixed menu",children:Object(p.jsx)("div",{className:"ui container center",children:Object(p.jsx)("h2",{children:"Shop Moiwa"})})})},v=(t(67),function(){var e=Object(d.g)().productId,c=Object(i.c)((function(e){return e.product})),t=c.image,a=c.title,r=c.price,s=c.category,l=c.description,O=Object(i.b)(),x=function(){var e=Object(j.a)(Object(o.a)().mark((function e(c){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://fakestoreapi.com/products/"+c).catch((function(e){console.log("Err: ",e)}));case 2:t=e.sent,O(h(t.data));case 4:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}(),m=Object(d.f)();return Object(n.useEffect)((function(){return e&&""!==e&&x(e),function(){O({type:b.REMOVE_SELECTED_PRODUCT})}}),[e]),Object(p.jsx)("div",{className:"ui grid container",children:0===Object.keys(c).length?Object(p.jsx)("div",{children:"...Loading"}):Object(p.jsxs)("div",{className:"ui placeholder segment",children:[Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACCElEQVRIDd1UQUsbURCe2U31FxSsQhGkQmJuPVY8Si8WA02IB6GHntubJw8B2x9gPHoRPFhSaUFv3oRAvbeNJIViDzk0BxEsKLq7029qHywv7yXrUR9vMm++nfm+zLxNiO764ts2UKvVgulischJMklYEkUnnU7nG/AEYd/O9SEDAJAET/L5WYrjCTF5YThTKBQ0/GqgtA/SwaCzIUfLE3ZeJDJlYybO1EGj0QivReZAPmYK016w0nH6PLQD/eYgf+YjV7IHQfBTvcsGCii5zhzkfWMxZBh+t9VqfTex7VFrQzfxsLFoFt6kX9Vq9QszQ0eRfnPeQb1eH40p2AxZnmsJqptE8hmjjjRWA9bttNtHg8g1L6cftj18NL7BIssGR5slJn6cMK2riJL/OD5uYoSJyfF55x2AvGwXgPRpQPw2SZJeVnLlcAswx/rQNhXJhbkV/LBG7We+2CmAvj/5CoDPC/EHvAQjOA/dToHLP+dvhOTQV41OXkDkYxYR9pGgOIyZt/ECLvlygB8EJIuVSuUCZ+f2Cmg2REYwrl0iXtDYZSDYY5IyRK5cz50jMolahISX+A3sG8z2/8bFvGrjJka9Obp9FhESeu2uJhoqoIX/RUrCtKOxbbjwyMZMnElAkyEShyKvXOPCX9EWeVZmAa2HyBUKcCf8HpfbA/ZbhN6dnZ6u4XxP919cSbb3DoiF6QAAAABJRU5ErkJggg==",alt:"back",className:"back_arrow",onClick:function(){return m.goBack()}}),Object(p.jsxs)("div",{className:"ui two column stackable center aligned grid testF",children:[Object(p.jsx)("div",{className:"ui vertical divider",children:"AND"}),Object(p.jsxs)("div",{className:"middle aligned row",children:[Object(p.jsx)("div",{className:"column lp",children:Object(p.jsx)("img",{className:"ui fluid image",src:t,alt:"product"})}),Object(p.jsxs)("div",{className:"column rp",children:[Object(p.jsx)("h1",{children:a}),Object(p.jsx)("h2",{children:Object(p.jsxs)("a",{className:"ui teal tag label",children:["$",r]})}),Object(p.jsx)("h3",{className:"ui brown block header",children:s}),Object(p.jsx)("p",{children:l}),Object(p.jsxs)("div",{className:"ui vertical animated button",tabIndex:"0",children:[Object(p.jsx)("div",{className:"hidden content",children:Object(p.jsx)("i",{className:"shop icon"})}),Object(p.jsx)("div",{className:"visible content",children:"Add to Cart"})]})]})]})]})]})})});var f=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(s.a,{children:[Object(p.jsx)(E,{}),Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{path:"/",exact:!0,component:m}),Object(p.jsx)(d.a,{path:"/product/:productId",component:v}),Object(p.jsx)(d.a,{children:"404 Page Not Found!"})]})]})})},g=t(17),A=t(10),C={products:[]},N=Object(g.a)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,c=arguments.length>1?arguments[1]:void 0,t=c.type,n=c.payload;return t===b.SET_PRODUCTS?Object(A.a)(Object(A.a)({},e),{},{products:n}):e},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0,t=c.type,n=c.payload;switch(t){case b.SELECTED_PRODUCT:return Object(A.a)(Object(A.a)({},e),n);case b.REMOVE_SELECTED_PRODUCT:return{};default:return e}}}),D=N,R=Object(g.b)(D,{});r.a.createRoot(document.getElementById("root")).render(Object(p.jsx)(s.a,{children:Object(p.jsx)(i.a,{store:R,children:Object(p.jsx)(f,{})})}))}},[[68,1,2]]]);
//# sourceMappingURL=main.53ae3199.chunk.js.map