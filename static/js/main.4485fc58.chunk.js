(this["webpackJsonphomework-1"]=this["webpackJsonphomework-1"]||[]).push([[0],[,,,,,function(e,t,n){e.exports={aboutMe:"AboutMe_aboutMe__13E41",name:"AboutMe_name__3o9hq",skills:"AboutMe_skills__3ft6l"}},function(e,t,n){e.exports={App:"App_App__1KRHl",aboutYou:"App_aboutYou__1YYJp"}},,,function(e,t,n){e.exports={greetingBox:"Greeting_greetingBox__3tldH"}},function(e,t,n){},function(e,t,n){e.exports={friend:"Friend_friend__1wZoV"}},function(e,t,n){e.exports={myName:"Name_myName__2kPrc",blink:"Name_blink__p-k7L"}},function(e,t,n){e.exports={skillBox:"Skill_skillBox__1BDZT",blink:"Skill_blink__3yJeF"}},function(e,t,n){e.exports={styleMap:"Skills_styleMap__3OKYo"}},,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(21),n(15)),l=n(1),s=n(3),u=n(2),m=n(4),p=n(6),f=n.n(p),b=n(9),d=n.n(b),h=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onClickHello=function(){if(""!==n.newNameRef.current.value){var e=n.newNameRef.current.value;n.newNameRef.current.value="",n.props.addFriend(e),alert("\u0425\u0430\u043b\u043b\u0451\u0443, "+e+"! \u0422\u0435\u043f\u0435\u0440\u044c \u043c\u044b \u0434\u0440\u0443\u0437\u044c\u044f:)")}else alert("\u041d\u0435 \u0437\u043d\u0430\u044e, \u043a\u0430\u043a \u0442\u0435\u0431\u044f \u0437\u043e\u0432\u0443\u0442:(")},n.onEnterPress=function(e){"Enter"===e.key&&n.onClickHello()},n.render=function(){return r.a.createElement("div",{className:d.a.greetingBox},r.a.createElement("input",{onKeyPress:n.onEnterPress,ref:n.newNameRef,placeholder:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c\u0441\u044f, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430"}),r.a.createElement("button",{onClick:n.onClickHello},"\u0419\u043e\u0443"))},n.newNameRef=r.a.createRef(),n}return Object(m.a)(t,e),t}(r.a.Component),v=n(10),y=n.n(v),_=n(11),k=n.n(_),O=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).render=function(e){return r.a.createElement("div",{className:k.a.friend},n.props.friend)},n}return Object(m.a)(t,e),t}(r.a.Component),j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).render=function(){var e=n.props.friends.map((function(e,t){return r.a.createElement(O,{key:t,friend:e})}));return r.a.createElement("div",{className:y.a.friends},r.a.createElement("h3",null,"My friends:"),e)},n}return Object(m.a)(t,e),t}(r.a.Component),E=n(5),N=n.n(E),w=n(12),g=n.n(w),A=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return r.a.createElement("div",{className:g.a.myName},n.props.myName)},n}return Object(m.a)(t,e),t}(r.a.Component),x=n(13),M=n.n(x),C=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return r.a.createElement("div",{className:M.a.skillBox},r.a.createElement("span",null,n.props.skill))},n}return Object(m.a)(t,e),t}(r.a.Component),B=n(14),S=n.n(B),R=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).render=function(){var e=n.props.mySkills.map((function(e,t){return r.a.createElement(C,{key:t,skill:e})}));return r.a.createElement("div",{className:S.a.styleMap},e)},n}return Object(m.a)(t,e),t}(r.a.Component),F=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return r.a.createElement("div",{className:N.a.aboutMe},r.a.createElement("p",{className:N.a.name},"\u041f\u0440\u0438\u0432\u0435\u0442, \u043c\u0435\u043d\u044f \u0437\u043e\u0432\u0443\u0442 "),r.a.createElement(A,{myName:n.props.aboutMe.myName}),r.a.createElement("p",{className:N.a.skills},"\u0418 \u0432\u043e\u0442 3 \u0433\u043b\u0430\u0432\u043d\u044b\u0435 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u043c\u0438 \u043c\u0435\u043d\u044f \u043c\u043e\u0436\u043d\u043e \u043e\u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c:"),r.a.createElement(R,{mySkills:n.props.aboutMe.mySkills}))},n}return Object(m.a)(t,e),t}(r.a.Component),Y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={aboutMe:{myName:"Belyavskaya Alexandra",mySkills:["communicative","optimistic","infantile"]},friends:[]},n.addFriend=function(e){var t=[].concat(Object(i.a)(n.state.friends),[e]);n.setState({friends:t})},n.render=function(){return r.a.createElement("div",{className:f.a.App},r.a.createElement(F,{aboutMe:n.state.aboutMe}),r.a.createElement("div",{className:f.a.aboutYou},r.a.createElement(h,{addFriend:n.addFriend}),r.a.createElement(j,{friends:n.state.friends})))},n}return Object(m.a)(t,e),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.4485fc58.chunk.js.map