(this.webpackJsonpregistration=this.webpackJsonpregistration||[]).push([[0],{14:function(e,t,n){e.exports=n(32)},19:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){e.exports=n.p+"static/media/hiss.396f0bda.svg"},32:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(5),r=n.n(i),l=(n(19),n(6)),s=n(7),c=n(12),d=n(8),h=n(2),u=n(13),m=(n(20),n(11)),g=(n(28),n(29),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).emailHandler=function(e){console.log(e.target.value),n.setState({email:e.target.value})},n.passwordHandler=function(e){console.log(e.target.value),n.setState({password:e.target.value})},n.loginHandler=function(e){console.log("Submit")},n.state={delay:100,result:"No result",email:"",password:""},n.handleScan=n.handleScan.bind(Object(h.a)(n)),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleScan",value:function(e){this.setState({result:e})}},{key:"handleError",value:function(e){console.error(e)}},{key:"render",value:function(){return o.a.createElement("div",{style:p.pageContainer},o.a.createElement("form",{style:p.formContainer,onSubmit:this.formHandler},o.a.createElement("div",{style:p.titleContainer},o.a.createElement("img",{style:p.logoContainer,src:n(30)}),o.a.createElement("p",{style:{fontSize:"18px"}},"by TAMUhack")),o.a.createElement("input",{type:"text",placeholder:"Email",value:this.state.email,onChange:this.emailHandler,style:p.inputContainer}),o.a.createElement("input",{type:"password",placeholder:"Password",value:this.state.password,onChange:this.passwordHandler,style:p.inputContainer}),o.a.createElement(m.a,{onClick:this.loginHandler,style:p.submitContainer},"Login")))}}]),t}(a.Component)),p={logoContainer:{display:"flex",marginLeft:"-10px",height:"7vh"},pageContainer:{display:"flex",height:"100vh",width:"100vw",justifyContent:"center"},titleContainer:{marginTop:"23vh",marginBottom:"8vh"},formContainer:{display:"flex",flexDirection:"column",justifyContent:"center",width:"80vw",paddingLeft:"10vw",paddingRight:"10vw",height:"100vh",border:"2px solid red"},inputContainer:{height:"7vh",paddingLeft:"4%",marginBottom:"7vh",fontSize:20},submitContainer:{height:"10vh",border:"2px solid red",backgroundColor:"#FF7C93",color:"white",fontSize:20}},f=g;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.61dafeb5.chunk.js.map