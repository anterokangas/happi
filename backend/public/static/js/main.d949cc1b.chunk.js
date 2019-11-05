(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(e,t,n){e.exports=n(323)},195:function(e,t,n){},196:function(e,t,n){},323:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(38),c=n.n(o),i=(n(195),n(19)),l=n(20),s=n(22),u=n(21),p=n(23),m=(n(196),n(330)),h=n(333),d=n(29),E=n(44),g=function(e){return function(t){var n={method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return t(S()),fetch("/login",n).then(function(e){e.ok?e.json().then(function(e){t(C(e.token)),t(L(e.token))}).catch(function(e){t(b("Error parsing JSON"))}):t(b("Server responded with status:"+e.statusText))}).catch(function(e){t(b(e))})}},f=function(e){return function(t){var n={method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};return t(S()),fetch("/register",n).then(function(e){e.ok?(alert("Register success!"),t(v())):t(y("Server responded with status:"+e.statusText))}).catch(function(e){t(y(e))})}},O=function(e){return function(t){var n={method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",token:e}};return t(S()),fetch("/logout",n).then(function(e){t(I()),t(x())}).catch(function(e){t(_(e)),t(x())})}},S=function(){return{type:"FETCH_LOADING"}},C=function(e){return{type:"LOGIN_SUCCESS",token:e}},b=function(e){return{type:"LOGIN_FAILED",error:e}},v=function(){return{type:"REGISTER_SUCCESS"}},y=function(e){return{type:"REGISTER_FAILED",error:e}},I=function(){return{type:"LOGOUT_SUCCESS"}},_=function(e){return{type:"LOGOUT_FAILED",error:e}},L=function(e){return function(t){var n={method:"GET",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",token:e}};return t(S()),fetch("/api/shopping",n).then(function(e){t({type:"LOADING_DONE"}),e.ok?e.json().then(function(e){t(D(e))}).catch(function(e){t(N("Error in parsing response json"))}):t(N("Server responded with status:"+e.statusText))}).catch(function(e){t({type:"LOADING_DONE"}),t(N(e))})}},j=function(e,t,n){return function(r){var a={method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",token:t},body:JSON.stringify(e)};return r(S()),fetch("/api/shopping",a).then(function(e){e.ok?(r(A()),r(L(t)),n.push("/list")):(r(w("Server responded with status:"+e.statusText)),r({type:"LOADING_DONE"}))}).catch(function(e){r(w(e)),r({type:"LOADING_DONE"})})}},T=function(e,t){return function(n){var r={method:"DELETE",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",token:t}};return n(S()),fetch("/api/shopping/"+e,r).then(function(e){e.ok?(n(F()),n(L(t))):(n(G("Server responded with status:"+e.statusText)),n({type:"LOADING_DONE"}))}).catch(function(e){n(G(e)),n({type:"LOADING_DONE"})})}},k=function(e,t){return function(n){var r={method:"PUT",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json",token:t},body:JSON.stringify(e)};return n(S()),fetch("/api/shopping/"+e._id,r).then(function(e){e.ok?(n(R()),n(L(t))):(n({type:"LOADING_DONE"}),n(U("Server responded with status:"+e.statusText)))}).catch(function(e){n({type:"LOADING_DONE"}),n(U(e))})}},D=function(e){return{type:"GET_SHOPPINGLIST_SUCCESREMOVE_FROM_LIST_FAILEDS",list:e}},N=function(e){return{type:"GET_SHOPPINGLIST_FAILED",error:e}},A=function(){return{type:"ADD_TO_LIST_SUCCESS"}},w=function(e){return{type:"ADD_TO_LIST_FAILED",error:e}},F=function(){return{type:"REMOVE_FROM_LIST_SUCCESS"}},G=function(e){return{type:"REMOVE_FROM_LIST_FAILED",error:e}},R=function(){return{type:"EDIT_ITEM_SUCCESS"}},U=function(e){return{type:"EDIT_ITEM_FAILED",error:e}},x=function(){return{type:"LOGOUT_DONE"}},M=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){var t={};t[e.target.name]=e.target.value,n.setState(t)},n.onSubmit=function(e){e.preventDefault();var t={type:n.state.type,count:n.state.count,price:n.state.price,id:0};n.props.dispatch(j(t,n.props.token,n.props.history)),n.setState({type:"",count:0,price:0})},n.state={type:"",price:0,count:0},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(m.a,{onSubmit:this.onSubmit},a.a.createElement(m.a.Field,null,a.a.createElement("label",{htmlFor:"type"},"Type:"),a.a.createElement("input",{type:"text",name:"type",onChange:this.onChange,value:this.state.type})),a.a.createElement(m.a.Field,null,a.a.createElement("label",{htmlFor:"price"},"Price:"),a.a.createElement("input",{type:"number",name:"price",onChange:this.onChange,value:this.state.price})),a.a.createElement(m.a.Field,null,a.a.createElement("label",{htmlFor:"count"},"Count:"),a.a.createElement("input",{type:"number",name:"count",onChange:this.onChange,value:this.state.count})),a.a.createElement(h.a,{type:"submit"},"Add"))}}]),t}(a.a.Component),P=Object(E.g)(Object(d.b)(function(e){return{token:e.login.token}})(M)),H=n(332),J=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).remove=function(e){n.props.removeFromList(e.target.name)},n.edit=function(e){n.props.edit(e.target.id)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(H.a.Row,null,a.a.createElement(H.a.Cell,null,this.props.item.type),a.a.createElement(H.a.Cell,null,this.props.item.price),a.a.createElement(H.a.Cell,null,this.props.item.count),a.a.createElement(H.a.Cell,null,a.a.createElement(h.a,{name:this.props.item._id,onClick:this.remove},"Remove")),a.a.createElement(H.a.Cell,null,a.a.createElement(h.a,{id:this.props.item._id,onClick:this.edit},"Edit")))}}]),t}(a.a.Component),V=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).remove=function(e){n.props.handleRemove(e.target.name)},n.cancel=function(e){n.props.cancel()},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(H.a.Row,null,a.a.createElement(H.a.Cell,null,this.props.item.type),a.a.createElement(H.a.Cell,null,this.props.item.price),a.a.createElement(H.a.Cell,null,this.props.item.count),a.a.createElement(H.a.Cell,null,a.a.createElement(h.a,{color:"red",onClick:this.cancel},"Cancel")),a.a.createElement(H.a.Cell,null,a.a.createElement(h.a,{color:"green",name:this.props.item._id,onClick:this.remove},"Confirm")))}}]),t}(a.a.Component),B=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){var t={};t[e.target.name]=e.target.value,n.setState(t)},n.editItem=function(){var e={_id:n.props.item._id,type:n.state.type,count:n.state.count,price:n.state.price};n.props.editItem(e)},n.cancel=function(){n.props.cancel()},n.state={type:e.item.type,count:e.item.count,price:e.item.price},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(H.a.Row,null,a.a.createElement(H.a.Cell,null,a.a.createElement("input",{type:"text",name:"type",onChange:this.onChange,value:this.state.type})),a.a.createElement(H.a.Cell,null,a.a.createElement("input",{type:"number",name:"price",onChange:this.onChange,value:this.state.price})),a.a.createElement(H.a.Cell,null,a.a.createElement("input",{type:"number",name:"count",onChange:this.onChange,value:this.state.count})),a.a.createElement(H.a.Cell,null,a.a.createElement(h.a,{color:"green",onClick:this.editItem},"Save")),a.a.createElement(H.a.Cell,null,a.a.createElement(h.a,{color:"red",onClick:this.cancel},"Cancel")))}}]),t}(a.a.Component),q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).remove=function(e){for(var t=0;t<n.props.list.length;t++)if(n.props.list[t]._id===e)return void n.setState({removeIndex:t,editIndex:-1})},n.edit=function(e){for(var t=0;t<n.props.list.length;t++)if(n.props.list[t]._id===e)return void n.setState({removeIndex:-1,editIndex:t})},n.handleRemove=function(e){n.props.dispatch(T(e,n.props.token)),n.cancel()},n.handleEdit=function(e){n.props.dispatch(k(e,n.props.token)),n.cancel()},n.cancel=function(){n.setState({removeIndex:-1,editIndex:-1})},n.state={removeIndex:-1,editIndex:-1},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.list.map(function(t,n){return e.state.removeIndex===n?a.a.createElement(V,{item:t,key:t._id,handleRemove:e.handleRemove,cancel:e.cancel}):e.state.editIndex===n?a.a.createElement(B,{key:t._id,item:t,editItem:e.handleEdit,cancel:e.cancel}):a.a.createElement(J,{key:t._id,removeFromList:e.remove,edit:e.edit,item:t})});return a.a.createElement(H.a,{celled:!0},a.a.createElement(H.a.Header,null,a.a.createElement(H.a.Row,null,a.a.createElement(H.a.HeaderCell,null,"Type"),a.a.createElement(H.a.HeaderCell,null,"Price"),a.a.createElement(H.a.HeaderCell,null,"Count"),a.a.createElement(H.a.HeaderCell,null,"Remove"),a.a.createElement(H.a.HeaderCell,null,"Edit"))),a.a.createElement(H.a.Body,null,t))}}]),t}(a.a.Component),W=Object(d.b)(function(e){return{list:e.shopping.list,token:e.login.token}})(q),$=n(42),z=n(331),K=n(335),Q=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).logout=function(){n.props.dispatch(O(n.props.token))},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="Shopping List App";this.props.loading&&(e="Loading..."),this.props.error.length>0&&(e=this.props.error);var t=a.a.createElement(z.a,null);return this.props.isLogged&&(t=a.a.createElement(z.a,null,a.a.createElement(z.a.Item,null,a.a.createElement($.b,{to:"/list"},"Shopping List")),a.a.createElement(z.a.Item,null,a.a.createElement($.b,{to:"/form"},"Add to List")),a.a.createElement(z.a.Item,null,a.a.createElement($.b,{to:"/",onClick:this.logout},"Logout")))),console.log("Navbar generated"),a.a.createElement("div",{style:{height:100,backgroundColor:"LightBlue"}},a.a.createElement(K.a,null,e),t)}}]),t}(a.a.Component),X=Object(d.b)(function(e){var t="";return e.shopping.error.length>0&&(t=e.shopping.error),e.login.error.length>0&&(t=e.login.error),{isLogged:e.login.isLogged,token:e.login.token,loading:e.login.loading,error:t}})(Q),Y=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onChange=function(e){var t={};t[e.target.name]=e.target.value,n.setState(t)},n.click=function(e){e.preventDefault();var t={username:n.state.username,password:n.state.password};t.username.length<4||t.password.length<8?alert("Username must be atleast four characters and password eight characters long"):"register"===e.target.name?n.props.dispatch(f(t)):n.props.dispatch(g(t))},n.state={username:"",password:""},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement(m.a,null,a.a.createElement(m.a.Field,null,a.a.createElement("label",{htmlFor:"username"},"Username:"),a.a.createElement("input",{type:"text",name:"username",required:!0,onChange:this.onChange,value:this.state.username})),a.a.createElement(m.a.Field,null,a.a.createElement("label",{htmlFor:"password"},"Password:"),a.a.createElement("input",{type:"password",name:"password",required:!0,onChange:this.onChange,value:this.state.password})),a.a.createElement(h.a,{name:"login",onClick:this.click},"Login"),a.a.createElement(h.a,{name:"register",onClick:this.click},"Register"))}}]),t}(a.a.Component),Z=Object(d.b)()(Y),ee=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement(X,null),a.a.createElement("hr",null),a.a.createElement(E.d,null,a.a.createElement(E.b,{exact:!0,path:"/",render:function(){return e.props.isLogged?a.a.createElement(E.a,{to:"/list"}):a.a.createElement(Z,null)}}),a.a.createElement(E.b,{path:"/list",render:function(){return e.props.isLogged?a.a.createElement(W,null):a.a.createElement(E.a,{to:"/"})}}),a.a.createElement(E.b,{path:"/form",render:function(){return e.props.isLogged?a.a.createElement(P,null):a.a.createElement(E.a,{to:"/"})}}),a.a.createElement(E.b,{render:function(){return a.a.createElement(E.a,{to:"/"})}})))}}]),t}(a.a.Component),te=Object(E.g)(Object(d.b)(function(e){return{isLogged:e.login.isLogged}})(ee));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=n(61),re=n(26),ae=function(e){sessionStorage.setItem("loginstate",JSON.stringify(e))},oe=sessionStorage.getItem("loginstate")?JSON.parse(sessionStorage.getItem("loginstate")):{isLogged:!1,token:"",loading:!1,error:""},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,n={};switch(t.type){case"FETCH_LOADING":return n=Object(re.a)({},e,{loading:!0,error:""});case"LOADING_DONE":return n=Object(re.a)({},e,{loading:!1,error:""});case"LOGIN_SUCCESS":return n={loading:!1,error:"",token:t.token,isLogged:!0},ae(n),n;case"LOGIN_FAILED":return n=Object(re.a)({},e,{loading:!1,error:t.error}),ae(n),n;case"REGISTER_SUCCESS":return n=Object(re.a)({},e,{loading:!1});case"REGISTER_FAILED":return n=Object(re.a)({},e,{loading:!1,error:t.error}),ae(n),n;case"LOGOUT_SUCCESS":return ae(n={loading:!1,error:"",isLogged:!1,token:""}),n;case"LOGOUT_FAILED":return n={loading:!1,error:t.error,isLogged:!1,token:""},ae(n),n;default:return e}},ie=function(e){sessionStorage.setItem("shoppingstate",JSON.stringify(e))},le=sessionStorage.getItem("shoppingstate")?JSON.parse(sessionStorage.getItem("shoppingstate")):{list:[],error:""},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0,n={};switch(t.type){case"GET_SHOPPINGLIST_SUCCESREMOVE_FROM_LIST_FAILEDS":return n={error:"",list:t.list},ie(n),n;case"GET_SHOPPINGLIST_FAILED":return n=Object(re.a)({},e,{error:t.error}),ie(n),n;case"ADD_TO_LIST_SUCCESS":return n=Object(re.a)({},e,{error:""}),ie(n),n;case"ADD_TO_LIST_FAILED":return n=Object(re.a)({},e,{error:t.error}),ie(n),n;case"REMOVE_FROM_LIST_SUCCESS":return n=Object(re.a)({},e,{error:""}),ie(n),n;case"REMOVE_FROM_LIST_FAILED":return n=Object(re.a)({},e,{error:t.error}),ie(n),n;case"EDIT_ITEM_SUCCESS":return n=Object(re.a)({},e,{error:""}),ie(n),n;case"EDIT_ITEM_FAILED":return n=Object(re.a)({},e,{error:t.error}),ie(n),n;case"LOGOUT_DONE":return ie(n={list:[],error:""}),n;default:return e}},ue=n(178),pe=Object(ne.c)({login:ce,shopping:se}),me=Object(ne.d)(pe,Object(ne.a)(ue.a));c.a.render(a.a.createElement(d.a,{store:me},a.a.createElement($.a,null,a.a.createElement(te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[190,1,2]]]);
//# sourceMappingURL=main.d949cc1b.chunk.js.map