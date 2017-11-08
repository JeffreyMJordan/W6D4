/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(1);


$(() => {
    $('.follow-toggle').each(function(idx){
      let toggle = new FollowToggle($(this));
    });
  }
);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./api_utl\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

class FollowToggle{
  constructor($el){

    this.userId = $el.data("userid");
    this.followState = $el.data("followed");
    this.el = $el;
    console.log(this.el);
    this.render();
    this.el.on("click", this.handleClick.bind(this));
  }

  render(){
    if(this.followState===true){
      this.el.html("<button>Unfollow!</button>");
    }else{
      this.el.html("<button>Follow!</button>");
    }
  }

  handleClick(event){
    event.preventDefault();
    console.log(event);
    const context = this;
    if(this.followState===true){
      $.ajax({
        type: 'delete',
        dataType: 'json',
        url: `/users/${this.userId}/follow`,
        success(data){
          context.followState = false;
          context.render();
        },
        error(){
          console.log("error");
        },
      });
    }else{
      $.ajax({
        type: 'post',
        dataType: 'json',
        url: `/users/${this.userId}/follow`,
        success(data){
          console.log(context);
          context.followState = true;
          context.render();
        },
        error(){
          console.log("error");
        },
      });
    }
  }


}

module.exports = FollowToggle;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map