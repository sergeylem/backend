(this["webpackJsonpgadget-world"]=this["webpackJsonpgadget-world"]||[]).push([[20],{475:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(103),c=n(146);t.a=function(){return a.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"breadcrumb-content text-center"},a.a.createElement(c.Breadcrumbs,{separator:a.a.createElement("span",null,"/"),item:o.c,finalItem:"span"}))))}},476:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(482),c=n(474),l=n(103),i=n(484),u=n(481),s=n(483),m=n(17),f=function(e){var t=e.backgroundColorClass,n=e.spaceTopClass,o=e.spaceBottomClass,f=e.containerClass,d=e.extraFooterClass,p=e.sideMenu,b=Object(r.useState)(0),y=Object(c.a)(b,2),h=y[0],v=y[1],E=Object(r.useState)(0),g=Object(c.a)(E,2),O=g[0],w=g[1];Object(r.useEffect)((function(){return w(100),window.addEventListener("scroll",_),function(){window.removeEventListener("scroll",_)}}),[]);var _=function(){v(window.scrollY)};return a.a.createElement("footer",{className:"footer-area ".concat(t||""," ").concat(n||""," ").concat(o||""," ").concat(d||"")},a.a.createElement("div",{className:"".concat(f||"container")},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"".concat(p?"col-xl-3 col-sm-4":"col-lg-3 col-sm-4")},a.a.createElement(u.a,{footerLogo:"/assets/img/logo/logo.svg",spaceBottomClass:"mb-30"})),a.a.createElement("div",{className:"".concat(p?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},a.a.createElement("div",{className:"footer-widget mb-30 "},a.a.createElement("div",{className:"footer-title"},a.a.createElement("h3",null,"ABOUT US")),a.a.createElement("div",{className:"footer-list"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(l.b,{to:m.c+"/about"},"About us")),a.a.createElement("li",null,a.a.createElement(l.b,{to:m.c+"#/"},"Store location")),a.a.createElement("li",null,a.a.createElement(l.b,{to:m.c+"/contact"},"Contact")),a.a.createElement("li",null,a.a.createElement(l.b,{to:m.c+"#/"},"Orders tracking")))))),a.a.createElement("div",{className:"".concat(p?"col-xl-3 col-sm-4":"col-lg-2 col-sm-4npm start")},a.a.createElement("div",{className:"".concat("footer-widget mb-30 ")},a.a.createElement("div",{className:"footer-title"},a.a.createElement("h3",null,"FOLLOW US")),a.a.createElement("div",{className:"footer-list"},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer"},"Facebook")),a.a.createElement("li",null,a.a.createElement("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer"},"Twitter")),a.a.createElement("li",null,a.a.createElement("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer"},"Instagram")),a.a.createElement("li",null,a.a.createElement("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer"},"Youtube")))))),a.a.createElement("div",{className:"".concat(p?"col-xl-4 col-sm-8":"col-lg-4 col-sm-6")},a.a.createElement(s.a,{sideMenu:p})))),a.a.createElement("button",{className:"scroll-top ".concat(h>O?"show":""),onClick:function(){i.animateScroll.scrollToTop()}},a.a.createElement("i",{className:"fa fa-angle-double-up"})))};t.a=function(e){var t=e.children,n=e.headerContainerClass,c=e.headerTop,l=e.headerPaddingClass;return a.a.createElement(r.Fragment,null,a.a.createElement(o.a,{layout:n,top:c,headerPaddingClass:l}),t,a.a.createElement(f,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},478:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=l(n(19)),o=l(n(43)),c=n(487);function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,b,y,h=function(e){function t(){return u(this,t),m(this,f(t).apply(this,arguments))}var n,a,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&o.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=r.default.createElement("div",{className:"react-head-temp"},t);o.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),a=document.head,o=a.innerHTML;(r=(r=r.filter((function(e){return-1===o.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,c.getDuplicateTitle)();n&&(0,c.removeChild)(a,n)}else if("meta"===t){var r=(0,c.getDuplicateMeta)(e);r&&(0,c.removeChild)(a,r)}else if("link"===t&&"canonical"===e.rel){var o=(0,c.getDuplicateCanonical)(e);o&&(0,c.removeChild)(a,o)}})),(0,c.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&s(n.prototype,a),l&&s(n,l),t}(r.Component);p=h,b="contextTypes",y={extract:a.default.func},b in p?Object.defineProperty(p,b,{value:y,enumerable:!0,configurable:!0,writable:!0}):p[b]=y;var v=h;t.default=v,e.exports=t.default},485:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var r=c(n(486)),a=c(n(478)),o=c(n(488));function c(e){return e&&e.__esModule?e:{default:e}}var l=a.default;t.default=l},486:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=n(0),o=(r=n(19))&&r.__esModule?r:{default:r};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(){return l(this,t),u(this,s(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return a.Children.only(this.props.children)}}])&&i(n.prototype,r),o&&i(n,o),t}(a.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(f,"childContextTypes",{extract:o.default.func});var d=f;t.default=d,e.exports=t.default},487:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],c=[];return e.forEach((function(e){var a=e.type,o=e.props;"title"===a?t=e:"link"===a&&"canonical"===o.rel?n=e:"meta"===a?r.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};o.forEach((function(e){t[e]=[]}));for(var n=[],r=function(r){var c=e[r],l=c.props.id;(l?!t.id[l]:0===a.filter((function(e){var n=c.props[e],r=t[e][n];return r&&!r.props.id})).length)&&(n.unshift(c),o.forEach((function(e){var n=c.props[e];n&&(t[e][n]=c)})))},c=e.length-1;c>=0;c--)r(c);return n}(r)),[n],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,n=e.id;if(n)return n&&t.querySelector("#".concat(n));return r.reduce((function(n,r){var a,o=e.getAttribute(r);return o?n.concat((a=t.querySelectorAll("[".concat(r,' = "').concat(o,'"]')),(a=Array.prototype.slice.call(a||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,a=t.length;r<a;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],a=r.concat(["itemProp"]),o=a.concat(["id"])},488:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=c(n(19)),o=c(n(478));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,p,b,y=function(e){function t(){return i(this,t),s(this,m(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){return r.default.createElement(o.default,null,r.default.createElement("title",null,this.props.title))}}])&&u(n.prototype,a),c&&u(n,c),t}(r.Component);d=y,p="propTypes",b={title:a.default.string},p in d?Object.defineProperty(d,p,{value:b,enumerable:!0,configurable:!0,writable:!0}):d[p]=b;var h=y;t.default=h,e.exports=t.default},595:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(103),c=n(147),l=n(485),i=n.n(l),u=n(146),s=n(64),m=n(479),f=n(84),d=n(65),p=n(476),b=n(475),y=n(17);t.default=Object(s.connect)((function(e){return{cartItems:e.cartData,wishlistItems:e.wishlistData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,n,r){e(Object(d.e)(t,n,r))},addToWishlist:function(t,n,r){e(Object(f.d)(t,n,r))},deleteFromWishlist:function(t,n,r){e(Object(f.f)(t,n,r))},deleteAllFromWishlist:function(t){e(Object(f.e)(t))}}}))((function(e){var t=e.location,n=e.cartItems,l=e.currency,s=e.addToCart,f=e.wishlistItems,d=e.deleteFromWishlist,h=e.deleteAllFromWishlist,v=Object(c.useToasts)().addToast,E=t.pathname;return a.a.createElement(r.Fragment,null,a.a.createElement(i.a,null,a.a.createElement("title",null,"Gadget World | Wishlist"),a.a.createElement("meta",{name:"description",content:"Wishlist page of eCommerce."})),a.a.createElement(u.BreadcrumbsItem,{to:y.c+"/"},"Home"),a.a.createElement(u.BreadcrumbsItem,{to:y.c+E},"Wishlist"),a.a.createElement(p.a,{headerTop:"visible"},a.a.createElement(b.a,null),a.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},a.a.createElement("div",{className:"container"},f&&f.length>=1?a.a.createElement(r.Fragment,null,a.a.createElement("h3",{className:"cart-page-title"},"Your wishlist items"),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-12"},a.a.createElement("div",{className:"table-content table-responsive cart-table-content"},a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Image"),a.a.createElement("th",null,"Product Name"),a.a.createElement("th",null,"Unit Price"),a.a.createElement("th",null,"Add To Cart"),a.a.createElement("th",null,"action"))),a.a.createElement("tbody",null,f.map((function(e,t){var c=Object(m.a)(e.price,e.discount),i=(e.price*l.currencyRate).toFixed(2),u=(c*l.currencyRate).toFixed(2),f=n.filter((function(t){return t._id===e._id}))[0];return a.a.createElement("tr",{key:t},a.a.createElement("td",{className:"product-thumbnail"},a.a.createElement(o.b,{to:y.c+"/product/"+e._id},a.a.createElement("img",{className:"img-fluid",src:y.b+e.image[0],alt:""}))),a.a.createElement("td",{className:"product-name text-center"},a.a.createElement(o.b,{to:y.c+"/product/"+e._id},e.name)),a.a.createElement("td",{className:"product-price-cart"},null!==c?a.a.createElement(r.Fragment,null,a.a.createElement("span",{className:"amount old"},l.currencySymbol+i),a.a.createElement("span",{className:"amount"},l.currencySymbol+u)):a.a.createElement("span",{className:"amount"},l.currencySymbol+i)),a.a.createElement("td",{className:"product-wishlist-cart"},e.affiliateLink?a.a.createElement("a",{href:e.affiliateLink,rel:"noopener noreferrer",target:"_blank"}," ","Buy now"," "):e.variation&&e.variation.length>=1?a.a.createElement(o.b,{to:"".concat(y.c,"/product/").concat(e._id)},"Select option"):e.stock&&e.stock>0?a.a.createElement("button",{onClick:function(){return s(e,v)},className:void 0!==f&&f.quantity>0?"active":"",disabled:void 0!==f&&f.quantity>0,title:void 0!==e?"Added to cart":"Add to cart"},void 0!==f&&f.quantity>0?"Added":"Add to cart"):a.a.createElement("button",{disabled:!0,className:"active"},"Out of stock")),a.a.createElement("td",{className:"product-remove"},a.a.createElement("button",{onClick:function(){return d(e,v)}},a.a.createElement("i",{className:"fa fa-times"}))))}))))))),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-12"},a.a.createElement("div",{className:"cart-shiping-update-wrapper"},a.a.createElement("div",{className:"cart-shiping-update"},a.a.createElement(o.b,{to:y.c+"/shop-grid-standard"},"Continue Shopping")),a.a.createElement("div",{className:"cart-clear"},a.a.createElement("button",{onClick:function(){return h(v)}},"Clear Wishlist")))))):a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-lg-12"},a.a.createElement("div",{className:"item-empty-area text-center"},a.a.createElement("div",{className:"item-empty-area__icon mb-30"},a.a.createElement("i",{className:"pe-7s-like"})),a.a.createElement("div",{className:"item-empty-area__text"},"No items found in wishlist ",a.a.createElement("br",null)," ",a.a.createElement(o.b,{to:y.c+"/shop-grid-standard"},"Add Items")))))))))}))}}]);
//# sourceMappingURL=20.405d3b32.chunk.js.map