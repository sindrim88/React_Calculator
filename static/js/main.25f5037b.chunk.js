(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),a=n(7),i=n.n(a),s=(n(12),n(13),n(2)),u=n(3),l=n(5),o=n(4);n(14);var p=n(0),d=function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(t){return Object(s.a)(this,n),e.call(this,t)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(p.jsx)("button",{className:"btn",onClick:function(){return t.props.handleClick(t.props.children)},children:this.props.children})}}]),n}(r.a.Component),h=function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(t){return Object(s.a)(this,n),e.call(this,t)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"input",children:this.props.children})}}]),n}(c.Component),j=function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).updateInput=function(t){c.setState((function(e,n){return{input:e.input+t}}),(function(){return console.log("input: ",c.state.input)}))},c.updateOperator=function(t){c.setState((function(e,n){return{operator:t}}),(function(){return console.log("operator: ",c.state.operator)})),c.updatePrewNumber(),c.setState({input:""}),console.log("update input: ",c.state.input)},c.updatePrewNumber=function(){c.setState((function(t,e){return{prewNum:t.input}}),(function(){return console.log("prewNum: ",c.state.prewNum)}))},c.clear=function(){c.setState({input:""}),c.setState({currNum:""}),c.setState({prewNum:""}),c.setState({operator:""})},c.updateDot=function(t){var e=1*c.state.input;c.setState({input:e})},c.calculate=function(){var t,e,n;c.setState((function(t,e){return{currNum:t.input}}),(function(){return console.log("currNum: ",c.state.currNum)})),"x"===c.state.operator?(e=c.state.prewNum,n=c.state.input,t=e*n,c.setState({input:t})):"+"===c.state.operator?(t=function(t,e){var n=1*t,c=1*e;return console.log(typeof n),console.log(typeof c),n+c}(c.state.prewNum,c.state.input),c.setState({input:t})):"-"===c.state.operator?(t=function(t,e){return t-e}(c.state.prewNum,c.state.input),c.setState({input:t})):"/"===c.state.operator&&(t=function(t,e){return t/e}(c.state.prewNum,c.state.input),c.setState({input:t}))},c.state={input:"",prewNum:"",currNum:"",operator:""},c}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"app",children:Object(p.jsxs)("div",{className:"btn-wrapper",children:[Object(p.jsx)("div",{className:"input-row",children:Object(p.jsx)(h,{children:this.state.input})}),Object(p.jsxs)("div",{className:"btn-row",children:[Object(p.jsx)(d,{handleClick:this.updateInput,children:"7"}),Object(p.jsx)(d,{handleClick:this.updateInput,children:"8"}),Object(p.jsx)(d,{handleClick:this.updateInput,children:"9"}),Object(p.jsx)(d,{handleClick:this.updateOperator,children:"x"})]}),Object(p.jsxs)("div",{className:"btn-row",children:[Object(p.jsx)(d,{handleClick:this.updateInput,children:"4"}),Object(p.jsx)(d,{handleClick:this.updateInput,children:"5"}),Object(p.jsx)(d,{handleClick:this.updateInput,children:"6"}),Object(p.jsx)(d,{handleClick:this.updateOperator,children:"-"})]}),Object(p.jsxs)("div",{className:"btn-row",children:[Object(p.jsx)(d,{handleClick:this.updateInput,children:"1"}),Object(p.jsx)(d,{handleClick:this.updateInput,children:"2"}),Object(p.jsx)(d,{handleClick:this.updateInput,children:"3"}),Object(p.jsx)(d,{handleClick:this.updateOperator,children:"+"})]}),Object(p.jsxs)("div",{className:"btn-row",children:[Object(p.jsx)(d,{handleClick:this.updateInput,children:"0"}),Object(p.jsx)(d,{handleClick:this.updateInput,children:"."}),Object(p.jsx)(d,{handleClick:this.calculate,children:"="}),Object(p.jsx)(d,{handleClick:this.updateOperator,children:"/"})]}),Object(p.jsx)("div",{className:"btn-row-clear",children:Object(p.jsx)(d,{handleClick:this.clear,children:"Clear"})})]})})}}]),n}(c.Component),b=function(){return Object(p.jsxs)("div",{className:"homepage",children:[Object(p.jsx)("h3",{children:"This calculator was created with React."}),Object(p.jsx)(j,{})]})};var O=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(b,{})})};i.a.render(Object(p.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.25f5037b.chunk.js.map