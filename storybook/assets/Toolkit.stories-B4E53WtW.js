import{j as o}from"./iframe-CahsdGLf.js";import{c as e}from"./plugin-WoVOhtGx.js";import{S as l}from"./Grid-D6NKF8Xc.js";import{C as m}from"./ComponentAccordion-DWLvlhLE.js";import{w as a}from"./appWrappers-Dw81wzpS.js";import{T as i}from"./TemplateBackstageLogoIcon-DyALASz3.js";import{I as s}from"./InfoCard-B_ueoD81.js";import"./preload-helper-D9Z9MdNV.js";import"./Plugin-CMlg66W1.js";import"./componentData-B72WovVn.js";import"./useAnalytics-CA8fvJIN.js";import"./useApp-CRqQKGH7.js";import"./useRouteRef-DT_IW1Pk.js";import"./index-BGdmBl9c.js";import"./DialogTitle-CyDUtoYV.js";import"./Modal-7w9J3LZ4.js";import"./Portal-yGFKFLjG.js";import"./Backdrop-DasLwiQe.js";import"./Button-EJprZhL3.js";import"./useObservable-C2aKx3Dj.js";import"./useIsomorphicLayoutEffect-DRolZ9z_.js";import"./ExpandMore-DLtUgvWK.js";import"./AccordionDetails-C0WLEf3Y.js";import"./index-DnL3XN75.js";import"./Collapse-DTrAaznQ.js";import"./useAsync-DdQt0UJE.js";import"./useMountedState-oA-ewkZ-.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./CardContent-D4w-urVN.js";import"./ErrorBoundary-Dkp6xgJ1.js";import"./ErrorPanel-cvRv1LSv.js";import"./WarningPanel-D7K9Q2fj.js";import"./MarkdownContent-Kk1wKhDf.js";import"./CodeSnippet-CE9LF90_.js";import"./Box-BIsVMJnm.js";import"./styled-BIrVN0LJ.js";import"./CopyTextButton-ClS6JA0y.js";import"./useCopyToClipboard-BlJ4lVXf.js";import"./Tooltip-CyYfTOpX.js";import"./Popper-D1WZgD9D.js";import"./List-BN62T2kV.js";import"./ListContext-BQJ-6G7L.js";import"./ListItem-scSs5PZA.js";import"./ListItemText-CrCE6Nj2.js";import"./LinkButton-BwO-ja4-.js";import"./Link-YmUVD0Dj.js";import"./lodash-CwBbdt2Q.js";import"./CardHeader-DT5_MRxk.js";import"./Divider-DfN40PIW.js";import"./CardActions-DJ2IkC4E.js";import"./BottomLink-CtXPiwL1.js";import"./ArrowForward-6lPM2usk.js";const co={title:"Plugins/Home/Components/Toolkit",decorators:[n=>a(o.jsx(n,{}))]},r=()=>o.jsx(l,{item:!0,xs:12,md:6,children:o.jsx(e,{tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})})})}),t=()=>{const n=p=>o.jsx(m,{expanded:!0,...p});return o.jsx(s,{title:"Toolkit",noPadding:!0,children:o.jsxs(l,{item:!0,children:[o.jsx(e,{title:"Tools 1",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:n}),o.jsx(e,{title:"Tools 2",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m}),o.jsx(e,{title:"Tools 3",tools:Array(8).fill({url:"#",label:"link",icon:o.jsx(i,{})}),Renderer:m})]})})};r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"InAccordion"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
