(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{23:function(e,t,n){e.exports={list:"ContactList_list__vZdcX",item:"ContactList_item__3fYQm"}},25:function(e,t,n){e.exports={title:"Filter_title__1HJ5U",input:"Filter_input__3svyW"}},26:function(e,t,n){e.exports={title:"App_title__GyZqW"}},29:function(e,t,n){e.exports={IconButton:"IconButton_IconButton__2bJFN"}},30:function(e,t,n){e.exports={container:"Container_container__iQp5A"}},40:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(10),i=n.n(a),o=(n(40),n(28)),l=n(6),s=function(e){return e.contacts.items},u=function(e){return e.contacts.filter},b=function(e){var t=s(e),n=u(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},j=n(7),d=n(15),m=n.n(d),O=Object(j.b)("phonebook/add",(function(e,t){return{payload:{id:m.a.generate(),name:e,number:t}}})),f=Object(j.b)("phonebook/delete"),p=Object(j.b)("phonebook/changeFilter"),h=n(20),x=n(9),v=n.n(x),_=n(1);function g(){var e=Object(l.c)(s),t=Object(l.b)(),n=Object(r.useState)(""),c=Object(o.a)(n,2),a=c[0],i=c[1],u=Object(r.useState)(""),b=Object(o.a)(u,2),j=b[0],d=b[1],f=m.a.generate(),p=m.a.generate(),x=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":i(r);break;case"number":d(r);break;default:return}};return Object(_.jsxs)("form",{className:v.a.form,onSubmit:function(n){n.preventDefault(),e.some((function(e){return e.name.toLowerCase()===a.toLowerCase()}))?h.b.error("".concat(a," is already in contacts")):t(O(a,j)),i(""),d("")},children:[Object(_.jsxs)("label",{htmlFor:f,children:[Object(_.jsx)("p",{className:v.a.title,children:"Name"}),Object(_.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:a,onChange:x,id:f,className:v.a.input})]}),Object(_.jsxs)("label",{htmlFor:p,children:[Object(_.jsx)("p",{className:v.a.title,children:"Number"}),Object(_.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:j,onChange:x,id:p,className:v.a.input})]}),Object(_.jsx)("button",{type:"submit",className:v.a.button,children:"Add contact"})]})}var y=n(23),C=n.n(y),w=n(24),k=n(35),N=n(29),F=n.n(N),A=["children","onClick"],z=function(e){var t=e.children,n=e.onClick,r=Object(k.a)(e,A);return Object(_.jsx)("button",Object(w.a)(Object(w.a)({type:"button",className:F.a.IconButton,onClick:n},r),{},{children:t}))};z.defaultProps={onClick:function(){return null},children:null};var I,B,E=z,S=["title","titleId"];function L(){return L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function P(e,t){var n=e.title,c=e.titleId,a=M(e,S);return r.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,I||(I=r.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),B||(B=r.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})))}var H,J=r.forwardRef(P),Z=(n.p,function(){var e=Object(l.c)(b),t=Object(l.b)();return Object(_.jsx)("ul",{className:C.a.list,children:e.map((function(e){var n=e.name,r=e.number,c=e.id;return Object(_.jsxs)("li",{className:C.a.item,children:[n,": ",r,Object(_.jsx)(E,{onClick:function(){return function(e){return t(f(e))}(c)},children:Object(_.jsx)(J,{width:"15",height:"15",fill:"#fff"})})]},c)}))})}),q=n(25),Q=n.n(q),D=function(){var e=Object(l.c)(u),t=Object(l.b)();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("p",{className:Q.a.title,children:"Find contacts by name"}),Object(_.jsx)("label",{children:Object(_.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){return t(p(e.target.value))},className:Q.a.input})})]})},R=n(30),V=n.n(R),W=function(e){var t=e.children;return Object(_.jsx)("div",{className:V.a.container,children:t})},G=(n(53),n(26)),K=n.n(G),T=function(){return Object(_.jsxs)(W,{children:[Object(_.jsx)("h1",{className:K.a.title,children:"Phonebook"}),Object(_.jsx)(g,{}),Object(_.jsx)("h2",{className:K.a.title,children:"Contacts"}),Object(_.jsx)(D,{}),Object(_.jsx)(Z,{}),Object(_.jsx)(h.a,{autoClose:2e3})]})},U=n(34),X=n(31),Y=n(19),$=n(8),ee=n(32),te=n.n(ee),ne=n(12),re=n(3),ce=Object(j.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(H={},Object(ne.a)(H,O,(function(e,t){var n=t.payload;return[].concat(Object(Y.a)(e),[n])})),Object(ne.a)(H,f,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),H)),ae=Object(j.c)("",Object(ne.a)({},p,(function(e,t){return t.payload}))),ie=Object(re.b)({items:ce,filter:ae}),oe=Object(Y.a)(Object(j.d)({serializableCheck:{ignoredActions:[$.a,$.f,$.b,$.c,$.d,$.e]}})),le={key:"contacts",storage:te.a,blacklist:["filter"]},se=Object(j.a)({reducer:{contacts:Object($.g)(le,ie)},middleware:oe,devTools:!1}),ue=Object($.h)(se);i.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(l.a,{store:se,children:Object(_.jsx)(X.a,{loading:null,persistor:ue,children:Object(_.jsx)(U.a,{children:Object(_.jsx)(T,{})})})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={button:"ContactForm_button__3dM32",form:"ContactForm_form__3prq2",title:"ContactForm_title__1r0gD",input:"ContactForm_input__2Qx8P"}}},[[58,1,2]]]);
//# sourceMappingURL=main.fbbba597.chunk.js.map