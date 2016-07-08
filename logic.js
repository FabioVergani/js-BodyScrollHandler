window.onload=function(){

 var handleScroll=function(evt){
	var e=evt.target.body,
	r=e.ownerDocument.documentElement,
	o=e.scroll,y=o.y,j=y.prev,i=y.pos=e.scrollTop,
	run=function(x){var e=x;if(e.run!==true){clearTimeout(e.i);e.i=setTimeout(e.f,e.s);};};
	y.prev=i;
	if(i>j){//direction:down
	 if((r.scrollHeight-(i+r.clientHeight))===0){
		run(o.ReachBottom);
	 };
	};
 };
 //
 window.document.body.scroll={
	ReachBottom:{
	 f:function(){
		var s=document.body.scroll, e=s.ReachBottom;
		e.run=true;
		console.log(JSON.stringify(s));
		e.run=false;
	 },
	 s:200
	},
	y:{pos:null,prev:0}
 };
 //
 window.document.addEventListener('scroll',handleScroll);
 window.document.addEventListener('touchmove',handleScroll);
};
