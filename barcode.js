var JsBarcode = require('jsbarcode');

// Canvas v1
var Canvas = require("canvas");
// Canvas v2
var { createCanvas } = require("canvas");

// Canvas v1
var canvas = new Canvas();
// Canvas v2
var canvas = createCanvas();

JsBarcode(canvas, "Hello");