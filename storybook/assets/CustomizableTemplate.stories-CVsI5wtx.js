import{j as t,T as i,c as m,C as a}from"./iframe-B9yZwi7m.js";import{w as n}from"./appWrappers-ZrKL3LrC.js";import{s as p,H as s}from"./plugin-_w9jZdKl.js";import{c as d}from"./api-BBhE_25s.js";import{c}from"./catalogApiMock-6uooyOfu.js";import{M as g}from"./MockStarredEntitiesApi-Dcj5d39l.js";import{s as l}from"./api-CYqJEjP8.js";import{C as h}from"./CustomHomepageGrid-BPo9Pop4.js";import{H as f,a as u}from"./plugin-CR-e2_KO.js";import{e as y}from"./routes-DvJBZShj.js";import{s as w}from"./StarredEntitiesApi-CdwbxyUF.js";import"./preload-helper-D9Z9MdNV.js";import"./useObservable-DXg6RWvp.js";import"./useIsomorphicLayoutEffect-DZ7lVmip.js";import"./useAnalytics-B4wZ5pc1.js";import"./useAsync-BdNVYfWS.js";import"./useMountedState-Dpk1eSLe.js";import"./componentData-BnQw9ayA.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./index-BLmxJJSZ.js";import"./useApp-Dcn-TeFS.js";import"./index-DDCQON-r.js";import"./Plugin-DBZeaX9L.js";import"./useRouteRef-Dn6hZrxw.js";import"./ref-C0VTUPuL.js";import"./lodash-CwBbdt2Q.js";import"./get-BzVCAvoB.js";import"./_baseSlice-DkFNCYmM.js";import"./_arrayReduce-BTs_qt-z.js";import"./toNumber-DwNnq1eP.js";import"./Add-DAHIGTSS.js";import"./Grid-6bh8kH4_.js";import"./Box-D-RX1Ye1.js";import"./styled-DEliNn-A.js";import"./TextField-BmXmhRmE.js";import"./Select-fh8ZmQ1A.js";import"./index-DnL3XN75.js";import"./Popover-DWUrb8iJ.js";import"./Modal-B-6iIZvt.js";import"./Portal-BOSGF2kR.js";import"./List-D2Zn6jVt.js";import"./ListContext-fh0KIWWr.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-DJMAzCeS.js";import"./FormLabel-BAN8cxvM.js";import"./InputLabel-a-QJ-Dya.js";import"./ListItem-BkXHRatZ.js";import"./ListItemIcon-BIffTPHx.js";import"./ListItemText-Dk89vCYP.js";import"./Remove-D6JGKoUW.js";import"./useCopyToClipboard-D0ciyyAA.js";import"./Button-BI9sJ5Qv.js";import"./Divider-CcVa3SLf.js";import"./FormControlLabel-DQeSUOho.js";import"./Checkbox-M47t88nw.js";import"./SwitchBase-C-lTjpMK.js";import"./RadioGroup-CIqsmS90.js";import"./MenuItem-4GKb6p_3.js";import"./translation-LzBFA8oy.js";import"./DialogTitle-CNnCVnap.js";import"./Backdrop-B1w0qq1U.js";import"./Tooltip-A98uo0Bn.js";import"./Popper-BIVuVyiI.js";import"./createStyles-Bp4GwXob.js";import"./createStyles-yD3y8ldD.js";import"./ListItemAvatar-DmNjO7L-.js";import"./Edit-RTmI9Gs5.js";import"./Cancel--ytOTdiB.js";import"./Progress-B4BJsmk5.js";import"./LinearProgress-ztsl3-5S.js";import"./ContentHeader-NpXW2ClS.js";import"./Helmet-Cctvo5mF.js";import"./ErrorBoundary-DRat1M2r.js";import"./ErrorPanel-93rX7PHP.js";import"./WarningPanel-DIU-NQwJ.js";import"./ExpandMore-CMsxeGJB.js";import"./AccordionDetails-dOpV6zrJ.js";import"./Collapse-D2jImMsF.js";import"./MarkdownContent-Db2GvXi9.js";import"./CodeSnippet-CR5pMyjv.js";import"./CopyTextButton-Bc22gs1X.js";import"./LinkButton-CW0reDGa.js";import"./Link-CBZ4Cz_J.js";import"./useElementFilter-DSA4xlbS.js";import"./InfoCard-CvUDAOIQ.js";import"./CardContent-BsXZ-ph0.js";import"./CardHeader-CFPGPJ-H.js";import"./CardActions-BTOce_kM.js";import"./BottomLink-Dhvop8v9.js";import"./ArrowForward-KMMaiVxE.js";const x=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],k=c({entities:x}),o=new g;o.toggleStarred("component:default/example-starred-entity");o.toggleStarred("component:default/example-starred-entity-2");o.toggleStarred("component:default/example-starred-entity-3");o.toggleStarred("component:default/example-starred-entity-4");const me={title:"Plugins/Home/Templates",decorators:[r=>n(t.jsx(t.Fragment,{children:t.jsx(i,{apis:[[d,k],[w,o],[l,{query:()=>Promise.resolve({results:[]})}],[m,new a({backend:{baseUrl:"https://localhost:7007"}})]],children:t.jsx(r,{})})}),{mountedRoutes:{"/hello-company":p.routes.root,"/catalog/:namespace/:kind/:name":y}})]},e=()=>{const r=[{component:"HomePageSearchBar",x:0,y:0,width:12,height:5},{component:"HomePageRandomJoke",x:0,y:2,width:6,height:16},{component:"HomePageStarredEntities",x:6,y:2,width:6,height:12}];return t.jsxs(h,{config:r,rowHeight:10,children:["// Insert the allowed widgets inside the grid. User can add, organize and // remove the widgets as they want.",t.jsx(s,{}),t.jsx(f,{}),t.jsx(u,{})]})};e.__docgenInfo={description:"",methods:[],displayName:"CustomizableTemplate"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
