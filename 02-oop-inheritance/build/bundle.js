(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Actor = exports.Actor = function Actor(name, age) {
  _classCallCheck(this, Actor);

  this.name = name;
  this.age = age;
};
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = exports.EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.listeners = {};
  }

  _createClass(EventEmitter, [{
    key: 'on',
    value: function on(label, listener) {
      if (_typeof(this.listeners[label]) !== 'object') {
        this.listeners[label] = [];
      }

      this.listeners[label].push(listener);
    }
  }, {
    key: 'emit',
    value: function emit(label, arg) {
      var i = void 0,
          routines = void 0,
          length = void 0;

      if (_typeof(this.listeners[label]) === 'object') {
        routines = this.listeners[label].slice();
        length = routines.length;

        for (i = 0; i < length; i++) {
          routines[i].call(this, arg);
        }
      }
    }
  }, {
    key: 'off',
    value: function off(label, listener) {
      var pos = void 0;

      if (_typeof(this.listeners[label]) === 'object') {
        pos = this.listeners[label].indexOf(listener);

        if (pos > -1) {
          this.listeners[label].splice(pos, 1);
        }
      }
    }
  }]);

  return EventEmitter;
}();
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Logger = exports.Logger = function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: "log",
    value: function log(info) {
      console.log(info);
    }
  }]);

  return Logger;
}();
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Movie = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _EventEmitter2 = require('./EventEmitter.js');

var _Actor = require('./Actor.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = exports.Movie = function (_EventEmitter) {
  _inherits(Movie, _EventEmitter);

  function Movie(title, year, duration) {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Movie).call(this));

    _this.title = title;
    _this.year = year;
    _this.duration = duration;
    _this.cast = [];
    return _this;
  }

  _createClass(Movie, [{
    key: 'play',
    value: function play() {
      this.emit('play', 'The \'play\' event has been emitted on ' + this.title);
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.emit('pause', 'The \'pause\' event has been emitted on ' + this.title);
    }
  }, {
    key: 'resume',
    value: function resume() {
      this.emit('resume', 'The \'resume\' event has been emitted on ' + this.title);
    }
  }, {
    key: 'addCast',
    value: function addCast(cast) {
      if (cast instanceof _Actor.Actor) this.cast.push(cast);else if (cast instanceof Array) {
        var actor = void 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = cast[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            actor = _step.value;
            this.cast.push(actor);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }]);

  return Movie;
}(_EventEmitter2.EventEmitter);
},{"./Actor.js":1,"./EventEmitter.js":2}],5:[function(require,module,exports){
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
},{"./Actor.js":1,"./EventEmitter.js":2,"./Logger.js":3,"./Movie.js":4}]},{},[5]);
