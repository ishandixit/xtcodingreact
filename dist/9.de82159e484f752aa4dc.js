webpackJsonp([9],{Tlgc:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("GiK3"),i=function(e){return e&&e.__esModule?e:{default:e}}(c),l=n("Oafi"),s=n("F8kA"),f=n("RH2O"),p=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.getGrn=function(){(0,l.getData)("/grn/"+n.props.match.params.id,"json",n.props.user.token).then(function(e){200==e.outputCode&&n.setState({data:e.response})})},n.state={data:{}},n}return a(t,e),u(t,[{key:"componentDidMount",value:function(){this.getGrn()}},{key:"render",value:function(){var e=this.state.data;return i.default.createElement("div",{className:"row"},e.qrImg&&e.qrImg.map(function(t){return i.default.createElement("div",{className:"col m3 s6",style:{textAlign:"center"}},i.default.createElement("img",{style:{height:150,width:150},src:"http://localhost:3000"+t}),i.default.createElement("p",{style:{textAlign:"center",marginTop:0}},t.replace("/Public/"+e.grnNumber+"/","").replace(".svg","")))}))}}]),t}(c.Component),d=function(e){return{user:e.user}};t.default=(0,s.withRouter)((0,f.connect)(d,null)(p))}});