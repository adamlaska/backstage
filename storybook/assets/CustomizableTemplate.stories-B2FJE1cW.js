import{j as t,T as i,c as m,C as a}from"./iframe-CahsdGLf.js";import{w as n}from"./appWrappers-Dw81wzpS.js";import{s as p,H as s}from"./plugin-BpKdpgke.js";import{c as d}from"./api-BDWZZI3y.js";import{c}from"./catalogApiMock-yZA2TCoT.js";import{M as g}from"./MockStarredEntitiesApi-CUh4IMD1.js";import{s as l}from"./api-DJfBAb0A.js";import{C as h}from"./CustomHomepageGrid-IwY33H57.js";import{H as f,a as u}from"./plugin-WoVOhtGx.js";import{e as y}from"./routes-DvPcE-W5.js";import{s as w}from"./StarredEntitiesApi-Cngakk2Y.js";import"./preload-helper-D9Z9MdNV.js";import"./useObservable-C2aKx3Dj.js";import"./useIsomorphicLayoutEffect-DRolZ9z_.js";import"./useAnalytics-CA8fvJIN.js";import"./useAsync-DdQt0UJE.js";import"./useMountedState-oA-ewkZ-.js";import"./componentData-B72WovVn.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./index-BGdmBl9c.js";import"./useApp-CRqQKGH7.js";import"./index-BlE6AvU-.js";import"./Plugin-CMlg66W1.js";import"./useRouteRef-DT_IW1Pk.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./get-CCLXpfbM.js";import"./_baseSlice-DkFNCYmM.js";import"./_arrayReduce-BTs_qt-z.js";import"./toNumber-DwNnq1eP.js";import"./Add-BpEWrkEl.js";import"./Grid-D6NKF8Xc.js";import"./Box-BIsVMJnm.js";import"./styled-BIrVN0LJ.js";import"./TextField-DAW00GxB.js";import"./Select-73VwUjDJ.js";import"./index-DnL3XN75.js";import"./Popover-D3lpIB-l.js";import"./Modal-7w9J3LZ4.js";import"./Portal-yGFKFLjG.js";import"./List-BN62T2kV.js";import"./ListContext-BQJ-6G7L.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-kwf22dWy.js";import"./FormLabel-By1mqse2.js";import"./InputLabel-Ce7in620.js";import"./ListItem-scSs5PZA.js";import"./ListItemIcon-8K7BhqR-.js";import"./ListItemText-CrCE6Nj2.js";import"./Remove-vOde_ty3.js";import"./useCopyToClipboard-BlJ4lVXf.js";import"./Button-EJprZhL3.js";import"./Divider-DfN40PIW.js";import"./FormControlLabel-mduCzkry.js";import"./Checkbox-D3nOWYkt.js";import"./SwitchBase-BmlLUl51.js";import"./RadioGroup-C10H-ri_.js";import"./MenuItem-Dt-VMjdO.js";import"./translation-CKxXs-b_.js";import"./DialogTitle-CyDUtoYV.js";import"./Backdrop-DasLwiQe.js";import"./Tooltip-CyYfTOpX.js";import"./Popper-D1WZgD9D.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./ListItemAvatar-DfPNpdNS.js";import"./Edit-ASbWNQ0O.js";import"./Cancel-jLzLDWRI.js";import"./Progress-PtiUbiRD.js";import"./LinearProgress-D20EKoyF.js";import"./ContentHeader-C_pNbA9J.js";import"./Helmet-BepEu-Tc.js";import"./ErrorBoundary-Dkp6xgJ1.js";import"./ErrorPanel-cvRv1LSv.js";import"./WarningPanel-D7K9Q2fj.js";import"./ExpandMore-DLtUgvWK.js";import"./AccordionDetails-C0WLEf3Y.js";import"./Collapse-DTrAaznQ.js";import"./MarkdownContent-Kk1wKhDf.js";import"./CodeSnippet-CE9LF90_.js";import"./CopyTextButton-ClS6JA0y.js";import"./LinkButton-BwO-ja4-.js";import"./Link-YmUVD0Dj.js";import"./useElementFilter-ZXFAZhLF.js";import"./InfoCard-B_ueoD81.js";import"./CardContent-D4w-urVN.js";import"./CardHeader-DT5_MRxk.js";import"./CardActions-DJ2IkC4E.js";import"./BottomLink-CtXPiwL1.js";import"./ArrowForward-6lPM2usk.js";const x=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],k=c({entities:x}),o=new g;o.toggleStarred("component:default/example-starred-entity");o.toggleStarred("component:default/example-starred-entity-2");o.toggleStarred("component:default/example-starred-entity-3");o.toggleStarred("component:default/example-starred-entity-4");const me={title:"Plugins/Home/Templates",decorators:[r=>n(t.jsx(t.Fragment,{children:t.jsx(i,{apis:[[d,k],[w,o],[l,{query:()=>Promise.resolve({results:[]})}],[m,new a({backend:{baseUrl:"https://localhost:7007"}})]],children:t.jsx(r,{})})}),{mountedRoutes:{"/hello-company":p.routes.root,"/catalog/:namespace/:kind/:name":y}})]},e=()=>{const r=[{component:"HomePageSearchBar",x:0,y:0,width:12,height:5},{component:"HomePageRandomJoke",x:0,y:2,width:6,height:16},{component:"HomePageStarredEntities",x:6,y:2,width:6,height:12}];return t.jsxs(h,{config:r,rowHeight:10,children:["// Insert the allowed widgets inside the grid. User can add, organize and // remove the widgets as they want.",t.jsx(s,{}),t.jsx(f,{}),t.jsx(u,{})]})};e.__docgenInfo={description:"",methods:[],displayName:"CustomizableTemplate"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  // This is the default configuration that is shown to the user
  // when first arriving to the homepage.
  const defaultConfig = [{
    component: 'HomePageSearchBar',
    x: 0,
    y: 0,
    width: 12,
    height: 5
  }, {
    component: 'HomePageRandomJoke',
    x: 0,
    y: 2,
    width: 6,
    height: 16
  }, {
    component: 'HomePageStarredEntities',
    x: 6,
    y: 2,
    width: 6,
    height: 12
  }];
  return <CustomHomepageGrid config={defaultConfig} rowHeight={10}>
      // Insert the allowed widgets inside the grid. User can add, organize and
      // remove the widgets as they want.
      <HomePageSearchBar />
      <HomePageRandomJoke />
      <HomePageStarredEntities />
    </CustomHomepageGrid>;
}`,...e.parameters?.docs?.source}}};const ae=["CustomizableTemplate"];export{e as CustomizableTemplate,ae as __namedExportsOrder,me as default};
