(function(e){e.extend(true,window,{Slick:{Formatters:{PercentComplete:d,PercentCompleteBar:c,YesNo:a,Checkmark:b}}});function d(j,g,i,h,f){if(i==null||i===""){return"-"}else{if(i<50){return"<span style='color:red;font-weight:bold;'>"+i+"%</span>"}else{return"<span style='color:green'>"+i+"%</span>"}}}function c(k,g,j,i,f){if(j==null||j===""){return""}var h;if(j<30){h="red"}else{if(j<70){h="silver"}else{h="green"}}return"<span class='percent-complete-bar' style='background:"+h+";width:"+j+"%'></span>"}function a(j,g,i,h,f){return i?"Yes":"No"}function b(j,g,i,h,f){return i?"<img src='../images/tick.png'>":""}})(jQuery);