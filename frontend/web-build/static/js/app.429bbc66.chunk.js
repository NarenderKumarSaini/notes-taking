(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{244:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(44),a=n(402),c=n(26),u=n.n(c),s=n(18),l=n.n(s),d=n(7),f=n.n(d),j=n(400),p=(n(246),j.default.create({baseURL:"https://note-nestjs.onrender.com"})),b=n(24),O=n.n(b),g=n(20);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(e,t,n){var i=o.a.createContext();return{Context:i,Provider:function(o){var a=o.children,c=Object(r.useReducer)(e,n),u=O()(c,2),s=u[0],l=u[1],d={};for(var f in t)d[f]=t[f](l);return Object(g.jsx)(i.Provider,{value:v({state:s},d),children:a})}}}((function(e,t){switch(t.type){case"add_error":return x(x({},e),{},{errorMessage:t.payload});case"clear_error_message":return x(x({},e),{},{errorMessage:""});case"get_notes":return t.payload;case"edit_note":return e.map((function(e){return e.id===t.payload.id?t.payload:e}));case"delete_note":return e.filter((function(e){return e.id!==t.payload}));case"add_note":return[].concat(l()(e),[{title:t.payload.title,content:t.payload.content}]);default:return e}}),{addNote:function(e){return function(){var t=u()((function*(t,n,r){try{yield p.post("/notes",{title:t,content:n}),r&&r()}catch(a){var o,i;e({type:"add_error",payload:null==a||null==(o=a.response)||null==(i=o.data)?void 0:i.message})}}));return function(e,n,r){return t.apply(this,arguments)}}()},deleteNote:function(e){return function(){var t=u()((function*(t){yield p.delete("/notes/"+t),e({type:"delete_note",payload:t})}));return function(e){return t.apply(this,arguments)}}()},editNote:function(e){return function(){var e=u()((function*(e,t,n,r){yield p.patch("/notes/"+e,{title:t,content:n}),r&&r()}));return function(t,n,r,o){return e.apply(this,arguments)}}()},getNotes:function(e){return u()((function*(){try{var t=yield p.get("/notes");e({type:"get_notes",payload:t.data})}catch(n){console.log(n)}}))},clearErrorMessage:function(e){return function(){e({type:"clear_error_message"})}}},{errorMessage:""}),P=m.Context,w=m.Provider,S=n(13),C=n(11),E=n(222),N=n(40),_=n(36),M=function(e){var t=e.errorMessage,n=e.onSubmit,o=e.initialValues,i=Object(r.useState)(o.title),a=O()(i,2),c=a[0],u=a[1],s=Object(r.useState)(o.content),l=O()(s,2),d=l[0],f=l[1];return Object(g.jsxs)(C.default,{children:[Object(g.jsx)(N.default,{style:z.label,children:"Enter Title:"}),Object(g.jsx)(_.default,{style:z.input,value:c,onChangeText:function(e){return u(e)}}),Object(g.jsx)(N.default,{style:z.label,children:"Enter Content:"}),Object(g.jsx)(_.default,{style:z.input,value:d,onChangeText:function(e){return f(e)}}),t&&Object(g.jsx)(C.default,{style:z.errorContainer,children:t.map((function(e){return Object(g.jsx)(N.default,{style:z.errorMessage,children:e})}))}),Object(g.jsx)(E.default,{title:"Save Note",onPress:function(){return n(c,d)}})]})};M.defaultProps={initialValues:{title:"",content:""}};var z=S.default.create({input:{fontSize:18,borderWidth:1,borderColor:"black",marginBottom:15,padding:5,margin:5},label:{fontSize:20,marginBottom:5,marginLeft:5},errorContainer:{marginVertical:10},errorMessage:{fontSize:16,color:"red",marginLeft:15,marginTop:15,textAlign:"center"}}),D=M,I=(S.default.create({}),function(e){var t=e.navigation,n=Object(r.useContext)(P),o=n.state,a=n.addNote,c=n.clearErrorMessage;return Object(g.jsxs)(C.default,{children:[Object(g.jsx)(i.NavigationEvents,{onWillFocus:c}),Object(g.jsx)(D,{errorMessage:o.errorMessage,onSubmit:function(e,n){a(e,n,(function(){return t.navigate("Index")}))},initialValues:{title:"",content:""}})]})}),R=(S.default.create({}),function(e){var t=e.navigation,n=t.getParam("id"),o=Object(r.useContext)(P),i=o.state,a=o.editNote,c=i.find((function(e){return e.id===n}));return Object(g.jsx)(D,{initialValues:{title:c.title,content:c.content},onSubmit:function(e,r){a(n,e,r,(function(){return t.pop()}))}})}),k=n(83),T=n(68),V=n(397),L=function(e){var t=e.navigation,n=Object(r.useContext)(P),o=n.state,i=n.deleteNote,a=n.getNotes;return Object(r.useEffect)((function(){a();var e=t.addListener("didFocus",(function(){a()}));return function(){e.remove()}}),[]),Object(g.jsx)(C.default,{children:Object(g.jsx)(k.default,{data:o,keyExtractor:function(e){return e.title},renderItem:function(e){var n=e.item;return Object(g.jsx)(T.default,{onPress:function(){return t.navigate("Show",{id:n.id})},children:Object(g.jsxs)(C.default,{style:A.row,children:[Object(g.jsxs)(N.default,{style:A.title,children:[n.title," - ",n.content]}),Object(g.jsx)(T.default,{style:A.actionIcon,onPress:function(){return i(n.id)},children:Object(g.jsx)(V.default,{style:A.icon,name:"trash"})})]})})}})})};L.navigationOptions=function(e){var t=e.navigation;return{headerRight:function(){return Object(g.jsx)(T.default,{style:A.actionIcon,onPress:function(){return t.navigate("Create")},children:Object(g.jsx)(V.default,{name:"plus",size:30})})}}};var A=S.default.create({row:{flexDirection:"row",justifyContent:"space-between",paddingVertical:20,paddingHorizontal:10,borderTopWidth:1,borderColor:"gray"},title:{fontSize:18},icon:{fontSize:24},actionIcon:{marginRight:30}}),W=L,B=n(398),F=function(e){var t=e.navigation,n=Object(r.useContext)(P).state.find((function(e){return e.id===t.getParam("id")}));return Object(g.jsxs)(C.default,{style:J.container,children:[Object(g.jsx)(N.default,{style:J.title,children:n.title}),Object(g.jsx)(N.default,{style:J.content,children:n.content})]})};F.navigationOptions=function(e){var t=e.navigation;return{headerRight:function(){return Object(g.jsx)(T.default,{onPress:function(){return t.navigate("Edit",{id:t.getParam("id")})},style:J.actionIcon,children:Object(g.jsx)(B.default,{name:"pencil",size:35})})}}};var J=S.default.create({container:{textAlign:"center"},title:{fontSize:30},content:{marginTop:20,fontSize:20},actionIcon:{marginRight:30}}),H=F,U=Object(a.default)({Index:W,Show:H,Create:I,Edit:R},{initialRouteName:"Index",defaultNavigationOptions:{title:"Notes Management"}}),q=Object(i.createAppContainer)(U);t.default=function(){return Object(g.jsx)(w,{children:Object(g.jsx)(q,{})})}},251:function(e,t,n){e.exports=n(386)}},[[251,1,2]]]);
//# sourceMappingURL=app.429bbc66.chunk.js.map