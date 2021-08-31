/*! @name videojs-seek-buttons @version 2.1.0 @license Apache-2.0 */
!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o(require("video.js")):"function"==typeof define&&define.amd?define(["video.js"],o):(e="undefined"!=typeof globalThis?globalThis:e||self).videojsSeekButtons=o(e.videojs)}(this,(function(e){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t=o(e);function n(e,o,t){return e(t={path:o,exports:{},require:function(e,o){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==o&&t.path)}},t.exports),t.exports}var r=n((function(e){function o(t,n){return e.exports=o=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e},e.exports.default=e.exports,e.exports.__esModule=!0,o(t,n)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0})),s=n((function(e){e.exports=function(e,o){e.prototype=Object.create(o.prototype),e.prototype.constructor=e,r(e,o)},e.exports.default=e.exports,e.exports.__esModule=!0})),i=t.default.getComponent("Button"),c={forwardIndex:1,backIndex:1},d=t.default.registerPlugin||t.default.plugin,u=function(e){var o=this;this.ready((function(){!function(e,o){e.addClass("vjs-seek-buttons"),o.forward&&o.forward>0&&(e.controlBar.seekForward=e.controlBar.addChild("seekButton",{direction:"forward",seconds:o.forward},o.forwardIndex)),o.back&&o.back>0&&(e.controlBar.seekBack=e.controlBar.addChild("seekButton",{direction:"back",seconds:o.back},o.backIndex))}(o,t.default.mergeOptions(c,e))}))};u.VERSION="2.1.0";var a=function(e){function o(o,t){var n;return"forward"===(n=e.call(this,o,t)||this).options_.direction?n.controlText(n.localize("Seek forward {{seconds}} seconds").replace("{{seconds}}",n.options_.seconds)):"back"===n.options_.direction&&n.controlText(n.localize("Seek back {{seconds}} seconds").replace("{{seconds}}",n.options_.seconds)),n}s(o,e);var t=o.prototype;return t.buildCSSClass=function(){return"vjs-seek-button skip-"+this.options_.direction+" skip-"+this.options_.seconds+" "+e.prototype.buildCSSClass.call(this)},t.handleClick=function(){var e=this.player_.currentTime();"forward"===this.options_.direction?this.player_.currentTime(e+this.options_.seconds):"back"===this.options_.direction&&this.player_.currentTime(e-this.options_.seconds)},o}(i);return t.default.registerComponent("SeekButton",a),d("seekButtons",u),u}));