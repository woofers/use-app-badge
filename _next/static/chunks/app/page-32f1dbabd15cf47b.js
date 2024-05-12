(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1189:function(e,t,n){Promise.resolve().then(n.bind(n,702))},702:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var a=n(7573),s=n(9585);let i=()=>navigator.vendor.startsWith("Apple"),r=()=>"matchMedia"in window&&window.matchMedia("(display-mode: standalone), (display-mode: minimal-ui), (display-mode: window-controls-overlay)").matches,l=()=>"Notification"in window,o=()=>"undefined"!=typeof window&&"https:"===location.protocol&&l()&&r()&&navigator&&"setAppBadge"in navigator,d=async()=>{let{state:e}=await navigator.permissions.query({name:"notifications"});return e},c=async()=>{let e=await Notification.requestPermission();return"default"!==e?e:"denied"},p=e=>async(...t)=>{let n=m();if(!(e in navigator)||"denied"===n)throw new DOMException("Badge API not supported");if(!("unknown"!==n||await d()!=="granted"))throw new DOMException("Badge API permission denied");return await navigator[e](...t)},u=p("clearAppBadge"),f=p("setAppBadge"),m=()=>o()?i()?"unknown":"granted":"denied",w=async()=>{let e=m();return"unknown"===e&&(e=await d()),"prompt"===e&&(e=await c()),"denied"!==e},x=()=>Error("Badge API not supported"),g=e=>async()=>{throw x()},h={isAppBadgeSupported:()=>!1,clearAppBadge:g("clearAppBadge"),setAppBadge:g("setAppBadge"),requestAppBadgePermission:async()=>!1},b={isAppBadgeSupported:o,clearAppBadge:u,setAppBadge:f,requestAppBadgePermission:w},v=()=>h,y=()=>b,A=()=>()=>{},B=()=>{},N=function(){let{favIcon:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{favIcon:!1},{setAppBadge:t,clearAppBadge:a,isAppBadgeSupported:i,requestAppBadgePermission:r}=(0,s.useSyncExternalStore)(A,y,v),[l,o]=(0,s.useState)(),[d,c]=(0,s.useState)(0),[p,u]=(0,s.useState)(""),f=!!e,{src:w,badgeColor:g,badgeSize:h,textColor:b,updateMeta:N}=e||{},j=null==N||N,k=(0,s.useCallback)(async()=>{try{let e=await r();return o(e),e}catch(e){throw o(!1),e}},[r]),I=(0,s.useCallback)(()=>{let e=m();if("unknown"!==e)return"granted"===e;if(void 0===l)throw x();return l},[l]),C=(0,s.useCallback)(async e=>{try{await t(e)}catch(e){if(!f)throw e}c("number"!=typeof e||e)},[f,t]),E=(0,s.useCallback)(async()=>{try{await a()}catch(e){if(!f)throw e}c(0)},[a,f]),_=(0,s.useMemo)(()=>({set:C,clear:E,requestPermission:k,isAllowed:I,isSupported:i,count:d,countAsNumber:Number(d),icon:p}),[C,E,k,I,i,d,p]);return(0,s.useEffect)(()=>()=>{_.clear().catch(B)},[_.clear]),(0,s.useEffect)(()=>{if("granted"!==m()&&f){if("boolean"!=typeof d&&d<=0){u(w);return}(async()=>{let{generateIconFor:e}=await n.e(151).then(n.bind(n,2151));u(await e({src:w,content:d,badgeColor:g,badgeSize:h,textColor:b}))})().catch(B)}},[f,d,w,g,h,b,I]),(0,s.useEffect)(()=>{let e;if(!f)return;let t=()=>document.querySelector('link[rel="icon"]:not([media])')||{};if(j&&p){let n=t();n&&(void 0===e&&(e=n.href),n.href=p)}return()=>{let n=t();n&&void 0!==e&&(n.href=e)}},[p,j,f]),_};var j=n(9686);let k=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,a,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(a=e(t[n]))&&(s&&(s+=" "),s+=a);else for(n in t)t[n]&&(s&&(s+=" "),s+=n)}return s}(e))&&(a&&(a+=" "),a+=t);return a},I={loaded:!1,didPromptInstall:!1,canInstall:!1,install:()=>{},status:"unsupported"},C=I,E=e=>!!e&&"userChoice"in e,_=e=>{let t=()=>{};if(!("BeforeInstallPromptEvent"in window))return C={...C,loaded:!0},t;if("matchMedia"in window&&window.matchMedia("(display-mode: standalone), (display-mode: minimal-ui), (display-mode: window-controls-overlay)").matches)return C={...C,loaded:!0,status:"install"},t;let n=null;"onappinstalled"in window&&(n=setTimeout(()=>{C={...C,status:"install-not-open",loaded:!0,canInstall:!1},e()},350));let a=t=>{"number"==typeof n&&(clearTimeout(n),n=null),E(t)&&!C.canInstall&&(C={...C,loaded:!0,canInstall:!0,status:"initial",install:()=>{let n=async()=>{C={...C,didPromptInstall:!0,loaded:!0};let{outcome:n}=await t.prompt();"dismissed"===n&&(C={...C,status:"denied"}),e()};C.didPromptInstall||n()}},e()),t.preventDefault()},s=()=>{C={...C,loaded:!0,status:"install"},e()};return window.addEventListener("beforeinstallprompt",a),window.addEventListener("appinstalled",s),()=>{window.removeEventListener("beforeinstallprompt",a),window.removeEventListener("appinstalled",s),C=I}},S=()=>C,P=()=>{let{install:e,loaded:t,status:n}=(0,s.useSyncExternalStore)(_,S,S);return console.log(t,n),(0,s.useMemo)(()=>({install:e,status:t?n:"loading"}),[e,t,n])},M=()=>"navigator"in window,q=()=>M()&&"setAppBadge"in navigator,D=()=>M()&&navigator.vendor.startsWith("Apple"),O={initial:"bg-[#bde8ff]",denied:"bg-[#f3999d]",installed:"bg-[#bdffd4]",unsupported:"bg-[#feaf82]"},L=e=>{let{className:t,onClick:n,type:s="button",state:i,...r}=e;return(0,a.jsx)("button",{...r,onClick:n,className:k(t,O[i],n?"cursor-pointer":"cursor-not-allowed","mt-2 transform-[rotate(-2deg)] text-xs font-semibold px-3 py-[1px] rounded-xl text-background lowercase"),type:s})};function T(){let{set:e,clear:t,countAsNumber:n,isSupported:i,requestPermission:r}=N({favIcon:{src:j.default.src}});(0,s.useEffect)(()=>{let t=setTimeout(()=>e(1),50);return()=>{clearTimeout(t)}},[e]);let{install:l,status:o}=P(),d=i()?"install":o,c=n>99;return(0,a.jsx)("main",{className:"flex min-h-screen flex-col items-center grow",children:(0,a.jsx)("div",{className:k("w-[calc(100%-8px)] bg-background rounded-t-xl mt-1 flex flex-col items-center grow","[border-top:1px_solid_#434343]","[border-left:1px_solid_#434343]","[border-right:1px_solid_#434343]"),children:(0,a.jsxs)("div",{className:"flex flex-col items-center gap-y-2 py-10 w-[240px]",children:[(0,a.jsxs)("div",{className:"w-[188px]",children:[(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("h1",{className:"text-2xl font-bold w-[188px] pb-4",children:"use-app-badge"}),(0,a.jsx)("div",{className:"absolute top-[-12px] right-[-12px]",children:(0,a.jsx)("div",{className:k("bg-[#ff0000] inline-block p-5 rounded-full relative [transition:transform_ease-out_0.25s]",n>0?"[transform:scale(0.5)_translateX(13px)]":"[transform:scale(0)_translateX(13px)]"),children:(0,a.jsx)("div",{className:k(c?"text-[17px]":"text-2xl","font-bold absolute top-0 left-0 w-[40px] h-[40px] flex items-center justify-center"),children:c?"99+":n})})})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-y-2 w-[188px] items-start",children:[(0,a.jsx)("button",{className:"text-accent cursor-pointer lowercase",onClick:()=>void r(),children:"Request Permission"}),(0,a.jsx)("button",{className:"text-accent cursor-pointer lowercase",onClick:()=>void e(n+1),children:"Increment Badge Count"}),(0,a.jsx)("button",{className:"text-accent cursor-pointer lowercase",onClick:()=>void t(),children:"Clear Badge"})]}),(0,a.jsx)("div",{className:"flex flex-col gap-y-2 w-[188px] items-start pt-4 lowercase",children:(0,a.jsxs)("div",{children:["Supported: ",i()?"yes":"no"]})})]}),"loading"!==d&&(0,a.jsxs)("div",{className:"w-full flex justify-start pl-[24px]",children:["initial"===d&&(0,a.jsx)(L,{state:"initial",onClick:l,children:"Install Web App to see Demo"}),"denied"===d&&(0,a.jsx)(L,{state:"denied",disabled:!0,children:"Install Prompt Dismissed"}),("install"===d||"install-not-open"===d)&&(0,a.jsx)(L,{state:"installed",disabled:!0,children:"install-not-open"!==o?"Installed":"Installed but Not Open as an App"}),"unsupported"===d&&(0,a.jsx)(L,{state:"unsupported",disabled:!0,children:D()&&q()?"App must be Installed from Safari":"Unsupported Browser"})]})]})})})}},9686:function(e,t){"use strict";t.default={src:"/use-app-badge//_next/static/media/favicon.15bea314.ico",height:48,width:48,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[293,286,744],function(){return e(e.s=1189)}),_N_E=e.O()}]);