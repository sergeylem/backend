/*! For license information please see 13.85b5c71a.chunk.js.LICENSE.txt */
(this["webpackJsonpgadget-world"]=this["webpackJsonpgadget-world"]||[]).push([[13],{475:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(103),o=a(146);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(o.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:c.c,finalItem:"span"}))))}},476:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(482),o=a(474),l=a(103),s=a(484),m=a(481),i=a(483),u=a(17),d=function(e){var t=e.backgroundColorClass,a=e.spaceTopClass,c=e.spaceBottomClass,d=e.containerClass,p=e.extraFooterClass,f=e.sideMenu,g=Object(n.useState)(0),b=Object(o.a)(g,2),E=b[0],v=b[1],h=Object(n.useState)(0),y=Object(o.a)(h,2),N=y[0],j=y[1];Object(n.useEffect)((function(){return j(100),window.addEventListener("scroll",C),function(){window.removeEventListener("scroll",C)}}),[]);var C=function(){v(window.scrollY)};return r.a.createElement("footer",{className:"footer-area ".concat(t||""," ").concat(a||""," ").concat(c||""," ").concat(p||"")},r.a.createElement("div",{className:"".concat(d||"container")},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"".concat(f?"col-xl-3 col-sm-4":"col-lg-3 col-sm-4")},r.a.createElement(m.a,{footerLogo:"/assets/img/logo/logo.svg",spaceBottomClass:"mb-30"})),r.a.createElement("div",{className:"".concat(f?"col-xl-2 col-sm-4":"col-lg-2 col-sm-4")},r.a.createElement("div",{className:"footer-widget mb-30 "},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"ABOUT US")),r.a.createElement("div",{className:"footer-list"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:u.c+"/about"},"About us")),r.a.createElement("li",null,r.a.createElement(l.b,{to:u.c+"#/"},"Store location")),r.a.createElement("li",null,r.a.createElement(l.b,{to:u.c+"/contact"},"Contact")),r.a.createElement("li",null,r.a.createElement(l.b,{to:u.c+"#/"},"Orders tracking")))))),r.a.createElement("div",{className:"".concat(f?"col-xl-3 col-sm-4":"col-lg-2 col-sm-4npm start")},r.a.createElement("div",{className:"".concat("footer-widget mb-30 ")},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"FOLLOW US")),r.a.createElement("div",{className:"footer-list"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"//www.facebook.com",target:"_blank",rel:"noopener noreferrer"},"Facebook")),r.a.createElement("li",null,r.a.createElement("a",{href:"//www.twitter.com",target:"_blank",rel:"noopener noreferrer"},"Twitter")),r.a.createElement("li",null,r.a.createElement("a",{href:"//www.instagram.com",target:"_blank",rel:"noopener noreferrer"},"Instagram")),r.a.createElement("li",null,r.a.createElement("a",{href:"//www.youtube.com",target:"_blank",rel:"noopener noreferrer"},"Youtube")))))),r.a.createElement("div",{className:"".concat(f?"col-xl-4 col-sm-8":"col-lg-4 col-sm-6")},r.a.createElement(i.a,{sideMenu:f})))),r.a.createElement("button",{className:"scroll-top ".concat(E>N?"show":""),onClick:function(){s.animateScroll.scrollToTop()}},r.a.createElement("i",{className:"fa fa-angle-double-up"})))};t.a=function(e){var t=e.children,a=e.headerContainerClass,o=e.headerTop,l=e.headerPaddingClass;return r.a.createElement(n.Fragment,null,r.a.createElement(c.a,{layout:a,top:o,headerPaddingClass:l}),t,r.a.createElement(d,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},477:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},480:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return i}));var n=a(5),r=a(492),c=a.n(r),o=a(0),l=a.n(o),s=l.a.createContext({});s.Consumer,s.Provider;function m(e,t){var a=Object(o.useContext)(s);return e||a[t]||t}function i(e,t){"string"===typeof t&&(t={prefix:t});var a=e.prototype&&e.prototype.isReactComponent,r=t,o=r.prefix,s=r.forwardRefAs,i=void 0===s?a?"ref":"innerRef":s;return c()((function(t,a){var r=Object(n.a)({},t);r[i]=a;var c=m(r.bsPrefix,o);return l.a.createElement(e,Object(n.a)({},r,{bsPrefix:c}))}),{displayName:"Bootstrap("+(e.displayName||e.name)+")"})}},492:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,n=a.propTypes,c=a.defaultProps,o=a.allowFallback,l=void 0!==o&&o,s=a.displayName,m=void 0===s?e.name||e.displayName:s,i=function(t,a){return e(t,a)};return Object.assign(r.default.forwardRef||!l?r.default.forwardRef(i):function(e){return i(e,null)},{displayName:m,propTypes:n,defaultProps:c})};var n,r=(n=a(0))&&n.__esModule?n:{default:n}},493:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c})),a.d(t,"e",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"h",(function(){return s})),a.d(t,"g",(function(){return m})),a.d(t,"f",(function(){return i})),a.d(t,"d",(function(){return u})),a.d(t,"i",(function(){return d}));var n=a(17),r=function(e,t,a){return fetch("".concat(n.a,"/product/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:a}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},c=function(e,t,a){return fetch("".concat(n.a,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},o=function(){return fetch("".concat(n.a,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},l=function(e,t,a){return fetch("".concat(n.a,"/tag/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},s=function(){return fetch("".concat(n.a,"/tags"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},m=function(){return fetch("".concat(n.a,"/products?limit=undefined"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},i=function(e){return fetch("".concat(n.a,"/product/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},u=function(e,t,a){return fetch("".concat(n.a,"/product/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},d=function(e,t,a,r){return fetch("".concat(n.a,"/product/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)},body:r}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},494:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(5),r=a(14),c=a(477),o=a.n(c),l=/-(.)/g;var s=a(0),m=a.n(s),i=a(480),u=function(e){return e[0].toUpperCase()+(t=e,t.replace(l,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var a=void 0===t?{}:t,c=a.displayName,l=void 0===c?u(e):c,s=a.Component,d=void 0===s?"div":s,p=a.defaultProps,f=m.a.forwardRef((function(t,a){var c=t.className,l=t.bsPrefix,s=t.as,u=void 0===s?d:s,p=Object(r.a)(t,["className","bsPrefix","as"]),f=Object(i.b)(l,e);return m.a.createElement(u,Object(n.a)({ref:a,className:o()(c,f)},p))}));return f.defaultProps=p,f.displayName=l,f}},499:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=r.a.createContext(null)},500:function(e,t,a){"use strict";var n=a(5),r=a(0),c=a.n(r),o=a(477),l=a.n(o);t.a=function(e){return c.a.forwardRef((function(t,a){return c.a.createElement("div",Object(n.a)({},t,{ref:a,className:l()(t.className,e)}))}))}},510:function(e,t,a){"use strict";var n=a(5),r=a(14),c=a(477),o=a.n(c),l=a(0),s=a.n(l),m=a(480),i=a(494),u=a(500),d=a(499),p=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,l=e.variant,i=e.as,u=void 0===i?"img":i,d=Object(r.a)(e,["bsPrefix","className","variant","as"]),p=Object(m.b)(a,"card-img");return s.a.createElement(u,Object(n.a)({ref:t,className:o()(l?p+"-"+l:p,c)},d))}));p.displayName="CardImg",p.defaultProps={variant:null};var f=p,g=Object(u.a)("h5"),b=Object(u.a)("h6"),E=Object(i.a)("card-body"),v=s.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.bg,u=e.text,p=e.border,f=e.body,g=e.children,b=e.as,v=void 0===b?"div":b,h=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=Object(m.b)(a,"card"),N=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return s.a.createElement(d.a.Provider,{value:N},s.a.createElement(v,Object(n.a)({ref:t},h,{className:o()(c,y,i&&"bg-"+i,u&&"text-"+u,p&&"border-"+p)}),f?s.a.createElement(E,null,g):g))}));v.displayName="Card",v.defaultProps={body:!1},v.Img=f,v.Title=Object(i.a)("card-title",{Component:g}),v.Subtitle=Object(i.a)("card-subtitle",{Component:b}),v.Body=E,v.Link=Object(i.a)("card-link",{Component:"a"}),v.Text=Object(i.a)("card-text",{Component:"p"}),v.Header=Object(i.a)("card-header"),v.Footer=Object(i.a)("card-footer"),v.ImgOverlay=Object(i.a)("card-img-overlay");t.a=v},524:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(){var e,t,a=!1,n={name:"",sku:"",category:"",tag:"",price:"",discount:"",rating:"",saleCount:"",isNew:"",stock:"",shortDescription:"",model:"",performance:"",storage:"",camera:"",battery:"",display:"",ram:"",os:"",isError:!1};return 0===(e=document.forms.product.name.value.length)||e<3?(n.name="Name must not be empty or less than 3 chars!",a=!0):n.name="",0===(e=document.forms.product.sku.value.length)||e>7?(n.sku="SKU must not be empty or more than 7 chars!",a=!0):n.sku="",0===document.forms.product.category.options.selectedIndex?(n.category="Category must not be empty!",a=!0):n.category="",0===document.forms.product.tag.options.selectedIndex?(n.tag="Tag must not be empty!",a=!0):n.tag="",e=document.forms.product.price.value.length,t=document.forms.product.price.value,0===e||t<0?(n.price="Price must not be empty!",a=!0):n.price="",e=document.forms.product.discount.value.length,t=document.forms.product.discount.value,0===e||t<0||t>100?(n.discount="Discount must not be empty or more than 100!",a=!0):n.discount="",e=document.forms.product.rating.value.length,t=document.forms.product.rating.value,0===e||t<0||t>5?(n.rating="Rating must not be empty or more than 5!",a=!0):n.rating="",e=document.forms.product.saleCount.value.length,t=document.forms.product.saleCount.value,0===e||t<0||t>9999?(n.saleCount="SaleCount must not be empty!",a=!0):n.saleCount="",0===document.forms.product.isNew.options.selectedIndex?(n.isNew="Is New must not be empty!",a=!0):n.isNew="",e=document.forms.product.stock.value.length,t=document.forms.product.stock.value,0===e||t<0||t>999?(n.stock="Stock must not be empty!",a=!0):n.stock="",0===(e=document.forms.product.shortDescription.value.length)||e>500?(n.shortDescription="ShortDescription must not be empty or more than 500 chars!",a=!0):n.shortDescription="",0===(e=document.forms.product.model.value.length)||e>30?(n.model="Model must not be empty or more than 30 chars!",a=!0):n.model="",(e=document.forms.product.performance.value.length)>100?(n.performance="Performance must not be more than 100 chars!",a=!0):n.performance="",(e=document.forms.product.storage.value.length)>4?(n.storage="Storage must not be more than 3 chars!",a=!0):n.storage="",(e=document.forms.product.camera.value.length)>100?(n.camera="Camera must not be more than 100 chars!",a=!0):n.camera="",(e=document.forms.product.battery.value.length)>4?(n.battery="Battery must not be more than 4 chars!",a=!0):n.battery="",(e=document.forms.product.display.value.length)>4?(n.display="Display must not be more than 4 chars!",a=!0):n.display="",(e=document.forms.product.ram.value.length)>4?(n.ram="Ram must not be more than 4 chars!",a=!0):n.ram="",(e=document.forms.product.os.value.length)>12?(n.os="OS must not be more than 12 chars!",a=!0):n.os="",n.isError=!!a,n}},587:function(e,t,a){"use strict";a.r(t);var n=a(148),r=a(11),c=a(474),o=a(0),l=a.n(o),s=a(146),m=a(510),i=a(476),u=a(475),d=a(17),p=a(489),f=a(493),g=a(524);t.default=function(e){var t=e.match,a=Object(o.useState)(),b=Object(c.a)(a,2),E=b[0],v=b[1],h=Object(o.useState)(!1),y=Object(c.a)(h,2),N=y[0],j=y[1],C=Object(o.useState)({name:"",sku:"",category:"",tag:"",price:"",discount:"",rating:"",saleCount:"",isNew:"",stock:"",shortDescription:"",model:"",performance:"",storage:"",camera:"",battery:"",display:"",ram:"",os:""}),O=Object(c.a)(C,2),w=O[0],k=O[1],x=Object(o.useState)({name:"",sku:"",price:"",discount:"",rating:"",saleCount:"",stock:"",categories:[],tags:[],shortDescription:"",fullDescription:"",model:"",performance:"",display:"",os:"",ram:"",storage:"",camera:"",battery:"",loading:!1,error:"",success:!1,updatedProduct:"",formData:""}),D=Object(c.a)(x,2),P=D[0],S=D[1],T=Object(p.b)(),I=T.user,B=T.token,A=P.name,R=P.sku,_=P.price,F=P.discount,U=P.rating,L=P.saleCount,M=P.stock,z=P.categories,G=P.tags,J=P.shortDescription,H=P.fullDescription,Y=P.model,K=P.performance,W=P.display,q=P.os,Q=P.ram,V=P.storage,X=P.camera,Z=P.battery,$=P.loading,ee=P.error,te=P.success,ae=P.updatedProduct,ne=P.formData,re=function(){var e=[];Object(f.e)().then((function(t){t.error?S(Object(r.a)(Object(r.a)({},P),{},{error:t.error})):e=t})),Object(f.h)().then((function(t){t.error?S(Object(r.a)(Object(r.a)({},P),{},{error:t.error})):S({categories:e,tags:t,formData:new FormData})}))};Object(o.useEffect)((function(){var e;e=t.params.productId,Object(f.f)(e).then((function(e){e.error?S(Object(r.a)(Object(r.a)({},P),{},{error:e.error})):S(Object(r.a)(Object(r.a)({},P),{},{name:e.name,sku:e.sku,price:e.price,discount:e.discount,rating:e.rating,saleCount:e.saleCount,isnew:e.isnew,stock:e.stock,category:e.category,tag:e.tag,shortDescription:e.shortDescription,fullDescription:e.fullDescription,model:e.model,performance:e.performance,display:e.display,os:e.os,ram:e.ram,storage:e.storage,camera:e.camera,battery:e.battery,formData:new FormData}))})),re()}),[]);var ce=function(e){return function(t){var a="image"===e?t.target.files[0]:t.target.value;if(ne.set(e,a),S(Object(r.a)(Object(r.a)({},P),{},Object(n.a)({error:"",success:!1},e,a))),"image"===e){var c=new FileReader;c.onload=function(){v(c.result)},c.readAsDataURL(t.target.files[0])}}},oe=Object(o.useRef)();return l.a.createElement(o.Fragment,null,l.a.createElement(s.BreadcrumbsItem,{to:d.c+"/"},"Home"),l.a.createElement(s.BreadcrumbsItem,null,"User Dashboard"),l.a.createElement(i.a,{headerTop:"visible"},l.a.createElement(u.a,null),$&&l.a.createElement("div",{className:"alert alert-success text-center"},l.a.createElement("h2",null,"Loading...")),l.a.createElement("div",{className:"alert alert-info text-center",style:{display:te?"":"none"}},l.a.createElement("h4",null,'"'.concat(ae,'" is updated!'))),l.a.createElement("div",{className:"alert alert-danger text-center",style:{display:ee?"":"none"}},l.a.createElement("h3",null,ee)),l.a.createElement("form",{className:"myaccount-area pb-80 pt-50",name:"product",onSubmit:function(e){e.preventDefault();var a=Object(g.a)();if(a.isError||!E)return k(Object(r.a)(Object(r.a)({},w),{},{name:a.name,sku:a.sku,category:a.category,tag:a.tag,price:a.price,discount:a.discount,rating:a.rating,saleCount:a.saleCount,isNew:a.isNew,stock:a.stock,shortDescription:a.shortDescription,model:a.model,performance:a.performance,storage:a.storage,camera:a.camera,battery:a.battery,display:a.display,ram:a.ram,os:a.os})),void j(!0);k(Object(r.a)(Object(r.a)({},w),{},{name:"",sku:"",category:"",tag:"",price:"",discount:"",rating:"",saleCount:"",isNew:"",stock:"",shortDescription:"",model:"",performance:"",storage:"",camera:"",battery:"",display:"",ram:"",os:""})),j(!1);var n=document.forms.product.name.value;S(Object(r.a)(Object(r.a)({},P),{},{name:n,error:"",loading:!0})),console.log("name "+n);var c=document.forms.product.category.options.selectedIndex-1,o=document.forms.product.tag.options.selectedIndex-1,l=!!document.forms.product.isNew.options.selectedIndex;ne.set("name",document.forms.product.name.value),ne.set("sku",document.forms.product.sku.value),ne.set("category",z[c]._id),ne.set("tag",G[o]._id),ne.set("isnew",l),ne.set("price",document.forms.product.price.value),ne.set("discount",document.forms.product.discount.value),ne.set("rating",document.forms.product.rating.value),ne.set("saleCount",document.forms.product.saleCount.value),ne.set("stock",document.forms.product.stock.value),ne.set("shortDescription",document.forms.product.shortDescription.value),ne.set("fullDescription",document.forms.product.fullDescription.value),ne.set("model",document.forms.product.model.value),ne.set("performance",document.forms.product.performance.value),ne.set("display",document.forms.product.display.value),ne.set("os",document.forms.product.os.value),ne.set("ram",document.forms.product.ram.value),ne.set("storage",document.forms.product.storage.value),ne.set("camera",document.forms.product.camera.value),ne.set("battery",document.forms.product.battery.value),Object(f.i)(t.params.productId,I._id,B,ne).then((function(e){e.errors?S(Object(r.a)(Object(r.a)({},P),{},{error:e.errors[0].msg,success:!1})):S(Object(r.a)(Object(r.a)({},P),{},{updatedProduct:n,name:"",sku:"",price:"",discount:"",rating:"",saleCount:"",stock:"",image:"",shortDescription:"",fullDescription:"",model:"",performance:"",display:"",os:"",ram:"",storage:"",camera:"",battery:"",loading:!1,success:!0}))})),v(null)}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"ml-auto mr-auto col-lg-9"},l.a.createElement("div",{className:"myaccount-wrapper"},l.a.createElement(m.a,{className:"single-my-account mb-20"},l.a.createElement(m.a.Body,null,l.a.createElement("div",{className:"myaccount-info-wrapper"},l.a.createElement("div",{className:"account-info-wrapper"},l.a.createElement("h4",null,"Product creation form")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{onChange:ce("name"),type:"text",value:A,name:"name",id:"name"}),N&&l.a.createElement("p",null,w.name))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info"},l.a.createElement("label",null,"SKU code"),l.a.createElement("input",{onChange:ce("sku"),type:"text",value:R,name:"sku",id:"sku"}),N&&l.a.createElement("p",null,w.sku))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info"},l.a.createElement("label",null,"Category"),l.a.createElement("select",{className:"form-control",onChange:ce("category"),name:"category",id:"category"},l.a.createElement("option",null,"Please select"),z&&z.map((function(e,t){return l.a.createElement("option",{key:t,value:e._id},e.name)}))),N&&l.a.createElement("p",null,w.category))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info"},l.a.createElement("label",null,"Tag"),l.a.createElement("select",{className:"form-control",onChange:ce("tag"),name:"tag",id:"tag"},l.a.createElement("option",null,"Please select"),G&&G.map((function(e,t){return l.a.createElement("option",{key:t,value:e._id},e.name)}))),N&&l.a.createElement("p",null,w.tag))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info mt-20"},l.a.createElement("label",null,"Price"),l.a.createElement("input",{onChange:ce("price"),type:"number",value:_,name:"price"}),N&&l.a.createElement("p",null,w.price))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info mt-20"},l.a.createElement("label",null,"Discount"),l.a.createElement("input",{onChange:ce("discount"),type:"number",value:F,name:"discount"}),N&&l.a.createElement("p",null,w.discount))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info"},l.a.createElement("label",null,"Rating"),l.a.createElement("input",{onChange:ce("rating"),type:"number",value:U,name:"rating"}),N&&l.a.createElement("p",null,w.rating))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info"},l.a.createElement("label",null,"Sale count"),l.a.createElement("input",{onChange:ce("saleCount"),type:"number",value:L,name:"saleCount"}),N&&l.a.createElement("p",null,w.saleCount))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info"},l.a.createElement("label",null,"Is New"),l.a.createElement("select",{className:"form-control",name:"isNew",id:"isNew",onChange:ce("isnew")},l.a.createElement("option",null,"Please select"),l.a.createElement("option",{value:"1"},"Yes"),l.a.createElement("option",{value:"0"},"No")),N&&l.a.createElement("p",null,w.isNew))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info"},l.a.createElement("label",null,"Stock"),l.a.createElement("input",{onChange:ce("stock"),type:"number",value:M,name:"stock"}),N&&l.a.createElement("p",null,w.stock))),l.a.createElement("div",{className:"col-lg-12 col-md-12"},l.a.createElement("label",null,"Image"),l.a.createElement("input",{type:"file",style:{display:"none"},id:"fileupload",name:"image",accept:"image/png, image/jpeg",ref:oe,onChange:ce("image")}),l.a.createElement("div",{className:"billing-info"},E&&l.a.createElement("img",{src:E,alt:"Preview"}),N&&!E&&l.a.createElement("p",null,"Image must not be empty!")),l.a.createElement("div",{className:"billing-pick-btn"},l.a.createElement("div",{className:"billing-btn"},l.a.createElement("button",{onClick:function(e){e.preventDefault(),oe.current.click()}},"Pick file")))),l.a.createElement("div",{className:"col-lg-12 col-md-12"},l.a.createElement("label",null,"Short description"),l.a.createElement("div",{className:"billing-info"},l.a.createElement("input",{onChange:ce("shortDescription"),type:"text",value:J,name:"shortDescription"}),N&&l.a.createElement("p",null,w.shortDescription))),l.a.createElement("div",{className:"col-lg-12 col-md-12"},l.a.createElement("div",{className:"billing-info"},l.a.createElement("label",null,"Full description"),l.a.createElement("input",{onChange:ce("fullDescription"),type:"text",value:H,name:"fullDescription"})))),l.a.createElement("div",{className:"account-info-wrapper mt-30"},l.a.createElement("h4",null,"Specification")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info"},l.a.createElement("label",null,"Model"),l.a.createElement("input",{onChange:ce("model"),type:"text",value:Y,name:"model"}),N&&l.a.createElement("p",null,w.model))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info"},l.a.createElement("label",null,"Performance"),l.a.createElement("input",{onChange:ce("performance"),type:"text",value:K,name:"performance"}),N&&l.a.createElement("p",null,w.performance))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info"},l.a.createElement("label",null,"Display"),l.a.createElement("input",{onChange:ce("display"),type:"text",value:W,name:"display"}),N&&l.a.createElement("p",null,w.display))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info"},l.a.createElement("label",null,"Operation System"),l.a.createElement("input",{onChange:ce("os"),type:"text",value:q,name:"os"}),N&&l.a.createElement("p",null,w.os))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info mt-20"},l.a.createElement("label",null,"Ram"),l.a.createElement("input",{onChange:ce("ram"),type:"text",value:Q,name:"ram"}),N&&l.a.createElement("p",null,w.ram))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info mt-20"},l.a.createElement("label",null,"Storage"),l.a.createElement("input",{onChange:ce("storage"),type:"text",value:V,name:"storage"}),N&&l.a.createElement("p",null,w.storage))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info"},l.a.createElement("label",null,"Camera"),l.a.createElement("input",{onChange:ce("camera"),type:"text",value:X,name:"camera"}),N&&l.a.createElement("p",null,w.camera))),l.a.createElement("div",{className:"col-lg-6 col-md-6"},l.a.createElement("div",{className:"billing-info"},l.a.createElement("label",null,"Battery"),l.a.createElement("input",{onChange:ce("battery"),type:"text",value:Z,name:"battery"}),N&&l.a.createElement("p",null,w.battery)))),l.a.createElement("div",{className:"billing-back-btn"},l.a.createElement("div",{className:"billing-btn"},l.a.createElement("button",{type:"submit"},"Update")))))))))))))}}}]);
//# sourceMappingURL=13.85b5c71a.chunk.js.map