import{j as a,I as _,am as n}from"./DNCD4mh8.js";function d(s,r,o,t){var i=s.__attributes??(s.__attributes={});_&&(i[r]=s.getAttribute(r),s.nodeName==="LINK")||i[r]!==(i[r]=o)&&(o==null?s.removeAttribute(r):typeof o!="string"&&g(s).includes(r)?s[r]=o:s.setAttribute(r,o))}var f=new Map;function g(s){var r=f.get(s.nodeName);if(r)return r;f.set(s.nodeName,r=[]);for(var o,t=s,i=Element.prototype;i!==t;){o=n(t);for(var p in o)o[p].set&&r.push(p);t=a(t)}return r}export{d as s};
