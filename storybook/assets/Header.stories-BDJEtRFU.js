import{j as e}from"./iframe-B9yZwi7m.js";import{H as o}from"./Header-DXcd3zMb.js";import{P as p}from"./Page-CCzgseqy.js";import{H as r}from"./HeaderLabel-26Bzw0NV.js";import"./preload-helper-D9Z9MdNV.js";import"./Helmet-Cctvo5mF.js";import"./Box-D-RX1Ye1.js";import"./styled-DEliNn-A.js";import"./Grid-6bh8kH4_.js";import"./Breadcrumbs-VfOAhQo9.js";import"./index-DnL3XN75.js";import"./Popover-DWUrb8iJ.js";import"./Modal-B-6iIZvt.js";import"./Portal-BOSGF2kR.js";import"./List-D2Zn6jVt.js";import"./ListContext-fh0KIWWr.js";import"./ListItem-BkXHRatZ.js";import"./Link-CBZ4Cz_J.js";import"./lodash-CwBbdt2Q.js";import"./index-BLmxJJSZ.js";import"./useAnalytics-B4wZ5pc1.js";import"./useApp-Dcn-TeFS.js";import"./Page-CD5ClKZr.js";import"./useMediaQuery-KIxE_dMI.js";import"./Tooltip-A98uo0Bn.js";import"./Popper-BIVuVyiI.js";const N={title:"Layout/Header",component:o,argTypes:{type:{options:["home","tool","service","website","library","app","apis","documentation","other"],control:{type:"select"}}}},a=e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Owner",value:"players"}),e.jsx(r,{label:"Lifecycle",value:"Production"}),e.jsx(r,{label:"Tier",value:"Level 1"})]}),t=i=>{const{type:s}=i;return e.jsx(p,{themeId:s,children:e.jsx(o,{...i,children:a})})};t.args={type:"home",title:"This is a title",subtitle:"This is a subtitle"};t.__docgenInfo={description:"",methods:[],displayName:"Default",props:{type:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: {
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
