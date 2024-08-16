import{a as r,j as h,F as w}from"./emotion-react-jsx-runtime.browser.esm-acadd13a.js";import{I as p,c as i}from"./Icon-2ea6a154.js";import{a as x,S as b}from"./StoryLinkWrapper-89894bc8.js";import{P as n}from"./index-29d2c63d.js";import{c as a,a as t}from"./styles-8302b2a4.js";import{c as g}from"./polished.esm-ed3ce7df.js";import"./index-c6dae603.js";import"./extends-98964cd2.js";import"./v4-4a60fe23.js";var I={name:"1qhkosj",styles:"border:0;border-radius:0;background:none;padding:0;font-size:inherit"},W={name:"13jr1vs",styles:"color:inherit;&:hover,&:active{color:inherit;text-decoration:underline;}"},S={name:"m8gvx1",styles:"svg{height:1em;width:1em;vertical-align:middle;position:relative;bottom:0;margin-right:0;}"};const k=a("display:inline-block;transition:transform 150ms ease-out,color 150ms ease-out;text-decoration:none;color:",t.secondary,";&:hover,&:focus{cursor:pointer;transform:translateY(-1px);color:",g(.07,t.secondary),";}&:active{transform:translateY(0);color:",g(.1,t.secondary),";}svg{display:inline-block;height:1em;width:1em;vertical-align:text-top;position:relative;bottom:-0.125em;margin-right:0.4em;}",e=>e.containsIcon&&S,";",e=>e.secondary&&a("color:",t.mediumdark,";&:hover{color:",t.dark,";}&:active{color:",t.darker,";}",""),";",e=>e.tertiary&&a("color:",t.dark,";&:hover{color:",t.darkest,";}&:active{color:",t.mediumdark,";}",""),";",e=>e.nochrome&&W,";",e=>e.inverse&&a("color:",t.lightest,";&:hover{color:",t.lighter,";}&:active{color:",t.light,";}",""),";",e=>e.isButton&&I,";","");var q={name:"1xo3o5q",styles:">svg:last-of-type{height:0.7em;width:0.7em;margin-right:0;margin-left:0.25em;bottom:auto;vertical-align:inherit;}"};const V=i("span",{target:"e8l8el13"})(e=>e.withArrow&&q,";"),_=i("a",{target:"e8l8el12"})(k,";"),A=i("button",{target:"e8l8el11"})("background:none;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit;",k,";"),B=e=>e&&i(({containsIcon:l,inverse:c,nochrome:f,secondary:m,tertiary:y,...d})=>r(e,{...d}),{target:"e8l8el10"})(k,";");function o({isButton:e,withArrow:l,LinkWrapper:c,children:f,...m}){const y=r(w,{children:h(V,{withArrow:l,children:[f,l&&r(p,{icon:"arrowright"})]})}),d=B(c);let u=_;return c?u=d:e&&(u=A),r(u,{...m,children:y})}o.propTypes={isButton:n.bool,children:n.node,withArrow:n.bool,containsIcon:n.bool,LinkWrapper:n.oneOfType([n.func,n.object]),inverse:n.bool,nochrome:n.bool,secondary:n.bool,tertiary:n.bool};o.defaultProps={isButton:!1,children:null,withArrow:!1,containsIcon:!1,LinkWrapper:void 0,inverse:!1,nochrome:!1,secondary:!1,tertiary:!1};o.__docgenInfo={description:"Links can contains text and/or icons. Be careful using only icons, you must provide a text alternative via aria-label for accessibility.",methods:[],displayName:"Link",props:{isButton:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},children:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"node"},required:!1},withArrow:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},containsIcon:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},LinkWrapper:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"union",value:[{name:"func"},{name:"object"}]},required:!1},inverse:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},nochrome:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},secondary:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},tertiary:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1}}};const C=i(o,{target:"e5uri5a0"})({name:"13kmxi1",styles:"&&{color:red;}"}),N=x("onLinkClick"),$={title:"Design System/Link",component:o},s={render:()=>h("div",{children:[r(o,{href:"https://storybook.js.org/tutorials/",children:"Default"}),r("br",{}),r(o,{secondary:!0,href:"https://storybook.js.org/tutorials/",children:"Secondary"}),r("br",{}),r(o,{tertiary:!0,href:"https://storybook.js.org/tutorials/",children:"tertiary"}),r("br",{}),r(o,{nochrome:!0,href:"https://storybook.js.org/tutorials/",children:"nochrome"}),r("br",{}),h(o,{href:"https://storybook.js.org/tutorials/",children:[r(p,{icon:"discord","aria-hidden":!0}),"With icon in front"]}),r("br",{}),r(o,{containsIcon:!0,href:"https://storybook.js.org/tutorials/","aria-label":"Toggle side bar",children:r(p,{icon:"sidebar","aria-hidden":!0})}),r("br",{}),r(o,{containsIcon:!0,withArrow:!0,href:"https://storybook.js.org/tutorials/",children:"With arrow behind"}),r("br",{}),r("span",{style:{background:"#333"},children:r(o,{inverse:!0,href:"https://storybook.js.org/tutorials/",children:"Inverted colors"})}),r("br",{}),r(o,{isButton:!0,onClick:N,children:"is actually a button"}),r("br",{}),r(o,{tertiary:!0,LinkWrapper:b,href:"http://storybook.js.org",children:"has a LinkWrapper like GatsbyLink or NextLink"}),r("br",{}),r(C,{tertiary:!0,LinkWrapper:b,href:"http://storybook.js.org",children:"has a LinkWrapper like GatsbyLink or NextLink with custom styling"})]})};var L,v,j;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div>\r
      <Link href='https://storybook.js.org/tutorials/'>Default</Link>\r
      <br />\r
      <Link secondary href='https://storybook.js.org/tutorials/'>\r
        Secondary\r
      </Link>\r
      <br />\r
      <Link tertiary href='https://storybook.js.org/tutorials/'>\r
        tertiary\r
      </Link>\r
      <br />\r
      <Link nochrome href='https://storybook.js.org/tutorials/'>\r
        nochrome\r
      </Link>\r
      <br />\r
      <Link href='https://storybook.js.org/tutorials/'>\r
        <Icon icon='discord' aria-hidden />\r
        With icon in front\r
      </Link>\r
      <br />\r
      <Link containsIcon href='https://storybook.js.org/tutorials/' aria-label='Toggle side bar'>\r
        <Icon icon='sidebar' aria-hidden />\r
      </Link>\r
      <br />\r
      <Link containsIcon withArrow href='https://storybook.js.org/tutorials/'>\r
        With arrow behind\r
      </Link>\r
      <br />\r
      <span style={{
      background: '#333'
    }}>\r
        <Link inverse href='https://storybook.js.org/tutorials/'>\r
          Inverted colors\r
        </Link>\r
      </span>\r
      <br />\r
      {/* gatsby and styled-components don't work nicely together  */}\r
      {/* eslint-disable-next-line */}\r
      <Link isButton onClick={onLinkClick}>\r
        is actually a button\r
      </Link>\r
      <br />\r
      <Link tertiary LinkWrapper={StoryLinkWrapper} href='http://storybook.js.org'>\r
        has a LinkWrapper like GatsbyLink or NextLink\r
      </Link>\r
      <br />\r
      <CustomLink tertiary LinkWrapper={StoryLinkWrapper} href='http://storybook.js.org'>\r
        has a LinkWrapper like GatsbyLink or NextLink with custom styling\r
      </CustomLink>\r
    </div>
}`,...(j=(v=s.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const H=["ALL"];export{s as ALL,H as __namedExportsOrder,$ as default};
