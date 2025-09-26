import{j as t,T as a,c,C as g,m as l}from"./iframe-CahsdGLf.js";import{b as i,r as d}from"./plugin-WoVOhtGx.js";import{S as s}from"./Grid-D6NKF8Xc.js";import{w as u}from"./appWrappers-Dw81wzpS.js";import{T as f}from"./TemplateBackstageLogo-CDyF6RLG.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-CMlg66W1.js";import"./componentData-B72WovVn.js";import"./useAnalytics-CA8fvJIN.js";import"./useApp-CRqQKGH7.js";import"./useRouteRef-DT_IW1Pk.js";import"./index-BGdmBl9c.js";import"./InfoCard-B_ueoD81.js";import"./CardContent-D4w-urVN.js";import"./ErrorBoundary-Dkp6xgJ1.js";import"./ErrorPanel-cvRv1LSv.js";import"./WarningPanel-D7K9Q2fj.js";import"./ExpandMore-DLtUgvWK.js";import"./AccordionDetails-C0WLEf3Y.js";import"./index-DnL3XN75.js";import"./Collapse-DTrAaznQ.js";import"./MarkdownContent-Kk1wKhDf.js";import"./CodeSnippet-CE9LF90_.js";import"./Box-BIsVMJnm.js";import"./styled-BIrVN0LJ.js";import"./CopyTextButton-ClS6JA0y.js";import"./useCopyToClipboard-BlJ4lVXf.js";import"./useMountedState-oA-ewkZ-.js";import"./Tooltip-CyYfTOpX.js";import"./Popper-D1WZgD9D.js";import"./Portal-yGFKFLjG.js";import"./List-BN62T2kV.js";import"./ListContext-BQJ-6G7L.js";import"./ListItem-scSs5PZA.js";import"./ListItemText-CrCE6Nj2.js";import"./LinkButton-BwO-ja4-.js";import"./Button-EJprZhL3.js";import"./Link-YmUVD0Dj.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-DT5_MRxk.js";import"./Divider-DfN40PIW.js";import"./CardActions-DJ2IkC4E.js";import"./BottomLink-CtXPiwL1.js";import"./ArrowForward-6lPM2usk.js";import"./DialogTitle-CyDUtoYV.js";import"./Modal-7w9J3LZ4.js";import"./Backdrop-DasLwiQe.js";import"./useObservable-C2aKx3Dj.js";import"./useIsomorphicLayoutEffect-DRolZ9z_.js";import"./useAsync-DdQt0UJE.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const yo={title:"Plugins/Home/Components/CompanyLogo",decorators:[o=>u(t.jsx(a,{apis:[[c,new g({app:{title:"My App"}})]],children:t.jsx(o,{})}),{mountedRoutes:{"/hello-company-logo":d}})]},n=l(o=>({container:{margin:o.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),r=()=>{const{container:o}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o})})},e=()=>{const{container:o,svg:m,path:p}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o,logo:t.jsx(f,{classes:{svg:m,path:p}})})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"CustomLogo"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    container
  } = useLogoStyles();
  return <Grid container justifyContent="center" spacing={6}>
      <HomePageCompanyLogo className={container} />
    </Grid>;
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const {
    container,
    svg,
    path
  } = useLogoStyles();
  return <Grid container justifyContent="center" spacing={6}>
      <HomePageCompanyLogo className={container} logo={<TemplateBackstageLogo classes={{
      svg,
      path
    }} />} />
    </Grid>;
}`,...e.parameters?.docs?.source}}};const Co=["Default","CustomLogo"];export{e as CustomLogo,r as Default,Co as __namedExportsOrder,yo as default};
