(function($w){'use strict';
 function isReady(evt){
	var k=true,e=evt,d=e.target||(k=false,e),w=d.defaultView,$id=w.$id,Html=d.documentElement,rootClasses=Html.classList,
	i='body',
	Body=d[i]=d[i]||d.getElementsByTagName(i)[0];
	if(!Body[i='ownerDocument']){Body[i]=d;};
	i=w.info;
	//...
	rootClasses.replace('loading',['ready']);
	d.title=d.titleOriginal;
 }
 //
 function isLoad(evt){
	var e=evt,d=e.target||e,w=d.defaultView,i=w.info,Html=d.documentElement,Body=d.body;
	if(i.support.DOMContentLoaded!==true){isReady(d);};
	Html.classList.remove('ready');
	d.title=d.titleOriginal;
	Html.className+='\u0020loaded';
	//
	var handleScroll=function(evt){
		var e=evt.target.body,o=e.scroll;
		if(!o.ignore){
			var r=e.ownerDocument.documentElement, y=o.y, j=y.prev, i=y.pos=e.scrollTop, run=function(x){var e=x;if(e.run!==true){clearTimeout(e.i);e.i=setTimeout(e.f,e.s);};};
			y.prev=i;
			if(i>j){//direction:down
			 if((r.scrollHeight-(i+r.clientHeight))===0){run(o.ReachBottom);};
			};
		};
	};
	//
	Body.scroll={
		ignore:false,
		ReachBottom:{
		 f:function(){
			var s=Body.scroll, e=s.ReachBottom;
			s.ignore=e.run=true;
			console.log(JSON.stringify(s));
			s.ignore=e.run=false;
		 },
		 s:200
		},
		y:{pos:null,prev:0}
	};
	//
	d.addEventListener('scroll',handleScroll);
	d.addEventListener('touchmove',handleScroll);
 }
 //
 var w=$w,
 d=(function($w){
	var w=$w,d=w.document,i=w.Function.prototype,Call=i.call;
	d.titleOriginal=d.title;
	d.title='Loading..';
	w.info={
		support:{
			DOMContentLoaded:false,
			Bind:i.bind?(w.Call=Call=Call.bind(i.bind),i=Call(d.getElementById,d),true):(i=function(s){return document.getElementById(s)},false)
		},
		//file:{islocal:String(w.location).indexOf('file://')!==-1}
	};
	w.$id=i;
	if(i=d.documentMode && i<9){for(var m=['footer','header','main','nav'],i=m.length;i--;d.createElement(m[i--]));};
	if(!d[i='defaultView']){d[i]=w;};
	if(!d[i='documentElement']){d[i]=d.getElementsByTagName('html')[0];};
	i=d[i].classList;
	i.replace=function(a,b){var e=this;e.remove(a);e.add.apply(e,b);};
	i.replace('js-no',['js','loading']);
	return d;
 })(w),
 at=w.at=function(x,s,f,b){var e=x,t=s,i=function(o){f(o);e.removeEventListener(t,i);};e.addEventListener(t,i,b&&true);};
 //
 if(d.readyState!=='complete'){at(w,'DOMContentLoaded',isReady);at(w,'load',isLoad);}else{isLoad(d);};
})(window);
//END.
