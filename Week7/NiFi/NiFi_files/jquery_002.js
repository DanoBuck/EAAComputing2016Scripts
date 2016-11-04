jQuery&&function(N){function M(a,h){var g=N('<div class="minicolors" />'),f=N.minicolors.defaults;a.data("minicolors-initialized")||(h=N.extend(!0,{},f,h),g.addClass("minicolors-theme-"+h.theme).toggleClass("minicolors-with-opacity",h.opacity),void 0!==h.position&&N.each(h.position.split(" "),function(){g.addClass("minicolors-position-"+this)}),a.addClass("minicolors-input").data("minicolors-initialized",!1).data("minicolors-settings",h).prop("size",7).wrap(g).after('<div class="minicolors-panel minicolors-slider-'+h.control+'"><div class="minicolors-slider"><div class="minicolors-picker"></div></div><div class="minicolors-opacity-slider"><div class="minicolors-picker"></div></div><div class="minicolors-grid"><div class="minicolors-grid-inner"></div><div class="minicolors-picker"><div></div></div></div></div>'),h.inline||(a.after('<span class="minicolors-swatch"><span class="minicolors-swatch-color"></span></span>'),a.next(".minicolors-swatch").on("click",function(b){b.preventDefault(),a.focus()})),a.parent().find(".minicolors-panel").on("selectstart",function(){return !1}).end(),h.inline&&a.parent().addClass("minicolors-inline"),G(a,!1),a.data("minicolors-initialized",!0))}function L(d){var c=d.parent();d.removeData("minicolors-initialized").removeData("minicolors-settings").removeProp("size").removeClass("minicolors-input"),c.before(d).remove()}function K(f){var e=f.parent(),h=e.find(".minicolors-panel"),g=f.data("minicolors-settings");!f.data("minicolors-initialized")||f.prop("disabled")||e.hasClass("minicolors-inline")||e.hasClass("minicolors-focus")||(J(),e.addClass("minicolors-focus"),h.stop(!0,!0).fadeIn(g.showSpeed,function(){g.show&&g.show.call(f.get(0))}))}function J(){N(".minicolors-focus").each(function(){var a=N(this),h=a.find(".minicolors-input"),g=a.find(".minicolors-panel"),f=h.data("minicolors-settings");g.fadeOut(f.hideSpeed,function(){f.hide&&f.hide.call(h.get(0)),a.removeClass("minicolors-focus")})})}function I(X,W,V){var s,r,q,g,U=X.parents(".minicolors").find(".minicolors-input"),T=U.data("minicolors-settings"),S=X.find("[class$=-picker]"),R=X.offset().left,Q=X.offset().top,P=Math.round(W.pageX-R),O=Math.round(W.pageY-Q),t=V?T.animationSpeed:0;W.originalEvent.changedTouches&&(P=W.originalEvent.changedTouches[0].pageX-R,O=W.originalEvent.changedTouches[0].pageY-Q),0>P&&(P=0),0>O&&(O=0),P>X.width()&&(P=X.width()),O>X.height()&&(O=X.height()),X.parent().is(".minicolors-slider-wheel")&&S.parent().is(".minicolors-grid")&&(s=75-P,r=75-O,q=Math.sqrt(s*s+r*r),g=Math.atan2(r,s),0>g&&(g+=2*Math.PI),q>75&&(q=75,P=75-75*Math.cos(g),O=75-75*Math.sin(g)),P=Math.round(P),O=Math.round(O)),X.is(".minicolors-grid")?S.stop(!0).animate({top:O+"px",left:P+"px"},t,T.animationEasing,function(){H(U,X)}):S.stop(!0).animate({top:O+"px"},t,T.animationEasing,function(){H(U,X)})}function H(ah,ag){function af(f,e){var h,g;return f.length&&e?(h=f.offset().left,g=f.offset().top,{x:h-e.offset().left+f.outerWidth()/2,y:g-e.offset().top+f.outerHeight()/2}):null}var ae,ad,ac,ab,aa,Z,Y,X=ah.val(),W=ah.attr("data-opacity"),V=ah.parent(),S=ah.data("minicolors-settings"),R=V.find(".minicolors-swatch"),Q=V.find(".minicolors-grid"),P=V.find(".minicolors-slider"),O=V.find(".minicolors-opacity-slider"),q=Q.find("[class$=-picker]"),n=P.find("[class$=-picker]"),l=O.find("[class$=-picker]"),i=af(q,Q),U=af(n,P),T=af(l,O);if(ag.is(".minicolors-grid, .minicolors-slider")){switch(S.control){case"wheel":ab=Q.width()/2-i.x,aa=Q.height()/2-i.y,Z=Math.sqrt(ab*ab+aa*aa),Y=Math.atan2(aa,ab),0>Y&&(Y+=2*Math.PI),Z>75&&(Z=75,i.x=69-75*Math.cos(Y),i.y=69-75*Math.sin(Y)),ad=A(Z/0.75,0,100),ae=A(180*Y/Math.PI,0,360),ac=A(100-Math.floor(U.y*(100/P.height())),0,100),X=x({h:ae,s:ad,b:ac}),P.css("backgroundColor",x({h:ae,s:ad,b:100}));break;case"saturation":ae=A(parseInt(i.x*(360/Q.width()),10),0,360),ad=A(100-Math.floor(U.y*(100/P.height())),0,100),ac=A(100-Math.floor(i.y*(100/Q.height())),0,100),X=x({h:ae,s:ad,b:ac}),P.css("backgroundColor",x({h:ae,s:100,b:ac})),V.find(".minicolors-grid-inner").css("opacity",ad/100);break;case"brightness":ae=A(parseInt(i.x*(360/Q.width()),10),0,360),ad=A(100-Math.floor(i.y*(100/Q.height())),0,100),ac=A(100-Math.floor(U.y*(100/P.height())),0,100),X=x({h:ae,s:ad,b:ac}),P.css("backgroundColor",x({h:ae,s:ad,b:100})),V.find(".minicolors-grid-inner").css("opacity",1-ac/100);break;default:ae=A(360-parseInt(U.y*(360/P.height()),10),0,360),ad=A(Math.floor(i.x*(100/Q.width())),0,100),ac=A(100-Math.floor(i.y*(100/Q.height())),0,100),X=x({h:ae,s:ad,b:ac}),Q.css("backgroundColor",x({h:ae,s:100,b:100}))}ah.val(C(X,S.letterCase))}ag.is(".minicolors-opacity-slider")&&(W=S.opacity?parseFloat(1-T.y/O.height()).toFixed(2):1,S.opacity&&ah.attr("data-opacity",W)),R.find("SPAN").css({backgroundColor:X,opacity:W}),F(ah,X,W)}function G(Z,Y){var X,W,V,U,T,S,R,Q=Z.parent(),P=Z.data("minicolors-settings"),O=Q.find(".minicolors-swatch"),r=Q.find(".minicolors-grid"),q=Q.find(".minicolors-slider"),n=Q.find(".minicolors-opacity-slider"),m=r.find("[class$=-picker]"),l=q.find("[class$=-picker]"),i=n.find("[class$=-picker]");switch(X=C(B(Z.val(),!0),P.letterCase),X||(X=C(B(P.defaultValue,!0),P.letterCase)),W=w(X),Y||Z.val(X),P.opacity&&(V=""===Z.attr("data-opacity")?1:A(parseFloat(Z.attr("data-opacity")).toFixed(2),0,1),isNaN(V)&&(V=1),Z.attr("data-opacity",V),O.find("SPAN").css("opacity",V),T=A(n.height()-n.height()*V,0,n.height()),i.css("top",T+"px")),O.find("SPAN").css("backgroundColor",X),P.control){case"wheel":S=A(Math.ceil(0.75*W.s),0,r.height()/2),R=W.h*Math.PI/180,U=A(75-Math.cos(R)*S,0,r.width()),T=A(75-Math.sin(R)*S,0,r.height()),m.css({top:T+"px",left:U+"px"}),T=150-W.b/(100/r.height()),""===X&&(T=0),l.css("top",T+"px"),q.css("backgroundColor",x({h:W.h,s:W.s,b:100}));break;case"saturation":U=A(5*W.h/12,0,150),T=A(r.height()-Math.ceil(W.b/(100/r.height())),0,r.height()),m.css({top:T+"px",left:U+"px"}),T=A(q.height()-W.s*(q.height()/100),0,q.height()),l.css("top",T+"px"),q.css("backgroundColor",x({h:W.h,s:100,b:W.b})),Q.find(".minicolors-grid-inner").css("opacity",W.s/100);break;case"brightness":U=A(5*W.h/12,0,150),T=A(r.height()-Math.ceil(W.s/(100/r.height())),0,r.height()),m.css({top:T+"px",left:U+"px"}),T=A(q.height()-W.b*(q.height()/100),0,q.height()),l.css("top",T+"px"),q.css("backgroundColor",x({h:W.h,s:W.s,b:100})),Q.find(".minicolors-grid-inner").css("opacity",1-W.b/100);break;default:U=A(Math.ceil(W.s/(100/r.width())),0,r.width()),T=A(r.height()-Math.ceil(W.b/(100/r.height())),0,r.height()),m.css({top:T+"px",left:U+"px"}),T=A(q.height()-W.h/(360/q.height()),0,q.height()),l.css("top",T+"px"),r.css("backgroundColor",x({h:W.h,s:100,b:100}))}Z.data("minicolors-initialized")&&F(Z,X,V)}function F(g,f,j){var i=g.data("minicolors-settings"),h=g.data("minicolors-lastChange");h&&h.hex===f&&h.opacity===j||(g.data("minicolors-lastChange",{hex:f,opacity:j}),i.change&&(i.changeDelay?(clearTimeout(g.data("minicolors-changeTimeout")),g.data("minicolors-changeTimeout",setTimeout(function(){i.change.call(g.get(0),f,j)},i.changeDelay))):i.change.call(g.get(0),f,j)),g.trigger("change").trigger("input"))}function E(a){var h=B(N(a).val(),!0),g=u(h),f=N(a).attr("data-opacity");return g?(void 0!==f&&N.extend(g,{a:parseFloat(f)}),g):null}function D(a,j){var i=B(N(a).val(),!0),h=u(i),g=N(a).attr("data-opacity");return h?(void 0===g&&(g=1),j?"rgba("+h.r+", "+h.g+", "+h.b+", "+parseFloat(g)+")":"rgb("+h.r+", "+h.g+", "+h.b+")"):null}function C(d,c){return"uppercase"===c?d.toUpperCase():d.toLowerCase()}function B(d,c){return d=d.replace(/[^A-F0-9]/gi,""),3!==d.length&&6!==d.length?"":(3===d.length&&c&&(d=d[0]+d[0]+d[1]+d[1]+d[2]+d[2]),"#"+d)}function A(e,d,f){return d>e&&(e=d),e>f&&(e=f),e}function z(j){var i={},p=Math.round(j.h),o=Math.round(255*j.s/100),n=Math.round(255*j.b/100);if(0===o){i.r=i.g=i.b=n}else{var m=n,l=(255-o)*n/255,k=(m-l)*(p%60)/60;360===p&&(p=0),60>p?(i.r=m,i.b=l,i.g=l+k):120>p?(i.g=m,i.b=l,i.r=m-k):180>p?(i.g=m,i.r=l,i.b=l+k):240>p?(i.b=m,i.r=l,i.g=m-k):300>p?(i.b=m,i.g=l,i.r=l+k):360>p?(i.r=m,i.g=l,i.b=m-k):(i.r=0,i.g=0,i.b=0)}return{r:Math.round(i.r),g:Math.round(i.g),b:Math.round(i.b)}}function y(a){var d=[a.r.toString(16),a.g.toString(16),a.b.toString(16)];return N.each(d,function(e,c){1===c.length&&(d[e]="0"+c)}),"#"+d.join("")}function x(b){return y(z(b))}function w(d){var c=v(u(d));return 0===c.s&&(c.h=360),c}function v(g){var f={h:0,s:0,b:0},j=Math.min(g.r,g.g,g.b),i=Math.max(g.r,g.g,g.b),h=i-j;return f.b=i,f.s=0!==i?255*h/i:0,f.h=0!==f.s?g.r===i?(g.g-g.b)/h:g.g===i?2+(g.b-g.r)/h:4+(g.r-g.g)/h:-1,f.h*=60,f.h<0&&(f.h+=360),f.s*=100/255,f.b*=100/255,f}function u(b){return b=parseInt(b.indexOf("#")>-1?b.substring(1):b,16),{r:b>>16,g:(65280&b)>>8,b:255&b}}N.minicolors={defaults:{animationSpeed:50,animationEasing:"swing",change:null,changeDelay:0,control:"hue",defaultValue:"",hide:null,hideSpeed:100,inline:!1,letterCase:"lowercase",opacity:!1,position:"bottom left",show:null,showSpeed:100,theme:"default"}},N.extend(N.fn,{minicolors:function(b,a){switch(b){case"destroy":return N(this).each(function(){L(N(this))}),N(this);case"hide":return J(),N(this);case"opacity":return void 0===a?N(this).attr("data-opacity"):(N(this).each(function(){G(N(this).attr("data-opacity",a))}),N(this));case"rgbObject":return E(N(this),"rgbaObject"===b);case"rgbString":case"rgbaString":return D(N(this),"rgbaString"===b);case"settings":return void 0===a?N(this).data("minicolors-settings"):(N(this).each(function(){var c=N(this).data("minicolors-settings")||{};L(N(this)),N(this).minicolors(N.extend(!0,c,a))}),N(this));case"show":return K(N(this).eq(0)),N(this);case"value":return void 0===a?N(this).val():(N(this).each(function(){G(N(this).val(a))}),N(this));default:return"create"!==b&&(a=b),N(this).each(function(){M(N(this),a)}),N(this)}}}),N(document).on("mousedown.minicolors touchstart.minicolors",function(a){N(a.target).parents().add(a.target).hasClass("minicolors")||J()}).on("mousedown.minicolors touchstart.minicolors",".minicolors-grid, .minicolors-slider, .minicolors-opacity-slider",function(a){var d=N(this);a.preventDefault(),N(document).data("minicolors-target",d),I(d,a,!0)}).on("mousemove.minicolors touchmove.minicolors",function(a){var d=N(document).data("minicolors-target");d&&I(d,a)}).on("mouseup.minicolors touchend.minicolors",function(){N(this).removeData("minicolors-target")}).on("mousedown.minicolors touchstart.minicolors",".minicolors-swatch",function(a){var d=N(this).parent().find(".minicolors-input");a.preventDefault(),K(d)}).on("focus.minicolors",".minicolors-input",function(){var a=N(this);a.data("minicolors-initialized")&&K(a)}).on("blur.minicolors",".minicolors-input",function(){var a=N(this),d=a.data("minicolors-settings");a.data("minicolors-initialized")&&(a.val(B(a.val(),!0)),""===a.val()&&a.val(B(d.defaultValue,!0)),a.val(C(a.val(),d.letterCase)))}).on("keydown.minicolors",".minicolors-input",function(a){var d=N(this);if(d.data("minicolors-initialized")){switch(a.keyCode){case 9:J();break;case 13:case 27:J(),d.blur()}}}).on("keyup.minicolors",".minicolors-input",function(){var a=N(this);a.data("minicolors-initialized")&&G(a,!0)}).on("paste.minicolors",".minicolors-input",function(){var a=N(this);a.data("minicolors-initialized")&&setTimeout(function(){G(a,!0)},1)})}(jQuery);