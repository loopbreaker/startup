import { EventEmitter } from './EventEmitter.js';
import { Actor } from './Actor.js';

export class Movie extends EventEmitter {

  constructor(title, year, duration) {
    super();
    this.title = title;
    this.year = year;
    this.duration = duration;
    this.cast = [];
  }

  play() {
    this.emit('play', 'The \'play\' event has been emitted on ' + this.title);
  }

  pause() {
    this.emit('pause', 'The \'pause\' event has been emitted on ' + this.title);
  }

  resume() {
    this.emit('resume', 'The \'resume\' event has been emitted on ' + this.title);
  }

  addCast(cast) {
    if (cast instanceof Actor) this.cast.push(cast)
    else if (cast instanceof Array) {
      let actor;
      for (actor of cast) this.cast.push(actor);      
    }
  }

}
