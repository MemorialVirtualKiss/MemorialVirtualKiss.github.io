"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[288],{54535:function(e,t,n){n.d(t,{Z:function(){return h}});var o=n(97685),r=n(67294),l=n(73935),a=n(98924);n(80334);var i=n(42550),c=r.createContext(null),u=n(74902),d=n(8410),s=[],p=n(44958),f="rc-util-locker-".concat(Date.now()),m=0,v=!1,getPortalContainer=function(e){return!1!==e&&((0,a.Z)()&&e?"string"==typeof e?document.querySelector(e):"function"==typeof e?e():e:null)},h=r.forwardRef(function(e,t){var n,h,g,b,y=e.open,C=e.autoLock,S=e.getContainer,w=(e.debug,e.autoDestroy),x=void 0===w||w,_=e.children,j=r.useState(y),k=(0,o.Z)(j,2),E=k[0],I=k[1],N=E||y;r.useEffect(function(){(x||y)&&I(y)},[y,x]);var O=r.useState(function(){return getPortalContainer(S)}),G=(0,o.Z)(O,2),P=G[0],H=G[1];r.useEffect(function(){var e=getPortalContainer(S);H(null!=e?e:null)});var T=function(e,t){var n=r.useState(function(){return(0,a.Z)()?document.createElement("div"):null}),l=(0,o.Z)(n,1)[0],i=r.useRef(!1),p=r.useContext(c),f=r.useState(s),m=(0,o.Z)(f,2),v=m[0],h=m[1],g=p||(i.current?void 0:function(e){h(function(t){return[e].concat((0,u.Z)(t))})});function append(){l.parentElement||document.body.appendChild(l),i.current=!0}function cleanup(){var e;null===(e=l.parentElement)||void 0===e||e.removeChild(l),i.current=!1}return(0,d.Z)(function(){return e?p?p(append):append():cleanup(),cleanup},[e]),(0,d.Z)(function(){v.length&&(v.forEach(function(e){return e()}),h(s))},[v]),[l,g]}(N&&!P,0),$=(0,o.Z)(T,2),A=$[0],M=$[1],Z=null!=P?P:A;n=!!(C&&y&&(0,a.Z)()&&(Z===A||Z===document.body)),h=r.useState(function(){return m+=1,"".concat(f,"_").concat(m)}),g=(0,o.Z)(h,1)[0],(0,d.Z)(function(){if(n){var e,t=(e=document.body,"undefined"!=typeof document&&e&&e instanceof Element?function(e){var t,n,o="rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),r=document.createElement("div");r.id=o;var l=r.style;if(l.position="absolute",l.left="0",l.top="0",l.width="100px",l.height="100px",l.overflow="scroll",e){var a=getComputedStyle(e);l.scrollbarColor=a.scrollbarColor,l.scrollbarWidth=a.scrollbarWidth;var i=getComputedStyle(e,"::-webkit-scrollbar"),c=parseInt(i.width,10),u=parseInt(i.height,10);try{var d=c?"width: ".concat(i.width,";"):"",s=u?"height: ".concat(i.height,";"):"";(0,p.hq)("\n#".concat(o,"::-webkit-scrollbar {\n").concat(d,"\n").concat(s,"\n}"),o)}catch(e){console.error(e),t=c,n=u}}document.body.appendChild(r);var f=e&&t&&!isNaN(t)?t:r.offsetWidth-r.clientWidth,m=e&&n&&!isNaN(n)?n:r.offsetHeight-r.clientHeight;return document.body.removeChild(r),(0,p.jL)(o),{width:f,height:m}}(e):{width:0,height:0}).width,o=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth;(0,p.hq)("\nhtml body {\n  overflow-y: hidden;\n  ".concat(o?"width: calc(100% - ".concat(t,"px);"):"","\n}"),g)}else(0,p.jL)(g);return function(){(0,p.jL)(g)}},[n,g]);var z=null;_&&(0,i.Yr)(_)&&t&&(z=_.ref);var L=(0,i.x1)(z,t);if(!N||!(0,a.Z)()||void 0===P)return null;var D=!1===Z||("boolean"==typeof b&&(v=b),v),R=_;return t&&(R=r.cloneElement(_,{ref:L})),r.createElement(c.Provider,{value:M},D?R:(0,l.createPortal)(R,Z))})},53683:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getTransitionName=t.default=void 0;let getCollapsedHeight=()=>({height:0,opacity:0}),getRealHeight=e=>{let{scrollHeight:t}=e;return{height:t,opacity:1}},getCurrentHeight=e=>({height:e?e.offsetHeight:0}),skipOpacityTransition=(e,t)=>(null==t?void 0:t.deadline)===!0||"height"===t.propertyName;t.getTransitionName=(e,t,n)=>void 0!==n?n:`${e}-${t}`,t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ant";return{motionName:`${e}-motion-collapse`,onAppearStart:getCollapsedHeight,onEnterStart:getCollapsedHeight,onAppearActive:getRealHeight,onEnterActive:getRealHeight,onLeaveStart:getCurrentHeight,onLeaveActive:getCollapsedHeight,onAppearEnd:skipOpacityTransition,onEnterEnd:skipOpacityTransition,onLeaveEnd:skipOpacityTransition,motionDeadline:500}}},65693:function(e,t,n){var o=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(3236));t.default=e=>{let t=r.default.useContext(l.default),n=r.default.useMemo(()=>e?"string"==typeof e?null!=e?e:t:e instanceof Function?e(t):t:t,[e,t]);return n}},46549:function(e,t,n){var o=n(64836).default,r=n(75263).default;Object.defineProperty(t,"__esModule",{value:!0}),t.useCompactItemContext=t.default=t.SpaceCompactItemContext=t.NoCompactStyle=void 0;var l=r(n(67294)),a=o(n(93967)),i=o(n(45598)),c=n(31929),u=o(n(65693)),d=o(n(54277)),__rest=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)0>t.indexOf(o[r])&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};let s=t.SpaceCompactItemContext=l.createContext(null);t.useCompactItemContext=(e,t)=>{let n=l.useContext(s),o=l.useMemo(()=>{if(!n)return"";let{compactDirection:o,isFirstItem:r,isLastItem:l}=n,i="vertical"===o?"-vertical-":"-";return(0,a.default)(`${e}-compact${i}item`,{[`${e}-compact${i}first-item`]:r,[`${e}-compact${i}last-item`]:l,[`${e}-compact${i}item-rtl`]:"rtl"===t})},[e,t,n]);return{compactSize:null==n?void 0:n.compactSize,compactDirection:null==n?void 0:n.compactDirection,compactItemClassnames:o}},t.NoCompactStyle=e=>{let{children:t}=e;return l.createElement(s.Provider,{value:null},t)};let CompactItem=e=>{var{children:t}=e,n=__rest(e,["children"]);return l.createElement(s.Provider,{value:n},t)};t.default=e=>{let{getPrefixCls:t,direction:n}=l.useContext(c.ConfigContext),{size:o,direction:r,block:p,prefixCls:f,className:m,rootClassName:v,children:h}=e,g=__rest(e,["size","direction","block","prefixCls","className","rootClassName","children"]),b=(0,u.default)(e=>null!=o?o:e),y=t("space-compact",f),[C,S]=(0,d.default)(y),w=(0,a.default)(y,S,{[`${y}-rtl`]:"rtl"===n,[`${y}-block`]:p,[`${y}-vertical`]:"vertical"===r},m,v),x=l.useContext(s),_=(0,i.default)(h),j=l.useMemo(()=>_.map((e,t)=>{let n=e&&e.key||`${y}-item-${t}`;return l.createElement(CompactItem,{key:n,compactSize:b,compactDirection:r,isFirstItem:0===t&&(!x||(null==x?void 0:x.isFirstItem)),isLastItem:t===_.length-1&&(!x||(null==x?void 0:x.isLastItem))},e)}),[o,_,x]);return 0===_.length?null:C(l.createElement("div",Object.assign({className:w},g),j))}},35969:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=e=>{let{componentCls:t}=e;return{[t]:{"&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}}},54277:function(e,t,n){var o=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.prepareComponentToken=t.default=void 0;var r=n(3184),l=o(n(35969));let genSpaceStyle=e=>{let{componentCls:t,antCls:n}=e;return{[t]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${t}-item:empty`]:{display:"none"},[`${t}-item > ${n}-badge-not-a-wrapper:only-child`]:{display:"block"}}}},genSpaceGapStyle=e=>{let{componentCls:t}=e;return{[t]:{"&-gap-row-small":{rowGap:e.spaceGapSmallSize},"&-gap-row-middle":{rowGap:e.spaceGapMiddleSize},"&-gap-row-large":{rowGap:e.spaceGapLargeSize},"&-gap-col-small":{columnGap:e.spaceGapSmallSize},"&-gap-col-middle":{columnGap:e.spaceGapMiddleSize},"&-gap-col-large":{columnGap:e.spaceGapLargeSize}}}};t.prepareComponentToken=()=>({}),t.default=(0,r.genStyleHooks)("Space",e=>{let t=(0,r.mergeToken)(e,{spaceGapSmallSize:e.paddingXS,spaceGapMiddleSize:e.padding,spaceGapLargeSize:e.paddingLG});return[genSpaceStyle(t),genSpaceGapStyle(t),(0,l.default)(t)]},()=>({}),{resetStyle:!1})},42901:function(e,t,n){n.d(t,{p:function(){return useControlbarConfig}});var o=n(91309),r=n(85893),l=n(67294),a=n(25617),i=n(61935),c=n(58673),u=n(97616),useControlbarConfig=function(){var e=(0,o._)((0,c.tf)("stats"),1)[0],t=(0,a.v9)(i.Y2),n=(0,a.v9)(i.Ai),d=(0,l.useCallback)(function(o){if(o){var r,l=n[o]||u.QR[o];return"gyro"===o?!!e.isGyroscopeAvailable&&!(null==l?void 0:l.isHide):"vr"===o||"view_mode"===o?!(null==l?void 0:l.isHide)&&(null==t?void 0:null===(r=t.media)||void 0===r?void 0:r.subType)!=="flat":!(null==l?void 0:l.isHide)}return!0},[null==t?void 0:t.media,n,e]),s=(0,l.useCallback)(function(e){if(e){var t,o,l=n[e]||u.QR[e];if("icon"===l.type&&l.icon)return(0,r.jsx)("i",{"aria-hidden":!0,className:"controlbar-item__icon ".concat(l.icon)});if("image"===l.type&&(null===(t=l.image)||void 0===t?void 0:t.src))return(0,r.jsx)("img",{className:"controlbar-item__img",src:null===(o=l.image)||void 0===o?void 0:o.src,alt:"img"})}return""},[n]);return(0,l.useMemo)(function(){return{onRenderContentControlbarItem:s,onCheckIsShowContentControlbarItem:d}},[s,d])}},13206:function(e,t,n){n.r(t);var o=n(72253),r=n(14932),l=n(91309),a=n(85893),i=n(226),c=n(61935),u=n(94055),d=n(67294),s=n(25617),p=n(58673),f=n(42901),m=n(15924),v=void 0,h=(0,d.memo)(function(e){var t,n,h,g,b,y,C,S=e.krpanoRef,w=m.sk?{}:window.languages||{},x=(0,f.p)(),_=x.onCheckIsShowContentControlbarItem,j=x.onRenderContentControlbarItem,k=(0,s.v9)(c.g5),E=(0,s.v9)(c.us),I=(0,l._)((0,p.tf)("stats"),2),N=I[0],O=I[1],G=(0,d.useCallback)(function(){return O(function(e){return(0,r._)((0,o._)({},e),{isShowControlbar:!e.isShowControlbar})})},[O]),P=(0,i.Q)({krpanoRef:S}),H=P.onFullscreen,T=P.onToggleGyro,$=P.onTurnOnScreenshotCapture,A=P.isShowIconFloorplan,M=P.onToggleFloorplan,Z=P.isShowIconDollhouse,z=P.onToggleDollhouseView,L=P.isShowIconMap,D=P.onToggleMap,R=P.isShowIconSoundProject,F=P.onTurnOffSoundProject,W=P.onTurnOnSoundProject;return(0,a.jsxs)("div",{className:"actGroup",children:[R&&_("sound_project_off")&&_("sound_project_on")&&(0,a.jsx)(u.default,{title:E.on?null===(t=w[k])||void 0===t?void 0:t.controlbarTurnOffSoundProject:null===(n=w[k])||void 0===n?void 0:n.controlbarTurnOnSoundProject,placement:"top",children:(0,a.jsx)("button",{type:"button",className:"act",onClick:E.on?F:W,children:j(E.on?"sound_project_off":"sound_project_on")})}),Z&&_("dollhouse")&&(0,a.jsx)(u.default,{trigger:"hover",title:null===(h=w[k])||void 0===h?void 0:h.controlbarDollhouse,placement:"top",children:(0,a.jsx)("button",{type:"button",className:"act",onClick:z,children:j("dollhouse")})}),A&&_("floorplan")&&(0,a.jsx)(u.default,{trigger:"hover",title:null===(g=w[k])||void 0===g?void 0:g.controlbarFloorplan,placement:"top",children:(0,a.jsx)("button",{type:"button",className:"act",onClick:M.bind(v,void 0),children:j("floorplan")})}),L&&_("map")&&(0,a.jsx)(u.default,{trigger:"hover",title:null===(b=w[k])||void 0===b?void 0:b.controlbarMap,placement:"top",children:(0,a.jsx)("button",{type:"button",className:"act",onClick:D.bind(v,void 0),children:j("map")})}),_("screenshot_capture")&&(0,a.jsx)(u.default,{trigger:"hover",title:null===(y=w[k])||void 0===y?void 0:y.controlbarScreenshotCapture,placement:"top",children:(0,a.jsx)("button",{type:"button",className:"act ",onClick:$,children:j("screenshot_capture")})}),_("fullscreen")&&(0,a.jsx)(u.default,{trigger:"hover",title:null===(C=w[k])||void 0===C?void 0:C.controlbarFullscreen,placement:"top",children:(0,a.jsx)("button",{type:"button",className:"act ",onClick:H,children:j("fullscreen")})}),_("gyro")&&(0,a.jsx)("button",{type:"button",className:"act",onClick:T,children:j("gyro")}),(0,a.jsx)("button",{type:"button",className:"act act-toggle__controlbar show-on-mobile",onClick:G,children:(0,a.jsx)("i",{className:"fal fa-angle-down ".concat(N.isShowControlbar?"":"hide")})})]})});t.default=h},50344:function(e,t,n){n.d(t,{Z:function(){return function toArray(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];return o.Children.forEach(e,function(e){(null!=e||t.keepEmpty)&&(Array.isArray(e)?n=n.concat(toArray(e)):(0,r.isFragment)(e)&&e.props?n=n.concat(toArray(e.props.children,t)):n.push(e))}),n}}});var o=n(67294),r=n(11805)},45598:function(e,t,n){var o=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function toArray(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];return r.default.Children.forEach(e,function(e){(null!=e||t.keepEmpty)&&(Array.isArray(e)?n=n.concat(toArray(e)):(0,l.isFragment)(e)&&e.props?n=n.concat(toArray(e.props.children,t)):n.push(e))}),n};var r=o(n(67294)),l=n(11805)}}]);
//# sourceMappingURL=288.d12402d956b1f7af.js.map