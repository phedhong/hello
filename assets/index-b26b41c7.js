(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function x(){}function z(e){return e()}function I(){return Object.create(null)}function N(e){e.forEach(z)}function G(e){return typeof e=="function"}function J(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let C;function K(e,t){return C||(C=document.createElement("a")),C.href=t,e===C.href}function te(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function Q(e,t,n){e.insertBefore(t,n||null)}function q(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function P(e){return document.createTextNode(e)}function $(){return P(" ")}function ne(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function re(e){return Array.from(e.childNodes)}function oe(e,t){t=""+t,e.data!==t&&(e.data=t)}let T;function L(e){T=e}const y=[],D=[];let b=[];const F=[],se=Promise.resolve();let V=!1;function ie(){V||(V=!0,se.then(R))}function M(e){b.push(e)}const k=new Set;let v=0;function R(){if(v!==0)return;const e=T;do{try{for(;v<y.length;){const t=y[v];v++,L(t),le(t.$$)}}catch(t){throw y.length=0,v=0,t}for(L(null),y.length=0,v=0;D.length;)D.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];k.has(n)||(k.add(n),n())}b.length=0}while(y.length);for(;F.length;)F.pop()();V=!1,k.clear(),L(e)}function le(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}function ce(e){const t=[],n=[];b.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),b=t}const A=new Set;let fe;function U(e,t){e&&e.i&&(A.delete(e),e.i(t))}function ue(e,t,n,r){if(e&&e.o){if(A.has(e))return;A.add(e),fe.c.push(()=>{A.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function ae(e){e&&e.c()}function W(e,t,n,r){const{fragment:o,after_update:s}=e.$$;o&&o.m(t,n),r||M(()=>{const l=e.$$.on_mount.map(z).filter(G);e.$$.on_destroy?e.$$.on_destroy.push(...l):N(l),e.$$.on_mount=[]}),s.forEach(M)}function X(e,t){const n=e.$$;n.fragment!==null&&(ce(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(e,t){e.$$.dirty[0]===-1&&(y.push(e),ie(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(e,t,n,r,o,s,l,h=[-1]){const u=T;L(e);const i=e.$$={fragment:null,ctx:[],props:s,update:x,not_equal:o,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:I(),dirty:h,skip_bound:!1,root:t.target||u.$$.root};l&&l(i.root);let w=!1;if(i.ctx=n?n(e,t.props||{},(a,g,...E)=>{const p=E.length?E[0]:g;return i.ctx&&o(i.ctx[a],i.ctx[a]=p)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](p),w&&de(e,a)),g}):[],i.update(),w=!0,N(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const a=re(t.target);i.fragment&&i.fragment.l(a),a.forEach(q)}else i.fragment&&i.fragment.c();t.intro&&U(e.$$.fragment),W(e,t.target,t.anchor,t.customElement),R()}L(u)}class Z{$destroy(){X(this,1),this.$destroy=x}$on(t,n){if(!G(n))return x;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!te(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const he="/assets/svelte-a39f39b7.svg";function pe(e){let t,n,r,o,s;return{c(){t=d("button"),n=P("count is "),r=P(e[0])},m(l,h){Q(l,t,h),c(t,n),c(t,r),o||(s=ne(t,"click",e[1]),o=!0)},p(l,[h]){h&1&&oe(r,l[0])},i:x,o:x,d(l){l&&q(t),o=!1,s()}}}function me(e,t,n){let r=0;return[r,()=>{n(0,r+=1)}]}class ge extends Z{constructor(t){super(),Y(this,t,me,pe,J,{})}}function _e(e){let t,n,r,o,s,l,h,u,i,w,a,g,E,p,_,B,j,H,O,S;return _=new ge({}),{c(){t=d("main"),n=d("img"),o=$(),s=d("div"),l=d("a"),l.innerHTML='<img src="/vite.svg" class="logo svelte-c9fbf7" alt="Vite Logo"/>',h=$(),u=d("a"),i=d("img"),a=$(),g=d("h1"),g.textContent="Vite + Svelte",E=$(),p=d("div"),ae(_.$$.fragment),B=$(),j=d("p"),j.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!',H=$(),O=d("p"),O.textContent="Click on the Vite and Svelte logos to learn more",K(n.src,r="/vite-deno.svg")||f(n,"src",r),f(n,"alt","Vite with Deno"),f(l,"href","https://vitejs.dev"),f(l,"target","_blank"),f(l,"rel","noreferrer"),K(i.src,w=he)||f(i,"src",w),f(i,"class","logo svelte svelte-c9fbf7"),f(i,"alt","Svelte Logo"),f(u,"href","https://svelte.dev"),f(u,"target","_blank"),f(u,"rel","noreferrer"),f(p,"class","card"),f(O,"class","read-the-docs svelte-c9fbf7")},m(m,ee){Q(m,t,ee),c(t,n),c(t,o),c(t,s),c(s,l),c(s,h),c(s,u),c(u,i),c(t,a),c(t,g),c(t,E),c(t,p),W(_,p,null),c(t,B),c(t,j),c(t,H),c(t,O),S=!0},p:x,i(m){S||(U(_.$$.fragment,m),S=!0)},o(m){ue(_.$$.fragment,m),S=!1},d(m){m&&q(t),X(_)}}}class $e extends Z{constructor(t){super(),Y(this,t,null,_e,J,{})}}new $e({target:document.getElementById("app")});
