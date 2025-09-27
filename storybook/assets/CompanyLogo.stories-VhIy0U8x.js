import{j as t,T as a,c,C as g,m as l}from"./iframe-B9yZwi7m.js";import{b as i,r as d}from"./plugin-CR-e2_KO.js";import{S as s}from"./Grid-6bh8kH4_.js";import{w as u}from"./appWrappers-ZrKL3LrC.js";import{T as f}from"./TemplateBackstageLogo-C2NJdkOG.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-DBZeaX9L.js";import"./componentData-BnQw9ayA.js";import"./useAnalytics-B4wZ5pc1.js";import"./useApp-Dcn-TeFS.js";import"./useRouteRef-Dn6hZrxw.js";import"./index-BLmxJJSZ.js";import"./InfoCard-CvUDAOIQ.js";import"./CardContent-BsXZ-ph0.js";import"./ErrorBoundary-DRat1M2r.js";import"./ErrorPanel-93rX7PHP.js";import"./WarningPanel-DIU-NQwJ.js";import"./ExpandMore-CMsxeGJB.js";import"./AccordionDetails-dOpV6zrJ.js";import"./index-DnL3XN75.js";import"./Collapse-D2jImMsF.js";import"./MarkdownContent-Db2GvXi9.js";import"./CodeSnippet-CR5pMyjv.js";import"./Box-D-RX1Ye1.js";import"./styled-DEliNn-A.js";import"./CopyTextButton-Bc22gs1X.js";import"./useCopyToClipboard-D0ciyyAA.js";import"./useMountedState-Dpk1eSLe.js";import"./Tooltip-A98uo0Bn.js";import"./Popper-BIVuVyiI.js";import"./Portal-BOSGF2kR.js";import"./List-D2Zn6jVt.js";import"./ListContext-fh0KIWWr.js";import"./ListItem-BkXHRatZ.js";import"./ListItemText-Dk89vCYP.js";import"./LinkButton-CW0reDGa.js";import"./Button-BI9sJ5Qv.js";import"./Link-CBZ4Cz_J.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-CFPGPJ-H.js";import"./Divider-CcVa3SLf.js";import"./CardActions-BTOce_kM.js";import"./BottomLink-Dhvop8v9.js";import"./ArrowForward-KMMaiVxE.js";import"./DialogTitle-CNnCVnap.js";import"./Modal-B-6iIZvt.js";import"./Backdrop-B1w0qq1U.js";import"./useObservable-DXg6RWvp.js";import"./useIsomorphicLayoutEffect-DZ7lVmip.js";import"./useAsync-BdNVYfWS.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const yo={title:"Plugins/Home/Components/CompanyLogo",decorators:[o=>u(t.jsx(a,{apis:[[c,new g({app:{title:"My App"}})]],children:t.jsx(o,{})}),{mountedRoutes:{"/hello-company-logo":d}})]},n=l(o=>({container:{margin:o.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),r=()=>{const{container:o}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o})})},e=()=>{const{container:o,svg:m,path:p}=n();return t.jsx(s,{container:!0,justifyContent:"center",spacing:6,children:t.jsx(i,{className:o,logo:t.jsx(f,{classes:{svg:m,path:p}})})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};e.__docgenInfo={description:"",methods:[],displayName:"CustomLogo"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
