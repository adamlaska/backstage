import{j as e}from"./iframe-B9yZwi7m.js";import{C as t}from"./CodeSnippet-CR5pMyjv.js";import{I as o}from"./InfoCard-CvUDAOIQ.js";import"./preload-helper-D9Z9MdNV.js";import"./Box-D-RX1Ye1.js";import"./styled-DEliNn-A.js";import"./CopyTextButton-Bc22gs1X.js";import"./useCopyToClipboard-D0ciyyAA.js";import"./useMountedState-Dpk1eSLe.js";import"./Tooltip-A98uo0Bn.js";import"./Popper-BIVuVyiI.js";import"./Portal-BOSGF2kR.js";import"./CardContent-BsXZ-ph0.js";import"./ErrorBoundary-DRat1M2r.js";import"./ErrorPanel-93rX7PHP.js";import"./WarningPanel-DIU-NQwJ.js";import"./ExpandMore-CMsxeGJB.js";import"./AccordionDetails-dOpV6zrJ.js";import"./index-DnL3XN75.js";import"./Collapse-D2jImMsF.js";import"./MarkdownContent-Db2GvXi9.js";import"./Grid-6bh8kH4_.js";import"./List-D2Zn6jVt.js";import"./ListContext-fh0KIWWr.js";import"./ListItem-BkXHRatZ.js";import"./ListItemText-Dk89vCYP.js";import"./LinkButton-CW0reDGa.js";import"./Button-BI9sJ5Qv.js";import"./Link-CBZ4Cz_J.js";import"./lodash-CwBbdt2Q.js";import"./index-BLmxJJSZ.js";import"./useAnalytics-B4wZ5pc1.js";import"./useApp-Dcn-TeFS.js";import"./CardHeader-CFPGPJ-H.js";import"./Divider-CcVa3SLf.js";import"./CardActions-BTOce_kM.js";import"./BottomLink-Dhvop8v9.js";import"./ArrowForward-KMMaiVxE.js";const X={title:"Data Display/CodeSnippet",component:t},d={width:300},r=`const greeting = "Hello";
const world = "World";

const greet = person => greeting + " " + person + "!";

greet(world);
`,m=`const greeting: string = "Hello";
const world: string = "World";

const greet = (person: string): string => greeting + " " + person + "!";

greet(world);
`,c=`greeting = "Hello"
world = "World"

def greet(person):
    return f"{greeting} {person}!"

greet(world)
`,s=()=>e.jsx(o,{title:"JavaScript example",children:e.jsx(t,{text:"const hello = 'World';",language:"javascript"})}),a=()=>e.jsx(o,{title:"JavaScript multi-line example",children:e.jsx(t,{text:r,language:"javascript"})}),i=()=>e.jsx(o,{title:"Show line numbers",children:e.jsx(t,{text:r,language:"javascript",showLineNumbers:!0})}),n=()=>e.jsxs(o,{title:"Overflow",children:[e.jsx("div",{style:d,children:e.jsx(t,{text:r,language:"javascript"})}),e.jsx("div",{style:d,children:e.jsx(t,{text:r,language:"javascript",showLineNumbers:!0})})]}),p=()=>e.jsxs(o,{title:"Multiple languages",children:[e.jsx(t,{text:r,language:"javascript",showLineNumbers:!0}),e.jsx(t,{text:m,language:"typescript",showLineNumbers:!0}),e.jsx(t,{text:c,language:"python",showLineNumbers:!0})]}),l=()=>e.jsx(o,{title:"Copy Code",children:e.jsx(t,{text:r,language:"javascript",showCopyCodeButton:!0})});s.__docgenInfo={description:"",methods:[],displayName:"Default"};a.__docgenInfo={description:"",methods:[],displayName:"MultipleLines"};i.__docgenInfo={description:"",methods:[],displayName:"LineNumbers"};n.__docgenInfo={description:"",methods:[],displayName:"Overflow"};p.__docgenInfo={description:"",methods:[],displayName:"Languages"};l.__docgenInfo={description:"",methods:[],displayName:"CopyCode"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <InfoCard title="JavaScript example">
    <CodeSnippet text="const hello = 'World';" language="javascript" />
  </InfoCard>`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <InfoCard title="JavaScript multi-line example">
    <CodeSnippet text={JAVASCRIPT} language="javascript" />
  </InfoCard>`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <InfoCard title="Show line numbers">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
  </InfoCard>`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <InfoCard title="Overflow">
    <div style={containerStyle}>
      <CodeSnippet text={JAVASCRIPT} language="javascript" />
    </div>
    <div style={containerStyle}>
      <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
    </div>
  </InfoCard>`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => <InfoCard title="Multiple languages">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showLineNumbers />
    <CodeSnippet text={TYPESCRIPT} language="typescript" showLineNumbers />
    <CodeSnippet text={PYTHON} language="python" showLineNumbers />
  </InfoCard>`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <InfoCard title="Copy Code">
    <CodeSnippet text={JAVASCRIPT} language="javascript" showCopyCodeButton />
  </InfoCard>`,...l.parameters?.docs?.source}}};const Z=["Default","MultipleLines","LineNumbers","Overflow","Languages","CopyCode"];export{l as CopyCode,s as Default,p as Languages,i as LineNumbers,a as MultipleLines,n as Overflow,Z as __namedExportsOrder,X as default};
