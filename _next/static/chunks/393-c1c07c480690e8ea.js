"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[393],{9912:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"addLocale",{enumerable:!0,get:function(){return r}}),n(2679);let r=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2774:function(e,t,n){function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(2679),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4260:function(e,t){let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},default:function(){return l},isEqualNode:function(){return i}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function o(e){let{type:t,props:n}=e,o=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?o[i]=!!n[e]:o.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:l}=n;return l?o.innerHTML=l.__html||"":i&&(o.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),o}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function l(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,o="";if(r){let{children:e}=r.props;o="string"==typeof e?e:Array.isArray(e)?e.join(""):""}o!==document.title&&(document.title=o),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),l=Number(r.content),a=[];for(let t=0,n=r.previousElementSibling;t<l;t++,n=(null==n?void 0:n.previousElementSibling)||null){var u;(null==n?void 0:null==(u=n.tagName)?void 0:u.toLowerCase())===e&&a.push(n)}let s=t.map(o).filter(e=>{for(let t=0,n=a.length;t<n;t++)if(i(a[t],e))return a.splice(t,1),!1;return!0});a.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),s.forEach(e=>n.insertBefore(e,r)),r.content=(l-a.length+s.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5658:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let r=n(6216),o=n(1665),i=n(7573),l=o._(n(7653)),a=r._(n(3458)),u=r._(n(4830)),s=n(4163),c=n(5135),f=n(9273);n(1673);let d=n(1917),p=r._(n(3804)),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/use-app-badge/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,n,r,o,i,l){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function g(e){let[t,n]=l.version.split(".",2),r=parseInt(t,10),o=parseInt(n,10);return r>18||18===r&&o>=3?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,l.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:o,height:a,width:u,decoding:s,className:c,style:f,fetchPriority:d,placeholder:p,loading:h,unoptimized:y,fill:b,onLoadRef:v,onLoadingCompleteRef:_,setBlurComplete:j,setShowAltText:P,sizesInput:w,onLoad:S,onError:O,...E}=e;return(0,i.jsx)("img",{...E,...g(d),loading:h,width:u,height:a,decoding:s,"data-nimg":b?"fill":"1",className:c,style:f,sizes:o,srcSet:r,src:n,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(O&&(e.src=e.src),e.complete&&m(e,p,v,_,j,y,w))},[n,p,v,_,j,O,y,w,t]),onLoad:e=>{m(e.currentTarget,p,v,_,j,y,w)},onError:e=>{P(!0),"empty"!==p&&j(!0),O&&O(e)}})});function b(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...g(n.fetchPriority)};return t&&a.default.preload?(a.default.preload(n.src,r),null):(0,i.jsx)(u.default,{children:(0,i.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let v=(0,l.forwardRef)((e,t)=>{let n=(0,l.useContext)(d.RouterContext),r=(0,l.useContext)(f.ImageConfigContext),o=(0,l.useMemo)(()=>{let e=h||r||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:a,onLoadingComplete:u}=e,m=(0,l.useRef)(a);(0,l.useEffect)(()=>{m.current=a},[a]);let g=(0,l.useRef)(u);(0,l.useEffect)(()=>{g.current=u},[u]);let[v,_]=(0,l.useState)(!1),[j,P]=(0,l.useState)(!1),{props:w,meta:S}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:v,showAltText:j});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{...w,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:_,setShowAltText:P,sizesInput:e.sizes,ref:t}),S.priority?(0,i.jsx)(b,{isAppRouter:!n,imgAttributes:w}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5469:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let r=n(6216),o=n(7573),i=r._(n(7653)),l=n(5913),a=n(5499),u=n(3570),s=n(6e3),c=n(9912),f=n(1917),d=n(5026),p=n(3868),h=n(2774),m=n(5923),g=n(5398),y=new Set;function b(e,t,n,r,o,i){if("undefined"!=typeof window&&(i||(0,a.isLocalURL)(t))){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(y.has(o))return;y.add(o)}Promise.resolve(i?e.prefetch(t,o):e.prefetch(t,n,r)).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let _=i.default.forwardRef(function(e,t){let n,r;let{href:u,as:y,children:_,prefetch:j=null,passHref:P,replace:w,shallow:S,scroll:O,locale:E,onClick:x,onMouseEnter:M,onTouchStart:R,legacyBehavior:C=!1,...I}=e;n=_,C&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let N=i.default.useContext(f.RouterContext),k=i.default.useContext(d.AppRouterContext),A=null!=N?N:k,L=!N,T=!1!==j,z=null===j?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:U,as:D}=i.default.useMemo(()=>{if(!N){let e=v(u);return{href:e,as:y?v(y):e}}let[e,t]=(0,l.resolveHref)(N,u,!0);return{href:e,as:y?(0,l.resolveHref)(N,y):t||e}},[N,u,y]),W=i.default.useRef(U),q=i.default.useRef(D);C&&(r=i.default.Children.only(n));let H=C?r&&"object"==typeof r&&r.ref:t,[F,B,K]=(0,p.useIntersection)({rootMargin:"200px"}),$=i.default.useCallback(e=>{(q.current!==D||W.current!==U)&&(K(),q.current=D,W.current=U),F(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[D,H,U,K,F]);i.default.useEffect(()=>{A&&B&&T&&b(A,U,D,{locale:E},{kind:z},L)},[D,U,B,E,T,null==N?void 0:N.locale,A,L,z]);let G={ref:$,onClick(e){C||"function"!=typeof x||x(e),C&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,n,r,o,l,u,s,c){let{nodeName:f}=e.currentTarget;if("A"===f.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,a.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==u||u;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:s,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};c?i.default.startTransition(d):d()}(e,A,U,D,w,S,O,E,L)},onMouseEnter(e){C||"function"!=typeof M||M(e),C&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),A&&(T||!L)&&b(A,U,D,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:z},L)},onTouchStart:function(e){C||"function"!=typeof R||R(e),C&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),A&&(T||!L)&&b(A,U,D,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:z},L)}};if((0,s.isAbsoluteUrl)(D))G.href=D;else if(!C||P||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,h.getDomainLocale)(D,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);G.href=t||(0,m.addBasePath)((0,c.addLocale)(D,e,null==N?void 0:N.defaultLocale))}return C?i.default.cloneElement(r,G):(0,o.jsx)("a",{...I,...G,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6790:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5913:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"resolveHref",{enumerable:!0,get:function(){return f}});let r=n(6537),o=n(3570),i=n(9084),l=n(6e3),a=n(2679),u=n(5499),s=n(7145),c=n(3929);function f(e,t,n){let f;let d="string"==typeof t?t:(0,o.formatWithValidation)(t),p=d.match(/^[a-zA-Z]{1,}:\/\//),h=p?d.slice(p[0].length):d;if((h.split("?",1)[0]||"").match(/(\/\/|\\)/)){console.error("Invalid href '"+d+"' passed to next/router in page: '"+e.pathname+"'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");let t=(0,l.normalizeRepeatedSlashes)(h);d=(p?p[0]:"")+t}if(!(0,u.isLocalURL)(d))return n?[d]:d;try{f=new URL(d.startsWith("#")?e.asPath:e.pathname,"http://n")}catch(e){f=new URL("/","http://n")}try{let e=new URL(d,f);e.pathname=(0,a.normalizePathTrailingSlash)(e.pathname);let t="";if((0,s.isDynamicRoute)(e.pathname)&&e.searchParams&&n){let n=(0,r.searchParamsToUrlQuery)(e.searchParams),{result:l,params:a}=(0,c.interpolateAs)(e.pathname,e.pathname,n);l&&(t=(0,o.formatWithValidation)({pathname:l,hash:e.hash,query:(0,i.omit)(n,a)}))}let l=e.origin===f.origin?e.href.slice(e.origin.length):e.href;return n?[l,t||l]:l}catch(e){return n?[d]:d}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5327:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return v},handleClientScriptLoad:function(){return g},initScriptLoader:function(){return y}});let r=n(6216),o=n(1665),i=n(7573),l=r._(n(3458)),a=o._(n(7653)),u=n(241),s=n(4260),c=n(6790),f=new Map,d=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],h=e=>{if(l.default.preinit){e.forEach(e=>{l.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:o=null,dangerouslySetInnerHTML:i,children:l="",strategy:a="afterInteractive",onError:u,stylesheets:c}=e,m=n||t;if(m&&d.has(m))return;if(f.has(t)){d.add(m),f.get(t).then(r,u);return}let g=()=>{o&&o(),d.add(m)},y=document.createElement("script"),b=new Promise((e,t)=>{y.addEventListener("load",function(t){e(),r&&r.call(this,t),g()}),y.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(i?(y.innerHTML=i.__html||"",g()):l?(y.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):"",g()):t&&(y.src=t,f.set(t,b)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();y.setAttribute(e,r)}"worker"===a&&y.setAttribute("type","text/partytown"),y.setAttribute("data-nscript",a),c&&h(c),document.body.appendChild(y)};function g(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))}):m(e)}function y(e){e.forEach(g),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}function b(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:o=null,strategy:s="afterInteractive",onError:f,stylesheets:p,...h}=e,{updateScripts:g,scripts:y,getIsSsr:b,appDir:v,nonce:_}=(0,a.useContext)(u.HeadManagerContext),j=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let e=t||n;j.current||(o&&e&&d.has(e)&&o(),j.current=!0)},[o,t,n]);let P=(0,a.useRef)(!1);if((0,a.useEffect)(()=>{!P.current&&("afterInteractive"===s?m(e):"lazyOnload"===s&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>m(e))})),P.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(g?(y[s]=(y[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:o,onError:f,...h}]),g(y)):b&&b()?d.add(t||n):b&&!b()&&m(e)),v){if(p&&p.forEach(e=>{l.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(l.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:_}:{as:"script",nonce:_}),(0,i.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,i.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===s&&n&&l.default.preload(n,h.integrity?{as:"script",integrity:h.integrity,nonce:_}:{as:"script",nonce:_})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let v=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3868:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let r=n(7653),o=n(6790),i="function"==typeof IntersectionObserver,l=new Map,a=[];function u(e){let{rootRef:t,rootMargin:n,disabled:u}=e,s=u||!i,[c,f]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(i){if(s||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},a.push(n),l.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8733:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(6216)._(n(7653)).default.createContext({})},9342:function(e,t){function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},8161:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return o}});let n=/[|\\{}()[\]^$+*?.-]/,r=/[|\\{}()[\]^$+*?.-]/g;function o(e){return n.test(e)?e.replace(r,"\\$&"):e}},4163:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),n(1673);let r=n(1059),o=n(5135);function i(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var n;let a,u,s,{src:c,sizes:f,unoptimized:d=!1,priority:p=!1,loading:h,className:m,quality:g,width:y,height:b,fill:v=!1,style:_,overrideSrc:j,onLoad:P,onLoadingComplete:w,placeholder:S="empty",blurDataURL:O,fetchPriority:E,layout:x,objectFit:M,objectPosition:R,lazyBoundary:C,lazyRoot:I,...N}=e,{imgConf:k,showAltText:A,blurComplete:L,defaultLoader:T}=t,z=k||o.imageConfigDefault;if("allSizes"in z)a=z;else{let e=[...z.deviceSizes,...z.imageSizes].sort((e,t)=>e-t),t=z.deviceSizes.sort((e,t)=>e-t);a={...z,allSizes:e,deviceSizes:t}}if(void 0===T)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let U=N.loader||T;delete N.loader,delete N.srcSet;let D="__next_img_default"in U;if(D){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=U;U=t=>{let{config:n,...r}=t;return e(r)}}if(x){"fill"===x&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[x];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[x];t&&!f&&(f=t)}let W="",q=l(y),H=l(b);if("object"==typeof(n=c)&&(i(n)||void 0!==n.src)){let e=i(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,s=e.blurHeight,O=O||e.blurDataURL,W=e.src,!v){if(q||H){if(q&&!H){let t=q/e.width;H=Math.round(e.height*t)}else if(!q&&H){let t=H/e.height;q=Math.round(e.width*t)}}else q=e.width,H=e.height}}let F=!p&&("lazy"===h||void 0===h);(!(c="string"==typeof c?c:W)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,F=!1),a.unoptimized&&(d=!0),D&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(d=!0),p&&(E="high");let B=l(g),K=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:R}:{},A?{}:{color:"transparent"},_),$=L||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:q,heightInt:H,blurWidth:u,blurHeight:s,blurDataURL:O||"",objectFit:K.objectFit})+'")':'url("'+S+'")',G=$?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:$}:{},V=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:i,sizes:l,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,l),c=u.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:u.map((e,r)=>a({config:t,src:n,quality:i,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:a({config:t,src:n,quality:i,width:u[c]})}}({config:a,src:c,unoptimized:d,width:q,quality:B,sizes:f,loader:U});return{props:{...N,loading:F?"lazy":h,fetchPriority:E,width:q,height:H,decoding:"async",className:m,style:{...K,...G},sizes:V.sizes,srcSet:V.srcSet,src:j||V.src},meta:{unoptimized:d,priority:p,placeholder:S,fill:v}}}},4830:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return m},defaultHead:function(){return f}});let r=n(6216),o=n(1665),i=n(7573),l=o._(n(7653)),a=r._(n(9605)),u=n(8733),s=n(241),c=n(9342);function f(e){void 0===e&&(e=!1);let t=[(0,i.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,i.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(1673);let p=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:n}=t;return e.reduce(d,[]).reverse().concat(f(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let i=!0,l=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){l=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?i=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!l)&&n.has(e)?i=!1:(n.add(e),r[t]=n)}}}}return i}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,l.useContext)(u.AmpStateContext),r=(0,l.useContext)(s.HeadManagerContext);return(0,i.jsx)(a.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,c.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1059:function(e,t){function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:i,objectFit:l}=e,a=r?40*r:t,u=o?40*o:n,s=a&&u?"viewBox='0 0 "+a+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},9273:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let r=n(6216)._(n(7653)),o=n(5135),i=r.default.createContext(o.imageConfigDefault)},5135:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},3804:function(e,t){function n(e){let{config:t,src:n,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},1917:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(6216)._(n(7653)).default.createContext(null)},3570:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return i},formatWithValidation:function(){return a},urlObjectKeys:function(){return l}});let r=n(1665)._(n(6537)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:n}=e,i=e.protocol||"",l=e.pathname||"",a=e.hash||"",u=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(s+=":"+e.port)),u&&"object"==typeof u&&(u=String(r.urlQueryToSearchParams(u)));let c=e.search||u&&"?"+u||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==s?(s="//"+(s||""),l&&"/"!==l[0]&&(l="/"+l)):s||(s=""),a&&"#"!==a[0]&&(a="#"+a),c&&"?"!==c[0]&&(c="?"+c),""+i+s+(l=l.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+a}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function a(e){return i(e)}},7145:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getSortedRoutes:function(){return r.getSortedRoutes},isDynamicRoute:function(){return o.isDynamicRoute}});let r=n(3963),o=n(9475)},3929:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"interpolateAs",{enumerable:!0,get:function(){return i}});let r=n(1889),o=n(1019);function i(e,t,n){let i="",l=(0,o.getRouteRegex)(e),a=l.groups,u=(t!==e?(0,r.getRouteMatcher)(l)(t):"")||n;i=e;let s=Object.keys(a);return s.every(e=>{let t=u[e]||"",{repeat:n,optional:r}=a[e],o="["+(n?"...":"")+e+"]";return r&&(o=(t?"":"/")+"["+o+"]"),n&&!Array.isArray(t)&&(t=[t]),(r||e in u)&&(i=i.replace(o,n?t.map(e=>encodeURIComponent(e)).join("/"):encodeURIComponent(t))||"/")})||(i=""),{params:s,result:i}}},9475:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicRoute",{enumerable:!0,get:function(){return i}});let r=n(3468),o=/\/\[[^/]+?\](?=\/|$)/;function i(e){return(0,r.isInterceptionRouteAppPath)(e)&&(e=(0,r.extractInterceptionRouteInformation)(e).interceptedRoute),o.test(e)}},5499:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});let r=n(6e3),o=n(3655);function i(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,o.hasBasePath)(n.pathname)}catch(e){return!1}}},9084:function(e,t){function n(e,t){let n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"omit",{enumerable:!0,get:function(){return n}})},6537:function(e,t){function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function i(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return i},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},1889:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return o}});let r=n(6e3);function o(e){let{re:t,groups:n}=e;return e=>{let o=t.exec(e);if(!o)return!1;let i=e=>{try{return decodeURIComponent(e)}catch(e){throw new r.DecodeError("failed to decode param")}},l={};return Object.keys(n).forEach(e=>{let t=n[e],r=o[t.pos];void 0!==r&&(l[e]=~r.indexOf("/")?r.split("/").map(e=>i(e)):t.repeat?[i(r)]:i(r))}),l}}},1019:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getNamedMiddlewareRegex:function(){return d},getNamedRouteRegex:function(){return f},getRouteRegex:function(){return u}});let r=n(3468),o=n(8161),i=n(74);function l(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let n=e.startsWith("...");return n&&(e=e.slice(3)),{key:e,repeat:n,optional:t}}function a(e){let t=(0,i.removeTrailingSlash)(e).slice(1).split("/"),n={},a=1;return{parameterizedRoute:t.map(e=>{let t=r.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&i){let{key:e,optional:r,repeat:u}=l(i[1]);return n[e]={pos:a++,repeat:u,optional:r},"/"+(0,o.escapeStringRegexp)(t)+"([^/]+?)"}if(!i)return"/"+(0,o.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:r}=l(i[1]);return n[e]={pos:a++,repeat:t,optional:r},t?r?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:n}}function u(e){let{parameterizedRoute:t,groups:n}=a(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:n}}function s(e){let{interceptionMarker:t,getSafeRouteKey:n,segment:r,routeKeys:i,keyPrefix:a}=e,{key:u,optional:s,repeat:c}=l(r),f=u.replace(/\W/g,"");a&&(f=""+a+f);let d=!1;(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=n()),a?i[f]=""+a+u:i[f]=u;let p=t?(0,o.escapeStringRegexp)(t):"";return c?s?"(?:/"+p+"(?<"+f+">.+?))?":"/"+p+"(?<"+f+">.+?)":"/"+p+"(?<"+f+">[^/]+?)"}function c(e,t){let n;let l=(0,i.removeTrailingSlash)(e).slice(1).split("/"),a=(n=0,()=>{let e="",t=++n;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),u={};return{namedParameterizedRoute:l.map(e=>{let n=r.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),i=e.match(/\[((?:\[.*\])|.+)\]/);if(n&&i){let[n]=e.split(i[0]);return s({getSafeRouteKey:a,interceptionMarker:n,segment:i[1],routeKeys:u,keyPrefix:t?"nxtI":void 0})}return i?s({getSafeRouteKey:a,segment:i[1],routeKeys:u,keyPrefix:t?"nxtP":void 0}):"/"+(0,o.escapeStringRegexp)(e)}).join(""),routeKeys:u}}function f(e,t){let n=c(e,t);return{...u(e),namedRegex:"^"+n.namedParameterizedRoute+"(?:/)?$",routeKeys:n.routeKeys}}function d(e,t){let{parameterizedRoute:n}=a(e),{catchAll:r=!0}=t;if("/"===n)return{namedRegex:"^/"+(r?".*":"")+"$"};let{namedParameterizedRoute:o}=c(e,!1);return{namedRegex:"^"+o+(r?"(?:(/.*)?)":"")+"$"}}},3963:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSortedRoutes",{enumerable:!0,get:function(){return r}});class n{insert(e){this._insert(e.split("/").filter(Boolean),[],!1)}smoosh(){return this._smoosh()}_smoosh(e){void 0===e&&(e="/");let t=[...this.children.keys()].sort();null!==this.slugName&&t.splice(t.indexOf("[]"),1),null!==this.restSlugName&&t.splice(t.indexOf("[...]"),1),null!==this.optionalRestSlugName&&t.splice(t.indexOf("[[...]]"),1);let n=t.map(t=>this.children.get(t)._smoosh(""+e+t+"/")).reduce((e,t)=>[...e,...t],[]);if(null!==this.slugName&&n.push(...this.children.get("[]")._smoosh(e+"["+this.slugName+"]/")),!this.placeholder){let t="/"===e?"/":e.slice(0,-1);if(null!=this.optionalRestSlugName)throw Error('You cannot define a route with the same specificity as a optional catch-all route ("'+t+'" and "'+t+"[[..."+this.optionalRestSlugName+']]").');n.unshift(t)}return null!==this.restSlugName&&n.push(...this.children.get("[...]")._smoosh(e+"[..."+this.restSlugName+"]/")),null!==this.optionalRestSlugName&&n.push(...this.children.get("[[...]]")._smoosh(e+"[[..."+this.optionalRestSlugName+"]]/")),n}_insert(e,t,r){if(0===e.length){this.placeholder=!1;return}if(r)throw Error("Catch-all must be the last part of the URL.");let o=e[0];if(o.startsWith("[")&&o.endsWith("]")){let n=o.slice(1,-1),l=!1;if(n.startsWith("[")&&n.endsWith("]")&&(n=n.slice(1,-1),l=!0),n.startsWith("...")&&(n=n.substring(3),r=!0),n.startsWith("[")||n.endsWith("]"))throw Error("Segment names may not start or end with extra brackets ('"+n+"').");if(n.startsWith("."))throw Error("Segment names may not start with erroneous periods ('"+n+"').");function i(e,n){if(null!==e&&e!==n)throw Error("You cannot use different slug names for the same dynamic path ('"+e+"' !== '"+n+"').");t.forEach(e=>{if(e===n)throw Error('You cannot have the same slug name "'+n+'" repeat within a single dynamic path');if(e.replace(/\W/g,"")===o.replace(/\W/g,""))throw Error('You cannot have the slug names "'+e+'" and "'+n+'" differ only by non-word symbols within a single dynamic path')}),t.push(n)}if(r){if(l){if(null!=this.restSlugName)throw Error('You cannot use both an required and optional catch-all route at the same level ("[...'+this.restSlugName+']" and "'+e[0]+'" ).');i(this.optionalRestSlugName,n),this.optionalRestSlugName=n,o="[[...]]"}else{if(null!=this.optionalRestSlugName)throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...'+this.optionalRestSlugName+']]" and "'+e[0]+'").');i(this.restSlugName,n),this.restSlugName=n,o="[...]"}}else{if(l)throw Error('Optional route parameters are not yet supported ("'+e[0]+'").');i(this.slugName,n),this.slugName=n,o="[]"}}this.children.has(o)||this.children.set(o,new n),this.children.get(o)._insert(e.slice(1),t,r)}constructor(){this.placeholder=!0,this.children=new Map,this.slugName=null,this.restSlugName=null,this.optionalRestSlugName=null}}function r(e){let t=new n;return e.forEach(e=>t.insert(e)),t.smoosh()}},9605:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(7653),o="undefined"==typeof window,i=o?()=>{}:r.useLayoutEffect,l=o?()=>{}:r.useEffect;function a(e){let{headManager:t,reduceComponentsToState:n}=e;function a(){if(t&&t.mountedInstances){let o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}if(o){var u;null==t||null==(u=t.mountedInstances)||u.add(e.children),a()}return i(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},6e3:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return y},NormalizeError:function(){return m},PageNotFoundError:function(){return g},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return u},getLocationOrigin:function(){return l},getURL:function(){return a},isAbsoluteUrl:function(){return i},isResSent:function(){return s},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return v}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function l(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function a(){let{href:e}=window.location,t=l();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&s(n))return r;if(!r)throw Error('"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);