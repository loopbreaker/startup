/* Main ES6 Module */
import { EventEmitter } from './EventEmitter.js';
import { Movie } from './Movie.js';
import { Logger } from './Logger.js';
import { Actor } from './Actor.js';

let vForVendetta = new Movie('V for Vendetta', 2006, 132);
let logger = new Logger();
vForVendetta.on('play', logger.log);

vForVendetta.play();

vForVendetta.off('play', logger.log);
vForVendetta.play();

let Social = {
  share: function(friendName) {
    console.log(friendName + ` likes ${this.title}`);
  },
  like: function(friendName) {
    console.log(friendName + ` shares ${this.title}`);
  }
};

let socialMovie = Object.assign(vForVendetta, Social);

socialMovie.share('Fernando');
socialMovie.like('Juan');

let natalie = new Actor('Natalie Portman', 34);
let hugo = new Actor('Hugo Weaving', 56);

vForVendetta.addCast(natalie);

let otherCast = [
  new Actor('Stephen Rea', 69),
  new Actor('Stephen John Fry', 58),
  new Actor('John Vincent Hurt', 76),
  hugo
];

vForVendetta.addCast(otherCast);
console.log(vForVendetta);

