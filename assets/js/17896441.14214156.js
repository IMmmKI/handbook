"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7918],{1033:(e,t,a)=>{a.r(t),a.d(t,{default:()=>le});var n=a(7294),l=a(6010),r=a(7462),s=a(5999),i=a(9960);function c(e){var t=e.permalink,a=e.title,l=e.subLabel;return n.createElement(i.Z,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function o(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(c,(0,r.Z)({},t,{subLabel:n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(c,(0,r.Z)({},a,{subLabel:n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var d=a(2263),m=a(5551),u=a(5979);var v={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function p(e){var t=v[e.versionMetadata.banner];return n.createElement(t,e)}function b(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function E(e){var t,a=e.className,r=e.versionMetadata,s=(0,d.Z)().siteConfig.title,i=(0,m.gA)({failfast:!0}).pluginId,c=(0,u.J)(i).savePreferredVersionName,o=(0,m.Jo)(i),v=o.latestDocSuggestion,E=o.latestVersionSuggestion,g=null!=v?v:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(p,{siteTitle:s,versionMetadata:r})),n.createElement("div",{className:"margin-top--md"},n.createElement(b,{versionLabel:E.label,to:g.path,onClick:function(){return c(E.name)}})))}function g(e){var t=e.className,a=(0,u.E6)();return a.banner?n.createElement(E,{className:t,versionMetadata:a}):null}function h(e){var t=e.className,a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(s.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function f(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function N(e){var t=e.lastUpdatedBy;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(N,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var Z=a(3366);const L="iconEdit_dcUD";var k=["className"];function U(e){var t=e.className,a=(0,Z.Z)(e,k);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(L,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function T(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(U,null),n.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const y="tag_hD8n",M="tagRegular_D6E_",w="tagWithCount_i0QQ";function C(e){var t=e.permalink,a=e.name,r=e.count;return n.createElement(i.Z,{href:t,className:(0,l.Z)(y,r?w:M)},a,r&&n.createElement("span",null,r))}const A="tags_XVD_",x="tag_JSN8";function B(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(A,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:x},n.createElement(C,{name:t,permalink:a}))}))))}const D="lastUpdated_foO9";function I(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(B,e)))}function V(e){var t=e.editUrl,a=e.lastUpdatedAt,r=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(T,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",D)},(a||r)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function P(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,s=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,c=t.tags,o=c.length>0,d=!!(a||r||i);return o||d?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},o&&n.createElement(I,{tags:c}),d&&n.createElement(V,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:i,formattedLastUpdatedAt:s})):null}var S=a(1575);const F="tocCollapsible_jdIR",H="tocCollapsibleButton_Fzxq",R="tocCollapsibleContent_MpvI",z="tocCollapsibleExpanded_laf4";var O=a(5002);function q(e){var t=e.toc,a=e.className,r=e.minHeadingLevel,i=e.maxHeadingLevel,c=(0,u.uR)({initialState:!0}),o=c.collapsed,d=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(F,!o&&z,a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",H),onClick:d},n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:R,collapsed:o},n.createElement(O.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:i})))}var J=a(9649);const X="docItemContainer_vinB",Q="docItemCol_DM6M",j="tocMobile_TmEX",G={breadcrumbsContainer:"breadcrumbsContainer_Xlws"};var W=a(4996);function K(e){var t=e.children,a=e.href,l="breadcrumbs__link";return a?n.createElement(i.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l,itemProp:"item name"},t)}function Y(e){var t=e.children,a=e.active,r=e.index;return n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function $(){var e=(0,W.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(i.Z,{className:(0,l.Z)("breadcrumbs__link",G.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function ee(){var e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,G.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement($,null),e.map((function(t,a){return n.createElement(Y,{key:a,active:a===e.length-1,index:a},n.createElement(K,{href:a<e.length-1?t.href:void 0},t.label))})))):null}var te=a(7459);function ae(e){var t,a=e.content,l=a.metadata,r=a.frontMatter,s=a.assets,i=r.keywords,c=l.description,o=l.title,d=null!=(t=s.image)?t:r.image;return n.createElement(u.d,{title:o,description:c,keywords:i,image:d})}function ne(e){var t=e.content,a=t.metadata,r=t.frontMatter,s=r.hide_title,i=r.hide_table_of_contents,c=r.toc_min_heading_level,d=r.toc_max_heading_level,m=a.title,v=!s&&void 0===t.contentTitle,p=(0,u.iP)(),b=!i&&t.toc&&t.toc.length>0,E=b&&("desktop"===p||"ssr"===p);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!i&&Q)},n.createElement(g,null),n.createElement("div",{className:X},n.createElement("article",null,n.createElement(ee,null),n.createElement(h,null),b&&n.createElement(q,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:d,className:(0,l.Z)(u.kM.docs.docTocMobile,j)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},v&&n.createElement("header",null,n.createElement(J.Z,{as:"h1"},m)),n.createElement(te.Z,null,n.createElement(t,null))),n.createElement(P,e)),n.createElement(o,{previous:a.previous,next:a.next}))),E&&n.createElement("div",{className:"col col--3"},n.createElement(S.Z,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:d,className:u.kM.docs.docTocDesktop})))}function le(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(u.FG,{className:t},n.createElement(ae,e),n.createElement(ne,e))}}}]);