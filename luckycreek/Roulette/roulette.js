(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.chip = function() {
	this.initialize(img.chip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,137);


(lib.rouletteball = function() {
	this.initialize(img.rouletteball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,31);


(lib.roulettebuttonblack = function() {
	this.initialize(img.roulettebuttonblack);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,75);


(lib.roulettebuttonred = function() {
	this.initialize(img.roulettebuttonred);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,340,75);


(lib.roulettewheel = function() {
	this.initialize(img.roulettewheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,752,751);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Sign up now to claim", "normal 400 36px 'Roboto Condensed'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 50;
	this.text.lineWidth = 854;
	this.text.alpha = 0.89803922;
	this.text.parent = this;
	this.text.setTransform(417.15,201.7);
	if(!lib.properties.webfonts['Roboto Condensed']) {
		lib.webFontTxtInst['Roboto Condensed'] = lib.webFontTxtInst['Roboto Condensed'] || [];
		lib.webFontTxtInst['Roboto Condensed'].push(this.text);
	}

	this.text_1 = new cjs.Text("up to 1000 USD - Code: BANK250", "normal 700 47px 'Roboto Condensed'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 64;
	this.text_1.lineWidth = 854;
	this.text_1.alpha = 0.89803922;
	this.text_1.parent = this;
	this.text_1.setTransform(417.15,148.45);
	if(!lib.properties.webfonts['Roboto Condensed']) {
		lib.webFontTxtInst['Roboto Condensed'] = lib.webFontTxtInst['Roboto Condensed'] || [];
		lib.webFontTxtInst['Roboto Condensed'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("250% Deposit Match Bonus", "normal 700 58px 'Roboto Condensed'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 79;
	this.text_2.lineWidth = 854;
	this.text_2.alpha = 0.89803922;
	this.text_2.parent = this;
	this.text_2.setTransform(417.15,88.55);
	if(!lib.properties.webfonts['Roboto Condensed']) {
		lib.webFontTxtInst['Roboto Condensed'] = lib.webFontTxtInst['Roboto Condensed'] || [];
		lib.webFontTxtInst['Roboto Condensed'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("You Win!", "normal 700 53px 'Roboto Condensed'", "#FFFFFF");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 72;
	this.text_3.lineWidth = 854;
	this.text_3.alpha = 0.89803922;
	this.text_3.parent = this;
	this.text_3.setTransform(417.15,36.95);
	if(!lib.properties.webfonts['Roboto Condensed']) {
		lib.webFontTxtInst['Roboto Condensed'] = lib.webFontTxtInst['Roboto Condensed'] || [];
		lib.webFontTxtInst['Roboto Condensed'].push(this.text_3);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg6SgYEMB0lAAAQDPAACTCSQCSCTAADPMAAAAghQAADPiSCTQiTCSjPAAMh0lAAAQjPAAiTiSQiSiTAAjPMAAAgghQAAjPCSiTQCTiSDPAAg");
	this.shape.setTransform(423.125,154.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.898)").s().p("Eg6SAYFQjPAAiTiSQiSiTAAjPMAAAgghQAAjPCSiTQCTiSDPAAMB0lAAAQDPAACTCSQCSCTAADPMAAAAghQAADPiSCTQiTCSjPAAg");
	this.shape_1.setTransform(423.125,154.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-11.9,-1,859.1999999999999,310.3), null);


(lib.roulettewheel_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.roulettewheel();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.roulettewheel_1, new cjs.Rectangle(0,0,752,751), null);


(lib.frame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg6SgYEMB0lAAAQDPAACTCSQCSCTAADPMAAAAghQAADPiSCTQiTCSjPAAMh0lAAAQjPAAiTiSQiSiTAAjPMAAAgghQAAjPCSiTQCTiSDPAAg");
	this.shape.setTransform(423.125,187.483,1,1.2164);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.898)").s().p("Eg6SAYFQjPAAiTiSQiSiTAAjPMAAAgghQAAjPCSiTQCTiSDPAAMB0lAAAQDPAACTCSQCSCTAADPMAAAAghQAADPiSCTQiTCSjPAAg");
	this.shape_1.setTransform(423.125,187.483,1,1.2164);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.frame, new cjs.Rectangle(-1,-1,848.3,377), null);


(lib.chip_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.chip();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.chip_1, new cjs.Rectangle(0,0,136,137), null);


(lib.ball = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rouletteball();
	this.instance.setTransform(0,-207);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ball, new cjs.Rectangle(0,-207,31,31), null);


(lib.bahar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("BLACK", "normal 700 58px 'Roboto Condensed'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 79;
	this.text.lineWidth = 227;
	this.text.parent = this;
	this.text.setTransform(191.6,34.15);
	if(!lib.properties.webfonts['Roboto Condensed']) {
		lib.webFontTxtInst['Roboto Condensed'] = lib.webFontTxtInst['Roboto Condensed'] || [];
		lib.webFontTxtInst['Roboto Condensed'].push(this.text);
	}

	this.instance = new lib.roulettebuttonblack();
	this.instance.setTransform(-15,6,1.2118,1.2118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,6,412,186.1);


(lib.andar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("RED ", "normal 700 58px 'Roboto Condensed'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 79;
	this.text.lineWidth = 227;
	this.text.parent = this;
	this.text.setTransform(187.45,32.55);
	if(!lib.properties.webfonts['Roboto Condensed']) {
		lib.webFontTxtInst['Roboto Condensed'] = lib.webFontTxtInst['Roboto Condensed'] || [];
		lib.webFontTxtInst['Roboto Condensed'].push(this.text);
	}

	this.instance = new lib.roulettebuttonred();
	this.instance.setTransform(-22,5,1.2588,1.2588);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,5,428,185.5);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.button_1 = new lib.andar();
	this.button_1.name = "button_1";
	this.button_1.setTransform(194.5,84.7,1,1,0,0,0,194.5,84.7);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.button_2 = new lib.bahar();
	this.button_2.name = "button_2";
	this.button_2.setTransform(661.5,85.5,1,1,0,0,0,194.5,85.5);
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_2},{t:this.button_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-22,5,886,187.1), null);


// stage content:
(lib.roulette = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {andar:24,bahar:181};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [23,179,336];
	// timeline functions:
	this.frame_23 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay('andar');
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.button_2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay('bahar');
		}
	}
	this.frame_179 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		animateform();
	}
	this.frame_336 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		animateform();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(156).call(this.frame_179).wait(157).call(this.frame_336).wait(20));

	// Layer_12
	this.text = new cjs.Text("Place your bet:", "normal 700 49px 'Roboto Condensed'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 67;
	this.text.lineWidth = 913;
	this.text.parent = this;
	this.text.setTransform(450,683);
	if(!lib.properties.webfonts['Roboto Condensed']) {
		lib.webFontTxtInst['Roboto Condensed'] = lib.webFontTxtInst['Roboto Condensed'] || [];
		lib.webFontTxtInst['Roboto Condensed'].push(this.text);
	}
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(23).to({_off:false},0).to({_off:true},1).wait(332));

	// Layer_10
	this.instance = new lib.chip_1();
	this.instance.setTransform(462,1033.1,1,1,0,0,0,68,68.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({y:814.5},3).wait(1).to({x:312.55},5).wait(120).to({x:445.95,y:560.1},4).wait(28).to({x:462,y:814.5},0).to({x:606},5).wait(120).to({x:445.95,y:560.1},4).to({_off:true},27).wait(19));

	// Layer_11
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(450,1061.1,1,1,0,0,0,423.1,154.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(149).to({_off:false},0).to({scaleY:1.2164,y:786.2},4).to({_off:true},28).wait(125).to({_off:false,scaleY:1,y:1061.1},0).to({scaleY:1.2164,y:786.2},4).to({_off:true},27).wait(19));

	// Layer_9
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(456,1018.95,1,1,0,0,0,428,96);
	this.instance_2._off = true;

	this.button_1 = new lib.andar();
	this.button_1.name = "button_1";
	this.button_1.setTransform(222.5,843.7,1,1,0,0,0,194.5,84.7);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.button_2 = new lib.bahar();
	this.button_2.name = "button_2";
	this.button_2.setTransform(689.5,844.5,1,1,0,0,0,194.5,85.5);
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},18).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.button_2},{t:this.button_1}]},1).to({state:[{t:this.button_2},{t:this.button_1}]},1).to({state:[{t:this.button_2},{t:this.button_1}]},5).to({state:[{t:this.button_2},{t:this.button_1}]},152).to({state:[{t:this.button_2},{t:this.button_1}]},5).wait(170));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).to({y:855},4).to({_off:true},1).wait(333));

	// Layer_14
	this.instance_3 = new lib.ball();
	this.instance_3.setTransform(449.5,190.5,1,1,0,0,0,15.5,15.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24).to({_off:false},0).to({y:450.5},5).to({rotation:-1062.9998,x:449.45},120).wait(32).to({rotation:-1080,x:449.5,y:190.5},0).to({y:450.5},5).to({regX:15.6,rotation:-1830.9997},120).wait(50));

	// Layer_15
	this.instance_4 = new lib.frame();
	this.instance_4.setTransform(451.1,1097.3,1,1,0,0,0,423.1,187.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({y:847.25},4).wait(1).to({y:1115.3},3).to({_off:true},1).wait(153).to({_off:false,y:847.25},0).to({y:1115.3},3).to({_off:true},1).wait(171));

	// Layer_13
	this.instance_5 = new lib.roulettewheel_1();
	this.instance_5.setTransform(450,450.5,1,1,0,0,0,376,375.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24).to({rotation:1080},125).wait(32).to({rotation:2160},125).wait(50));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(368.6,369.1,612.8,934.1999999999999);
// library properties:
lib.properties = {
	id: 'DD896FEA46141B40973663DB0B914951',
	width: 900,
	height: 900,
	fps: 30,
	color: "#2C1C32",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/chip.png?1623137557696", id:"chip"},
		{src:"images/rouletteball.png?1623137557696", id:"rouletteball"},
		{src:"images/roulettebuttonblack.png?1623137557696", id:"roulettebuttonblack"},
		{src:"images/roulettebuttonred.png?1623137557696", id:"roulettebuttonred"},
		{src:"images/roulettewheel.png?1623137557696", id:"roulettewheel"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DD896FEA46141B40973663DB0B914951'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;