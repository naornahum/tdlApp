var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	window.onload = function () {
	    const addButton = document.getElementById("add-button");
	    const addInput = document.getElementById("new-task");
	    // const tasks: HTMLElement | null = document.getElementById("tasks");
	    if (addButton) {
	        addButton.addEventListener("click", (_) => {
	            console.log(addInput.value);
	            const id = Date.now();
	            window.localStorage.setItem(id.toString(), addInput.value);
	            // console.log(tasks);
	            // const newTask = document.createElement("li");
	            // const newTaskContent = document.createTextNode(addInput.value);
	            // newTask.appendChild(newTaskContent);
	            // tasks?.appendChild(newTask);
	        });
	    }
	};
	function task() {
	    const tasks = document.getElementById("tasks");
	    const newTask = document.createElement("li");
	    const newTaskContent = document.createTextNode("blabla");
	    newTask.appendChild(newTaskContent);
	    tasks.appendChild(newTask);
	}


/***/ })
/******/ ]);