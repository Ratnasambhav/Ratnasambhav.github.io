(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(144),o=a(146);t.default=function(){return r.a.createElement("div",{className:"blog"},r.a.createElement(o.a,{title:"Blog | Ratnasambhav Priyadarshi",URL:"https://ratnasambhav.github.io/blog"}),r.a.createElement("p",{className:"blog--header"},"Coming soon..."),r.a.createElement(i.Link,{to:"/",className:"blog--link"},"Home"))}},143:function(e,t,a){var n;e.exports=(n=a(145))&&n.default||n},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return d}),a.d(t,"StaticQueryContext",function(){return g}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(142),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(143),u=a.n(l);a.d(t,"PageRenderer",function(){return u.a});var m=a(33);a.d(t,"parsePath",function(){return m.a});var g=r.a.createContext({}),p=function(e){return r.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(54),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},146:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(148),o=a.n(i),c=a(4),s=a.n(c),l=function(e){var t=e.title,a=e.URL,n=e.description,i=e.imageURL,c=e.imageWidth,s=e.imageHeight;return r.a.createElement(o.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("title",null,t),r.a.createElement("link",{rel:"canonical",href:a}),r.a.createElement("meta",{name:"Description",content:n}),r.a.createElement("meta",{property:"og:title",content:t}),r.a.createElement("meta",{property:"og:description",content:n}),r.a.createElement("meta",{property:"og:image",content:i}),r.a.createElement("meta",{property:"og:image:width",content:c}),r.a.createElement("meta",{property:"og:image:height",content:s}),r.a.createElement("meta",{property:"og:url",content:a}),r.a.createElement("meta",{property:"og:site_name",content:"ratnasambhav.github.io"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{name:"twitter:title",content:t}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:image",content:i}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))};l.propTypes={title:s.a.string.isRequired,URL:s.a.string.isRequired,description:s.a.string,imageURL:s.a.string,imageWidth:s.a.string,imageHeight:s.a.string},l.defaultProps={description:"The blog of Ratnasambhav Priyadarshi",imageURL:"https://ratnasambhav.github.io/icons/icon-512x512.png",imageWidth:"512",imageHeight:"512"},t.a=l}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-5b940cd2fe72d0b10af8.js.map