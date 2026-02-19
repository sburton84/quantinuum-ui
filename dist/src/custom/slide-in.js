'use client';
import{jsx as e}from"react/jsx-runtime";import r,{useRef as t}from"react";const n=n=>{const c=t(null);return r.useEffect(()=>{if(null!==c.current){const e=new IntersectionObserver(([e])=>{var r,t;e.isIntersecting&&(null===(r=c.current)||void 0===r||r.classList.add("animate-slide-up"),null===(t=c.current)||void 0===t||t.classList.remove("opacity-0"))});return e.observe(c.current),()=>e.disconnect()}},[]),e("div",Object.assign({className:"opacity-0",ref:c},{children:n.children}))};export{n as SlideIn};
//# sourceMappingURL=slide-in.js.map
