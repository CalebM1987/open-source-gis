import{d as m,r as u,c,o as y,i as h,a as f,b as r,n as v,j as p,h as i,f as N,t as g,k as s,l as B,m as b,w as C,p as k,g as S,q as T,s as $}from"./index-ETI-wgA1.js";const E=["data-trim","data-noescape"],R=m({__name:"CodeSnippet",props:{lang:{},code:{},dataTrim:{type:Boolean,default:!0},dataNoEscape:{type:Boolean,default:!0},dense:{type:Boolean,default:!1},large:{type:Boolean,default:!1},lineNumbers:{type:[String,Boolean]}},setup(a){const e=u(),t=u(),n=c(()=>a.large?t.value?{height:`${Math.min(document.body.clientHeight-(t.value.top+320),600)}px`}:{height:"55vh"}:{}),d=c(()=>a.lang?`language-${a.lang}`:"");return y(()=>{var o;e.value&&(t.value=e.value.getBoundingClientRect(),(o=h.value)==null||o.highlightBlock(e.value),a.lineNumbers&&e.value.setAttribute("data-line-numbers",typeof a.lineNumbers=="boolean"?"":a.lineNumbers))}),(o,l)=>(r(),f("pre",{class:p({"dense-code":o.dense}),style:v(n.value)},[l[0]||(l[0]=i("    ")),N("code",{ref_key:"codeRef",ref:e,class:p(d.value),"data-trim":o.dataTrim,"data-noescape":o.dataNoEscape},g(o.code),11,E),l[1]||(l[1]=i(`
  `))],6))}}),V=m({__name:"CodeSlide",props:{title:{},lang:{},code:{},dataTrim:{type:Boolean,default:!0},dataNoEscape:{type:Boolean,default:!0},dense:{type:Boolean,default:!1},large:{type:Boolean,default:!1},headerType:{default:"h4"},lineNumbers:{}},setup(a){return(e,t)=>(r(),f("section",null,[s(e.$slots,"header",{},()=>[e.title?(r(),B(k(e.headerType??"h4"),{key:0},{default:C(()=>[i(g(e.title),1)]),_:1})):b("",!0)]),s(e.$slots,"default",{},void 0),s(e.$slots,"code",{},()=>[S(R,T($({lang:e.lang,code:e.code,large:e.large,dense:e.dense,dataTrim:e.dataTrim,dataNoEscape:e.dataNoEscape,lineNumbers:e.lineNumbers})),null,16)]),s(e.$slots,"footer",{},void 0)]))}}),z=(a,e)=>{const t=a.__vccOpts||a;for(const[n,d]of e)t[n]=d;return t},D=z(V,[["__scopeId","data-v-74a11e56"]]);export{D as C,R as _};
