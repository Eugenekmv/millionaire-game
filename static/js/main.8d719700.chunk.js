(this["webpackJsonpmillionaire-quiz"]=this["webpackJsonpmillionaire-quiz"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('{"quiz":[{"question":"Hows old your elder brother was 10 years before you was born, mate?","id":1,"rightAnswerId":1,"answers":[{"text":10,"id":1},{"text":13,"id":2},{"text":15,"id":3},{"text":12,"id":4}]},{"question":"What is the capital of Chile??","id":2,"rightAnswerId":4,"answers":[{"text":"Zhytomyr ","id":1},{"text":"Oslo","id":2},{"text":"Cusco","id":3},{"text":"Santiago ","id":4}]},{"question":"What is Japanese sake made from?","id":3,"rightAnswerId":1,"answers":[{"text":"Rice","id":1},{"text":"Bread","id":2},{"text":"Corn","id":3},{"text":"Fish","id":4}]},{"question":"Hows the weather?","id":4,"rightAnswerId":4,"answers":[{"text":10,"id":1},{"text":13,"id":2},{"text":15,"id":3},{"text":12,"id":4}]},{"question":"Which country is the origin of the cocktail Mojito?","id":5,"rightAnswerId":2,"answers":[{"text":"Mexico","id":1},{"text":"Cuba","id":2},{"text":"Peru","id":3},{"text":"Chile","id":4}]},{"question":"What is the capital of Westeros in Game of Thrones??","id":6,"rightAnswerId":4,"answers":[{"text":"Volantis","id":1},{"text":"Pentos","id":2},{"text":"Braavos","id":3},{"text":"King\u2019s Landing","id":4}]},{"question":"What language is spoken in Brazil?","id":7,"rightAnswerId":4,"answers":[{"text":"English","id":1},{"text":"Chineese","id":2},{"text":"Brazilian","id":3},{"text":"Portuguese","id":4}]},{"question":"How many notes are there in a musical scale?","id":8,"rightAnswerId":4,"answers":[{"text":"10","id":1},{"text":"13","id":2},{"text":"9","id":3},{"text":"7","id":4}]},{"question":"What company is also the name of one of the longest rivers in the world?","id":9,"rightAnswerId":4,"answers":[{"text":"Google","id":1},{"text":"Dnipro","id":2},{"text":"Desna","id":3},{"text":"Amazon","id":4}]},{"question":"What colour are most buses in London?","id":10,"rightAnswerId":3,"answers":[{"text":"Yellow","id":1},{"text":"Blue","id":2},{"text":"Red","id":3},{"text":"Black","id":4}]},{"question":"How many keys are there on a piano?","id":11,"rightAnswerId":4,"answers":[{"text":"101","id":1},{"text":"91","id":2},{"text":"97","id":3},{"text":"88","id":4}]},{"question":"Gordon Sumner is the real name of what famous British musician?","id":12,"rightAnswerId":1,"answers":[{"text":"Sting","id":1},{"text":"Spring","id":2},{"text":"Stick","id":3},{"text":"Eminem","id":4}]}],"stages":[{"id":0,"amount":"$500"},{"id":1,"amount":"$1,000"},{"id":2,"amount":"$2,000"},{"id":3,"amount":"$4,000"},{"id":4,"amount":"$8,000"},{"id":5,"amount":"$16,000"},{"id":6,"amount":"$32,000"},{"id":7,"amount":"$64,000"},{"id":8,"amount":"$125,000"},{"id":9,"amount":"$250,000"},{"id":10,"amount":"$500,000"},{"id":11,"amount":"$1,000,000"}]}')},,,function(e,t,a){e.exports=a.p+"static/media/hand.f8c75481.png"},,,,,,,,,function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(18),r=a.n(s),o=(a(25),a(7)),c=a(1),l=a(6),u=a(8),m=(a(26),function(e){var t=e.title;return i.a.createElement("button",{className:"btn-game"},t)}),d=(a(27),a(11)),h=a.n(d),g=function(){var e=Object(c.h)(),t=e.state&&e.state.prizeStep,a=Object(n.useState)(0),s=Object(o.a)(a,2),r=s[0],d=s[1];return Object(n.useEffect)((function(){u.stages.forEach((function(e){e.id===t&&d(e.amount)}))}),[t]),i.a.createElement("div",{className:"finish-wrapper"},i.a.createElement("div",{className:"finish-container"},i.a.createElement("img",{src:h.a,className:"finish-hand",alt:""}),i.a.createElement("div",{className:"finish-block"},i.a.createElement("div",{className:"block-results"},i.a.createElement("span",{className:"results__title"},"Total score:"),i.a.createElement("span",{className:"results__earned"},"".concat(r," earned"))),i.a.createElement(l.b,{to:"/millionaire-game/game"},i.a.createElement(m,{title:"Try again"})))))},x=a(15),f=Object(n.createContext)(),p=function(e){var t=e.children,a=Object(n.useState)(!1),s=Object(o.a)(a,2),r=s[0],c=s[1];return i.a.createElement(f.Provider,{value:{isMenuOpen:r,toggleMenuMode:function(){c(!r)}}},t)},w=(a(33),function(e){var t=e.id,a=e.text,n=e.onAnswerClick,s=e.answeredQuestion;return i.a.createElement("button",{className:"btn-answer ".concat("failed"===s?"failed":"success"===s?"success":""),onClick:function(){return n(t)}},i.a.createElement("span",{className:"id"},t,": "),a)}),E=function(e){var t=e.answers,a=e.onAnswerClick,n=e.answeredQuestion;return i.a.createElement(i.a.Fragment,null,t.map((function(e){return i.a.createElement(w,{key:e.id,id:e.id,text:e.text,onAnswerClick:a,answeredQuestion:n?n[e.id]:null})})))},b=(a(34),function(){var e=Object(n.useContext)(f),t=e.isMenuOpen,a=e.toggleMenuMode;return i.a.createElement("div",{className:"icon nav-icon-5 ".concat(t?"open":""),onClick:function(){a()}},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))}),v=(a(35),function(e){var t=e.stages,a=e.activeQuestion,s=Object(n.useContext)(f).isMenuOpen,r=function(e){return a===e.id?"current":a>e.id?"completed":""};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"quiz-stage ".concat(s?"opened":"")},t.map((function(e){return i.a.createElement("div",{className:"stage ".concat(r(e)),key:e.id},e.amount)}))))}),q=(a(36),function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)(null),l=Object(o.a)(r,2),m=l[0],d=l[1],h=Object(c.g)(),g=u.quiz,f=u.stages,w=u.quiz[a].answers,q=u.quiz[a];return i.a.createElement(p,null,i.a.createElement("div",{className:"quiz-container"},i.a.createElement("div",{className:"quiz-game"},i.a.createElement("div",{className:"game-container"},i.a.createElement("span",{className:"quiz-game__title"},q.question),i.a.createElement("div",{className:"quiz-game__questions"},i.a.createElement(E,{answers:w,onAnswerClick:function(e){if(e===q.rightAnswerId){d(Object(x.a)({},e,"success"));var t=setTimeout((function(){a+1===g.length?(h.push({pathname:"/millionaire-game/finish",state:{prizeStep:a}}),d(null),s(0)):(s((function(e){return e+1})),d(null)),clearTimeout(t)}),1e3)}else{d(Object(x.a)({},e,"failed"));var n=setTimeout((function(){h.push({pathname:"/millionaire-game/finish",state:{prizeStep:a-1}}),clearTimeout(n)}),1e3)}},answeredQuestion:m})))),i.a.createElement(b,null),i.a.createElement(v,{stages:f,activeQuestion:a})))}),N=(a(37),function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"wrapper"},i.a.createElement("img",{src:h.a,className:"hand",alt:"hand"}),i.a.createElement("div",{className:"block"},i.a.createElement("span",{className:"title"},"Who wants to be a millionaire?"),i.a.createElement(l.b,{to:"/millionaire-game/game"},i.a.createElement(m,{title:"Start"})))))});var O=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(c.d,null,i.a.createElement(c.b,{path:"/millionaire-game/start",exact:!0,component:N}),i.a.createElement(c.b,{path:"/millionaire-game/game",exact:!0,component:q}),i.a.createElement(c.b,{path:"/millionaire-game/finish",exact:!0,component:g}),i.a.createElement(c.a,{to:"/millionaire-game/start"})))};r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(l.a,null,i.a.createElement(O,null))),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.8d719700.chunk.js.map