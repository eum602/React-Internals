(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,n){},15:function(e,a,n){},17:function(e,a,n){},19:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(2),i=n.n(o),s=(n(13),n(3)),c=n(4),l=n(6),m=n(5),h=n(7),u=(n(15),function(e){return r.a.createElement("div",{className:"Person"},r.a.createElement("p",{onClick:e.clickeo},"I am ",e.name," and I am ",e.age," years old"),r.a.createElement("p",null,e.children),r.a.createElement("input",{onChange:e.changed,value:e.name}))}),d=(n(17),function(e){function a(){var e,n;Object(s.a)(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={persons:[{name:"Erick",age:"25"},{name:"Jorge",age:"48"},{name:"David",age:"32"}]},n.switchNameHandler=function(e){n.setState({persons:[{name:e,age:"80"},{name:"Lato",age:"25"},{name:"David",age:"22"}]})},n.nameChangeHandler=function(e){n.setState({persons:[{name:"Erick",age:"80"},{name:e.target.value,age:"25"},{name:"Said",age:"22"}]})},n}return Object(h.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"this is an App"),r.a.createElement("p",null,"This is really working"),r.a.createElement("button",{style:{backgroundColor:"white",font:"inherit",border:"1x solid blue",padding:"8px",pointer:"pointer"},onClick:function(){return e.switchNameHandler("Maxx!")}},"Switch name"),r.a.createElement(u,{name:this.state.persons[0].name,age:this.state.persons[0].age}),r.a.createElement(u,{name:this.state.persons[1].name,age:this.state.persons[1].age,clickeo:this.switchNameHandler.bind(this,"max2!!"),changed:this.nameChangeHandler}),r.a.createElement(u,{name:this.state.persons[2].name,age:this.state.persons[2].age},"This is my best hobby"))}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,n){e.exports=n(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.c3075cfb.chunk.js.map