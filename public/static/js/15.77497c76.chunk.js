(this["webpackJsonpgadget-world"]=this["webpackJsonpgadget-world"]||[]).push([[15],{475:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(103),c=r(146);t.a=function(){return a.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"breadcrumb-content text-center"},a.a.createElement(c.Breadcrumbs,{separator:a.a.createElement("span",null,"/"),item:o.c,finalItem:"span"}))))}},476:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(482),c=r(474),l=r(103),i=r(484),u=r(481),s=r(483),m=r(17),f=function(e){var t=e.backgroundColorClass,r=e.spaceTopClass,o=e.spaceBottomClass,f=e.containerClass,p=e.extraFooterClass,d=e.sideMenu,b=Object(n.useState)(0),y=Object(c.a)(b,2),v=y[0],h=y[1],E=Object(n.useState)(0),g=Object(c.a)(E,2),O=g[0],w=g[1];Object(n.useEffect)((function(){return w(100),window.addEventListener("scroll",_),function(){window.removeEventListener("scroll",_)}}),[]);var _=function(){h(window.scrollY)};return a.a.createElement("footer",{className:"footer-area ".concat(t||""," ").concat(r||""," ").concat(o||""," ").concat(p||"")},a.a.createElement("div",{className:"".concat(f||"container")},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"".concat(d?"col-xl-3 col-sm-4":"col-lg-3 col-sm-4")},a.a.createElement(u.a,{footerLogo:"/assets/img/logo/logo.svg",spaceBottomClass:"mb-30"})),a.a.createElement("div",{className:"".concat(d?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},a.a.createElement("div",{className:"footer-widget mb-30 "},a.a.createElement("div",{className:"footer-title"},a.a.createElement("h3",null,"ABOUT US")),a.a.createElement("div",{className:"footer-list"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(l.b,{to:m.c+"/about"},"About us")),a.a.createElement("li",null,a.a.createElement(l.b,{to:m.c+"#/"},"Store location")),a.a.createElement("li",null,a.a.createElement(l.b,{to:m.c+"/contact"},"Contact")),a.a.createElement("li",null,a.a.createElement(l.b,{to:m.c+"#/"},"Orders tracking")))))),a.a.createElement("div",{className:"".concat(d?"col-xl-3 col-sm-4":"col-lg-2 col-sm-4npm start")},a.a.createElement("div",{className:"".concat("footer-widget mb-30 ")},a.a.createElement("div",{className:"footer-title"},a.a.createElement("h3",null,"FOLLOW US")),a.a.createElement("div",{className:"footer-list"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer"},"Facebook")),a.a.createElement("li",null,a.a.createElement("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer"},"Twitter")),a.a.createElement("li",null,a.a.createElement("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer"},"Instagram")),a.a.createElement("li",null,a.a.createElement("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer"},"Youtube")))))),a.a.createElement("div",{className:"".concat(d?"col-xl-4 col-sm-8":"col-lg-4 col-sm-6")},a.a.createElement(s.a,{sideMenu:d})))),a.a.createElement("button",{className:"scroll-top ".concat(v>O?"show":""),onClick:function(){i.animateScroll.scrollToTop()}},a.a.createElement("i",{className:"fa fa-angle-double-up"})))};t.a=function(e){var t=e.children,r=e.headerContainerClass,c=e.headerTop,l=e.headerPaddingClass;return a.a.createElement(n.Fragment,null,a.a.createElement(o.a,{layout:r,top:c,headerPaddingClass:l}),t,a.a.createElement(f,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},478:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=l(r(19)),o=l(r(43)),c=r(487);function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,b,y,v=function(e){function t(){return u(this,t),m(this,f(t).apply(this,arguments))}var r,a,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(a=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&o.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var r=n.default.createElement("div",{className:"react-head-temp"},t);o.default.render(r,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var r=e.temporaryElement.querySelector(".react-head-temp");if(null!==r){var n=Array.prototype.slice.call(r.children),a=document.head,o=a.innerHTML;(n=(n=n.filter((function(e){return-1===o.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var r=(0,c.getDuplicateTitle)();r&&(0,c.removeChild)(a,r)}else if("meta"===t){var n=(0,c.getDuplicateMeta)(e);n&&(0,c.removeChild)(a,n)}else if("link"===t&&"canonical"===e.rel){var o=(0,c.getDuplicateCanonical)(e);o&&(0,c.removeChild)(a,o)}})),(0,c.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(r.prototype,a),l&&s(r,l),t}(n.Component);d=v,b="contextTypes",y={extract:a.default.func},b in d?Object.defineProperty(d,b,{value:y,enumerable:!0,configurable:!0,writable:!0}):d[b]=y;var h=v;t.default=h,e.exports=t.default},485:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var n=c(r(486)),a=c(r(478)),o=c(r(488));function c(e){return e&&e.__esModule?e:{default:e}}var l=a.default;t.default=l},486:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=r(0),o=(n=r(19))&&n.__esModule?n:{default:n};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return l(this,t),u(this,s(t).apply(this,arguments))}var r,n,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),r=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return a.Children.only(this.props.children)}}])&&i(r.prototype,n),o&&i(r,o),t}(a.Component);!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(f,"childContextTypes",{extract:o.default.func});var p=f;t.default=p,e.exports=t.default},487:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,r=null,n=[],c=[];return e.forEach((function(e){var a=e.type,o=e.props;"title"===a?t=e:"link"===a&&"canonical"===o.rel?r=e:"meta"===a?n.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};o.forEach((function(e){t[e]=[]}));for(var r=[],n=function(n){var c=e[n],l=c.props.id;(l?!t.id[l]:0===a.filter((function(e){var r=c.props[e],n=t[e][r];return n&&!n.props.id})).length)&&(r.unshift(c),o.forEach((function(e){var r=c.props[e];r&&(t[e][r]=c)})))},c=e.length-1;c>=0;c--)n(c);return r}(n)),[r],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,r=e.id;if(r)return r&&t.querySelector("#".concat(r));return n.reduce((function(r,n){var a,o=e.getAttribute(n);return o?r.concat((a=t.querySelectorAll("[".concat(n,' = "').concat(o,'"]')),(a=Array.prototype.slice.call(a||[])).filter((function(e){return!e.id})))):r}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=document.createDocumentFragment(),n=0,a=t.length;n<a;n++)r.appendChild(t[n]);e.appendChild(r)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var r=0,n=t.length;r<n;r++)e.removeChild(t[r])};var n=["property","name","itemprop"],a=n.concat(["itemProp"]),o=a.concat(["id"])},488:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),a=c(r(19)),o=c(r(478));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,d,b,y=function(e){function t(){return i(this,t),s(this,m(t).apply(this,arguments))}var r,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),r=t,(a=[{key:"render",value:function(){return n.default.createElement(o.default,null,n.default.createElement("title",null,this.props.title))}}])&&u(r.prototype,a),c&&u(r,c),t}(n.Component);p=y,d="propTypes",b={title:a.default.string},d in p?Object.defineProperty(p,d,{value:b,enumerable:!0,configurable:!0,writable:!0}):p[d]=b;var v=y;t.default=v,e.exports=t.default},495:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){for(var t=e.ratingValue,r=[],o=0;o<5;o++)r.push(a.a.createElement("i",{className:"fa fa-star-o",key:o}));if(t&&t>0)for(var c=0;c<=t-1;c++)r[c]=a.a.createElement("i",{className:"fa fa-star-o yellow",key:c});return a.a.createElement(n.Fragment,null,r)}},596:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(103),c=r(147),l=r(485),i=r.n(l),u=r(146),s=r(64),m=r(65),f=r(104),p=r(479),d=r(476),b=r(475),y=r(495),v=r(17);t.default=Object(s.connect)((function(e){return{cartItems:e.cartData,compareItems:e.compareData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,r,n){e(Object(m.e)(t,r,n))},deleteFromCompare:function(t,r){e(Object(f.d)(t,r))}}}))((function(e){var t=e.location,r=e.cartItems,l=e.compareItems,s=e.addToCart,m=e.deleteFromCompare,f=e.currency,h=t.pathname,E=Object(c.useToasts)().addToast;return a.a.createElement(n.Fragment,null,a.a.createElement(i.a,null,a.a.createElement("title",null,"Gadget World | Compare"),a.a.createElement("meta",{name:"description",content:"Compare page of eCommerce."})),a.a.createElement(u.BreadcrumbsItem,{to:v.c+"/"},"Home"),a.a.createElement(u.BreadcrumbsItem,{to:v.c+h},"Compare"),a.a.createElement(d.a,{headerTop:"visible"},a.a.createElement(b.a,null),a.a.createElement("div",{className:"compare-main-area pt-90 pb-100"},a.a.createElement("div",{className:"container"},l&&l.length>=1?a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-12"},a.a.createElement("div",{className:"compare-page-content"},a.a.createElement("div",{className:"compare-table table-responsive"},a.a.createElement("table",{className:"table table-bordered mb-0"},a.a.createElement("tbody",null,a.a.createElement("tr",null,a.a.createElement("th",{className:"title-column"},"Product Info"),l.map((function(e,t){var n=r.filter((function(t){return t._id===e._id}))[0];return a.a.createElement("td",{className:"product-image-title",key:t},a.a.createElement("div",{className:"compare-remove"},a.a.createElement("button",{onClick:function(){return m(e,E)}},a.a.createElement("i",{className:"pe-7s-trash"}))),a.a.createElement(o.b,{to:v.c+"/product/"+e._id,className:"image"},a.a.createElement("img",{className:"img-fluid",src:v.b+e.image[0],alt:""})),a.a.createElement("div",{className:"product-title"},a.a.createElement(o.b,{to:v.c+"/product/"+e._id},e.name)),a.a.createElement("div",{className:"compare-btn"},e.affiliateLink?a.a.createElement("a",{href:e.affiliateLink,rel:"noopener noreferrer",target:"_blank"}," ","Buy now"," "):e.variation&&e.variation.length>=1?a.a.createElement(o.b,{to:"".concat(v.c,"/product/").concat(e._id)},"Select Option"):e.stock&&e.stock>0?a.a.createElement("button",{onClick:function(){return s(e,E)},className:void 0!==n&&n.quantity>0?"active":"",disabled:void 0!==n&&n.quantity>0,title:void 0!==e?"Added to cart":"Add to cart"},void 0!==n&&n.quantity>0?"Added":"Add to cart"):a.a.createElement("button",{disabled:!0,className:"active"},"Out of Stock")))}))),a.a.createElement("tr",null,a.a.createElement("th",{className:"title-column"},"Price"),l.map((function(e,t){var r=Object(p.a)(e.price,e.discount),o=(e.price*f.currencyRate).toFixed(2),c=(r*f.currencyRate).toFixed(2);return a.a.createElement("td",{className:"product-price",key:t},null!==r?a.a.createElement(n.Fragment,null,a.a.createElement("span",{className:"amount old"},f.currencySymbol+o),a.a.createElement("span",{className:"amount"},f.currencySymbol+c)):a.a.createElement("span",{className:"amount"},f.currencySymbol+o))}))),a.a.createElement("tr",null,a.a.createElement("th",{className:"title-column"},"Description"),l.map((function(e,t){return a.a.createElement("td",{className:"product-desc",key:t},a.a.createElement("p",null,e.shortDescription?e.shortDescription:"N/A"))}))),a.a.createElement("tr",null,a.a.createElement("th",{className:"title-column"},"Rating"),l.map((function(e,t){return a.a.createElement("td",{className:"product-rating",key:t},a.a.createElement(y.a,{ratingValue:e.rating}))}))))))))):a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-12"},a.a.createElement("div",{className:"item-empty-area text-center"},a.a.createElement("div",{className:"item-empty-area__icon mb-30"},a.a.createElement("i",{className:"pe-7s-shuffle"})),a.a.createElement("div",{className:"item-empty-area__text"},"No items found in compare ",a.a.createElement("br",null)," ",a.a.createElement(o.b,{to:v.c+"/shop-grid-standard"},"Add Items")))))))))}))}}]);
//# sourceMappingURL=15.77497c76.chunk.js.map