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