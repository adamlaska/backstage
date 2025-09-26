import{j as e}from"./iframe-CahsdGLf.js";import{C as t}from"./CodeSnippet-CE9LF90_.js";import{I as o}from"./InfoCard-B_ueoD81.js";import"./preload-helper-D9Z9MdNV.js";import"./Box-BIsVMJnm.js";import"./styled-BIrVN0LJ.js";import"./CopyTextButton-ClS6JA0y.js";import"./useCopyToClipboard-BlJ4lVXf.js";import"./useMountedState-oA-ewkZ-.js";import"./Tooltip-CyYfTOpX.js";import"./Popper-D1WZgD9D.js";import"./Portal-yGFKFLjG.js";import"./CardContent-D4w-urVN.js";import"./ErrorBoundary-Dkp6xgJ1.js";import"./ErrorPanel-cvRv1LSv.js";import"./WarningPanel-D7K9Q2fj.js";import"./ExpandMore-DLtUgvWK.js";import"./AccordionDetails-C0WLEf3Y.js";import"./index-DnL3XN75.js";import"./Collapse-DTrAaznQ.js";import"./MarkdownContent-Kk1wKhDf.js";import"./Grid-D6NKF8Xc.js";import"./List-BN62T2kV.js";import"./ListContext-BQJ-6G7L.js";import"./ListItem-scSs5PZA.js";import"./ListItemText-CrCE6Nj2.js";import"./LinkButton-BwO-ja4-.js";import"./Button-EJprZhL3.js";import"./Link-YmUVD0Dj.js";import"./lodash-CwBbdt2Q.js";import"./index-BGdmBl9c.js";import"./useAnalytics-CA8fvJIN.js";import"./useApp-CRqQKGH7.js";import"./CardHeader-DT5_MRxk.js";import"./Divider-DfN40PIW.js";import"./CardActions-DJ2IkC4E.js";import"./BottomLink-CtXPiwL1.js";import"./ArrowForward-6lPM2usk.js";const X={title:"Data Display/CodeSnippet",component:t},d={width:300},r=`const greeting = "Hello";
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
