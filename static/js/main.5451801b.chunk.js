(this["webpackJsonpmath-magician"]=this["webpackJsonpmath-magician"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),l=n(9),c=n.n(l),r=n(2),u=n(3),i=n(6),s=n(5),j=n(4),b=n(0),x=function(t){Object(s.a)(n,t);var e=Object(j.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.total,n=t.next,a="0";return e&&(a=e),n&&(a=n),Object(b.jsx)("div",{className:"calc__display",children:a})}}]),n}(o.a.Component);x.defaultProps={total:"",next:""};var p=function(t){Object(s.a)(n,t);var e=Object(j.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.value,n=t.colored,a=t.span,o="calc__btn\n      ".concat(n?" btn--colored":""," \n      ").concat(1!==a?" btn--span-".concat(a):"");return Object(b.jsx)("button",{type:"button",className:o,"data-name":e,children:e})}}]),n}(o.a.Component);p.defaultProps={value:"X",colored:!1,span:1};var d=function(t){Object(s.a)(n,t);var e=Object(j.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.click,n=t.keyDown;return Object(b.jsxs)("div",{className:"calc__btns-container",onClick:e,onKeyDown:n,"aria-hidden":"true",children:[Object(b.jsx)(p,{name:"clear",value:"AC"}),Object(b.jsx)(p,{name:"sign",value:"+/-"}),Object(b.jsx)(p,{name:"percentage",value:"%"}),Object(b.jsx)(p,{name:"division",value:"\xf7",colored:!0}),Object(b.jsx)(p,{name:"number",value:"7"}),Object(b.jsx)(p,{name:"number",value:"8"}),Object(b.jsx)(p,{name:"number",value:"9"}),Object(b.jsx)(p,{name:"mult",value:"x",colored:!0}),Object(b.jsx)(p,{name:"number",value:"4"}),Object(b.jsx)(p,{name:"number",value:"5"}),Object(b.jsx)(p,{name:"number",value:"6"}),Object(b.jsx)(p,{name:"substr",value:"-",colored:!0}),Object(b.jsx)(p,{name:"number",value:"1"}),Object(b.jsx)(p,{name:"number",value:"2"}),Object(b.jsx)(p,{name:"number",value:"3"}),Object(b.jsx)(p,{name:"sum",value:"+",colored:!0}),Object(b.jsx)(p,{name:"number",value:"0",span:2}),Object(b.jsx)(p,{name:"floating",value:"."}),Object(b.jsx)(p,{name:"result",value:"=",colored:!0})]})}}]),n}(o.a.Component);d.defaultProps={click:function(){return console.log(-1)},keyDown:function(){return console.log(-1)}};var m=n(8),v=n.n(m);function O(t,e,n){var a=v()(t),o=v()(e);if("+"===n)return a.plus(o).toString();if("-"===n)return a.minus(o).toString();if("x"===n)return a.times(o).toString();if("\xf7"===n)return a.div(o).toString();if("%"===n)return a.mod(o).toString();throw Error("Unknown operation '".concat(n,"'"))}n(15);var h=function(t){Object(s.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).handleClick=function(t){a.updateState(t.target.dataset.name)},a.handleKeyDown=function(t){console.log(t.keyCode,Object(i.a)(a))},a.updateState=function(t){var e,n,o=(e=a.state,"AC"===(n=t)?{total:null,next:null,operation:null}:n.match(/[0-9]+/)?"0"===n&&"0"===e.next?{}:e.operation?e.next?{next:e.next+n}:{next:n}:e.next?{next:e.next+n,total:null}:{next:n,total:null}:"."===n?e.next?e.next.includes(".")?{}:{next:"".concat(e.next,".")}:e.operation?{next:"0."}:e.total?e.total.includes(".")?{}:{total:"".concat(e.next,".")}:{total:"0."}:"="===n?e.next&&e.operation?{total:O(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===n?e.next?{next:(-1*parseFloat(e.next)).toString()}:e.total?{total:(-1*parseFloat(e.total)).toString()}:{}:e.next||e.total?e.next?e.operation?{total:O(e.total,e.next,e.operation),next:null,operation:n}:{total:e.next,next:null,operation:n}:{operation:n}:{}),l=o.total,c=o.next,r=o.operation;(l||null===l)&&a.setState({total:l}),(c||null===c)&&a.setState({next:c}),(r||null===r)&&a.setState({operation:r})},a.state={total:null,next:null,operation:null},a.handleClick=a.handleClick.bind(Object(i.a)(a)),a.handleKeyDown=a.handleKeyDown.bind(Object(i.a)(a)),a}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.total,n=t.next;return Object(b.jsxs)("div",{className:"calc",children:[Object(b.jsx)(x,{total:e,next:n}),Object(b.jsx)(d,{click:this.handleClick,keyDown:this.handleKeyDown})]})}}]),n}(o.a.Component);var f=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(h,{})})};n(16),n(17);c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5451801b.chunk.js.map