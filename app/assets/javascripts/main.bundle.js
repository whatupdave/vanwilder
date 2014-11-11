/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1)
	__webpack_require__(2)
	// var React = require('react')
	// var Router = require('react-router')
	// var Route = Router.Route
	// var Routes = Router.Routes
	// var DefaultRoute = Router.DefaultRoute
	// var NotFoundRoute = Router.NotFoundRoute
	//
	// React.render(
	//   <Routes location="history">
	//     <DefaultRoute name="home" handler={require('./elements/home.jsx')} />
	//   </Routes>, document.body)


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// var superagent = require('superagent')

	var Home = React.createClass({displayName: 'Home',
	  getInitialState: function() {
	    return { count: 0 }
	  },

	  render: function() {
	    return React.createElement("div", {className: "container px2"}, 
	      React.createElement("header", {className: "py3 mb3 border-bottom", onClick: this.handleClick}, 
	        React.createElement("h1", {className: "avenir md-h1 lg-h1 caps m0"}, "Oh yeah! ", this.state.count)
	      ), 

	      React.createElement("div", null, 
	        React.createElement("a", {href: "/p/whatupdave"}, "@whatupdave")
	      )
	    )
	  },

	  handleClick: function() {
	    this.setState({count: this.state.count + 1})
	  }
	})

	window.Home = Home


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var PlayersShow = React.createClass({displayName: 'PlayersShow',
	  render: function() {
	    return React.createElement("div", {className: "container px2"}, 
	      React.createElement("header", {className: "py3 mb3 border-bottom", onClick: this.handleClick}, 
	        React.createElement("h1", {className: "avenir md-h1 lg-h1 caps m0"}, 
	          React.createElement("a", {href: "/"}, "Home"), " >" + ' ' +
	          "@whatupdave"
	        )
	      )
	    )
	  }
	})

	window.PlayersShow = PlayersShow


/***/ }
/******/ ])