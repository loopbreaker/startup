'use strict';

var _EventEmitter = require('./EventEmitter.js');

var _Movie = require('./Movie.js');

var _Logger = require('./Logger.js');

var _Actor = require('./Actor.js');

/* Main ES6 Module */


var vForVendetta = new _Movie.Movie('V for Vendetta', 2006, 132);
var logger = new _Logger.Logger();
vForVendetta.on('play', logger.log);

vForVendetta.play();

vForVendetta.off('play', logger.log);
vForVendetta.play();

var Social = {
  share: function share(friendName) {
    console.log(friendName + (' likes ' + this.title));
  },
  like: function like(friendName) {
    console.log(friendName + (' shares ' + this.title));
  }
};

var socialMovie = Object.assign(vForVendetta, Social);

socialMovie.share('Fernando');
socialMovie.like('Juan');

var natalie = new _Actor.Actor('Natalie Portman', 34);
var hugo = new _Actor.Actor('Hugo Weaving', 56);

vForVendetta.addCast(natalie);

var otherCast = [new _Actor.Actor('Stephen Rea', 69), new _Actor.Actor('Stephen John Fry', 58), new _Actor.Actor('John Vincent Hurt', 76), hugo];

vForVendetta.addCast(otherCast);
console.log(vForVendetta);