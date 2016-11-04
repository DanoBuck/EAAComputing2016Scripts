!function(e,d,f){!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):jQuery&&!jQuery.fn.qtip&&b(jQuery)}(function(a1){function a0(h,g,j,i){this.id=j,this.target=h,this.tooltip=az,this.elements={target:h},this._id=al+"-"+j,this.timers={img:{}},this.options=g,this.plugins={},this.cache={event:{},target:a1(),disabled:aF,attr:i,onTooltip:aF,lastClass:""},this.rendered=this.destroyed=this.disabled=this.waiting=this.hiddenDuringWait=this.positioning=this.triggering=aF}function aZ(g){return g===az||"object"!==a1.type(g)}function aY(g){return !(a1.isFunction(g)||g&&g.attr||g.length||"object"===a1.type(g)&&(g.jquery||g.then))}function aX(i){var g,l,k,j;return aZ(i)?aF:(aZ(i.metadata)&&(i.metadata={type:i.metadata}),"content" in i&&(g=i.content,aZ(g)||g.jquery||g.done?(l=aY(g)?aF:g,g=i.content={text:l}):l=g.text,"ajax" in g&&(k=g.ajax,j=k&&k.once!==aF,delete g.ajax,g.text=function(m,h){var o=l||a1(this).attr(h.options.content.attr)||"Loading...",n=a1.ajax(a1.extend({},k,{context:h})).then(k.success,az,k.error).then(function(p){return p&&j&&h.set("content.text",p),p},function(p,r,q){h.destroyed||0===p.status||h.set("content.text",r+": "+q)});return j?o:(h.set("content.text",o),n)}),"title" in g&&(a1.isPlainObject(g.title)&&(g.button=g.title.button,g.title=g.title.text),aY(g.title||aF)&&(g.title=aF))),"position" in i&&aZ(i.position)&&(i.position={my:i.position,at:i.position}),"show" in i&&aZ(i.show)&&(i.show=i.show.jquery?{target:i.show}:i.show===aG?{ready:aG}:{event:i.show}),"hide" in i&&aZ(i.hide)&&(i.hide=i.hide.jquery?{target:i.hide}:{event:i.hide}),"style" in i&&aZ(i.style)&&(i.style={classes:i.style}),a1.each(am,function(){this.sanitize&&this.sanitize(i)}),i)}function aW(h,g){for(var l,k=0,j=h,i=g.split(".");j=j[i[k++]];){k<i.length&&(l=j)}return[l||h,i.pop()]}function aV(h,g){var k,j,i;for(k in this.checks){if(this.checks.hasOwnProperty(k)){for(j in this.checks[k]){this.checks[k].hasOwnProperty(j)&&(i=new RegExp(j,"i").exec(h))&&(g.push(i),("builtin"===k||this.plugins[k])&&this.checks[k][j].apply(this.plugins[k]||this,g))}}}}function aU(g){return ai.concat("").join(g?"-"+g+" ":" ")}function aT(h,g){return g>0?setTimeout(a1.proxy(h,this),g):void h.call(this)}function aS(g){this.tooltip.hasClass(ab)||(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this.timers.show=aT.call(this,function(){this.toggle(aG,g)},this.options.show.delay))}function aR(h){if(!this.tooltip.hasClass(ab)&&!this.destroyed){var g=a1(h.relatedTarget),k=g.closest(ah)[0]===this.tooltip[0],j=g[0]===this.options.show.target[0];if(clearTimeout(this.timers.show),clearTimeout(this.timers.hide),this!==g[0]&&"mouse"===this.options.position.target&&k||this.options.hide.fixed&&/mouse(out|leave|move)/.test(h.type)&&(k||j)){try{h.preventDefault(),h.stopImmediatePropagation()}catch(i){}}else{this.timers.hide=aT.call(this,function(){this.toggle(aF,h)},this.options.hide.delay,this)}}}function aQ(g){!this.tooltip.hasClass(ab)&&this.options.hide.inactive&&(clearTimeout(this.timers.inactive),this.timers.inactive=aT.call(this,function(){this.hide(g)},this.options.hide.inactive))}function aP(g){this.rendered&&this.tooltip[0].offsetWidth>0&&this.reposition(g)}function aO(g,i,h){a1(d.body).delegate(g,(i.split?i:i.join("."+al+" "))+"."+al,function(){var j=aL.api[a1.attr(this,aj)];j&&!j.disabled&&h.apply(j,arguments)})}function aN(E,D,C){var B,A,z,y,x,w=a1(d.body),v=E[0]===d?w:E,u=E.metadata?E.metadata(C.metadata):az,t="html5"===C.metadata.type&&u?u[C.metadata.name]:az,s=E.data(C.metadata.name||"qtipopts");try{s="string"==typeof s?a1.parseJSON(s):s}catch(h){}if(y=a1.extend(aG,{},aL.defaults,C,"object"==typeof s?aX(s):az,aX(t||u)),A=y.position,y.id=D,"boolean"==typeof y.content.text){if(z=E.attr(y.content.attr),y.content.attr===aF||!z){return aF}y.content.text=z}if(A.container.length||(A.container=w),A.target===aF&&(A.target=v),y.show.target===aF&&(y.show.target=v),y.show.solo===aG&&(y.show.solo=A.container.closest("body")),y.hide.target===aF&&(y.hide.target=v),y.position.viewport===aG&&(y.position.viewport=A.container),A.container=A.container.eq(0),A.at=new aJ(A.at,aG),A.my=new aJ(A.my),E.data(al)){if(y.overwrite){E.qtip("destroy",!0)}else{if(y.overwrite===aF){return aF}}}return E.attr(ak,D),y.suppress&&(x=E.attr("title"))&&E.removeAttr("title").attr(b,x).attr("title",""),B=new a0(E,y,D,!!z),E.data(al,B),B}function aM(h,g){this.options=g,this._ns="-modal",this.qtip=h,this.init(h)}var aL,aK,aJ,aI,aH,aG=!0,aF=!1,az=null,ay="x",ax="y",aw="width",av="height",au="top",at="left",ar="bottom",aq="right",ap="center",ao="flipinvert",an="shift",am={},al="qtip",ak="data-hasqtip",aj="data-qtip-id",ai=["ui-widget","ui-tooltip"],ah="."+al,ag="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),af=al+"-fixed",ae=al+"-default",ad=al+"-focus",ac=al+"-hover",ab=al+"-disabled",c="_replacedByqTip",b="oldtitle",aC={ie:function(){var g,h;for(g=4,h=d.createElement("div");(h.innerHTML="<!--[if gt IE "+g+"]><i></i><![endif]-->")&&h.getElementsByTagName("i")[0];g+=1){}return g>4?g:NaN}(),iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||aF};aK=a0.prototype,aK._when=function(g){return a1.when.apply(a1,g)},aK.render=function(u){if(this.rendered||this.destroyed){return this}var t=this,s=this.options,r=this.cache,q=this.elements,p=s.content.text,o=s.content.title,n=s.content.button,m=s.position,l=[];return a1.attr(this.target[0],"aria-describedby",this._id),r.posClass=this._createPosClass((this.position={my:m.my,at:m.at}).my),this.tooltip=q.tooltip=a1("<div/>",{id:this._id,"class":[al,ae,s.style.classes,r.posClass].join(" "),width:s.style.width||"",height:s.style.height||"",tracking:"mouse"===m.target&&m.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":aF,"aria-describedby":this._id+"-content","aria-hidden":aG}).toggleClass(ab,this.disabled).attr(aj,this.id).data(al,this).appendTo(m.container).append(q.content=a1("<div />",{"class":al+"-content",id:this._id+"-content","aria-atomic":aG})),this.rendered=-1,this.positioning=aG,o&&(this._createTitle(),a1.isFunction(o)||l.push(this._updateTitle(o,aF))),n&&this._createButton(),a1.isFunction(p)||l.push(this._updateContent(p,aF)),this.rendered=aG,this._setWidget(),a1.each(am,function(g){var h;"render"===this.initialize&&(h=this(t))&&(t.plugins[g]=h)}),this._unassignEvents(),this._assignEvents(),this._when(l).then(function(){t._trigger("render"),t.positioning=aF,t.hiddenDuringWait||!s.show.ready&&!u||t.toggle(aG,r.event,aF),t.hiddenDuringWait=aF}),aL.api[this.id]=this,this},aK.destroy=function(h){function g(){if(!this.destroyed){this.destroyed=aG;var j,i=this.target,k=i.attr(b);this.rendered&&this.tooltip.stop(1,0).find("*").remove().end().remove(),a1.each(this.plugins,function(){this.destroy&&this.destroy()});for(j in this.timers){this.timers.hasOwnProperty(j)&&clearTimeout(this.timers[j])}i.removeData(al).removeAttr(aj).removeAttr(ak).removeAttr("aria-describedby"),this.options.suppress&&k&&i.attr("title",k).removeAttr(b),this._unassignEvents(),this.options=this.elements=this.cache=this.timers=this.plugins=this.mouse=az,delete aL.api[this.id]}}return this.destroyed?this.target:(h===aG&&"hide"!==this.triggering||!this.rendered?g.call(this):(this.tooltip.one("tooltiphidden",a1.proxy(g,this)),!this.triggering&&this.hide()),this.target)},aI=aK.checks={builtin:{"^id$":function(i,h,m,l){var k=m===aG?aL.nextid:m,j=al+"-"+k;k!==aF&&k.length>0&&!a1("#"+j).length?(this._id=j,this.rendered&&(this.tooltip[0].id=this._id,this.elements.content[0].id=this._id+"-content",this.elements.title[0].id=this._id+"-title")):i[h]=l},"^prerender":function(h,g,i){i&&!this.rendered&&this.render(this.options.show.ready)},"^content.text$":function(h,g,i){this._updateContent(i)},"^content.attr$":function(h,g,j,i){this.options.content.text===this.target.attr(i)&&this._updateContent(this.target.attr(j))},"^content.title$":function(h,g,i){return i?(i&&!this.elements.title&&this._createTitle(),void this._updateTitle(i)):this._removeTitle()},"^content.button$":function(h,g,i){this._updateButton(i)},"^content.title.(text|button)$":function(h,g,i){this.set("content."+g,i)},"^position.(my|at)$":function(h,g,i){"string"==typeof i&&(this.position[g]=h[g]=new aJ(i,"at"===g))},"^position.container$":function(h,g,i){this.rendered&&this.tooltip.appendTo(i)},"^show.ready$":function(h,g,i){i&&(!this.rendered&&this.render(aG)||this.toggle(aG))},"^style.classes$":function(h,g,j,i){this.rendered&&this.tooltip.removeClass(i).addClass(j)},"^style.(width|height)":function(h,g,i){this.rendered&&this.tooltip.css(g,i)},"^style.widget|content.title":function(){this.rendered&&this._setWidget()},"^style.def":function(h,g,i){this.rendered&&this.tooltip.toggleClass(ae,!!i)},"^events.(render|show|move|hide|focus|blur)$":function(h,g,i){this.rendered&&this.tooltip[(a1.isFunction(i)?"":"un")+"bind"]("tooltip"+g,i)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){if(this.rendered){var g=this.options.position;this.tooltip.attr("tracking","mouse"===g.target&&g.adjust.mouse),this._unassignEvents(),this._assignEvents()}}}},aK.get=function(h){if(this.destroyed){return this}var g=aW(this.options,h.toLowerCase()),i=g[0][g[1]];return i.precedance?i.string():i};var a3=/^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,aA=/^prerender|show\.ready/i;aK.set=function(i,h){if(this.destroyed){return this}var m,l=this.rendered,k=aF,j=this.options;return"string"==typeof i?(m=i,i={},i[m]=h):i=a1.extend({},i),a1.each(i,function(g,p){if(l&&aA.test(g)){return void delete i[g]}var o,n=aW(j,g.toLowerCase());o=n[0][n[1]],n[0][n[1]]=p&&p.nodeType?a1(p):p,k=a3.test(g)||k,i[g]=[n[0],n[1],p,o]}),aX(j),this.positioning=aG,a1.each(i,a1.proxy(aV,this)),this.positioning=aF,this.rendered&&this.tooltip[0].offsetWidth>0&&k&&this.reposition("mouse"===j.position.target?az:this.cache.event),this},aK._update=function(h,g){var j=this,i=this.cache;return this.rendered&&h?(a1.isFunction(h)&&(h=h.call(this.elements.target,i.event,this)||""),a1.isFunction(h.then)?(i.waiting=aG,h.then(function(k){return i.waiting=aF,j._update(k,g)},az,function(k){return j._update(k,g)})):h===aF||!h&&""!==h?aF:(h.jquery&&h.length>0?g.empty().append(h.css({display:"block",visibility:"visible"})):g.html(h),this._waitForContent(g).then(function(k){j.rendered&&j.tooltip[0].offsetWidth>0&&j.reposition(i.event,!k.length)}))):aF},aK._waitForContent=function(h){var g=this.cache;return g.waiting=aG,(a1.fn.imagesLoaded?h.imagesLoaded():(new a1.Deferred).resolve([])).done(function(){g.waiting=aF}).promise()},aK._updateContent=function(h,g){this._update(h,this.elements.content,g)},aK._updateTitle=function(h,g){this._update(h,this.elements.title,g)===aF&&this._removeTitle(aF)},aK._createTitle=function(){var h=this.elements,g=this._id+"-title";h.titlebar&&this._removeTitle(),h.titlebar=a1("<div />",{"class":al+"-titlebar "+(this.options.style.widget?aU("header"):"")}).append(h.title=a1("<div />",{id:g,"class":al+"-title","aria-atomic":aG})).insertBefore(h.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(i){a1(this).toggleClass("ui-state-active ui-state-focus","down"===i.type.substr(-4))}).delegate(".qtip-close","mouseover mouseout",function(i){a1(this).toggleClass("ui-state-hover","mouseover"===i.type)}),this.options.content.button&&this._createButton()},aK._removeTitle=function(h){var g=this.elements;g.title&&(g.titlebar.remove(),g.titlebar=g.title=g.button=az,h!==aF&&this.reposition())},aK._createPosClass=function(g){return al+"-pos-"+(g||this.options.position.my).abbrev()},aK.reposition=function(a7,a6){if(!this.rendered||this.positioning||this.destroyed){return this}this.positioning=aG;var a5,a4,aa,Z,Y=this.cache,X=this.tooltip,W=this.options.position,V=W.target,U=W.my,T=W.at,S=W.viewport,Q=W.container,O=W.adjust,M=O.method.split(" "),J=X.outerWidth(aF),H=X.outerHeight(aF),G=0,F=0,z=X.css("position"),R={left:0,top:0},P=X[0].offsetWidth>0,N=a7&&"scroll"===a7.type,L=a1(e),I=Q[0].ownerDocument,y=this.mouse;if(a1.isArray(V)&&2===V.length){T={x:at,y:au},R={left:V[0],top:V[1]}}else{if("mouse"===V){T={x:at,y:au},(!O.mouse||this.options.hide.distance)&&Y.origin&&Y.origin.pageX?a7=Y.origin:!a7||a7&&("resize"===a7.type||"scroll"===a7.type)?a7=Y.event:y&&y.pageX&&(a7=y),"static"!==z&&(R=Q.offset()),I.body.offsetWidth!==(e.innerWidth||I.documentElement.clientWidth)&&(a4=a1(d.body).offset()),R={left:a7.pageX-R.left+(a4&&a4.left||0),top:a7.pageY-R.top+(a4&&a4.top||0)},O.mouse&&N&&y&&(R.left-=(y.scrollX||0)-L.scrollLeft(),R.top-=(y.scrollY||0)-L.scrollTop())}else{if("event"===V?a7&&a7.target&&"scroll"!==a7.type&&"resize"!==a7.type?Y.target=a1(a7.target):a7.target||(Y.target=this.elements.target):"event"!==V&&(Y.target=a1(V.jquery?V:this.elements.target)),V=Y.target,V=a1(V).eq(0),0===V.length){return this}V[0]===d||V[0]===e?(G=aC.iOS?e.innerWidth:V.width(),F=aC.iOS?e.innerHeight:V.height(),V[0]===e&&(R={top:(S||V).scrollTop(),left:(S||V).scrollLeft()})):am.imagemap&&V.is("area")?a5=am.imagemap(this,V,T,am.viewport?M:aF):am.svg&&V&&V[0].ownerSVGElement?a5=am.svg(this,V,T,am.viewport?M:aF):(G=V.outerWidth(aF),F=V.outerHeight(aF),R=V.offset()),a5&&(G=a5.width,F=a5.height,a4=a5.offset,R=a5.position),R=this.reposition.offset(V,R,Q),(aC.iOS>3.1&&aC.iOS<4.1||aC.iOS>=4.3&&aC.iOS<4.33||!aC.iOS&&"fixed"===z)&&(R.left-=L.scrollLeft(),R.top-=L.scrollTop()),(!a5||a5&&a5.adjustable!==aF)&&(R.left+=T.x===aq?G:T.x===ap?G/2:0,R.top+=T.y===ar?F:T.y===ap?F/2:0)}}return R.left+=O.x+(U.x===aq?-J:U.x===ap?-J/2:0),R.top+=O.y+(U.y===ar?-H:U.y===ap?-H/2:0),am.viewport?(aa=R.adjusted=am.viewport(this,R,W,G,F,J,H),a4&&aa.left&&(R.left+=a4.left),a4&&aa.top&&(R.top+=a4.top),aa.my&&(this.position.my=aa.my)):R.adjusted={left:0,top:0},Y.posClass!==(Z=this._createPosClass(this.position.my))&&(Y.posClass=Z,X.removeClass(Y.posClass).addClass(Z)),this._trigger("move",[R,S.elem||S],a7)?(delete R.adjusted,a6===aF||!P||isNaN(R.left)||isNaN(R.top)||"mouse"===V||!a1.isFunction(W.effect)?X.css(R):a1.isFunction(W.effect)&&(W.effect.call(X,this,a1.extend({},R)),X.queue(function(g){a1(this).css({opacity:"",height:""}),aC.ie&&this.style.removeAttribute("filter"),g()})),this.positioning=aF,this):this},aK.reposition.offset=function(x,w,v){function u(h,g){w.left+=g*h.scrollLeft(),w.top+=g*h.scrollTop()}if(!v[0]){return w}var t,s,r,q,p=a1(x[0].ownerDocument),o=!!aC.ie&&"CSS1Compat"!==d.compatMode,n=v[0];do{"static"!==(s=a1.css(n,"position"))&&("fixed"===s?(r=n.getBoundingClientRect(),u(p,-1)):(r=a1(n).position(),r.left+=parseFloat(a1.css(n,"borderLeftWidth"))||0,r.top+=parseFloat(a1.css(n,"borderTopWidth"))||0),w.left-=r.left+(parseFloat(a1.css(n,"marginLeft"))||0),w.top-=r.top+(parseFloat(a1.css(n,"marginTop"))||0),t||"hidden"===(q=a1.css(n,"overflow"))||"visible"===q||(t=a1(n)))}while(n=n.offsetParent);return t&&(t[0]!==p[0]||o)&&u(t,1),w};var a2=(aJ=aK.reposition.Corner=function(h,g){h=(""+h).replace(/([A-Z])/," $1").replace(/middle/gi,ap).toLowerCase(),this.x=(h.match(/left|right/i)||h.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(h.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase(),this.forceY=!!g;var i=h.charAt(0);this.precedance="t"===i||"b"===i?ax:ay}).prototype;a2.invert=function(h,g){this[h]=this[h]===at?aq:this[h]===aq?at:g||this[h]},a2.string=function(h){var g=this.x,j=this.y,i=g!==j?"center"===g||"center"!==j&&(this.precedance===ax||this.forceY)?[j,g]:[g,j]:[g];return h!==!1?i.join(" "):i},a2.abbrev=function(){var g=this.string(!1);return g[0].charAt(0)+(g[1]&&g[1].charAt(0)||"")},a2.clone=function(){return new aJ(this.string(),this.forceY)},aK.toggle=function(H,G){var F=this.cache,E=this.options,D=this.tooltip;if(G){if(/over|enter/.test(G.type)&&F.event&&/out|leave/.test(F.event.type)&&E.show.target.add(G.target).length===E.show.target.length&&D.has(G.relatedTarget).length){return this}F.event=a1.event.fix(G)}if(this.waiting&&!H&&(this.hiddenDuringWait=aG),!this.rendered){return H?this.render(1):this}if(this.destroyed||this.disabled){return this}var C,B,A,z=H?"show":"hide",y=this.options[z],x=this.options.position,w=this.options.content,v=this.tooltip.css("width"),u=this.tooltip.is(":visible"),t=H||1===y.target.length,s=!G||y.target.length<2||F.target[0]===G.target;return(typeof H).search("boolean|number")&&(H=!u),C=!D.is(":animated")&&u===H&&s,B=C?az:!!this._trigger(z,[90]),this.destroyed?this:(B!==aF&&H&&this.focus(G),!B||C?this:(a1.attr(D[0],"aria-hidden",!H),H?(this.mouse&&(F.origin=a1.event.fix(this.mouse)),a1.isFunction(w.text)&&this._updateContent(w.text,aF),a1.isFunction(w.title)&&this._updateTitle(w.title,aF),!aH&&"mouse"===x.target&&x.adjust.mouse&&(a1(d).bind("mousemove."+al,this._storeMouse),aH=aG),v||D.css("width",D.outerWidth(aF)),this.reposition(G,arguments[2]),v||D.css("width",""),y.solo&&("string"==typeof y.solo?a1(y.solo):a1(ah,y.solo)).not(D).not(y.target).qtip("hide",new a1.Event("tooltipsolo"))):(clearTimeout(this.timers.show),delete F.origin,aH&&!a1(ah+'[tracking="true"]:visible',y.solo).not(D).length&&(a1(d).unbind("mousemove."+al),aH=aF),this.blur(G)),A=a1.proxy(function(){H?(aC.ie&&D[0].style.removeAttribute("filter"),D.css("overflow",""),"string"==typeof y.autofocus&&a1(this.options.show.autofocus,D).focus(),this.options.show.target.trigger("qtip-"+this.id+"-inactive")):D.css({display:"",visibility:"",opacity:"",left:"",top:""}),this._trigger(H?"visible":"hidden")},this),y.effect===aF||t===aF?(D[z](),A()):a1.isFunction(y.effect)?(D.stop(1,1),y.effect.call(D,this),D.queue("fx",function(g){A(),g()})):D.fadeTo(90,H?1:0,A),H&&y.target.trigger("qtip-"+this.id+"-inactive"),this))},aK.show=function(g){return this.toggle(aG,g)},aK.hide=function(g){return this.toggle(aF,g)},aK.focus=function(h){if(!this.rendered||this.destroyed){return this}var g=a1(ah),k=this.tooltip,j=parseInt(k[0].style.zIndex,10),i=aL.zindex+g.length;return k.hasClass(ad)||this._trigger("focus",[i],h)&&(j!==i&&(g.each(function(){this.style.zIndex>j&&(this.style.zIndex=this.style.zIndex-1)}),g.filter("."+ad).qtip("blur",h)),k.addClass(ad)[0].style.zIndex=i),this},aK.blur=function(g){return !this.rendered||this.destroyed?this:(this.tooltip.removeClass(ad),this._trigger("blur",[this.tooltip.css("zIndex")],g),this)},aK.disable=function(g){return this.destroyed?this:("toggle"===g?g=!(this.rendered?this.tooltip.hasClass(ab):this.disabled):"boolean"!=typeof g&&(g=aG),this.rendered&&this.tooltip.toggleClass(ab,g).attr("aria-disabled",g),this.disabled=!!g,this)},aK.enable=function(){return this.disable(aF)},aK._createButton=function(){var i=this,h=this.elements,m=h.tooltip,l=this.options.content.button,k="string"==typeof l,j=k?l:"Close tooltip";h.button&&h.button.remove(),l.jquery?h.button=l:h.button=a1("<a />",{"class":"qtip-close "+(this.options.style.widget?"":al+"-icon"),title:j,"aria-label":j}).prepend(a1("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),h.button.appendTo(h.titlebar||m).attr("role","button").click(function(g){return m.hasClass(ab)||i.hide(g),aF})},aK._updateButton=function(h){if(!this.rendered){return aF}var g=this.elements.button;h?this._createButton():g.remove()},aK._setWidget=function(){var h=this.options.style.widget,g=this.elements,j=g.tooltip,i=j.hasClass(ab);j.removeClass(ab),ab=h?"ui-state-disabled":"qtip-disabled",j.toggleClass(ab,i),j.toggleClass("ui-helper-reset "+aU(),h).toggleClass(ae,this.options.style.def&&!h),g.content&&g.content.toggleClass(aU("content"),h),g.titlebar&&g.titlebar.toggleClass(aU("header"),h),g.button&&g.button.toggleClass(al+"-icon",!h)},aK._storeMouse=function(g){return(this.mouse=a1.event.fix(g)).type="mousemove",this},aK._bind=function(i,h,m,l,k){if(i&&m&&h.length){var j="."+this._id+(l?"-"+l:"");return a1(i).bind((h.split?h:h.join(j+" "))+j,a1.proxy(m,k||this)),this}},aK._unbind=function(h,g){return h&&a1(h).unbind("."+this._id+(g?"-"+g:"")),this},aK._trigger=function(h,g,j){var i=new a1.Event("tooltip"+h);return i.originalEvent=j&&a1.extend({},j)||this.cache.event||az,this.triggering=h,this.tooltip.trigger(i,[this].concat(g||[])),this.triggering=aF,!i.isDefaultPrevented()},aK._bindEvents=function(k,j,q,p,o,n){var m=q.filter(p).add(p.filter(q)),l=[];m.length&&(a1.each(j,function(g,i){var h=a1.inArray(i,k);h>-1&&l.push(k.splice(h,1)[0])}),l.length&&(this._bind(m,l,function(h){var g=this.rendered?this.tooltip[0].offsetWidth>0:!1;(g?n:o).call(this,h)}),q=q.not(m),p=p.not(m))),this._bind(q,k,o),this._bind(p,j,n)},aK._assignInitialEvents=function(j){function i(g){return this.disabled||this.destroyed?aF:(this.cache.event=g&&a1.event.fix(g),this.cache.target=g&&a1(g.target),clearTimeout(this.timers.show),void (this.timers.show=aT.call(this,function(){this.render("object"==typeof g||o.show.ready)},o.prerender?0:o.show.delay)))}var o=this.options,n=o.show.target,m=o.hide.target,l=o.show.event?a1.trim(""+o.show.event).split(" "):[],k=o.hide.event?a1.trim(""+o.hide.event).split(" "):[];this._bind(this.elements.target,["remove","removeqtip"],function(){this.destroy(!0)},"destroy"),/mouse(over|enter)/i.test(o.show.event)&&!/mouse(out|leave)/i.test(o.hide.event)&&k.push("mouseleave"),this._bind(n,"mousemove",function(g){this._storeMouse(g),this.cache.onTarget=aG}),this._bindEvents(l,k,n,m,i,function(){return this.timers?void clearTimeout(this.timers.show):aF}),(o.show.ready||o.prerender)&&i.call(this,j)},aK._assignEvents=function(){var z=this,y=this.options,x=y.position,w=this.tooltip,v=y.show.target,u=y.hide.target,t=x.container,p=x.viewport,o=a1(d),n=a1(e),m=y.show.event?a1.trim(""+y.show.event).split(" "):[],A=y.hide.event?a1.trim(""+y.hide.event).split(" "):[];a1.each(y.events,function(h,g){z._bind(w,"toggle"===h?["tooltipshow","tooltiphide"]:["tooltip"+h],g,null,w)}),/mouse(out|leave)/i.test(y.hide.event)&&"window"===y.hide.leave&&this._bind(o,["mouseout","blur"],function(g){/select|option/.test(g.target.nodeName)||g.relatedTarget||this.hide(g)}),y.hide.fixed?u=u.add(w.addClass(af)):/mouse(over|enter)/i.test(y.show.event)&&this._bind(u,"mouseleave",function(){clearTimeout(this.timers.show)}),(""+y.hide.event).indexOf("unfocus")>-1&&this._bind(t.closest("html"),["mousedown","touchstart"],function(h){var g=a1(h.target),j=this.rendered&&!this.tooltip.hasClass(ab)&&this.tooltip[0].offsetWidth>0,i=g.parents(ah).filter(this.tooltip[0]).length>0;g[0]===this.target[0]||g[0]===this.tooltip[0]||i||this.target.has(g[0]).length||!j||this.hide(h)}),"number"==typeof y.hide.inactive&&(this._bind(v,"qtip-"+this.id+"-inactive",aQ,"inactive"),this._bind(u.add(w),aL.inactiveEvents,aQ)),this._bindEvents(m,A,v,u,aS,aR),this._bind(v.add(w),"mousemove",function(h){if("number"==typeof y.hide.distance){var g=this.cache.origin||{},j=this.options.hide.distance,i=Math.abs;(i(h.pageX-g.pageX)>=j||i(h.pageY-g.pageY)>=j)&&this.hide(h)}this._storeMouse(h)}),"mouse"===x.target&&x.adjust.mouse&&(y.hide.event&&this._bind(v,["mouseenter","mouseleave"],function(g){return this.cache?void (this.cache.onTarget="mouseenter"===g.type):aF}),this._bind(o,"mousemove",function(g){this.rendered&&this.cache.onTarget&&!this.tooltip.hasClass(ab)&&this.tooltip[0].offsetWidth>0&&this.reposition(g)})),(x.adjust.resize||p.length)&&this._bind(a1.event.special.resize?p:n,"resize",aP),x.adjust.scroll&&this._bind(n.add(x.container),"scroll",aP)},aK._unassignEvents=function(){var k=this.options,j=k.show.target,i=k.hide.target,h=a1.grep([this.elements.target[0],this.rendered&&this.tooltip[0],k.position.container[0],k.position.viewport[0],k.position.container.closest("html")[0],e,d],function(g){return"object"==typeof g});j&&j.toArray&&(h=h.concat(j.toArray())),i&&i.toArray&&(h=h.concat(i.toArray())),this._unbind(h)._unbind(h,"destroy")._unbind(h,"inactive")},a1(function(){aO(ah,["mouseenter","mouseleave"],function(h){var g="mouseenter"===h.type,k=a1(h.currentTarget),j=a1(h.relatedTarget||h.target),i=this.options;g?(this.focus(h),k.hasClass(af)&&!k.hasClass(ab)&&clearTimeout(this.timers.hide)):"mouse"===i.position.target&&i.position.adjust.mouse&&i.hide.event&&i.show.target&&!j.closest(i.show.target[0]).length&&this.hide(h),k.toggleClass(ac,g)}),aO("["+aj+"]",ag,aQ)}),aL=a1.fn.qtip=function(l,h,r){var q=(""+l).toLowerCase(),p=az,o=a1.makeArray(arguments).slice(1),n=o[o.length-1],m=this[0]?a1.data(this[0],al):az;return !arguments.length&&m||"api"===q?m:"string"==typeof l?(this.each(function(){var g=a1.data(this,al);if(!g){return aG}if(n&&n.timeStamp&&(g.cache.event=n),!h||"option"!==q&&"options"!==q){g[q]&&g[q].apply(g,o)}else{if(r===f&&!a1.isPlainObject(h)){return p=g.get(h),aF}g.set(h,r)}}),p!==az?p:this):"object"!=typeof l&&arguments.length?void 0:(m=aX(a1.extend(aG,{},l)),this.each(function(i){var g,j;return j=a1.isArray(m.id)?m.id[i]:m.id,j=!j||j===aF||j.length<1||aL.api[j]?aL.nextid++:j,g=aN(a1(this),j,m),g===aF?aG:(aL.api[j]=g,a1.each(am,function(){"initialize"===this.initialize&&this(g)}),void g._assignInitialEvents(n))}))},a1.qtip=a0,aL.api={},a1.each({attr:function(h,g){if(this.length){var k=this[0],j="title",i=a1.data(k,"qtip");if(h===j&&i&&i.options&&"object"==typeof i&&"object"==typeof i.options&&i.options.suppress){return arguments.length<2?a1.attr(k,b):(i&&i.options.content.attr===j&&i.cache.attr&&i.set("content.text",g),this.attr(b,g))}}return a1.fn["attr"+c].apply(this,arguments)},clone:function(h){var g=a1.fn["clone"+c].apply(this,arguments);return h||g.filter("["+b+"]").attr("title",function(){return a1.attr(this,b)}).removeAttr(b),g}},function(h,g){if(!g||a1.fn[h+c]){return aG}var i=a1.fn[h+c]=a1.fn[h];a1.fn[h]=function(){return g.apply(this,arguments)||i.apply(this,arguments)}}),a1.ui||(a1["cleanData"+c]=a1.cleanData,a1.cleanData=function(h){for(var g,j=0;(g=a1(h[j])).length;j++){if(g.attr(ak)){try{g.triggerHandler("removeqtip")}catch(i){}}}a1["cleanData"+c].apply(this,arguments)}),aL.version="3.0.3",aL.nextid=0,aL.inactiveEvents=ag,aL.zindex=15000,aL.defaults={prerender:aF,id:aF,overwrite:aG,suppress:aG,content:{text:aG,attr:"title",title:aF,button:aF},position:{my:"top left",at:"bottom right",target:aF,container:aF,viewport:aF,adjust:{x:0,y:0,mouse:aG,scroll:aG,resize:aG,method:"flipinvert flipinvert"},effect:function(h,g){a1(this).animate(g,{duration:200,queue:aF})}},show:{target:aF,event:"mouseenter",effect:aG,delay:90,solo:aF,ready:aF,autofocus:aF},hide:{target:aF,event:"mouseleave",effect:aG,delay:0,fixed:aF,inactive:aF,leave:"window",distance:aF},style:{classes:"",widget:aF,width:aF,height:aF,def:aG},events:{render:az,move:az,show:az,hide:az,toggle:az,visible:az,hidden:az,focus:az,blur:az}},am.viewport=function(a6,a5,a4,aa,Z,Y,X){function W(bd,bc,bb,ba,a9,a8,a7,O,N){var M=a5[a9],q=H[bd],p=G[bd],o=bb===an,n=q===a9?N:q===a8?-N:-N/2,m=p===a9?O:p===a8?-O:-O/2,l=L[a9]+K[a9]-(S?0:T[a9]),v=l-M,u=M+N-(a7===aw?R:Q)-l,r=n-(H.precedance===bd||q===H[bc]?m:0)-(p===ap?O/2:0);return o?(r=(q===a9?1:-1)*n,a5[a9]+=v>0?v:u>0?-u:0,a5[a9]=Math.max(-T[a9]+K[a9],M-r,Math.min(Math.max(-T[a9]+K[a9]+(a7===aw?R:Q),M+r),a5[a9],"center"===q?M-n:1000000000))):(ba*=bb===ao?2:0,v>0&&(q!==a9||u>0)?(a5[a9]-=r+ba,U.invert(bd,a9)):u>0&&(q!==a8||v>0)&&(a5[a9]-=(q===ap?-r:r)+ba,U.invert(bd,a8)),a5[a9]<L[a9]&&-a5[a9]>u&&(a5[a9]=M,U=H.clone())),a5[a9]-M}var V,U,T,S,R,Q,L,K,J=a4.target,I=a6.elements.tooltip,H=a4.my,G=a4.at,F=a4.adjust,E=F.method.split(" "),D=E[0],P=E[1]||E[0],C=a4.viewport,B=a4.container,z={left:0,top:0};return C.jquery&&J[0]!==e&&J[0]!==d.body&&"none"!==F.method?(T=B.offset()||z,S="static"===B.css("position"),V="fixed"===I.css("position"),R=C[0]===e?C.width():C.outerWidth(aF),Q=C[0]===e?C.height():C.outerHeight(aF),L={left:V?0:C.scrollLeft(),top:V?0:C.scrollTop()},K=C.offset()||z,"shift"===D&&"shift"===P||(U=H.clone()),z={left:"none"!==D?W(ay,ax,D,F.x,at,aq,aw,aa,Y):0,top:"none"!==P?W(ax,ay,P,F.y,au,ar,av,Z,X):0,my:U}):z},am.polys={polygon:function(x,w){var v,u,t,s={width:0,height:0,position:{top:10000000000,right:0,bottom:0,left:10000000000},adjustable:aF},r=0,q=[],p=1,o=1,n=0,m=0;for(r=x.length;r--;){v=[parseInt(x[--r],10),parseInt(x[r+1],10)],v[0]>s.position.right&&(s.position.right=v[0]),v[0]<s.position.left&&(s.position.left=v[0]),v[1]>s.position.bottom&&(s.position.bottom=v[1]),v[1]<s.position.top&&(s.position.top=v[1]),q.push(v)}if(u=s.width=Math.abs(s.position.right-s.position.left),t=s.height=Math.abs(s.position.bottom-s.position.top),"c"===w.abbrev()){s.position={left:s.position.left+s.width/2,top:s.position.top+s.height/2}}else{for(;u>0&&t>0&&p>0&&o>0;){for(u=Math.floor(u/2),t=Math.floor(t/2),w.x===at?p=u:w.x===aq?p=s.width-u:p+=Math.floor(u/2),w.y===au?o=t:w.y===ar?o=s.height-t:o+=Math.floor(t/2),r=q.length;r--&&!(q.length<2);){n=q[r][0]-s.position.left,m=q[r][1]-s.position.top,(w.x===at&&n>=p||w.x===aq&&p>=n||w.x===ap&&(p>n||n>s.width-p)||w.y===au&&m>=o||w.y===ar&&o>=m||w.y===ap&&(o>m||m>s.height-o))&&q.splice(r,1)}}s.position={left:q[0][0],top:q[0][1]}}return s},rect:function(h,g,j,i){return{width:Math.abs(j-h),height:Math.abs(i-g),position:{left:Math.min(h,j),top:Math.min(g,i)}}},_angles:{tc:1.5,tr:7/4,tl:5/4,bc:0.5,br:0.25,bl:0.75,rc:2,lc:1,c:0},ellipse:function(j,i,p,o,n){var m=am.polys._angles[n.abbrev()],l=0===m?0:p*Math.cos(m*Math.PI),k=o*Math.sin(m*Math.PI);return{width:2*p-Math.abs(l),height:2*o-Math.abs(k),position:{left:j+l,top:i+k},adjustable:aF}},circle:function(h,g,j,i){return am.polys.ellipse(h,g,j,j,i)}},am.svg=function(H,G,F){for(var E,D,C,B,A,z,y,x,w,v=G[0],u=a1(v.ownerSVGElement),t=v.ownerDocument,s=(parseInt(G.css("stroke-width"),10)||0)/2;!v.getBBox;){v=v.parentNode}if(!v.getBBox||!v.parentNode){return aF}switch(v.nodeName){case"ellipse":case"circle":x=am.polys.ellipse(v.cx.baseVal.value,v.cy.baseVal.value,(v.rx||v.r).baseVal.value+s,(v.ry||v.r).baseVal.value+s,F);break;case"line":case"polygon":case"polyline":for(y=v.points||[{x:v.x1.baseVal.value,y:v.y1.baseVal.value},{x:v.x2.baseVal.value,y:v.y2.baseVal.value}],x=[],z=-1,B=y.numberOfItems||y.length;++z<B;){A=y.getItem?y.getItem(z):y[z],x.push.apply(x,[A.x,A.y])}x=am.polys.polygon(x,F);break;default:x=v.getBBox(),x={width:x.width,height:x.height,position:{left:x.x,top:x.y}}}return w=x.position,u=u[0],u.createSVGPoint&&(D=v.getScreenCTM(),y=u.createSVGPoint(),y.x=w.left,y.y=w.top,C=y.matrixTransform(D),w.left=C.x,w.top=C.y),t!==d&&"mouse"!==H.position.target&&(E=a1((t.defaultView||t.parentWindow).frameElement).offset(),E&&(w.left+=E.left,w.top+=E.top)),t=a1(t),w.left+=t.scrollLeft(),w.top+=t.scrollTop(),x};var aD,aB,a="qtip-modal",aE="."+a;aB=function(){function k(i){if(a1.expr[":"].focusable){return a1.expr[":"].focusable}var h,u,t,s=!isNaN(a1.attr(i,"tabindex")),j=i.nodeName&&i.nodeName.toLowerCase();return"area"===j?(h=i.parentNode,u=h.name,i.href&&u&&"map"===h.nodeName.toLowerCase()?(t=a1("img[usemap=#"+u+"]")[0],!!t&&t.is(":visible")):!1):/input|select|textarea|button|object/.test(j)?!i.disabled:"a"===j?i.href||s:s}function r(g){l.length<1&&g.length?g.not("body").blur():l.first().focus()}function q(j){if(n.is(":visible")){var h,u=a1(j.target),t=p.tooltip,s=u.closest(ah);h=s.length<1?aF:parseInt(s[0].style.zIndex,10)>parseInt(t[0].style.zIndex,10),h||u.closest(ah)[0]===t[0]||r(u)}}var p,o,n,m=this,l={};a1.extend(m,{init:function(){return n=m.elem=a1("<div />",{id:"qtip-overlay",html:"<div></div>",mousedown:function(){return aF}}).hide(),a1(d.body).bind("focusin"+aE,q),a1(d).bind("keydown"+aE,function(g){p&&p.options.show.modal.escape&&27===g.keyCode&&p.hide(g)}),n.bind("click"+aE,function(g){p&&p.options.show.modal.blur&&p.hide(g)}),m},update:function(g){p=g,l=g.options.show.modal.stealfocus!==aF?g.tooltip.find("*").filter(function(){return k(this)}):[]},toggle:function(x,w,v){var u=x.tooltip,t=x.options.show.modal,s=t.effect,i=w?"show":"hide",h=n.is(":visible"),g=a1(aE).filter(":visible:not(:animated)").not(u);return m.update(x),w&&t.stealfocus!==aF&&r(a1(":focus")),n.toggleClass("blurs",t.blur),w&&n.appendTo(d.body),n.is(":animated")&&h===w&&o!==aF||!w&&g.length?m:(n.stop(aG,aF),a1.isFunction(s)?s.call(n,w):s===aF?n[i]():n.fadeTo(parseInt(v,10)||90,w?1:0,function(){w||n.hide()}),w||n.queue(function(j){n.css({left:"",top:""}),a1(aE).length||n.detach(),j()}),o=w,p.destroyed&&(p=az),m)}}),m.init()},aB=new aB,a1.extend(aM.prototype,{init:function(h){var g=h.tooltip;return this.options.on?(h.elements.overlay=aB.elem,g.addClass(a).css("z-index",aL.modal_zindex+a1(aE).length),h._bind(g,["tooltipshow","tooltiphide"],function(i,m,l){var k=i.originalEvent;if(i.target===g[0]){if(k&&"tooltiphide"===i.type&&/mouse(leave|enter)/.test(k.type)&&a1(k.relatedTarget).closest(aB.elem[0]).length){try{i.preventDefault()}catch(j){}}else{(!k||k&&"tooltipsolo"!==k.type)&&this.toggle(i,"tooltipshow"===i.type,l)}}},this._ns,this),h._bind(g,"tooltipfocus",function(i,n){if(!i.isDefaultPrevented()&&i.target===g[0]){var m=a1(aE),l=aL.modal_zindex+m.length,k=parseInt(g[0].style.zIndex,10);aB.elem[0].style.zIndex=l-1,m.each(function(){this.style.zIndex>k&&(this.style.zIndex-=1)}),m.filter("."+ad).qtip("blur",i.originalEvent),g.addClass(ad)[0].style.zIndex=l,aB.update(n);try{i.preventDefault()}catch(j){}}},this._ns,this),void h._bind(g,"tooltiphide",function(i){i.target===g[0]&&a1(aE).filter(":visible").not(g).last().qtip("focus",i)},this._ns,this)):this},toggle:function(h,g,i){return h&&h.isDefaultPrevented()?this:void aB.toggle(this.qtip,!!g,i)},destroy:function(){this.qtip.tooltip.removeClass(a),this.qtip._unbind(this.qtip.tooltip,this._ns),aB.toggle(this.qtip,aF),delete this.qtip.elements.overlay}}),aD=am.modal=function(g){return new aM(g,g.options.show.modal)},aD.sanitize=function(g){g.show&&("object"!=typeof g.show.modal?g.show.modal={on:!!g.show.modal}:"undefined"==typeof g.show.modal.on&&(g.show.modal.on=aG))},aL.modal_zindex=aL.zindex-200,aD.initialize="render",aI.modal={"^show.modal.(on|blur)$":function(){this.destroy(),this.init(),this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth>0)}},a1.extend(aG,aL.defaults,{show:{modal:{on:aF,effect:aG,blur:aG,stealfocus:aG,escape:aG}}})})}(window,document);