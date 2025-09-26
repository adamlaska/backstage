import{j as t,m as d,I as u,b as h,T as g}from"./iframe-CahsdGLf.js";import{r as x}from"./plugin-BpKdpgke.js";import{S as m,u as n,a as S}from"./useSearchModal-Bs93SlHe.js";import{B as c}from"./Button-EJprZhL3.js";import{a as f,b as M,c as j}from"./DialogTitle-CyDUtoYV.js";import{B as C}from"./Box-BIsVMJnm.js";import{S as r}from"./Grid-D6NKF8Xc.js";import{S as y}from"./SearchType-OzmGAoFX.js";import{L as I}from"./List-BN62T2kV.js";import{H as R}from"./DefaultResultListItem-RPY4eCT0.js";import{s as B,M as D}from"./api-DJfBAb0A.js";import{S as T}from"./SearchContext-B5U4GTsB.js";import{w as k}from"./appWrappers-Dw81wzpS.js";import{SearchBar as v}from"./SearchBar-tZP8a4JJ.js";import{a as b}from"./SearchResult-gtDGfEFJ.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BlE6AvU-.js";import"./Plugin-CMlg66W1.js";import"./componentData-B72WovVn.js";import"./useAnalytics-CA8fvJIN.js";import"./useApp-CRqQKGH7.js";import"./useRouteRef-DT_IW1Pk.js";import"./index-BGdmBl9c.js";import"./ArrowForward-6lPM2usk.js";import"./translation-Dq7iXocs.js";import"./Page-DiG5AgCz.js";import"./useMediaQuery-d-SASRBD.js";import"./Divider-DfN40PIW.js";import"./ArrowBackIos-C0Q8Al0O.js";import"./ArrowForwardIos-n6qM0Lv8.js";import"./translation-Do7p11eF.js";import"./Modal-7w9J3LZ4.js";import"./Portal-yGFKFLjG.js";import"./Backdrop-DasLwiQe.js";import"./styled-BIrVN0LJ.js";import"./ExpandMore-DLtUgvWK.js";import"./useAsync-DdQt0UJE.js";import"./useMountedState-oA-ewkZ-.js";import"./AccordionDetails-C0WLEf3Y.js";import"./index-DnL3XN75.js";import"./Collapse-DTrAaznQ.js";import"./ListItem-scSs5PZA.js";import"./ListContext-BQJ-6G7L.js";import"./ListItemIcon-8K7BhqR-.js";import"./ListItemText-CrCE6Nj2.js";import"./Tabs-RbXP8_f5.js";import"./KeyboardArrowRight-D-F-Y5kV.js";import"./FormLabel-By1mqse2.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-kwf22dWy.js";import"./InputLabel-Ce7in620.js";import"./Select-73VwUjDJ.js";import"./Popover-D3lpIB-l.js";import"./MenuItem-Dt-VMjdO.js";import"./Checkbox-D3nOWYkt.js";import"./SwitchBase-BmlLUl51.js";import"./Chip-D32v3waY.js";import"./Link-YmUVD0Dj.js";import"./lodash-CwBbdt2Q.js";import"./useObservable-C2aKx3Dj.js";import"./useIsomorphicLayoutEffect-DRolZ9z_.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./Search-CQ0NG1In.js";import"./useDebounce-CUT0XbPY.js";import"./InputAdornment-DPj5VPvz.js";import"./TextField-DAW00GxB.js";import"./useElementFilter-ZXFAZhLF.js";import"./EmptyState-BLcQG3mx.js";import"./Progress-PtiUbiRD.js";import"./LinearProgress-D20EKoyF.js";import"./ResponseErrorPanel-BIj3HRBP.js";import"./ErrorPanel-cvRv1LSv.js";import"./WarningPanel-D7K9Q2fj.js";import"./MarkdownContent-Kk1wKhDf.js";import"./CodeSnippet-CE9LF90_.js";import"./CopyTextButton-ClS6JA0y.js";import"./useCopyToClipboard-BlJ4lVXf.js";import"./Tooltip-CyYfTOpX.js";import"./Popper-D1WZgD9D.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},ao={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>k(t.jsx(g,{apis:[[B,new D(G)]],children:t.jsx(T,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":x}})]},s=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=d(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),i=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsxs(C,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(u,{"aria-label":"close",onClick:e,children:t.jsx(h,{})})]})}),t.jsx(M,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(y.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(I,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(R,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(j,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(S,{})})})})]})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const {
    state,
    toggleModal
  } = useSearchModal();
  return <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Toggle Search Modal
      </Button>
      <SearchModal {...state} toggleModal={toggleModal} />
    </>;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const classes = useStyles();
  const {
    state,
    toggleModal
  } = useSearchModal();
  return <>
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Toggle Custom Search Modal
      </Button>
      <SearchModal {...state} toggleModal={toggleModal}>
        {() => <>
            <DialogTitle>
              <Box className={classes.titleContainer}>
                <SearchBar className={classes.input} />

                <IconButton aria-label="close" onClick={toggleModal}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Grid container direction="column">
                <Grid item>
                  <SearchType.Tabs defaultValue="" types={[{
                value: 'custom-result-item',
                name: 'Custom Item'
              }, {
                value: 'no-custom-result-item',
                name: 'No Custom Item'
              }]} />
                </Grid>
                <Grid item>
                  <SearchResult>
                    {({
                  results
                }) => <List>
                        {results.map(({
                    document
                  }) => <div role="button" tabIndex={0} key={\`\${document.location}-btn\`} onClick={toggleModal} onKeyPress={toggleModal}>
                            <DefaultResultListItem key={document.location} result={document} />
                          </div>)}
                      </List>}
                  </SearchResult>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className={classes.dialogActionsContainer}>
              <Grid container direction="row">
                <Grid item xs={12}>
                  <SearchResultPager />
                </Grid>
              </Grid>
            </DialogActions>
          </>}
      </SearchModal>
    </>;
}`,...i.parameters?.docs?.source}}};const lo=["Default","CustomModal"];export{i as CustomModal,s as Default,lo as __namedExportsOrder,ao as default};
