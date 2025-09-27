import{j as t,m as d,I as u,b as h,T as g}from"./iframe-B9yZwi7m.js";import{r as x}from"./plugin-_w9jZdKl.js";import{S as m,u as n,a as S}from"./useSearchModal-BiCZcjoV.js";import{B as c}from"./Button-BI9sJ5Qv.js";import{a as f,b as M,c as j}from"./DialogTitle-CNnCVnap.js";import{B as C}from"./Box-D-RX1Ye1.js";import{S as r}from"./Grid-6bh8kH4_.js";import{S as y}from"./SearchType-BFpfWvnb.js";import{L as I}from"./List-D2Zn6jVt.js";import{H as R}from"./DefaultResultListItem-psrc_uDZ.js";import{s as B,M as D}from"./api-CYqJEjP8.js";import{S as T}from"./SearchContext-BS1MXbAB.js";import{w as k}from"./appWrappers-ZrKL3LrC.js";import{SearchBar as v}from"./SearchBar-C0zSbDpw.js";import{a as b}from"./SearchResult-BChNFpel.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DDCQON-r.js";import"./Plugin-DBZeaX9L.js";import"./componentData-BnQw9ayA.js";import"./useAnalytics-B4wZ5pc1.js";import"./useApp-Dcn-TeFS.js";import"./useRouteRef-Dn6hZrxw.js";import"./index-BLmxJJSZ.js";import"./ArrowForward-KMMaiVxE.js";import"./translation-ESX2xb7G.js";import"./Page-CD5ClKZr.js";import"./useMediaQuery-KIxE_dMI.js";import"./Divider-CcVa3SLf.js";import"./ArrowBackIos-DF_2Aa0_.js";import"./ArrowForwardIos-Brww7HGU.js";import"./translation-CC0edMfe.js";import"./Modal-B-6iIZvt.js";import"./Portal-BOSGF2kR.js";import"./Backdrop-B1w0qq1U.js";import"./styled-DEliNn-A.js";import"./ExpandMore-CMsxeGJB.js";import"./useAsync-BdNVYfWS.js";import"./useMountedState-Dpk1eSLe.js";import"./AccordionDetails-dOpV6zrJ.js";import"./index-DnL3XN75.js";import"./Collapse-D2jImMsF.js";import"./ListItem-BkXHRatZ.js";import"./ListContext-fh0KIWWr.js";import"./ListItemIcon-BIffTPHx.js";import"./ListItemText-Dk89vCYP.js";import"./Tabs-Cri2B2ik.js";import"./KeyboardArrowRight-DIKOzl4J.js";import"./FormLabel-BAN8cxvM.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-DJMAzCeS.js";import"./InputLabel-a-QJ-Dya.js";import"./Select-fh8ZmQ1A.js";import"./Popover-DWUrb8iJ.js";import"./MenuItem-4GKb6p_3.js";import"./Checkbox-M47t88nw.js";import"./SwitchBase-C-lTjpMK.js";import"./Chip-DQ5atGNY.js";import"./Link-CBZ4Cz_J.js";import"./lodash-CwBbdt2Q.js";import"./useObservable-DXg6RWvp.js";import"./useIsomorphicLayoutEffect-DZ7lVmip.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";import"./Search-FkD1F1Vv.js";import"./useDebounce-zF347s8X.js";import"./InputAdornment-BRhe2dzC.js";import"./TextField-BmXmhRmE.js";import"./useElementFilter-DSA4xlbS.js";import"./EmptyState-D49IbN6V.js";import"./Progress-B4BJsmk5.js";import"./LinearProgress-ztsl3-5S.js";import"./ResponseErrorPanel-CZ2D2__I.js";import"./ErrorPanel-93rX7PHP.js";import"./WarningPanel-DIU-NQwJ.js";import"./MarkdownContent-Db2GvXi9.js";import"./CodeSnippet-CR5pMyjv.js";import"./CopyTextButton-Bc22gs1X.js";import"./useCopyToClipboard-D0ciyyAA.js";import"./Tooltip-A98uo0Bn.js";import"./Popper-BIVuVyiI.js";const G={results:[{type:"custom-result-item",document:{location:"search/search-result-1",title:"Search Result 1",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-2",title:"Search Result 2",text:"some text from the search result"}},{type:"no-custom-result-item",document:{location:"search/search-result-3",title:"Search Result 3",text:"some text from the search result"}}]},ao={title:"Plugins/Search/SearchModal",component:m,decorators:[o=>k(t.jsx(g,{apis:[[B,new D(G)]],children:t.jsx(T,{children:t.jsx(o,{})})}),{mountedRoutes:{"/search":x}})]},s=()=>{const{state:o,toggleModal:a}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:a,children:"Toggle Search Modal"}),t.jsx(m,{...o,toggleModal:a})]})},A=d(o=>({titleContainer:{display:"flex",alignItems:"center",gap:o.spacing(1)},input:{flex:1},dialogActionsContainer:{padding:o.spacing(1,3)}})),i=()=>{const o=A(),{state:a,toggleModal:e}=n();return t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"contained",color:"primary",onClick:e,children:"Toggle Custom Search Modal"}),t.jsx(m,{...a,toggleModal:e,children:()=>t.jsxs(t.Fragment,{children:[t.jsx(f,{children:t.jsxs(C,{className:o.titleContainer,children:[t.jsx(v,{className:o.input}),t.jsx(u,{"aria-label":"close",onClick:e,children:t.jsx(h,{})})]})}),t.jsx(M,{children:t.jsxs(r,{container:!0,direction:"column",children:[t.jsx(r,{item:!0,children:t.jsx(y.Tabs,{defaultValue:"",types:[{value:"custom-result-item",name:"Custom Item"},{value:"no-custom-result-item",name:"No Custom Item"}]})}),t.jsx(r,{item:!0,children:t.jsx(b,{children:({results:p})=>t.jsx(I,{children:p.map(({document:l})=>t.jsx("div",{role:"button",tabIndex:0,onClick:e,onKeyPress:e,children:t.jsx(R,{result:l},l.location)},`${l.location}-btn`))})})})]})}),t.jsx(j,{className:o.dialogActionsContainer,children:t.jsx(r,{container:!0,direction:"row",children:t.jsx(r,{item:!0,xs:12,children:t.jsx(S,{})})})})]})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Default"};i.__docgenInfo={description:"",methods:[],displayName:"CustomModal"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
