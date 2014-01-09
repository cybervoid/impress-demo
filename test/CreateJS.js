(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.CreateJS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnoHqIAAvTIPSAAIAAPTg");
	this.shape.setTransform(187,167);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AnoHqIAAvTIPSAAIAAPTg");
	this.shape_1.setTransform(187,167);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},19).to({state:[{t:this.shape}]},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(138,118,98,98);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;