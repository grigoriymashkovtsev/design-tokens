(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"7kkW":function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),i=a.n(t),l=a("rBsb"),o=a("a3pu");n.default=Object(l.a)((function(){return i.a.createElement(o.a,null)}),"design-system-nav")},"8k0H":function(e,n,a){"use strict";var t=a("q1tI"),i=a.n(t),l=a("Wbzz"),o=a("hoaJ"),c=a.n(o),r=a("mxmt"),s=a.n(r);n.a=function(e){var n=e.children,a=e.nav,t=void 0===a?null:a,o=e.className,r=void 0===o?"":o;return i.a.createElement("div",null,i.a.createElement("div",{className:c.a.header},i.a.createElement(l.a,{to:"/",style:{marginRight:"60px"}},i.a.createElement("img",{alt:"Opentable logo",src:s.a,className:c.a.logo}),i.a.createElement("h1",null,"Design Bar")),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(l.a,{to:"/",className:c.a.headerLink,activeClassName:c.a.headerLinkActive,partiallyActive:function(){if("undefined"!=typeof window)return window.location.pathname.includes("/otkit/")}()},"Design tokens")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/handover-process",className:c.a.headerLink,activeClassName:c.a.headerLinkActive},"Process guidelines")))),i.a.createElement("div",null,t?i.a.createElement("div",{className:c.a.nav},t):null,i.a.createElement("div",{className:c.a.mainBody},i.a.createElement("div",{className:c.a.main+" "+r},n))))}},YuTi:function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"Zn/k":function(e,n,a){"use strict";a.d(n,"a",(function(){return c}));var t=a("q1tI"),i=a.n(t),l=a("rmYj"),o=a.n(l);function c(e){var n=e.text,a=e.type,t=e.content,l=e.className,c=void 0===l?"":l,r="SectionHeader__small"===a?o.a.sectionHeaderSmall:o.a.sectionHeader;return i.a.createElement("div",{className:o.a.sectionContainer},i.a.createElement("h2",{className:r+" "+c},n),t&&i.a.createElement("div",{className:o.a.sectionContent},t))}},a3pu:function(e,n,a){"use strict";var t=a("q1tI"),i=a.n(t),l=a("LvDl"),o=a.n(l),c=a("u5Bq"),r=a.n(c),s=a("Zn/k"),u=a("hoaJ"),m=a.n(u);n.a=function(){var e=o.a.toPairsIn(r.a);return e=e.map((function(e,n){return i.a.createElement("div",{key:n},o.a.kebabCase(e[0]),": ",e[1])})),i.a.createElement("div",{className:m.a.mainContainer},i.a.createElement(s.a,{text:"Spacing",type:"SectionHeader__small"}),e)}},hoaJ:function(e,n,a){e.exports={mainContainer:"index-module--main-container--1V5yZ",header:"index-module--header--t3FUc",headerLink:"index-module--header-link--WoLFM",headerLinkActive:"index-module--header-link-active--16U4y",logo:"index-module--logo--1SwiM",nav:"index-module--nav--OkaO_",navLink:"index-module--nav-link--C7C1B",linkActive:"index-module--link-active--3FN6v",navSection:"index-module--nav-section--171Lu",mainBody:"index-module--main-body--125y5",main:"index-module--main--1U6sP",linkSecondary:"index-module--link-secondary--B1kuF"}},mxmt:function(e,n){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzMiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAzMyAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMCAxMS43ODNhMi45NSAyLjk1IDAgMCAxIDIuOTU0LTIuOTQ2IDIuOTUgMi45NSAwIDAgMSAyLjk1MyAyLjk0NiAyLjk1IDIuOTUgMCAwIDEtMi45NTMgMi45NDZBMi45NSAyLjk1IDAgMCAxIDAgMTEuNzgzem0yMC43NDcgMi45NDZhMi45NSAyLjk1IDAgMCAxLTIuOTUzLTIuOTQ2IDIuOTUgMi45NSAwIDAgMSAyLjk1My0yLjk0NiAyLjk1IDIuOTUgMCAwIDEgMi45NTUgMi45NDYgMi45NSAyLjk1IDAgMCAxLTIuOTU1IDIuOTQ2ek0yMC43NDggMEMxNC4yMjMgMCA4LjkzMyA1LjI3NiA4LjkzMyAxMS43ODNjMCA2LjUwOCA1LjI5IDExLjc4NCAxMS44MTUgMTEuNzg0IDYuNTI2IDAgMTEuODE1LTUuMjc2IDExLjgxNS0xMS43ODRDMzIuNTYzIDUuMjc2IDI3LjI3MyAwIDIwLjc0OCAweiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg=="},rBsb:function(e,n,a){"use strict";var t=a("q1tI"),i=a.n(t),l=a("8k0H"),o=a("Wbzz"),c=a("hoaJ"),r=a.n(c),s=function(e){return e.isCurrent?{className:r.a.linkActive}:null},u=function(e){return i.a.createElement("div",{className:r.a.navLink},i.a.createElement(o.a,{to:e.to,getProps:s},e.children))},m=function(){return i.a.createElement("div",{className:r.a.navSection},i.a.createElement("h4",null,"DESIGN TOKENS"),i.a.createElement(u,{to:"/"},"All Design Tokens"),i.a.createElement(u,{to:"/otkit/colors/"},"Colors"),i.a.createElement(u,{to:"/otkit/typography/"},"Typography"),i.a.createElement(u,{to:"/otkit/grids/"},"Grids"),i.a.createElement(u,{to:"/otkit/spacing/"},"Spacing"),i.a.createElement(u,{to:"/otkit/borders/"},"Borders"),i.a.createElement(u,{to:"/otkit/breakpoints/"},"Breakpoints"),i.a.createElement(u,{to:"/otkit/shadows/"},"Shadows"),i.a.createElement(u,{to:"/otkit/icons/"},"Icons"),i.a.createElement(u,{to:"/otkit/icons-theme/"},"Icons (theme)"))};n.a=function(e,n){return function(a){var t=null;return"design-system-nav"===n&&(t=m),i.a.createElement(l.a,{nav:t?i.a.createElement(t,null):null},i.a.createElement(e,a))}}},rmYj:function(e,n,a){e.exports={sectionHeader:"styles-module--section-header--2TDZx",sectionHeaderSmall:"styles-module--section-header-small--3mU2q",sectionContainer:"styles-module--section-container--5BXbC",sectionContent:"styles-module--section-content--3L4NS"}},u5Bq:function(e,n){e.exports={spacingXsmall:"4px",spacingSmall:"8px",spacingMedium:"16px",spacingLarge:"32px",spacingXlarge:"48px",spacingXxlarge:"64px"}},yLpj:function(e,n){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(t){"object"==typeof window&&(a=window)}e.exports=a}}]);
//# sourceMappingURL=component---src-pages-otkit-spacing-js-146d7eef68729519060b.js.map