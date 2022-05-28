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

	const todos = JSON.parse(window.localStorage.getItem("todos")) || [];
	function deleteTodo(index) {
	    todos.splice(index, 1);
	    localStorage.setItem("todos", JSON.stringify(todos));
	    renderTodos();
	}
	function editTodo(index, editedTodoText) {
	    todos[index].value = editedTodoText;
	    localStorage.setItem("todos", JSON.stringify(todos));
	    renderTodos();
	}
	function editProgressTodo(index, isDone) {
	    todos[index].isDone = isDone;
	    localStorage.setItem("todos", JSON.stringify(todos));
	    renderTodos();
	}
	function renderTodos() {
	    document.querySelector("#tasks").innerHTML = "";
	    document.querySelector("#done-tasks").innerHTML = "";
	    for (let i = 0; i < todos.length; i++) {
	        const listItem = document.createElement("li");
	        listItem.appendChild(document.createTextNode(todos[i].value));
	        const isDone = document.createElement("INPUT");
	        isDone.setAttribute("type", "checkbox");
	        isDone.checked = todos[i].isDone;
	        isDone.addEventListener("change", (event) => {
	            editProgressTodo(i, event.currentTarget.checked);
	        });
	        const deleteButton = document.createElement("button");
	        deleteButton.innerHTML = "Delete";
	        deleteButton.addEventListener("click", () => {
	            deleteTodo(i);
	        });
	        const editButton = document.createElement("button");
	        editButton.innerHTML = "Edit";
	        editButton.addEventListener("click", () => {
	            editTodo(i, "WOP");
	        });
	        listItem.appendChild(isDone);
	        listItem.appendChild(deleteButton);
	        listItem.appendChild(editButton);
	        if (todos[i].isDone) {
	            document.querySelector("#done-tasks").appendChild(listItem);
	        }
	        else {
	            document.querySelector("#tasks").appendChild(listItem);
	        }
	    }
	}
	window.onload = function () {
	    renderTodos();
	    const addButton = document.getElementById("add-button");
	    const addInput = document.getElementById("new-task");
	    if (addButton) {
	        addButton.addEventListener("click", (_) => {
	            console.log(addInput.value);
	            window.localStorage.setItem("todos", JSON.stringify(todos));
	            console.log(todos);
	            todos.push({ value: addInput.value, isDone: false });
	            renderTodos();
	        });
	    }
	};


/***/ })
/******/ ]);