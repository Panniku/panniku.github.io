import{S as A,I as G,J as K,K as y,M as Z,g as b,U as l,a as g,N as T,O as x,P as j,Q as z,G as H,R as V,T as $,V as J,W as Q,u as M,X as W,L as X,H as k,Y as p,Z as ee,_ as re,a0 as U,a1 as ae,z as Y,m as ne,a2 as te,a3 as ie}from"./G4DG4vZQ.js";import{c as fe}from"./CHX2c5hx.js";function O(t,v=null,P){if(typeof t!="object"||t===null||A in t)return t;const o=z(t);if(o!==G&&o!==K)return t;var f=new Map,c=H(t),m=y(0);c&&f.set("length",y(t.length));var I;return new Proxy(t,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&j();var n=f.get(e);return n===void 0?(n=y(r.value),f.set(e,n)):g(n,O(r.value,I)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,y(l));else{if(c&&typeof e=="string"){var n=f.get("length"),a=Number(e);Number.isInteger(a)&&a<n.v&&g(n,a)}g(r,l),q(m)}return!0},get(i,e,r){var _;if(e===A)return t;var n=f.get(e),a=e in i;if(n===void 0&&(!a||(_=T(i,e))!=null&&_.writable)&&(n=y(O(a?i[e]:l,I)),f.set(e,n)),n!==void 0){var u=b(n);return u===l?void 0:u}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var n=f.get(e);n&&(r.value=b(n))}else if(r===void 0){var a=f.get(e),u=a==null?void 0:a.v;if(a!==void 0&&u!==l)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return r},has(i,e){var u;if(e===A)return!0;var r=f.get(e),n=r!==void 0&&r.v!==l||Reflect.has(i,e);if(r!==void 0||x!==null&&(!n||(u=T(i,e))!=null&&u.writable)){r===void 0&&(r=y(n?O(i[e],I):l),f.set(e,r));var a=b(r);if(a===l)return!1}return n},set(i,e,r,n){var R;var a=f.get(e),u=e in i;if(c&&e==="length")for(var _=r;_<a.v;_+=1){var w=f.get(_+"");w!==void 0?g(w,l):_ in i&&(w=y(l),f.set(_+"",w))}a===void 0?(!u||(R=T(i,e))!=null&&R.writable)&&(a=y(void 0),g(a,O(r,I)),f.set(e,a)):(u=a.v!==l,g(a,O(r,I)));var d=Reflect.getOwnPropertyDescriptor(i,e);if(d!=null&&d.set&&d.set.call(n,r),!u){if(c&&typeof e=="string"){var S=f.get("length"),E=Number(e);Number.isInteger(E)&&E>=S.v&&g(S,E+1)}q(m)}return!0},ownKeys(i){b(m);var e=Reflect.ownKeys(i).filter(a=>{var u=f.get(a);return u===void 0||u.v!==l});for(var[r,n]of f)n.v!==l&&!(r in i)&&e.push(r);return e},setPrototypeOf(){Z()}})}function q(t,v=1){g(t,t.v+v)}function F(t){for(var v=x,P=x;v!==null&&!(v.f&(ee|re));)v=v.parent;try{return U(v),t()}finally{U(P)}}function ve(t,v,P,o){var C;var f=(P&ae)!==0,c=!k||(P&p)!==0,m=(P&W)!==0,I=(P&te)!==0,i=!1,e;m?[e,i]=fe(()=>t[v]):e=t[v];var r=A in t||X in t,n=m&&(((C=T(t,v))==null?void 0:C.set)??(r&&v in t&&(s=>t[v]=s)))||void 0,a=o,u=!0,_=!1,w=()=>(_=!0,u&&(u=!1,I?a=M(o):a=o),a);e===void 0&&o!==void 0&&(n&&c&&V(),e=w(),n&&n(e));var d;if(c)d=()=>{var s=t[v];return s===void 0?w():(u=!0,_=!1,s)};else{var S=F(()=>(f?Y:ie)(()=>t[v]));S.f|=$,d=()=>{var s=b(S);return s!==void 0&&(a=void 0),s===void 0?a:s}}if(!(P&J))return d;if(n){var E=t.$$legacy;return function(s,h){return arguments.length>0?((!c||!h||E||i)&&n(h?d():s),s):d()}}var R=!1,B=!1,D=ne(e),N=F(()=>Y(()=>{var s=d(),h=b(D);return R?(R=!1,B=!0,h):(B=!1,D.v=s)}));return f||(N.equals=Q),function(s,h){if(arguments.length>0){const L=h?b(N):c&&m?O(s):s;return N.equals(L)||(R=!0,g(D,L),_&&a!==void 0&&(a=L),M(()=>b(N))),s}return b(N)}}export{O as a,ve as p};
