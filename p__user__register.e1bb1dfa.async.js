(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{a3w7:function(e,r,a){"use strict";a.r(r);a("14J3");var t=a("BMrR"),s=(a("+L6B"),a("2/Rp")),n=(a("jCWc"),a("kPKH")),i=(a("Q9mQ"),a("diRs")),c=(a("MXD1"),a("CFYs")),l=a("k1fw"),d=(a("miYZ"),a("tsqr")),o=a("tJVT"),u=(a("5NDa"),a("5rEg")),g=(a("OaEy"),a("2fM7")),m=(a("y8nQ"),a("Vl3Y")),p=a("q1tI"),b=a.n(p),h=a("9kvl"),E=a("ArA+"),f=a("55Ip"),w=a("sYde"),v=a.n(w),j=m["a"].Item,O=g["a"].Option,y=u["a"].Group,N={ok:b.a.createElement("div",{className:v.a.success},b.a.createElement(h["a"],{id:"userandregister.strength.strong"})),pass:b.a.createElement("div",{className:v.a.warning},b.a.createElement(h["a"],{id:"userandregister.strength.medium"})),poor:b.a.createElement("div",{className:v.a.error},b.a.createElement(h["a"],{id:"userandregister.strength.short"}))},k={ok:"success",pass:"normal",poor:"exception"},q=function(e){var r,a=e.submitting,w=e.dispatch,q=e.userAndregister,F=Object(p["useState"])(0),z=Object(o["a"])(F,2),C=z[0],V=z[1],A=Object(p["useState"])(!1),I=Object(o["a"])(A,2),S=I[0],Y=I[1],x=Object(p["useState"])("86"),J=Object(o["a"])(x,2),P=J[0],R=J[1],M=Object(p["useState"])(!1),Q=Object(o["a"])(M,2),T=Q[0],B=Q[1],D=!1,L=m["a"].useForm(),W=Object(o["a"])(L,1),G=W[0];Object(p["useEffect"])((function(){if(q){var e=G.getFieldValue("mail");"ok"===q.status&&(d["a"].success("\u6ce8\u518c\u6210\u529f\uff01"),E["router"].push({pathname:"/user/register-result",state:{account:e}}))}}),[q]),Object(p["useEffect"])((function(){return function(){clearInterval(r)}}),[]);var H=function(){var e=59;V(e),r=window.setInterval((function(){e-=1,V(e),0===e&&clearInterval(r)}),1e3)},K=function(){var e=G.getFieldValue("password");return e&&e.length>9?"ok":e&&e.length>5?"pass":"poor"},U=function(e){w({type:"userAndregister/submit",payload:Object(l["a"])({},e,{prefix:P})})},X=function(e,r){var a=Promise;return r&&r!==G.getFieldValue("password")?a.reject(Object(h["c"])({id:"userandregister.password.twice"})):a.resolve()},Z=function(e,r){var a=Promise;return r?(S||Y(!!r),B(!T),r.length<6?a.reject(""):(r&&D&&G.validateFields(["confirm"]),a.resolve())):(Y(!!r),a.reject(Object(h["c"])({id:"userandregister.password.required"})))},$=function(e){R(e)},_=function(){var e=G.getFieldValue("password"),r=K();return e&&e.length?b.a.createElement("div",{className:v.a["progress-".concat(r)]},b.a.createElement(c["a"],{status:k[r],className:v.a.progress,strokeWidth:6,percent:10*e.length>100?100:10*e.length,showInfo:!1})):null};return b.a.createElement("div",{className:v.a.main},b.a.createElement("h3",null,b.a.createElement(h["a"],{id:"userandregister.register.register"})),b.a.createElement(m["a"],{form:G,name:"UserRegister",onFinish:U},b.a.createElement(j,{name:"mail",rules:[{required:!0,message:Object(h["c"])({id:"userandregister.email.required"})},{type:"email",message:Object(h["c"])({id:"userandregister.email.wrong-format"})}]},b.a.createElement(u["a"],{size:"large",placeholder:Object(h["c"])({id:"userandregister.email.placeholder"})})),b.a.createElement(i["a"],{getPopupContainer:function(e){return e&&e.parentNode?e.parentNode:e},content:S&&b.a.createElement("div",{style:{padding:"4px 0"}},N[K()],_(),b.a.createElement("div",{style:{marginTop:10}},b.a.createElement(h["a"],{id:"userandregister.strength.msg"}))),overlayStyle:{width:240},placement:"right",visible:S},b.a.createElement(j,{name:"password",className:G.getFieldValue("password")&&G.getFieldValue("password").length>0&&v.a.password,rules:[{validator:Z}]},b.a.createElement(u["a"],{size:"large",type:"password",placeholder:Object(h["c"])({id:"userandregister.password.placeholder"})}))),b.a.createElement(j,{name:"confirm",rules:[{required:!0,message:Object(h["c"])({id:"userandregister.confirm-password.required"})},{validator:X}]},b.a.createElement(u["a"],{size:"large",type:"password",placeholder:Object(h["c"])({id:"userandregister.confirm-password.placeholder"})})),b.a.createElement(y,{compact:!0},b.a.createElement(g["a"],{size:"large",value:P,onChange:$,style:{width:"20%"}},b.a.createElement(O,{value:"86"},"+86"),b.a.createElement(O,{value:"87"},"+87")),b.a.createElement(j,{style:{width:"80%"},name:"mobile",rules:[{required:!0,message:Object(h["c"])({id:"userandregister.phone-number.required"})},{pattern:/^\d{11}$/,message:Object(h["c"])({id:"userandregister.phone-number.wrong-format"})}]},b.a.createElement(u["a"],{size:"large",placeholder:Object(h["c"])({id:"userandregister.phone-number.placeholder"})}))),b.a.createElement(t["a"],{gutter:8},b.a.createElement(n["a"],{span:16},b.a.createElement(j,{name:"captcha",rules:[{required:!0,message:Object(h["c"])({id:"userandregister.verification-code.required"})}]},b.a.createElement(u["a"],{size:"large",placeholder:Object(h["c"])({id:"userandregister.verification-code.placeholder"})}))),b.a.createElement(n["a"],{span:8},b.a.createElement(s["a"],{size:"large",disabled:!!C,className:v.a.getCaptcha,onClick:H},C?"".concat(C," s"):Object(h["c"])({id:"userandregister.register.get-verification-code"})))),b.a.createElement(j,null,b.a.createElement(s["a"],{size:"large",loading:a,className:v.a.submit,type:"primary",htmlType:"submit"},b.a.createElement(h["a"],{id:"userandregister.register.register"})),b.a.createElement(f["Link"],{className:v.a.login,to:"/user/login"},b.a.createElement(h["a"],{id:"userandregister.register.sign-in"})))))};r["default"]=Object(h["b"])((function(e){var r=e.userAndregister,a=e.loading;return{userAndregister:r,submitting:a.effects["userAndregister/submit"]}}))(q)},sYde:function(e,r,a){e.exports={main:"antd-pro-pages-user-register-style-main",password:"antd-pro-pages-user-register-style-password",getCaptcha:"antd-pro-pages-user-register-style-getCaptcha",submit:"antd-pro-pages-user-register-style-submit",login:"antd-pro-pages-user-register-style-login",success:"antd-pro-pages-user-register-style-success",warning:"antd-pro-pages-user-register-style-warning",error:"antd-pro-pages-user-register-style-error","progress-pass":"antd-pro-pages-user-register-style-progress-pass",progress:"antd-pro-pages-user-register-style-progress"}}}]);