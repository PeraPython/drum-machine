(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),s=t(8),c=t.n(s),i=(t(15),t(2)),r=t(3),d=t(5),m=t(4),l=t(6),p=t(1),u=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(d.a)(this,Object(m.a)(a).call(this,e))).state={power:!1,banks:{first:[{id:"chord-1",src:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",key:"Q",about:"Chord 1"},{id:"chord-2",src:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",key:"W",about:"Chord 2"},{id:"chord-3",src:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",key:"E",about:"Chord 3"},{id:"gul",src:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",key:"A",about:"Give us a light"},{id:"do",src:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",key:"S",about:"Open Hi Hat"},{id:"bld",src:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",key:"D",about:"Closed Hi Hat"},{id:"kick",src:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",key:"Z",about:"Punchy Kick"},{id:"side-stick",src:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",key:"X",about:"Side Stick"},{id:"snare",src:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",key:"C",about:"Snare"}]},display:"Sample:"},t.playSample=t.playSample.bind(Object(p.a)(t)),t.keyDownHandle=t.keyDownHandle.bind(Object(p.a)(t)),t.handlePower=t.handlePower.bind(Object(p.a)(t)),t}return Object(l.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyDownHandle)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyDownHandle)}},{key:"handlePower",value:function(){this.setState({power:!this.state.power}),this.state.power||this.setState({display:"Sample:"})}},{key:"playSample",value:function(e){var a=this;this.state.power&&(document.getElementById(e).currentTime=0,document.getElementById(e).play(),this.state.banks.first.map(function(t){return e===t.key?a.setState({display:"Sample: ".concat(t.about)}):1}))}},{key:"keyDownHandle",value:function(e){var a=e.keyCode,t=e.key.toUpperCase();81===a&&this.playSample(t),87===a&&this.playSample(t),69===a&&this.playSample(t),65===a&&this.playSample(t),83===a&&this.playSample(t),68===a&&this.playSample(t),90===a&&this.playSample(t),88===a&&this.playSample(t),67===a&&this.playSample(t)}},{key:"render",value:function(){var e=this,a=this.state.banks.first,t=0;return o.a.createElement("div",{id:"drum-machine",onKeyDown:this.keyDownHandle},o.a.createElement("div",{className:"column"},o.a.createElement("div",{id:"display",style:{backgroundColor:this.state.power?"beige":"cadetblue"}},o.a.createElement("p",null,this.state.power&&this.state.display)),o.a.createElement("div",{id:"drum-pads"},a.map(function(a){return o.a.createElement("div",{className:"drum-pad",key:"drum-pad-".concat(t),onClick:e.playSample.bind(e,a.key),id:a.id},o.a.createElement("span",null,a.key),o.a.createElement("audio",{key:"audio-".concat(t++),className:"clip",id:a.key,src:a.src}))}))),o.a.createElement("div",{className:"column"},o.a.createElement("input",{type:"checkbox",name:"",onClick:this.handlePower})))}}]),a}(n.Component),h=(t(16),function(e){function a(){return Object(i.a)(this,a),Object(d.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(u,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.993037ee.chunk.js.map