(this["webpackJsonprecipe-project"]=this["webpackJsonprecipe-project"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);c(11);var n=c(1),a=c.n(n),s=c(8),r=c.n(s),i=c(7),o=c.n(i),l=c(9),d=c(2),j=c(3),m=c(5),u=c(4),b=c(25),h=(c(17),c(18),c(0));var p=function(e){var t=e.data,c=e.closeModal,n=t.map((function(e){var t=e.text,c=e.weight,n=e.image,a=e.quantity;return Object(h.jsxs)("li",{className:"modal-ingredients",children:[Object(h.jsx)("img",{className:"modal-photo",src:n,alt:t}),Object(h.jsxs)("div",{className:"modal-information modal-list",children:[Object(h.jsx)("p",{className:"modal-text modal-item",children:t}),Object(h.jsxs)("p",{className:"modal-properties modal-item",children:["weight: ",0===c?"no specific weight":Math.floor(c)," grams"]}),Object(h.jsxs)("p",{className:"modal-properties modal-item",children:["quantity: ",0===a?"no specific quantity":a]})]},Object(b.a)())]},Object(b.a)())}));return Object(h.jsx)("div",{className:"modal",children:Object(h.jsx)("div",{className:"modal-body",children:Object(h.jsxs)("div",{className:"modal-content","data-simplebar":!0,children:[Object(h.jsxs)("div",{className:"modal-top",children:[Object(h.jsx)("h3",{className:"modal-title",children:"Ingredients"}),Object(h.jsx)("button",{onClick:function(){return c()},className:"modal-close",children:"\u0425"})]}),Object(h.jsx)("ul",{className:"modal-main",children:n})]})})})},O=function(e){Object(m.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(d.a)(this,c),(n=t.call(this,e)).showIngredients=function(){document.body.classList.add("body-hidden"),n.setState({active:!0})},n.closeModal=function(){document.body.classList.remove("body-hidden"),n.setState({active:!1})},n.state={active:!1},n}return Object(j.a)(c,[{key:"render",value:function(){var e=this.props.recipe,t=e.label,c=e.url,n=e.image,a=e.ingredients,s=this.state.active;return Object(h.jsx)("li",{className:"recipe-item",children:Object(h.jsxs)("div",{className:"recipe-body",children:[Object(h.jsx)("div",{className:"recipe-top",children:Object(h.jsx)("img",{className:"recipe-image",src:n,alt:t})}),Object(h.jsx)("div",{className:"recipe-main",children:Object(h.jsx)("h2",{className:"recipe-title",children:t})}),Object(h.jsxs)("div",{className:"recipe-bottom",children:[Object(h.jsx)("a",{className:"recipe-details",href:c,target:"_blank",rel:"noopener noreferrer",children:"more details"}),Object(h.jsx)("button",{onClick:this.showIngredients,className:"recipe-ingredients",children:"ingredients"})]}),s&&Object(h.jsx)(p,{closeModal:this.closeModal,data:a})]})})}}]),c}(n.Component);c(20);var x=function(){return Object(h.jsx)("div",{className:"container spinner-container",children:Object(h.jsx)("div",{className:"spinner-body",children:Object(h.jsx)("div",{className:"loadingio-spinner-spinner-wwdazreyaf8",children:Object(h.jsxs)("div",{className:"ldio-69eub6ofen3",children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})})})})};c(21);var v=function(){return Object(h.jsx)("div",{className:"error",children:Object(h.jsx)("div",{className:"container error-container",children:Object(h.jsxs)("div",{className:"error-body",children:[Object(h.jsx)("img",{className:"error-image",src:"/images/error.png",alt:""}),Object(h.jsx)("div",{className:"error-description",children:"Something went wrong"})]})})})},f=function(e){Object(m.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(d.a)(this,c),(n=t.call(this,e)).state={error:!1},n}return Object(j.a)(c,[{key:"componentDidCatch",value:function(){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(h.jsx)(v,{}):this.props.children}}]),c}(n.Component),g=(c(22),function(e){Object(m.a)(c,e);var t=Object(u.a)(c);function c(){return Object(d.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){var e=this.props,t=e.onSubmit,c=e.onChange,n=e.name,a=e.rules?Object(h.jsx)("span",{className:"header-rules",children:"You have to write something down"}):null;return Object(h.jsx)("header",{className:"header",children:Object(h.jsxs)("div",{className:"container header-container",children:[Object(h.jsxs)("div",{className:"header-top",children:[Object(h.jsx)("h1",{className:"header-title",children:"find your recipe"}),a]}),Object(h.jsxs)("form",{className:"header-form form",onSubmit:function(e){return t(e)},children:[Object(h.jsx)("input",{className:"form-input",type:"text",placeholder:"search something...",autoComplete:"off",onChange:function(e){return c(e)},value:n}),Object(h.jsx)("button",{type:"submit",className:"form-button",children:"Search"})]})]})})}}]),c}(n.Component)),N=g;c(23);var y=function(){return Object(h.jsx)("div",{className:"warning",children:Object(h.jsx)("div",{className:"container warning-container",children:Object(h.jsx)("div",{className:"warning-body",children:Object(h.jsx)("h1",{className:"warning-title",children:"Nothing was found"})})})})},w=function(e){Object(m.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(d.a)(this,c),(n=t.call(this,e))._recipeUrl="https://api.edamam.com/api/recipes/v2?",n._appKey="33b0ce55575920e7cd74a6cff49962b8",n._appId="2b17c6d6",n.addChanges=function(){n.setState({loading:!1,empty:!0})},n.addRules=function(){n.setState({rules:!0})},n.onSubmit=function(e){e.preventDefault(),n.state.name?(n.getResource(),n.setState({loading:!0})):n.addRules()},n.onChange=function(e){var t=e.target.value.trim().toLowerCase();n.setState({name:t})},n.state={recipes:[],name:"",loading:!1,empty:!1,rules:!1},n}return Object(j.a)(c,[{key:"getResource",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._recipeUrl,"type=public&app_key=").concat(this._appKey,"&app_id=").concat(this._appId,"&q=").concat(this.state.name));case 2:return t=e.sent,e.next=5,t.json();case 5:if(c=e.sent,t.ok){e.next=8;break}throw new Error("Could not fetch ".concat(this._recipeUrl));case 8:if(0!==c.hits.length){e.next=11;break}return this.addChanges(),e.abrupt("return");case 11:this.setState({recipes:c.hits,loading:!1,empty:!1,rules:!1,name:""});case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){console.log("render");var e=this.state,t=e.name,c=e.recipes,n=e.loading,a=e.empty,s=e.rules,r=n?Object(h.jsx)(x,{}):null,i=n?null:Object(h.jsxs)(f,{children:[" ",Object(h.jsx)(C,{data:c,empty:a})," "]});return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{children:Object(h.jsx)(N,{onSubmit:this.onSubmit,onChange:this.onChange,name:t,rules:s})}),r,i]})}}]),c}(n.Component),C=function(e){var t=e.data;return e.empty?Object(h.jsx)(y,{}):Object(h.jsx)("section",{className:"recipes",children:Object(h.jsx)("div",{className:"container recipes-container",children:Object(h.jsx)("ul",{className:"recipe-list",children:t!==[]&&t.map((function(e){return Object(h.jsx)(O,{recipe:e.recipe},Object(b.a)())}))})})})},k=w;r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.73d4ebae.chunk.js.map