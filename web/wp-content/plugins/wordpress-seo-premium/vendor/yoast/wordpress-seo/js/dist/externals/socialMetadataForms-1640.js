window.yoast=window.yoast||{},window.yoast.socialMetadataForms=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=741)}({0:function(e,t){e.exports=window.yoast.propTypes},1:function(e,t){e.exports=window.wp.element},10:function(e,t){e.exports=window.wp.i18n},103:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},11:function(e,t,n){var r=n(36);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},12:function(e,t,n){var r=n(23).default,o=n(15);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},13:function(e,t){e.exports=window.yoast.componentsNew},14:function(e,t){e.exports=window.yoast.helpers},15:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},16:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},2:function(e,t){e.exports=window.lodash},23:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,t){e.exports=window.yoast.replacementVariableEditor},3:function(e,t){e.exports=window.React},35:function(e,t,n){var r=n(103);e.exports=function(e,t){if(null==e)return{};var n,o,i=r(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i},e.exports.default=e.exports,e.exports.__esModule=!0},36:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,n(t,r)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},4:function(e,t){e.exports=window.yoast.styledComponents},5:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,t){e.exports=window.yoast.styleGuide},7:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},741:function(e,t,n){"use strict";n.r(t),n.d(t,"socialReducer",(function(){return R})),n.d(t,"SocialMetadataPreviewForm",(function(){return le})),n.d(t,"actions",(function(){return r})),n.d(t,"selectorsFactory",(function(){return x}));var r={};n.r(r),n.d(r,"SET_SOCIAL_TITLE",(function(){return o})),n.d(r,"SET_SOCIAL_DESCRIPTION",(function(){return i})),n.d(r,"SET_SOCIAL_IMAGE_URL",(function(){return c})),n.d(r,"SET_SOCIAL_IMAGE_TYPE",(function(){return a})),n.d(r,"SET_SOCIAL_IMAGE_ID",(function(){return u})),n.d(r,"SET_SOCIAL_IMAGE",(function(){return s})),n.d(r,"CLEAR_SOCIAL_IMAGE",(function(){return l})),n.d(r,"setSocialPreviewTitle",(function(){return p})),n.d(r,"setSocialPreviewDescription",(function(){return f})),n.d(r,"setSocialPreviewImageUrl",(function(){return d})),n.d(r,"setSocialPreviewImageType",(function(){return b})),n.d(r,"setSocialPreviewImageId",(function(){return m})),n.d(r,"setSocialPreviewImage",(function(){return g})),n.d(r,"clearSocialPreviewImage",(function(){return y}));var o="SET_SOCIAL_TITLE",i="SET_SOCIAL_DESCRIPTION",c="SET_SOCIAL_IMAGE_URL",a="SET_SOCIAL_IMAGE_TYPE",u="SET_SOCIAL_IMAGE_ID",s="SET_SOCIAL_IMAGE",l="CLEAR_SOCIAL_IMAGE",p=function(e,t){return{type:o,platform:t,title:e}},f=function(e,t){return{type:i,platform:t,description:e}},d=function(e,t){return{type:c,platform:t,imageUrl:e}},b=function(e,t){return{type:a,platform:t,imageType:e}},m=function(e,t){return{type:u,platform:t,imageId:e}},g=function(e,t){return{type:s,platform:t,image:e}},y=function(e){return{type:l,platform:e}},v=n(2),x=function(e){var t={getFacebookData:function(t){return Object(v.get)(t,"".concat(e,".facebook"),{})},getFacebookTitle:function(e){return t.getFacebookData(e).title},getFacebookDescription:function(e){return t.getFacebookData(e).description},getFacebookImageUrl:function(e){return t.getFacebookData(e).image.url},getFacebookImageType:function(e){return t.getFacebookData(e).image.type},getTwitterData:function(t){return Object(v.get)(t,"".concat(e,".twitter"),{})},getTwitterTitle:function(e){return t.getTwitterData(e).title},getTwitterDescription:function(e){return t.getTwitterData(e).description},getTwitterImageUrl:function(e){return t.getTwitterData(e).image.url},getTwitterImageType:function(e){return t.getTwitterData(e).image.type}};return t},O=n(16),_=n.n(O),w=n(88);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){_()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={title:"",description:"",warnings:[],image:{bytes:null,type:null,height:null,width:null,url:"",id:null,alt:""}};function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return E(E({},e),{},{title:t.title});case i:return E(E({},e),{},{description:t.description});case s:return E(E({},e),{},{image:E({},t.image)});case c:return E(E({},e),{},{image:E(E({},e.image),{},{url:t.imageUrl})});case a:return E(E({},e),{},{image:E(E({},e.image),{},{type:t.imageType})});case u:return E(E({},e),{},{image:E(E({},e.image),{},{id:t.imageId})});case l:return E(E({},e),{},{image:{bytes:null,type:null,height:null,width:null,url:"",id:null,alt:""}});default:return e}}function j(e,t){return function(n,r){var o=r.platform;return void 0===n?h:o!==t?n:e(n,r)}}var T,P,R=Object(w.combineReducers)({facebook:j(I,"facebook"),twitter:j(I,"twitter")}),M=n(8),A=n.n(M),C=n(9),D=n.n(C),k=n(15),L=n.n(k),F=n(11),H=n.n(F),V=n(12),U=n.n(V),G=n(7),q=n.n(G),B=n(35),N=n.n(B),z=n(5),W=n.n(z),Y=n(1),$=n(10),J=n(14),K=n(24),Q=n(6),X=n(0),Z=n.n(X),ee=n(3),te=n(4),ne=n.n(te),re=n(13);var oe=function(e){return e?Q.colors.$color_snippet_focus:Q.colors.$color_snippet_hover},ie=ne.a.div(T||(T=W()(["\n\tposition: relative;"]))),ce=ne.a.div(P||(P=W()(["\n\tdisplay: ",";\n\n\t::before {\n\t\tposition: absolute;\n\t\ttop: -2px;\n\t\t",": -25px;\n\t\twidth: 24px;\n\t\theight: 24px;\n\t\tbackground-image: url(\n\t\t","\n\t\t);\n\t\tcolor: ",';\n\t\tbackground-size: 24px;\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: center;\n\t\tcontent: "";\n\t}\n'])),(function(e){return e.isActive||e.isHovered?"block":"none"}),Object(J.getDirectionalStyle)("left","right"),(function(e){return Object(J.getDirectionalStyle)(Object(Q.angleRight)(oe(e.isActive)),Object(Q.angleLeft)(oe(e.isActive)))}),(function(e){return oe(e.isActive)}));ce.propTypes={isActive:Z.a.bool,isHovered:Z.a.bool},ce.defaultProps={isActive:!1,isHovered:!1};var ae,ue=(ae=re.ImageSelect,function e(t){e.propTypes={isActive:Z.a.bool.isRequired,isHovered:Z.a.bool.isRequired};var n=t.isActive,r=t.isHovered,o=N()(t,["isActive","isHovered"]);return Object(Y.createElement)(ie,null,Object(Y.createElement)(ce,{isActive:n,isHovered:r}),Object(Y.createElement)(ae,o))}),se=function(e){H()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=q()(t);if(n){var o=q()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return U()(this,e)});function o(e){var t;return A()(this,o),(t=r.call(this,e)).onImageEnter=e.onMouseHover.bind(L()(t),"image"),t.onTitleEnter=e.onMouseHover.bind(L()(t),"title"),t.onDescriptionEnter=e.onMouseHover.bind(L()(t),"description"),t.onLeave=e.onMouseHover.bind(L()(t),""),t.onImageSelectBlur=e.onSelect.bind(L()(t),""),t.onSelectTitleEditor=t.onSelectEditor.bind(L()(t),"title"),t.onSelectDescriptionEditor=t.onSelectEditor.bind(L()(t),"description"),t.onDeselectEditor=t.onSelectEditor.bind(L()(t),""),t.onTitleEditorRef=t.onSetEditorRef.bind(L()(t),"title"),t.onDescriptionEditorRef=t.onSetEditorRef.bind(L()(t),"description"),t}return D()(o,[{key:"onSelectEditor",value:function(e){this.props.onSelect(e)}},{key:"onSetEditorRef",value:function(e,t){this.props.setEditorRef(e,t)}},{key:"render",value:function(){var e=this.props,t=e.socialMediumName,n=e.onSelectImageClick,r=e.onRemoveImageClick,o=e.title,i=e.titleInputPlaceholder,c=e.description,a=e.descriptionInputPlaceholder,u=e.onTitleChange,s=e.onDescriptionChange,l=e.hoveredField,p=e.activeField,f=e.isPremium,d=e.replacementVariables,b=e.recommendedReplacementVariables,m=e.imageWarnings,g=e.imageUrl,y=e.idSuffix,v=!!g,x=Object($.sprintf)(Object($.__)("%s image","yoast-components"),t),O=Object($.sprintf)(Object($.__)("%s title","yoast-components"),t),_=Object($.sprintf)(Object($.__)("%s description","yoast-components"),t),w=t.toLowerCase();return Object(Y.createElement)(ee.Fragment,null,Object(Y.createElement)(ue,{label:x,onClick:n,onRemoveImageClick:r,warnings:m,imageSelected:v,onMouseEnter:this.onImageEnter,onMouseLeave:this.onLeave,isActive:"image"===p,isHovered:"image"===l,imageUrl:g,hasPreview:!f,imageUrlInputId:Object(J.join)([w,"url-input",y]),selectImageButtonId:Object(J.join)([w,"select-button",y]),replaceImageButtonId:Object(J.join)([w,"replace-button",y]),removeImageButtonId:Object(J.join)([w,"remove-button",y])}),Object(Y.createElement)(K.ReplacementVariableEditor,{onChange:u,content:o,placeholder:i,replacementVariables:d,recommendedReplacementVariables:b,type:"title",fieldId:Object(J.join)([w,"title-input",y]),label:O,onMouseEnter:this.onTitleEnter,onMouseLeave:this.onLeave,isActive:"title"===p,isHovered:"title"===l,withCaret:!0,onFocus:this.onSelectTitleEditor,onBlur:this.onDeselectEditor,editorRef:this.onTitleEditorRef}),Object(Y.createElement)(K.ReplacementVariableEditor,{onChange:s,content:c,placeholder:a,replacementVariables:d,recommendedReplacementVariables:b,type:"description",fieldId:Object(J.join)([w,"description-input",y]),label:_,onMouseEnter:this.onDescriptionEnter,onMouseLeave:this.onLeave,isActive:"description"===p,isHovered:"description"===l,withCaret:!0,onFocus:this.onSelectDescriptionEditor,onBlur:this.onDeselectEditor,editorRef:this.onDescriptionEditorRef}))}}]),o}(ee.Component);se.propTypes={socialMediumName:Z.a.oneOf(["Twitter","Facebook"]).isRequired,onSelectImageClick:Z.a.func.isRequired,onRemoveImageClick:Z.a.func.isRequired,title:Z.a.string.isRequired,description:Z.a.string.isRequired,onTitleChange:Z.a.func.isRequired,onDescriptionChange:Z.a.func.isRequired,isPremium:Z.a.bool,hoveredField:Z.a.string,activeField:Z.a.string,onSelect:Z.a.func,replacementVariables:K.replacementVariablesShape,recommendedReplacementVariables:Z.a.arrayOf(Z.a.string),imageWarnings:Z.a.array,imageUrl:Z.a.string,titleInputPlaceholder:Z.a.string,descriptionInputPlaceholder:Z.a.string,setEditorRef:Z.a.func,onMouseHover:Z.a.func,idSuffix:Z.a.string},se.defaultProps={replacementVariables:[],recommendedReplacementVariables:[],imageWarnings:[],hoveredField:"",activeField:"",onSelect:function(){},imageUrl:"",titleInputPlaceholder:"",descriptionInputPlaceholder:"",isPremium:!1,setEditorRef:function(){},onMouseHover:function(){},idSuffix:""};var le=se},8:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},88:function(e,t){e.exports=window.yoast.redux},9:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0}});