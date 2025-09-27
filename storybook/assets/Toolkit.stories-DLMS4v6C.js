import{j as o}from"./iframe-B9yZwi7m.js";import{c as e}from"./plugin-CR-e2_KO.js";import{S as l}from"./Grid-6bh8kH4_.js";import{C as m}from"./ComponentAccordion-DmY9Oziu.js";import{w as a}from"./appWrappers-ZrKL3LrC.js";import{T as i}from"./TemplateBackstageLogoIcon-BDLTBjPR.js";import{I as s}from"./InfoCard-CvUDAOIQ.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-DBZeaX9L.js";import"./componentData-BnQw9ayA.js";import"./useAnalytics-B4wZ5pc1.js";import"./useApp-Dcn-TeFS.js";import"./useRouteRef-Dn6hZrxw.js";import"./index-BLmxJJSZ.js";import"./DialogTitle-CNnCVnap.js";import"./Modal-B-6iIZvt.js";import"./Portal-BOSGF2kR.js";import"./Backdrop-B1w0qq1U.js";import"./Button-BI9sJ5Qv.js";import"./useObservable-DXg6RWvp.js";import"./useIsomorphicLayoutEffect-DZ7lVmip.js";import"./ExpandMore-CMsxeGJB.js";import"./AccordionDetails-dOpV6zrJ.js";import"./index-DnL3XN75.js";import"./Collapse-D2jImMsF.js";import"./useAsync-BdNVYfWS.js";import"./useMountedState-Dpk1eSLe.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-BsXZ-ph0.js";import"./ErrorBoundary-DRat1M2r.js";import"./ErrorPanel-93rX7PHP.js";import"./WarningPanel-DIU-NQwJ.js";import"./MarkdownContent-Db2GvXi9.js";import"./CodeSnippet-CR5pMyjv.js";import"./Box-D-RX1Ye1.js";import"./styled-DEliNn-A.js";import"./CopyTextButton-Bc22gs1X.js";import"./useCopyToClipboard-D0ciyyAA.js";import"./Tooltip-A98uo0Bn.js";import"./Popper-BIVuVyiI.js";import"./List-D2Zn6jVt.js";import"./ListContext-fh0KIWWr.js";import"./ListItem-BkXHRatZ.js";import"./ListItemText-Dk89vCYP.js";import"./LinkButton-CW0reDGa.js";import"./Link-CBZ4Cz_J.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-CFPGPJ-H.js";import"./Divider-CcVa3SLf.js";import"./CardActions-BTOce_kM.js";import"./BottomLink-Dhvop8v9.js";import"./ArrowForward-KMMaiVxE.js";const co={title:"Plugins/Home/Components/Toolkit",decorators:[n=>a(o.jsx(n,{}))]},r=()=>o.jsx(l,{item:!0,xs:12,md:6,children:o.jsx(e,{tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})})})}),t=()=>{const n=p=>o.jsx(m,{expanded:!0,...p});return o.jsx(s,{title:"Toolkit",noPadding:!0,children:o.jsxs(l,{item:!0,children:[o.jsx(e,{title:"Tools 1",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:n}),o.jsx(e,{title:"Tools 2",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m}),o.jsx(e,{title:"Tools 3",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"InAccordion"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return <Grid item xs={12} md={6}>
      <HomePageToolkit tools={Array(8).fill({
      url: '#',
      label: 'link',
      icon: <TemplateBackstageLogoIcon />
    })} />
    </Grid>;
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const ExpandedComponentAccordion = (props: any) => <ComponentAccordion expanded {...props} />;
  return <InfoCard title="Toolkit" noPadding>
      <Grid item>
        <HomePageToolkit title="Tools 1" tools={Array(8).fill({
        url: '#',
        label: 'link',
        icon: <TemplateBackstageLogoIcon />
      })} Renderer={ExpandedComponentAccordion} />
        <HomePageToolkit title="Tools 2" tools={Array(8).fill({
        url: '#',
        label: 'link',
        icon: <TemplateBackstageLogoIcon />
      })} Renderer={ComponentAccordion} />
        <HomePageToolkit title="Tools 3" tools={Array(8).fill({
        url: '#',
        label: 'link',
        icon: <TemplateBackstageLogoIcon />
      })} Renderer={ComponentAccordion} />
      </Grid>
    </InfoCard>;
}`,...t.parameters?.docs?.source}}};const uo=["Default","InAccordion"];export{r as Default,t as InAccordion,uo as __namedExportsOrder,co as default};
