import{d as m,r,c as i,o as y,i as h,a as p,b as n,n as v,j as u,h as d,f as N,t as c,k as s,l as B,m as b,w as C,p as S,g as T,q as k,s as $}from"./index-CW67Hl4D.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const R=["data-trim","data-noescape"],V=m({__name:"CodeSnippet",props:{lang:{},code:{},dataTrim:{type:Boolean,default:!0},dataNoEscape:{type:Boolean,default:!0},dense:{type:Boolean,default:!1},large:{type:Boolean,default:!1},lineNumbers:{type:[String,Boolean]}},setup(a){const e=r(),o=r(),f=i(()=>a.large?o.value?{height:`${Math.min(document.body.clientHeight-(o.value.top+320),600)}px`}:{height:"55vh"}:{}),g=i(()=>a.lang?`language-${a.lang}`:"");return y(()=>{var t;e.value&&(o.value=e.value.getBoundingClientRect(),(t=h.value)==null||t.highlightBlock(e.value),a.lineNumbers&&e.value.setAttribute("data-line-numbers",typeof a.lineNumbers=="boolean"?"":a.lineNumbers))}),(t,l)=>(n(),p("pre",{class:u({"dense-code":t.dense}),style:v(f.value)},[l[0]||(l[0]=d("    ")),N("code",{ref_key:"codeRef",ref:e,class:u(g.value),"data-trim":t.dataTrim,"data-noescape":t.dataNoEscape},c(t.code),11,R),l[1]||(l[1]=d(`
  `))],6))}}),z=m({__name:"CodeSlide",props:{title:{},lang:{},code:{},dataTrim:{type:Boolean,default:!0},dataNoEscape:{type:Boolean,default:!0},dense:{type:Boolean,default:!1},large:{type:Boolean,default:!1},headerType:{default:"h4"},lineNumbers:{}},setup(a){return(e,o)=>(n(),p("section",null,[s(e.$slots,"header",{},()=>[e.title?(n(),B(S(e.headerType??"h4"),{key:0},{default:C(()=>[d(c(e.title),1)]),_:1})):b("",!0)]),s(e.$slots,"default",{},void 0),s(e.$slots,"code",{},()=>[T(V,k($({lang:e.lang,code:e.code,large:e.large,dense:e.dense,dataTrim:e.dataTrim,dataNoEscape:e.dataNoEscape,lineNumbers:e.lineNumbers})),null,16)]),s(e.$slots,"footer",{},void 0)]))}}),M=E(z,[["__scopeId","data-v-74a11e56"]]);export{M as C,V as _};
