import{j as t}from"./iframe-B9yZwi7m.js";import{HeaderWorldClock as m}from"./index-BxRVAxS4.js";import{H as a}from"./Header-DXcd3zMb.js";import{w as l}from"./appWrappers-ZrKL3LrC.js";import"./preload-helper-D9Z9MdNV.js";import"./HeaderLabel-26Bzw0NV.js";import"./Grid-6bh8kH4_.js";import"./Link-CBZ4Cz_J.js";import"./lodash-CwBbdt2Q.js";import"./index-BLmxJJSZ.js";import"./useAnalytics-B4wZ5pc1.js";import"./useApp-Dcn-TeFS.js";import"./Helmet-Cctvo5mF.js";import"./Box-D-RX1Ye1.js";import"./styled-DEliNn-A.js";import"./Breadcrumbs-VfOAhQo9.js";import"./index-DnL3XN75.js";import"./Popover-DWUrb8iJ.js";import"./Modal-B-6iIZvt.js";import"./Portal-BOSGF2kR.js";import"./List-D2Zn6jVt.js";import"./ListContext-fh0KIWWr.js";import"./ListItem-BkXHRatZ.js";import"./Page-CD5ClKZr.js";import"./useMediaQuery-KIxE_dMI.js";import"./Tooltip-A98uo0Bn.js";import"./Popper-BIVuVyiI.js";import"./useObservable-DXg6RWvp.js";import"./useIsomorphicLayoutEffect-DZ7lVmip.js";import"./useAsync-BdNVYfWS.js";import"./useMountedState-Dpk1eSLe.js";import"./componentData-BnQw9ayA.js";import"./isSymbol-DhO4cmIY.js";import"./isObject--vsEa_js.js";import"./toString-Cr1IARFv.js";const z={title:"Plugins/Home/Components/HeaderWorldClock",decorators:[o=>l(t.jsx(o,{}))]},e=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!0};return t.jsx(a,{title:"Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})},r=()=>{const o=[{label:"NYC",timeZone:"America/New_York"},{label:"UTC",timeZone:"UTC"},{label:"STO",timeZone:"Europe/Stockholm"},{label:"TYO",timeZone:"Asia/Tokyo"}],i={hour:"2-digit",minute:"2-digit",hour12:!1};return t.jsx(a,{title:"24hr Header World Clock",pageTitleOverride:"Home",children:t.jsx(m,{clockConfigs:o,customTimeFormat:i})})};e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"TwentyFourHourClocks"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  };
  return <Header title="Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const clockConfigs: ClockConfig[] = [{
    label: 'NYC',
    timeZone: 'America/New_York'
  }, {
    label: 'UTC',
    timeZone: 'UTC'
  }, {
    label: 'STO',
    timeZone: 'Europe/Stockholm'
  }, {
    label: 'TYO',
    timeZone: 'Asia/Tokyo'
  }];
  const timeFormat: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };
  return <Header title="24hr Header World Clock" pageTitleOverride="Home">
      <HeaderWorldClock clockConfigs={clockConfigs} customTimeFormat={timeFormat} />
    </Header>;
}`,...r.parameters?.docs?.source}}};const B=["Default","TwentyFourHourClocks"];export{e as Default,r as TwentyFourHourClocks,B as __namedExportsOrder,z as default};
