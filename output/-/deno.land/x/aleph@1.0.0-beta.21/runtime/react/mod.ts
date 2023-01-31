import{createElement as fe,useCallback as Z,useContext as me,useEffect as ge,useMemo as ye,useRef as xe,useState as ee}from"/-/esm.sh/react@18.2.0?v=ldk94trc";var X="1.0.0-beta.21";var R=class extends Error{static async fromResponse(t){let r=t.status,a=await t.text(),n={};if(a.startsWith("{")&&a.endsWith("}"))try{let l=JSON.parse(a),{status:i,message:s,details:o,...p}=l;typeof i=="number"&&(r=i),typeof s=="string"&&(a=s),o===null||typeof o!="object"||Array.isArray(o)||Object.assign(n,o),Object.assign(n,p)}catch(l){}return new R(r,a,n)}constructor(t,r,a,n){super(r,n),this.status=void 0,this.details=void 0,this.status=t,this.details=a!=null?a:{}}};var he=`
.aleph--error-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  font-family: Inter,system-ui,-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji';
}
.aleph--error-modal .box {
  box-sizing: border-box;
  position: relative;
  max-width: 80%;
  max-height: 90%;
  overflow: auto;
  padding: 24px 30px;
  border-radius: 12px;
  border: 2px solid rgba(255, 0, 0, 0.8);
}
.aleph--error-modal pre {
  margin: 0;
  position: relative;
  line-height: 1.4;
}
.aleph--error-modal pre.source {
  margin: 8px 0;
  padding: 12px 0;
  line-height: 1.2;
  background: #f6f6f6;
}
.aleph--error-modal code {
  font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  font-size: 14px;
  color: rgba(255, 0, 0, 1);
}
.aleph--error-modal .actions {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 18px;
}
.aleph--error-modal .actions button {
  padding: 5px 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.2;
  color: #333;
  cursor: pointer;
}
.aleph--error-modal .actions button:hover {
  border-color: #aaa;
  background-color: rgba(255,255,255,0.9);
}
.aleph--error-modal .actions span {
  font-size: 14px;
  line-height: 1;
  color: #454545;
}
.aleph--error-modal .help-links {
  margin: 0;
  margin-top: 21px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 1;
  color: #bbb;
  border-top: 1px solid #ddd;
  padding-top: 15px;
}
.aleph--error-modal .help-links strong {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-weight: 500;
  color: #333;
}
.aleph--error-modal .help-links a {
  color: teal;
  text-decoration: none;
}
.aleph--error-modal .help-links a:hover {
  text-decoration: underline;
}
`,Xe=`
<div class="help-links">
  <strong>Aleph.js ${X}</strong>
  /
  <a href="https://alephjs.org/docs/error-handling" target="_blank">Documentation</a>
  &middot;
  <a href="https://github.com/alephjs/aleph.js/issues/new" target="_blank">Open Issue</a>
  &middot;
  <a href="https://discord.com/channels/775256646821085215/775259756041601044" target="_blank">Discord Help Channel</a>
</div>
`;if(globalThis.document){let e=document.createElement("style");e.appendChild(document.createTextNode(he)),document.head.appendChild(e)}import{createContext as K}from"/-/esm.sh/react@18.2.0?v=ldk94trc";var T=K({url:new URL("http://localhost/"),params:{}});T.displayName="RouterContext";var O=K({data:void 0,isMutating:!1,mutation:{post:()=>Promise.resolve(new Response(null)),put:()=>Promise.resolve(new Response(null)),patch:()=>Promise.resolve(new Response(null)),delete:()=>Promise.resolve(new Response(null))},reload:()=>Promise.resolve(void 0)});O.displayName="DataContext";var _=K({props:{}});_.displayName="ForwardPropsContext";var te=({dataUrl:e,dataCache:t,children:r})=>{let a=xe(),[n,l]=ee(()=>{let u=t.get(e);if(u){if(typeof u.data=="function"){let c=u.data();if(c instanceof Promise)return c.then(d=>{t.set(e,{data:d}),a.current=d}).catch(d=>{t.set(e,{data:d}),a.current=d});throw Error(`Data for ${e} has invalid type [function].`)}return u.data}throw Error(`Data for ${e} is not found`)}),[i,s]=ee(!1),o=Z(async(u,c,d)=>{var f,y,v;let w,C=d&&typeof d=="object"&&d!==null,b=C&&typeof d.optimisticUpdate=="function",k=d==="replace"||C&&!!d.replace;if(b){let x=d.optimisticUpdate;l(S=>S!==void 0?(w=S,x(we(S))):S)}s(u);let h=await c;if(h.status>=400){let x=await R.fromResponse(h),S=x.details;if(x.status===501&&typeof((f=S.redirect)==null?void 0:f.location)=="string")return location.href=(y=S.redirect)==null?void 0:y.location,h;if(b)return w!==void 0&&l(w),d.onFailure&&d.onFailure(x),s(!1),h;throw x}if(k&&h.ok)try{let x=await h.json(),S=(v=t.get(e))==null?void 0:v.dataCacheTtl;t.set(e,{data:x,dataCacheTtl:S,dataExpires:Date.now()+1e3*(S||1)}),l(x)}catch(x){b&&(w!==void 0&&l(w),d.onFailure&&d.onFailure(new R(500,"Data must be valid JSON")))}return s(!1),h},[e]),p=Z(async u=>{try{let f=await fetch(e+(e.includes("?")?"&":"?")+"_data_",{signal:u});if(!f.ok){var c,d;let y=await R.fromResponse(f),v=y.details;throw y.status===501&&typeof((c=v.redirect)==null?void 0:c.location)=="string"&&(location.href=(d=v.redirect)==null?void 0:d.location,await new Promise(()=>{})),y}try{let y=await f.json(),v=f.headers.get("Cache-Control"),w=v&&v.includes("max-age=")?parseInt(v.split("max-age=")[1]):void 0,C=Date.now()+1e3*(w||1);t.set(e,{data:y,dataExpires:C}),l(y)}catch(y){throw new R(500,"Data must be valid JSON")}}catch(f){throw Error(`Failed to reload data for ${e}: ${f.message}`)}},[e]),g=ye(()=>({post:(u,c)=>o("post",U("post",e,u),c!=null?c:"none"),put:(u,c)=>o("put",U("put",e,u),c!=null?c:"none"),patch:(u,c)=>o("patch",U("patch",e,u),c!=null?c:"none"),delete:(u,c)=>o("delete",U("delete",e,u),c!=null?c:"none")}),[e]);return ge(()=>{let u=Date.now(),c=t.get(e),d=null;return c===void 0||c.data!==void 0&&(c.dataExpires===void 0||c.dataExpires<u)?p((d=new AbortController).signal).finally(()=>{d=null}):c.data!==void 0&&l(c.data),()=>d==null?void 0:d.abort()},[e]),fe(O.Provider,{value:{deferedData:a,data:n,isMutating:i,mutation:g,reload:p}},r)},ve=()=>{let{deferedData:e,data:t,...r}=me(O);if(t instanceof Error)throw t;if(t instanceof Promise){if((e==null?void 0:e.current)instanceof Error)throw e.current;if((e==null?void 0:e.current)!==void 0)return{...r,data:e.current};throw t}return{data:t,...r}};function U(e,t,r){let a,n=new Headers([["Accept","application/json"]]);return typeof r=="string"?a=r:typeof r=="number"?a=r.toString():typeof r=="object"&&(r instanceof ArrayBuffer||r instanceof Uint8Array||r instanceof FormData||r instanceof URLSearchParams?a=r:r instanceof Blob?(a=r,n.append("Content-Type",r.type)):(a=JSON.stringify(r),n.append("Content-Type","application/json; charset=utf-8"))),fetch(t,{method:e.toUpperCase(),body:a,headers:n})}function we(e){return e===null||typeof e!="object"?e:Array.isArray(e)?[...e]:{...e}}import{Children as be,createElement as Ce,Fragment as re,isValidElement as Ee,useContext as Se,useEffect as Pe,useMemo as ke}from"/-/esm.sh/react@18.2.0?v=ldk94trc";var m={utf8TextEncoder:new TextEncoder,utf8TextDecoder:new TextDecoder,isInt:e=>typeof e=="number"&&!Number.isNaN(e)&&Number.isInteger(e),isUint(e){return this.isInt(e)&&e>=0},isFilledString:e=>typeof e=="string"&&e.length>0,isFilledArray:e=>Array.isArray(e)&&e.length>0,isPlainObject:e=>e!==null&&typeof e=="object"&&Object.getPrototypeOf(e)===Object.prototype,isLikelyHttpURL(e){let t=e.slice(0,8).toLowerCase();return t==="https://"||t.slice(0,7)==="http://"},startsWithAny(e,...t){for(let r of t)if(e.startsWith(r))return!0;return!1},endsWithAny(e,...t){for(let r of t)if(e.endsWith(r))return!0;return!1},trimPrefix:(e,t)=>t!==""&&e.startsWith(t)?e.slice(t.length):e,trimSuffix:(e,t)=>t!==""&&e.endsWith(t)?e.slice(0,-t.length):e,pick(e,...t){let r={};for(let a of t)a in e&&(r[a]=e[a]);return r},splitBy(e,t,r=!1){let a=r?e.lastIndexOf(t):e.indexOf(t);return a>=0?[e.slice(0,a),e.slice(a+t.length)]:[e,""]},toHex(e){return[...new Uint8Array(e)].map(r=>r.toString(16).padStart(2,"0")).join("")},async hmacSign(e,t,r="SHA-256"){let a=await crypto.subtle.importKey("raw",this.utf8TextEncoder.encode(t),{name:"HMAC",hash:{name:r}},!1,["sign","verify"]),n=await crypto.subtle.sign("HMAC",a,this.utf8TextEncoder.encode(e));return this.toHex(n)},async computeHash(e,t){return await crypto.subtle.digest(e,typeof t=="string"?this.utf8TextEncoder.encode(t):t).then(r=>this.toHex(r))},prettyBytes(e){let t=Math.floor(Math.log(e)/Math.log(1024));return`${Math.round(100*e/Math.pow(1024,t))/100}${["","K","M","G","T","P","E"][t]}B`},splitPath:e=>e.split(/[\/\\]+/g).filter(t=>t!==""&&t!==".").reduce((t,r)=>(r===".."?t.pop():t.push(r),t),[]),cleanPath(e){return"/"+this.splitPath(e).join("/")},debounce(e,t){let r;return function(a,...n){r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,e(...n)},t)}}};var Re=e=>{let{ssrHeadCollection:t}=Se(T),[r,a]=ke(()=>Te(e.children),[e.children]);return t&&r.forEach(({type:n,props:l})=>{let{children:i,...s}=l;if(n==="title")m.isFilledString(i)?t.push(`<title ssr>${i}</title>`):m.isFilledArray(i)&&t.push(`<title ssr>${i.join("")}</title>`);else{let o=Object.entries(s).map(([p,g])=>` ${p}=${JSON.stringify(g)}`).join("");m.isFilledString(i)?t.push(`<${n}${o} ssr>${i}</${n}>`):m.isFilledArray(i)?t.push(`<${n}${o} ssr>${i.join("")}</${n}>`):t.push(`<${n}${o} ssr>`)}}),Pe(()=>{let{document:n}=window,{head:l}=n,i=[];return r.length>0&&r.forEach(({type:s,props:o})=>{let p=n.createElement(s);Object.keys(o).forEach(g=>{let u=o[g];g==="children"?m.isFilledString(u)?p.innerText=u:m.isFilledArray(u)&&(p.innerText=u.join("")):p.setAttribute(g,String(u||""))}),l.appendChild(p),i.push(p)}),Array.from(l.children).forEach(s=>{s.hasAttribute("ssr")&&l.removeChild(s)}),()=>{i.forEach(s=>l.removeChild(s))}},[r]),Ce(re,null,...a)};function Te(e){let t=[],r=a=>{be.forEach(a,n=>{if(!Ee(n))return;let{type:l,props:i}=n;switch(l){case re:r(i.children);break;case"base":case"title":case"meta":case"link":case"style":if(["base","meta","link"].includes(l)&&"children"in i){let{children:s,...o}=i;t.push({type:l,props:o})}else t.push({type:l,props:i})}})};return r(e),[t,[]]}import{createElement as ue,useCallback as We,useEffect as He,useMemo as N,useRef as Ie}from"/-/esm.sh/react@18.2.0?v=ldk94trc";function V(e){return{all:e=e||new Map,on:function(t,r){var a=e.get(t);a?a.push(r):e.set(t,[r])},off:function(t,r){var a=e.get(t);a&&(r?a.splice(a.indexOf(r)>>>0,1):e.set(t,[]))},emit:function(t,r){var a=e.get(t);a&&a.slice().map(function(n){n(r)}),(a=e.get("*"))&&a.slice().map(function(n){n(t,r)})}}}var E=V();var ae=!1,W=null,oe=e=>{E.off("routerready",oe),W&&(E.emit("popstate",{type:"popstate",url:W}),W=null),ae=!0};E.on("routerready",oe);function H(e,t){let{history:r,location:a}=globalThis;if(!m.isFilledString(e)||!r||!a)return;if(e.startsWith("file://")||e.startsWith("mailto:")||e.startsWith("data:")){a.href=e;return}let n=new URL(e,a.href);if(n.href!==a.href){if(n.host!==a.host){a.href=e;return}t?r.replaceState(null,"",n):r.pushState(null,"",n),ae?E.emit("popstate",{type:"popstate",url:n}):W=n}}import{createElement as P,isValidElement as Ae,StrictMode as $e,Suspense as Fe,useContext as le,useEffect as Me,useMemo as ne,useState as ie}from"/-/esm.sh/react@18.2.0?v=ldk94trc";var j=class{static execPathname(t,r){let a=m.splitPath(t),n=m.splitPath(r),l=Math.max(a.length,n.length),i={};for(let s=0;s<l;s++){let o=a[s],p=n[s];if(p===void 0||o===void 0)return null;if(o.startsWith(":")&&o.length>1){if(o.endsWith("+")&&o.length>2&&s===a.length-1){i[o.slice(1,-1)]=n.slice(s).map(decodeURIComponent).join("/");break}i[o.slice(1)]=decodeURIComponent(p)}else if(o!==p)return null}return{pathname:{input:r,groups:i}}}test(t){let{pattern:r}=this;return typeof r.test=="function"?r.test(t):(!m.isFilledString(r.host)||r.host===t.host)&&!!m.isFilledString(r.pathname)&&j.execPathname(r.pathname,t.pathname)!==null}exec(t){let{pattern:r}=this;if(typeof r.exec=="function")return r.exec(t);if(m.isFilledString(r.host)&&r.host!==t.host)return null;if(m.isFilledString(r.pathname)){let a=j.execPathname(r.pathname,t.pathname);if(a)return{...a,host:{input:t.host,groups:{}}}}return null}constructor(t){this.pattern=void 0,"URLPattern"in globalThis?this.pattern=new URLPattern(t):this.pattern=t}};function q(e,t){return{host:{input:e,groups:{}},pathname:{input:t,groups:{}}}}function G(e,t){let{routes:r,_app:a,_404:n}=t,{pathname:l}=e;l!=="/"&&(l=m.trimSuffix(l,"/"));let i=[];if(r.length>0){for(let[s,o]of r){let{pathname:p}=o.pattern;if(p!=="/_app"&&p!=="/_404"){let g=s.exec({host:e.host,pathname:l});if(g){i.push([g,o]);break}}}if(i.length===0){for(let[s,o]of r)if(o.pattern.pathname.endsWith("/index")){let p=s.exec({host:e.host,pathname:l+"/index"});if(p){i.push([p,o]);break}}}if(i.length>0){let s=i[i.length-1][1],o=m.splitPath(l),p=r.filter(([g,u])=>u.nesting&&u.pattern.pathname!=="/_app"&&s.pattern.pathname.startsWith(u.pattern.pathname+"/"));for(let g=o.length-1;g>0;g--){let u="/"+o.slice(0,g).join("/");for(let[c,d]of p){let f=c.exec({host:e.host,pathname:u});if(f){i.unshift([f,d]);break}}}if(s.nesting){for(let[g,u]of r)if(u.pattern.pathname===s.pattern.pathname+"/index"){let c=g.exec({host:e.host,pathname:l+"/index"});if(c){i.push([c,u]);break}}}}n&&(i.length===0||i.filter(([s,o])=>!o.nesting).length===0)&&i.push([q(e.host,"/_404"),n[1]]),a&&i.length>0&&i.unshift([q(e.host,"/_app"),a[1]])}return i}import{Component as je,createElement as I}from"/-/esm.sh/react@18.2.0?v=ldk94trc";var B=class extends je{static getDerivedStateFromError(t){return{error:t}}render(){return this.state.error instanceof Error?I(this.props.Handler,{error:this.state.error}):this.props.children}constructor(t){super(t),this.state={error:null}}};function J({error:{status:e,message:t},fullscreen:r}){return I("div",{style:r?{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh",fontSize:18}:{margin:"0",padding:"1.5rem 2rem",color:"red",fontSize:18}},e&&I("strong",{style:{fontWeight:"600"}},e),e&&I("small",{style:{opacity:.5,padding:"0 6px"}},"-"),t)}var pe=e=>{let{ssrContext:t,strictMode:r,createPortal:a}=e,[n,l]=ie(()=>{var u;return(t==null?void 0:t.url)||new URL((u=window.location)==null?void 0:u.href)}),[i,s]=ie(()=>(t==null?void 0:t.routing)||_e()),o=ne(()=>{let u=new Map;return i.forEach(({url:c,data:d,dataCacheTtl:f})=>{let y=c.pathname+c.search;d instanceof Promise?u.set(c.href,{data:se(u,y,!0)}):u.set(y,{data:d,dataCacheTtl:f,dataExpires:Date.now()+1e3*(f||1)})}),u},[]),p=ne(()=>{let u={};return i.forEach(c=>{Object.assign(u,c.params)}),u},[i]);if(Me(()=>{let{body:u}=window.document,c=Oe(),d=u.getAttribute("data-deployment-id"),f=C=>{let b=new URL(C.href,location.href);G(b,c).map(([h,x])=>{let{filename:S}=x;try{__aleph.getRouteModule(S)}catch(M){let A=document.createElement("link"),D=x.filename.slice(1);d&&(D+=`?v=${d}`),A.setAttribute("rel","modulepreload"),A.setAttribute("href",D),document.head.appendChild(A)}})},y=async C=>{let b=C.url||new URL(window.location.href),k=G(b,c),h=Ue(),x=setTimeout(()=>{x=null,h.style.opacity="1",h.style.width="50%"},300),S=await Promise.all(k.map(async([M,A])=>{let{filename:D}=A,$={url:new URL(M.pathname.input+b.search,b.href),params:M.pathname.groups,filename:D,exports:await __aleph.importRouteModule(D)},Q=$.url.pathname+$.url.search,F=$.exports.data;return $.withData=Boolean((F==null?void 0:F.get)||(F==null?void 0:F.GET)),$.withData&&!o.has(Q)&&await se(o,Q,F==null?void 0:F.defer),$}));s(S),l(b),setTimeout(()=>{if(x)clearTimeout(x),h.remove();else{let M=setTimeout(()=>{h.style.opacity="0"},700),A=setTimeout(()=>{L=null,h.remove()},1e3);L=()=>{clearTimeout(M),clearTimeout(A)},h.style.transition="opacity 0.3s ease-out, width 0.7s ease-in-out",setTimeout(()=>{h.style.width="100%"},0)}},0),C.url&&window.scrollTo(0,0)},v=C=>{let b=C.routePattern;if(b){let k=[new j(b),{filename:C.specifier,pattern:b}],h=b.pathname.slice(1);(h==="_app"||h==="_404")&&(c[h]=k),c.routes.push(k)}},w=C=>{var b;let k=c.routes.find(x=>x[1].filename===C.specifier),h=(b=k==null?void 0:k[1].pattern.pathname)==null?void 0:b.slice(1);(h==="_app"||h==="_404")&&(c[h]=void 0),c.routes=c.routes.filter(x=>x[1].filename!=C.specifier),y({type:"popstate"})};return addEventListener("popstate",y),E.on("popstate",y),E.on("moduleprefetch",f),E.on("hmr:create",v),E.on("hmr:remove",w),E.emit("routerready",{type:"routerready"}),()=>{removeEventListener("popstate",y),E.off("popstate",y),E.off("moduleprefetch",f),E.off("hmr:create",v),E.off("hmr:remove",w)}},[]),i.length===0)return P(J,{error:{status:404,message:"page not found"},fullscreen:!0});let g=P(T.Provider,{value:{url:n,params:p,e404:i[i.length-1].url.pathname==="/_404"||void 0,ssrHeadCollection:t==null?void 0:t.headCollection,createPortal:a}},P(ce,{modules:i,dataCache:o,ssrContext:t}));return r?P($e,{},g):g},ce=({modules:e,dataCache:t,ssrContext:r})=>{let a,{url:n,exports:l,withData:i}=e[0],s=n.pathname+n.search;if(typeof l.default=="function"){if(a=P(l.default,null,e.length>1&&P(ce,{modules:e.slice(1),dataCache:t,ssrContext:r})),i){let o=l.fallback||l.Fallback;a=P(Fe,{fallback:typeof o=="function"?P(o):typeof o=="object"&&Ae(o)?o:null},P(te,{dataCache:t,dataUrl:s,key:s},a))}}else a=P(J,{error:{status:500,message:"missing default export as a valid React component"}});return P(B,{Handler:J},a)},De=e=>P(pe,{...e,strictMode:!0}),z=()=>{let{url:e,params:t,e404:r}=le(T);return{url:e,params:t,e404:r,redirect:H}},Le=(e,t={})=>e==null||typeof e=="string"||typeof e=="number"||typeof e=="boolean"?e:P(_.Provider,{value:{props:t}},e),Ne=()=>{let{props:e}=le(_);return e};function Oe(){var e;let t=(e=window.document)==null?void 0:e.getElementById("router-manifest");if(t)try{let r=JSON.parse(t.innerText);if(Array.isArray(r.routes)){let a,n;return{routes:r.routes.map(i=>{let{pattern:s}=i,o=[new j(s),i];return s.pathname==="/_app"?a=o:s.pathname==="/_404"&&(n=o),o}),prefix:r.prefix,_app:a,_404:n}}}catch(r){throw Error(`loadRouteConfigFromTag: ${r.message}`)}return{routes:[],prefix:""}}async function se(e,t,r){let a={},n=async()=>{let l=await fetch(t+(t.includes("?")?"&":"?")+"_data_");if(!l.ok){var i,s;let o=await R.fromResponse(l),p=o.details;if(o.status===501&&typeof((i=p.redirect)==null?void 0:i.location)=="string"){location.href=(s=p.redirect)==null?void 0:s.location;return}return o}try{let o=await l.json(),p=l.headers.get("Cache-Control");return a.dataCacheTtl=p!=null&&p.includes("max-age=")?parseInt(p.split("max-age=")[1]):void 0,a.dataExpires=Date.now()+1e3*(a.dataCacheTtl||1),o}catch(o){return Error("Data must be valid JSON")}};r?a.data=n:a.data=await n(),e.set(t,a)}function _e(){var e;let t=(e=window.document)==null?void 0:e.getElementById("ssr-data");if(t)try{let r=JSON.parse(t.innerText);if(Array.isArray(r)){let a;return r.map(({url:n,filename:l,dataDefered:i,...s})=>{let o=__aleph.getRouteModule(l);if(i){if(a===void 0){var p;let g=(p=window.document)==null?void 0:p.getElementById("defered-data");a=g?JSON.parse(g.innerText):null}a?s.data=a[n]:s.data=Promise.resolve(null)}return s.error&&(s.data=new R(500,s.error.message,{stack:s.error.stack}),s.error=void 0),{url:new URL(n,location.href),filename:l,exports:o,...s}})}}catch(r){throw Error(`loadSSRModulesFromTag: ${r.message}`)}return[]}var L=null;function Ue(){typeof L=="function"&&(L(),L=null);let e=document.getElementById("loading-bar");return e||((e=document.createElement("div")).id="loading-bar",document.body.appendChild(e)),Object.assign(e.style,{position:"fixed",top:"0",left:"0",zIndex:"9999",width:"0",height:"1px",opacity:"0",background:"rgba(128, 128, 128, 0.9)",transition:"opacity 0.6s ease-in, width 3s ease-in"}),e}var Y=new Set;function de(e){let{to:t,prefetch:r,replace:a,className:n,style:l,onClick:i,onMouseEnter:s,onMouseLeave:o,"aria-current":p,children:g,innerRef:u,...c}=e,{url:{pathname:d}}=z(),f=N(()=>{if(!m.isFilledString(t))throw Error("<Link>: prop `to` is required.");if(m.isLikelyHttpURL(t))return t;let[h,x]=m.splitBy(t,"?");return[h=h.startsWith("/")?m.cleanPath(h):m.cleanPath(d+"/"+h),x].filter(Boolean).join("?")},[d,t]),y=N(()=>m.isFilledString(p)?p:f.startsWith("/")?"page":void 0,[f,p]),v=We(()=>{m.isLikelyHttpURL(f)||Y.has(f)||(E.emit("moduleprefetch",{href:f}),Y.add(f))},[f]),w=Ie(null),C=h=>{typeof s=="function"&&s(h),!h.defaultPrevented&&(w.current||Y.has(f)||(w.current=setTimeout(()=>{w.current=null,v()},150)))},b=h=>{typeof o=="function"&&o(h),!h.defaultPrevented&&w.current&&(clearTimeout(w.current),w.current=null)},k=h=>{typeof i=="function"&&i(h),h.defaultPrevented||Je(h)||(h.preventDefault(),H(f,a))};return He(()=>(r&&v(),()=>{w.current&&(clearTimeout(w.current),w.current=null)}),[r,v]),ue("a",{...c,className:n,style:l,href:f,onClick:k,onMouseEnter:C,onMouseLeave:b,"aria-current":y,ref:u},g)}function Be(e){let{to:t,exact:r,className:a,style:n,activeStyle:l,activeClassName:i,...s}=e,{url:o}=z(),p=N(()=>{let d;if(!m.isFilledString(t))return!1;let[f,y]=m.splitBy(t,"?"),v=m.trimSuffix(o.pathname,"/");return d=f.startsWith("/")?m.cleanPath(f):m.cleanPath(v+"/"+f),r?d===v&&y===o.searchParams.toString():d===v||v.startsWith(d+"/")},[o.pathname,o.searchParams,t,r]),g=N(()=>p&&i?[a,i].filter(m.isFilledString).join(" "):a,[a,i,p]),u=N(()=>p&&l?Object.assign({},n,l):n,[n,l,p]),c={...s,to:t,className:g,style:u};return p&&Object.assign(c,{"data-active":"true"}),ue(de,c)}function Je(e){let{target:t}=e.currentTarget,r=e.nativeEvent;return t&&t!=="_self"||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||r&&r.which===2}import{useCallback as ze,useContext as Ke,useEffect as Ve,useState as qe}from"/-/esm.sh/react@18.2.0?v=ldk94trc";function Ge(e){let{className:t,lockScroll:r,isDialog:a,key:n}=e||{},{createPortal:l}=Ke(T),[i,s]=qe(null);return Ve(()=>{let{body:o}=document,p=document.createElement(a?"dialog":"div");return n&&(p.id=n),t&&(p.className=t),r&&(o.style.overflow="hidden"),o.appendChild(p),s(p),a&&(Object.assign(p.style,{width:"100vw",height:"100vh",backgroundColor:"transparent"}),p.showModal==null||p.showModal()),()=>{s(null),o.removeChild(p),r&&(o.style.overflow="")}},[n,t,r,a]),ze(o=>{if(!i)return null;if(!l)throw Error("Please ensure to pass the `React.createPortal` in `Router` props");return l(o,i,n)},[i,l,n])}export{De as App,Re as Head,de as Link,Be as NavLink,pe as Router,Le as forwardProps,ve as useData,Ne as useForwardProps,Ge as usePortal,z as useRouter};
