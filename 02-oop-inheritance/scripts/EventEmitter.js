export class EventEmitter {

  constructor() {
    this.listeners = {};
  }

  on(label, listener) {
    if (typeof this.listeners[label] !== 'object') {
      this.listeners[label] = [];
    }

    this.listeners[label].push(listener);
  }

  emit(label, arg) {
    let i, routines, length;

    if (typeof this.listeners[label] === 'object') {
        routines = this.listeners[label].slice();
        length = routines.length;

        for (i = 0; i < length; i++) {
            routines[i].call(this, arg);
        }
    }
  }

  off(label, listener) { 
     let pos;

    if (typeof this.listeners[label] === 'object') {
        pos = this.listeners[label].indexOf(listener);

        if (pos > -1) {
            this.listeners[label].splice(pos, 1);
        }
    }
  }
}
