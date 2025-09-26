import{j as e}from"./iframe-CahsdGLf.js";import{H as o}from"./Header-DfjVhoTQ.js";import{P as p}from"./Page-Ce5jZHnl.js";import{H as r}from"./HeaderLabel-Cr8jhajz.js";import"./preload-helper-D9Z9MdNV.js";import"./Helmet-BepEu-Tc.js";import"./Box-BIsVMJnm.js";import"./styled-BIrVN0LJ.js";import"./Grid-D6NKF8Xc.js";import"./Breadcrumbs-B3ucnL8g.js";import"./index-DnL3XN75.js";import"./Popover-D3lpIB-l.js";import"./Modal-7w9J3LZ4.js";import"./Portal-yGFKFLjG.js";import"./List-BN62T2kV.js";import"./ListContext-BQJ-6G7L.js";import"./ListItem-scSs5PZA.js";import"./Link-YmUVD0Dj.js";import"./lodash-CwBbdt2Q.js";import"./index-BGdmBl9c.js";import"./useAnalytics-CA8fvJIN.js";import"./useApp-CRqQKGH7.js";import"./Page-DiG5AgCz.js";import"./useMediaQuery-d-SASRBD.js";import"./Tooltip-CyYfTOpX.js";import"./Popper-D1WZgD9D.js";const N={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}}},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
  type: string;
  title: string;
  subtitle: string;
}) => {
  const {
    type
  } = args;
  return <Page themeId={type}>
      <Header {...args}>{labels}</Header>
    </Page>;
}`,...t.parameters?.docs?.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,N as default};
