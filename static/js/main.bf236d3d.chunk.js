(this.webpackJsonpazi_web_site=this.webpackJsonpazi_web_site||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},112:function(e,t,n){},114:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),i=n(10),s=n.n(i),o=(n(94),n(11)),l=n(13),j=n(14),u=n(15),d=function(){function e(){return Object(o.a)(this,e),e.exists?e._instance:(window.addEventListener("popstate",this._popStateHandler),e._instance=this,e.exists=!0,this)}return Object(l.a)(e,[{key:"_handlerChange",value:function(e,t){t?window.history.replaceState(null,"",e):window.history.pushState(null,"",e);var n=window.location.pathname,c=window.location.hash;""!==c&&(c=c.substr(1,c.length)),this.callback(n,c)}},{key:"onGenerate",value:function(e){this.callback=e}},{key:"push",value:function(e){this._handlerChange(e,!1)}}]),e}();d._instance=null;var h=new d,b={"/":"Accueil","/service":"Nos Services","/about":"A propos","/contact":"Nous contacter"};function p(e){var t=b[e];document.title=t||"Erreur 404"}var O=n(153),v=n(157),x=n(59),m=n.n(x),f=(n(95),r.a.memo((function(e){return Object(c.jsxs)("div",{className:"footer-container",style:{marginTop:e.marginTop||"20px"},children:[Object(c.jsxs)("div",{className:"items-container",children:[Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:"/logo.png",alt:"logo du site",style:{height:"96px"}})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"item-title",children:"Nos Services"}),Object(c.jsxs)("div",{className:"items",children:[Object(c.jsx)("p",{children:"Location d\u2019engin lourd"}),Object(c.jsx)("p",{children:"Location de v\xe9hicule"}),Object(c.jsx)("p",{children:"Prestations de service"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{className:"item-title",children:"Nos Contacts"}),Object(c.jsxs)("div",{className:"items items-with-icons",children:[Object(c.jsx)("div",{children:Object(c.jsxs)("a",{href:"tel:+22679247431",children:[Object(c.jsx)(O.a,{})," ",Object(c.jsx)("p",{children:"(+226) 79 24 74 31"})]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("a",{href:"https://wa.me/22664709696",children:[Object(c.jsx)(m.a,{})," ",Object(c.jsx)("p",{children:"(+226) 64 70 96 96"})]})}),Object(c.jsx)("div",{children:Object(c.jsxs)("a",{href:"mailto:srdmouaga@gmail.com",children:[Object(c.jsx)(v.a,{})," ",Object(c.jsx)("p",{children:"srdmouaga@gmail.com"})]})})]})]})]}),Object(c.jsx)("p",{className:"copyright",children:"\xa9 2021 Azi. Tous droits r\xe9serv\xe9s"})]})}))),g=r.a.memo((function(e){var t=e.to,n=e.children;return Object(c.jsx)("div",{onClick:function(){h.push(t)},children:n})})),y=n(74),N=n.n(y),C=n(158),w=(n(101),r.a.memo((function(e){return Object(c.jsxs)("div",{className:"side-bar",children:[Object(c.jsxs)("div",{className:"side-bar-header",children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("img",{src:"/logo.png",alt:"logo du site",style:{height:"48px"}})}),Object(c.jsx)("div",{children:Object(c.jsx)(C.a,{onClick:e.close,style:{color:"FFF",fontSize:"30px"}})})]}),Object(c.jsxs)("div",{className:"navigation-mobile",children:[Object(c.jsx)(g,{to:"/",children:Object(c.jsx)("div",{className:"li-mobile",children:Object(c.jsx)("p",{children:"Accueil"})})}),Object(c.jsx)(g,{to:"/service",children:Object(c.jsx)("div",{className:"li-mobile",children:Object(c.jsx)("p",{children:"service"})})}),Object(c.jsx)(g,{to:"/about",children:Object(c.jsx)("div",{className:"li-mobile",children:Object(c.jsx)("p",{children:"A Propos"})})}),Object(c.jsx)(g,{to:"/contact",children:Object(c.jsx)("div",{className:"li-mobile",children:Object(c.jsx)("p",{children:"Nous contacter"})})})]})]})}))),S=(n(102),[{path:"/",label:"Accueil"},{path:"/service",label:"Service"},{path:"/about",label:"A Propos"},{path:"/contact",label:"Nous contacter"}]),k=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).open=function(){c.setState({show:!0})},c.close=function(){c.setState({show:!1})},c.closeSideBar=function(){c.setState({sideBarState:!1})},c.state={show:!1,sideBarState:!1},e.controller&&(e.controller.open=c.open,e.controller.close=c.close),c}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=window.location.pathname;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"nav-bar-container",children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("img",{src:"/logo.png",alt:"logo du site",style:{height:"48px"}})}),Object(c.jsx)("div",{className:"navigation",children:S.map((function(e,n){return Object(c.jsx)(g,{to:e.path,children:Object(c.jsx)("div",{className:"li"+(t===e.path?" selected":""),children:Object(c.jsx)("p",{children:e.label})})},n)}))}),Object(c.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return e.setState({sideBarState:!0})},children:Object(c.jsx)(N.a,{})})]}),Object(c.jsx)("div",{className:"nav-bar-container-height"}),this.state.sideBarState&&Object(c.jsx)(w,{close:this.closeSideBar})]})}}]),n}(r.a.PureComponent),E=n(166),I=n(47),_=(n(103),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e))._handleChange=function(){c.setState((function(e){return{currentIndex:(e.currentIndex+1)%c.length}}))},c.state={containerHeight:0,currentIndex:0},c.containerRef=r.a.createRef(),c.timeId=null,c.length=c.props.children.length,c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.containerRef.current;this.setState({containerHeight:e.offsetWidth/this.props.aspectRatio}),this.timeId=setInterval(this._handleChange,5e3)}},{key:"componentWillUnmount",value:function(){this.timeId&&clearInterval(this.timeId)}},{key:"render",value:function(){var e=this,t=this.props.children;return Object(c.jsxs)("div",{className:"carousel-container",style:Object(I.a)({height:this.state.containerHeight},this.props.style),ref:this.containerRef,children:[r.a.Children.map(t,(function(t,n){var c=e.state.currentIndex,a=0===c?e.length-1:c-1;return n===c?r.a.cloneElement(t,{className:"slideIn"}):n===a?r.a.cloneElement(t,{className:"slideOut"}):t})),Object(c.jsx)("div",{className:"indicator",children:t.map((function(t,n){return Object(c.jsx)("span",{className:e.state.currentIndex===n?"selected":void 0},n)}))})]})}}]),n}(r.a.Component)),M=r.a.memo((function(e){var t=e.children,n=e.className;return Object(c.jsx)("div",{className:"carousel-items "+(n||""),children:t})})),A=n(19),D=n.n(A),T=n(42),F=n(77),L=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e,c){var a;return Object(o.a)(this,n),(a=t.call(this,c)).statusCode=e,a.message=c,a}return n}(Object(F.a)(Error)),P=function(){function e(){Object(o.a)(this,e)}return Object(l.a)(e,null,[{key:"getServices",value:function(){var t=Object(T.a)(D.a.mark((function t(n){var c;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e._fetchAllServices();case 3:return c=t.sent,t.abrupt("return",c.filter((function(e){return n===e.serviceType})));case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},{key:"getLastServices",value:function(){var t=Object(T.a)(D.a.mark((function t(){var n;return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e._fetchAllServices();case 3:return n=t.sent,t.abrupt("return",n.reverse().filter((function(e,t){return t+1<=3})));case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()},{key:"getCourselData",value:function(){var e=Object(T.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){fetch("data/carousel_data.json").then((function(e){return e.json()})).then((function(t){return e(t.data)})).catch((function(e){return t(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"_fetchAllServices",value:function(){var e=Object(T.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){fetch("data/services.json").then((function(e){return e.json()})).then((function(t){return e(t.services)})).catch((function(e){return t(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"sendMail",value:function(){var e=Object(T.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://azi.eu-4.evennode.com/api/send-mail",{method:"POST",body:t});case 3:if((n=e.sent).ok){e.next=11;break}return e.t0=L,e.t1=n.status,e.next=9,n.text();case 9:throw e.t2=e.sent,new e.t0(e.t1,e.t2);case 11:e.next=16;break;case 13:throw e.prev=13,e.t3=e.catch(0),e.t3;case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),B=(n(105),n(159)),R=n(161),z=n(162),U=n(164),H=n(163),V=n(120),G=(n(106),n(76)),J=n(78),W=n(174),Q=n(176),q=n(63),K=(n(107),n(160)),X=Object(B.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"1px solid #000",boxShadow:e.shadows[5]}}})),Y=r.a.forwardRef((function(e,t){var n=e.in,a=e.children,r=e.onEnter,i=e.onExited,s=Object(J.a)(e,["in","children","onEnter","onExited"]),o=Object(q.useSpring)({from:{opacity:0},to:{opacity:n?1:0},onStart:function(){n&&r&&r()},onRest:function(){!n&&i&&i()}});return Object(c.jsx)(q.animated.div,Object(I.a)(Object(I.a)({ref:t,style:o},s),{},{children:a}))}));function Z(e){var t=e.project,n=X(),a=r.a.useState(!1),i=Object(G.a)(a,2),s=i[0],o=i[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(K.a,{variant:"contained",color:"primary",type:"button",onClick:function(){o(!0)},children:"voir plus"}),Object(c.jsx)(W.a,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",className:n.modal,open:s,onClose:function(){o(!1)},closeAfterTransition:!0,BackdropComponent:Q.a,BackdropProps:{timeout:500},children:Object(c.jsx)(Y,{in:s,children:Object(c.jsx)("div",{className:n.paper,children:Object(c.jsx)("div",{className:"container-modal",children:Object(c.jsx)("img",{src:t.imageUrl,className:"container-image",alt:""})})})})})]})}var $=n(165),ee=Object(B.a)({root:{width:345},media:{height:140}});function te(e){var t=e.project,n=ee();return Object(c.jsx)("div",{children:Object(c.jsxs)(R.a,{className:n.root,children:[Object(c.jsxs)(z.a,{children:[Object(c.jsx)(H.a,{className:n.media,image:t.imageUrl}),Object(c.jsxs)(U.a,{children:[Object(c.jsx)(V.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(c.jsx)(V.a,{variant:"body2",color:"textSecondary",component:"p",children:t.description})]})]}),Object(c.jsx)($.a,{children:Object(c.jsx)(Z,{project:t})})]})})}var ne=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).onChanged=function(){c.setState({loading:!0}),c.fetchData()},c.state={loading:!0,categoryIndex:0,error:!0,services:null,carouselData:[]},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"fetchData",value:function(){var e=this;P.getCourselData().then((function(t){e.setState({carouselData:t})})).catch((function(e){})),P.getLastServices().then((function(t){e.setState({loading:!1,services:t})})).catch((function(e){}))}},{key:"render",value:function(){if(this.state.loading)return Object(c.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(c.jsx)(E.a,{})});var e=this.state.services;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"test",children:Object(c.jsx)(_,{aspectRatio:16/7,style:{width:"100%",margin:"auto",backgroundColor:"#000"},children:this.state.carouselData.map((function(e,t){return Object(c.jsxs)(M,{children:[Object(c.jsx)("img",{src:e.imageUrl,alt:""}),Object(c.jsxs)("div",{className:"carousel-label",children:[Object(c.jsx)("p",{children:e.title}),Object(c.jsx)("p",{children:e.type})]})]},t)}))})}),Object(c.jsx)("div",{id:"scrollable-container",children:Object(c.jsx)("div",{id:"projets-card-conatiner",children:e.map((function(e,t){return Object(c.jsx)(te,{project:e},t)}))})})]})}}]),n}(r.a.Component);var ce=function(e){return Object(c.jsxs)("div",{id:"page-container",children:[Object(c.jsx)(k,{}),Object(c.jsxs)("div",{id:"__page-container",children:[Object(c.jsx)(ne,{}),Object(c.jsx)(f,{})]})]})},ae=n(167),re=n(173),ie=n(178),se=[{label:"LOCATION ENGIN LOURD",value:0},{label:"LOCATION VEHICULE",value:1},{label:"VENTE",value:2}],oe=r.a.memo((function(e){var t=e.categories,n=e.index,a=e.onChanged,r=function(e){return function(t){a(e)}};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{id:"categories",children:t.map((function(e,t){return Object(c.jsx)("p",{className:"category".concat(t===n?" selected":""),onClick:r(t),children:e},t)}))}),Object(c.jsx)("div",{id:"categories-height"})]})})),le=(n(112),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).onChanged=function(e){console.log(e),c.setState({loading:!0,categoryIndex:e}),c._getProject(e)},c.state={loading:!0,error:!1,categoryIndex:0,projects:null},c.categories=["LOCATION ENGIN LOURD","LOCATION VEHICULE","VENTE"],c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this._getProject(this.state.categoryIndex)}},{key:"_getProject",value:function(e){var t=this,n=null;0===e?n="engin-lourd":1===e?n="vehicule":2===e&&(n="vente"),P.getServices(n).then((function(e){t.setState({loading:!1,projects:e})})).catch((function(e){}))}},{key:"render",value:function(){var e=this;if(this.state.loading)return Object(c.jsx)("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(c.jsx)(E.a,{})});var t=this.state.projects;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(oe,{index:this.state.categoryIndex,categories:this.categories,onChanged:this.onChanged}),Object(c.jsx)("div",{className:"mobile-select-category",children:Object(c.jsx)(ae.a,{variant:"outlined",children:Object(c.jsx)(re.a,{value:this.state.categoryIndex,categories:this.categories,onChange:function(t){return e.onChanged(t.target.value)},children:se.map((function(e){var t=e.label,n=e.value;return Object(c.jsx)(ie.a,{value:n,children:t},n)}))})})}),Object(c.jsx)("div",{id:"scrollable-container",children:Object(c.jsx)("div",{id:"projets-card-conatiner",children:t.map((function(e,t){return Object(c.jsx)(te,{project:e},t)}))})})]})}}]),n}(r.a.Component));n(114);var je=function(e){return Object(c.jsxs)("div",{id:"page-container",children:[Object(c.jsx)(k,{}),Object(c.jsxs)("div",{id:"__page-container",children:[Object(c.jsx)(le,{}),Object(c.jsx)(f,{})]})]})},ue=n(64),de=n.n(ue),he=n(75),be=n.n(he),pe=n(175),Oe=n(170),ve=n(171),xe=n(172),me=(n(115),function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).onNameChange=function(e){c.setState({nom:e.target.value,nameMessageError:null})},c.onMailChange=function(e){c.setState({mail:e.target.value,mailMessageError:null})},c.onDescriptionChange=function(e){c.setState({description:e.target.value,descriptionMessageError:null})},c.onSubmit=function(){if(!c.state.loading){var e=c.state.nom,t=c.state.mail,n=c.state.description;if(""!==e.trim())if(""!==t.trim())if(""!==n.trim()){c.setState({loading:!0});var a=new FormData;a.append("name",e),a.append("mail",t),a.append("description",n),P.sendMail(a).then((function(e){c.setState({loading:!1})})).catch((function(e){console.error(e)}))}else c.setState({descriptionMessageError:"Entrez un message"});else c.setState({mailMessageError:"Entrez votre email"});else c.setState({nameMessageError:"Entrez votre nom"})}},c.state={nom:"",mail:"",description:"",loading:!1,nameMessageError:null,mailMessageError:null,descriptionMessageError:null},c}return Object(l.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{id:"contact-container",children:[Object(c.jsxs)("div",{className:"contact-actions",children:[Object(c.jsxs)("div",{className:"icon",children:[Object(c.jsx)(be.a,{htmlColor:"#fff"})," ",Object(c.jsx)("p",{children:"(+226) 79247431"})]}),Object(c.jsxs)("div",{className:"icon",children:[Object(c.jsx)(m.a,{htmlColor:"#fff"})," ",Object(c.jsx)("p",{children:"(+226) 64709696"})]}),Object(c.jsxs)("div",{className:"icon",children:[Object(c.jsx)(de.a,{htmlColor:"#fff"}),Object(c.jsx)("p",{children:"srdmouaga@gmail.com"})]})]}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)(pe.a,{label:"Nom",variant:"outlined",value:this.state.nom,onChange:this.onNameChange,error:null!=this.state.nameMessageError,helperText:this.state.nameMessageError,InputProps:{startAdornment:Object(c.jsx)(Oe.a,{position:"start",children:Object(c.jsx)(ve.a,{})})}}),Object(c.jsx)(pe.a,{label:"Mail",variant:"outlined",value:this.state.mail,onChange:this.onMailChange,error:null!=this.state.mailMessageError,helperText:this.state.mailMessageError,InputProps:{startAdornment:Object(c.jsx)(Oe.a,{position:"start",children:Object(c.jsx)(de.a,{})})}}),Object(c.jsx)(pe.a,{label:"Message",variant:"outlined",value:this.state.description,onDescriptionChange:this.onDescriptionChange,error:null!=this.state.descriptionMessageError,helperText:this.state.descriptionMessageError,rows:4,multiline:!0}),Object(c.jsx)(K.a,{onClick:this.onSubmit,variant:"contained",color:"primary",style:{height:"48px"},children:this.state.loading?Object(c.jsx)(E.a,{style:{color:"#FFF"}}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{style:{marginRight:"5px"},children:"Envoyer"}),Object(c.jsx)(xe.a,{})]})})]})]})}}]),n}(r.a.Component));var fe=function(e){return Object(c.jsxs)("div",{id:"page-container",children:[Object(c.jsx)(k,{}),Object(c.jsxs)("div",{id:"__page-container",children:[Object(c.jsx)(me,{}),Object(c.jsx)(f,{marginTop:"0"})]})]})};n(116);var ge=function(){return Object(c.jsxs)("div",{className:"about-container",children:[Object(c.jsxs)("div",{className:"text-content",children:[Object(c.jsx)("h1",{children:"AssoConseil"}),Object(c.jsx)("h3",{children:"Qui somme nous"}),"Azi transport une soci\xe9t\xe9 regroupement plusieurs profils dans le but de r\xe9pondre \xe0 vos diff\xe9rentes pr\xe9occupations. Vue le jours depuis 2019 nous avons d\xe9j\xe0 fais nos preuve en r\xe9pondant aux attente de plusieurs soci\xe9t\xe9s de la place.",Object(c.jsx)("h3",{children:"Nos objectifs "}),"Le client aux c\u0153ur de nos actes nous ambitionnons \xeatres la r\xe9f\xe9rence en terme de transport, de location et prestations de services"]}),Object(c.jsx)("div",{className:"img-content",children:Object(c.jsx)("img",{src:"images/inscription1.jpg",alt:"",className:"img"})})]})};var ye=function(e){return Object(c.jsxs)("div",{id:"page-container",children:[Object(c.jsx)(k,{}),Object(c.jsxs)("div",{id:"__page-container",children:[Object(c.jsx)(ge,{}),Object(c.jsx)(f,{})]})]})},Ne=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(e){var c;Object(o.a)(this,n),c=t.call(this,e);var a=window.location.pathname,r=window.location.hash;return p(a),c.state={path:a,args:""===r?"":r.substr(1,r.length)},c}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;h.onGenerate((function(t,n){p(t),e.setState({path:t,args:n})}))}},{key:"render",value:function(){switch(this.state.path){case"/":return Object(c.jsx)(ce,{});case"/service":return Object(c.jsx)(je,{});case"/contact":return Object(c.jsx)(fe,{});case"/about":return Object(c.jsx)(ye,{})}}}]),n}(r.a.PureComponent);var Ce=function(){return Object(c.jsx)(Ne,{})},we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,180)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(Ce,{})}),document.getElementById("root")),we()},94:function(e,t,n){},95:function(e,t,n){}},[[117,1,2]]]);
//# sourceMappingURL=main.bf236d3d.chunk.js.map