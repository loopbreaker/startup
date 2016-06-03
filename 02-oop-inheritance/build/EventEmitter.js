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