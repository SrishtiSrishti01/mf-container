(()=>{var e={305:(e,r,t)=>{Promise.all([t.e(822),t.e(178)]).then(t.bind(t,178))},252:(e,r,t)=>{"use strict";var n=new Error;e.exports=new Promise(((e,r)=>{if("undefined"!==typeof app1)return e();t.l("http://localhost:3000/remoteEntry.js",(t=>{if("undefined"!==typeof app1)return e();var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;n.message="Loading script failed.\n("+a+": "+o+")",n.name="ScriptExternalLoadError",n.type=a,n.request=o,r(n)}),"app1")})).then((()=>app1))}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={exports:{}};return e[n](o,o.exports,t),o.exports}t.m=e,t.c=r,t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},(()=>{var e,r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;t.t=function(n,a){if(1&a&&(n=this(n)),8&a)return n;if("object"===typeof n&&n){if(4&a&&n.__esModule)return n;if(16&a&&"function"===typeof n.then)return n}var o=Object.create(null);t.r(o);var i={};e=e||[null,r({}),r([]),r(r)];for(var u=2&a&&n;"object"==typeof u&&!~e.indexOf(u);u=r(u))Object.getOwnPropertyNames(u).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,t.d(o,i),o}})(),t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,n)=>(t.f[n](e,r),r)),[])),t.u=e=>"static/js/"+e+"."+{164:"f4e07650",178:"c09c574b",606:"66287f49",787:"98398de9",791:"213e38b0",822:"8a03180c"}[e]+".chunk.js",t.miniCssF=e=>"static/css/"+e+".f5391712.chunk.css",t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="mf-container:";t.l=(n,a,o,i)=>{if(e[n])e[n].push(a);else{var u,f;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==r+o){u=d;break}}u||(f=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",r+o),u.src=n),e[n]=[a];var p=(r,t)=>{u.onerror=u.onload=null,clearTimeout(c);var a=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((e=>e(t))),r)return r(t)},c=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),f&&document.head.appendChild(u)}}})(),t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={606:[606]},r={606:["default","./App1",252]};t.f.remotes=(n,a)=>{t.o(e,n)&&e[n].forEach((e=>{var n=t.R;n||(n=[]);var o=r[e];if(!(n.indexOf(o)>=0)){if(n.push(o),o.p)return a.push(o.p);var i=r=>{r||(r=new Error("Container missing")),"string"===typeof r.message&&(r.message+='\nwhile loading "'+o[1]+'" from '+o[2]),t.m[e]=()=>{throw r},o.p=0},u=(e,r,t,n,u,f)=>{try{var s=e(r,t);if(!s||!s.then)return u(s,n,f);var l=s.then((e=>u(e,n)),i);if(!f)return l;a.push(o.p=l)}catch(d){i(d)}},f=(e,r,t)=>u(r.get,o[1],n,0,s,t),s=r=>{o.p=1,t.m[e]=e=>{e.exports=r()}};u(t,o[2],0,0,((e,r,n)=>e?u(t.I,o[0],0,e,f,n):i()),1)}}))}})(),(()=>{t.S={};var e={},r={};t.I=(n,a)=>{a||(a=[]);var o=r[n];if(o||(o=r[n]={}),!(a.indexOf(o)>=0)){if(a.push(o),e[n])return e[n];t.o(t.S,n)||(t.S[n]={});var i=t.S[n],u="mf-container",f=(e,r,t,n)=>{var a=i[e]=i[e]||{},o=a[r];(!o||!o.loaded&&(!n!=!o.eager?n:u>o.from))&&(a[r]={get:t,from:u,eager:!!n})},s=[];if("default"===n)f("react-dom","18.2.0",(()=>Promise.all([t.e(164),t.e(822)]).then((()=>()=>t(164))))),f("react","18.2.0",(()=>t.e(791).then((()=>()=>t(791))))),(e=>{var r=e=>{return r="Initialization of sharing external failed: "+e,void("undefined"!==typeof console&&console.warn&&console.warn(r));var r};try{var o=t(e);if(!o)return;var i=e=>e&&e.init&&e.init(t.S[n],a);if(o.then)return s.push(o.then(i,r));var u=i(o);if(u&&u.then)return s.push(u.catch(r))}catch(f){r(f)}})(252);return s.length?e[n]=Promise.all(s).then((()=>e[n]=1)):e[n]=1}}})(),t.p="/mf-container/",(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},r=(r,t)=>{r=e(r),t=e(t);for(var n=0;;){if(n>=r.length)return n<t.length&&"u"!=(typeof t[n])[0];var a=r[n],o=(typeof a)[0];if(n>=t.length)return"u"==o;var i=t[n],u=(typeof i)[0];if(o!=u)return"o"==o&&"n"==u||"s"==u||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},n=(r,t)=>{if(0 in r){t=e(t);var a=r[0],o=a<0;o&&(a=-a-1);for(var i=0,u=1,f=!0;;u++,i++){var s,l,d=u<r.length?(typeof r[u])[0]:"";if(i>=t.length||"o"==(l=(typeof(s=t[i]))[0]))return!f||("u"==d?u>a&&!o:""==d!=o);if("u"==l){if(!f||"u"!=d)return!1}else if(f)if(d==l)if(u<=a){if(s!=r[u])return!1}else{if(o?s>r[u]:s<r[u])return!1;s!=r[u]&&(f=!1)}else if("s"!=d&&"n"!=d){if(o||u<=a)return!1;f=!1,u--}else{if(u<=a||l<d!=o)return!1;f=!1}else"s"!=d&&"n"!=d&&(f=!1,u--)}}var p=[],c=p.pop.bind(p);for(i=1;i<r.length;i++){var h=r[i];p.push(1==h?c()|c():2==h?c()&c():h?n(h,t):!c())}return!!c()},a=(e,t)=>{var n=e[t];return(t=Object.keys(n).reduce(((e,t)=>!e||r(e,t)?t:e),0))&&n[t]},o=(e,t,a)=>{var o=e[t];return(t=Object.keys(o).reduce(((e,t)=>n(a,t)&&(!e||r(e,t))?t:e),0))&&o[t]},i=e=>(e.loaded=1,e.get()),u=e=>function(r,n,a,o){var i=t.I(r);return i&&i.then?i.then(e.bind(e,r,t.S[r],n,a,o)):e(r,t.S[r],n,a,o)},f=u(((e,r,n,o)=>r&&t.o(r,n)?i(a(r,n)):o())),s=u(((e,r,n,a,u)=>{var f=r&&t.o(r,n)&&o(r,n,a);return f?i(f):u()})),l={},d={822:()=>s("default","react",[1,18,2,0],(()=>t.e(791).then((()=>()=>t(791))))),171:()=>f("default","react-dom",(()=>t.e(164).then((()=>()=>t(164))))),802:()=>f("default","react",(()=>t.e(791).then((()=>()=>t(791)))))},p={178:[171,802],822:[822]};t.f.consumes=(e,r)=>{t.o(p,e)&&p[e].forEach((e=>{if(t.o(l,e))return r.push(l[e]);var n=r=>{l[e]=0,t.m[e]=n=>{delete t.c[e],n.exports=r()}},a=r=>{delete l[e],t.m[e]=n=>{throw delete t.c[e],r}};try{var o=d[e]();o.then?r.push(l[e]=o.then(n).catch(a)):n(o)}catch(i){a(i)}}))}})(),(()=>{if("undefined"!==typeof document){var e=e=>new Promise(((r,n)=>{var a=t.miniCssF(e),o=t.p+a;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var a=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===r))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===r)return i}})(a,o))return r();((e,r,t,n,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=t=>{if(o.onerror=o.onload=null,"load"===t.type)n();else{var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||r,f=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=i,f.request=u,o.parentNode&&o.parentNode.removeChild(o),a(f)}},o.href=r,t?t.parentNode.insertBefore(o,t.nextSibling):document.head.appendChild(o)})(e,o,null,r,n)})),r={179:0};t.f.miniCss=(t,n)=>{r[t]?n.push(r[t]):0!==r[t]&&{178:1}[t]&&n.push(r[t]=e(t).then((()=>{r[t]=0}),(e=>{throw delete r[t],e})))}}})(),(()=>{var e={179:0};t.f.j=(r,n)=>{var a=t.o(e,r)?e[r]:void 0;if(0!==a)if(a)n.push(a[2]);else if(/^(606|822)$/.test(r))e[r]=0;else{var o=new Promise(((t,n)=>a=e[r]=[t,n]));n.push(a[2]=o);var i=t.p+t.u(r),u=new Error;t.l(i,(n=>{if(t.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,a[1](u)}}),"chunk-"+r,r)}};var r=(r,n)=>{var a,o,i=n[0],u=n[1],f=n[2],s=0;if(i.some((r=>0!==e[r]))){for(a in u)t.o(u,a)&&(t.m[a]=u[a]);if(f)f(t)}for(r&&r(n);s<i.length;s++)o=i[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkmf_container=self.webpackChunkmf_container||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();t(305)})();
//# sourceMappingURL=main.81f0923c.js.map