(function(b){b.extend(true,window,{Slick:{CellSelectionModel:a}});function a(s){var m;var j;var h=[];var l=this;var f=new Slick.CellRangeSelector({selectionCss:{border:"2px solid black"}});var o;var g={selectActiveCell:true};function p(t){o=b.extend(true,{},g,s);m=t;j=m.getCanvasNode();m.onActiveCellChanged.subscribe(i);m.onKeyDown.subscribe(c);t.registerPlugin(f);f.onCellRangeSelected.subscribe(q);f.onBeforeCellRangeSelected.subscribe(r)}function n(){m.onActiveCellChanged.unsubscribe(i);m.onKeyDown.unsubscribe(c);f.onCellRangeSelected.unsubscribe(q);f.onBeforeCellRangeSelected.unsubscribe(r);m.unregisterPlugin(f)}function e(u){var t=[];for(var v=0;v<u.length;v++){var w=u[v];if(m.canCellBeSelected(w.fromRow,w.fromCell)&&m.canCellBeSelected(w.toRow,w.toCell)){t.push(w)}}return t}function d(t){h=e(t);l.onSelectedRangesChanged.notify(h)}function k(){return h}function r(u,t){if(m.getEditorLock().isActive()){u.stopPropagation();return false}}function q(u,t){d([t.range])}function i(u,t){if(o.selectActiveCell&&t.row!=null&&t.cell!=null){d([new Slick.Range(t.row,t.cell)])}}function c(z){var t,C;var v=m.getActiveCell();if(v&&z.shiftKey&&!z.ctrlKey&&!z.altKey&&(z.which==37||z.which==39||z.which==38||z.which==40)){t=k();if(!t.length){t.push(new Slick.Range(v.row,v.cell))}C=t.pop();if(!C.contains(v.row,v.cell)){C=new Slick.Range(v.row,v.cell)}var D=C.toRow-C.fromRow,x=C.toCell-C.fromCell,B=v.row==C.fromRow?1:-1,A=v.cell==C.fromCell?1:-1;if(z.which==37){x-=A}else{if(z.which==39){x+=A}else{if(z.which==38){D-=B}else{if(z.which==40){D+=B}}}}var u=new Slick.Range(v.row,v.cell,v.row+B*D,v.cell+A*x);if(e([u]).length){t.push(u);var w=B>0?u.toRow:u.fromRow;var y=A>0?u.toCell:u.fromCell;m.scrollRowIntoView(w);m.scrollCellIntoView(w,y)}else{t.push(C)}d(t);z.preventDefault();z.stopPropagation()}}b.extend(this,{getSelectedRanges:k,setSelectedRanges:d,init:p,destroy:n,onSelectedRangesChanged:new Slick.Event()})}})(jQuery);