"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[811],{50811:function(e,t,n){n.d(t,{Z:function(){return E}});var o=n(1413),r=n(97685),i=n(45987),a=n(54535),l=n(93967),s=n.n(l),u=n(9220),c=n(34203);function getRoot(e){var t;return null==e||null===(t=e.getRootNode)||void 0===t?void 0:t.call(e)}function getShadowRoot(e){return getRoot(e) instanceof ShadowRoot?getRoot(e):null}var f=n(66680),p=n(7028),g=n(8410),d=n(31131),m=n(67294),v=n(87462),h=n(29372),y=n(42550);function Arrow(e){var t=e.prefixCls,n=e.align,o=e.arrow,r=e.arrowPos,i=o||{},a=i.className,l=i.content,u=r.x,c=r.y,f=m.useRef();if(!n||!n.points)return null;var p={position:"absolute"};if(!1!==n.autoArrow){var g=n.points[0],d=n.points[1],v=g[0],h=g[1],y=d[0],b=d[1];v!==y&&["t","b"].includes(v)?"t"===v?p.top=0:p.bottom=0:p.top=void 0===c?0:c,h!==b&&["l","r"].includes(h)?"l"===h?p.left=0:p.right=0:p.left=void 0===u?0:u}return m.createElement("div",{ref:f,className:s()("".concat(t,"-arrow"),a),style:p},l)}function Mask(e){var t=e.prefixCls,n=e.open,o=e.zIndex,r=e.mask,i=e.motion;return r?m.createElement(h.default,(0,v.Z)({},i,{motionAppear:!0,visible:n,removeOnLeave:!0}),function(e){var n=e.className;return m.createElement("div",{style:{zIndex:o},className:s()("".concat(t,"-mask"),n)})}):null}var b=m.memo(function(e){return e.children},function(e,t){return t.cache}),w=m.forwardRef(function(e,t){var n=e.popup,i=e.className,a=e.prefixCls,l=e.style,c=e.target,f=e.onVisibleChanged,p=e.open,d=e.keepDom,w=e.fresh,x=e.onClick,P=e.mask,M=e.arrow,k=e.arrowPos,C=e.align,E=e.motion,A=e.maskMotion,Z=e.forceRender,N=e.getPopupContainer,S=e.autoDestroy,R=e.portal,V=e.zIndex,L=e.onMouseEnter,O=e.onMouseLeave,T=e.onPointerEnter,z=e.ready,D=e.offsetX,B=e.offsetY,I=e.offsetR,W=e.offsetB,H=e.onAlign,Y=e.onPrepare,X=e.stretch,j=e.targetWidth,F=e.targetHeight,_="function"==typeof n?n():n,q=(null==N?void 0:N.length)>0,U=m.useState(!N||!q),J=(0,r.Z)(U,2),Q=J[0],$=J[1];if((0,g.Z)(function(){!Q&&q&&c&&$(!0)},[Q,q,c]),!Q)return null;var G="auto",K={left:"-1000vw",top:"-1000vh",right:G,bottom:G};if(z||!p){var ee,et=C.points,en=C.dynamicInset||(null===(ee=C._experimental)||void 0===ee?void 0:ee.dynamicInset),eo=en&&"r"===et[0][1],er=en&&"b"===et[0][0];eo?(K.right=I,K.left=G):(K.left=D,K.right=G),er?(K.bottom=W,K.top=G):(K.top=B,K.bottom=G)}var ei={};return X&&(X.includes("height")&&F?ei.height=F:X.includes("minHeight")&&F&&(ei.minHeight=F),X.includes("width")&&j?ei.width=j:X.includes("minWidth")&&j&&(ei.minWidth=j)),p||(ei.pointerEvents="none"),m.createElement(R,{open:Z||p||d,getContainer:N&&function(){return N(c)},autoDestroy:S},m.createElement(Mask,{prefixCls:a,open:p,zIndex:V,mask:P,motion:A}),m.createElement(u.default,{onResize:H,disabled:!p},function(e){return m.createElement(h.default,(0,v.Z)({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:Z,leavedClassName:"".concat(a,"-hidden")},E,{onAppearPrepare:Y,onEnterPrepare:Y,visible:p,onVisibleChanged:function(e){var t;null==E||null===(t=E.onVisibleChanged)||void 0===t||t.call(E,e),f(e)}}),function(n,r){var u=n.className,c=n.style,f=s()(a,u,i);return m.createElement("div",{ref:(0,y.sQ)(e,t,r),className:f,style:(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({"--arrow-x":"".concat(k.x||0,"px"),"--arrow-y":"".concat(k.y||0,"px")},K),ei),c),{},{boxSizing:"border-box",zIndex:V},l),onMouseEnter:L,onMouseLeave:O,onPointerEnter:T,onClick:x},M&&m.createElement(Arrow,{prefixCls:a,arrow:M,arrowPos:k,align:C}),m.createElement(b,{cache:!p&&!w},_))})}))}),x=m.forwardRef(function(e,t){var n=e.children,o=e.getTriggerDOMNode,r=(0,y.Yr)(n),i=m.useCallback(function(e){(0,y.mH)(t,o?o(e):e)},[o]),a=(0,y.x1)(i,n.ref);return r?m.cloneElement(n,{ref:a}):n}),P=m.createContext(null);function toArray(e){return e?Array.isArray(e)?e:[e]:[]}var M=n(5110);function getMotion(e,t,n,o){return t||(n?{motionName:"".concat(e,"-").concat(n)}:o?{motionName:o}:null)}function getWin(e){return e.ownerDocument.defaultView}function collectScroller(e){for(var t=[],n=null==e?void 0:e.parentElement,o=["hidden","scroll","clip","auto"];n;){var r=getWin(n).getComputedStyle(n);[r.overflowX,r.overflowY,r.overflow].some(function(e){return o.includes(e)})&&t.push(n),n=n.parentElement}return t}function toNum(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Number.isNaN(e)?t:e}function getPxValue(e){return toNum(parseFloat(e),0)}function getVisibleArea(e,t){var n=(0,o.Z)({},e);return(t||[]).forEach(function(e){if(!(e instanceof HTMLBodyElement||e instanceof HTMLHtmlElement)){var t=getWin(e).getComputedStyle(e),o=t.overflow,r=t.overflowClipMargin,i=t.borderTopWidth,a=t.borderBottomWidth,l=t.borderLeftWidth,s=t.borderRightWidth,u=e.getBoundingClientRect(),c=e.offsetHeight,f=e.clientHeight,p=e.offsetWidth,g=e.clientWidth,d=getPxValue(i),m=getPxValue(a),v=getPxValue(l),h=getPxValue(s),y=toNum(Math.round(u.width/p*1e3)/1e3),b=toNum(Math.round(u.height/c*1e3)/1e3),w=d*b,x=v*y,P=0,M=0;if("clip"===o){var k=getPxValue(r);P=k*y,M=k*b}var C=u.x+x-P,E=u.y+w-M,A=C+u.width+2*P-x-h*y-(p-g-v-h)*y,Z=E+u.height+2*M-w-m*b-(c-f-d-m)*b;n.left=Math.max(n.left,C),n.top=Math.max(n.top,E),n.right=Math.min(n.right,A),n.bottom=Math.min(n.bottom,Z)}}),n}function getUnitOffset(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n="".concat(t),o=n.match(/^(.*)\%$/);return o?e*(parseFloat(o[1])/100):parseFloat(n)}function getNumberOffset(e,t){var n=(0,r.Z)(t||[],2),o=n[0],i=n[1];return[getUnitOffset(e.width,o),getUnitOffset(e.height,i)]}function splitPoints(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return[e[0],e[1]]}function getAlignPoint(e,t){var n,o=t[0],r=t[1];return n="t"===o?e.y:"b"===o?e.y+e.height:e.y+e.height/2,{x:"l"===r?e.x:"r"===r?e.x+e.width:e.x+e.width/2,y:n}}function reversePoints(e,t){var n={t:"b",b:"t",l:"r",r:"l"};return e.map(function(e,o){return o===t?n[e]||"c":e}).join("")}var k=n(74902);n(80334);var C=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"],E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.Z;return m.forwardRef(function(t,n){var a,l,v,h,y,b,E,A,Z,N,S,R,V,L,O,T,z=t.prefixCls,D=void 0===z?"rc-trigger-popup":z,B=t.children,I=t.action,W=t.showAction,H=t.hideAction,Y=t.popupVisible,X=t.defaultPopupVisible,j=t.onPopupVisibleChange,F=t.afterPopupVisibleChange,_=t.mouseEnterDelay,q=t.mouseLeaveDelay,U=void 0===q?.1:q,J=t.focusDelay,Q=t.blurDelay,$=t.mask,G=t.maskClosable,K=t.getPopupContainer,ee=t.forceRender,et=t.autoDestroy,en=t.destroyPopupOnHide,eo=t.popup,er=t.popupClassName,ei=t.popupStyle,ea=t.popupPlacement,el=t.builtinPlacements,es=void 0===el?{}:el,eu=t.popupAlign,ec=t.zIndex,ef=t.stretch,ep=t.getPopupClassNameFromAlign,eg=t.fresh,ed=t.alignPoint,em=t.onPopupClick,ev=t.onPopupAlign,eh=t.arrow,ey=t.popupMotion,eb=t.maskMotion,ew=t.popupTransitionName,ex=t.popupAnimation,eP=t.maskTransitionName,eM=t.maskAnimation,ek=t.className,eC=t.getTriggerDOMNode,eE=(0,i.Z)(t,C),eA=m.useState(!1),eZ=(0,r.Z)(eA,2),eN=eZ[0],eS=eZ[1];(0,g.Z)(function(){eS((0,d.Z)())},[]);var eR=m.useRef({}),eV=m.useContext(P),eL=m.useMemo(function(){return{registerSubPopup:function(e,t){eR.current[e]=t,null==eV||eV.registerSubPopup(e,t)}}},[eV]),eO=(0,p.Z)(),eT=m.useState(null),ez=(0,r.Z)(eT,2),eD=ez[0],eB=ez[1],eI=m.useRef(null),eW=(0,f.Z)(function(e){eI.current=e,(0,c.Sh)(e)&&eD!==e&&eB(e),null==eV||eV.registerSubPopup(eO,e)}),eH=m.useState(null),eY=(0,r.Z)(eH,2),eX=eY[0],ej=eY[1],eF=m.useRef(null),e_=(0,f.Z)(function(e){(0,c.Sh)(e)&&eX!==e&&(ej(e),eF.current=e)}),eq=m.Children.only(B),eU=(null==eq?void 0:eq.props)||{},eJ={},eQ=(0,f.Z)(function(e){var t,n;return(null==eX?void 0:eX.contains(e))||(null===(t=getShadowRoot(eX))||void 0===t?void 0:t.host)===e||e===eX||(null==eD?void 0:eD.contains(e))||(null===(n=getShadowRoot(eD))||void 0===n?void 0:n.host)===e||e===eD||Object.values(eR.current).some(function(t){return(null==t?void 0:t.contains(e))||e===t})}),e$=getMotion(D,ey,ex,ew),eG=getMotion(D,eb,eM,eP),eK=m.useState(X||!1),e0=(0,r.Z)(eK,2),e1=e0[0],e2=e0[1],e3=null!=Y?Y:e1,e5=(0,f.Z)(function(e){void 0===Y&&e2(e)});(0,g.Z)(function(){e2(Y||!1)},[Y]);var e8=m.useRef(e3);e8.current=e3;var e4=m.useRef([]);e4.current=[];var e7=(0,f.Z)(function(e){var t;e5(e),(null!==(t=e4.current[e4.current.length-1])&&void 0!==t?t:e3)!==e&&(e4.current.push(e),null==j||j(e))}),e6=m.useRef(),clearDelay=function(){clearTimeout(e6.current)},triggerOpen=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;clearDelay(),0===t?e7(e):e6.current=setTimeout(function(){e7(e)},1e3*t)};m.useEffect(function(){return clearDelay},[]);var e9=m.useState(!1),te=(0,r.Z)(e9,2),tt=te[0],tn=te[1];(0,g.Z)(function(e){(!e||e3)&&tn(!0)},[e3]);var to=m.useState(null),tr=(0,r.Z)(to,2),ti=tr[0],ta=tr[1],tl=m.useState([0,0]),ts=(0,r.Z)(tl,2),tu=ts[0],tc=ts[1],setMousePosByEvent=function(e){tc([e.clientX,e.clientY])},tf=(a=ed?tu:eX,l=m.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:es[ea]||{}}),h=(v=(0,r.Z)(l,2))[0],y=v[1],b=m.useRef(0),E=m.useMemo(function(){return eD?collectScroller(eD):[]},[eD]),A=m.useRef({}),e3||(A.current={}),Z=(0,f.Z)(function(){if(eD&&a&&e3){var e,t,n,i,l,s,u,f=eD.ownerDocument,p=getWin(eD).getComputedStyle(eD),g=p.width,d=p.height,m=p.position,v=eD.style.left,h=eD.style.top,b=eD.style.right,w=eD.style.bottom,x=eD.style.overflow,P=(0,o.Z)((0,o.Z)({},es[ea]),eu),k=f.createElement("div");if(null===(e=eD.parentElement)||void 0===e||e.appendChild(k),k.style.left="".concat(eD.offsetLeft,"px"),k.style.top="".concat(eD.offsetTop,"px"),k.style.position=m,k.style.height="".concat(eD.offsetHeight,"px"),k.style.width="".concat(eD.offsetWidth,"px"),eD.style.left="0",eD.style.top="0",eD.style.right="auto",eD.style.bottom="auto",eD.style.overflow="hidden",Array.isArray(a))n={x:a[0],y:a[1],width:0,height:0};else{var C=a.getBoundingClientRect();n={x:C.x,y:C.y,width:C.width,height:C.height}}var Z=eD.getBoundingClientRect(),N=f.documentElement,S=N.clientWidth,R=N.clientHeight,V=N.scrollWidth,L=N.scrollHeight,O=N.scrollTop,T=N.scrollLeft,z=Z.height,D=Z.width,B=n.height,I=n.width,W=P.htmlRegion,H="visible",Y="visibleFirst";"scroll"!==W&&W!==Y&&(W=H);var X=W===Y,j=getVisibleArea({left:-T,top:-O,right:V-T,bottom:L-O},E),F=getVisibleArea({left:0,top:0,right:S,bottom:R},E),_=W===H?F:j,q=X?F:_;eD.style.left="auto",eD.style.top="auto",eD.style.right="0",eD.style.bottom="0";var U=eD.getBoundingClientRect();eD.style.left=v,eD.style.top=h,eD.style.right=b,eD.style.bottom=w,eD.style.overflow=x,null===(t=eD.parentElement)||void 0===t||t.removeChild(k);var J=toNum(Math.round(D/parseFloat(g)*1e3)/1e3),Q=toNum(Math.round(z/parseFloat(d)*1e3)/1e3);if(!(0===J||0===Q||(0,c.Sh)(a)&&!(0,M.Z)(a))){var $=P.offset,G=P.targetOffset,K=getNumberOffset(Z,$),ee=(0,r.Z)(K,2),et=ee[0],en=ee[1],eo=getNumberOffset(n,G),er=(0,r.Z)(eo,2),ei=er[0],el=er[1];n.x-=ei,n.y-=el;var ec=P.points||[],ef=(0,r.Z)(ec,2),ep=ef[0],eg=splitPoints(ef[1]),ed=splitPoints(ep),em=getAlignPoint(n,eg),eh=getAlignPoint(Z,ed),ey=(0,o.Z)({},P),eb=em.x-eh.x+et,ew=em.y-eh.y+en,ex=getIntersectionVisibleArea(eb,ew),eP=getIntersectionVisibleArea(eb,ew,F),eM=getAlignPoint(n,["t","l"]),ek=getAlignPoint(Z,["t","l"]),eC=getAlignPoint(n,["b","r"]),eE=getAlignPoint(Z,["b","r"]),eA=P.overflow||{},eZ=eA.adjustX,eN=eA.adjustY,eS=eA.shiftX,eR=eA.shiftY,supportAdjust=function(e){return"boolean"==typeof e?e:e>=0};syncNextPopupPosition();var eV=supportAdjust(eN),eL=ed[0]===eg[0];if(eV&&"t"===ed[0]&&(l>q.bottom||A.current.bt)){var eO=ew;eL?eO-=z-B:eO=eM.y-eE.y-en;var eT=getIntersectionVisibleArea(eb,eO),ez=getIntersectionVisibleArea(eb,eO,F);eT>ex||eT===ex&&(!X||ez>=eP)?(A.current.bt=!0,ew=eO,en=-en,ey.points=[reversePoints(ed,0),reversePoints(eg,0)]):A.current.bt=!1}if(eV&&"b"===ed[0]&&(i<q.top||A.current.tb)){var eB=ew;eL?eB+=z-B:eB=eC.y-ek.y-en;var eI=getIntersectionVisibleArea(eb,eB),eW=getIntersectionVisibleArea(eb,eB,F);eI>ex||eI===ex&&(!X||eW>=eP)?(A.current.tb=!0,ew=eB,en=-en,ey.points=[reversePoints(ed,0),reversePoints(eg,0)]):A.current.tb=!1}var eH=supportAdjust(eZ),eY=ed[1]===eg[1];if(eH&&"l"===ed[1]&&(u>q.right||A.current.rl)){var eX=eb;eY?eX-=D-I:eX=eM.x-eE.x-et;var ej=getIntersectionVisibleArea(eX,ew),eF=getIntersectionVisibleArea(eX,ew,F);ej>ex||ej===ex&&(!X||eF>=eP)?(A.current.rl=!0,eb=eX,et=-et,ey.points=[reversePoints(ed,1),reversePoints(eg,1)]):A.current.rl=!1}if(eH&&"r"===ed[1]&&(s<q.left||A.current.lr)){var e_=eb;eY?e_+=D-I:e_=eC.x-ek.x-et;var eq=getIntersectionVisibleArea(e_,ew),eU=getIntersectionVisibleArea(e_,ew,F);eq>ex||eq===ex&&(!X||eU>=eP)?(A.current.lr=!0,eb=e_,et=-et,ey.points=[reversePoints(ed,1),reversePoints(eg,1)]):A.current.lr=!1}syncNextPopupPosition();var eJ=!0===eS?0:eS;"number"==typeof eJ&&(s<F.left&&(eb-=s-F.left-et,n.x+I<F.left+eJ&&(eb+=n.x-F.left+I-eJ)),u>F.right&&(eb-=u-F.right-et,n.x>F.right-eJ&&(eb+=n.x-F.right+eJ)));var eQ=!0===eR?0:eR;"number"==typeof eQ&&(i<F.top&&(ew-=i-F.top-en,n.y+B<F.top+eQ&&(ew+=n.y-F.top+B-eQ)),l>F.bottom&&(ew-=l-F.bottom-en,n.y>F.bottom-eQ&&(ew+=n.y-F.bottom+eQ)));var e$=Z.x+eb,eG=Z.y+ew,eK=n.x,e0=n.y;null==ev||ev(eD,ey);var e1=U.right-Z.x-(eb+Z.width),e2=U.bottom-Z.y-(ew+Z.height);1===J&&(eb=Math.round(eb),e1=Math.round(e1)),1===Q&&(ew=Math.round(ew),e2=Math.round(e2)),y({ready:!0,offsetX:eb/J,offsetY:ew/Q,offsetR:e1/J,offsetB:e2/Q,arrowX:((Math.max(e$,eK)+Math.min(e$+D,eK+I))/2-e$)/J,arrowY:((Math.max(eG,e0)+Math.min(eG+z,e0+B))/2-eG)/Q,scaleX:J,scaleY:Q,align:ey})}function getIntersectionVisibleArea(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:_,o=Z.x+e,r=Z.y+t,i=Math.max(o,n.left),a=Math.max(r,n.top);return Math.max(0,(Math.min(o+D,n.right)-i)*(Math.min(r+z,n.bottom)-a))}function syncNextPopupPosition(){l=(i=Z.y+ew)+z,u=(s=Z.x+eb)+D}}}),N=function(){y(function(e){return(0,o.Z)((0,o.Z)({},e),{},{ready:!1})})},(0,g.Z)(N,[ea]),(0,g.Z)(function(){e3||N()},[e3]),[h.ready,h.offsetX,h.offsetY,h.offsetR,h.offsetB,h.arrowX,h.arrowY,h.scaleX,h.scaleY,h.align,function(){b.current+=1;var e=b.current;Promise.resolve().then(function(){b.current===e&&Z()})}]),tp=(0,r.Z)(tf,11),tg=tp[0],td=tp[1],tm=tp[2],tv=tp[3],th=tp[4],ty=tp[5],tb=tp[6],tw=tp[7],tx=tp[8],tP=tp[9],tM=tp[10],tk=(S=void 0===I?"hover":I,m.useMemo(function(){var e=toArray(null!=W?W:S),t=toArray(null!=H?H:S),n=new Set(e),o=new Set(t);return eN&&(n.has("hover")&&(n.delete("hover"),n.add("click")),o.has("hover")&&(o.delete("hover"),o.add("click"))),[n,o]},[eN,S,W,H])),tC=(0,r.Z)(tk,2),tE=tC[0],tA=tC[1],tZ=tE.has("click"),tN=tA.has("click")||tA.has("contextMenu"),tS=(0,f.Z)(function(){tt||tM()});R=function(){e8.current&&ed&&tN&&triggerOpen(!1)},(0,g.Z)(function(){if(e3&&eX&&eD){var e=collectScroller(eX),t=collectScroller(eD),n=getWin(eD),o=new Set([n].concat((0,k.Z)(e),(0,k.Z)(t)));function notifyScroll(){tS(),R()}return o.forEach(function(e){e.addEventListener("scroll",notifyScroll,{passive:!0})}),n.addEventListener("resize",notifyScroll,{passive:!0}),tS(),function(){o.forEach(function(e){e.removeEventListener("scroll",notifyScroll),n.removeEventListener("resize",notifyScroll)})}}},[e3,eX,eD]),(0,g.Z)(function(){tS()},[tu,ea]),(0,g.Z)(function(){e3&&!(null!=es&&es[ea])&&tS()},[JSON.stringify(eu)]);var tR=m.useMemo(function(){var e=function(e,t,n,o){for(var r=n.points,i=Object.keys(e),a=0;a<i.length;a+=1){var l,s=i[a];if(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0;return n?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}(null===(l=e[s])||void 0===l?void 0:l.points,r,o))return"".concat(t,"-placement-").concat(s)}return""}(es,D,tP,ed);return s()(e,null==ep?void 0:ep(tP))},[tP,ep,es,D,ed]);m.useImperativeHandle(n,function(){return{nativeElement:eF.current,popupElement:eI.current,forceAlign:tS}});var tV=m.useState(0),tL=(0,r.Z)(tV,2),tO=tL[0],tT=tL[1],tz=m.useState(0),tD=(0,r.Z)(tz,2),tB=tD[0],tI=tD[1],syncTargetSize=function(){if(ef&&eX){var e=eX.getBoundingClientRect();tT(e.width),tI(e.height)}};function wrapperAction(e,t,n,o){eJ[e]=function(r){var i;null==o||o(r),triggerOpen(t,n);for(var a=arguments.length,l=Array(a>1?a-1:0),s=1;s<a;s++)l[s-1]=arguments[s];null===(i=eU[e])||void 0===i||i.call.apply(i,[eU,r].concat(l))}}(0,g.Z)(function(){ti&&(tM(),ti(),ta(null))},[ti]),(tZ||tN)&&(eJ.onClick=function(e){var t;e8.current&&tN?triggerOpen(!1):!e8.current&&tZ&&(setMousePosByEvent(e),triggerOpen(!0));for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];null===(t=eU.onClick)||void 0===t||t.call.apply(t,[eU,e].concat(o))}),V=void 0===G||G,(L=m.useRef(e3)).current=e3,m.useEffect(function(){if(tN&&eD&&(!$||V)){var onTriggerClose=function(e){var t=e.target;L.current&&!eQ(t)&&triggerOpen(!1)},e=getWin(eD);e.addEventListener("mousedown",onTriggerClose,!0),e.addEventListener("contextmenu",onTriggerClose,!0);var t=getShadowRoot(eX);return t&&(t.addEventListener("mousedown",onTriggerClose,!0),t.addEventListener("contextmenu",onTriggerClose,!0)),function(){e.removeEventListener("mousedown",onTriggerClose,!0),e.removeEventListener("contextmenu",onTriggerClose,!0),t&&(t.removeEventListener("mousedown",onTriggerClose,!0),t.removeEventListener("contextmenu",onTriggerClose,!0))}}},[tN,eX,eD,$,V]);var tW=tE.has("hover"),tH=tA.has("hover");tW&&(wrapperAction("onMouseEnter",!0,_,function(e){setMousePosByEvent(e)}),wrapperAction("onPointerEnter",!0,_,function(e){setMousePosByEvent(e)}),O=function(e){(e3||tt)&&null!=eD&&eD.contains(e.target)&&triggerOpen(!0,_)},ed&&(eJ.onMouseMove=function(e){var t;null===(t=eU.onMouseMove)||void 0===t||t.call(eU,e)})),tH&&(wrapperAction("onMouseLeave",!1,U),wrapperAction("onPointerLeave",!1,U),T=function(){triggerOpen(!1,U)}),tE.has("focus")&&wrapperAction("onFocus",!0,J),tA.has("focus")&&wrapperAction("onBlur",!1,Q),tE.has("contextMenu")&&(eJ.onContextMenu=function(e){var t;e8.current&&tA.has("contextMenu")?triggerOpen(!1):(setMousePosByEvent(e),triggerOpen(!0)),e.preventDefault();for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];null===(t=eU.onContextMenu)||void 0===t||t.call.apply(t,[eU,e].concat(o))}),ek&&(eJ.className=s()(eU.className,ek));var tY=(0,o.Z)((0,o.Z)({},eU),eJ),tX={};["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"].forEach(function(e){eE[e]&&(tX[e]=function(){for(var t,n=arguments.length,o=Array(n),r=0;r<n;r++)o[r]=arguments[r];null===(t=tY[e])||void 0===t||t.call.apply(t,[tY].concat(o)),eE[e].apply(eE,o)})});var tj=m.cloneElement(eq,(0,o.Z)((0,o.Z)({},tY),tX)),tF=eh?(0,o.Z)({},!0!==eh?eh:{}):null;return m.createElement(m.Fragment,null,m.createElement(u.default,{disabled:!e3,ref:e_,onResize:function(){syncTargetSize(),tS()}},m.createElement(x,{getTriggerDOMNode:eC},tj)),m.createElement(P.Provider,{value:eL},m.createElement(w,{portal:e,ref:eW,prefixCls:D,popup:eo,className:s()(er,tR),style:ei,target:eX,onMouseEnter:O,onMouseLeave:T,onPointerEnter:O,zIndex:ec,open:e3,keepDom:tt,fresh:eg,onClick:em,mask:$,motion:e$,maskMotion:eG,onVisibleChanged:function(e){tn(!1),tM(),null==F||F(e)},onPrepare:function(){return new Promise(function(e){syncTargetSize(),ta(function(){return e})})},forceRender:ee,autoDestroy:et||en||!1,getPopupContainer:K,align:tP,arrow:tF,arrowPos:{x:ty,y:tb},ready:tg,offsetX:td,offsetY:tm,offsetR:tv,offsetB:th,onAlign:tS,stretch:ef,targetWidth:tO/tw,targetHeight:tB/tx})))})}(a.Z)},5110:function(e,t){t.Z=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var t=e.getBBox(),n=t.width,o=t.height;if(n||o)return!0}if(e.getBoundingClientRect){var r=e.getBoundingClientRect(),i=r.width,a=r.height;if(i||a)return!0}}return!1}},31131:function(e,t){t.Z=function(){if("undefined"==typeof navigator||"undefined"==typeof window)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null==e?void 0:e.substr(0,4))}}}]);
//# sourceMappingURL=811.e4f7592abaea58fd.js.map