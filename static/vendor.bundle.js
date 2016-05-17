<<<<<<< HEAD
!function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n=window.webpackJsonp;window.webpackJsonp=function(o,a){for(var s,u,h=0,c=[];h<o.length;h++)u=o[h],i[u]&&c.push.apply(c,i[u]),i[u]=0;for(s in a)t[s]=a[s];for(n&&n(o,a);c.length;)c.shift().call(null,e);return a[0]?(r[0]=0,e(0)):void 0};var r={},i={0:0};return e.e=function(t,n){if(0===i[t])return n.call(null,e);if(void 0!==i[t])i[t].push(n);else{i[t]=[n];var r=document.getElementsByTagName("head")[0],o=document.createElement("script");o.type="text/javascript",o.charset="utf-8",o.async=!0,o.src=e.p+""+t+".app.js",r.appendChild(o)}},e.m=t,e.c=r,e.p="http://dafrok.github.io/react-markdown-note/static",e(0)}({0:function(t,e,n){t.exports=n(137)},31:function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},45:function(t,e,n){(function(e){function r(t){return this instanceof r?(u.call(this,t),h.call(this,t),t&&t.readable===!1&&(this.readable=!1),t&&t.writable===!1&&(this.writable=!1),this.allowHalfOpen=!0,t&&t.allowHalfOpen===!1&&(this.allowHalfOpen=!1),void this.once("end",i)):new r(t)}function i(){this.allowHalfOpen||this._writableState.ended||e.nextTick(this.end.bind(this))}function o(t,e){for(var n=0,r=t.length;r>n;n++)e(t[n],n)}t.exports=r;var a=Object.keys||function(t){var e=[];for(var n in t)e.push(n);return e},s=n(57);s.inherits=n(31);var u=n(218),h=n(135);s.inherits(r,u),o(a(h.prototype),function(t){r.prototype[t]||(r.prototype[t]=h.prototype[t])})}).call(e,n(79))},46:function(t,e,n){(function(t,r){/*!
=======
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};
/******/ 	var parentHotUpdateCallback = this["webpackHotUpdate"];
/******/ 	this["webpackHotUpdate"] = 
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if(parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		head.appendChild(script);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest(callback) { // eslint-disable-line no-unused-vars
/******/ 		if(typeof XMLHttpRequest === "undefined")
/******/ 			return callback(new Error("No browser support"));
/******/ 		try {
/******/ 			var request = new XMLHttpRequest();
/******/ 			var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 			request.open("GET", requestPath, true);
/******/ 			request.timeout = 10000;
/******/ 			request.send(null);
/******/ 		} catch(err) {
/******/ 			return callback(err);
/******/ 		}
/******/ 		request.onreadystatechange = function() {
/******/ 			if(request.readyState !== 4) return;
/******/ 			if(request.status === 0) {
/******/ 				// timeout
/******/ 				callback(new Error("Manifest request to " + requestPath + " timed out."));
/******/ 			} else if(request.status === 404) {
/******/ 				// no update available
/******/ 				callback();
/******/ 			} else if(request.status !== 200 && request.status !== 304) {
/******/ 				// other failure
/******/ 				callback(new Error("Manifest request to " + requestPath + " failed."));
/******/ 			} else {
/******/ 				// success
/******/ 				try {
/******/ 					var update = JSON.parse(request.responseText);
/******/ 				} catch(e) {
/******/ 					callback(e);
/******/ 					return;
/******/ 				}
/******/ 				callback(null, update);
/******/ 			}
/******/ 		};
/******/ 	}

/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "445a008fac31de7f1750"; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					if(me.children.indexOf(request) < 0)
/******/ 						me.children.push(request);
/******/ 				} else hotCurrentParents = [moduleId];
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name)) {
/******/ 				if(Object.defineProperty) {
/******/ 					Object.defineProperty(fn, name, (function(name) {
/******/ 						return {
/******/ 							configurable: true,
/******/ 							enumerable: true,
/******/ 							get: function() {
/******/ 								return __webpack_require__[name];
/******/ 							},
/******/ 							set: function(value) {
/******/ 								__webpack_require__[name] = value;
/******/ 							}
/******/ 						};
/******/ 					}(name)));
/******/ 				} else {
/******/ 					fn[name] = __webpack_require__[name];
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		function ensure(chunkId, callback) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			__webpack_require__.e(chunkId, function() {
/******/ 				try {
/******/ 					callback.call(null, fn);
/******/ 				} finally {
/******/ 					finishChunkLoading();
/******/ 				}
/******/ 	
/******/ 				function finishChunkLoading() {
/******/ 					hotChunksLoading--;
/******/ 					if(hotStatus === "prepare") {
/******/ 						if(!hotWaitingFilesMap[chunkId]) {
/******/ 							hotEnsureUpdateChunk(chunkId);
/******/ 						}
/******/ 						if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 							hotUpdateDownloaded();
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		}
/******/ 		if(Object.defineProperty) {
/******/ 			Object.defineProperty(fn, "e", {
/******/ 				enumerable: true,
/******/ 				value: ensure
/******/ 			});
/******/ 		} else {
/******/ 			fn.e = ensure;
/******/ 		}
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback;
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback;
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "number")
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 				else
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailibleFilesMap = {};
/******/ 	var hotCallback;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply, callback) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		if(typeof apply === "function") {
/******/ 			hotApplyOnUpdate = false;
/******/ 			callback = apply;
/******/ 		} else {
/******/ 			hotApplyOnUpdate = apply;
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		}
/******/ 		hotSetStatus("check");
/******/ 		hotDownloadManifest(function(err, update) {
/******/ 			if(err) return callback(err);
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				callback(null, null);
/******/ 				return;
/******/ 			}
/******/ 	
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotAvailibleFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			for(var i = 0; i < update.c.length; i++)
/******/ 				hotAvailibleFilesMap[update.c[i]] = true;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			hotCallback = callback;
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailibleFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailibleFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var callback = hotCallback;
/******/ 		hotCallback = null;
/******/ 		if(!callback) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			hotApply(hotApplyOnUpdate, callback);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			callback(null, outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options, callback) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		if(typeof options === "function") {
/******/ 			callback = options;
/******/ 			options = {};
/******/ 		} else if(options && typeof options === "object") {
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		} else {
/******/ 			options = {};
/******/ 			callback = callback || function(err) {
/******/ 				if(err) throw err;
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function getAffectedStuff(module) {
/******/ 			var outdatedModules = [module];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice();
/******/ 			while(queue.length > 0) {
/******/ 				var moduleId = queue.pop();
/******/ 				var module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return new Error("Aborted because of self decline: " + moduleId);
/******/ 				}
/******/ 				if(moduleId === 0) {
/******/ 					return;
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return new Error("Aborted because of declined dependency: " + moduleId + " in " + parentId);
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push(parentId);
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return [outdatedModules, outdatedDependencies];
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				var moduleId = toModuleId(id);
/******/ 				var result = getAffectedStuff(moduleId);
/******/ 				if(!result) {
/******/ 					if(options.ignoreUnaccepted)
/******/ 						continue;
/******/ 					hotSetStatus("abort");
/******/ 					return callback(new Error("Aborted because " + moduleId + " is not accepted"));
/******/ 				}
/******/ 				if(result instanceof Error) {
/******/ 					hotSetStatus("abort");
/******/ 					return callback(result);
/******/ 				}
/******/ 				appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 				addAllToSet(outdatedModules, result[0]);
/******/ 				for(var moduleId in result[1]) {
/******/ 					if(Object.prototype.hasOwnProperty.call(result[1], moduleId)) {
/******/ 						if(!outdatedDependencies[moduleId])
/******/ 							outdatedDependencies[moduleId] = [];
/******/ 						addAllToSet(outdatedDependencies[moduleId], result[1][moduleId]);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(var i = 0; i < outdatedModules.length; i++) {
/******/ 			var moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			var moduleId = queue.pop();
/******/ 			var module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(var j = 0; j < disposeHandlers.length; j++) {
/******/ 				var cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(var j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				var idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		for(var moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				var module = installedModules[moduleId];
/******/ 				var moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				for(var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 					var dependency = moduleOutdatedDependencies[j];
/******/ 					var idx = module.children.indexOf(dependency);
/******/ 					if(idx >= 0) module.children.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(var moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(var moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				var module = installedModules[moduleId];
/******/ 				var moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				var callbacks = [];
/******/ 				for(var i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 					var dependency = moduleOutdatedDependencies[i];
/******/ 					var cb = module.hot._acceptedDependencies[dependency];
/******/ 					if(callbacks.indexOf(cb) >= 0) continue;
/******/ 					callbacks.push(cb);
/******/ 				}
/******/ 				for(var i = 0; i < callbacks.length; i++) {
/******/ 					var cb = callbacks[i];
/******/ 					try {
/******/ 						cb(outdatedDependencies);
/******/ 					} catch(err) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(var i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			var moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else if(!error)
/******/ 					error = err;
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return callback(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		callback(null, outdatedModules);
/******/ 	}

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		1:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: hotCurrentParents,
/******/ 			children: []
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".app.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3000/static";

/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };

/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(410);


/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var punycode = __webpack_require__(3);

	exports.parse = urlParse;
	exports.resolve = urlResolve;
	exports.resolveObject = urlResolveObject;
	exports.format = urlFormat;

	exports.Url = Url;

	function Url() {
	  this.protocol = null;
	  this.slashes = null;
	  this.auth = null;
	  this.host = null;
	  this.port = null;
	  this.hostname = null;
	  this.hash = null;
	  this.search = null;
	  this.query = null;
	  this.pathname = null;
	  this.path = null;
	  this.href = null;
	}

	// Reference: RFC 3986, RFC 1808, RFC 2396

	// define these here so at least they only have to be
	// compiled once on the first module load.
	var protocolPattern = /^([a-z0-9.+-]+:)/i,
	    portPattern = /:[0-9]*$/,

	    // RFC 2396: characters reserved for delimiting URLs.
	    // We actually just auto-escape these.
	    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

	    // RFC 2396: characters not allowed for various reasons.
	    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

	    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
	    autoEscape = ['\''].concat(unwise),
	    // Characters that are never ever allowed in a hostname.
	    // Note that any invalid chars are also handled, but these
	    // are the ones that are *expected* to be seen, so we fast-path
	    // them.
	    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
	    hostEndingChars = ['/', '?', '#'],
	    hostnameMaxLen = 255,
	    hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
	    hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
	    // protocols that can allow "unsafe" and "unwise" chars.
	    unsafeProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that never have a hostname.
	    hostlessProtocol = {
	      'javascript': true,
	      'javascript:': true
	    },
	    // protocols that always contain a // bit.
	    slashedProtocol = {
	      'http': true,
	      'https': true,
	      'ftp': true,
	      'gopher': true,
	      'file': true,
	      'http:': true,
	      'https:': true,
	      'ftp:': true,
	      'gopher:': true,
	      'file:': true
	    },
	    querystring = __webpack_require__(5);

	function urlParse(url, parseQueryString, slashesDenoteHost) {
	  if (url && isObject(url) && url instanceof Url) return url;

	  var u = new Url;
	  u.parse(url, parseQueryString, slashesDenoteHost);
	  return u;
	}

	Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
	  if (!isString(url)) {
	    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
	  }

	  var rest = url;

	  // trim before proceeding.
	  // This is to support parse stuff like "  http://foo.com  \n"
	  rest = rest.trim();

	  var proto = protocolPattern.exec(rest);
	  if (proto) {
	    proto = proto[0];
	    var lowerProto = proto.toLowerCase();
	    this.protocol = lowerProto;
	    rest = rest.substr(proto.length);
	  }

	  // figure out if it's got a host
	  // user@server is *always* interpreted as a hostname, and url
	  // resolution will treat //foo/bar as host=foo,path=bar because that's
	  // how the browser resolves relative URLs.
	  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
	    var slashes = rest.substr(0, 2) === '//';
	    if (slashes && !(proto && hostlessProtocol[proto])) {
	      rest = rest.substr(2);
	      this.slashes = true;
	    }
	  }

	  if (!hostlessProtocol[proto] &&
	      (slashes || (proto && !slashedProtocol[proto]))) {

	    // there's a hostname.
	    // the first instance of /, ?, ;, or # ends the host.
	    //
	    // If there is an @ in the hostname, then non-host chars *are* allowed
	    // to the left of the last @ sign, unless some host-ending character
	    // comes *before* the @-sign.
	    // URLs are obnoxious.
	    //
	    // ex:
	    // http://a@b@c/ => user:a@b host:c
	    // http://a@b?@c => user:a host:c path:/?@c

	    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
	    // Review our test case against browsers more comprehensively.

	    // find the first instance of any hostEndingChars
	    var hostEnd = -1;
	    for (var i = 0; i < hostEndingChars.length; i++) {
	      var hec = rest.indexOf(hostEndingChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }

	    // at this point, either we have an explicit point where the
	    // auth portion cannot go past, or the last @ char is the decider.
	    var auth, atSign;
	    if (hostEnd === -1) {
	      // atSign can be anywhere.
	      atSign = rest.lastIndexOf('@');
	    } else {
	      // atSign must be in auth portion.
	      // http://a@b/c@d => host:b auth:a path:/c@d
	      atSign = rest.lastIndexOf('@', hostEnd);
	    }

	    // Now we have a portion which is definitely the auth.
	    // Pull that off.
	    if (atSign !== -1) {
	      auth = rest.slice(0, atSign);
	      rest = rest.slice(atSign + 1);
	      this.auth = decodeURIComponent(auth);
	    }

	    // the host is the remaining to the left of the first non-host char
	    hostEnd = -1;
	    for (var i = 0; i < nonHostChars.length; i++) {
	      var hec = rest.indexOf(nonHostChars[i]);
	      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
	        hostEnd = hec;
	    }
	    // if we still have not hit it, then the entire thing is a host.
	    if (hostEnd === -1)
	      hostEnd = rest.length;

	    this.host = rest.slice(0, hostEnd);
	    rest = rest.slice(hostEnd);

	    // pull out port.
	    this.parseHost();

	    // we've indicated that there is a hostname,
	    // so even if it's empty, it has to be present.
	    this.hostname = this.hostname || '';

	    // if hostname begins with [ and ends with ]
	    // assume that it's an IPv6 address.
	    var ipv6Hostname = this.hostname[0] === '[' &&
	        this.hostname[this.hostname.length - 1] === ']';

	    // validate a little.
	    if (!ipv6Hostname) {
	      var hostparts = this.hostname.split(/\./);
	      for (var i = 0, l = hostparts.length; i < l; i++) {
	        var part = hostparts[i];
	        if (!part) continue;
	        if (!part.match(hostnamePartPattern)) {
	          var newpart = '';
	          for (var j = 0, k = part.length; j < k; j++) {
	            if (part.charCodeAt(j) > 127) {
	              // we replace non-ASCII char with a temporary placeholder
	              // we need this to make sure size of hostname is not
	              // broken by replacing non-ASCII by nothing
	              newpart += 'x';
	            } else {
	              newpart += part[j];
	            }
	          }
	          // we test again with ASCII char only
	          if (!newpart.match(hostnamePartPattern)) {
	            var validParts = hostparts.slice(0, i);
	            var notHost = hostparts.slice(i + 1);
	            var bit = part.match(hostnamePartStart);
	            if (bit) {
	              validParts.push(bit[1]);
	              notHost.unshift(bit[2]);
	            }
	            if (notHost.length) {
	              rest = '/' + notHost.join('.') + rest;
	            }
	            this.hostname = validParts.join('.');
	            break;
	          }
	        }
	      }
	    }

	    if (this.hostname.length > hostnameMaxLen) {
	      this.hostname = '';
	    } else {
	      // hostnames are always lower case.
	      this.hostname = this.hostname.toLowerCase();
	    }

	    if (!ipv6Hostname) {
	      // IDNA Support: Returns a puny coded representation of "domain".
	      // It only converts the part of the domain name that
	      // has non ASCII characters. I.e. it dosent matter if
	      // you call it with a domain that already is in ASCII.
	      var domainArray = this.hostname.split('.');
	      var newOut = [];
	      for (var i = 0; i < domainArray.length; ++i) {
	        var s = domainArray[i];
	        newOut.push(s.match(/[^A-Za-z0-9_-]/) ?
	            'xn--' + punycode.encode(s) : s);
	      }
	      this.hostname = newOut.join('.');
	    }

	    var p = this.port ? ':' + this.port : '';
	    var h = this.hostname || '';
	    this.host = h + p;
	    this.href += this.host;

	    // strip [ and ] from the hostname
	    // the host field still retains them, though
	    if (ipv6Hostname) {
	      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
	      if (rest[0] !== '/') {
	        rest = '/' + rest;
	      }
	    }
	  }

	  // now rest is set to the post-host stuff.
	  // chop off any delim chars.
	  if (!unsafeProtocol[lowerProto]) {

	    // First, make 100% sure that any "autoEscape" chars get
	    // escaped, even if encodeURIComponent doesn't think they
	    // need to be.
	    for (var i = 0, l = autoEscape.length; i < l; i++) {
	      var ae = autoEscape[i];
	      var esc = encodeURIComponent(ae);
	      if (esc === ae) {
	        esc = escape(ae);
	      }
	      rest = rest.split(ae).join(esc);
	    }
	  }


	  // chop off from the tail first.
	  var hash = rest.indexOf('#');
	  if (hash !== -1) {
	    // got a fragment string.
	    this.hash = rest.substr(hash);
	    rest = rest.slice(0, hash);
	  }
	  var qm = rest.indexOf('?');
	  if (qm !== -1) {
	    this.search = rest.substr(qm);
	    this.query = rest.substr(qm + 1);
	    if (parseQueryString) {
	      this.query = querystring.parse(this.query);
	    }
	    rest = rest.slice(0, qm);
	  } else if (parseQueryString) {
	    // no query string, but parseQueryString still requested
	    this.search = '';
	    this.query = {};
	  }
	  if (rest) this.pathname = rest;
	  if (slashedProtocol[lowerProto] &&
	      this.hostname && !this.pathname) {
	    this.pathname = '/';
	  }

	  //to support http.request
	  if (this.pathname || this.search) {
	    var p = this.pathname || '';
	    var s = this.search || '';
	    this.path = p + s;
	  }

	  // finally, reconstruct the href based on what has been validated.
	  this.href = this.format();
	  return this;
	};

	// format a parsed object into a url string
	function urlFormat(obj) {
	  // ensure it's an object, and not a string url.
	  // If it's an obj, this is a no-op.
	  // this way, you can call url_format() on strings
	  // to clean up potentially wonky urls.
	  if (isString(obj)) obj = urlParse(obj);
	  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
	  return obj.format();
	}

	Url.prototype.format = function() {
	  var auth = this.auth || '';
	  if (auth) {
	    auth = encodeURIComponent(auth);
	    auth = auth.replace(/%3A/i, ':');
	    auth += '@';
	  }

	  var protocol = this.protocol || '',
	      pathname = this.pathname || '',
	      hash = this.hash || '',
	      host = false,
	      query = '';

	  if (this.host) {
	    host = auth + this.host;
	  } else if (this.hostname) {
	    host = auth + (this.hostname.indexOf(':') === -1 ?
	        this.hostname :
	        '[' + this.hostname + ']');
	    if (this.port) {
	      host += ':' + this.port;
	    }
	  }

	  if (this.query &&
	      isObject(this.query) &&
	      Object.keys(this.query).length) {
	    query = querystring.stringify(this.query);
	  }

	  var search = this.search || (query && ('?' + query)) || '';

	  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

	  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
	  // unless they had them to begin with.
	  if (this.slashes ||
	      (!protocol || slashedProtocol[protocol]) && host !== false) {
	    host = '//' + (host || '');
	    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
	  } else if (!host) {
	    host = '';
	  }

	  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
	  if (search && search.charAt(0) !== '?') search = '?' + search;

	  pathname = pathname.replace(/[?#]/g, function(match) {
	    return encodeURIComponent(match);
	  });
	  search = search.replace('#', '%23');

	  return protocol + host + pathname + search + hash;
	};

	function urlResolve(source, relative) {
	  return urlParse(source, false, true).resolve(relative);
	}

	Url.prototype.resolve = function(relative) {
	  return this.resolveObject(urlParse(relative, false, true)).format();
	};

	function urlResolveObject(source, relative) {
	  if (!source) return relative;
	  return urlParse(source, false, true).resolveObject(relative);
	}

	Url.prototype.resolveObject = function(relative) {
	  if (isString(relative)) {
	    var rel = new Url();
	    rel.parse(relative, false, true);
	    relative = rel;
	  }

	  var result = new Url();
	  Object.keys(this).forEach(function(k) {
	    result[k] = this[k];
	  }, this);

	  // hash is always overridden, no matter what.
	  // even href="" will remove it.
	  result.hash = relative.hash;

	  // if the relative url is empty, then there's nothing left to do here.
	  if (relative.href === '') {
	    result.href = result.format();
	    return result;
	  }

	  // hrefs like //foo/bar always cut to the protocol.
	  if (relative.slashes && !relative.protocol) {
	    // take everything except the protocol from relative
	    Object.keys(relative).forEach(function(k) {
	      if (k !== 'protocol')
	        result[k] = relative[k];
	    });

	    //urlParse appends trailing / to urls like http://www.example.com
	    if (slashedProtocol[result.protocol] &&
	        result.hostname && !result.pathname) {
	      result.path = result.pathname = '/';
	    }

	    result.href = result.format();
	    return result;
	  }

	  if (relative.protocol && relative.protocol !== result.protocol) {
	    // if it's a known url protocol, then changing
	    // the protocol does weird things
	    // first, if it's not file:, then we MUST have a host,
	    // and if there was a path
	    // to begin with, then we MUST have a path.
	    // if it is file:, then the host is dropped,
	    // because that's known to be hostless.
	    // anything else is assumed to be absolute.
	    if (!slashedProtocol[relative.protocol]) {
	      Object.keys(relative).forEach(function(k) {
	        result[k] = relative[k];
	      });
	      result.href = result.format();
	      return result;
	    }

	    result.protocol = relative.protocol;
	    if (!relative.host && !hostlessProtocol[relative.protocol]) {
	      var relPath = (relative.pathname || '').split('/');
	      while (relPath.length && !(relative.host = relPath.shift()));
	      if (!relative.host) relative.host = '';
	      if (!relative.hostname) relative.hostname = '';
	      if (relPath[0] !== '') relPath.unshift('');
	      if (relPath.length < 2) relPath.unshift('');
	      result.pathname = relPath.join('/');
	    } else {
	      result.pathname = relative.pathname;
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    result.host = relative.host || '';
	    result.auth = relative.auth;
	    result.hostname = relative.hostname || relative.host;
	    result.port = relative.port;
	    // to support http.request
	    if (result.pathname || result.search) {
	      var p = result.pathname || '';
	      var s = result.search || '';
	      result.path = p + s;
	    }
	    result.slashes = result.slashes || relative.slashes;
	    result.href = result.format();
	    return result;
	  }

	  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
	      isRelAbs = (
	          relative.host ||
	          relative.pathname && relative.pathname.charAt(0) === '/'
	      ),
	      mustEndAbs = (isRelAbs || isSourceAbs ||
	                    (result.host && relative.pathname)),
	      removeAllDots = mustEndAbs,
	      srcPath = result.pathname && result.pathname.split('/') || [],
	      relPath = relative.pathname && relative.pathname.split('/') || [],
	      psychotic = result.protocol && !slashedProtocol[result.protocol];

	  // if the url is a non-slashed url, then relative
	  // links like ../.. should be able
	  // to crawl up to the hostname, as well.  This is strange.
	  // result.protocol has already been set by now.
	  // Later on, put the first path part into the host field.
	  if (psychotic) {
	    result.hostname = '';
	    result.port = null;
	    if (result.host) {
	      if (srcPath[0] === '') srcPath[0] = result.host;
	      else srcPath.unshift(result.host);
	    }
	    result.host = '';
	    if (relative.protocol) {
	      relative.hostname = null;
	      relative.port = null;
	      if (relative.host) {
	        if (relPath[0] === '') relPath[0] = relative.host;
	        else relPath.unshift(relative.host);
	      }
	      relative.host = null;
	    }
	    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
	  }

	  if (isRelAbs) {
	    // it's absolute.
	    result.host = (relative.host || relative.host === '') ?
	                  relative.host : result.host;
	    result.hostname = (relative.hostname || relative.hostname === '') ?
	                      relative.hostname : result.hostname;
	    result.search = relative.search;
	    result.query = relative.query;
	    srcPath = relPath;
	    // fall through to the dot-handling below.
	  } else if (relPath.length) {
	    // it's relative
	    // throw away the existing file, and take the new path instead.
	    if (!srcPath) srcPath = [];
	    srcPath.pop();
	    srcPath = srcPath.concat(relPath);
	    result.search = relative.search;
	    result.query = relative.query;
	  } else if (!isNullOrUndefined(relative.search)) {
	    // just pull out the search.
	    // like href='?foo'.
	    // Put this after the other two cases because it simplifies the booleans
	    if (psychotic) {
	      result.hostname = result.host = srcPath.shift();
	      //occationaly the auth can get stuck only in host
	      //this especialy happens in cases like
	      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	      var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                       result.host.split('@') : false;
	      if (authInHost) {
	        result.auth = authInHost.shift();
	        result.host = result.hostname = authInHost.shift();
	      }
	    }
	    result.search = relative.search;
	    result.query = relative.query;
	    //to support http.request
	    if (!isNull(result.pathname) || !isNull(result.search)) {
	      result.path = (result.pathname ? result.pathname : '') +
	                    (result.search ? result.search : '');
	    }
	    result.href = result.format();
	    return result;
	  }

	  if (!srcPath.length) {
	    // no path at all.  easy.
	    // we've already handled the other stuff above.
	    result.pathname = null;
	    //to support http.request
	    if (result.search) {
	      result.path = '/' + result.search;
	    } else {
	      result.path = null;
	    }
	    result.href = result.format();
	    return result;
	  }

	  // if a url ENDs in . or .., then it must get a trailing slash.
	  // however, if it ends in anything else non-slashy,
	  // then it must NOT get a trailing slash.
	  var last = srcPath.slice(-1)[0];
	  var hasTrailingSlash = (
	      (result.host || relative.host) && (last === '.' || last === '..') ||
	      last === '');

	  // strip single dots, resolve double dots to parent dir
	  // if the path tries to go above the root, `up` ends up > 0
	  var up = 0;
	  for (var i = srcPath.length; i >= 0; i--) {
	    last = srcPath[i];
	    if (last == '.') {
	      srcPath.splice(i, 1);
	    } else if (last === '..') {
	      srcPath.splice(i, 1);
	      up++;
	    } else if (up) {
	      srcPath.splice(i, 1);
	      up--;
	    }
	  }

	  // if the path is allowed to go above the root, restore leading ..s
	  if (!mustEndAbs && !removeAllDots) {
	    for (; up--; up) {
	      srcPath.unshift('..');
	    }
	  }

	  if (mustEndAbs && srcPath[0] !== '' &&
	      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
	    srcPath.unshift('');
	  }

	  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
	    srcPath.push('');
	  }

	  var isAbsolute = srcPath[0] === '' ||
	      (srcPath[0] && srcPath[0].charAt(0) === '/');

	  // put the host back
	  if (psychotic) {
	    result.hostname = result.host = isAbsolute ? '' :
	                                    srcPath.length ? srcPath.shift() : '';
	    //occationaly the auth can get stuck only in host
	    //this especialy happens in cases like
	    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
	    var authInHost = result.host && result.host.indexOf('@') > 0 ?
	                     result.host.split('@') : false;
	    if (authInHost) {
	      result.auth = authInHost.shift();
	      result.host = result.hostname = authInHost.shift();
	    }
	  }

	  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

	  if (mustEndAbs && !isAbsolute) {
	    srcPath.unshift('');
	  }

	  if (!srcPath.length) {
	    result.pathname = null;
	    result.path = null;
	  } else {
	    result.pathname = srcPath.join('/');
	  }

	  //to support request.http
	  if (!isNull(result.pathname) || !isNull(result.search)) {
	    result.path = (result.pathname ? result.pathname : '') +
	                  (result.search ? result.search : '');
	  }
	  result.auth = relative.auth || result.auth;
	  result.slashes = result.slashes || relative.slashes;
	  result.href = result.format();
	  return result;
	};

	Url.prototype.parseHost = function() {
	  var host = this.host;
	  var port = portPattern.exec(host);
	  if (port) {
	    port = port[0];
	    if (port !== ':') {
	      this.port = port.substr(1);
	    }
	    host = host.substr(0, host.length - port.length);
	  }
	  if (host) this.hostname = host;
	};

	function isString(arg) {
	  return typeof arg === "string";
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isNull(arg) {
	  return arg === null;
	}
	function isNullOrUndefined(arg) {
	  return  arg == null;
	}


/***/ },

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/punycode v1.3.2 by @mathias */
	;(function(root) {

		/** Detect free variables */
		var freeExports = typeof exports == 'object' && exports &&
			!exports.nodeType && exports;
		var freeModule = typeof module == 'object' && module &&
			!module.nodeType && module;
		var freeGlobal = typeof global == 'object' && global;
		if (
			freeGlobal.global === freeGlobal ||
			freeGlobal.window === freeGlobal ||
			freeGlobal.self === freeGlobal
		) {
			root = freeGlobal;
		}

		/**
		 * The `punycode` object.
		 * @name punycode
		 * @type Object
		 */
		var punycode,

		/** Highest positive signed 32-bit float value */
		maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

		/** Bootstring parameters */
		base = 36,
		tMin = 1,
		tMax = 26,
		skew = 38,
		damp = 700,
		initialBias = 72,
		initialN = 128, // 0x80
		delimiter = '-', // '\x2D'

		/** Regular expressions */
		regexPunycode = /^xn--/,
		regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
		regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

		/** Error messages */
		errors = {
			'overflow': 'Overflow: input needs wider integers to process',
			'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
			'invalid-input': 'Invalid input'
		},

		/** Convenience shortcuts */
		baseMinusTMin = base - tMin,
		floor = Math.floor,
		stringFromCharCode = String.fromCharCode,

		/** Temporary variable */
		key;

		/*--------------------------------------------------------------------------*/

		/**
		 * A generic error utility function.
		 * @private
		 * @param {String} type The error type.
		 * @returns {Error} Throws a `RangeError` with the applicable error message.
		 */
		function error(type) {
			throw RangeError(errors[type]);
		}

		/**
		 * A generic `Array#map` utility function.
		 * @private
		 * @param {Array} array The array to iterate over.
		 * @param {Function} callback The function that gets called for every array
		 * item.
		 * @returns {Array} A new array of values returned by the callback function.
		 */
		function map(array, fn) {
			var length = array.length;
			var result = [];
			while (length--) {
				result[length] = fn(array[length]);
			}
			return result;
		}

		/**
		 * A simple `Array#map`-like wrapper to work with domain name strings or email
		 * addresses.
		 * @private
		 * @param {String} domain The domain name or email address.
		 * @param {Function} callback The function that gets called for every
		 * character.
		 * @returns {Array} A new string of characters returned by the callback
		 * function.
		 */
		function mapDomain(string, fn) {
			var parts = string.split('@');
			var result = '';
			if (parts.length > 1) {
				// In email addresses, only the domain name should be punycoded. Leave
				// the local part (i.e. everything up to `@`) intact.
				result = parts[0] + '@';
				string = parts[1];
			}
			// Avoid `split(regex)` for IE8 compatibility. See #17.
			string = string.replace(regexSeparators, '\x2E');
			var labels = string.split('.');
			var encoded = map(labels, fn).join('.');
			return result + encoded;
		}

		/**
		 * Creates an array containing the numeric code points of each Unicode
		 * character in the string. While JavaScript uses UCS-2 internally,
		 * this function will convert a pair of surrogate halves (each of which
		 * UCS-2 exposes as separate characters) into a single code point,
		 * matching UTF-16.
		 * @see `punycode.ucs2.encode`
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode.ucs2
		 * @name decode
		 * @param {String} string The Unicode input string (UCS-2).
		 * @returns {Array} The new array of code points.
		 */
		function ucs2decode(string) {
			var output = [],
			    counter = 0,
			    length = string.length,
			    value,
			    extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		/**
		 * Creates a string based on an array of numeric code points.
		 * @see `punycode.ucs2.decode`
		 * @memberOf punycode.ucs2
		 * @name encode
		 * @param {Array} codePoints The array of numeric code points.
		 * @returns {String} The new Unicode string (UCS-2).
		 */
		function ucs2encode(array) {
			return map(array, function(value) {
				var output = '';
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
				return output;
			}).join('');
		}

		/**
		 * Converts a basic code point into a digit/integer.
		 * @see `digitToBasic()`
		 * @private
		 * @param {Number} codePoint The basic numeric code point value.
		 * @returns {Number} The numeric value of a basic code point (for use in
		 * representing integers) in the range `0` to `base - 1`, or `base` if
		 * the code point does not represent a value.
		 */
		function basicToDigit(codePoint) {
			if (codePoint - 48 < 10) {
				return codePoint - 22;
			}
			if (codePoint - 65 < 26) {
				return codePoint - 65;
			}
			if (codePoint - 97 < 26) {
				return codePoint - 97;
			}
			return base;
		}

		/**
		 * Converts a digit/integer into a basic code point.
		 * @see `basicToDigit()`
		 * @private
		 * @param {Number} digit The numeric value of a basic code point.
		 * @returns {Number} The basic code point whose value (when used for
		 * representing integers) is `digit`, which needs to be in the range
		 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
		 * used; else, the lowercase form is used. The behavior is undefined
		 * if `flag` is non-zero and `digit` has no uppercase form.
		 */
		function digitToBasic(digit, flag) {
			//  0..25 map to ASCII a..z or A..Z
			// 26..35 map to ASCII 0..9
			return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
		}

		/**
		 * Bias adaptation function as per section 3.4 of RFC 3492.
		 * http://tools.ietf.org/html/rfc3492#section-3.4
		 * @private
		 */
		function adapt(delta, numPoints, firstTime) {
			var k = 0;
			delta = firstTime ? floor(delta / damp) : delta >> 1;
			delta += floor(delta / numPoints);
			for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
				delta = floor(delta / baseMinusTMin);
			}
			return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
		}

		/**
		 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
		 * symbols.
		 * @memberOf punycode
		 * @param {String} input The Punycode string of ASCII-only symbols.
		 * @returns {String} The resulting string of Unicode symbols.
		 */
		function decode(input) {
			// Don't use UCS-2
			var output = [],
			    inputLength = input.length,
			    out,
			    i = 0,
			    n = initialN,
			    bias = initialBias,
			    basic,
			    j,
			    index,
			    oldi,
			    w,
			    k,
			    digit,
			    t,
			    /** Cached calculation results */
			    baseMinusT;

			// Handle the basic code points: let `basic` be the number of input code
			// points before the last delimiter, or `0` if there is none, then copy
			// the first basic code points to the output.

			basic = input.lastIndexOf(delimiter);
			if (basic < 0) {
				basic = 0;
			}

			for (j = 0; j < basic; ++j) {
				// if it's not a basic code point
				if (input.charCodeAt(j) >= 0x80) {
					error('not-basic');
				}
				output.push(input.charCodeAt(j));
			}

			// Main decoding loop: start just after the last delimiter if any basic code
			// points were copied; start at the beginning otherwise.

			for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

				// `index` is the index of the next character to be consumed.
				// Decode a generalized variable-length integer into `delta`,
				// which gets added to `i`. The overflow checking is easier
				// if we increase `i` as we go, then subtract off its starting
				// value at the end to obtain `delta`.
				for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

					if (index >= inputLength) {
						error('invalid-input');
					}

					digit = basicToDigit(input.charCodeAt(index++));

					if (digit >= base || digit > floor((maxInt - i) / w)) {
						error('overflow');
					}

					i += digit * w;
					t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

					if (digit < t) {
						break;
					}

					baseMinusT = base - t;
					if (w > floor(maxInt / baseMinusT)) {
						error('overflow');
					}

					w *= baseMinusT;

				}

				out = output.length + 1;
				bias = adapt(i - oldi, out, oldi == 0);

				// `i` was supposed to wrap around from `out` to `0`,
				// incrementing `n` each time, so we'll fix that now:
				if (floor(i / out) > maxInt - n) {
					error('overflow');
				}

				n += floor(i / out);
				i %= out;

				// Insert `n` at position `i` of the output
				output.splice(i++, 0, n);

			}

			return ucs2encode(output);
		}

		/**
		 * Converts a string of Unicode symbols (e.g. a domain name label) to a
		 * Punycode string of ASCII-only symbols.
		 * @memberOf punycode
		 * @param {String} input The string of Unicode symbols.
		 * @returns {String} The resulting Punycode string of ASCII-only symbols.
		 */
		function encode(input) {
			var n,
			    delta,
			    handledCPCount,
			    basicLength,
			    bias,
			    j,
			    m,
			    q,
			    k,
			    t,
			    currentValue,
			    output = [],
			    /** `inputLength` will hold the number of code points in `input`. */
			    inputLength,
			    /** Cached calculation results */
			    handledCPCountPlusOne,
			    baseMinusT,
			    qMinusT;

			// Convert the input in UCS-2 to Unicode
			input = ucs2decode(input);

			// Cache the length
			inputLength = input.length;

			// Initialize the state
			n = initialN;
			delta = 0;
			bias = initialBias;

			// Handle the basic code points
			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue < 0x80) {
					output.push(stringFromCharCode(currentValue));
				}
			}

			handledCPCount = basicLength = output.length;

			// `handledCPCount` is the number of code points that have been handled;
			// `basicLength` is the number of basic code points.

			// Finish the basic string - if it is not empty - with a delimiter
			if (basicLength) {
				output.push(delimiter);
			}

			// Main encoding loop:
			while (handledCPCount < inputLength) {

				// All non-basic code points < n have been handled already. Find the next
				// larger one:
				for (m = maxInt, j = 0; j < inputLength; ++j) {
					currentValue = input[j];
					if (currentValue >= n && currentValue < m) {
						m = currentValue;
					}
				}

				// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
				// but guard against overflow
				handledCPCountPlusOne = handledCPCount + 1;
				if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
					error('overflow');
				}

				delta += (m - n) * handledCPCountPlusOne;
				n = m;

				for (j = 0; j < inputLength; ++j) {
					currentValue = input[j];

					if (currentValue < n && ++delta > maxInt) {
						error('overflow');
					}

					if (currentValue == n) {
						// Represent delta as a generalized variable-length integer
						for (q = delta, k = base; /* no condition */; k += base) {
							t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
							if (q < t) {
								break;
							}
							qMinusT = q - t;
							baseMinusT = base - t;
							output.push(
								stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
							);
							q = floor(qMinusT / baseMinusT);
						}

						output.push(stringFromCharCode(digitToBasic(q, 0)));
						bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
						delta = 0;
						++handledCPCount;
					}
				}

				++delta;
				++n;

			}
			return output.join('');
		}

		/**
		 * Converts a Punycode string representing a domain name or an email address
		 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
		 * it doesn't matter if you call it on a string that has already been
		 * converted to Unicode.
		 * @memberOf punycode
		 * @param {String} input The Punycoded domain name or email address to
		 * convert to Unicode.
		 * @returns {String} The Unicode representation of the given Punycode
		 * string.
		 */
		function toUnicode(input) {
			return mapDomain(input, function(string) {
				return regexPunycode.test(string)
					? decode(string.slice(4).toLowerCase())
					: string;
			});
		}

		/**
		 * Converts a Unicode string representing a domain name or an email address to
		 * Punycode. Only the non-ASCII parts of the domain name will be converted,
		 * i.e. it doesn't matter if you call it with a domain that's already in
		 * ASCII.
		 * @memberOf punycode
		 * @param {String} input The domain name or email address to convert, as a
		 * Unicode string.
		 * @returns {String} The Punycode representation of the given domain name or
		 * email address.
		 */
		function toASCII(input) {
			return mapDomain(input, function(string) {
				return regexNonASCII.test(string)
					? 'xn--' + encode(string)
					: string;
			});
		}

		/*--------------------------------------------------------------------------*/

		/** Define the public API */
		punycode = {
			/**
			 * A string representing the current Punycode.js version number.
			 * @memberOf punycode
			 * @type String
			 */
			'version': '1.3.2',
			/**
			 * An object of methods to convert from JavaScript's internal character
			 * representation (UCS-2) to Unicode code points, and back.
			 * @see <https://mathiasbynens.be/notes/javascript-encoding>
			 * @memberOf punycode
			 * @type Object
			 */
			'ucs2': {
				'decode': ucs2decode,
				'encode': ucs2encode
			},
			'decode': decode,
			'encode': encode,
			'toASCII': toASCII,
			'toUnicode': toUnicode
		};

		/** Expose `punycode` */
		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return punycode;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (freeExports && freeModule) {
			if (module.exports == freeExports) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = punycode;
			} else { // in Narwhal or RingoJS v0.7.0-
				for (key in punycode) {
					punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.punycode = punycode;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module), (function() { return this; }())))

/***/ },

/***/ 4:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.decode = exports.parse = __webpack_require__(6);
	exports.encode = exports.stringify = __webpack_require__(7);


/***/ },

/***/ 6:
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	module.exports = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};


/***/ },

/***/ 7:
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	'use strict';

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	module.exports = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};


/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the web browser implementation of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = __webpack_require__(20);
	exports.log = log;
	exports.formatArgs = formatArgs;
	exports.save = save;
	exports.load = load;
	exports.useColors = useColors;
	exports.storage = 'undefined' != typeof chrome
	               && 'undefined' != typeof chrome.storage
	                  ? chrome.storage.local
	                  : localstorage();

	/**
	 * Colors.
	 */

	exports.colors = [
	  'lightseagreen',
	  'forestgreen',
	  'goldenrod',
	  'dodgerblue',
	  'darkorchid',
	  'crimson'
	];

	/**
	 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
	 * and the Firebug extension (any Firefox version) are known
	 * to support "%c" CSS customizations.
	 *
	 * TODO: add a `localStorage` variable to explicitly enable/disable colors
	 */

	function useColors() {
	  // is webkit? http://stackoverflow.com/a/16459606/376773
	  return ('WebkitAppearance' in document.documentElement.style) ||
	    // is firebug? http://stackoverflow.com/a/398120/376773
	    (window.console && (console.firebug || (console.exception && console.table))) ||
	    // is firefox >= v31?
	    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
	    (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
	}

	/**
	 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
	 */

	exports.formatters.j = function(v) {
	  return JSON.stringify(v);
	};


	/**
	 * Colorize log arguments if enabled.
	 *
	 * @api public
	 */

	function formatArgs() {
	  var args = arguments;
	  var useColors = this.useColors;

	  args[0] = (useColors ? '%c' : '')
	    + this.namespace
	    + (useColors ? ' %c' : ' ')
	    + args[0]
	    + (useColors ? '%c ' : ' ')
	    + '+' + exports.humanize(this.diff);

	  if (!useColors) return args;

	  var c = 'color: ' + this.color;
	  args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));

	  // the final "%c" is somewhat tricky, because there could be other
	  // arguments passed either before or after the %c, so we need to
	  // figure out the correct index to insert the CSS into
	  var index = 0;
	  var lastC = 0;
	  args[0].replace(/%[a-z%]/g, function(match) {
	    if ('%%' === match) return;
	    index++;
	    if ('%c' === match) {
	      // we only are interested in the *last* %c
	      // (the user may have provided their own)
	      lastC = index;
	    }
	  });

	  args.splice(lastC, 0, c);
	  return args;
	}

	/**
	 * Invokes `console.log()` when available.
	 * No-op when `console.log` is not a "function".
	 *
	 * @api public
	 */

	function log() {
	  // this hackery is required for IE8/9, where
	  // the `console.log` function doesn't have 'apply'
	  return 'object' === typeof console
	    && console.log
	    && Function.prototype.apply.call(console.log, console, arguments);
	}

	/**
	 * Save `namespaces`.
	 *
	 * @param {String} namespaces
	 * @api private
	 */

	function save(namespaces) {
	  try {
	    if (null == namespaces) {
	      exports.storage.removeItem('debug');
	    } else {
	      exports.storage.debug = namespaces;
	    }
	  } catch(e) {}
	}

	/**
	 * Load `namespaces`.
	 *
	 * @return {String} returns the previously persisted debug modes
	 * @api private
	 */

	function load() {
	  var r;
	  try {
	    r = exports.storage.debug;
	  } catch(e) {}
	  return r;
	}

	/**
	 * Enable namespaces listed in `localStorage.debug` initially.
	 */

	exports.enable(load());

	/**
	 * Localstorage attempts to return the localstorage.
	 *
	 * This is necessary because safari throws
	 * when a user disables cookies/localstorage
	 * and you attempt to access it.
	 *
	 * @return {LocalStorage}
	 * @api private
	 */

	function localstorage(){
	  try {
	    return window.localStorage;
	  } catch (e) {}
	}


/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * This is the common logic for both the Node.js and web browser
	 * implementations of `debug()`.
	 *
	 * Expose `debug()` as the module.
	 */

	exports = module.exports = debug;
	exports.coerce = coerce;
	exports.disable = disable;
	exports.enable = enable;
	exports.enabled = enabled;
	exports.humanize = __webpack_require__(21);

	/**
	 * The currently active debug mode names, and names to skip.
	 */

	exports.names = [];
	exports.skips = [];

	/**
	 * Map of special "%n" handling functions, for the debug "format" argument.
	 *
	 * Valid key names are a single, lowercased letter, i.e. "n".
	 */

	exports.formatters = {};

	/**
	 * Previously assigned color.
	 */

	var prevColor = 0;

	/**
	 * Previous log timestamp.
	 */

	var prevTime;

	/**
	 * Select a color.
	 *
	 * @return {Number}
	 * @api private
	 */

	function selectColor() {
	  return exports.colors[prevColor++ % exports.colors.length];
	}

	/**
	 * Create a debugger with the given `namespace`.
	 *
	 * @param {String} namespace
	 * @return {Function}
	 * @api public
	 */

	function debug(namespace) {

	  // define the `disabled` version
	  function disabled() {
	  }
	  disabled.enabled = false;

	  // define the `enabled` version
	  function enabled() {

	    var self = enabled;

	    // set `diff` timestamp
	    var curr = +new Date();
	    var ms = curr - (prevTime || curr);
	    self.diff = ms;
	    self.prev = prevTime;
	    self.curr = curr;
	    prevTime = curr;

	    // add the `color` if not set
	    if (null == self.useColors) self.useColors = exports.useColors();
	    if (null == self.color && self.useColors) self.color = selectColor();

	    var args = Array.prototype.slice.call(arguments);

	    args[0] = exports.coerce(args[0]);

	    if ('string' !== typeof args[0]) {
	      // anything else let's inspect with %o
	      args = ['%o'].concat(args);
	    }

	    // apply any `formatters` transformations
	    var index = 0;
	    args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
	      // if we encounter an escaped % then don't increase the array index
	      if (match === '%%') return match;
	      index++;
	      var formatter = exports.formatters[format];
	      if ('function' === typeof formatter) {
	        var val = args[index];
	        match = formatter.call(self, val);

	        // now we need to remove `args[index]` since it's inlined in the `format`
	        args.splice(index, 1);
	        index--;
	      }
	      return match;
	    });

	    if ('function' === typeof exports.formatArgs) {
	      args = exports.formatArgs.apply(self, args);
	    }
	    var logFn = enabled.log || exports.log || console.log.bind(console);
	    logFn.apply(self, args);
	  }
	  enabled.enabled = true;

	  var fn = exports.enabled(namespace) ? enabled : disabled;

	  fn.namespace = namespace;

	  return fn;
	}

	/**
	 * Enables a debug mode by namespaces. This can include modes
	 * separated by a colon and wildcards.
	 *
	 * @param {String} namespaces
	 * @api public
	 */

	function enable(namespaces) {
	  exports.save(namespaces);

	  var split = (namespaces || '').split(/[\s,]+/);
	  var len = split.length;

	  for (var i = 0; i < len; i++) {
	    if (!split[i]) continue; // ignore empty strings
	    namespaces = split[i].replace(/\*/g, '.*?');
	    if (namespaces[0] === '-') {
	      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
	    } else {
	      exports.names.push(new RegExp('^' + namespaces + '$'));
	    }
	  }
	}

	/**
	 * Disable debug output.
	 *
	 * @api public
	 */

	function disable() {
	  exports.enable('');
	}

	/**
	 * Returns true if the given mode name is enabled, false otherwise.
	 *
	 * @param {String} name
	 * @return {Boolean}
	 * @api public
	 */

	function enabled(name) {
	  var i, len;
	  for (i = 0, len = exports.skips.length; i < len; i++) {
	    if (exports.skips[i].test(name)) {
	      return false;
	    }
	  }
	  for (i = 0, len = exports.names.length; i < len; i++) {
	    if (exports.names[i].test(name)) {
	      return true;
	    }
	  }
	  return false;
	}

	/**
	 * Coerce `val`.
	 *
	 * @param {Mixed} val
	 * @return {Mixed}
	 * @api private
	 */

	function coerce(val) {
	  if (val instanceof Error) return val.stack || val.message;
	  return val;
	}


/***/ },

/***/ 21:
/***/ function(module, exports) {

	/**
	 * Helpers.
	 */

	var s = 1000;
	var m = s * 60;
	var h = m * 60;
	var d = h * 24;
	var y = d * 365.25;

	/**
	 * Parse or format the given `val`.
	 *
	 * Options:
	 *
	 *  - `long` verbose formatting [false]
	 *
	 * @param {String|Number} val
	 * @param {Object} options
	 * @return {String|Number}
	 * @api public
	 */

	module.exports = function(val, options){
	  options = options || {};
	  if ('string' == typeof val) return parse(val);
	  return options.long
	    ? long(val)
	    : short(val);
	};

	/**
	 * Parse the given `str` and return milliseconds.
	 *
	 * @param {String} str
	 * @return {Number}
	 * @api private
	 */

	function parse(str) {
	  str = '' + str;
	  if (str.length > 10000) return;
	  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
	  if (!match) return;
	  var n = parseFloat(match[1]);
	  var type = (match[2] || 'ms').toLowerCase();
	  switch (type) {
	    case 'years':
	    case 'year':
	    case 'yrs':
	    case 'yr':
	    case 'y':
	      return n * y;
	    case 'days':
	    case 'day':
	    case 'd':
	      return n * d;
	    case 'hours':
	    case 'hour':
	    case 'hrs':
	    case 'hr':
	    case 'h':
	      return n * h;
	    case 'minutes':
	    case 'minute':
	    case 'mins':
	    case 'min':
	    case 'm':
	      return n * m;
	    case 'seconds':
	    case 'second':
	    case 'secs':
	    case 'sec':
	    case 's':
	      return n * s;
	    case 'milliseconds':
	    case 'millisecond':
	    case 'msecs':
	    case 'msec':
	    case 'ms':
	      return n;
	  }
	}

	/**
	 * Short format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function short(ms) {
	  if (ms >= d) return Math.round(ms / d) + 'd';
	  if (ms >= h) return Math.round(ms / h) + 'h';
	  if (ms >= m) return Math.round(ms / m) + 'm';
	  if (ms >= s) return Math.round(ms / s) + 's';
	  return ms + 'ms';
	}

	/**
	 * Long format for `ms`.
	 *
	 * @param {Number} ms
	 * @return {String}
	 * @api private
	 */

	function long(ms) {
	  return plural(ms, d, 'day')
	    || plural(ms, h, 'hour')
	    || plural(ms, m, 'minute')
	    || plural(ms, s, 'second')
	    || ms + ' ms';
	}

	/**
	 * Pluralization helper.
	 */

	function plural(ms, n, name) {
	  if (ms < n) return;
	  if (ms < n * 1.5) return Math.floor(ms / n) + ' ' + name;
	  return Math.ceil(ms / n) + ' ' + name + 's';
	}


/***/ },

/***/ 22:
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },

/***/ 410:
/***/ function(module, exports, __webpack_require__) {

	var require;var require;/* WEBPACK VAR INJECTION */(function(global, Buffer) {!function(e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.eio=e()}}(function(){var e;return function t(e,r,n){function o(i,a){if(!r[i]){if(!e[i]){var c="function"==typeof require&&require;if(!a&&c)return require(i,!0);if(s)return s(i,!0);var p=new Error("Cannot find module '"+i+"'");throw p.code="MODULE_NOT_FOUND",p}var u=r[i]={exports:{}};e[i][0].call(u.exports,function(t){var r=e[i][1][t];return o(r?r:t)},u,u.exports,t,e,r,n)}return r[i].exports}for(var s="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){t.exports=e("./lib/")},{"./lib/":2}],2:[function(e,t,r){t.exports=e("./socket"),t.exports.parser=e("engine.io-parser")},{"./socket":3,"engine.io-parser":20}],3:[function(e,t,r){(function(r){function n(e,t){if(!(this instanceof n))return new n(e,t);t=t||{},e&&"object"==typeof e&&(t=e,e=null),e?(e=u(e),t.hostname=e.host,t.secure="https"==e.protocol||"wss"==e.protocol,t.port=e.port,e.query&&(t.query=e.query)):t.host&&(t.hostname=u(t.host).host),this.secure=null!=t.secure?t.secure:r.location&&"https:"==location.protocol,t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.agent=t.agent||!1,this.hostname=t.hostname||(r.location?location.hostname:"localhost"),this.port=t.port||(r.location&&location.port?location.port:this.secure?443:80),this.query=t.query||{},"string"==typeof this.query&&(this.query=f.decode(this.query)),this.upgrade=!1!==t.upgrade,this.path=(t.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!t.forceJSONP,this.jsonp=!1!==t.jsonp,this.forceBase64=!!t.forceBase64,this.enablesXDR=!!t.enablesXDR,this.timestampParam=t.timestampParam||"t",this.timestampRequests=t.timestampRequests,this.transports=t.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.policyPort=t.policyPort||843,this.rememberUpgrade=t.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=t.onlyBinaryUpgrades,this.perMessageDeflate=!1!==t.perMessageDeflate?t.perMessageDeflate||{}:!1,!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=t.pfx||null,this.key=t.key||null,this.passphrase=t.passphrase||null,this.cert=t.cert||null,this.ca=t.ca||null,this.ciphers=t.ciphers||null,this.rejectUnauthorized=void 0===t.rejectUnauthorized?null:t.rejectUnauthorized;var o="object"==typeof r&&r;o.global===o&&t.extraHeaders&&Object.keys(t.extraHeaders).length>0&&(this.extraHeaders=t.extraHeaders),this.open()}function o(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t}var s=e("./transports"),i=e("component-emitter"),a=e("debug")("engine.io-client:socket"),c=e("indexof"),p=e("engine.io-parser"),u=e("parseuri"),h=e("parsejson"),f=e("parseqs");t.exports=n,n.priorWebsocketSuccess=!1,i(n.prototype),n.protocol=p.protocol,n.Socket=n,n.Transport=e("./transport"),n.transports=e("./transports"),n.parser=e("engine.io-parser"),n.prototype.createTransport=function(e){a('creating transport "%s"',e);var t=o(this.query);t.EIO=p.protocol,t.transport=e,this.id&&(t.sid=this.id);var r=new s[e]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:t,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders});return r},n.prototype.open=function(){var e;if(this.rememberUpgrade&&n.priorWebsocketSuccess&&-1!=this.transports.indexOf("websocket"))e="websocket";else{if(0===this.transports.length){var t=this;return void setTimeout(function(){t.emit("error","No transports available")},0)}e=this.transports[0]}this.readyState="opening";try{e=this.createTransport(e)}catch(r){return this.transports.shift(),void this.open()}e.open(),this.setTransport(e)},n.prototype.setTransport=function(e){a("setting transport %s",e.name);var t=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=e,e.on("drain",function(){t.onDrain()}).on("packet",function(e){t.onPacket(e)}).on("error",function(e){t.onError(e)}).on("close",function(){t.onClose("transport close")})},n.prototype.probe=function(e){function t(){if(f.onlyBinaryUpgrades){var t=!this.supportsBinary&&f.transport.supportsBinary;h=h||t}h||(a('probe transport "%s" opened',e),u.send([{type:"ping",data:"probe"}]),u.once("packet",function(t){if(!h)if("pong"==t.type&&"probe"==t.data){if(a('probe transport "%s" pong',e),f.upgrading=!0,f.emit("upgrading",u),!u)return;n.priorWebsocketSuccess="websocket"==u.name,a('pausing current transport "%s"',f.transport.name),f.transport.pause(function(){h||"closed"!=f.readyState&&(a("changing transport and sending upgrade packet"),p(),f.setTransport(u),u.send([{type:"upgrade"}]),f.emit("upgrade",u),u=null,f.upgrading=!1,f.flush())})}else{a('probe transport "%s" failed',e);var r=new Error("probe error");r.transport=u.name,f.emit("upgradeError",r)}}))}function r(){h||(h=!0,p(),u.close(),u=null)}function o(t){var n=new Error("probe error: "+t);n.transport=u.name,r(),a('probe transport "%s" failed because of error: %s',e,t),f.emit("upgradeError",n)}function s(){o("transport closed")}function i(){o("socket closed")}function c(e){u&&e.name!=u.name&&(a('"%s" works - aborting "%s"',e.name,u.name),r())}function p(){u.removeListener("open",t),u.removeListener("error",o),u.removeListener("close",s),f.removeListener("close",i),f.removeListener("upgrading",c)}a('probing transport "%s"',e);var u=this.createTransport(e,{probe:1}),h=!1,f=this;n.priorWebsocketSuccess=!1,u.once("open",t),u.once("error",o),u.once("close",s),this.once("close",i),this.once("upgrading",c),u.open()},n.prototype.onOpen=function(){if(a("socket open"),this.readyState="open",n.priorWebsocketSuccess="websocket"==this.transport.name,this.emit("open"),this.flush(),"open"==this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var e=0,t=this.upgrades.length;t>e;e++)this.probe(this.upgrades[e])}},n.prototype.onPacket=function(e){if("opening"==this.readyState||"open"==this.readyState)switch(a('socket receive: type "%s", data "%s"',e.type,e.data),this.emit("packet",e),this.emit("heartbeat"),e.type){case"open":this.onHandshake(h(e.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var t=new Error("server error");t.code=e.data,this.onError(t);break;case"message":this.emit("data",e.data),this.emit("message",e.data)}else a('packet received with socket readyState "%s"',this.readyState)},n.prototype.onHandshake=function(e){this.emit("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this.upgrades=this.filterUpgrades(e.upgrades),this.pingInterval=e.pingInterval,this.pingTimeout=e.pingTimeout,this.onOpen(),"closed"!=this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},n.prototype.onHeartbeat=function(e){clearTimeout(this.pingTimeoutTimer);var t=this;t.pingTimeoutTimer=setTimeout(function(){"closed"!=t.readyState&&t.onClose("ping timeout")},e||t.pingInterval+t.pingTimeout)},n.prototype.setPing=function(){var e=this;clearTimeout(e.pingIntervalTimer),e.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",e.pingTimeout),e.ping(),e.onHeartbeat(e.pingTimeout)},e.pingInterval)},n.prototype.ping=function(){var e=this;this.sendPacket("ping",function(){e.emit("ping")})},n.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},n.prototype.flush=function(){"closed"!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},n.prototype.write=n.prototype.send=function(e,t,r){return this.sendPacket("message",e,t,r),this},n.prototype.sendPacket=function(e,t,r,n){if("function"==typeof t&&(n=t,t=void 0),"function"==typeof r&&(n=r,r=null),"closing"!=this.readyState&&"closed"!=this.readyState){r=r||{},r.compress=!1!==r.compress;var o={type:e,data:t,options:r};this.emit("packetCreate",o),this.writeBuffer.push(o),n&&this.once("flush",n),this.flush()}},n.prototype.close=function(){function e(){n.onClose("forced close"),a("socket closing - telling transport to close"),n.transport.close()}function t(){n.removeListener("upgrade",t),n.removeListener("upgradeError",t),e()}function r(){n.once("upgrade",t),n.once("upgradeError",t)}if("opening"==this.readyState||"open"==this.readyState){this.readyState="closing";var n=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?r():e()}):this.upgrading?r():e()}return this},n.prototype.onError=function(e){a("socket error %j",e),n.priorWebsocketSuccess=!1,this.emit("error",e),this.onClose("transport error",e)},n.prototype.onClose=function(e,t){if("opening"==this.readyState||"open"==this.readyState||"closing"==this.readyState){a('socket close with reason: "%s"',e);var r=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",e,t),r.writeBuffer=[],r.prevBufferLen=0}},n.prototype.filterUpgrades=function(e){for(var t=[],r=0,n=e.length;n>r;r++)~c(this.transports,e[r])&&t.push(e[r]);return t}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./transport":4,"./transports":5,"component-emitter":16,debug:18,"engine.io-parser":20,indexof:24,parsejson:27,parseqs:28,parseuri:29}],4:[function(e,t,r){function n(e){this.path=e.path,this.hostname=e.hostname,this.port=e.port,this.secure=e.secure,this.query=e.query,this.timestampParam=e.timestampParam,this.timestampRequests=e.timestampRequests,this.readyState="",this.agent=e.agent||!1,this.socket=e.socket,this.enablesXDR=e.enablesXDR,this.pfx=e.pfx,this.key=e.key,this.passphrase=e.passphrase,this.cert=e.cert,this.ca=e.ca,this.ciphers=e.ciphers,this.rejectUnauthorized=e.rejectUnauthorized,this.extraHeaders=e.extraHeaders}var o=e("engine.io-parser"),s=e("component-emitter");t.exports=n,s(n.prototype),n.prototype.onError=function(e,t){var r=new Error(e);return r.type="TransportError",r.description=t,this.emit("error",r),this},n.prototype.open=function(){return("closed"==this.readyState||""==this.readyState)&&(this.readyState="opening",this.doOpen()),this},n.prototype.close=function(){return("opening"==this.readyState||"open"==this.readyState)&&(this.doClose(),this.onClose()),this},n.prototype.send=function(e){if("open"!=this.readyState)throw new Error("Transport not open");this.write(e)},n.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},n.prototype.onData=function(e){var t=o.decodePacket(e,this.socket.binaryType);this.onPacket(t)},n.prototype.onPacket=function(e){this.emit("packet",e)},n.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},{"component-emitter":16,"engine.io-parser":20}],5:[function(e,t,r){(function(t){function n(e){var r,n=!1,a=!1,c=!1!==e.jsonp;if(t.location){var p="https:"==location.protocol,u=location.port;u||(u=p?443:80),n=e.hostname!=location.hostname||u!=e.port,a=e.secure!=p}if(e.xdomain=n,e.xscheme=a,r=new o(e),"open"in r&&!e.forceJSONP)return new s(e);if(!c)throw new Error("JSONP disabled");return new i(e)}var o=e("xmlhttprequest-ssl"),s=e("./polling-xhr"),i=e("./polling-jsonp"),a=e("./websocket");r.polling=n,r.websocket=a}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./polling-jsonp":6,"./polling-xhr":7,"./websocket":9,"xmlhttprequest-ssl":10}],6:[function(e,t,r){(function(r){function n(){}function o(e){s.call(this,e),this.query=this.query||{},a||(r.___eio||(r.___eio=[]),a=r.___eio),this.index=a.length;var t=this;a.push(function(e){t.onData(e)}),this.query.j=this.index,r.document&&r.addEventListener&&r.addEventListener("beforeunload",function(){t.script&&(t.script.onerror=n)},!1)}var s=e("./polling"),i=e("component-inherit");t.exports=o;var a,c=/\n/g,p=/\\n/g;i(o,s),o.prototype.supportsBinary=!1,o.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),s.prototype.doClose.call(this)},o.prototype.doPoll=function(){var e=this,t=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),t.async=!0,t.src=this.uri(),t.onerror=function(t){e.onError("jsonp poll error",t)};var r=document.getElementsByTagName("script")[0];r?r.parentNode.insertBefore(t,r):(document.head||document.body).appendChild(t),this.script=t;var n="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);n&&setTimeout(function(){var e=document.createElement("iframe");document.body.appendChild(e),document.body.removeChild(e)},100)},o.prototype.doWrite=function(e,t){function r(){n(),t()}function n(){if(o.iframe)try{o.form.removeChild(o.iframe)}catch(e){o.onError("jsonp polling iframe removal error",e)}try{var t='<iframe src="javascript:0" name="'+o.iframeId+'">';s=document.createElement(t)}catch(e){s=document.createElement("iframe"),s.name=o.iframeId,s.src="javascript:0"}s.id=o.iframeId,o.form.appendChild(s),o.iframe=s}var o=this;if(!this.form){var s,i=document.createElement("form"),a=document.createElement("textarea"),u=this.iframeId="eio_iframe_"+this.index;i.className="socketio",i.style.position="absolute",i.style.top="-1000px",i.style.left="-1000px",i.target=u,i.method="POST",i.setAttribute("accept-charset","utf-8"),a.name="d",i.appendChild(a),document.body.appendChild(i),this.form=i,this.area=a}this.form.action=this.uri(),n(),e=e.replace(p,"\\\n"),this.area.value=e.replace(c,"\\n");try{this.form.submit()}catch(h){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"==o.iframe.readyState&&r()}:this.iframe.onload=r}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./polling":8,"component-inherit":17}],7:[function(e,t,r){(function(r){function n(){}function o(e){if(c.call(this,e),r.location){var t="https:"==location.protocol,n=location.port;n||(n=t?443:80),this.xd=e.hostname!=r.location.hostname||n!=e.port,this.xs=e.secure!=t}else this.extraHeaders=e.extraHeaders}function s(e){this.method=e.method||"GET",this.uri=e.uri,this.xd=!!e.xd,this.xs=!!e.xs,this.async=!1!==e.async,this.data=void 0!=e.data?e.data:null,this.agent=e.agent,this.isBinary=e.isBinary,this.supportsBinary=e.supportsBinary,this.enablesXDR=e.enablesXDR,this.pfx=e.pfx,this.key=e.key,this.passphrase=e.passphrase,this.cert=e.cert,this.ca=e.ca,this.ciphers=e.ciphers,this.rejectUnauthorized=e.rejectUnauthorized,this.extraHeaders=e.extraHeaders,this.create()}function i(){for(var e in s.requests)s.requests.hasOwnProperty(e)&&s.requests[e].abort()}var a=e("xmlhttprequest-ssl"),c=e("./polling"),p=e("component-emitter"),u=e("component-inherit"),h=e("debug")("engine.io-client:polling-xhr");t.exports=o,t.exports.Request=s,u(o,c),o.prototype.supportsBinary=!0,o.prototype.request=function(e){return e=e||{},e.uri=this.uri(),e.xd=this.xd,e.xs=this.xs,e.agent=this.agent||!1,e.supportsBinary=this.supportsBinary,e.enablesXDR=this.enablesXDR,e.pfx=this.pfx,e.key=this.key,e.passphrase=this.passphrase,e.cert=this.cert,e.ca=this.ca,e.ciphers=this.ciphers,e.rejectUnauthorized=this.rejectUnauthorized,e.extraHeaders=this.extraHeaders,new s(e)},o.prototype.doWrite=function(e,t){var r="string"!=typeof e&&void 0!==e,n=this.request({method:"POST",data:e,isBinary:r}),o=this;n.on("success",t),n.on("error",function(e){o.onError("xhr post error",e)}),this.sendXhr=n},o.prototype.doPoll=function(){h("xhr poll");var e=this.request(),t=this;e.on("data",function(e){t.onData(e)}),e.on("error",function(e){t.onError("xhr poll error",e)}),this.pollXhr=e},p(s.prototype),s.prototype.create=function(){var e={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};e.pfx=this.pfx,e.key=this.key,e.passphrase=this.passphrase,e.cert=this.cert,e.ca=this.ca,e.ciphers=this.ciphers,e.rejectUnauthorized=this.rejectUnauthorized;var t=this.xhr=new a(e),n=this;try{h("xhr open %s: %s",this.method,this.uri),t.open(this.method,this.uri,this.async);try{if(this.extraHeaders){t.setDisableHeaderCheck(!0);for(var o in this.extraHeaders)this.extraHeaders.hasOwnProperty(o)&&t.setRequestHeader(o,this.extraHeaders[o])}}catch(i){}if(this.supportsBinary&&(t.responseType="arraybuffer"),"POST"==this.method)try{this.isBinary?t.setRequestHeader("Content-type","application/octet-stream"):t.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(i){}"withCredentials"in t&&(t.withCredentials=!0),this.hasXDR()?(t.onload=function(){n.onLoad()},t.onerror=function(){n.onError(t.responseText)}):t.onreadystatechange=function(){4==t.readyState&&(200==t.status||1223==t.status?n.onLoad():setTimeout(function(){n.onError(t.status)},0))},h("xhr data %s",this.data),t.send(this.data)}catch(i){return void setTimeout(function(){n.onError(i)},0)}r.document&&(this.index=s.requestsCount++,s.requests[this.index]=this)},s.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},s.prototype.onData=function(e){this.emit("data",e),this.onSuccess()},s.prototype.onError=function(e){this.emit("error",e),this.cleanup(!0)},s.prototype.cleanup=function(e){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=n:this.xhr.onreadystatechange=n,e)try{this.xhr.abort()}catch(t){}r.document&&delete s.requests[this.index],this.xhr=null}},s.prototype.onLoad=function(){var e;try{var t;try{t=this.xhr.getResponseHeader("Content-Type").split(";")[0]}catch(r){}if("application/octet-stream"===t)e=this.xhr.response;else if(this.supportsBinary)try{e=String.fromCharCode.apply(null,new Uint8Array(this.xhr.response))}catch(r){for(var n=new Uint8Array(this.xhr.response),o=[],s=0,i=n.length;i>s;s++)o.push(n[s]);e=String.fromCharCode.apply(null,o)}else e=this.xhr.responseText}catch(r){this.onError(r)}null!=e&&this.onData(e)},s.prototype.hasXDR=function(){return"undefined"!=typeof r.XDomainRequest&&!this.xs&&this.enablesXDR},s.prototype.abort=function(){this.cleanup()},r.document&&(s.requestsCount=0,s.requests={},r.attachEvent?r.attachEvent("onunload",i):r.addEventListener&&r.addEventListener("beforeunload",i,!1))}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./polling":8,"component-emitter":16,"component-inherit":17,debug:18,"xmlhttprequest-ssl":10}],8:[function(e,t,r){function n(e){var t=e&&e.forceBase64;(!u||t)&&(this.supportsBinary=!1),o.call(this,e)}var o=e("../transport"),s=e("parseqs"),i=e("engine.io-parser"),a=e("component-inherit"),c=e("yeast"),p=e("debug")("engine.io-client:polling");t.exports=n;var u=function(){var t=e("xmlhttprequest-ssl"),r=new t({xdomain:!1});return null!=r.responseType}();a(n,o),n.prototype.name="polling",n.prototype.doOpen=function(){this.poll()},n.prototype.pause=function(e){function t(){p("paused"),r.readyState="paused",e()}var r=this;if(this.readyState="pausing",this.polling||!this.writable){var n=0;this.polling&&(p("we are currently polling - waiting to pause"),n++,this.once("pollComplete",function(){p("pre-pause polling complete"),--n||t()})),this.writable||(p("we are currently writing - waiting to pause"),n++,this.once("drain",function(){p("pre-pause writing complete"),--n||t()}))}else t()},n.prototype.poll=function(){p("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},n.prototype.onData=function(e){var t=this;p("polling got data %s",e);var r=function(e,r,n){return"opening"==t.readyState&&t.onOpen(),"close"==e.type?(t.onClose(),!1):void t.onPacket(e)};i.decodePayload(e,this.socket.binaryType,r),"closed"!=this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"==this.readyState?this.poll():p('ignoring poll - transport state "%s"',this.readyState))},n.prototype.doClose=function(){function e(){p("writing close packet"),t.write([{type:"close"}])}var t=this;"open"==this.readyState?(p("transport open - closing"),e()):(p("transport not open - deferring close"),this.once("open",e))},n.prototype.write=function(e){var t=this;this.writable=!1;var r=function(){t.writable=!0,t.emit("drain")},t=this;i.encodePayload(e,this.supportsBinary,function(e){t.doWrite(e,r)})},n.prototype.uri=function(){var e=this.query||{},t=this.secure?"https":"http",r="";!1!==this.timestampRequests&&(e[this.timestampParam]=c()),this.supportsBinary||e.sid||(e.b64=1),e=s.encode(e),this.port&&("https"==t&&443!=this.port||"http"==t&&80!=this.port)&&(r=":"+this.port),e.length&&(e="?"+e);var n=-1!==this.hostname.indexOf(":");return t+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+e}},{"../transport":4,"component-inherit":17,debug:18,"engine.io-parser":20,parseqs:28,"xmlhttprequest-ssl":10,yeast:31}],9:[function(e,t,r){(function(r){function n(e){var t=e&&e.forceBase64;t&&(this.supportsBinary=!1),this.perMessageDeflate=e.perMessageDeflate,o.call(this,e)}var o=e("../transport"),s=e("engine.io-parser"),i=e("parseqs"),a=e("component-inherit"),c=e("yeast"),p=e("debug")("engine.io-client:websocket"),u=r.WebSocket||r.MozWebSocket,h=u;if(!h&&"undefined"==typeof window)try{h=e("ws")}catch(f){}t.exports=n,a(n,o),n.prototype.name="websocket",n.prototype.supportsBinary=!0,n.prototype.doOpen=function(){if(this.check()){var e=this.uri(),t=void 0,r={agent:this.agent,perMessageDeflate:this.perMessageDeflate};r.pfx=this.pfx,r.key=this.key,r.passphrase=this.passphrase,r.cert=this.cert,r.ca=this.ca,r.ciphers=this.ciphers,r.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(r.headers=this.extraHeaders),this.ws=u?new h(e):new h(e,t,r),void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="buffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},n.prototype.addEventListeners=function(){var e=this;this.ws.onopen=function(){e.onOpen()},this.ws.onclose=function(){e.onClose()},this.ws.onmessage=function(t){e.onData(t.data)},this.ws.onerror=function(t){e.onError("websocket error",t)}},"undefined"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)&&(n.prototype.onData=function(e){var t=this;setTimeout(function(){o.prototype.onData.call(t,e)},0)}),n.prototype.write=function(e){function t(){n.emit("flush"),setTimeout(function(){n.writable=!0,n.emit("drain")},0)}var n=this;this.writable=!1;for(var o=e.length,i=0,a=o;a>i;i++)!function(e){s.encodePacket(e,n.supportsBinary,function(s){if(!u){var i={};if(e.options&&(i.compress=e.options.compress),n.perMessageDeflate){var a="string"==typeof s?r.Buffer.byteLength(s):s.length;a<n.perMessageDeflate.threshold&&(i.compress=!1)}}try{u?n.ws.send(s):n.ws.send(s,i)}catch(c){p("websocket closed before onclose event")}--o||t()})}(e[i])},n.prototype.onClose=function(){o.prototype.onClose.call(this)},n.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},n.prototype.uri=function(){var e=this.query||{},t=this.secure?"wss":"ws",r="";this.port&&("wss"==t&&443!=this.port||"ws"==t&&80!=this.port)&&(r=":"+this.port),this.timestampRequests&&(e[this.timestampParam]=c()),this.supportsBinary||(e.b64=1),e=i.encode(e),e.length&&(e="?"+e);var n=-1!==this.hostname.indexOf(":");return t+"://"+(n?"["+this.hostname+"]":this.hostname)+r+this.path+e},n.prototype.check=function(){return!(!h||"__initialize"in h&&this.name===n.prototype.name)}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"../transport":4,"component-inherit":17,debug:18,"engine.io-parser":20,parseqs:28,ws:15,yeast:31}],10:[function(e,t,r){var n=e("has-cors");t.exports=function(e){var t=e.xdomain,r=e.xscheme,o=e.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!t||n))return new XMLHttpRequest}catch(s){}try{if("undefined"!=typeof XDomainRequest&&!r&&o)return new XDomainRequest}catch(s){}if(!t)try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(s){}}},{"has-cors":23}],11:[function(e,t,r){function n(e,t,r){function n(e,o){if(n.count<=0)throw new Error("after called too many times");--n.count,e?(s=!0,t(e),t=r):0!==n.count||s||t(null,o)}var s=!1;return r=r||o,n.count=e,0===e?t():n}function o(){}t.exports=n},{}],12:[function(e,t,r){t.exports=function(e,t,r){var n=e.byteLength;if(t=t||0,r=r||n,e.slice)return e.slice(t,r);if(0>t&&(t+=n),0>r&&(r+=n),r>n&&(r=n),t>=n||t>=r||0===n)return new ArrayBuffer(0);for(var o=new Uint8Array(e),s=new Uint8Array(r-t),i=t,a=0;r>i;i++,a++)s[a]=o[i];return s.buffer}},{}],13:[function(e,t,r){!function(e){"use strict";r.encode=function(t){var r,n=new Uint8Array(t),o=n.length,s="";for(r=0;o>r;r+=3)s+=e[n[r]>>2],s+=e[(3&n[r])<<4|n[r+1]>>4],s+=e[(15&n[r+1])<<2|n[r+2]>>6],s+=e[63&n[r+2]];return o%3===2?s=s.substring(0,s.length-1)+"=":o%3===1&&(s=s.substring(0,s.length-2)+"=="),s},r.decode=function(t){var r,n,o,s,i,a=.75*t.length,c=t.length,p=0;"="===t[t.length-1]&&(a--,"="===t[t.length-2]&&a--);var u=new ArrayBuffer(a),h=new Uint8Array(u);for(r=0;c>r;r+=4)n=e.indexOf(t[r]),o=e.indexOf(t[r+1]),s=e.indexOf(t[r+2]),i=e.indexOf(t[r+3]),h[p++]=n<<2|o>>4,h[p++]=(15&o)<<4|s>>2,h[p++]=(3&s)<<6|63&i;return u}}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")},{}],14:[function(e,t,r){(function(e){function r(e){for(var t=0;t<e.length;t++){var r=e[t];if(r.buffer instanceof ArrayBuffer){var n=r.buffer;if(r.byteLength!==n.byteLength){var o=new Uint8Array(r.byteLength);o.set(new Uint8Array(n,r.byteOffset,r.byteLength)),n=o.buffer}e[t]=n}}}function n(e,t){t=t||{};var n=new s;r(e);for(var o=0;o<e.length;o++)n.append(e[o]);return t.type?n.getBlob(t.type):n.getBlob()}function o(e,t){return r(e),new Blob(e,t||{})}var s=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder,i=function(){try{var e=new Blob(["hi"]);return 2===e.size}catch(t){return!1}}(),a=i&&function(){try{var e=new Blob([new Uint8Array([1,2])]);return 2===e.size}catch(t){return!1}}(),c=s&&s.prototype.append&&s.prototype.getBlob;t.exports=function(){return i?a?e.Blob:o:c?n:void 0}()}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{}],15:[function(e,t,r){},{}],16:[function(e,t,r){function n(e){return e?o(e):void 0}function o(e){for(var t in n.prototype)e[t]=n.prototype[t];return e}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(e,t){return this._callbacks=this._callbacks||{},(this._callbacks[e]=this._callbacks[e]||[]).push(t),this},n.prototype.once=function(e,t){function r(){n.off(e,r),t.apply(this,arguments)}var n=this;return this._callbacks=this._callbacks||{},r.fn=t,this.on(e,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(e,t){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks[e];if(!r)return this;if(1==arguments.length)return delete this._callbacks[e],this;for(var n,o=0;o<r.length;o++)if(n=r[o],n===t||n.fn===t){r.splice(o,1);break}return this},n.prototype.emit=function(e){this._callbacks=this._callbacks||{};var t=[].slice.call(arguments,1),r=this._callbacks[e];if(r){r=r.slice(0);for(var n=0,o=r.length;o>n;++n)r[n].apply(this,t)}return this},n.prototype.listeners=function(e){return this._callbacks=this._callbacks||{},this._callbacks[e]||[]},n.prototype.hasListeners=function(e){return!!this.listeners(e).length}},{}],17:[function(e,t,r){t.exports=function(e,t){var r=function(){};r.prototype=t.prototype,e.prototype=new r,e.prototype.constructor=e}},{}],18:[function(e,t,r){function n(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function o(){var e=arguments,t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+r.humanize(this.diff),!t)return e;var n="color: "+this.color;e=[e[0],n,"color: inherit"].concat(Array.prototype.slice.call(e,1));var o=0,s=0;return e[0].replace(/%[a-z%]/g,function(e){"%%"!==e&&(o++,"%c"===e&&(s=o))}),e.splice(s,0,n),e}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function i(e){try{null==e?r.storage.removeItem("debug"):r.storage.debug=e}catch(t){}}function a(){var e;try{e=r.storage.debug}catch(t){}return e}function c(){try{return window.localStorage}catch(e){}}r=t.exports=e("./debug"),r.log=s,r.formatArgs=o,r.save=i,r.load=a,r.useColors=n,r.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:c(),r.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],r.formatters.j=function(e){return JSON.stringify(e)},r.enable(a())},{"./debug":19}],19:[function(e,t,r){function n(){return r.colors[u++%r.colors.length]}function o(e){function t(){}function o(){var e=o,t=+new Date,s=t-(p||t);e.diff=s,e.prev=p,e.curr=t,p=t,null==e.useColors&&(e.useColors=r.useColors()),null==e.color&&e.useColors&&(e.color=n());var i=Array.prototype.slice.call(arguments);i[0]=r.coerce(i[0]),"string"!=typeof i[0]&&(i=["%o"].concat(i));var a=0;i[0]=i[0].replace(/%([a-z%])/g,function(t,n){if("%%"===t)return t;a++;var o=r.formatters[n];if("function"==typeof o){var s=i[a];t=o.call(e,s),i.splice(a,1),a--}return t}),"function"==typeof r.formatArgs&&(i=r.formatArgs.apply(e,i));var c=o.log||r.log||console.log.bind(console);c.apply(e,i)}t.enabled=!1,o.enabled=!0;var s=r.enabled(e)?o:t;return s.namespace=e,s}function s(e){r.save(e);for(var t=(e||"").split(/[\s,]+/),n=t.length,o=0;n>o;o++)t[o]&&(e=t[o].replace(/\*/g,".*?"),"-"===e[0]?r.skips.push(new RegExp("^"+e.substr(1)+"$")):r.names.push(new RegExp("^"+e+"$")))}function i(){r.enable("")}function a(e){var t,n;for(t=0,n=r.skips.length;n>t;t++)if(r.skips[t].test(e))return!1;for(t=0,n=r.names.length;n>t;t++)if(r.names[t].test(e))return!0;return!1}function c(e){return e instanceof Error?e.stack||e.message:e}r=t.exports=o,r.coerce=c,r.disable=i,r.enable=s,r.enabled=a,r.humanize=e("ms"),r.names=[],r.skips=[],r.formatters={};var p,u=0},{ms:26}],20:[function(e,t,r){(function(t){function n(e,t){var n="b"+r.packets[e.type]+e.data.data;return t(n)}function o(e,t,n){if(!t)return r.encodeBase64Packet(e,n);var o=e.data,s=new Uint8Array(o),i=new Uint8Array(1+o.byteLength);i[0]=m[e.type];for(var a=0;a<s.length;a++)i[a+1]=s[a];return n(i.buffer)}function s(e,t,n){if(!t)return r.encodeBase64Packet(e,n);var o=new FileReader;return o.onload=function(){e.data=o.result,r.encodePacket(e,t,!0,n)},o.readAsArrayBuffer(e.data)}function i(e,t,n){if(!t)return r.encodeBase64Packet(e,n);if(g)return s(e,t,n);var o=new Uint8Array(1);o[0]=m[e.type];var i=new w([o.buffer,e.data]);return n(i)}function a(e,t,r){for(var n=new Array(e.length),o=f(e.length,r),s=function(e,r,o){t(r,function(t,r){n[e]=r,o(t,n)})},i=0;i<e.length;i++)s(i,e[i],o)}var c=e("./keys"),p=e("has-binary"),u=e("arraybuffer.slice"),h=e("base64-arraybuffer"),f=e("after"),l=e("utf8"),d=navigator.userAgent.match(/Android/i),y=/PhantomJS/i.test(navigator.userAgent),g=d||y;r.protocol=3;var m=r.packets={
	open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},v=c(m),b={type:"error",data:"parser error"},w=e("blob");r.encodePacket=function(e,r,s,a){"function"==typeof r&&(a=r,r=!1),"function"==typeof s&&(a=s,s=null);var c=void 0===e.data?void 0:e.data.buffer||e.data;if(t.ArrayBuffer&&c instanceof ArrayBuffer)return o(e,r,a);if(w&&c instanceof t.Blob)return i(e,r,a);if(c&&c.base64)return n(e,a);var p=m[e.type];return void 0!==e.data&&(p+=s?l.encode(String(e.data)):String(e.data)),a(""+p)},r.encodeBase64Packet=function(e,n){var o="b"+r.packets[e.type];if(w&&e.data instanceof t.Blob){var s=new FileReader;return s.onload=function(){var e=s.result.split(",")[1];n(o+e)},s.readAsDataURL(e.data)}var i;try{i=String.fromCharCode.apply(null,new Uint8Array(e.data))}catch(a){for(var c=new Uint8Array(e.data),p=new Array(c.length),u=0;u<c.length;u++)p[u]=c[u];i=String.fromCharCode.apply(null,p)}return o+=t.btoa(i),n(o)},r.decodePacket=function(e,t,n){if("string"==typeof e||void 0===e){if("b"==e.charAt(0))return r.decodeBase64Packet(e.substr(1),t);if(n)try{e=l.decode(e)}catch(o){return b}var s=e.charAt(0);return Number(s)==s&&v[s]?e.length>1?{type:v[s],data:e.substring(1)}:{type:v[s]}:b}var i=new Uint8Array(e),s=i[0],a=u(e,1);return w&&"blob"===t&&(a=new w([a])),{type:v[s],data:a}},r.decodeBase64Packet=function(e,r){var n=v[e.charAt(0)];if(!t.ArrayBuffer)return{type:n,data:{base64:!0,data:e.substr(1)}};var o=h.decode(e.substr(1));return"blob"===r&&w&&(o=new w([o])),{type:n,data:o}},r.encodePayload=function(e,t,n){function o(e){return e.length+":"+e}function s(e,n){r.encodePacket(e,i?t:!1,!0,function(e){n(null,o(e))})}"function"==typeof t&&(n=t,t=null);var i=p(e);return t&&i?w&&!g?r.encodePayloadAsBlob(e,n):r.encodePayloadAsArrayBuffer(e,n):e.length?void a(e,s,function(e,t){return n(t.join(""))}):n("0:")},r.decodePayload=function(e,t,n){if("string"!=typeof e)return r.decodePayloadAsBinary(e,t,n);"function"==typeof t&&(n=t,t=null);var o;if(""==e)return n(b,0,1);for(var s,i,a="",c=0,p=e.length;p>c;c++){var u=e.charAt(c);if(":"!=u)a+=u;else{if(""==a||a!=(s=Number(a)))return n(b,0,1);if(i=e.substr(c+1,s),a!=i.length)return n(b,0,1);if(i.length){if(o=r.decodePacket(i,t,!0),b.type==o.type&&b.data==o.data)return n(b,0,1);var h=n(o,c+s,p);if(!1===h)return}c+=s,a=""}}return""!=a?n(b,0,1):void 0},r.encodePayloadAsArrayBuffer=function(e,t){function n(e,t){r.encodePacket(e,!0,!0,function(e){return t(null,e)})}return e.length?void a(e,n,function(e,r){var n=r.reduce(function(e,t){var r;return r="string"==typeof t?t.length:t.byteLength,e+r.toString().length+r+2},0),o=new Uint8Array(n),s=0;return r.forEach(function(e){var t="string"==typeof e,r=e;if(t){for(var n=new Uint8Array(e.length),i=0;i<e.length;i++)n[i]=e.charCodeAt(i);r=n.buffer}t?o[s++]=0:o[s++]=1;for(var a=r.byteLength.toString(),i=0;i<a.length;i++)o[s++]=parseInt(a[i]);o[s++]=255;for(var n=new Uint8Array(r),i=0;i<n.length;i++)o[s++]=n[i]}),t(o.buffer)}):t(new ArrayBuffer(0))},r.encodePayloadAsBlob=function(e,t){function n(e,t){r.encodePacket(e,!0,!0,function(e){var r=new Uint8Array(1);if(r[0]=1,"string"==typeof e){for(var n=new Uint8Array(e.length),o=0;o<e.length;o++)n[o]=e.charCodeAt(o);e=n.buffer,r[0]=0}for(var s=e instanceof ArrayBuffer?e.byteLength:e.size,i=s.toString(),a=new Uint8Array(i.length+1),o=0;o<i.length;o++)a[o]=parseInt(i[o]);if(a[i.length]=255,w){var c=new w([r.buffer,a.buffer,e]);t(null,c)}})}a(e,n,function(e,r){return t(new w(r))})},r.decodePayloadAsBinary=function(e,t,n){"function"==typeof t&&(n=t,t=null);for(var o=e,s=[],i=!1;o.byteLength>0;){for(var a=new Uint8Array(o),c=0===a[0],p="",h=1;255!=a[h];h++){if(p.length>310){i=!0;break}p+=a[h]}if(i)return n(b,0,1);o=u(o,2+p.length),p=parseInt(p);var f=u(o,0,p);if(c)try{f=String.fromCharCode.apply(null,new Uint8Array(f))}catch(l){var d=new Uint8Array(f);f="";for(var h=0;h<d.length;h++)f+=String.fromCharCode(d[h])}s.push(f),o=u(o,p)}var y=s.length;s.forEach(function(e,o){n(r.decodePacket(e,t,!0),o,y)})}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./keys":21,after:11,"arraybuffer.slice":12,"base64-arraybuffer":13,blob:14,"has-binary":22,utf8:30}],21:[function(e,t,r){t.exports=Object.keys||function(e){var t=[],r=Object.prototype.hasOwnProperty;for(var n in e)r.call(e,n)&&t.push(n);return t}},{}],22:[function(e,t,r){(function(r){function n(e){function t(e){if(!e)return!1;if(r.Buffer&&r.Buffer.isBuffer(e)||r.ArrayBuffer&&e instanceof ArrayBuffer||r.Blob&&e instanceof Blob||r.File&&e instanceof File)return!0;if(o(e)){for(var n=0;n<e.length;n++)if(t(e[n]))return!0}else if(e&&"object"==typeof e){e.toJSON&&(e=e.toJSON());for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)&&t(e[s]))return!0}return!1}return t(e)}var o=e("isarray");t.exports=n}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{isarray:25}],23:[function(e,t,r){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(n){t.exports=!1}},{}],24:[function(e,t,r){var n=[].indexOf;t.exports=function(e,t){if(n)return e.indexOf(t);for(var r=0;r<e.length;++r)if(e[r]===t)return r;return-1}},{}],25:[function(e,t,r){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],26:[function(e,t,r){function n(e){if(e=""+e,!(e.length>1e4)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var r=parseFloat(t[1]),n=(t[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return r*h;case"days":case"day":case"d":return r*u;case"hours":case"hour":case"hrs":case"hr":case"h":return r*p;case"minutes":case"minute":case"mins":case"min":case"m":return r*c;case"seconds":case"second":case"secs":case"sec":case"s":return r*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return r}}}}function o(e){return e>=u?Math.round(e/u)+"d":e>=p?Math.round(e/p)+"h":e>=c?Math.round(e/c)+"m":e>=a?Math.round(e/a)+"s":e+"ms"}function s(e){return i(e,u,"day")||i(e,p,"hour")||i(e,c,"minute")||i(e,a,"second")||e+" ms"}function i(e,t,r){return t>e?void 0:1.5*t>e?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}var a=1e3,c=60*a,p=60*c,u=24*p,h=365.25*u;t.exports=function(e,t){return t=t||{},"string"==typeof e?n(e):t["long"]?s(e):o(e)}},{}],27:[function(e,t,r){(function(e){var r=/^[\],:{}\s]*$/,n=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,o=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,s=/(?:^|:|,)(?:\s*\[)+/g,i=/^\s+/,a=/\s+$/;t.exports=function(t){return"string"==typeof t&&t?(t=t.replace(i,"").replace(a,""),e.JSON&&JSON.parse?JSON.parse(t):r.test(t.replace(n,"@").replace(o,"]").replace(s,""))?new Function("return "+t)():void 0):null}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{}],28:[function(e,t,r){r.encode=function(e){var t="";for(var r in e)e.hasOwnProperty(r)&&(t.length&&(t+="&"),t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r]));return t},r.decode=function(e){for(var t={},r=e.split("&"),n=0,o=r.length;o>n;n++){var s=r[n].split("=");t[decodeURIComponent(s[0])]=decodeURIComponent(s[1])}return t}},{}],29:[function(e,t,r){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,o=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(e){var t=e,r=e.indexOf("["),s=e.indexOf("]");-1!=r&&-1!=s&&(e=e.substring(0,r)+e.substring(r,s).replace(/:/g,";")+e.substring(s,e.length));for(var i=n.exec(e||""),a={},c=14;c--;)a[o[c]]=i[c]||"";return-1!=r&&-1!=s&&(a.source=t,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},{}],30:[function(t,r,n){(function(t){!function(o){function s(e){for(var t,r,n=[],o=0,s=e.length;s>o;)t=e.charCodeAt(o++),t>=55296&&56319>=t&&s>o?(r=e.charCodeAt(o++),56320==(64512&r)?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),o--)):n.push(t);return n}function i(e){for(var t,r=e.length,n=-1,o="";++n<r;)t=e[n],t>65535&&(t-=65536,o+=w(t>>>10&1023|55296),t=56320|1023&t),o+=w(t);return o}function a(e){if(e>=55296&&57343>=e)throw Error("Lone surrogate U+"+e.toString(16).toUpperCase()+" is not a scalar value")}function c(e,t){return w(e>>t&63|128)}function p(e){if(0==(4294967168&e))return w(e);var t="";return 0==(4294965248&e)?t=w(e>>6&31|192):0==(4294901760&e)?(a(e),t=w(e>>12&15|224),t+=c(e,6)):0==(4292870144&e)&&(t=w(e>>18&7|240),t+=c(e,12),t+=c(e,6)),t+=w(63&e|128)}function u(e){for(var t,r=s(e),n=r.length,o=-1,i="";++o<n;)t=r[o],i+=p(t);return i}function h(){if(b>=v)throw Error("Invalid byte index");var e=255&m[b];if(b++,128==(192&e))return 63&e;throw Error("Invalid continuation byte")}function f(){var e,t,r,n,o;if(b>v)throw Error("Invalid byte index");if(b==v)return!1;if(e=255&m[b],b++,0==(128&e))return e;if(192==(224&e)){var t=h();if(o=(31&e)<<6|t,o>=128)return o;throw Error("Invalid continuation byte")}if(224==(240&e)){if(t=h(),r=h(),o=(15&e)<<12|t<<6|r,o>=2048)return a(o),o;throw Error("Invalid continuation byte")}if(240==(248&e)&&(t=h(),r=h(),n=h(),o=(15&e)<<18|t<<12|r<<6|n,o>=65536&&1114111>=o))return o;throw Error("Invalid UTF-8 detected")}function l(e){m=s(e),v=m.length,b=0;for(var t,r=[];(t=f())!==!1;)r.push(t);return i(r)}var d="object"==typeof n&&n,y="object"==typeof r&&r&&r.exports==d&&r,g="object"==typeof t&&t;(g.global===g||g.window===g)&&(o=g);var m,v,b,w=String.fromCharCode,x={version:"2.0.0",encode:u,decode:l};if("function"==typeof e&&"object"==typeof e.amd&&e.amd)e(function(){return x});else if(d&&!d.nodeType)if(y)y.exports=x;else{var k={},B=k.hasOwnProperty;for(var S in x)B.call(x,S)&&(d[S]=x[S])}else o.utf8=x}(this)}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{}],31:[function(e,t,r){"use strict";function n(e){var t="";do t=a[e%c]+t,e=Math.floor(e/c);while(e>0);return t}function o(e){var t=0;for(h=0;h<e.length;h++)t=t*c+p[e.charAt(h)];return t}function s(){var e=n(+new Date);return e!==i?(u=0,i=e):e+"."+n(u++)}for(var i,a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),c=64,p={},u=0,h=0;c>h;h++)p[a[h]]=h;s.encode=n,s.decode=o,t.exports=s},{}]},{},[1])(1)});
	(function(ns){var CLIENT_VERSION = "0.5.0";var NODE_CLIENT=0;ns.wrapper=function(good,wd){
	var h,aa=this;function n(a){return void 0!==a}function ba(){}function ca(a){a.Xa=function(){return a.rd?a.rd:a.rd=new a}}
	function da(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
	else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function ea(a){return"array"==da(a)}function p(a){return"string"==typeof a}function fa(a){return"number"==typeof a}function ga(a){return"function"==da(a)}function ha(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ia(a,b,c){return a.call.apply(a.bind,arguments)}
	function ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja;return q.apply(null,arguments)}var ka=Date.now||function(){return+new Date};
	function la(a,b){function c(){}c.prototype=b.prototype;a.ze=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.te=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};var ma={};function na(a,b){this.type=oa;this.source=pa;this.path=a;this.ad=b}na.prototype.Tb=function(){return this.path.j()?this:new na(r(this.path),this.ad)};na.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.ad+")"};function qa(a,b){this.type=ra;this.source=a;this.path=b}qa.prototype.Tb=function(){return this.path.j()?new qa(this.source,t):new qa(this.source,r(this.path))};qa.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"};function sa(a,b,c){this.type=ta;this.source=a;this.path=b;this.Da=c}sa.prototype.Tb=function(a){return this.path.j()?new sa(this.source,t,this.Da.R(a)):new sa(this.source,r(this.path),this.Da)};sa.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Da.toString()+")"};function v(){}v.prototype.S;v.prototype.K;v.prototype.da;v.prototype.R;v.prototype.ja;v.prototype.Pc;v.prototype.U;v.prototype.N;v.prototype.xa;v.prototype.j;v.prototype.Sa;v.prototype.O;v.prototype.hash;v.prototype.nb;v.prototype.ba;v.prototype.Na;v.prototype.xb;function w(a,b){this.name=a;this.node=b}function ua(a,b){return new w(a,b)};function va(a,b){return wa(a.name,b.name)}function xa(a,b){return wa(a,b)};function ya(a){this.g=a;this.f=null}ya.prototype.get=function(){var a=this.g.get(),b=za(a);if(this.f)for(var c in this.f)b[c]-=this.f[c];this.f=a;return b};function Aa(a,b){this.yd={};this.Z=new ya(a);this.g=b;var c=1E4+2E4*Math.random();setTimeout(q(this.f,this),Math.floor(c))}Aa.prototype.f=function(){var a=this.Z.get(),b={},c=!1,d;for(d in a)0<a[d]&&x(this.yd,d)&&(b[d]=a[d],c=!0);c&&this.g.Yc(b);setTimeout(q(this.f,this),Math.floor(6E5*Math.random()))};function z(a,b){if(1==arguments.length){this.D=a.split("/");for(var c=0,d=0;d<this.D.length;d++)0<this.D[d].length&&(this.D[c]=this.D[d],c++);this.D.length=c;this.ca=0}else this.D=a,this.ca=b}function A(a,b){var c=B(a);if(null===c)return b;if(c===B(b))return A(r(a),r(b));throw Error("INTERNAL ERROR: innerPath ("+b+") is not within outerPath ("+a+")");}function B(a){return a.ca>=a.D.length?null:a.D[a.ca]}function Ba(a){return a.D.length-a.ca}
	function r(a){var b=a.ca;b<a.D.length&&b++;return new z(a.D,b)}function Ca(a){return a.ca<a.D.length?a.D[a.D.length-1]:null}h=z.prototype;h.toString=function(){for(var a="",b=this.ca;b<this.D.length;b++)""!==this.D[b]&&(a+="/"+this.D[b]);return a||"/"};h.slice=function(a){return this.D.slice(this.ca+(a||0))};h.parent=function(){if(this.ca>=this.D.length)return null;for(var a=[],b=this.ca;b<this.D.length-1;b++)a.push(this.D[b]);return new z(a,0)};
	h.I=function(a){for(var b=[],c=this.ca;c<this.D.length;c++)b.push(this.D[c]);if(a instanceof z)for(c=a.ca;c<a.D.length;c++)b.push(a.D[c]);else for(a=a.split("/"),c=0;c<a.length;c++)0<a[c].length&&b.push(a[c]);return new z(b,0)};h.j=function(){return this.ca>=this.D.length};h.ba=function(a){if(Ba(this)!==Ba(a))return!1;for(var b=this.ca,c=a.ca;b<=this.D.length;b++,c++)if(this.D[b]!==a.D[c])return!1;return!0};
	h.contains=function(a){var b=this.ca,c=a.ca;if(Ba(this)>Ba(a))return!1;for(;b<this.D.length;){if(this.D[b]!==a.D[c])return!1;++b;++c}return!0};var t=new z("");function Da(a,b){this.g=a.slice();this.f=Math.max(1,this.g.length);this.m=b;for(var c=0;c<this.g.length;c++)this.f+=Ea(this.g[c]);Fa(this)}Da.prototype.push=function(a){0<this.g.length&&(this.f+=1);this.g.push(a);this.f+=Ea(a);Fa(this)};Da.prototype.pop=function(){var a=this.g.pop();this.f-=Ea(a);0<this.g.length&&--this.f};
	function Fa(a){if(768<a.f)throw Error(a.m+"has a key path longer than 768 bytes ("+a.f+").");if(32<a.g.length)throw Error(a.m+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Ga(a));}function Ga(a){return 0==a.g.length?"":"in property '"+a.g.join(".")+"'"};function Ha(a,b){return a&&"object"===typeof a?(C(".sv"in a,"Unexpected leaf node or priority contents"),b[a[".sv"]]):a}function Ia(a,b){var c=new Ja;Ka(a,new z(""),function(a,e){c.Db(a,La(e,b))});return c}function La(a,b){var c=a.K().O(),c=Ha(c,b),d;if(a.S()){var e=Ha(a.wa(),b);return e!==a.wa()||c!==a.K().O()?new Ma(e,D(c)):a}d=a;c!==a.K().O()&&(d=d.da(new Ma(c)));a.Y(E,function(a,c){var e=La(c,b);e!==c&&(d=d.U(a,e))});return d};function Na(a,b,c){this.f=a;this.ea=b;this.pb=c}function Oa(a){return a.ea}function Pa(a,b){return a.ea&&!a.pb||a.f.xa(b)}Na.prototype.o=function(){return this.f};function F(a,b,c,d){this.type=a;this.Ea=b;this.La=c;this.Vc=d;this.pc=void 0}function Qa(a){return new F(Ra,a)}var Ra="value";function Sa(){}Sa.prototype.pd=function(){return null};Sa.prototype.Nc=function(){return null};var Ta=new Sa;function Ua(a,b,c){this.Cd=a;this.Fa=b;this.mc=c}Ua.prototype.pd=function(a){var b=this.Fa.M;if(Pa(b,a))return b.o().R(a);b=null!=this.mc?new Na(this.mc,!0,!1):this.Fa.G();return this.Cd.Ka(a,b)};Ua.prototype.Nc=function(a,b,c){var d=null!=this.mc?this.mc:Va(this.Fa);a=this.Cd.Dc(d,b,1,c,a);return 0===a.length?null:a[0]};function Wa(){}Wa.prototype.Ya;Wa.prototype.gc;Wa.prototype.Ra;Wa.prototype.toString;function Xa(a,b,c,d){this.Jc=b;this.sc=c;this.pc=d;this.ec=a}Xa.prototype.Ya=function(){var a=this.sc.Cb();return"value"===this.ec?a.path:a.parent().path};Xa.prototype.gc=function(){return this.ec};Xa.prototype.Ra=function(){return this.Jc.Ra(this)};Xa.prototype.toString=function(){return this.Ya().toString()+":"+this.ec+":"+G(this.sc.md())};function Ya(a,b,c){this.Jc=a;this.error=b;this.path=c}Ya.prototype.Ya=function(){return this.path};
	Ya.prototype.gc=function(){return"cancel"};Ya.prototype.Ra=function(){return this.Jc.Ra(this)};Ya.prototype.toString=function(){return this.path.toString()+":cancel"};function Za(){this.f=[]}function $a(a,b){for(var c=null,d=0;d<b.length;d++){var e=b[d],f=e.Ya();null===c||f.ba(c.Ya())||(a.f.push(c),c=null);null===c&&(c=new ab(f));c.add(e)}c&&a.f.push(c)}function bb(a,b,c){$a(a,c);cb(a,function(a){return a.ba(b)})}function db(a,b,c){$a(a,c);cb(a,function(a){return a.contains(b)||b.contains(a)})}
	function cb(a,b){for(var c=!0,d=0;d<a.f.length;d++){var e=a.f[d];if(e)if(e=e.Ya(),b(e)){for(var e=a.f[d],f=0;f<e.fc.length;f++){var g=e.fc[f];if(null!==g){e.fc[f]=null;var k=g.Ra();eb&&fb("event: "+g.toString());gb(k)}}a.f[d]=null}else c=!1}c&&(a.f=[])}function ab(a){this.pa=a;this.fc=[]}ab.prototype.add=function(a){this.fc.push(a)};ab.prototype.Ya=function(){return this.pa};var hb={NETWORK_ERROR:"Unable to contact the Wilddog server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};function I(a){var b=Error(J(hb,a),a);b.code=a;return b};function ib(){return"undefined"!==typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(navigator.userAgent)}function jb(){return"undefined"!==typeof location&&/^file:\//.test(location.href)}
	function kb(){if("undefined"===typeof navigator)return!1;var a=navigator.userAgent;if("Microsoft Internet Explorer"===navigator.appName){if((a=a.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1])}else if(-1<a.indexOf("Trident")&&(a=a.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<a.length)return 8<=parseFloat(a[1]);return!1};function x(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function J(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]}function lb(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])}function mb(a){var b={};lb(a,function(a,d){b[a]=d});return b};function nb(a){this.Mb=a;this.oc="wilddog:"}nb.prototype.set=function(a,b){null==b?this.Mb.removeItem(this.oc+a):this.Mb.setItem(this.oc+a,G(b))};nb.prototype.get=function(a){a=this.Mb.getItem(this.oc+a);return null==a?null:ob(a)};nb.prototype.remove=function(a){this.Mb.removeItem(this.oc+a)};nb.prototype.toString=function(){return this.Mb.toString()};function pb(){this.Jb={}}pb.prototype.set=function(a,b){null==b?delete this.Jb[a]:this.Jb[a]=b};pb.prototype.get=function(a){return x(this.Jb,a)?this.Jb[a]:null};pb.prototype.remove=function(a){delete this.Jb[a]};function qb(a){try{if("undefined"!==typeof window&&"undefined"!==typeof window[a]){var b=window[a];b.setItem("wilddog:sentinel","cache");b.removeItem("wilddog:sentinel");return new nb(b)}}catch(c){}return new pb}var rb=qb("localStorage"),K=qb("sessionStorage");function sb(a,b,c,d,e){this.host=a.toLowerCase();this.domain=this.host.substr(this.host.indexOf(".")+1);this.eb=b;this.zb=c;this.nc=e||"";this.Ca=rb.get("host:"+a)||this.host;this.Pa=JSON.parse(K.get("failHosts"))||[]}function tb(a,b){null==b?(a.Ca=a.host,"s-"===a.Ca.substr(0,2)&&rb.remove("host:"+a.host)):b!==a.Ca&&(a.Ca=b,"s-"===a.Ca.substr(0,2)&&rb.set("host:"+a.host,a.Ca))}sb.prototype.toString=function(){var a=(this.eb?"https://":"http://")+this.host;this.nc&&(a+="<"+this.nc+">");return a};var ub="auth.wilddog.com";function vb(a,b,c){this.Zb=a||{};this.vc=b||{};this.Ma=c||{};this.Zb.remember||(this.Zb.remember="default")}var wb=["remember","redirectTo"];function xb(a){var b={},c={};lb(a||{},function(a,e){0<=yb(wb,a)?b[a]=e:c[a]=e});return new vb(b,{},c)};function L(a,b,c,d){var e;d<b?e="at least "+b:d>c&&(e=0===c?"none":"no more than "+c);if(e)throw Error(a+" failed: Was called with "+d+(1===d?" argument.":" arguments.")+" Expects "+e+".");}function M(a,b,c){var d="";switch(b){case 1:d=c?"first":"First";break;case 2:d=c?"second":"Second";break;case 3:d=c?"third":"Third";break;case 4:d=c?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?");}return a=a+" failed: "+(d+" argument ")}
	function N(a,b,c,d){if((!d||n(c))&&!ga(c))throw Error(M(a,b,d)+"must be a valid function.");}function zb(a,b,c){if(n(c)&&(!ha(c)||null===c))throw Error(M(a,b,!0)+"must be a valid context object.");};function Ab(){this.g=-1};function Bb(){this.g=-1;this.g=64;this.f=[];this.X=[];this.Z=[];this.B=[];this.B[0]=128;for(var a=1;a<this.g;++a)this.B[a]=0;this.H=this.m=0;this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.H=this.m=0}la(Bb,Ab);
	function Cb(a,b,c){c||(c=0);var d=a.Z;if(p(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];for(var g=a.f[2],k=a.f[3],l=a.f[4],m,e=0;80>e;e++)40>e?20>e?(f=k^c&(g^k),m=1518500249):(f=c^g^k,m=1859775393):60>e?(f=c&g|k&(c|g),m=2400959708):(f=c^g^k,m=3395469782),f=(b<<
	5|b>>>27)+f+l+m+d[e]&4294967295,l=k,k=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+k&4294967295;a.f[4]=a.f[4]+l&4294967295}
	Bb.prototype.update=function(a,b){if(null!=a){n(b)||(b=a.length);for(var c=b-this.g,d=0,e=this.X,f=this.m;d<b;){if(0==f)for(;d<=c;)Cb(this,a,d),d+=this.g;if(p(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Cb(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Cb(this,e);f=0;break}}this.m=f;this.H+=b}};function Db(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);}function Eb(){}
	function Fb(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(ea(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Fb(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Gb(d,c),c.push(":"),Fb(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Gb(b,c);break;case "number":c.push(isFinite(b)&&
	!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}var Hb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Ib=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
	function Gb(a,b){b.push('"',a.replace(Ib,function(a){var b=Hb[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),Hb[a]=b);return b}),'"')};function Jb(a){var b=[];lb(a,function(a,d){ea(d)?Kb(d,function(d){b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))}):b.push(encodeURIComponent(a)+"="+encodeURIComponent(d))});return b.length?"&"+b.join("&"):""}function Lb(a){var b={};a=a.replace(/^\?/,"").split("&");Kb(a,function(a){a&&(a=a.split("="),b[a[0]]=a[1])});return b}function ob(a){return"undefined"!==typeof JSON&&n(JSON.parse)?JSON.parse(a):Db(a)}
	function G(a){if("undefined"!==typeof JSON&&n(JSON.stringify))a=JSON.stringify(a);else{var b=[];Fb(new Eb,a,b);a=b.join("")}return a}function Mb(){this.rc=O}Mb.prototype.o=function(a){return this.rc.ja(a)};Mb.prototype.toString=function(){return this.rc.toString()};function Nb(){var a=window.opener.frames,b;for(b=a.length-1;0<=b;b--)try{if(a[b].location.protocol===window.location.protocol&&a[b].location.host===window.location.host&&"__winchan_relay_frame"===a[b].name)return a[b]}catch(c){}return null}function Ob(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener&&a.addEventListener(b,c,!1)}function Pb(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener&&a.removeEventListener(b,c,!1)}
	function Qb(a){/^https?:\/\//.test(a)||(a=window.location.href);var b=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(a);return b?b[1]:a}function Rb(a){var b="";try{a=a.replace("#","");var c=Lb(a);c&&x(c,"__wilddog_request_key")&&(b=J(c,"__wilddog_request_key"))}catch(d){}return b}function Sb(){var a=Tb(ub);return a.scheme+"://"+a.host+"/v1"}function Ub(a){return Sb()+"/"+a+"/auth/channel"};function Vb(a){a.callback_parameter||(a.callback_parameter="callback");this.f=a;window.__wilddog_auth_jsonp=window.__wilddog_auth_jsonp||{}}
	Vb.prototype.open=function(a,b,c){function d(){c&&(c(I("REQUEST_INTERRUPTED")),c=null)}function e(){setTimeout(function(){window.__wilddog_auth_jsonp[f]=void 0;Wb(window.__wilddog_auth_jsonp)&&(window.__wilddog_auth_jsonp=void 0);try{var a=document.getElementById(f);a&&a.parentNode.removeChild(a)}catch(b){}},1);Pb(window,"beforeunload",d)}var f="fn"+(new Date).getTime()+Math.floor(99999*Math.random());b[this.f.callback_parameter]="__wilddog_auth_jsonp."+f;a+=(/\?/.test(a)?"":"?")+Jb(b);Ob(window,
	"beforeunload",d);window.__wilddog_auth_jsonp[f]=function(a){c&&(c(null,a),c=null);e()};Xb(f,a,c)};
	function Xb(a,b,c){setTimeout(function(){try{var d=document.createElement("script");d.type="text/javascript";d.id=a;d.async=!0;d.src=b;d.onerror=function(){var b=document.getElementById(a);null!==b&&b.parentNode.removeChild(b);c&&c(I("NETWORK_ERROR"))};var e,f=document.getElementsByTagName("head");f&&0!=f.length?e=f[0]:e=document.documentElement;e.appendChild(d)}catch(g){c&&c(I("NETWORK_ERROR"))}},0)}Vb.isAvailable=function(){return!NODE_CLIENT};Vb.prototype.mb=function(){return"json"};function Yb(a){a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.f=a}
	Yb.prototype.open=function(a,b,c){var d=Tb(a),e="http"===d.scheme?__webpack_require__(415):__webpack_require__(438);a=this.f.method;var f,g={Accept:"application/json;text/plain"};Zb(g,this.f.headers);d={host:d.host.split(":")[0],port:d.port,path:d.Bb,method:this.f.method.toUpperCase()};if("GET"===a)d.path+=(/\?/.test(d.path)?"":"?")+Jb(b),f=null;else{var k=this.f.headers.content_type;"application/json"===k&&(f=G(b));"application/x-www-form-urlencoded"===k&&(f=Jb(b));g["Content-Length"]=Buffer.byteLength(f,"utf8")}d.headers=
	g;b=e.request(d,function(a){var b="";a.setEncoding("utf8");a.on("data",function(a){b+=a});a.on("end",function(){try{b=ob(b+"")}catch(a){}c&&(c(null,b),c=null)})});"GET"!==a&&b.write(f);b.on("error",function(a){a&&a.code&&("ENOTFOUND"===a.code||"ENETDOWN"===a.code)?c(I("NETWORK_ERROR")):c(I("SERVER_ERROR"));c=null});b.end()};Yb.isAvailable=function(){return NODE_CLIENT};Yb.prototype.mb=function(){return"json"};function $b(a){var b=this;this.f=a;this.B="*";kb()?this.g=this.m=Nb():(this.g=window.opener,this.m=window);if(!b.g)throw"Unable to find relay frame";Ob(this.m,"message",q(this.lc,this));Ob(this.m,"message",q(this.H,this));try{ac(this,{a:"ready"})}catch(c){Ob(this.g,"load",function(){ac(b,{a:"ready"})})}Ob(window,"unload",q(this.Z,this))}function ac(a,b){b=G(b);kb()?a.g.doPost(b,a.B):a.g.postMessage(b,a.B)}
	$b.prototype.lc=function(a){var b=this,c;try{c=ob(a.data)}catch(d){}c&&"request"===c.a&&(Pb(window,"message",this.lc),this.B=a.origin,this.f&&setTimeout(function(){b.f(b.B,c.d,function(a,c){b.X=!c;b.f=void 0;ac(b,{a:"response",d:a,forceKeepWindowOpen:c})})},0))};$b.prototype.Z=function(){try{Pb(this.m,"message",this.H)}catch(a){}this.f&&(ac(this,{a:"error",d:"unknown closed window"}),this.f=void 0);try{window.close()}catch(a){}};$b.prototype.H=function(a){if(this.X&&"die"===a.data)try{window.close()}catch(b){}};function bc(){this.f=cc()+cc()+cc()}bc.prototype.open=function(a,b){K.set("redirect_request_id",this.f);K.set("redirect_request_id",this.f);b.requestId=this.f;b.redirectTo=b.redirectTo||window.location.href;a+=(/\?/.test(a)?"":"?")+Jb(b);window.location=a};bc.isAvailable=function(){return!NODE_CLIENT&&!jb()&&!ib()};bc.prototype.mb=function(){return"redirect"};function dc(a){a.method||(a.method="GET");a.headers||(a.headers={});a.headers.content_type||(a.headers.content_type="application/json");a.headers.content_type=a.headers.content_type.toLowerCase();this.f=a}
	dc.prototype.open=function(a,b,c){function d(){c&&(c(I("REQUEST_INTERRUPTED")),c=null)}var e=new XMLHttpRequest,f=this.f.method.toUpperCase(),g;Ob(window,"beforeunload",d);e.onreadystatechange=function(){if(c&&4===e.readyState){var a;if(200<=e.status&&300>e.status){try{a=ob(e.responseText)}catch(b){}c(null,a)}else 500<=e.status&&600>e.status?c(I("SERVER_ERROR")):c(I("NETWORK_ERROR"));c=null;Pb(window,"beforeunload",d)}};if("GET"===f)a+=(/\?/.test(a)?"":"?")+Jb(b),g=null;else{var k=this.f.headers.content_type;
	"application/json"===k&&(g=G(b));"application/x-www-form-urlencoded"===k&&(g=Jb(b))}e.open(f,a,!0);a={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};Zb(a,this.f.headers);for(var l in a)e.setRequestHeader(l,a[l]);e.send(g)};dc.isAvailable=function(){return!NODE_CLIENT&&!!window.XMLHttpRequest&&(!("undefined"!==typeof navigator&&(navigator.userAgent.match(/MSIE/)||navigator.userAgent.match(/Trident/)))||kb())};dc.prototype.mb=function(){return"json"};function P(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function ec(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}function fc(a,b){for(var c in a)if(!b.call(void 0,a[c],c,a))return!1;return!0}function gc(a){var b=0,c;for(c in a)b++;return b}function hc(a){for(var b in a)return b}function ic(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function jc(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function kc(a,b){return null!==a&&b in a}
	function lc(a,b){for(var c in a)if(a[c]==b)return!0;return!1}function mc(a,b,c){for(var d in a)if(b.call(c,a[d],d,a))return d}function nc(a,b){var c=mc(a,b,void 0);return c&&a[c]}function Wb(a){for(var b in a)return!1;return!0}function za(a){var b={},c;for(c in a)b[c]=a[c];return b}var oc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
	function Zb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<oc.length;f++)c=oc[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function cc(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^ka()).toString(36)};var yb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Kb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},pc=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,
	b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},qc=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},rc=Array.prototype.reduce?function(a,b,c,d){d&&(b=q(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;Kb(a,function(c,g){e=b.call(d,
	e,c,g,a)});return e},sc=Array.prototype.every?function(a,b,c){return Array.prototype.every.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&!b.call(c,e[f],f,a))return!1;return!0};function tc(a,b){var c=uc(a,b,void 0);return 0>c?null:p(a)?a.charAt(c):a[c]}function uc(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function vc(a,b){var c=yb(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
	function wc(a,b){a.sort(b||xc)}function xc(a,b){return a>b?1:a<b?-1:0};function yc(){this.f={}}yc.prototype.get=function(){return za(this.f)};var zc={},Ac={};function Bc(a){a=a.toString();zc[a]||(zc[a]=new yc);return zc[a]}function Cc(a,b){var c=a.toString();Ac[c]||(Ac[c]=b());return Ac[c]};({}).oe;function Dc(a,b){this.g=a;this.f=b?b:Ec}h=Dc.prototype;h.Ha=function(a,b){return new Dc(this.g,this.f.Ha(a,b,this.g).aa(null,null,Fc,null,null))};h.remove=function(a){return new Dc(this.g,this.f.remove(a,this.g).aa(null,null,Fc,null,null))};h.get=function(a){for(var b,c=this.f;!c.j();){b=this.g(a,c.key);if(0===b)return c.value;0>b?c=c.left:0<b&&(c=c.right)}return null};
	function Gc(a,b){for(var c,d=a.f,e=null;!d.j();){c=a.g(b,d.key);if(0===c){if(d.left.j())return e?e.key:null;for(d=d.left;!d.right.j();)d=d.right;return d.key}0>c?d=d.left:0<c&&(e=d,d=d.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?");}h.j=function(){return this.f.j()};h.count=function(){return this.f.count()};h.Qb=function(){return this.f.Qb()};h.yb=function(){return this.f.yb()};h.ka=function(a){return this.f.ka(a)};
	h.rb=function(a){return new Hc(this.f,null,this.g,!1,a)};h.sb=function(a,b){return new Hc(this.f,a,this.g,!1,b)};h.tb=function(a,b){return new Hc(this.f,a,this.g,!0,b)};h.qd=function(a){return new Hc(this.f,null,this.g,!0,a)};function Hc(a,b,c,d,e){this.f=e||null;this.g=d;this.Ia=[];for(e=1;!a.j();)if(e=b?c(a.key,b):1,d&&(e*=-1),0>e)a=this.g?a.left:a.right;else if(0===e){this.Ia.push(a);break}else this.Ia.push(a),a=this.g?a.right:a.left}
	function Q(a){if(0===a.Ia.length)return null;var b=a.Ia.pop(),c;a.f?c=a.f(b.key,b.value):c={key:b.key,value:b.value};if(a.g)for(b=b.left;!b.j();)a.Ia.push(b),b=b.right;else for(b=b.right;!b.j();)a.Ia.push(b),b=b.left;return c}function Ic(a){if(0===a.Ia.length)return null;var b;b=a.Ia;b=b[b.length-1];return a.f?a.f(b.key,b.value):{key:b.key,value:b.value}}function Jc(a,b,c,d,e){this.key=a;this.value=b;this.color=null!=c?c:Kc;this.left=null!=d?d:Ec;this.right=null!=e?e:Ec}var Kc=!0,Fc=!1;h=Jc.prototype;
	h.aa=function(a,b,c,d,e){return new Jc(null!=a?a:this.key,null!=b?b:this.value,null!=c?c:this.color,null!=d?d:this.left,null!=e?e:this.right)};h.count=function(){return this.left.count()+1+this.right.count()};h.j=function(){return!1};h.ka=function(a){return this.left.ka(a)||a(this.key,this.value)||this.right.ka(a)};function Lc(a){return a.left.j()?a:Lc(a.left)}h.Qb=function(){return Lc(this).key};h.yb=function(){return this.right.j()?this.key:this.right.yb()};
	h.Ha=function(a,b,c){var d,e;e=this;d=c(a,e.key);e=0>d?e.aa(null,null,null,e.left.Ha(a,b,c),null):0===d?e.aa(null,b,null,null,null):e.aa(null,null,null,null,e.right.Ha(a,b,c));return Mc(e)};function Nc(a){if(a.left.j())return Ec;a.left.ha()||a.left.left.ha()||(a=Oc(a));a=a.aa(null,null,null,Nc(a.left),null);return Mc(a)}
	h.remove=function(a,b){var c,d;c=this;if(0>b(a,c.key))c.left.j()||c.left.ha()||c.left.left.ha()||(c=Oc(c)),c=c.aa(null,null,null,c.left.remove(a,b),null);else{c.left.ha()&&(c=Pc(c));c.right.j()||c.right.ha()||c.right.left.ha()||(c=Qc(c),c.left.left.ha()&&(c=Pc(c),c=Qc(c)));if(0===b(a,c.key)){if(c.right.j())return Ec;d=Lc(c.right);c=c.aa(d.key,d.value,null,null,Nc(c.right))}c=c.aa(null,null,null,null,c.right.remove(a,b))}return Mc(c)};h.ha=function(){return this.color};
	function Mc(a){a.right.ha()&&!a.left.ha()&&(a=Rc(a));a.left.ha()&&a.left.left.ha()&&(a=Pc(a));a.left.ha()&&a.right.ha()&&(a=Qc(a));return a}function Oc(a){a=Qc(a);a.right.left.ha()&&(a=a.aa(null,null,null,null,Pc(a.right)),a=Rc(a),a=Qc(a));return a}function Rc(a){return a.right.aa(null,null,a.color,a.aa(null,null,Kc,null,a.right.left),null)}function Pc(a){return a.left.aa(null,null,a.color,null,a.aa(null,null,Kc,a.left.right,null))}
	function Qc(a){return a.aa(null,null,!a.color,a.left.aa(null,null,!a.left.color,null,null),a.right.aa(null,null,!a.right.color,null,null))}function Sc(){}h=Sc.prototype;h.aa=function(){return this};h.Ha=function(a,b){return new Jc(a,b,null)};h.remove=function(){return this};h.count=function(){return 0};h.j=function(){return!0};h.ka=function(){return!1};h.Qb=function(){return null};h.yb=function(){return null};h.ha=function(){return!1};var Ec=new Sc;var R;a:{var Tc=aa.navigator;if(Tc){var Uc=Tc.userAgent;if(Uc){R=Uc;break a}}R=""};var Vc=-1!=R.indexOf("Opera")||-1!=R.indexOf("OPR"),Wc=-1!=R.indexOf("Trident")||-1!=R.indexOf("MSIE"),Xc=-1!=R.indexOf("Edge"),Yc=-1!=R.indexOf("Gecko")&&!(-1!=R.toLowerCase().indexOf("webkit")&&-1==R.indexOf("Edge"))&&!(-1!=R.indexOf("Trident")||-1!=R.indexOf("MSIE"))&&-1==R.indexOf("Edge"),Zc=-1!=R.toLowerCase().indexOf("webkit")&&-1==R.indexOf("Edge");
	function $c(){var a=R;if(Yc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Xc)return/Edge\/([\d\.]+)/.exec(a);if(Wc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Zc)return/WebKit\/(\S+)/.exec(a)}(function(){if(Vc&&aa.opera){var a;var b=aa.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=$c())&&(a=b?b[1]:"");return Wc&&(b=(b=aa.document)?b.documentMode:void 0,b>parseFloat(a))?String(b):a})();var ad=null,bd=null;function cd(a){var b="";dd(a,function(a){b+=String.fromCharCode(a)});return b}function dd(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=bd[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}ed();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),k=c(64);if(64===k&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=k&&b(g<<6&192|k))}}
	function ed(){if(!ad){ad={};bd={};for(var a=0;65>a;a++)ad[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),bd[ad[a]]=a,62<=a&&(bd["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var fd=function(){var a=1;return function(){return a++}}();function C(a,b){if(!a)throw gd(b);}function gd(a){return Error("Wilddog ("+hd+") INTERNAL ASSERT FAILED: "+a)}function id(a){try{return NODE_CLIENT?(new Buffer(a,"base64")).toString("utf8"):"undefined"!==typeof atob?atob(a):cd(a)}catch(b){fb("base64Decode failed: ",b)}return null}
	function jd(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);55296<=e&&56319>=e&&(e=e-55296,d++,C(d<a.length,"Surrogate pair missing trail surrogate."),e=65536+(e<<10)+(a.charCodeAt(d)-56320));128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(65536>e?b[c++]=e>>12|224:(b[c++]=e>>18|240,b[c++]=e>>12&63|128),b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Bb;a.update(b);b=[];d=8*a.H;56>a.m?a.update(a.B,56-a.m):a.update(a.B,a.g-(a.m-56));for(c=a.g-1;56<=c;c--)a.X[c]=d&255,d/=256;Cb(a,a.X);for(c=d=0;5>c;c++)for(e=
	24;0<=e;e-=8)b[d]=a.f[c]>>e&255,++d;ed();a=ad;c=[];for(d=0;d<b.length;d+=3){var f=b[d],g=(e=d+1<b.length)?b[d+1]:0,k=d+2<b.length,l=k?b[d+2]:0,m=f>>2,f=(f&3)<<4|g>>4,g=(g&15)<<2|l>>6,l=l&63;k||(l=64,e||(g=64));c.push(a[m],a[f],a[g],a[l])}return c.join("")}
	function kd(a){for(var b="",c=0;c<arguments.length;c++)var d=arguments[c],e=da(d),b="array"==e||"object"==e&&"number"==typeof d.length?b+kd.apply(null,arguments[c]):"object"===typeof arguments[c]?b+G(arguments[c]):b+arguments[c],b=b+" ";return b}var eb=null,ld=!0;function fb(a){!0===ld&&(ld=!1,null===eb&&!0===K.get("logging_enabled")&&md(!0));if(eb){var b=kd.apply(null,arguments);eb(b)}}function nd(a){return function(){fb(a,arguments)}}
	function od(a){if("undefined"!==typeof console){var b="WILDDOG INTERNAL ERROR: "+kd.apply(null,arguments);"undefined"!==typeof console.error?console.error(b):console.log(b)}}function pd(a){var b=kd.apply(null,arguments);throw Error("WILDDOG FATAL ERROR: "+b);}function S(a){if("undefined"!==typeof console){var b="WILDDOG WARNING: "+kd.apply(null,arguments);"undefined"!==typeof console.warn?console.warn(b):console.log(b)}}
	function Tb(a){var b="",c="",d="",e="",f=!0,g="https",k=443;if(p(a)){var l=a.indexOf("//");0<=l&&(g=a.substring(0,l-1),a=a.substring(l+2));l=a.indexOf("/");-1===l&&(l=a.length);b=a.substring(0,l);e="";a=a.substring(l).split("/");for(l=0;l<a.length;l++)if(0<a[l].length){var m=a[l];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(u){}e+="/"+m}a=b.split(".");3===a.length?(c=a[1],d=a[0].toLowerCase()):2===a.length&&(c=a[0]);l=b.indexOf(":");0<=l&&(f="https"===g||"wss"===g,k=b.substring(l+1),isFinite(k)&&
	(k=String(k)),k=p(k)?/^\s*-?0x/i.test(k)?parseInt(k,16):parseInt(k,10):NaN)}return{host:b,port:k,domain:c,le:d,eb:f,scheme:g,Bb:e}}function qd(a){return fa(a)&&(a!=a||a==Number.POSITIVE_INFINITY||a==Number.NEGATIVE_INFINITY)}function wa(a,b){if(a===b)return 0;if("[MIN_NAME]"===a||"[MAX_NAME]"===b)return-1;if("[MIN_NAME]"===b||"[MAX_NAME]"===a)return 1;var c=rd(a),d=rd(b);return null!==c?null!==d?0==c-d?a.length-b.length:c-d:-1:null!==d?1:a<b?-1:1}
	function sd(a){if("object"!==typeof a||null===a)return G(a);var b=[],c;for(c in a)b.push(c);b.sort();c="{";for(var d=0;d<b.length;d++)0!==d&&(c+=","),c+=G(b[d]),c+=":",c+=sd(a[b[d]]);return c+"}"}function td(a,b){if(ea(a))for(var c=0;c<a.length;++c)b(c,a[c]);else P(a,b)}
	function ud(a){C(!qd(a),"Invalid JSON number");var b,c,d,e;0===a?(d=c=0,b=-Infinity===1/a?1:0):(b=0>a,a=Math.abs(a),a>=Math.pow(2,-1022)?(d=Math.min(Math.floor(Math.log(a)/Math.LN2),1023),c=d+1023,d=Math.round(a*Math.pow(2,52-d)-Math.pow(2,52))):(c=0,d=Math.round(a/Math.pow(2,-1074))));e=[];for(a=52;a;--a)e.push(d%2?1:0),d=Math.floor(d/2);for(a=11;a;--a)e.push(c%2?1:0),c=Math.floor(c/2);e.push(b?1:0);e.reverse();b=e.join("");c="";for(a=0;64>a;a+=8)d=parseInt(b.substr(a,8),2).toString(16),1===d.length&&
	(d="0"+d),c+=d;return c.toLowerCase()}var wd=/^-?\d{1,10}$/;function rd(a){return wd.test(a)&&(a=Number(a),-2147483648<=a&&2147483647>=a)?a:null}function gb(a){try{a()}catch(b){setTimeout(function(){S("Exception was thrown by user callback.",b.stack||"");throw b;},Math.floor(0))}}function T(a,b){if(ga(a)){var c=Array.prototype.slice.call(arguments,1).slice();gb(function(){a.apply(null,c)})}};function xd(a,b,c){this.type=yd;this.source=a;this.path=b;this.children=c}xd.prototype.Tb=function(a){if(this.path.j())return a=this.children.subtree(new z(a)),a.j()?null:a.value?new sa(this.source,t,a.value):new xd(this.source,t,a);C(B(this.path)===a,"Can't get a merge for a child not on the path of the operation");return new xd(this.source,r(this.path),this.children)};xd.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};var ta=0,yd=1,oa=2,ra=3;function zd(){}zd.prototype.source;zd.prototype.type;zd.prototype.path;function Ad(a,b,c,d){this.Lc=a;this.od=b;this.cb=c;this.fd=d;C(!d||b,"Tagged queries must be from server.")}var pa=new Ad(!0,!1,null,!1),Bd=new Ad(!1,!0,null,!1);Ad.prototype.toString=function(){return this.Lc?"user":this.fd?"server(queryID="+this.cb+")":"server"};function Cd(){}Cd.f;var Dd={};function Ed(a){return q(a.compare,a)}Cd.prototype.jc=function(a,b){return 0!==this.compare(new w("[MIN_NAME]",a),new w("[MIN_NAME]",b))};Cd.prototype.Rb=function(){return Fd};function Gd(a){this.f=a}la(Gd,Cd);h=Gd.prototype;h.Nb=function(a){return!a.R(this.f).j()};h.compare=function(a,b){var c=a.node.R(this.f),d=b.node.R(this.f),c=c.nb(d);return 0===c?wa(a.name,b.name):c};h.Ob=function(a,b){var c=D(a),c=O.U(this.f,c);return new w(b,c)};
	h.Pb=function(){var a=O.U(this.f,Hd);return new w("[MAX_NAME]",a)};h.toString=function(){return this.f};function Id(){}la(Id,Cd);h=Id.prototype;h.compare=function(a,b){var c=a.node.K(),d=b.node.K(),c=c.nb(d);return 0===c?wa(a.name,b.name):c};h.Nb=function(a){return!a.K().j()};h.jc=function(a,b){return!a.K().ba(b.K())};h.Rb=function(){return Fd};h.Pb=function(){return new w("[MAX_NAME]",new Ma("[PRIORITY-POST]",Hd))};h.Ob=function(a,b){var c=D(a);return new w(b,new Ma("[PRIORITY-POST]",c))};
	h.toString=function(){return".priority"};var E=new Id;function Jd(){}la(Jd,Cd);h=Jd.prototype;h.compare=function(a,b){return wa(a.name,b.name)};h.Nb=function(){throw gd("KeyIndex.isDefinedOn not expected to be called.");};h.jc=function(){return!1};h.Rb=function(){return Fd};h.Pb=function(){return new w("[MAX_NAME]",O)};h.Ob=function(a){C(p(a),"KeyIndex indexValue must always be a string.");return new w(a,O)};h.toString=function(){return".key"};var Kd=new Jd;function Ld(){}la(Ld,Cd);h=Ld.prototype;
	h.compare=function(a,b){var c=a.node.nb(b.node);return 0===c?wa(a.name,b.name):c};h.Nb=function(){return!0};h.jc=function(a,b){return!a.ba(b)};h.Rb=function(){return Fd};h.Pb=function(){return Md};h.Ob=function(a,b){var c=D(a);return new w(b,c)};h.toString=function(){return".value"};var Nd=new Ld;function Od(a,b){this.f=a;this.vb=b}Od.prototype.get=function(a){var b=J(this.f,a);if(!b)throw Error("No index defined for "+a);return b===Dd?null:b};function Pd(a,b,c){var d=ec(a.f,function(d,f){var g=J(a.vb,f);C(g,"Missing index implementation for "+f);if(d===Dd){if(g.Nb(b.node)){for(var k=[],l=c.rb(ua),m=Q(l);m;)m.name!=b.name&&k.push(m),m=Q(l);k.push(b);return Qd(k,Ed(g))}return Dd}g=c.get(b.name);k=d;g&&(k=k.remove(new w(b.name,g)));return k.Ha(b,b.node)});return new Od(d,a.vb)}
	function Rd(a,b,c){var d=ec(a.f,function(a){if(a===Dd)return a;var d=c.get(b.name);return d?a.remove(new w(b.name,d)):a});return new Od(d,a.vb)}var Sd=new Od({".priority":Dd},{".priority":E});function Ma(a,b){this.L=a;C(n(this.L)&&null!==this.L,"LeafNode shouldn't be created with null/undefined value.");this.ga=b||O;Td(this.ga);this.f=null}h=Ma.prototype;h.S=function(){return!0};h.K=function(){return this.ga};h.da=function(a){return new Ma(this.L,a)};h.R=function(a){return".priority"===a?this.ga:O};h.ja=function(a){return a.j()?this:".priority"===B(a)?this.ga:O};h.xa=function(){return!1};h.Pc=function(){return null};
	h.U=function(a,b){return".priority"===a?this.da(b):b.j()&&".priority"!==a?this:O.U(a,b).da(this.ga)};h.N=function(a,b){var c=B(a);if(null===c)return b;if(b.j()&&".priority"!==c)return this;C(".priority"!==c||1===Ba(a),".priority must be the last token in a path");return this.U(c,O.N(r(a),b))};h.j=function(){return!1};h.Sa=function(){return 0};h.O=function(a){return a&&!this.K().j()?{".value":this.wa(),".priority":this.K().O()}:this.wa()};
	h.hash=function(){if(null===this.f){var a="";this.ga.j()||(a+="priority:"+Ud(this.ga.O())+":");var b=typeof this.L,a=a+(b+":"),a="number"===b?a+ud(this.L):a+this.L;this.f=jd(a)}return this.f};h.wa=function(){return this.L};h.nb=function(a){if(a===O)return 1;if(a instanceof Vd)return-1;C(a.S(),"Unknown node type");var b=typeof a.L,c=typeof this.L,d=yb(Wd,b),e=yb(Wd,c);C(0<=d,"Unknown leaf type: "+b);C(0<=e,"Unknown leaf type: "+c);return d===e?"object"===c?0:this.L<a.L?-1:this.L===a.L?0:1:e-d};
	var Wd=["object","boolean","number","string"];Ma.prototype.Na=function(){return this};Ma.prototype.xb=function(){return!0};Ma.prototype.ba=function(a){return a===this?!0:a.S()?this.L===a.L&&this.ga.ba(a.ga):!1};Ma.prototype.toString=function(){return G(this.O(!0))};function Vd(a,b,c){this.C=a;(this.ga=b)&&Td(this.ga);a.j()&&C(!this.ga||this.ga.j(),"An empty node cannot have a priority");this.f=c;this.g=null}h=Vd.prototype;h.S=function(){return!1};h.K=function(){return this.ga||O};h.da=function(a){return this.C.j()?this:new Vd(this.C,a,this.f)};h.R=function(a){if(".priority"===a)return this.K();a=this.C.get(a);return null===a?O:a};h.ja=function(a){var b=B(a);return null===b?this:this.R(b).ja(r(a))};h.xa=function(a){return null!==this.C.get(a)};
	h.U=function(a,b){C(b,"We should always be passing snapshot nodes");if(".priority"===a)return this.da(b);var c=new w(a,b),d,e;b.j()?(d=this.C.remove(a),c=Rd(this.f,c,this.C)):(d=this.C.Ha(a,b),c=Pd(this.f,c,this.C));e=d.j()?O:this.ga;return new Vd(d,e,c)};h.N=function(a,b){var c=B(a);if(null===c)return b;C(".priority"!==B(a)||1===Ba(a),".priority must be the last token in a path");var d=this.R(c).N(r(a),b);return this.U(c,d)};h.j=function(){return this.C.j()};h.Sa=function(){return this.C.count()};
	var Xd=/^(0|[1-9]\d*)$/;h=Vd.prototype;h.O=function(a){if(this.j())return null;var b={},c=0,d=0,e=!0;this.Y(E,function(f,g){b[f]=g.O(a);c++;e&&Xd.test(f)?d=Math.max(d,Number(f)):e=!1});if(!a&&e&&d<2*c){var f=[],g;for(g in b)f[g]=b[g];return f}a&&!this.K().j()&&(b[".priority"]=this.K().O());return b};h.hash=function(){if(null===this.g){var a="";this.K().j()||(a+="priority:"+Ud(this.K().O())+":");this.Y(E,function(b,c){var d=c.hash();""!==d&&(a+=":"+b+":"+d)});this.g=""===a?"":jd(a)}return this.g};
	h.Pc=function(a,b,c){return(c=Yd(this,c))?(a=Gc(c,new w(a,b)))?a.name:null:Gc(this.C,a)};function Zd(a,b){var c;c=(c=Yd(a,b))?(c=c.Qb())&&c.name:a.C.Qb();return c?new w(c,a.C.get(c)):null}function $d(a,b){var c;c=(c=Yd(a,b))?(c=c.yb())&&c.name:a.C.yb();return c?new w(c,a.C.get(c)):null}h.Y=function(a,b){var c=Yd(this,a);return c?c.ka(function(a){return b(a.name,a.node)}):this.C.ka(b)};h.rb=function(a){return this.sb(a.Rb(),a)};
	h.sb=function(a,b){var c=Yd(this,b);if(c)return c.sb(a,function(a){return a});for(var c=this.C.sb(a.name,ua),d=Ic(c);null!=d&&0>b.compare(d,a);)Q(c),d=Ic(c);return c};h.qd=function(a){return this.tb(a.Pb(),a)};h.tb=function(a,b){var c=Yd(this,b);if(c)return c.tb(a,function(a){return a});for(var c=this.C.tb(a.name,ua),d=Ic(c);null!=d&&0<b.compare(d,a);)Q(c),d=Ic(c);return c};h.nb=function(a){return this.j()?a.j()?0:-1:a.S()||a.j()?1:a===Hd?-1:0};
	h.Na=function(a){if(a===Kd||lc(this.f.vb,a.toString()))return this;var b=this.f,c=this.C;C(a!==Kd,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var d=[],e=!1,c=c.rb(ua),f=Q(c);f;)e=e||a.Nb(f.node),d.push(f),f=Q(c);var g;e?g=Qd(d,Ed(a)):g=Dd;d=a.toString();e=za(b.vb);e[d]=a;a=za(b.f);a[d]=g;return new Vd(this.C,this.ga,new Od(a,e))};h.xb=function(a){return a===Kd||lc(this.f.vb,a.toString())};
	h.ba=function(a){if(a===this)return!0;if(a.S())return!1;if(this.K().ba(a.K())&&this.C.count()===a.C.count()){var b=this.rb(E);a=a.rb(E);for(var c=Q(b),d=Q(a);c&&d;){if(c.name!==d.name||!c.node.ba(d.node))return!1;c=Q(b);d=Q(a)}return null===c&&null===d}return!1};function Yd(a,b){return b===Kd?null:a.f.get(b.toString())}h.toString=function(){return G(this.O(!0))};function D(a,b){if(null===a)return O;var c=null;"object"===typeof a&&".priority"in a?c=a[".priority"]:"undefined"!==typeof b&&(c=b);C(null===c||"string"===typeof c||"number"===typeof c||"object"===typeof c&&".sv"in c,"Invalid priority type found: "+typeof c);"object"===typeof a&&".value"in a&&null!==a[".value"]&&(a=a[".value"]);if("object"!==typeof a||".sv"in a)return new Ma(a,D(c));if(a instanceof Array){var d=O,e=a;P(e,function(a,b){if(x(e,b)&&"."!==b.substring(0,1)){var c=D(a);if(c.S()||!c.j())d=
	d.U(b,c)}});return d.da(D(c))}var f=[],g=!1,k=a;lb(k,function(a){if("string"!==typeof a||"."!==a.substring(0,1)){var b=D(k[a]);b.j()||(g=g||!b.K().j(),f.push(new w(a,b)))}});if(0==f.length)return O;var l=Qd(f,va,function(a){return a.name},xa);if(g){var m=Qd(f,Ed(E));return new Vd(l,D(c),new Od({".priority":m},{".priority":E}))}return new Vd(l,D(c),Sd)}var ae=Math.log(2);
	function be(a){this.count=parseInt(Math.log(a+1)/ae,10);this.ld=this.count-1;this.Qd=a+1&parseInt(Array(this.count+1).join("1"),2)}function ce(a){var b=!(a.Qd&1<<a.ld);a.ld--;return b}
	function Qd(a,b,c,d){function e(b,d){var f=d-b;if(0==f)return null;if(1==f){var m=a[b],u=c?c(m):m;return new Jc(u,m.node,Fc,null,null)}var m=parseInt(f/2,10)+b,f=e(b,m),y=e(m+1,d),m=a[m],u=c?c(m):m;return new Jc(u,m.node,Fc,f,y)}a.sort(b);var f=function(b){function d(b,g){var k=u-b,y=u;u-=b;var y=e(k+1,y),k=a[k],H=c?c(k):k,y=new Jc(H,k.node,g,null,y);f?f.left=y:m=y;f=y}for(var f=null,m=null,u=a.length,y=0;y<b.count;++y){var H=ce(b),vd=Math.pow(2,b.count-(y+1));H?d(vd,Fc):(d(vd,Fc),d(vd,Kc))}return m}(new be(a.length));
	return null!==f?new Dc(d||b,f):new Dc(d||b)}function Ud(a){return"number"===typeof a?"number:"+ud(a):"string:"+a}function Td(a){if(a.S()){var b=a.O();C("string"===typeof b||"number"===typeof b||"object"===typeof b&&x(b,".sv"),"Priority must be a string or number.")}else C(a===Hd||a.j(),"priority of unexpected type.");C(a===Hd||a.K().j(),"Priority nodes can't have a priority of their own.")}var O=new Vd(new Dc(xa),null,Sd);function de(){Vd.call(this,new Dc(xa),O,Sd)}la(de,Vd);h=de.prototype;
	h.nb=function(a){return a===this?0:1};h.ba=function(a){return a===this};h.K=function(){return this};h.R=function(){return O};h.j=function(){return!1};var Hd=new de,Fd=new w("[MIN_NAME]",O),Md=new w("[MAX_NAME]",Hd);function ee(){this.set={}}h=ee.prototype;h.add=function(a,b){this.set[a]=null!==b?b:!0};h.contains=function(a){return x(this.set,a)};h.get=function(a){return this.contains(a)?this.set[a]:void 0};h.remove=function(a){delete this.set[a]};h.j=function(){return Wb(this.set)};h.count=function(){return gc(this.set)};function fe(a,b){P(a.set,function(a,d){b(d,a)})};function Ja(){this.C=this.L=null}Ja.prototype.find=function(a){if(null!=this.L)return this.L.ja(a);if(a.j()||null==this.C)return null;var b=B(a);a=r(a);return this.C.contains(b)?this.C.get(b).find(a):null};Ja.prototype.Db=function(a,b){if(a.j())this.L=b,this.C=null;else if(null!==this.L)this.L=this.L.N(a,b);else{null==this.C&&(this.C=new ee);var c=B(a);this.C.contains(c)||this.C.add(c,new Ja);c=this.C.get(c);a=r(a);c.Db(a,b)}};
	function ge(a,b){if(b.j())return a.L=null,a.C=null,!0;if(null!==a.L){if(a.L.S())return!1;var c=a.L;a.L=null;c.Y(E,function(b,c){a.Db(new z(b),c)});return ge(a,b)}return null!==a.C?(c=B(b),b=r(b),a.C.contains(c)&&ge(a.C.get(c),b)&&a.C.remove(c),a.C.j()?(a.C=null,!0):!1):!0}function Ka(a,b,c){null!==a.L?c(b,a.L):a.Y(function(a,e){var f=new z(b.toString()+"/"+a);Ka(e,f,c)})}Ja.prototype.Y=function(a){null!==this.C&&fe(this.C,function(b,c){a(b,c)})};function he(a){C(ea(a)&&0<a.length,"Requires a non-empty array");this.ua=a;this.m={}}he.prototype.B=function(a,b){for(var c=this.m[a]||[],d=0;d<c.length;d++)c[d].Lb.apply(c[d].context,Array.prototype.slice.call(arguments,1))};he.prototype.bb=function(a,b,c){ie(this,a);this.m[a]=this.m[a]||[];this.m[a].push({Lb:b,context:c});(a=this.Oc(a))&&b.apply(c,a)};he.prototype.Ab=function(a,b,c){ie(this,a);a=this.m[a]||[];for(var d=0;d<a.length;d++)if(a[d].Lb===b&&(!c||c===a[d].context)){a.splice(d,1);break}};
	function ie(a,b){C(tc(a.ua,function(a){return a===b}),"Unknown event: "+b)};function je(a,b){this.value=a;this.children=b||ke}var ke=new Dc(function(a,b){return a===b?0:a<b?-1:1});function le(a){var b=me;P(a,function(a,d){b=b.set(new z(d),a)});return b}h=je.prototype;h.j=function(){return null===this.value&&this.children.j()};function ne(a,b,c){if(null!=a.value&&c(a.value))return{path:t,value:a.value};if(b.j())return null;var d=B(b);a=a.children.get(d);return null!==a?(b=ne(a,r(b),c),null!=b?{path:(new z(d)).I(b.path),value:b.value}:null):null}
	function oe(a,b){return ne(a,b,function(){return!0})}h.subtree=function(a){if(a.j())return this;var b=this.children.get(B(a));return null!==b?b.subtree(r(a)):me};h.set=function(a,b){if(a.j())return new je(b,this.children);var c=B(a),d=(this.children.get(c)||me).set(r(a),b),c=this.children.Ha(c,d);return new je(this.value,c)};
	h.remove=function(a){if(a.j())return this.children.j()?me:new je(null,this.children);var b=B(a),c=this.children.get(b);return c?(a=c.remove(r(a)),b=a.j()?this.children.remove(b):this.children.Ha(b,a),null===this.value&&b.j()?me:new je(this.value,b)):this};h.get=function(a){if(a.j())return this.value;var b=this.children.get(B(a));return b?b.get(r(a)):null};
	function pe(a,b,c){if(b.j())return c;var d=B(b);b=pe(a.children.get(d)||me,r(b),c);d=b.j()?a.children.remove(d):a.children.Ha(d,b);return new je(a.value,d)}function qe(a,b){return re(a,t,b)}function re(a,b,c){var d={};a.children.ka(function(a,f){d[a]=re(f,b.I(a),c)});return c(b,a.value,d)}function se(a,b,c){return te(a,b,t,c)}function te(a,b,c,d){var e=a.value?d(c,a.value):!1;if(e)return e;if(b.j())return null;e=B(b);return(a=a.children.get(e))?te(a,r(b),c.I(e),d):null}
	function ue(a,b,c){var d=t;if(!b.j()){var e=!0;a.value&&(e=c(d,a.value));!0===e&&(e=B(b),(a=a.children.get(e))&&ve(a,r(b),d.I(e),c))}}function ve(a,b,c,d){if(b.j())return a;a.value&&d(c,a.value);var e=B(b);return(a=a.children.get(e))?ve(a,r(b),c.I(e),d):me}function we(a,b){xe(a,t,b)}function xe(a,b,c){a.children.ka(function(a,e){xe(e,b.I(a),c)});a.value&&c(b,a.value)}function ye(a,b){a.children.ka(function(a,d){d.value&&b(a,d.value)})}var me=new je(null);
	je.prototype.toString=function(){var a={};we(this,function(b,c){a[b.toString()]=c.toString()});return G(a)};function ze(a){this.$=a}var Ae=new ze(new je(null));function Be(a,b,c){if(b.j())return new ze(new je(c));var d=oe(a.$,b);if(null!=d){var e=d.path,d=d.value;b=A(e,b);d=d.N(b,c);return new ze(a.$.set(e,d))}a=pe(a.$,b,new je(c));return new ze(a)}function Ce(a,b,c){var d=a;lb(c,function(a,c){d=Be(d,b.I(a),c)});return d}ze.prototype.qc=function(a){if(a.j())return Ae;a=pe(this.$,a,me);return new ze(a)};function De(a,b){var c=oe(a.$,b);return null!=c?a.$.get(c.path).ja(A(c.path,b)):null}
	function Ee(a){var b=[],c=a.$.value;null!=c?c.S()||c.Y(E,function(a,c){b.push(new w(a,c))}):a.$.children.ka(function(a,c){null!=c.value&&b.push(new w(a,c.value))});return b}function Fe(a,b){if(b.j())return a;var c=De(a,b);return null!=c?new ze(new je(c)):new ze(a.$.subtree(b))}ze.prototype.j=function(){return this.$.j()};ze.prototype.apply=function(a){return Ge(t,this.$,a)};
	function Ge(a,b,c){if(null!=b.value)return c.N(a,b.value);var d=null;b.children.ka(function(b,f){".priority"===b?(C(null!==f.value,"Priority writes must always be leaf nodes"),d=f.value):c=Ge(a.I(b),f,c)});c.ja(a).j()||null===d||(c=c.N(a.I(".priority"),d));return c};ma.se;function He(){this.f=Ae;this.g=[];this.m=-1}h=He.prototype;
	h.qc=function(a){var b=uc(this.g,function(b){return b.zc===a});C(0<=b,"removeWrite called with nonexistent writeId.");var c=this.g[b];this.g.splice(b,1);for(var d=c.visible,e=!1,f=this.g.length-1;d&&0<=f;){var g=this.g[f];g.visible&&(f>=b&&Ie(g,c.path)?d=!1:c.path.contains(g.path)&&(e=!0));f--}if(d){if(e)this.f=Je(this.g,Ke,t),0<this.g.length?this.m=this.g[this.g.length-1].zc:this.m=-1;else if(c.Da)this.f=this.f.qc(c.path);else{var k=this;P(c.children,function(a,b){k.f=k.f.qc(c.path.I(b))})}return c.path}return null};
	h.ra=function(a,b,c,d){if(c||d){var e=Fe(this.f,a);return!d&&e.j()?b:d||null!=b||null!=De(e,t)?(e=Je(this.g,function(b){return(b.visible||d)&&(!c||!(0<=yb(c,b.zc)))&&(b.path.contains(a)||a.contains(b.path))},a),b=b||O,e.apply(b)):null}e=De(this.f,a);if(null!=e)return e;e=Fe(this.f,a);return e.j()?b:null!=b||null!=De(e,t)?(b=b||O,e.apply(b)):null};
	h.Kb=function(a,b){var c=O,d=De(this.f,a);if(d)d.S()||d.Y(E,function(a,b){c=c.U(a,b)});else if(b){var e=Fe(this.f,a);b.Y(E,function(a,b){var d=Fe(e,new z(a)).apply(b);c=c.U(a,d)});Kb(Ee(e),function(a){c=c.U(a.name,a.node)})}else e=Fe(this.f,a),Kb(Ee(e),function(a){c=c.U(a.name,a.node)});return c};h.Wb=function(a,b,c,d){C(c||d,"Either existingEventSnap or existingServerSnap must exist");a=a.I(b);if(null!=De(this.f,a))return null;a=Fe(this.f,a);return a.j()?d.ja(b):a.apply(d.ja(b))};
	h.Ka=function(a,b,c){a=a.I(b);var d=De(this.f,a);return null!=d?d:Pa(c,b)?Fe(this.f,a).apply(c.o().R(b)):null};h.Gb=function(a){return De(this.f,a)};h.Dc=function(a,b,c,d,e,f){var g;a=Fe(this.f,a);g=De(a,t);if(null==g)if(null!=b)g=a.apply(b);else return[];g=g.Na(f);if(g.j()||g.S())return[];b=[];a=Ed(f);e=e?g.tb(c,f):g.sb(c,f);for(f=Q(e);f&&b.length<d;)0!==a(f,c)&&b.push(f),f=Q(e);return b};
	function Ie(a,b){return a.Da?a.path.contains(b):!!mc(a.children,function(c,d){return a.path.I(d).contains(b)})}function Ke(a){return a.visible}
	function Je(a,b,c){for(var d=Ae,e=0;e<a.length;++e){var f=a[e];if(b(f)){var g=f.path;if(f.Da)c.contains(g)?(g=A(c,g),d=Be(d,g,f.Da)):g.contains(c)&&(g=A(g,c),d=Be(d,t,f.Da.ja(g)));else if(f.children)if(c.contains(g))g=A(c,g),d=Ce(d,g,f.children);else{if(g.contains(c))if(g=A(g,c),g.j())d=Ce(d,t,f.children);else if(f=J(f.children,B(g)))f=f.ja(r(g)),d=Be(d,t,f)}else throw gd("WriteRecord should have .snap or .children");}}return d}function Le(a,b){this.ib=a;this.$=b}h=Le.prototype;
	h.ra=function(a,b,c){return this.$.ra(this.ib,a,b,c)};h.Kb=function(a){return this.$.Kb(this.ib,a)};h.Wb=function(a,b,c){return this.$.Wb(this.ib,a,b,c)};h.Gb=function(a){return this.$.Gb(this.ib.I(a))};h.Dc=function(a,b,c,d,e){return this.$.Dc(this.ib,a,b,c,d,e)};h.Ka=function(a,b){return this.$.Ka(this.ib,a,b)};h.I=function(a){return new Le(this.ib.I(a),this.$)};function Me(){he.call(this,["online"]);this.f=!0;if("undefined"!==typeof window&&"undefined"!==typeof window.addEventListener){var a=this;window.addEventListener("online",function(){a.f||(a.f=!0,a.B("online",!0))},!1);window.addEventListener("offline",function(){a.f&&(a.f=!1,a.B("online",!1))},!1)}}la(Me,he);Me.prototype.Oc=function(a){C("online"===a,"Unknown event type: "+a);return[this.f]};ca(Me);function Ne(){this.children={};this.Gc=0;this.value=null}function Oe(a,b,c){this.m=a?a:"";this.g=b?b:null;this.f=c?c:new Ne}function Pe(a,b){for(var c=b instanceof z?b:new z(b),d=a,e;null!==(e=B(c));)d=new Oe(e,d,J(d.f.children,e)||new Ne),c=r(c);return d}h=Oe.prototype;h.wa=function(){return this.f.value};function Qe(a,b){C("undefined"!==typeof b,"Cannot set value to undefined");a.f.value=b;Re(a)}h.hc=function(){return 0<this.f.Gc};h.j=function(){return null===this.wa()&&!this.hc()};
	h.Y=function(a){var b=this;P(this.f.children,function(c,d){a(new Oe(d,b,c))})};function Se(a,b,c,d){c&&!d&&b(a);a.Y(function(a){Se(a,b,!0,d)});c&&d&&b(a)}function Te(a,b){for(var c=a.parent();null!==c&&!b(c);)c=c.parent()}h.path=function(){return new z(null===this.g?this.m:this.g.path()+"/"+this.m)};h.name=function(){return this.m};h.parent=function(){return this.g};
	function Re(a){if(null!==a.g){var b=a.g,c=a.m,d=a.j(),e=x(b.f.children,c);d&&e?(delete b.f.children[c],b.f.Gc--,Re(b)):d||e||(b.f.children[c]=a.f,b.f.Gc++,Re(b))}};function Ue(){he.call(this,["visible"]);var a,b;"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document.hidden?(b="visibilitychange",a="hidden"):"undefined"!==typeof document.mozHidden?(b="mozvisibilitychange",a="mozHidden"):"undefined"!==typeof document.msHidden?(b="msvisibilitychange",a="msHidden"):"undefined"!==typeof document.webkitHidden&&(b="webkitvisibilitychange",a="webkitHidden"));this.Z=!0;if(b){var c=this;document.addEventListener(b,
	function(){var b=!document[a];b!==c.Z&&(c.Z=b,c.B("visible",b))},!1)}}la(Ue,he);Ue.prototype.Oc=function(a){C("visible"===a,"Unknown event type: "+a);return[this.Z]};ca(Ue);var Ve=function(){var a=0,b=[];return function(c){var d=c===a;a=c;for(var e=Array(8),f=7;0<=f;f--)e[f]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c%64),c=Math.floor(c/64);C(0===c,"Cannot push at time == 0");c=e.join("");if(d){for(f=11;0<=f&&63===b[f];f--)b[f]=0;b[f]++}else for(f=0;12>f;f++)b[f]=Math.floor(64*Math.random());for(f=0;12>f;f++)c+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);C(20===c.length,"nextPushId: Length should be 20.");
	return c}}();function We(){this.f={}}
	function Xe(a,b){var c=b.type,d=b.La;C("child_added"==c||"child_changed"==c||"child_removed"==c,"Only child changes supported for tracking");C(".priority"!==d,"Only non-priority child changes can be tracked.");var e=J(a.f,d);if(e){var f=e.type;if("child_added"==c&&"child_removed"==f)a.f[d]=new F("child_changed",b.Ea,d,e.Ea);else if("child_removed"==c&&"child_added"==f)delete a.f[d];else if("child_removed"==c&&"child_changed"==f)a.f[d]=new F("child_removed",e.Vc,d);else if("child_changed"==c&&"child_added"==
	f)a.f[d]=new F("child_added",b.Ea,d);else if("child_changed"==c&&"child_changed"==f)a.f[d]=new F("child_changed",b.Ea,d,e.Vc);else throw gd("Illegal combination of changes: "+b+" occurred after "+e);}else a.f[d]=b};function Ye(a){this.g=a;this.u=a.F.W()}function Ze(a,b,c,d){var e=[],f=[];Kb(b,function(b){"child_changed"===b.type&&a.u.jc(b.Vc,b.Ea)&&f.push(new F("child_moved",b.Ea,b.La))});$e(a,e,"child_removed",b,d,c);$e(a,e,"child_added",b,d,c);$e(a,e,"child_moved",f,d,c);$e(a,e,"child_changed",b,d,c);$e(a,e,Ra,b,d,c);return e}function $e(a,b,c,d,e,f){d=pc(d,function(a){return a.type===c});wc(d,q(a.f,a));Kb(d,function(c){var d=af(a,c,f);Kb(e,function(e){e.$c(c.type)&&b.push(e.createEvent(d,a.g))})})}
	function af(a,b,c){"value"!==b.type&&"child_removed"!==b.type&&(b.pc=c.Pc(b.La,b.Ea,a.u));return b}Ye.prototype.f=function(a,b){if(null==a.La||null==b.La)throw gd("Should only compare child_ events.");return this.u.compare(new w(a.La,a.Ea),new w(b.La,b.Ea))};function bf(){}bf.prototype.$c;bf.prototype.createEvent;bf.prototype.Ra;bf.prototype.Hc;bf.prototype.matches;bf.prototype.Qc;function cf(a,b,c){this.lb=a;this.Va=b;this.Wa=c||null}h=cf.prototype;h.$c=function(a){return"value"===a};h.createEvent=function(a,b){var c=b.F.W();return new Xa("value",this,new U(a.Ea,b.Cb(),c))};
	h.Ra=function(a){var b=this.Wa;if("cancel"===a.gc()){C(this.Va,"Raising a cancel event on a listener with no cancel callback");var c=this.Va;return function(){c.call(b,a.error)}}var d=this.lb;return function(){d.call(b,a.sc)}};h.Hc=function(a,b){return this.Va?new Ya(this,a,b):null};h.matches=function(a){return a instanceof cf?a.lb&&this.lb?a.lb===this.lb&&a.Wa===this.Wa:!0:!1};h.Qc=function(){return null!==this.lb};function df(a,b,c){this.ia=a;this.Va=b;this.Wa=c}h=df.prototype;
	h.$c=function(a){a="children_added"===a?"child_added":a;return kc(this.ia,"children_removed"===a?"child_removed":a)};h.Hc=function(a,b){return this.Va?new Ya(this,a,b):null};h.createEvent=function(a,b){C(null!=a.La,"Child events should have a childName.");var c=b.Cb().I(a.La);return new Xa(a.type,this,new U(a.Ea,c,b.F.W()),a.pc)};
	h.Ra=function(a){var b=this.Wa;if("cancel"===a.gc()){C(this.Va,"Raising a cancel event on a listener with no cancel callback");var c=this.Va;return function(){c.call(b,a.error)}}var d=this.ia[a.ec];return function(){d.call(b,a.sc,a.pc)}};
	h.matches=function(a){if(a instanceof df){if(!this.ia||!a.ia)return!0;if(this.Wa===a.Wa){var b=gc(a.ia);if(b===gc(this.ia)){if(1===b){var b=hc(a.ia),c=hc(this.ia);return c===b&&(!a.ia[b]||!this.ia[c]||a.ia[b]===this.ia[c])}return fc(this.ia,function(b,c){return a.ia[c]===b})}}}return!1};h.Qc=function(){return null!==this.ia};function ef(a,b){this.M=a;this.f=b}function ff(a,b,c,d){return new ef(new Na(b,c,d),a.f)}function gf(a){return a.M.ea?a.M.o():null}ef.prototype.G=function(){return this.f};function Va(a){return a.f.ea?a.f.o():null};function hf(a,b){this.yc=a;this.Rd=b}function jf(a){this.P=a}
	jf.prototype.Oa=function(a,b,c,d){var e=new We,f;if(b.type===ta)b.source.Lc?c=kf(this,a,b.path,b.Da,c,d,e):(C(b.source.od,"Unknown source."),f=b.source.fd,c=lf(this,a,b.path,b.Da,c,d,f,e));else if(b.type===yd)b.source.Lc?c=mf(this,a,b.path,b.children,c,d,e):(C(b.source.od,"Unknown source."),f=b.source.fd,c=nf(this,a,b.path,b.children,c,d,f,e));else if(b.type===oa)if(b.ad)if(f=b.path,null!=c.Gb(f))c=a;else{b=new Ua(c,a,d);d=a.M.o();if(f.j()||".priority"===B(f))Oa(a.G())?b=c.ra(Va(a)):(b=a.G().o(),
	C(b instanceof Vd,"serverChildren would be complete if leaf node"),b=c.Kb(b)),b=this.P.qa(d,b,e);else{f=B(f);var g=c.Ka(f,a.G());null==g&&Pa(a.G(),f)&&(g=d.R(f));b=null!=g?this.P.N(d,f,g,b,e):a.M.o().xa(f)?this.P.N(d,f,O,b,e):d;b.j()&&Oa(a.G())&&(d=c.ra(Va(a)),d.S()&&(b=this.P.qa(b,d,e)))}d=Oa(a.G())||null!=c.Gb(t);c=ff(a,b,d,this.P.Ba())}else c=of(this,a,b.path,c,d,e);else if(b.type===ra)d=b.path,b=a.G(),f=b.o(),g=b.ea||d.j(),c=pf(this,new ef(a.M,new Na(f,g,b.pb)),d,c,Ta,e);else throw gd("Unknown operation type: "+
	b.type);e=ic(e.f);d=c;b=d.M;b.ea&&(f=b.o().S()||b.o().j(),g=gf(a),(0<e.length||!a.M.ea||f&&!b.o().ba(g)||!b.o().K().ba(g.K()))&&e.push(Qa(gf(d))));return new hf(c,e)};
	function pf(a,b,c,d,e,f){var g=b.M;if(null!=d.Gb(c))return b;var k;if(c.j())C(Oa(b.G()),"If change path is empty, we must have complete server data"),b.G().pb?(e=Va(b),d=d.Kb(e instanceof Vd?e:O)):d=d.ra(Va(b)),f=a.P.qa(b.M.o(),d,f);else{var l=B(c);if(".priority"==l)C(1==Ba(c),"Can't have a priority with additional path components"),f=g.o(),k=b.G().o(),d=d.Wb(c,f,k),f=null!=d?a.P.da(f,d):g.o();else{var m=r(c);Pa(g,l)?(k=b.G().o(),d=d.Wb(c,g.o(),k),d=null!=d?g.o().R(l).N(m,d):g.o().R(l)):d=d.Ka(l,
	b.G());f=null!=d?a.P.N(g.o(),l,d,e,f):g.o()}}return ff(b,f,g.ea||c.j(),a.P.Ba())}function lf(a,b,c,d,e,f,g,k){var l=b.G();g=g?a.P:a.P.qb();if(c.j())d=g.qa(l.o(),d,null);else if(g.Ba()&&!l.pb)d=l.o().N(c,d),d=g.qa(l.o(),d,null);else{var m=B(c);if((c.j()?!l.ea||l.pb:!Pa(l,B(c)))&&1<Ba(c))return b;d=l.o().R(m).N(r(c),d);d=".priority"==m?g.da(l.o(),d):g.N(l.o(),m,d,Ta,null)}l=l.ea||c.j();b=new ef(b.M,new Na(d,l,g.Ba()));return pf(a,b,c,e,new Ua(e,b,f),k)}
	function kf(a,b,c,d,e,f,g){var k=b.M;e=new Ua(e,b,f);if(c.j())d=a.P.qa(b.M.o(),d,g),a=ff(b,d,!0,a.P.Ba());else if(f=B(c),".priority"===f)d=a.P.da(b.M.o(),d),a=ff(b,d,k.ea,k.pb);else{c=r(c);var l=k.o().R(f),m;if(c.j())m=d;else{var u=e.pd(f);null!=u?m=".priority"===Ca(c)&&u.ja(c.parent()).j()?u:u.N(c,d):m=O}l.ba(m)?a=b:(d=a.P.N(k.o(),f,m,e,g),a=ff(b,d,k.ea,a.P.Ba()))}return a}
	function mf(a,b,c,d,e,f,g){var k=b;we(d,function(d,m){var u=c.I(d);Pa(b.M,B(u))&&(k=kf(a,k,u,m,e,f,g))});we(d,function(d,m){var u=c.I(d);Pa(b.M,B(u))||(k=kf(a,k,u,m,e,f,g))});return k}function qf(a,b){we(b,function(b,d){a=a.N(b,d)});return a}
	function nf(a,b,c,d,e,f,g,k){if(b.G().o().j()&&!Oa(b.G()))return b;var l=b;c=c.j()?d:pe(me,c,d);var m=b.G().o();c.children.ka(function(c,d){if(m.xa(c)){var H=b.G().o().R(c),H=qf(H,d);l=lf(a,l,new z(c),H,e,f,g,k)}});c.children.ka(function(c,d){var H=!Oa(b.G())&&null==d.value;m.xa(c)||H||(H=b.G().o().R(c),H=qf(H,d),l=lf(a,l,new z(c),H,e,f,g,k))});return l}
	function of(a,b,c,d,e,f){if(null!=d.Gb(c))return b;var g=new Ua(d,b,e),k=e=b.M.o();if(Oa(b.G())){if(c.j())e=d.ra(Va(b)),k=a.P.qa(b.M.o(),e,f);else if(".priority"===B(c)){var l=d.Ka(B(c),b.G());null==l||e.j()||e.K().ba(l)||(k=a.P.da(e,l))}else l=B(c),e=d.Ka(l,b.G()),null!=e&&(k=a.P.N(b.M.o(),l,e,g,f));e=!0}else if(b.M.ea||c.j())k=e,e=b.M.o(),e.S()||e.Y(E,function(c){var e=d.Ka(c,b.G());null!=e&&(k=a.P.N(k,c,e,g,f))}),e=b.M.ea;else{l=B(c);if(1==Ba(c)||Pa(b.M,l))c=d.Ka(l,b.G()),null!=c&&(k=a.P.N(e,l,
	c,g,f));e=!1}return ff(b,k,e,a.P.Ba())};function rf(a,b){this.za=a;var c=a.F,d=new sf(c.W()),c=tf(c)?new sf(c.W()):c.la?new uf(c):new vf(c);this.g=new jf(c);var e=b.G(),f=b.M,g=d.qa(O,e.o(),null),k=c.qa(O,f.o(),null);this.Fa=new ef(new Na(k,f.ea,c.Ba()),new Na(g,e.ea,d.Ba()));this.f=[];this.m=new Ye(a)}function wf(a){return a.za}h=rf.prototype;h.G=function(){return this.Fa.G().o()};h.Qa=function(a){var b=Va(this.Fa);return b&&(tf(this.za.F)||!a.j()&&!b.R(B(a)).j())?b.ja(a):null};h.j=function(){return 0===this.f.length};h.kb=function(a){this.f.push(a)};
	h.Ta=function(a,b){var c=[];if(b){C(null==a,"A cancel should cancel all event registrations.");var d=this.za.path;Kb(this.f,function(a){(a=a.Hc(b,d))&&c.push(a)})}if(a){for(var e=[],f=0;f<this.f.length;++f){var g=this.f[f];if(!g.matches(a))e.push(g);else if(a.Qc()){e=e.concat(this.f.slice(f+1));break}}this.f=e}else this.f=[];return c};
	h.Oa=function(a,b,c){a.type===yd&&null!==a.source.cb&&(C(Va(this.Fa),"We should always have a full cache before handling merges"),C(gf(this.Fa),"Missing event cache, even though we have a server cache"));var d=this.Fa;a=this.g.Oa(d,a,b,c);b=this.g;c=a.yc;C(c.M.o().xb(b.P.W()),"Event snap not indexed");C(c.G().o().xb(b.P.W()),"Server snap not indexed");C(Oa(a.yc.G())||!Oa(d.G()),"Once a server snap is complete, it should never go back");this.Fa=a.yc;return xf(this,a.Rd,a.yc.M.o(),null)};
	function yf(a,b){var c=a.Fa.M,d=[];c.o().S()||c.o().Y(E,function(a,b){d.push(new F("child_added",b,a))});c.ea&&d.push(Qa(c.o()));return xf(a,d,c.o(),b)}function xf(a,b,c,d){return Ze(a.m,b,c,d?[d]:a.f)};function zf(){this.f={}}h=zf.prototype;h.j=function(){return Wb(this.f)};h.Oa=function(a,b,c){var d=a.source.cb;if(null!==d)return d=J(this.f,d),C(null!=d,"SyncTree gave us an op for an invalid query."),d.Oa(a,b,c);var e=[];P(this.f,function(d){e=e.concat(d.Oa(a,b,c))});return e};h.kb=function(a,b,c,d,e){var f=a.ta(),g=J(this.f,f);if(!g){var g=c.ra(e?d:null),k=!1;g?k=!0:(d instanceof Vd?g=c.Kb(d):g=O,k=!1);g=new rf(a,new ef(new Na(g,k,!1),new Na(d,e,!1)));this.f[f]=g}g.kb(b);return yf(g,b)};
	h.Ta=function(a,b,c){var d=a.ta(),e=[],f=[],g=null!=Af(this);if("default"===d){var k=this;P(this.f,function(a,d){f=f.concat(a.Ta(b,c));a.j()&&(delete k.f[d],tf(a.za.F)||e.push(a.za))})}else{var l=J(this.f,d);l&&(f=f.concat(l.Ta(b,c)),l.j()&&(delete this.f[d],tf(l.za.F)||e.push(l.za)))}g&&null==Af(this)&&e.push(new V(a.w,a.path));return{he:e,Td:f}};function Bf(a){return pc(ic(a.f),function(a){return!tf(a.za.F)})}h.Qa=function(a){var b=null;P(this.f,function(c){b=b||c.Qa(a)});return b};
	function Cf(a,b){if(tf(b.F))return Af(a);var c=b.ta();return J(a.f,c)}function Af(a){return nc(a.f,function(a){return tf(a.za.F)})||null};ma.pe;function Df(a){this.f=me;this.g=new He;this.H={};this.m={};this.B=a}function Ef(a,b,c,d,e){var f=a.g,g=e;C(d>f.m,"Stacking an older write on top of newer ones");n(g)||(g=!0);f.g.push({path:b,Da:c,zc:d,visible:g});g&&(f.f=Be(f.f,b,c));f.m=d;return e?Ff(a,new sa(pa,b,c)):[]}function Gf(a,b,c,d){var e=a.g;C(d>e.m,"Stacking an older merge on top of newer ones");e.g.push({path:b,children:c,zc:d,visible:!0});e.f=Ce(e.f,b,c);e.m=d;c=le(c);return Ff(a,new xd(pa,b,c))}
	function Hf(a,b,c){c=c||!1;b=a.g.qc(b);return null==b?[]:Ff(a,new na(b,c))}function If(a,b,c){c=le(c);return Ff(a,new xd(Bd,b,c))}function Jf(a,b,c,d){d=Kf(a,d);if(null!=d){var e=Lf(d);d=e.path;e=e.cb;b=A(d,b);c=new sa(new Ad(!1,!0,e,!0),b,c);return Mf(a,d,c)}return[]}function Nf(a,b,c,d){if(d=Kf(a,d)){var e=Lf(d);d=e.path;e=e.cb;b=A(d,b);c=le(c);c=new xd(new Ad(!1,!0,e,!0),b,c);return Mf(a,d,c)}return[]}
	Df.prototype.kb=function(a,b){var c=a.path,d=null,e=!1;ue(this.f,c,function(a,b){var f=A(a,c);d=b.Qa(f);e=e||null!=Af(b);return!d});var f=this.f.get(c);f?(e=e||null!=Af(f),d=d||f.Qa(t)):(f=new zf,this.f=this.f.set(c,f));var g;null!=d?g=!0:(g=!1,d=O,ye(this.f.subtree(c),function(a,b){var c=b.Qa(t);c&&(d=d.U(a,c))}));var k=null!=Cf(f,a);if(!k&&!tf(a.F)){var l=Of(a);C(!kc(this.m,l),"View does not exist, but we have a tag");var m=Pf++;this.m[l]=m;this.H["_"+m]=l}g=f.kb(a,b,new Le(c,this.g),d,g);k||e||
	(f=Cf(f,a),g=g.concat(Qf(this,a,f)));return g};
	Df.prototype.Ta=function(a,b,c){var d=a.path,e=this.f.get(d),f=[];if(e&&("default"===a.ta()||null!=Cf(e,a))){f=e.Ta(a,b,c);e.j()&&(this.f=this.f.remove(d));e=f.he;f=f.Td;b=-1!==uc(e,function(a){return tf(a.F)});var g=se(this.f,d,function(a,b){return null!=Af(b)});if(b&&!g&&(d=this.f.subtree(d),!d.j()))for(var d=Rf(d),k=0;k<d.length;++k){var l=d[k],m=l.za,l=Sf(this,l);this.B.cd(m,Tf(this,m),l.ic,l.T)}if(!g&&0<e.length&&!c)if(b)this.B.uc(a,null);else{var u=this;Kb(e,function(a){a.ta();var b=u.m[Of(a)];
	u.B.uc(a,b)})}Uf(this,e)}return f};Df.prototype.ra=function(a,b){var c=this.g,d=se(this.f,a,function(b,c){var d=A(b,a);if(d=c.Qa(d))return d});return c.ra(a,d,b,!0)};function Rf(a){return qe(a,function(a,c,d){if(c&&null!=Af(c))return[Af(c)];var e=[];c&&(e=Bf(c));P(d,function(a){e=e.concat(a)});return e})}function Uf(a,b){for(var c=0;c<b.length;++c){var d=b[c];if(!tf(d.F)){var d=Of(d),e=a.m[d];delete a.m[d];delete a.H["_"+e]}}}
	function Qf(a,b,c){var d=b.path,e=Tf(a,b);c=Sf(a,c);b=a.B.cd(b,e,c.ic,c.T);d=a.f.subtree(d);if(e)C(null==Af(d.value),"If we're adding a query, it shouldn't be shadowed");else for(e=qe(d,function(a,b,c){if(!a.j()&&b&&null!=Af(b))return[wf(Af(b))];var d=[];b&&(d=d.concat(qc(Bf(b),function(a){return a.za})));P(c,function(a){d=d.concat(a)});return d}),d=0;d<e.length;++d)c=e[d],a.B.uc(c,Tf(a,c));return b}
	function Sf(a,b){var c=b.za,d=Tf(a,c);return{ic:function(){return(b.G()||O).hash()},T:function(b){if("ok"===b){if(d){var f=c.path;if(b=Kf(a,d)){var g=Lf(b);b=g.path;g=g.cb;f=A(b,f);f=new qa(new Ad(!1,!0,g,!0),f);b=Mf(a,b,f)}else b=[]}else b=Ff(a,new qa(Bd,c.path));return b}f="Unknown Error";"too_big"===b?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==b?f="Client doesn't have permission to access the desired data.":"unavailable"==b&&
	(f="The service is unavailable");f=Error(b+": "+f);f.code=b.toUpperCase();return a.Ta(c,null,f)}}}function Of(a){return a.path.toString()+"$"+a.ta()}function Lf(a){var b=a.indexOf("$");C(-1!==b&&b<a.length-1,"Bad queryKey.");return{cb:a.substr(b+1),path:new z(a.substr(0,b))}}function Kf(a,b){var c=a.H,d="_"+b;return null!==c&&d in c?c[d]:void 0}function Tf(a,b){var c=Of(b);return J(a.m,c)}var Pf=1;
	function Mf(a,b,c){var d=a.f.get(b);C(d,"Missing sync point for query tag that we're tracking");return d.Oa(c,new Le(b,a.g),null)}function Ff(a,b){return Vf(a,b,a.f,null,new Le(t,a.g))}function Vf(a,b,c,d,e){if(b.path.j())return Wf(a,b,c,d,e);var f=c.get(t);null==d&&null!=f&&(d=f.Qa(t));var g=[],k=B(b.path),l=b.Tb(k);if((c=c.children.get(k))&&l)var m=d?d.R(k):null,k=e.I(k),g=g.concat(Vf(a,l,c,m,k));f&&(g=g.concat(f.Oa(b,e,d)));return g}
	function Wf(a,b,c,d,e){var f=c.get(t);null==d&&null!=f&&(d=f.Qa(t));var g=[];c.children.ka(function(c,f){var m=d?d.R(c):null,u=e.I(c),y=b.Tb(c);y&&(g=g.concat(Wf(a,y,f,m,u)))});f&&(g=g.concat(f.Oa(b,e,d)));return g};function sf(a){this.u=a}h=sf.prototype;h.N=function(a,b,c,d,e){C(a.xb(this.u),"A node must be indexed if only a child is updated");d=a.R(b);if(d.ba(c))return a;null!=e&&(c.j()?a.xa(b)?Xe(e,new F("child_removed",d,b)):C(a.S(),"A child remove without an old child only makes sense on a leaf node"):d.j()?Xe(e,new F("child_added",c,b)):Xe(e,new F("child_changed",c,b,d)));return a.S()&&c.j()?a:a.U(b,c).Na(this.u)};
	h.qa=function(a,b,c){null!=c&&(a.S()||a.Y(E,function(a,e){b.xa(a)||Xe(c,new F("child_removed",e,a))}),b.S()||b.Y(E,function(b,e){if(a.xa(b)){var f=a.R(b);f.ba(e)||Xe(c,new F("child_changed",e,b,f))}else Xe(c,new F("child_added",e,b))}));return b.Na(this.u)};h.da=function(a,b){return a.j()?O:a.da(b)};h.Ba=function(){return!1};h.qb=function(){return this};h.W=function(){return this.u};function vf(a){this.m=new sf(a.W());this.u=a.W();var b;a.na?(b=Xf(a),b=a.W().Ob(Yf(a),b)):b=a.W().Rb();this.g=b;a.oa?(b=Zf(a),a=a.W().Ob($f(a),b)):a=a.W().Pb();this.f=a}h=vf.prototype;h.matches=function(a){return 0>=this.u.compare(this.g,a)&&0>=this.u.compare(a,this.f)};h.N=function(a,b,c,d,e){this.matches(new w(b,c))||(c=O);return this.m.N(a,b,c,d,e)};
	h.qa=function(a,b,c){b.S()&&(b=O);var d=b.Na(this.u),d=d.da(O),e=this;b.Y(E,function(a,b){e.matches(new w(a,b))||(d=d.U(a,O))});return this.m.qa(a,d,c)};h.da=function(a){return a};h.Ba=function(){return!0};h.qb=function(){return this.m};h.W=function(){return this.u};function uf(a){this.f=new vf(a);this.u=a.W();C(a.la,"Only valid if limit has been set");this.ma=a.ma;this.g=!ag(a)}h=uf.prototype;h.N=function(a,b,c,d,e){this.f.matches(new w(b,c))||(c=O);return a.R(b).ba(c)?a:a.Sa()<this.ma?this.f.qb().N(a,b,c,d,e):bg(this,a,b,c,d,e)};
	h.qa=function(a,b,c){var d;if(b.S()||b.j())d=O.Na(this.u);else if(2*this.ma<b.Sa()&&b.xb(this.u)){d=O.Na(this.u);b=this.g?b.tb(this.f.f,this.u):b.sb(this.f.g,this.u);for(var e=0;0<b.Ia.length&&e<this.ma;){var f=Q(b),g;if(g=this.g?0>=this.u.compare(this.f.g,f):0>=this.u.compare(f,this.f.f))d=d.U(f.name,f.node),e++;else break}}else{d=b.Na(this.u);d=d.da(O);var k,l,m;if(this.g){b=d.qd(this.u);k=this.f.f;l=this.f.g;var u=Ed(this.u);m=function(a,b){return u(b,a)}}else b=d.rb(this.u),k=this.f.g,l=this.f.f,
	m=Ed(this.u);for(var e=0,y=!1;0<b.Ia.length;)f=Q(b),!y&&0>=m(k,f)&&(y=!0),(g=y&&e<this.ma&&0>=m(f,l))?e++:d=d.U(f.name,O)}return this.f.qb().qa(a,d,c)};h.da=function(a){return a};h.Ba=function(){return!0};h.qb=function(){return this.f.qb()};h.W=function(){return this.u};
	function bg(a,b,c,d,e,f){var g;if(a.g){var k=Ed(a.u);g=function(a,b){return k(b,a)}}else g=Ed(a.u);C(b.Sa()==a.ma,"");var l=new w(c,d),m=a.g?Zd(b,a.u):$d(b,a.u),u=a.f.matches(l);if(b.xa(c)){var y=b.R(c),m=e.Nc(a.u,m,a.g);null!=m&&m.name==c&&(m=e.Nc(a.u,m,a.g));e=null==m?1:g(m,l);if(u&&!d.j()&&0<=e)return null!=f&&Xe(f,new F("child_changed",d,c,y)),b.U(c,d);null!=f&&Xe(f,new F("child_removed",y,c));b=b.U(c,O);return null!=m&&a.f.matches(m)?(null!=f&&Xe(f,new F("child_added",m.node,m.name)),b.U(m.name,
	m.node)):b}return d.j()?b:u&&0<=g(m,l)?(null!=f&&(Xe(f,new F("child_removed",m.node,m.name)),Xe(f,new F("child_added",d,c))),b.U(c,d).U(m.name,O)):b};function cg(){this.ob=this.oa=this.gb=this.na=this.la=!1;this.ma=0;this.jb="";this.wb=null;this.$a="";this.ub=null;this.Za="";this.u=E}var dg=new cg;function ag(a){return""===a.jb?a.na:"l"===a.jb}function Yf(a){C(a.na,"Only valid if start has been set");return a.wb}function Xf(a){C(a.na,"Only valid if start has been set");return a.gb?a.$a:"[MIN_NAME]"}function $f(a){C(a.oa,"Only valid if end has been set");return a.ub}
	function Zf(a){C(a.oa,"Only valid if end has been set");return a.ob?a.Za:"[MAX_NAME]"}h=cg.prototype;h.W=function(){return this.u};function eg(a){var b=new cg;b.la=a.la;b.ma=a.ma;b.na=a.na;b.wb=a.wb;b.gb=a.gb;b.$a=a.$a;b.oa=a.oa;b.ub=a.ub;b.ob=a.ob;b.Za=a.Za;b.u=a.u;return b}h.Sc=function(a){var b=eg(this);b.la=!0;b.ma=a;b.jb="";return b};h.Tc=function(a){var b=eg(this);b.la=!0;b.ma=a;b.jb="l";return b};h.Uc=function(a){var b=eg(this);b.la=!0;b.ma=a;b.jb="r";return b};
	h.tc=function(a,b){var c=eg(this);c.na=!0;n(a)||(a=null);c.wb=a;null!=b?(c.gb=!0,c.$a=b):(c.gb=!1,c.$a="");return c};h.dc=function(a,b){var c=eg(this);c.oa=!0;n(a)||(a=null);c.ub=a;n(b)?(c.ob=!0,c.Za=b):(c.ye=!1,c.Za="");return c};function fg(a,b){var c=eg(a);c.u=b;return c}function gg(a){var b={};a.na&&(b.sp=a.wb,a.gb&&(b.sn=a.$a));a.oa&&(b.ep=a.ub,a.ob&&(b.en=a.Za));if(a.la){b.l=a.ma;var c=a.jb;""===c&&(c=ag(a)?"l":"r");b.vf=c}a.u!==E&&(b.i=a.u.toString());return b}
	function tf(a){return!(a.na||a.oa||a.la)}function hg(a){var b={};if(tf(a)&&a.u==E)return b;var c;a.u===E?c="$priority":a.u===Nd?c="$value":a.u===Kd?c="$key":(C(a.u instanceof Gd,"Unrecognized index type!"),c=a.u.toString());b.orderBy=G(c);a.na&&(b.startAt=G(a.wb),a.gb&&(b.startAt+=","+G(a.$a)));a.oa&&(b.endAt=G(a.ub),a.ob&&(b.endAt+=","+G(a.Za)));a.la&&(ag(a)?b.limitToFirst=a.ma:b.limitToLast=a.ma);return b}h.toString=function(){return G(gg(this))};function ig(a){this.f=cc()+cc()+cc();this.g=a}
	ig.prototype.open=function(a,b,c){function d(){c&&(c(I("USER_CANCELLED")),c=null)}var e=this,f=Tb(ub),g;b.requestId=this.f;b.redirectTo=f.scheme+"://"+f.host+"/blank/page.html";a+=/\?/.test(a)?"":"?";a+=Jb(b);(g=window.open(a,"_blank","location=no"))&&ga(g.addEventListener)?(g.addEventListener("loadstart",function(a){var b;if(b=a&&a.url)a:{try{var m=document.createElement("a");m.href=a.url;b=m.host===f.host&&"/blank/page.html"===m.pathname;break a}catch(u){}b=!1}b&&(a=Rb(a.url),g.removeEventListener("exit",
	d),g.close(),a=new vb(null,null,{requestId:e.f,requestKey:a}),e.g.requestWithCredential("/auth/session",a,c),c=null)}),g.addEventListener("exit",d)):c(I("TRANSPORT_UNAVAILABLE"))};ig.isAvailable=function(){return!NODE_CLIENT&&ib()};ig.prototype.mb=function(){return"redirect"};function jg(a){if(!a.window_features||"undefined"!==typeof navigator&&(-1!==navigator.userAgent.indexOf("Fennec/")||-1!==navigator.userAgent.indexOf("Firefox/")&&-1!==navigator.userAgent.indexOf("Android")))a.window_features=void 0;a.window_name||(a.window_name="_blank");this.f=a}
	jg.prototype.open=function(a,b,c){function d(a){g&&(document.body.removeChild(g),g=void 0);u&&(u=clearInterval(u));Pb(window,"message",e);Pb(window,"unload",d);if(m&&!a)try{m.close()}catch(b){k.postMessage("die",l)}m=k=void 0}function e(a){if(a.origin===l)try{var b=ob(a.data);"ready"===b.a?k.postMessage(y,l):"error"===b.a?(d(!1),c&&(c(b.d),c=null)):"response"===b.a&&(d(b.forceKeepWindowOpen),c&&(c(null,b.d),c=null))}catch(e){}}var f=kb(),g,k;if(!this.f.relay_url)return c(Error("invalid arguments: origin of url and relay_url must match"));
	var l=Qb(a);if(l!==Qb(this.f.relay_url))c&&setTimeout(function(){c(Error("invalid arguments: origin of url and relay_url must match"))},0);else{f&&(g=document.createElement("iframe"),g.setAttribute("src",this.f.relay_url),g.style.display="none",g.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(g),k=g.contentWindow);a+=(/\?/.test(a)?"":"?")+Jb(b);var m=window.open(a,this.f.window_name,this.f.window_features);k||(k=m);var u=setInterval(function(){m&&m.closed&&(d(!1),c&&(c(I("USER_CANCELLED")),
	c=null))},500),y=G({a:"request",d:b});Ob(window,"unload",d);Ob(window,"message",e)}};
	jg.isAvailable=function(){return!NODE_CLIENT&&"postMessage"in window&&!jb()&&!(ib()||"undefined"!==typeof navigator&&(navigator.userAgent.match(/Windows Phone/)||window.Windows&&/^ms-appx:/.test(location.href))||"undefined"!==typeof navigator&&"undefined"!==typeof window&&(navigator.userAgent.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||navigator.userAgent.match(/CriOS/)||navigator.userAgent.match(/Twitter for iPhone/)||navigator.userAgent.match(/FBAN\/FBIOS/)||window.navigator.standalone))&&
	!("undefined"!==typeof navigator&&navigator.userAgent.match(/PhantomJS/))};jg.prototype.mb=function(){return"popup"};function kg(a){var b={},c={},d={},e="";try{var f=a.split("."),b=ob(id(f[0])||""),c=ob(id(f[1])||""),e=f[2],d=c.d||{};delete c.d}catch(g){}return{ve:b,Yb:c,data:d,xe:e}}function lg(a){a=kg(a).Yb;return"object"===typeof a&&a.hasOwnProperty("iat")?J(a,"iat"):null};function mg(a,b){this.A=nd("p:rest:");this.J=a;this.f=b;this.m=null;this.fa={}}function ng(a,b){if(n(b))return"tag$"+b;var c=a.F;C(tf(c)&&c.u==E,"should have a tag if it's not a default query.");return a.path.toString()}h=mg.prototype;
	h.sd=function(a,b,c,d){var e=a.path.toString();this.A("Listen called for "+e+" "+a.ta());var f=ng(a,c),g={};this.fa[f]=g;a=hg(a.F);var k=this;og(this,e+".json",a,function(a,b){var u=b;404===a&&(a=u=null);null===a&&k.f(e,u,!1,c);J(k.fa,f)===g&&d(a?401==a?"permission_denied":"rest_error:"+a:"ok",null)})};h.zd=function(a,b){var c=ng(a,b);delete this.fa[c]};h.V=function(a,b){this.m=a;var c=kg(a),d=c.data,c=c.Yb&&c.Yb.exp;b&&b("ok",{auth:d,expires:c})};h.wc=function(a){this.m=null;a("ok",null)};h.Wc=function(){};
	h.ud=function(){};h.kc=function(){};h.Hb=function(){};h.td=function(){};h.Yc=function(){};
	function og(a,b,c,d){c=c||{};c.format="export";a.m&&(c.auth=a.m);var e=(a.J.eb?"https://":"http://")+a.J.host+b+"?"+Jb(c);a.A("Sending REST request for "+e);var f=new XMLHttpRequest;f.onreadystatechange=function(){if(d&&4===f.readyState){a.A("REST Response for "+e+" received. status:",f.status,"response:",f.responseText);var b=null;if(200<=f.status&&300>f.status){try{b=ob(f.responseText)}catch(c){S("Failed to parse JSON response for "+e+": "+f.responseText)}d(null,b)}else 401!==f.status&&404!==f.status&&
	S("Got unsuccessful REST response for "+e+" Status: "+f.status),d(f.status);d=null}};f.open("GET",e,!0);f.send()};function pg(a,b){this.g=["session",a.nc,a.zb].join(":");this.f=b}pg.prototype.set=function(a,b){if(!b)if(this.f.length)b=this.f[0];else throw Error("wd.login.SessionManager : No storage options available!");b.set(this.g,a)};pg.prototype.get=function(){var a=qc(this.f,q(this.m,this)),a=pc(a,function(a){return null!==a});wc(a,function(a,c){return lg(c.token)-lg(a.token)});return 0<a.length?a.shift():null};pg.prototype.m=function(a){try{var b=a.get(this.g);if(b&&b.token)return b}catch(c){}return null};
	function qg(a){Kb(a.f,function(b){b.remove(a.g)})};function rg(a,b,c,d){he.call(this,["auth_status"]);this.J=a;this.X=b;this.Z=c;this.Aa=d;this.g=new pg(a,[rb,K]);this.f=null;this.H=!1;sg(this)}la(rg,he);h=rg.prototype;h.Mc=function(){return this.f||null};function sg(a){K.get("redirect_request_id")&&tg(a);var b=a.g.get();b&&b.token?(ug(a,b),a.X(b.token,function(c,d){vg(a,c,d,!1,b.token,b)},function(b,d){wg(a,"resumeSession()",b,d)})):ug(a,null)}
	function xg(a,b,c,d,e,f){"wilddogio-demo.com"===a.J.domain&&S("Wilddog authentication is not supported on demo Wilddogs (*.wilddogio-demo.com). To secure your Wilddog, create a production Wilddog at https://www.wilddog.com.");a.X(b,function(f,k){vg(a,f,k,!0,b,c,d||{},e)},function(b,c){wg(a,"auth()",b,c,f)})}function yg(a,b){qg(a.g);ug(a,null);a.Z(function(a,d){if("ok"===a)T(b,null);else{var e=(a||"error").toUpperCase(),f=e;d&&(f+=": "+d);f=Error(f);f.code=e;T(b,f)}})}
	function vg(a,b,c,d,e,f,g,k){"ok"===b?(d&&(b=c.auth,f.auth=b,f.expires=c.expires,f.token=e,c=null,b&&x(b,"uid")?c=J(b,"uid"):x(f,"uid")&&(c=J(f,"uid")),f.uid=c,c="custom",b&&x(b,"provider")?c=J(b,"provider"):x(f,"provider")&&(c=J(f,"provider")),f.provider=c,qg(a.g),g=g||{},c=rb,"sessionOnly"===g.remember&&(c=K),"none"!==g.remember&&a.g.set(f,c),ug(a,f)),T(k,null,f)):(qg(a.g),ug(a,null),f=a=(b||"error").toUpperCase(),c&&(f+=": "+c),f=Error(f),f.code=a,T(k,f))}
	function wg(a,b,c,d,e){S(b+" was canceled: "+d);qg(a.g);ug(a,null);a=Error(d);a.code=c.toUpperCase();T(e,a)}function zg(a,b,c,d,e){Ag(a);c=new vb(d||{},{},c||{});Bg(a,NODE_CLIENT?[Yb]:[dc,Vb],"/auth/"+b,c,e)}
	function Cg(a,b,c,d){Ag(a);var e=[jg,ig];c=xb(c);"anonymous"===b||"password"===b?setTimeout(function(){T(d,I("TRANSPORT_UNAVAILABLE"))},0):(c.vc.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"===typeof screen?.5*(screen.height-625):0)+",left="+("object"===typeof screen?.5*(screen.width-625):0),c.vc.relay_url=Ub(a.J.zb),c.vc.requestWithCredential=q(a.Eb,a),Bg(a,e,"/auth/"+b,c,d))}
	function tg(a){var b=K.get("redirect_request_id");if(b){var c=K.get("redirect_client_options");K.remove("redirect_request_id");K.remove("redirect_client_options");var d=[dc,Vb],b={requestId:b,requestKey:Rb(document.location.hash)},c=new vb(c,{},b);a.H=!0;try{document.location.hash=document.location.hash.replace(/&__wilddog_request_key=([a-zA-z0-9]*)/,"")}catch(e){}Bg(a,d,"/auth/session",c,function(){this.H=!1}.bind(a))}}
	h.Ic=function(a,b){Ag(this);var c=xb(a);c.Ma._method="POST";this.Eb("/users",c,function(a,c){a?T(b,a):T(b,a,c)})};h.Xc=function(a,b){var c=this;Ag(this);var d="/users/"+encodeURIComponent(a.email),e=xb(a);e.Ma._method="DELETE";this.Eb(d,e,function(a,d){!a&&d&&d.uid&&c.f&&c.f.uid&&c.f.uid===d.uid&&yg(c);T(b,a)})};h.Fc=function(a,b){Ag(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=xb(a);d.Ma._method="PUT";d.Ma.password=a.newPassword;this.Eb(c,d,function(a){T(b,a)})};
	h.Ec=function(a,b){Ag(this);var c="/users/"+encodeURIComponent(a.oldEmail)+"/email",d=xb(a);d.Ma._method="PUT";d.Ma.email=a.newEmail;d.Ma.password=a.password;this.Eb(c,d,function(a){T(b,a)})};h.Zc=function(a,b){Ag(this);var c="/users/"+encodeURIComponent(a.email)+"/password",d=xb(a);d.Ma._method="POST";this.Eb(c,d,function(a){T(b,a)})};h.Eb=function(a,b,c){Dg(this,NODE_CLIENT?[Yb]:[dc,Vb],a,b,c)};
	function Bg(a,b,c,d,e){Dg(a,b,c,d,function(b,c){!b&&c&&c.token&&c.uid?xg(a,c.token,c,d.Zb,function(a,b){a?T(e,a):T(e,null,b)}):T(e,b||I("UNKNOWN_ERROR"))})}
	function Dg(a,b,c,d,e){b=pc(b,function(a){return"function"===typeof a.isAvailable&&a.isAvailable()});0===b.length?setTimeout(function(){T(e,I("TRANSPORT_UNAVAILABLE"))},0):(b=new (b.shift())(d.vc),d=mb(d.Ma),d.v=(NODE_CLIENT?"node-":"js-")+CLIENT_VERSION,d.transport=b.mb(),d.suppress_status_codes=!0,a=Sb()+"/"+a.J.zb+c,b.open(a,d,function(a,b){if(a)T(e,a);else if(b&&b.error){var c=Error(b.error.message);c.code=b.error.code;c.details=b.error.details;T(e,c)}else T(e,null,b)}))}
	function ug(a,b){var c=null!==a.f||null!==b;a.f=b;c&&a.B("auth_status",b);a.Aa(null!==b)}h.Oc=function(a){C("auth_status"===a,'initial event must be of type "auth_status"');return this.H?null:[this.f]};function Ag(a){var b=a.J;if("wilddogio.com"!==b.domain&&"wilddogio-demo.com"!==b.domain&&"auth.wilddog.com"===ub)throw Error("This custom Wilddog server ('"+a.J.domain+"') does not support delegated login.");};function Ea(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b++:2048>d?b+=2:55296<=d&&56319>=d?(b+=4,c++):b+=3}return b};var Eg=/[\[\].#$\/\u0000-\u001F\u007F]/,Fg=/[\[\].#$\u0000-\u001F\u007F]/;function Gg(a){return p(a)&&0!==a.length&&!Eg.test(a)}function Hg(a){return null===a||p(a)||fa(a)&&!qd(a)||ha(a)&&x(a,".sv")}function Ig(a,b,c,d){d&&!n(b)||Jg(M(a,1,d),b,c)}
	function Jg(a,b,c){c instanceof z&&(c=new Da(c,a));if(!n(b))throw Error(a+"contains undefined "+Ga(c));if(ga(b))throw Error(a+"contains a function "+Ga(c)+" with contents: "+b.toString());if(qd(b))throw Error(a+"contains "+b.toString()+" "+Ga(c));if(p(b)&&b.length>10485760/3&&10485760<Ea(b))throw Error(a+"contains a string greater than 10485760 utf8 bytes "+Ga(c)+" ('"+b.substring(0,50)+"...')");if(ha(b)){var d=!1,e=!1;lb(b,function(b,g){if(".value"===b)d=!0;else if(".priority"!==b&&".sv"!==b&&(e=
	!0,!Gg(b)))throw Error(a+" contains an invalid key ("+b+") "+Ga(c)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');c.push(b);Jg(a,g,c);c.pop()});if(d&&e)throw Error(a+' contains ".value" child '+Ga(c)+" in addition to actual children.");}}
	function Kg(a,b,c){if(!ha(b)||ea(b))throw Error(M(a,1,!1)+" must be an Object containing the children to replace.");if(x(b,".value"))throw Error(M(a,1,!1)+' must not contain ".value".  To overwrite with a leaf value, just use .set() instead.');Ig(a,b,c,!1)}
	function Lg(a,b,c){if(qd(c))throw Error(M(a,b,!1)+"is "+c.toString()+", but must be a valid Wilddog priority (a string, finite number, server value, or null).");if(!Hg(c))throw Error(M(a,b,!1)+"must be a valid Wilddog priority (a string, finite number, server value, or null).");}
	function Mg(a,b,c){if(!c||n(b))switch(b){case "value":case "child_added":case "child_removed":case "child_changed":case "child_moved":break;default:throw Error(M(a,1,c)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".');}}function Ng(a,b,c,d){if((!d||n(c))&&!Gg(c))throw Error(M(a,b,d)+'was an invalid key: "'+c+'".  Wilddog keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").');}
	function Og(a,b){if(!p(b)||0===b.length||Fg.test(b))throw Error(M(a,1,!1)+'was an invalid path: "'+b+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"');}function Pg(a,b){if(".info"===B(b))throw Error(a+" failed: Can't modify data under /.info/");}function Qg(a,b){if(!p(b))throw Error(M(a,1,!1)+"must be a valid credential (a string).");}function Rg(a,b,c){if(!p(c))throw Error(M(a,b,!1)+"must be a valid string.");}
	function Sg(a,b,c,d){if(!d||n(c))if(!ha(c)||null===c)throw Error(M(a,b,d)+"must be a valid object.");}function Tg(a,b,c){if(!ha(b)||null===b||!x(b,c))throw Error(M(a,1,!1)+'must contain the key "'+c+'"');if(!p(J(b,c)))throw Error(M(a,1,!1)+'must contain the key "'+c+'" with type "string"');};function U(a,b,c){this.f=a;this.g=b;this.u=c}U.prototype.O=function(){L("Wilddog.DataSnapshot.val",0,0,arguments.length);return this.f.O()};U.prototype.val=U.prototype.O;U.prototype.md=function(){L("Wilddog.DataSnapshot.exportVal",0,0,arguments.length);return this.f.O(!0)};U.prototype.exportVal=U.prototype.md;U.prototype.m=function(){L("Wilddog.DataSnapshot.exists",0,0,arguments.length);return!this.f.j()};U.prototype.exists=U.prototype.m;
	U.prototype.I=function(a){L("Wilddog.DataSnapshot.child",0,1,arguments.length);fa(a)&&(a=String(a));Og("Wilddog.DataSnapshot.child",a);var b=new z(a),c=this.g.I(b);return new U(this.f.ja(b),c,E)};U.prototype.child=U.prototype.I;U.prototype.xa=function(a){L("Wilddog.DataSnapshot.hasChild",1,1,arguments.length);Og("Wilddog.DataSnapshot.hasChild",a);var b=new z(a);return!this.f.ja(b).j()};U.prototype.hasChild=U.prototype.xa;
	U.prototype.K=function(){L("Wilddog.DataSnapshot.getPriority",0,0,arguments.length);return this.f.K().O()};U.prototype.getPriority=U.prototype.K;U.prototype.B=function(a){L("Wilddog.DataSnapshot.forEach",1,1,arguments.length);N("Wilddog.DataSnapshot.forEach",1,a,!1);if(this.f.S())return!1;var b=this;return!!this.f.Y(this.u,function(c,d){return a(new U(d,b.g.I(c),E))})};U.prototype.forEach=U.prototype.B;
	U.prototype.hc=function(){L("Wilddog.DataSnapshot.hasChildren",0,0,arguments.length);return this.f.S()?!1:!this.f.j()};U.prototype.hasChildren=U.prototype.hc;U.prototype.name=function(){S("Wilddog.DataSnapshot.name() being deprecated. Please use Wilddog.DataSnapshot.key() instead.");L("Wilddog.DataSnapshot.name",0,0,arguments.length);return this.key()};U.prototype.name=U.prototype.name;U.prototype.key=function(){L("Wilddog.DataSnapshot.key",0,0,arguments.length);return this.g.key()};
	U.prototype.key=U.prototype.key;U.prototype.Sa=function(){L("Wilddog.DataSnapshot.numChildren",0,0,arguments.length);return this.f.Sa()};U.prototype.numChildren=U.prototype.Sa;U.prototype.Cb=function(){L("Wilddog.DataSnapshot.ref",0,0,arguments.length);return this.g};U.prototype.ref=U.prototype.Cb;function W(a,b,c,d){this.w=a;this.path=b;this.F=c;this.f=d}
	function Ug(a){var b=null,c=null;a.na&&(b=Yf(a));a.oa&&(c=$f(a));if(a.W()===Kd){if(a.na){if("[MIN_NAME]"!=Xf(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==typeof b)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}if(a.oa){if("[MAX_NAME]"!=Zf(a))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!==
	typeof c)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.");}}else if(a.W()===E){if(null!=b&&!Hg(b)||null!=c&&!Hg(c))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).");}else if(C(a.W()instanceof Gd||a.W()===Nd,"unknown index type."),null!=b&&"object"===typeof b||null!=c&&"object"===typeof c)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.");
	}function Vg(a){if(a.na&&a.oa&&a.la&&(!a.la||""===a.jb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");}function Wg(a,b){if(!0===a.f)throw Error(b+": You can't combine multiple orderBy calls.");}W.prototype.Cb=function(){L("Query.ref",0,0,arguments.length);return new V(this.w,this.path)};W.prototype.ref=W.prototype.Cb;
	W.prototype.bb=function(a,b,c,d){L("Query.on",2,4,arguments.length);Mg("Query.on",a,!1);N("Query.on",2,b,!1);var e=Xg("Query.on",c,d);if("value"===a)Yg(this.w,this,new cf(b,e.cancel||null,e.context||null));else{var f={};f[a]=b;Yg(this.w,this,new df(f,e.cancel,e.context))}return b};W.prototype.on=W.prototype.bb;
	W.prototype.Ab=function(a,b,c){L("Query.off",0,3,arguments.length);Mg("Query.off",a,!0);N("Query.off",2,b,!0);zb("Query.off",3,c);var d=null,e=null;"value"===a?d=new cf(b||null,null,c||null):a&&(b&&(e={},e[a]=b),d=new df(e,null,c||null));e=this.w;d=".info"===B(this.path)?e.H.Ta(this,d):e.f.Ta(this,d);bb(e.g,this.path,d)};W.prototype.off=W.prototype.Ab;
	W.prototype.m=function(a,b){function c(g){f&&(f=!1,e.Ab(a,c),b.call(d.context,g))}L("Query.once",2,4,arguments.length);Mg("Query.once",a,!1);N("Query.once",2,b,!1);var d=Xg("Query.once",arguments[2],arguments[3]),e=this,f=!0;this.bb(a,c,function(b){e.Ab(a,c);d.cancel&&d.cancel.call(d.context,b)})};W.prototype.once=W.prototype.m;
	W.prototype.Sc=function(a){S("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead.");L("Query.limit",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limit: First argument must be a positive integer.");if(this.F.la)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");var b=this.F.Sc(a);Vg(b);return new W(this.w,this.path,b,this.f)};W.prototype.limit=W.prototype.Sc;
	W.prototype.Tc=function(a){L("Query.limitToFirst",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.F.la)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new W(this.w,this.path,this.F.Tc(a),this.f)};W.prototype.limitToFirst=W.prototype.Tc;
	W.prototype.Uc=function(a){L("Query.limitToLast",1,1,arguments.length);if(!fa(a)||Math.floor(a)!==a||0>=a)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.F.la)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new W(this.w,this.path,this.F.Uc(a),this.f)};W.prototype.limitToLast=W.prototype.Uc;
	W.prototype.B=function(a){L("Query.orderByChild",1,1,arguments.length);if("$key"===a)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===a)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===a)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Ng("Query.orderByChild",1,a,!1);Wg(this,"Query.orderByChild");var b=fg(this.F,new Gd(a));Ug(b);return new W(this.w,
	this.path,b,!0)};W.prototype.orderByChild=W.prototype.B;W.prototype.H=function(){L("Query.orderByKey",0,0,arguments.length);Wg(this,"Query.orderByKey");var a=fg(this.F,Kd);Ug(a);return new W(this.w,this.path,a,!0)};W.prototype.orderByKey=W.prototype.H;W.prototype.X=function(){L("Query.orderByPriority",0,0,arguments.length);Wg(this,"Query.orderByPriority");var a=fg(this.F,E);Ug(a);return new W(this.w,this.path,a,!0)};W.prototype.orderByPriority=W.prototype.X;
	W.prototype.Z=function(){L("Query.orderByValue",0,0,arguments.length);Wg(this,"Query.orderByValue");var a=fg(this.F,Nd);Ug(a);return new W(this.w,this.path,a,!0)};W.prototype.orderByValue=W.prototype.Z;
	W.prototype.tc=function(a,b){L("Query.startAt",0,2,arguments.length);Ig("Query.startAt",a,this.path,!0);Ng("Query.startAt",2,b,!0);var c=this.F.tc(a,b);Vg(c);Ug(c);if(this.F.na)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");n(a)||(b=a=null);return new W(this.w,this.path,c,this.f)};W.prototype.startAt=W.prototype.tc;
	W.prototype.dc=function(a,b){L("Query.endAt",0,2,arguments.length);Ig("Query.endAt",a,this.path,!0);Ng("Query.endAt",2,b,!0);var c=this.F.dc(a,b);Vg(c);Ug(c);if(this.F.oa)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new W(this.w,this.path,c,this.f)};W.prototype.endAt=W.prototype.dc;
	W.prototype.g=function(a,b){L("Query.equalTo",1,2,arguments.length);Ig("Query.equalTo",a,this.path,!1);Ng("Query.equalTo",2,b,!0);if(this.F.na)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.F.oa)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.tc(a,b).dc(a,b)};W.prototype.equalTo=W.prototype.g;
	W.prototype.toString=function(){L("Query.toString",0,0,arguments.length);for(var a=this.path,b="",c=a.ca;c<a.D.length;c++)""!==a.D[c]&&(b+="/"+encodeURIComponent(String(a.D[c])));return this.w.toString()+(b||"/")};W.prototype.toString=W.prototype.toString;W.prototype.ta=function(){var a=sd(gg(this.F));return"{}"===a?"default":a};
	function Xg(a,b,c){var d={cancel:null,context:null};if(b&&c)d.cancel=b,N(a,3,d.cancel,!0),d.context=c,zb(a,4,d.context);else if(b)if("object"===typeof b&&null!==b)d.context=b;else if("function"===typeof b)d.cancel=b;else throw Error(M(a,3,!0)+" must either be a cancel callback or a context object.");return d};var Zg={},$g=null; true?$g=__webpack_require__(439):$g=eio;function ah(a,b,c,d,e){this.id=a;this.A=nd("c:"+this.id+":");this.lc=c;this.Sb=d;this.sa=e;this.J=b;this.hb=0;this.A("Connection created");this.Ga=bh(this);this.Ga.on("open",ch(this));this.Ga.on("error",dh(this))}function ch(a){return function(){a.Ga.on("message",eh(a));a.Ga.on("close",fh(a))}}
	function eh(a){return function(b){if(null==b)throw Error("data is null");if(0!=b.charAt(0))if(2==b.charAt(0)){var c=null;try{c=JSON.parse(b.substr(1))}catch(f){throw f;}if("object"!=typeof c||2>c.length)throw Error("decodedData in wrong format");b=c[1];if("wd"==c[0])if("c"==b.t)if(c=b.d,"h"==c.t){b=c.d;var c=b.ts,d=b.v,e=b.h;a.sessionId=b.s;"1.0"!=d&&S("Protocol version mismatch detected");0==a.hb&&(e!=a.J.Ca?(tb(a.J,e),a.A("updateHost ",e),a.Ga.close(),a.Ga=bh(a),a.Ga.on("open",ch(a)),a.Ga.on("error",
	dh(a))):(a.hb=1,a.A("realtime state connected"),b=a.J,d=b.Pa.indexOf(a.J.Ca),0<=d&&(b.Pa.splice(d,1),K.set("failHosts",JSON.stringify(b.Pa))),a.Sb&&(a.Sb(c),null==a.Sb)))}else"r"==c.t&&(c=c.d,a.A("Reset packet received.  New host: "+c),tb(a.J,c),a.close());else"d"==b.t&&a.lc(b.d);else a.A("eventType not known")}else 1!=b.charAt(0)&&a.A("data format error")}}function fh(a){return function(){2!==a.hb&&(a.A("Closing realtime connection."),a.hb=2,a.sa&&(a.sa(),a.sa=null))}}
	function dh(a){return function(b){a.A("error",b,c);if(0==a.hb){var c=a.J.Ca,d=a.J;0>d.Pa.indexOf(c)&&(d.Pa.push(c),K.set("failHosts",JSON.stringify(d.Pa)));a.A("error while connecting",b,c);tb(a.J)}a.close()}}function bh(a){var b=(a.J.eb?"https://":"http://")+a.J.Ca+"?v=1.0",c=a.J;c.host!==c.Ca&&(b=b+"&ns="+a.J.zb);a.sessionId&&(b=b+"&s="+a.sessionId);0<a.J.Pa.length&&(b=b+"&fst="+encodeURIComponent(a.J.Pa.join(",")));return $g(b,{path:"/.ws",rememberUpgrade:!0})}
	ah.prototype.ya=function(a){a="2"+JSON.stringify(["wd",{t:"d",d:a}]);this.Ga.send(a)};ah.prototype.close=function(){2!==this.hb&&(this.A("Closing realtime connection."),this.hb=2,this.Ga.close(),this.sa&&(this.sa(),this.sa=null))};function gh(a,b,c,d){this.id=hh++;this.A=nd("p:"+this.id+":");this.Ac=!1;this.fa={};this.g=[];this.Ua=0;this.Aa=[];this.f=!1;this.H=1E3;this.Ub=3E5;this.jd=b;this.hd=c;this.Id=d;this.J=a;this.bd=null;this.Vb={};this.Gd=0;this.gd=!0;this.ua=this.Bc=null;ih(this,0);Ue.Xa().bb("visible",this.ee,this);-1===a.host.indexOf("wd.local")&&Me.Xa().bb("online",this.de,this)}var hh=0,jh=0;h=gh.prototype;
	h.ya=function(a,b,c){var d=++this.Gd;a={r:d,a:a,b:b};this.A(G(a));C(this.f,"sendRequest call when we're not connected not allowed.");this.B.ya(a);c&&(this.Vb[d]=c)};h.sd=function(a,b,c,d){var e=a.ta(),f=a.path.toString();this.A("Listen called for "+f+" "+e);this.fa[f]=this.fa[f]||{};C(!this.fa[f][e],"listen() called twice for same path/queryId.");a={T:d,ic:b,fe:a,tag:c};this.fa[f][e]=a;this.f&&kh(this,a)};
	function kh(a,b){var c=b.fe,d=c.path.toString(),e=c.ta();a.A("Listen on "+d+" for "+e);var f={p:d};b.tag&&(f.q=gg(c.F),f.t=b.tag);f.h=b.ic();a.ya("q",f,function(f){var k=f.d,l=f.s;if(k&&"object"===typeof k&&x(k,"w")){var m=J(k,"w");ea(m)&&0<=yb(m,"no_index")&&S("Using an unspecified index. Consider adding "+('".indexOn": "'+c.F.W().toString()+'"')+" at "+c.path.toString()+" to your security rules for better performance")}(a.fa[d]&&a.fa[d][e])===b&&(a.A("listen response",f),"ok"!==l&&lh(a,d,e),b.T&&
	b.T(l,k))})}h.V=function(a,b,c){this.m={Sd:a,nd:!1,Lb:b,Xb:c};this.A("Authenticating using credential: "+a);mh(this);(b=40==a.length)||(a=kg(a).Yb,b="object"===typeof a&&!0===J(a,"admin"));b&&(this.A("Admin auth credential detected.  Reducing max reconnect time."),this.Ub=3E4)};h.wc=function(a){delete this.m;this.f&&this.ya("unauth",{},function(b){a(b.s,b.d)})};
	function mh(a){var b=a.m;a.f&&b&&a.ya("auth",{cred:b.Sd},function(c){var d=c.s;c=c.d||"error";"ok"!==d&&a.m===b&&delete a.m;b.nd?"ok"!==d&&b.Xb&&b.Xb(d,c):(b.nd=!0,b.Lb&&b.Lb(d,c))})}h.zd=function(a,b){var c=a.path.toString(),d=a.ta();this.A("Unlisten called for "+c+" "+d);if(lh(this,c,d)&&this.f){var e=gg(a.F);this.A("Unlisten on "+c+" for "+d);c={p:c};b&&(c.q=e,c.t=b);this.ya("n",c)}};h.Wc=function(a,b,c){this.f?nh(this,"o",a,b,c):this.Aa.push({Bb:a,action:"o",data:b,T:c})};
	h.ud=function(a,b,c){this.f?nh(this,"om",a,b,c):this.Aa.push({Bb:a,action:"om",data:b,T:c})};h.kc=function(a,b){this.f?nh(this,"oc",a,null,b):this.Aa.push({Bb:a,action:"oc",data:null,T:b})};function nh(a,b,c,d,e){c={p:c,d:d};a.A("onDisconnect "+b,c);a.ya(b,c,function(a){e&&setTimeout(function(){e(a.s,a.d)},Math.floor(0))})}h.Hb=function(a,b,c,d){oh(this,"p",a,b,c,d)};h.td=function(a,b,c,d){oh(this,"m",a,b,c,d)};
	function oh(a,b,c,d,e,f){d={p:c,d:d};n(f)&&(d.h=f);a.g.push({action:b,request:d,T:e});a.Ua++;b=a.g.length-1;a.f?ph(a,b):a.A("Buffering put: "+c)}function ph(a,b){var c=a.g[b].action,d=a.g[b].request,e=a.g[b].T;a.g[b].ge=a.f;a.ya(c,d,function(d){a.A(c+" response",d);delete a.g[b];a.Ua--;0===a.Ua&&(a.g=[]);e&&e(d.s,d.d)})}h.Yc=function(a){if(this.f){a={c:a};this.A("reportStats",a);var b=this;this.ya("s",a,function(a){"ok"!==a.s&&b.A("reportStats","Error sending stats: "+a.d)})}};
	h.be=function(a){if("r"in a){this.A("from server: "+G(a));var b=a.r,c=this.Vb[b];c&&(delete this.Vb[b],c(a.b))}else{if("error"in a)throw"A server-side error has occurred: "+a.error;"a"in a&&(b=a.a,c=a.b,this.A("handleServerMessage",b,c),"d"===b?this.jd(c.p,c.d,!1,c.t):"m"===b?this.jd(c.p,c.d,!0,c.t):"c"===b?qh(this,c.p,c.q):"ac"===b?(a=c.s,b=c.d,c=this.m,delete this.m,c&&c.Xb&&c.Xb(a,b)):"sd"===b?this.bd?this.bd(c):"msg"in c&&"undefined"!==typeof console&&console.log("WILDDOG: "+c.msg.replace("\n",
	"\nWILDDOG: ")):od("Unrecognized action received from server: "+G(b)+"\nAre you using the latest client?"))}};h.Sb=function(a){this.A("connection ready");this.f=!0;this.ua=(new Date).getTime();this.Id({serverTimeOffset:a-(new Date).getTime()});this.gd&&(a={},a["sdk.js."+CLIENT_VERSION.replace(/\./g,"-")]=1,ib()&&(a["framework.cordova"]=1),this.Yc(a));rh(this);this.gd=!1;this.hd(!0)};
	function ih(a,b){C(!a.B,"Scheduling a connect when we're already connected/ing?");a.X&&clearTimeout(a.X);a.X=setTimeout(function(){a.X=null;if(sh(a)){a.A("Making a connection attempt");a.Bc=(new Date).getTime();a.ua=null;var b=q(a.be,a),d=q(a.Sb,a),e=q(a.vd,a),f=a.id+":"+jh++;a.B=new ah(f,a.J,b,d,e)}},Math.floor(b))}h.ee=function(a){a&&!this.Z&&this.H===this.Ub&&(this.A("Window became visible.  Reducing delay."),this.H=1E3,this.B||ih(this,0));this.Z=a};
	h.de=function(a){a?(this.A("Browser went online."),this.H=1E3,this.B||ih(this,0)):(this.A("Browser went offline.  Killing connection."),this.B&&this.B.close())};
	h.vd=function(){this.A("data client disconnected");this.f=!1;this.B=null;for(var a=0;a<this.g.length;a++){var b=this.g[a];b&&"h"in b.request&&b.ge&&(b.T&&b.T("disconnect"),delete this.g[a],this.Ua--)}0===this.Ua&&(this.g=[]);this.Vb={};sh(this)&&(this.Z?this.ua&&(3E4<(new Date).getTime()-this.ua&&(this.H=1E3),this.ua=null):(this.A("Window isn't visible.  Delaying reconnect."),this.H=this.Ub,this.Bc=(new Date).getTime()),a=Math.max(0,this.H-((new Date).getTime()-this.Bc)),a*=Math.random(),this.A("Trying to reconnect in "+
	a+"ms"),ih(this,a),this.H=Math.min(this.Ub,1.3*this.H));this.hd(!1)};h.ab=function(){this.Ac=!0;this.B?this.B.close():(this.X&&(clearTimeout(this.X),this.X=null),this.f&&this.vd())};h.Fb=function(){this.Ac=!1;this.H=1E3;this.B||ih(this,0)};function qh(a,b,c){c=c?qc(c,function(a){return sd(a)}).join("$"):"default";(a=lh(a,b,c))&&a.T&&a.T("permission_denied")}
	function lh(a,b,c){b=(new z(b)).toString();var d;n(a.fa[b])?(d=a.fa[b][c],delete a.fa[b][c],0===gc(a.fa[b])&&delete a.fa[b]):d=void 0;return d}function rh(a){mh(a);P(a.fa,function(b){P(b,function(b){kh(a,b)})});for(var b=0;b<a.g.length;b++)a.g[b]&&ph(a,b);for(;a.Aa.length;)b=a.Aa.shift(),nh(a,b.action,b.Bb,b.data,b.T)}function sh(a){var b;b=Me.Xa().f;return!a.Ac&&b};function th(a,b){this.J=a;this.ua=Bc(a);this.g=new Za;this.X=1;this.Ja=null;this.m;b||0<=("object"===typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)?(this.m=new mg(this.J,q(this.Bd,this)),setTimeout(q(this.Ad,this,!0),0)):this.m=this.Ja=new gh(this.J,q(this.Bd,this),q(this.Ad,this),q(this.ne,this));this.Ua=Cc(a,q(function(){return new Aa(this.ua,this.m)},this));this.B=new Oe;this.Aa=
	new Mb;var c=this;this.H=new Df({cd:function(a,b,f,g){b=[];f=c.Aa.o(a.path);f.j()||(b=Ff(c.H,new sa(Bd,a.path,f)),setTimeout(function(){g("ok")},0));return b},uc:ba});uh(this,"connected",!1);this.sa=new Ja;this.V=new rg(a,q(this.m.V,this.m),q(this.m.wc,this.m),q(this.me,this));this.cc=0;this.Rc=null;this.f=new Df({cd:function(a,b,f,g){c.m.sd(a,f,b,function(b,e){var f=g(b,e);db(c.g,a.path,f)});return[]},uc:function(a,b){c.m.zd(a,b)}})}h=th.prototype;
	h.toString=function(){return(this.J.eb?"https://":"http://")+this.J.host};h.name=function(){return this.J.zb};function vh(a){a=a.Aa.o(new z(".info/serverTimeOffset")).O()||0;return(new Date).getTime()+a}function wh(a){a=a={timestamp:vh(a)};a.timestamp=a.timestamp||(new Date).getTime();return a}
	h.Bd=function(a,b,c,d){this.cc++;var e=new z(a);b=this.Rc?this.Rc(a,b):b;a=[];d?c?(b=ec(b,function(a){return D(a)}),a=Nf(this.f,e,b,d)):(b=D(b),a=Jf(this.f,e,b,d)):c?(d=ec(b,function(a){return D(a)}),a=If(this.f,e,d)):(d=D(b),a=Ff(this.f,new sa(Bd,e,d)));d=e;0<a.length&&(d=xh(this,e));db(this.g,d,a)};h.Ad=function(a){uh(this,"connected",a);!1===a&&yh(this)};h.ne=function(a){var b=this;td(a,function(a,d){uh(b,d,a)})};h.me=function(a){uh(this,"authenticated",a)};
	function uh(a,b,c){b=new z("/.info/"+b);c=D(c);var d=a.Aa;d.rc=d.rc.N(b,c);c=Ff(a.H,new sa(Bd,b,c));db(a.g,b,c)}h.fb=function(a,b,c,d){this.A("set",{path:a.toString(),value:b,we:c});var e=wh(this);b=D(b,c);var e=La(b,e),f=this.X++,e=Ef(this.f,a,e,f,!0);$a(this.g,e);var g=this;this.m.Hb(a.toString(),b.O(!0),function(b,c){var e="ok"===b;e||S("set at "+a+" failed: "+b);e=Hf(g.f,f,!e);db(g.g,a,e);zh(d,b,c)});e=Ah(this,a);xh(this,e);db(this.g,e,[])};
	h.update=function(a,b,c){this.A("update",{path:a.toString(),value:b});var d=!0,e=wh(this),f={};P(b,function(a,b){d=!1;var c=D(a);f[b]=La(c,e)});if(d)fb("update() called with empty data.  Don't do anything."),zh(c,"ok");else{var g=this.X++,k=Gf(this.f,a,f,g);$a(this.g,k);var l=this;this.m.td(a.toString(),b,function(b,d){var e="ok"===b;e||S("update at "+a+" failed: "+b);var e=Hf(l.f,g,!e),f=a;0<e.length&&(f=xh(l,a));db(l.g,f,e);zh(c,b,d)});b=Ah(this,a);xh(this,b);db(this.g,a,[])}};
	function yh(a){a.A("onDisconnectEvents");var b=wh(a),c=[];Ka(Ia(a.sa,b),t,function(b,e){c=c.concat(Ff(a.f,new sa(Bd,b,e)));var f=Ah(a,b);xh(a,f)});a.sa=new Ja;db(a.g,t,c)}h.kc=function(a,b){var c=this;this.m.kc(a.toString(),function(d,e){"ok"===d&&ge(c.sa,a);zh(b,d,e)})};function Bh(a,b,c,d){var e=D(c);a.m.Wc(b.toString(),e.O(!0),function(c,g){"ok"===c&&a.sa.Db(b,e);zh(d,c,g)})}function Ch(a,b,c,d,e){var f=D(c,d);a.m.Wc(b.toString(),f.O(!0),function(c,d){"ok"===c&&a.sa.Db(b,f);zh(e,c,d)})}
	function Dh(a,b,c,d){var e=!0,f;for(f in c)e=!1;e?(fb("onDisconnect().update() called with empty data.  Don't do anything."),zh(d,"ok")):a.m.ud(b.toString(),c,function(e,f){if("ok"===e)for(var l in c){var m=D(c[l]);a.sa.Db(b.I(l),m)}zh(d,e,f)})}function Yg(a,b,c){c=".info"===B(b.path)?a.H.kb(b,c):a.f.kb(b,c);bb(a.g,b.path,c)}h.ab=function(){this.Ja&&this.Ja.ab()};h.Fb=function(){this.Ja&&this.Ja.Fb()};
	h.dd=function(a){if("undefined"!==typeof console){a?(this.Z||(this.Z=new ya(this.ua)),a=this.Z.get()):a=this.ua.get();var b=rc(jc(a),function(a,b){return Math.max(b.length,a)},0),c;for(c in a){for(var d=a[c],e=c.length;e<b+2;e++)c+=" ";console.log(c+d)}}};h.ed=function(a){var b=this.ua,c;n(c)||(c=1);x(b.f,a)||(b.f[a]=0);b.f[a]+=c;this.Ua.yd[a]=!0};h.A=function(a){var b="";this.Ja&&(b=this.Ja.id+":");fb(b,arguments)};
	function zh(a,b,c){a&&gb(function(){if("ok"==b)a(null);else{var d=(b||"error").toUpperCase(),e=d;c&&(e+=": "+c);e=Error(e);e.code=d;a(e)}})};ma.qe;
	function Eh(a,b,c,d,e){function f(){}a.A("transaction on "+b);var g=new V(a,b);g.bb("value",f);c={path:b,update:c,T:d,status:null,wd:fd(),kd:e,xd:0,xc:function(){g.Ab("value",f)},Cc:null,va:null,$b:null,ac:null,bc:null};d=a.f.ra(b,void 0)||O;c.$b=d;d=c.update(d.O());if(n(d)){Jg("transaction failed: Data returned ",d,c.path);c.status=1;e=Pe(a.B,b);var k=e.wa()||[];k.push(c);Qe(e,k);"object"===typeof d&&null!==d&&x(d,".priority")?(k=J(d,".priority"),C(Hg(k),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):k=
	(a.f.ra(b)||O).K().O();e=wh(a);d=D(d,k);e=La(d,e);c.ac=d;c.bc=e;c.va=a.X++;c=Ef(a.f,b,e,c.va,c.kd);db(a.g,b,c);Fh(a)}else c.xc(),c.ac=null,c.bc=null,c.T&&(a=new U(c.$b,new V(a,c.path),E),c.T(null,!1,a))}function Fh(a,b){var c=b||a.B;b||Gh(a,c);if(null!==c.wa()){var d=Hh(a,c);C(0<d.length,"Sending zero length transaction queue");sc(d,function(a){return 1===a.status})&&Ih(a,c.path(),d)}else c.hc()&&c.Y(function(b){Fh(a,b)})}
	function Ih(a,b,c){for(var d=qc(c,function(a){return a.va}),e=a.f.ra(b,d)||O,d=e,e=e.hash(),f=0;f<c.length;f++){var g=c[f];C(1===g.status,"tryToSendTransactionQueue_: items in queue should all be run.");g.status=2;g.xd++;var k=A(b,g.path),d=d.N(k,g.ac)}d=d.O(!0);a.m.Hb(b.toString(),d,function(d){a.A("transaction put response",{path:b.toString(),status:d});var e=[];if("ok"===d){d=[];for(f=0;f<c.length;f++){c[f].status=3;e=e.concat(Hf(a.f,c[f].va));if(c[f].T){var g=c[f].bc,k=new V(a,c[f].path);d.push(q(c[f].T,
	null,null,!0,new U(g,k,E)))}c[f].xc()}Gh(a,Pe(a.B,b));Fh(a);db(a.g,b,e);for(f=0;f<d.length;f++)gb(d[f])}else{if("datastale"===d)for(f=0;f<c.length;f++)c[f].status=4===c[f].status?5:1;else for(S("transaction at "+b.toString()+" failed: "+d),f=0;f<c.length;f++)c[f].status=5,c[f].Cc=d;xh(a,b)}},e)}function xh(a,b){var c=Jh(a,b),d=c.path(),c=Hh(a,c);Kh(a,c,d);return d}
	function Kh(a,b,c){if(0!==b.length){for(var d=[],e=[],f=qc(b,function(a){return a.va}),g=0;g<b.length;g++){var k=b[g],l=A(c,k.path),m=!1,u;C(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null.");if(5===k.status)m=!0,u=k.Cc,e=e.concat(Hf(a.f,k.va,!0));else if(1===k.status)if(25<=k.xd)m=!0,u="maxretry",e=e.concat(Hf(a.f,k.va,!0));else{var y=a.f.ra(k.path,f)||O;k.$b=y;var H=b[g].update(y.O());n(H)?(Jg("transaction failed: Data returned ",H,k.path),l=D(H),"object"===typeof H&&null!=
	H&&x(H,".priority")||(l=l.da(y.K())),y=k.va,H=wh(a),H=La(l,H),k.ac=l,k.bc=H,k.va=a.X++,vc(f,y),e=e.concat(Ef(a.f,k.path,H,k.va,k.kd)),e=e.concat(Hf(a.f,y,!0))):(m=!0,u="nodata",e=e.concat(Hf(a.f,k.va,!0)))}db(a.g,c,e);e=[];m&&(b[g].status=3,setTimeout(b[g].xc,Math.floor(0)),b[g].T&&("nodata"===u?(k=new V(a,b[g].path),d.push(q(b[g].T,null,null,!1,new U(b[g].$b,k,E)))):d.push(q(b[g].T,null,Error(u),!1,null))))}Gh(a,a.B);for(g=0;g<d.length;g++)gb(d[g]);Fh(a)}}
	function Jh(a,b){for(var c,d=a.B;null!==(c=B(b))&&null===d.wa();)d=Pe(d,c),b=r(b);return d}function Hh(a,b){var c=[];Lh(a,b,c);c.sort(function(a,b){return a.wd-b.wd});return c}function Lh(a,b,c){var d=b.wa();if(null!==d)for(var e=0;e<d.length;e++)c.push(d[e]);b.Y(function(b){Lh(a,b,c)})}function Gh(a,b){var c=b.wa();if(c){for(var d=0,e=0;e<c.length;e++)3!==c[e].status&&(c[d]=c[e],d++);c.length=d;Qe(b,0<c.length?c:null)}b.Y(function(b){Gh(a,b)})}
	function Ah(a,b){var c=Jh(a,b).path(),d=Pe(a.B,b);Te(d,function(b){Mh(a,b)});Mh(a,d);Se(d,function(b){Mh(a,b)});return c}
	function Mh(a,b){var c=b.wa();if(null!==c){for(var d=[],e=[],f=-1,g=0;g<c.length;g++)4!==c[g].status&&(2===c[g].status?(C(f===g-1,"All SENT items should be at beginning of queue."),f=g,c[g].status=4,c[g].Cc="set"):(C(1===c[g].status,"Unexpected transaction status in abort"),c[g].xc(),e=e.concat(Hf(a.f,c[g].va,!0)),c[g].T&&d.push(q(c[g].T,null,Error("set"),!1,null))));-1===f?Qe(b,null):c.length=f+1;db(a.g,b.path(),e);for(g=0;g<d.length;g++)gb(d[g])}};function Nh(){this.f={};this.g=!1}ca(Nh);Nh.prototype.ab=function(){for(var a in this.f)this.f[a].ab()};Nh.prototype.interrupt=Nh.prototype.ab;Nh.prototype.Fb=function(){for(var a in this.f)this.f[a].Fb()};Nh.prototype.resume=Nh.prototype.Fb;Nh.prototype.Kc=function(){this.g=!0};var X={Vd:function(){Zg.re.Ud();Zg.Dd.ue()}};X.forceLongPolling=X.Vd;X.Wd=function(){Zg.Dd.Ud()};X.forceWebSockets=X.Wd;X.ke=function(a,b){a.w.Ja.bd=b};X.setSecurityDebugCallback=X.ke;X.dd=function(a,b){a.w.dd(b)};X.stats=X.dd;X.ed=function(a,b){a.w.ed(b)};X.statsIncrementCounter=X.ed;X.cc=function(a){return a.w.cc};X.dataUpdateCount=X.cc;X.Yd=function(a,b){a.w.Rc=b};X.interceptServerData=X.Yd;X.ce=function(a){new $b(a)};X.onPopupOpen=X.ce;X.ie=function(a){ub=a};X.setAuthenticationServer=X.ie;function Y(a,b){this.f=a;this.pa=b}Y.prototype.cancel=function(a){L("Wilddog.onDisconnect().cancel",0,1,arguments.length);N("Wilddog.onDisconnect().cancel",1,a,!0);this.f.kc(this.pa,a||null)};Y.prototype.cancel=Y.prototype.cancel;Y.prototype.remove=function(a){L("Wilddog.onDisconnect().remove",0,1,arguments.length);Pg("Wilddog.onDisconnect().remove",this.pa);N("Wilddog.onDisconnect().remove",1,a,!0);Bh(this.f,this.pa,null,a)};Y.prototype.remove=Y.prototype.remove;
	Y.prototype.set=function(a,b){L("Wilddog.onDisconnect().set",1,2,arguments.length);Pg("Wilddog.onDisconnect().set",this.pa);Ig("Wilddog.onDisconnect().set",a,this.pa,!1);N("Wilddog.onDisconnect().set",2,b,!0);Bh(this.f,this.pa,a,b)};Y.prototype.set=Y.prototype.set;
	Y.prototype.fb=function(a,b,c){L("Wilddog.onDisconnect().setWithPriority",2,3,arguments.length);Pg("Wilddog.onDisconnect().setWithPriority",this.pa);Ig("Wilddog.onDisconnect().setWithPriority",a,this.pa,!1);Lg("Wilddog.onDisconnect().setWithPriority",2,b);N("Wilddog.onDisconnect().setWithPriority",3,c,!0);Ch(this.f,this.pa,a,b,c)};Y.prototype.setWithPriority=Y.prototype.fb;
	Y.prototype.update=function(a,b){L("Wilddog.onDisconnect().update",1,2,arguments.length);Pg("Wilddog.onDisconnect().update",this.pa);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;S("Passing an Array to Wilddog.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Kg("Wilddog.onDisconnect().update",a,this.pa);N("Wilddog.onDisconnect().update",2,b,!0);Dh(this.f,
	this.pa,a,b)};Y.prototype.update=Y.prototype.update;var Z={};Z.Ib=gh;Z.DataConnection=Z.Ib;gh.prototype.Hd=function(a,b){this.ya("q",{p:a},b)};Z.Ib.prototype.simpleListen=Z.Ib.prototype.Hd;gh.prototype.Fd=function(a,b){this.ya("echo",{d:a},b)};Z.Ib.prototype.echo=Z.Ib.prototype.Fd;gh.prototype.interrupt=gh.prototype.ab;Z.Jd=ah;Z.RealTimeConnection=Z.Jd;ah.prototype.sendRequest=ah.prototype.ya;ah.prototype.close=ah.prototype.close;
	Z.Xd=function(a){var b=gh.prototype.Hb;gh.prototype.Hb=function(c,d,e,f){n(f)&&(f=a());b.call(this,c,d,e,f)};return function(){gh.prototype.Hb=b}};Z.hijackHash=Z.Xd;Z.Ed=sb;Z.ConnectionTarget=Z.Ed;Z.ta=function(a){return a.ta()};Z.queryIdentifier=Z.ta;Z.Zd=function(a){return a.w.Ja.fa};Z.listens=Z.Zd;Z.Kc=function(a){a.Kc()};Z.forceRestClient=Z.Kc;function V(a,b){var c,d,e;if(a instanceof th)c=a,d=b;else{L("new Wilddog",1,2,arguments.length);d=Tb(arguments[0]);c=d.le;"wilddog"===d.domain&&pd(d.host+" is no longer supported. Please use <YOUR WILDDOG>.wilddogio.com instead");c||pd("Cannot parse Wilddog url. Please use https://<YOUR WILDDOG>.wilddogio.com");d.eb||"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Wilddog access from a secure page. Please use https in calls to new Wilddog().");
	c=new sb(d.host,d.eb,c);d=new z(d.Bb);e=d.toString();var f;!(f=!p(c.host)||0===c.host.length||!Gg(c.zb))&&(f=0!==e.length)&&(e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),f=!(p(e)&&0!==e.length&&!Fg.test(e)));if(f)throw Error(M("new Wilddog",1,!1)+'must be a valid wilddog URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(b)if(b instanceof Nh)e=b;else if(p(b))e=Nh.Xa(),c.nc=b;else throw Error("Expected a valid Wilddog.Context for second argument to new Wilddog()");else e=Nh.Xa();f=c.toString();
	var g=J(e.f,f);g||(g=new th(c,e.g),e.f[f]=g);c=g}W.call(this,c,d,dg,!1)}la(V,W);"undefined"!=typeof module&&(module.exports=V);V.prototype.name=function(){S("Wilddog.name() being deprecated. Please use Wilddog.key() instead.");L("Wilddog.name",0,0,arguments.length);return this.key()};V.prototype.name=V.prototype.name;V.prototype.key=function(){L("Wilddog.key",0,0,arguments.length);return this.path.j()?null:Ca(this.path)};V.prototype.key=V.prototype.key;
	V.prototype.I=function(a){L("Wilddog.child",1,1,arguments.length);if(fa(a))a=String(a);else if(!(a instanceof z))if(null===B(this.path)){var b=a;b&&(b=b.replace(/^\/*\.info(\/|$)/,"/"));Og("Wilddog.child",b)}else Og("Wilddog.child",a);return new V(this.w,this.path.I(a))};V.prototype.child=V.prototype.I;V.prototype.parent=function(){L("Wilddog.parent",0,0,arguments.length);var a=this.path.parent();return null===a?null:new V(this.w,a)};V.prototype.parent=V.prototype.parent;
	V.prototype.root=function(){L("Wilddog.ref",0,0,arguments.length);for(var a=this;null!==a.parent();)a=a.parent();return a};V.prototype.root=V.prototype.root;V.prototype.set=function(a,b){L("Wilddog.set",1,2,arguments.length);Pg("Wilddog.set",this.path);Ig("Wilddog.set",a,this.path,!1);N("Wilddog.set",2,b,!0);this.w.fb(this.path,a,null,b||null)};V.prototype.set=V.prototype.set;
	V.prototype.update=function(a,b){L("Wilddog.update",1,2,arguments.length);Pg("Wilddog.update",this.path);if(ea(a)){for(var c={},d=0;d<a.length;++d)c[""+d]=a[d];a=c;S("Passing an Array to Wilddog.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Kg("Wilddog.update",a,this.path);N("Wilddog.update",2,b,!0);this.w.update(this.path,a,b||null)};V.prototype.update=V.prototype.update;
	V.prototype.fb=function(a,b,c){L("Wilddog.setWithPriority",2,3,arguments.length);Pg("Wilddog.setWithPriority",this.path);Ig("Wilddog.setWithPriority",a,this.path,!1);Lg("Wilddog.setWithPriority",2,b);N("Wilddog.setWithPriority",3,c,!0);if(".length"===this.key()||".keys"===this.key())throw"Wilddog.setWithPriority failed: "+this.key()+" is a read-only object.";this.w.fb(this.path,a,b,c||null)};V.prototype.setWithPriority=V.prototype.fb;
	V.prototype.remove=function(a){L("Wilddog.remove",0,1,arguments.length);Pg("Wilddog.remove",this.path);N("Wilddog.remove",1,a,!0);this.set(null,a)};V.prototype.remove=V.prototype.remove;
	V.prototype.transaction=function(a,b,c){L("Wilddog.transaction",1,3,arguments.length);Pg("Wilddog.transaction",this.path);N("Wilddog.transaction",1,a,!1);N("Wilddog.transaction",2,b,!0);if(n(c)&&"boolean"!=typeof c)throw Error(M("Wilddog.transaction",3,!0)+"must be a boolean.");if(".length"===this.key()||".keys"===this.key())throw"Wilddog.transaction failed: "+this.key()+" is a read-only object.";"undefined"===typeof c&&(c=!0);Eh(this.w,this.path,a,b||null,c)};V.prototype.transaction=V.prototype.transaction;
	V.prototype.je=function(a,b){L("Wilddog.setPriority",1,2,arguments.length);Pg("Wilddog.setPriority",this.path);Lg("Wilddog.setPriority",1,a);N("Wilddog.setPriority",2,b,!0);this.w.fb(this.path.I(".priority"),a,null,b)};V.prototype.setPriority=V.prototype.je;V.prototype.push=function(a,b){L("Wilddog.push",0,2,arguments.length);Pg("Wilddog.push",this.path);Ig("Wilddog.push",a,this.path,!0);N("Wilddog.push",2,b,!0);var c=vh(this.w),c=Ve(c),c=this.I(c);"undefined"!==typeof a&&null!==a&&c.set(a,b);return c};
	V.prototype.push=V.prototype.push;V.prototype.onDisconnect=function(){Pg("Wilddog.onDisconnect",this.path);return new Y(this.w,this.path)};V.prototype.onDisconnect=V.prototype.onDisconnect;V.prototype.V=function(a,b,c){S("WilddogRef.auth() being deprecated. Please use WilddogRef.authWithCustomToken() instead.");L("Wilddog.auth",1,3,arguments.length);Qg("Wilddog.auth",a);N("Wilddog.auth",2,b,!0);N("Wilddog.auth",3,b,!0);xg(this.w.V,a,{},{remember:"none"},b,c)};V.prototype.auth=V.prototype.V;
	V.prototype.wc=function(a){L("Wilddog.unauth",0,1,arguments.length);N("Wilddog.unauth",1,a,!0);yg(this.w.V,a)};V.prototype.unauth=V.prototype.wc;V.prototype.Mc=function(){L("Wilddog.getAuth",0,0,arguments.length);return this.w.V.Mc()};V.prototype.getAuth=V.prototype.Mc;V.prototype.ae=function(a,b){L("Wilddog.onAuth",1,2,arguments.length);N("Wilddog.onAuth",1,a,!1);zb("Wilddog.onAuth",2,b);this.w.V.bb("auth_status",a,b)};V.prototype.onAuth=V.prototype.ae;
	V.prototype.$d=function(a,b){L("Wilddog.offAuth",1,2,arguments.length);N("Wilddog.offAuth",1,a,!1);zb("Wilddog.offAuth",2,b);this.w.V.Ab("auth_status",a,b)};V.prototype.offAuth=V.prototype.$d;V.prototype.Ld=function(a,b,c){L("Wilddog.authWithCustomToken",2,3,arguments.length);Qg("Wilddog.authWithCustomToken",a);N("Wilddog.authWithCustomToken",2,b,!1);Sg("Wilddog.authWithCustomToken",3,c,!0);xg(this.w.V,a,{},c||{},b)};V.prototype.authWithCustomToken=V.prototype.Ld;
	V.prototype.Md=function(a,b,c){L("Wilddog.authWithOAuthPopup",2,3,arguments.length);Rg("Wilddog.authWithOAuthPopup",1,a);N("Wilddog.authWithOAuthPopup",2,b,!1);Sg("Wilddog.authWithOAuthPopup",3,c,!0);Cg(this.w.V,a,c,b)};V.prototype.authWithOAuthPopup=V.prototype.Md;
	V.prototype.Nd=function(a,b,c){L("Wilddog.authWithOAuthRedirect",2,3,arguments.length);Rg("Wilddog.authWithOAuthRedirect",1,a);N("Wilddog.authWithOAuthRedirect",2,b,!1);Sg("Wilddog.authWithOAuthRedirect",3,c,!0);var d=this.w.V;Ag(d);var e=[bc],f=xb(c);"anonymous"===a||"wilddog"===a?T(b,I("TRANSPORT_UNAVAILABLE")):(K.set("redirect_client_options",f.Zb),Bg(d,e,"/auth/"+a,f,b))};V.prototype.authWithOAuthRedirect=V.prototype.Nd;
	V.prototype.Od=function(a,b,c,d){L("Wilddog.authWithOAuthToken",3,4,arguments.length);Rg("Wilddog.authWithOAuthToken",1,a);N("Wilddog.authWithOAuthToken",3,c,!1);Sg("Wilddog.authWithOAuthToken",4,d,!0);p(b)?(Rg("Wilddog.authWithOAuthToken",2,b),zg(this.w.V,a+"/token",{access_token:b},d,c)):(Sg("Wilddog.authWithOAuthToken",2,b,!1),zg(this.w.V,a+"/token",b,d,c))};V.prototype.authWithOAuthToken=V.prototype.Od;
	V.prototype.Kd=function(a,b){L("Wilddog.authAnonymously",1,2,arguments.length);N("Wilddog.authAnonymously",1,a,!1);Sg("Wilddog.authAnonymously",2,b,!0);zg(this.w.V,"anonymous",{},b,a)};V.prototype.authAnonymously=V.prototype.Kd;
	V.prototype.Pd=function(a,b,c){L("Wilddog.authWithPassword",2,3,arguments.length);Sg("Wilddog.authWithPassword",1,a,!1);Tg("Wilddog.authWithPassword",a,"email");Tg("Wilddog.authWithPassword",a,"password");N("Wilddog.authAnonymously",2,b,!1);Sg("Wilddog.authAnonymously",3,c,!0);zg(this.w.V,"password",a,c,b)};V.prototype.authWithPassword=V.prototype.Pd;
	V.prototype.Ic=function(a,b){L("Wilddog.createUser",2,2,arguments.length);Sg("Wilddog.createUser",1,a,!1);Tg("Wilddog.createUser",a,"email");Tg("Wilddog.createUser",a,"password");N("Wilddog.createUser",2,b,!1);this.w.V.Ic(a,b)};V.prototype.createUser=V.prototype.Ic;V.prototype.Xc=function(a,b){L("Wilddog.removeUser",2,2,arguments.length);Sg("Wilddog.removeUser",1,a,!1);Tg("Wilddog.removeUser",a,"email");Tg("Wilddog.removeUser",a,"password");N("Wilddog.removeUser",2,b,!1);this.w.V.Xc(a,b)};
	V.prototype.removeUser=V.prototype.Xc;V.prototype.Fc=function(a,b){L("Wilddog.changePassword",2,2,arguments.length);Sg("Wilddog.changePassword",1,a,!1);Tg("Wilddog.changePassword",a,"email");Tg("Wilddog.changePassword",a,"oldPassword");Tg("Wilddog.changePassword",a,"newPassword");N("Wilddog.changePassword",2,b,!1);this.w.V.Fc(a,b)};V.prototype.changePassword=V.prototype.Fc;
	V.prototype.Ec=function(a,b){L("Wilddog.changeEmail",2,2,arguments.length);Sg("Wilddog.changeEmail",1,a,!1);Tg("Wilddog.changeEmail",a,"oldEmail");Tg("Wilddog.changeEmail",a,"newEmail");Tg("Wilddog.changeEmail",a,"password");N("Wilddog.changeEmail",2,b,!1);this.w.V.Ec(a,b)};V.prototype.changeEmail=V.prototype.Ec;
	V.prototype.Zc=function(a,b){L("Wilddog.resetPassword",2,2,arguments.length);Sg("Wilddog.resetPassword",1,a,!1);Tg("Wilddog.resetPassword",a,"email");N("Wilddog.resetPassword",2,b,!1);this.w.V.Zc(a,b)};V.prototype.resetPassword=V.prototype.Zc;
	function md(a,b){C(!b||!0===a||!1===a,"Can't turn on custom loggers persistently.");!0===a?("undefined"!==typeof console&&("function"===typeof console.log?eb=q(console.log,console):"object"===typeof console.log&&(eb=function(a){console.log(a)})),b&&K.set("logging_enabled",!0)):a?eb=a:(eb=null,K.remove("logging_enabled"))}var hd=CLIENT_VERSION;"undefined"!=typeof window&&(window.Wilddog=V);V.goOffline=function(){L("Wilddog.goOffline",0,0,arguments.length);Nh.Xa().ab()};
	V.goOnline=function(){L("Wilddog.goOnline",0,0,arguments.length);Nh.Xa().Fb()};V.enableLogging=md;V.ServerValue={TIMESTAMP:{".sv":"timestamp"}};V.SDK_VERSION=hd;V.INTERNAL=X;V.TEST_ACCESS=Z;
	};ns.wrapper(ns.goog,ns.wd)})({goog:{},wd:{}})

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(411).Buffer))

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
>>>>>>> master
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
<<<<<<< HEAD
"use strict";function i(){function t(){}try{var e=new Uint8Array(1);return e.foo=function(){return 42},e.constructor=t,42===e.foo()&&e.constructor===t&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(n){return!1}}function o(){return t.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function t(e){return this instanceof t?(t.TYPED_ARRAY_SUPPORT||(this.length=0,this.parent=void 0),"number"==typeof e?a(this,e):"string"==typeof e?s(this,e,arguments.length>1?arguments[1]:"utf8"):u(this,e)):arguments.length>1?new t(e,arguments[1]):new t(e)}function a(e,n){if(e=g(e,0>n?0:0|y(n)),!t.TYPED_ARRAY_SUPPORT)for(var r=0;n>r;r++)e[r]=0;return e}function s(t,e,n){"string"==typeof n&&""!==n||(n="utf8");var r=0|b(e,n);return t=g(t,r),t.write(e,n),t}function u(e,n){if(t.isBuffer(n))return h(e,n);if(K(n))return c(e,n);if(null==n)throw new TypeError("must start with number, buffer, array or string");if("undefined"!=typeof ArrayBuffer){if(n.buffer instanceof ArrayBuffer)return f(e,n);if(n instanceof ArrayBuffer)return l(e,n)}return n.length?p(e,n):d(e,n)}function h(t,e){var n=0|y(e.length);return t=g(t,n),e.copy(t,0,0,n),t}function c(t,e){var n=0|y(e.length);t=g(t,n);for(var r=0;n>r;r+=1)t[r]=255&e[r];return t}function f(t,e){var n=0|y(e.length);t=g(t,n);for(var r=0;n>r;r+=1)t[r]=255&e[r];return t}function l(e,n){return t.TYPED_ARRAY_SUPPORT?(n.byteLength,e=t._augment(new Uint8Array(n))):e=f(e,new Uint8Array(n)),e}function p(t,e){var n=0|y(e.length);t=g(t,n);for(var r=0;n>r;r+=1)t[r]=255&e[r];return t}function d(t,e){var n,r=0;"Buffer"===e.type&&K(e.data)&&(n=e.data,r=0|y(n.length)),t=g(t,r);for(var i=0;r>i;i+=1)t[i]=255&n[i];return t}function g(e,n){t.TYPED_ARRAY_SUPPORT?(e=t._augment(new Uint8Array(n)),e.__proto__=t.prototype):(e.length=n,e._isBuffer=!0);var r=0!==n&&n<=t.poolSize>>>1;return r&&(e.parent=Q),e}function y(t){if(t>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes");return 0|t}function v(e,n){if(!(this instanceof v))return new v(e,n);var r=new t(e,n);return delete r.parent,r}function b(t,e){"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"binary":case"raw":case"raws":return n;case"utf8":case"utf-8":return V(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return X(t).length;default:if(r)return V(t).length;e=(""+e).toLowerCase(),r=!0}}function m(t,e,n){var r=!1;if(e=0|e,n=void 0===n||n===1/0?this.length:0|n,t||(t="utf8"),0>e&&(e=0),n>this.length&&(n=this.length),e>=n)return"";for(;;)switch(t){case"hex":return L(this,e,n);case"utf8":case"utf-8":return T(this,e,n);case"ascii":return O(this,e,n);case"binary":return B(this,e,n);case"base64":return C(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function w(t,e,n,r){n=Number(n)||0;var i=t.length-n;r?(r=Number(r),r>i&&(r=i)):r=i;var o=e.length;if(o%2!==0)throw new Error("Invalid hex string");r>o/2&&(r=o/2);for(var a=0;r>a;a++){var s=parseInt(e.substr(2*a,2),16);if(isNaN(s))throw new Error("Invalid hex string");t[n+a]=s}return a}function E(t,e,n,r){return J(V(e,t.length-n),t,n,r)}function A(t,e,n,r){return J(H(e),t,n,r)}function x(t,e,n,r){return A(t,e,n,r)}function S(t,e,n,r){return J(X(e),t,n,r)}function k(t,e,n,r){return J(z(e,t.length-n),t,n,r)}function C(t,e,n){return 0===e&&n===t.length?Y.fromByteArray(t):Y.fromByteArray(t.slice(e,n))}function T(t,e,n){n=Math.min(t.length,n);for(var r=[],i=e;n>i;){var o=t[i],a=null,s=o>239?4:o>223?3:o>191?2:1;if(n>=i+s){var u,h,c,f;switch(s){case 1:128>o&&(a=o);break;case 2:u=t[i+1],128===(192&u)&&(f=(31&o)<<6|63&u,f>127&&(a=f));break;case 3:u=t[i+1],h=t[i+2],128===(192&u)&&128===(192&h)&&(f=(15&o)<<12|(63&u)<<6|63&h,f>2047&&(55296>f||f>57343)&&(a=f));break;case 4:u=t[i+1],h=t[i+2],c=t[i+3],128===(192&u)&&128===(192&h)&&128===(192&c)&&(f=(15&o)<<18|(63&u)<<12|(63&h)<<6|63&c,f>65535&&1114112>f&&(a=f))}}null===a?(a=65533,s=1):a>65535&&(a-=65536,r.push(a>>>10&1023|55296),a=56320|1023&a),r.push(a),i+=s}return _(r)}function _(t){var e=t.length;if($>=e)return String.fromCharCode.apply(String,t);for(var n="",r=0;e>r;)n+=String.fromCharCode.apply(String,t.slice(r,r+=$));return n}function O(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;n>i;i++)r+=String.fromCharCode(127&t[i]);return r}function B(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;n>i;i++)r+=String.fromCharCode(t[i]);return r}function L(t,e,n){var r=t.length;(!e||0>e)&&(e=0),(!n||0>n||n>r)&&(n=r);for(var i="",o=e;n>o;o++)i+=F(t[o]);return i}function R(t,e,n){for(var r=t.slice(e,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function j(t,e,n){if(t%1!==0||0>t)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function P(e,n,r,i,o,a){if(!t.isBuffer(e))throw new TypeError("buffer must be a Buffer instance");if(n>o||a>n)throw new RangeError("value is out of bounds");if(r+i>e.length)throw new RangeError("index out of range")}function U(t,e,n,r){0>e&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-n,2);o>i;i++)t[n+i]=(e&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function W(t,e,n,r){0>e&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-n,4);o>i;i++)t[n+i]=e>>>8*(r?i:3-i)&255}function I(t,e,n,r,i,o){if(e>i||o>e)throw new RangeError("value is out of bounds");if(n+r>t.length)throw new RangeError("index out of range");if(0>n)throw new RangeError("index out of range")}function D(t,e,n,r,i){return i||I(t,e,n,4,3.4028234663852886e38,-3.4028234663852886e38),G.write(t,e,n,r,23,4),n+4}function M(t,e,n,r,i){return i||I(t,e,n,8,1.7976931348623157e308,-1.7976931348623157e308),G.write(t,e,n,r,52,8),n+8}function N(t){if(t=q(t).replace(tt,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function q(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function F(t){return 16>t?"0"+t.toString(16):t.toString(16)}function V(t,e){e=e||1/0;for(var n,r=t.length,i=null,o=[],a=0;r>a;a++){if(n=t.charCodeAt(a),n>55295&&57344>n){if(!i){if(n>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(a+1===r){(e-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(56320>n){(e-=3)>-1&&o.push(239,191,189),i=n;continue}n=(i-55296<<10|n-56320)+65536}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,128>n){if((e-=1)<0)break;o.push(n)}else if(2048>n){if((e-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(65536>n){if((e-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(1114112>n))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function H(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e}function z(t,e){for(var n,r,i,o=[],a=0;a<t.length&&!((e-=2)<0);a++)n=t.charCodeAt(a),r=n>>8,i=n%256,o.push(i),o.push(r);return o}function X(t){return Y.toByteArray(N(t))}function J(t,e,n,r){for(var i=0;r>i&&!(i+n>=e.length||i>=t.length);i++)e[i+n]=t[i];return i}var Y=n(226),G=n(268),K=n(229);e.Buffer=t,e.SlowBuffer=v,e.INSPECT_MAX_BYTES=50,t.poolSize=8192;var Q={};t.TYPED_ARRAY_SUPPORT=void 0!==r.TYPED_ARRAY_SUPPORT?r.TYPED_ARRAY_SUPPORT:i(),t.TYPED_ARRAY_SUPPORT?(t.prototype.__proto__=Uint8Array.prototype,t.__proto__=Uint8Array):(t.prototype.length=void 0,t.prototype.parent=void 0),t.isBuffer=function(t){return!(null==t||!t._isBuffer)},t.compare=function(e,n){if(!t.isBuffer(e)||!t.isBuffer(n))throw new TypeError("Arguments must be Buffers");if(e===n)return 0;for(var r=e.length,i=n.length,o=0,a=Math.min(r,i);a>o&&e[o]===n[o];)++o;return o!==a&&(r=e[o],i=n[o]),i>r?-1:r>i?1:0},t.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},t.concat=function(e,n){if(!K(e))throw new TypeError("list argument must be an Array of Buffers.");if(0===e.length)return new t(0);var r;if(void 0===n)for(n=0,r=0;r<e.length;r++)n+=e[r].length;var i=new t(n),o=0;for(r=0;r<e.length;r++){var a=e[r];a.copy(i,o),o+=a.length}return i},t.byteLength=b,t.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?T(this,0,t):m.apply(this,arguments)},t.prototype.equals=function(e){if(!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:0===t.compare(this,e)},t.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},t.prototype.compare=function(e){if(!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?0:t.compare(this,e)},t.prototype.indexOf=function(e,n){function r(t,e,n){for(var r=-1,i=0;n+i<t.length;i++)if(t[n+i]===e[-1===r?0:i-r]){if(-1===r&&(r=i),i-r+1===e.length)return n+r}else r=-1;return-1}if(n>2147483647?n=2147483647:-2147483648>n&&(n=-2147483648),n>>=0,0===this.length)return-1;if(n>=this.length)return-1;if(0>n&&(n=Math.max(this.length+n,0)),"string"==typeof e)return 0===e.length?-1:String.prototype.indexOf.call(this,e,n);if(t.isBuffer(e))return r(this,e,n);if("number"==typeof e)return t.TYPED_ARRAY_SUPPORT&&"function"===Uint8Array.prototype.indexOf?Uint8Array.prototype.indexOf.call(this,e,n):r(this,[e],n);throw new TypeError("val must be string, number or Buffer")},t.prototype.get=function(t){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(t)},t.prototype.set=function(t,e){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(t,e)},t.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else if(isFinite(e))e=0|e,isFinite(n)?(n=0|n,void 0===r&&(r="utf8")):(r=n,n=void 0);else{var i=r;r=e,e=0|n,n=i}var o=this.length-e;if((void 0===n||n>o)&&(n=o),t.length>0&&(0>n||0>e)||e>this.length)throw new RangeError("attempt to write outside buffer bounds");r||(r="utf8");for(var a=!1;;)switch(r){case"hex":return w(this,t,e,n);case"utf8":case"utf-8":return E(this,t,e,n);case"ascii":return A(this,t,e,n);case"binary":return x(this,t,e,n);case"base64":return S(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,t,e,n);default:if(a)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),a=!0}},t.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var $=4096;t.prototype.slice=function(e,n){var r=this.length;e=~~e,n=void 0===n?r:~~n,0>e?(e+=r,0>e&&(e=0)):e>r&&(e=r),0>n?(n+=r,0>n&&(n=0)):n>r&&(n=r),e>n&&(n=e);var i;if(t.TYPED_ARRAY_SUPPORT)i=t._augment(this.subarray(e,n));else{var o=n-e;i=new t(o,void 0);for(var a=0;o>a;a++)i[a]=this[a+e]}return i.length&&(i.parent=this.parent||this),i},t.prototype.readUIntLE=function(t,e,n){t=0|t,e=0|e,n||j(t,e,this.length);for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i;return r},t.prototype.readUIntBE=function(t,e,n){t=0|t,e=0|e,n||j(t,e,this.length);for(var r=this[t+--e],i=1;e>0&&(i*=256);)r+=this[t+--e]*i;return r},t.prototype.readUInt8=function(t,e){return e||j(t,1,this.length),this[t]},t.prototype.readUInt16LE=function(t,e){return e||j(t,2,this.length),this[t]|this[t+1]<<8},t.prototype.readUInt16BE=function(t,e){return e||j(t,2,this.length),this[t]<<8|this[t+1]},t.prototype.readUInt32LE=function(t,e){return e||j(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},t.prototype.readUInt32BE=function(t,e){return e||j(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},t.prototype.readIntLE=function(t,e,n){t=0|t,e=0|e,n||j(t,e,this.length);for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},t.prototype.readIntBE=function(t,e,n){t=0|t,e=0|e,n||j(t,e,this.length);for(var r=e,i=1,o=this[t+--r];r>0&&(i*=256);)o+=this[t+--r]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},t.prototype.readInt8=function(t,e){return e||j(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},t.prototype.readInt16LE=function(t,e){e||j(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},t.prototype.readInt16BE=function(t,e){e||j(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},t.prototype.readInt32LE=function(t,e){return e||j(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},t.prototype.readInt32BE=function(t,e){return e||j(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},t.prototype.readFloatLE=function(t,e){return e||j(t,4,this.length),G.read(this,t,!0,23,4)},t.prototype.readFloatBE=function(t,e){return e||j(t,4,this.length),G.read(this,t,!1,23,4)},t.prototype.readDoubleLE=function(t,e){return e||j(t,8,this.length),G.read(this,t,!0,52,8)},t.prototype.readDoubleBE=function(t,e){return e||j(t,8,this.length),G.read(this,t,!1,52,8)},t.prototype.writeUIntLE=function(t,e,n,r){t=+t,e=0|e,n=0|n,r||P(this,t,e,n,Math.pow(2,8*n),0);var i=1,o=0;for(this[e]=255&t;++o<n&&(i*=256);)this[e+o]=t/i&255;return e+n},t.prototype.writeUIntBE=function(t,e,n,r){t=+t,e=0|e,n=0|n,r||P(this,t,e,n,Math.pow(2,8*n),0);var i=n-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+n},t.prototype.writeUInt8=function(e,n,r){return e=+e,n=0|n,r||P(this,e,n,1,255,0),t.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[n]=255&e,n+1},t.prototype.writeUInt16LE=function(e,n,r){return e=+e,n=0|n,r||P(this,e,n,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[n]=255&e,this[n+1]=e>>>8):U(this,e,n,!0),n+2},t.prototype.writeUInt16BE=function(e,n,r){return e=+e,n=0|n,r||P(this,e,n,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[n]=e>>>8,this[n+1]=255&e):U(this,e,n,!1),n+2},t.prototype.writeUInt32LE=function(e,n,r){return e=+e,n=0|n,r||P(this,e,n,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[n+3]=e>>>24,this[n+2]=e>>>16,this[n+1]=e>>>8,this[n]=255&e):W(this,e,n,!0),n+4},t.prototype.writeUInt32BE=function(e,n,r){return e=+e,n=0|n,r||P(this,e,n,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=255&e):W(this,e,n,!1),n+4},t.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e=0|e,!r){var i=Math.pow(2,8*n-1);P(this,t,e,n,i-1,-i)}var o=0,a=1,s=0>t?1:0;for(this[e]=255&t;++o<n&&(a*=256);)this[e+o]=(t/a>>0)-s&255;return e+n},t.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e=0|e,!r){var i=Math.pow(2,8*n-1);P(this,t,e,n,i-1,-i)}var o=n-1,a=1,s=0>t?1:0;for(this[e+o]=255&t;--o>=0&&(a*=256);)this[e+o]=(t/a>>0)-s&255;return e+n},t.prototype.writeInt8=function(e,n,r){return e=+e,n=0|n,r||P(this,e,n,1,127,-128),t.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),0>e&&(e=255+e+1),this[n]=255&e,n+1},t.prototype.writeInt16LE=function(e,n,r){return e=+e,n=0|n,r||P(this,e,n,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[n]=255&e,this[n+1]=e>>>8):U(this,e,n,!0),n+2},t.prototype.writeInt16BE=function(e,n,r){return e=+e,n=0|n,r||P(this,e,n,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[n]=e>>>8,this[n+1]=255&e):U(this,e,n,!1),n+2},t.prototype.writeInt32LE=function(e,n,r){return e=+e,n=0|n,r||P(this,e,n,4,2147483647,-2147483648),t.TYPED_ARRAY_SUPPORT?(this[n]=255&e,this[n+1]=e>>>8,this[n+2]=e>>>16,this[n+3]=e>>>24):W(this,e,n,!0),n+4},t.prototype.writeInt32BE=function(e,n,r){return e=+e,n=0|n,r||P(this,e,n,4,2147483647,-2147483648),0>e&&(e=4294967295+e+1),t.TYPED_ARRAY_SUPPORT?(this[n]=e>>>24,this[n+1]=e>>>16,this[n+2]=e>>>8,this[n+3]=255&e):W(this,e,n,!1),n+4},t.prototype.writeFloatLE=function(t,e,n){return D(this,t,e,!0,n)},t.prototype.writeFloatBE=function(t,e,n){return D(this,t,e,!1,n)},t.prototype.writeDoubleLE=function(t,e,n){return M(this,t,e,!0,n)},t.prototype.writeDoubleBE=function(t,e,n){return M(this,t,e,!1,n)},t.prototype.copy=function(e,n,r,i){if(r||(r=0),i||0===i||(i=this.length),n>=e.length&&(n=e.length),n||(n=0),i>0&&r>i&&(i=r),i===r)return 0;if(0===e.length||0===this.length)return 0;if(0>n)throw new RangeError("targetStart out of bounds");if(0>r||r>=this.length)throw new RangeError("sourceStart out of bounds");if(0>i)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-n<i-r&&(i=e.length-n+r);var o,a=i-r;if(this===e&&n>r&&i>n)for(o=a-1;o>=0;o--)e[o+n]=this[o+r];else if(1e3>a||!t.TYPED_ARRAY_SUPPORT)for(o=0;a>o;o++)e[o+n]=this[o+r];else e._set(this.subarray(r,r+a),n);return a},t.prototype.fill=function(t,e,n){if(t||(t=0),e||(e=0),n||(n=this.length),e>n)throw new RangeError("end < start");if(n!==e&&0!==this.length){if(0>e||e>=this.length)throw new RangeError("start out of bounds");if(0>n||n>this.length)throw new RangeError("end out of bounds");var r;if("number"==typeof t)for(r=e;n>r;r++)this[r]=t;else{var i=V(t.toString()),o=i.length;for(r=e;n>r;r++)this[r]=i[r%o]}return this}},t.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(t.TYPED_ARRAY_SUPPORT)return new t(this).buffer;for(var e=new Uint8Array(this.length),n=0,r=e.length;r>n;n+=1)e[n]=this[n];return e.buffer}throw new TypeError("Buffer.toArrayBuffer not supported in this browser")};var Z=t.prototype;t._augment=function(e){return e.constructor=t,e._isBuffer=!0,e._set=e.set,e.get=Z.get,e.set=Z.set,e.write=Z.write,e.toString=Z.toString,e.toLocaleString=Z.toString,e.toJSON=Z.toJSON,e.equals=Z.equals,e.compare=Z.compare,e.indexOf=Z.indexOf,e.copy=Z.copy,e.slice=Z.slice,e.readUIntLE=Z.readUIntLE,e.readUIntBE=Z.readUIntBE,e.readUInt8=Z.readUInt8,e.readUInt16LE=Z.readUInt16LE,e.readUInt16BE=Z.readUInt16BE,e.readUInt32LE=Z.readUInt32LE,e.readUInt32BE=Z.readUInt32BE,e.readIntLE=Z.readIntLE,e.readIntBE=Z.readIntBE,e.readInt8=Z.readInt8,e.readInt16LE=Z.readInt16LE,e.readInt16BE=Z.readInt16BE,e.readInt32LE=Z.readInt32LE,e.readInt32BE=Z.readInt32BE,e.readFloatLE=Z.readFloatLE,e.readFloatBE=Z.readFloatBE,e.readDoubleLE=Z.readDoubleLE,e.readDoubleBE=Z.readDoubleBE,e.writeUInt8=Z.writeUInt8,e.writeUIntLE=Z.writeUIntLE,e.writeUIntBE=Z.writeUIntBE,e.writeUInt16LE=Z.writeUInt16LE,e.writeUInt16BE=Z.writeUInt16BE,e.writeUInt32LE=Z.writeUInt32LE,e.writeUInt32BE=Z.writeUInt32BE,e.writeIntLE=Z.writeIntLE,e.writeIntBE=Z.writeIntBE,e.writeInt8=Z.writeInt8,e.writeInt16LE=Z.writeInt16LE,e.writeInt16BE=Z.writeInt16BE,e.writeInt32LE=Z.writeInt32LE,e.writeInt32BE=Z.writeInt32BE,e.writeFloatLE=Z.writeFloatLE,e.writeFloatBE=Z.writeFloatBE,e.writeDoubleLE=Z.writeDoubleLE,e.writeDoubleBE=Z.writeDoubleBE,e.fill=Z.fill,e.inspect=Z.inspect,e.toArrayBuffer=Z.toArrayBuffer,e};var tt=/[^+\/0-9A-Za-z-_]/g}).call(e,n(46).Buffer,function(){return this}())},47:function(t,e,n){(function(t){function r(t,n){var r="b"+e.packets[t.type]+t.data.data;return n(r)}function i(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var i=t.data,o=new Uint8Array(i),a=new Uint8Array(1+i.byteLength);a[0]=v[t.type];for(var s=0;s<o.length;s++)a[s+1]=o[s];return r(a.buffer)}function o(t,n,r){if(!n)return e.encodeBase64Packet(t,r);var i=new FileReader;return i.onload=function(){t.data=i.result,e.encodePacket(t,n,!0,r)},i.readAsArrayBuffer(t.data)}function a(t,n,r){if(!n)return e.encodeBase64Packet(t,r);if(y)return o(t,n,r);var i=new Uint8Array(1);i[0]=v[t.type];var a=new w([i.buffer,t.data]);return r(a)}function s(t,e,n){for(var r=new Array(t.length),i=l(t.length,n),o=function(t,n,i){e(n,function(e,n){r[t]=n,i(e,r)})},a=0;a<t.length;a++)o(a,t[a],i)}var u=n(243),h=n(244),c=n(224),f=n(225),l=n(223),p=n(479),d=navigator.userAgent.match(/Android/i),g=/PhantomJS/i.test(navigator.userAgent),y=d||g;e.protocol=3;var v=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=u(v),m={type:"error",data:"parser error"},w=n(227);e.encodePacket=function(e,n,o,s){"function"==typeof n&&(s=n,n=!1),"function"==typeof o&&(s=o,o=null);var u=void 0===e.data?void 0:e.data.buffer||e.data;if(t.ArrayBuffer&&u instanceof ArrayBuffer)return i(e,n,s);if(w&&u instanceof t.Blob)return a(e,n,s);if(u&&u.base64)return r(e,s);var h=v[e.type];return void 0!==e.data&&(h+=o?p.encode(String(e.data)):String(e.data)),s(""+h)},e.encodeBase64Packet=function(n,r){var i="b"+e.packets[n.type];if(w&&n.data instanceof t.Blob){var o=new FileReader;return o.onload=function(){var t=o.result.split(",")[1];r(i+t)},o.readAsDataURL(n.data)}var a;try{a=String.fromCharCode.apply(null,new Uint8Array(n.data))}catch(s){for(var u=new Uint8Array(n.data),h=new Array(u.length),c=0;c<u.length;c++)h[c]=u[c];a=String.fromCharCode.apply(null,h)}return i+=t.btoa(a),r(i)},e.decodePacket=function(t,n,r){if("string"==typeof t||void 0===t){if("b"==t.charAt(0))return e.decodeBase64Packet(t.substr(1),n);if(r)try{t=p.decode(t)}catch(i){return m}var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:m}var a=new Uint8Array(t),o=a[0],s=c(t,1);return w&&"blob"===n&&(s=new w([s])),{type:b[o],data:s}},e.decodeBase64Packet=function(e,n){var r=b[e.charAt(0)];if(!t.ArrayBuffer)return{type:r,data:{base64:!0,data:e.substr(1)}};var i=f.decode(e.substr(1));return"blob"===n&&w&&(i=new w([i])),{type:r,data:i}},e.encodePayload=function(t,n,r){function i(t){return t.length+":"+t}function o(t,r){e.encodePacket(t,a?n:!1,!0,function(t){r(null,i(t))})}"function"==typeof n&&(r=n,n=null);var a=h(t);return n&&a?w&&!y?e.encodePayloadAsBlob(t,r):e.encodePayloadAsArrayBuffer(t,r):t.length?void s(t,o,function(t,e){return r(e.join(""))}):r("0:")},e.decodePayload=function(t,n,r){if("string"!=typeof t)return e.decodePayloadAsBinary(t,n,r);"function"==typeof n&&(r=n,n=null);var i;if(""==t)return r(m,0,1);for(var o,a,s="",u=0,h=t.length;h>u;u++){var c=t.charAt(u);if(":"!=c)s+=c;else{if(""==s||s!=(o=Number(s)))return r(m,0,1);if(a=t.substr(u+1,o),s!=a.length)return r(m,0,1);if(a.length){if(i=e.decodePacket(a,n,!0),m.type==i.type&&m.data==i.data)return r(m,0,1);var f=r(i,u+o,h);if(!1===f)return}u+=o,s=""}}return""!=s?r(m,0,1):void 0},e.encodePayloadAsArrayBuffer=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){return n(null,t)})}return t.length?void s(t,r,function(t,e){var r=e.reduce(function(t,e){var n;return n="string"==typeof e?e.length:e.byteLength,t+n.toString().length+n+2},0),i=new Uint8Array(r),o=0;return e.forEach(function(t){var e="string"==typeof t,n=t;if(e){for(var r=new Uint8Array(t.length),a=0;a<t.length;a++)r[a]=t.charCodeAt(a);n=r.buffer}e?i[o++]=0:i[o++]=1;for(var s=n.byteLength.toString(),a=0;a<s.length;a++)i[o++]=parseInt(s[a]);i[o++]=255;for(var r=new Uint8Array(n),a=0;a<r.length;a++)i[o++]=r[a]}),n(i.buffer)}):n(new ArrayBuffer(0))},e.encodePayloadAsBlob=function(t,n){function r(t,n){e.encodePacket(t,!0,!0,function(t){var e=new Uint8Array(1);if(e[0]=1,"string"==typeof t){for(var r=new Uint8Array(t.length),i=0;i<t.length;i++)r[i]=t.charCodeAt(i);t=r.buffer,e[0]=0}for(var o=t instanceof ArrayBuffer?t.byteLength:t.size,a=o.toString(),s=new Uint8Array(a.length+1),i=0;i<a.length;i++)s[i]=parseInt(a[i]);if(s[a.length]=255,w){var u=new w([e.buffer,s.buffer,t]);n(null,u)}})}s(t,r,function(t,e){return n(new w(e))})},e.decodePayloadAsBinary=function(t,n,r){"function"==typeof n&&(r=n,n=null);for(var i=t,o=[],a=!1;i.byteLength>0;){for(var s=new Uint8Array(i),u=0===s[0],h="",f=1;255!=s[f];f++){if(h.length>310){a=!0;break}h+=s[f]}if(a)return r(m,0,1);i=c(i,2+h.length),h=parseInt(h);var l=c(i,0,h);if(u)try{l=String.fromCharCode.apply(null,new Uint8Array(l))}catch(p){var d=new Uint8Array(l);l="";for(var f=0;f<d.length;f++)l+=String.fromCharCode(d[f])}o.push(l),i=c(i,h)}var g=o.length;o.forEach(function(t,i){r(e.decodePacket(t,n,!0),i,g)})}}).call(e,function(){return this}())},57:function(t,e,n){(function(t){function n(t){return Array.isArray?Array.isArray(t):"[object Array]"===y(t)}function r(t){return"boolean"==typeof t}function i(t){return null===t}function o(t){return null==t}function a(t){return"number"==typeof t}function s(t){return"string"==typeof t}function u(t){return"symbol"==typeof t}function h(t){return void 0===t}function c(t){return"[object RegExp]"===y(t)}function f(t){return"object"==typeof t&&null!==t}function l(t){return"[object Date]"===y(t)}function p(t){return"[object Error]"===y(t)||t instanceof Error}function d(t){return"function"==typeof t}function g(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||"undefined"==typeof t}function y(t){return Object.prototype.toString.call(t)}e.isArray=n,e.isBoolean=r,e.isNull=i,e.isNullOrUndefined=o,e.isNumber=a,e.isString=s,e.isSymbol=u,e.isUndefined=h,e.isRegExp=c,e.isObject=f,e.isDate=l,e.isError=p,e.isFunction=d,e.isPrimitive=g,e.isBuffer=t.isBuffer}).call(e,n(46).Buffer)},65:function(t,e,n){function r(){i.call(this)}t.exports=r;var i=n(93).EventEmitter,o=n(31);o(r,i),r.Readable=n(470),r.Writable=n(472),r.Duplex=n(468),r.Transform=n(471),r.PassThrough=n(469),r.Stream=r,r.prototype.pipe=function(t,e){function n(e){t.writable&&!1===t.write(e)&&h.pause&&h.pause()}function r(){h.readable&&h.resume&&h.resume()}function o(){c||(c=!0,t.end())}function a(){c||(c=!0,"function"==typeof t.destroy&&t.destroy())}function s(t){if(u(),0===i.listenerCount(this,"error"))throw t}function u(){h.removeListener("data",n),t.removeListener("drain",r),h.removeListener("end",o),h.removeListener("close",a),h.removeListener("error",s),t.removeListener("error",s),h.removeListener("end",u),h.removeListener("close",u),t.removeListener("close",u)}var h=this;h.on("data",n),t.on("drain",r),t._isStdio||e&&e.end===!1||(h.on("end",o),h.on("close",a));var c=!1;return h.on("error",s),t.on("error",s),h.on("end",u),h.on("close",u),t.on("close",u),t.emit("pipe",h),t}},66:function(t,e){t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},67:function(t,e,n){function r(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function i(){var t=arguments,n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),!n)return t;var r="color: "+this.color;t=[t[0],r,"color: inherit"].concat(Array.prototype.slice.call(t,1));var i=0,o=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(i++,"%c"===t&&(o=i))}),t.splice(o,0,r),t}function o(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(n){}}function s(){var t;try{t=e.storage.debug}catch(n){}return t}function u(){try{return window.localStorage}catch(t){}}e=t.exports=n(233),e.log=o,e.formatArgs=i,e.save=a,e.load=s,e.useColors=r,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){return JSON.stringify(t)},e.enable(s())},79:function(t,e){function n(){h=!1,a.length?u=a.concat(u):c=-1,u.length&&r()}function r(){if(!h){var t=setTimeout(n);h=!0;for(var e=u.length;e;){for(a=u,u=[];++c<e;)a&&a[c].run();c=-1,e=u.length}a=null,h=!1,clearTimeout(t)}}function i(t,e){this.fun=t,this.array=e}function o(){}var a,s=t.exports={},u=[],h=!1,c=-1;s.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new i(t,e)),1!==u.length||h||setTimeout(r,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=o,s.addListener=o,s.once=o,s.off=o,s.removeListener=o,s.removeAllListeners=o,s.emit=o,s.binding=function(t){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},90:function(t,e,n){function r(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders}var i=n(47),o=n(92);t.exports=r,o(r.prototype),r.prototype.onError=function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,this.emit("error",n),this},r.prototype.open=function(){return"closed"!=this.readyState&&""!=this.readyState||(this.readyState="opening",this.doOpen()),this},r.prototype.close=function(){return"opening"!=this.readyState&&"open"!=this.readyState||(this.doClose(),this.onClose()),this},r.prototype.send=function(t){if("open"!=this.readyState)throw new Error("Transport not open");this.write(t)},r.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},r.prototype.onData=function(t){var e=i.decodePacket(t,this.socket.binaryType);this.onPacket(e)},r.prototype.onPacket=function(t){this.emit("packet",t)},r.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},91:function(t,e,n){var r=n(259);t.exports=function(t){var e=t.xdomain,n=t.xscheme,i=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!e||r))return new XMLHttpRequest}catch(o){}try{if("undefined"!=typeof XDomainRequest&&!n&&i)return new XDomainRequest}catch(o){}if(!e)try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(o){}}},92:function(t,e){function n(t){return t?r(t):void 0}function r(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){r.off(t,n),e.apply(this,arguments)}var r=this;return this._callbacks=this._callbacks||{},n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks[t];if(!n)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks[t];if(n){n=n.slice(0);for(var r=0,i=n.length;i>r;++r)n[r].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},93:function(t,e){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(t){return"function"==typeof t}function i(t){return"number"==typeof t}function o(t){return"object"==typeof t&&null!==t}function a(t){return void 0===t}t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if(!i(t)||0>t||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},n.prototype.emit=function(t){var e,n,i,s,u,h;if(this._events||(this._events={}),"error"===t&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if(e=arguments[1],e instanceof Error)throw e;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[t],a(n))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),n.apply(this,s)}else if(o(n))for(s=Array.prototype.slice.call(arguments,1),h=n.slice(),i=h.length,u=0;i>u;u++)h[u].apply(this,s);return!0},n.prototype.addListener=function(t,e){var i;if(!r(e))throw TypeError("listener must be a function");
return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,r(e.listener)?e.listener:e),this._events[t]?o(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,o(this._events[t])&&!this._events[t].warned&&(i=a(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,i&&i>0&&this._events[t].length>i&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(t,e){function n(){this.removeListener(t,n),i||(i=!0,e.apply(this,arguments))}if(!r(e))throw TypeError("listener must be a function");var i=!1;return n.listener=e,this.on(t,n),this},n.prototype.removeListener=function(t,e){var n,i,a,s;if(!r(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(n=this._events[t],a=n.length,i=-1,n===e||r(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(o(n)){for(s=a;s-- >0;)if(n[s]===e||n[s].listener&&n[s].listener===e){i=s;break}if(0>i)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(i,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},n.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[t],r(n))this.removeListener(t,n);else if(n)for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},n.prototype.listeners=function(t){var e;return e=this._events&&this._events[t]?r(this._events[t])?[this._events[t]]:this._events[t].slice():[]},n.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(r(e))return 1;if(e)return e.length}return 0},n.listenerCount=function(t,e){return t.listenerCount(e)}},104:function(t,e){e.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split("&"),r=0,i=n.length;i>r;r++){var o=n[r].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}},134:function(t,e,n){function r(t,e){this.afterTransform=function(t,n){return i(e,t,n)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null}function i(t,e,n){var r=t._transformState;r.transforming=!1;var i=r.writecb;if(!i)return t.emit("error",new Error("no writecb in Transform class"));r.writechunk=null,r.writecb=null,u.isNullOrUndefined(n)||t.push(n),i&&i(e);var o=t._readableState;o.reading=!1,(o.needReadable||o.length<o.highWaterMark)&&t._read(o.highWaterMark)}function o(t){if(!(this instanceof o))return new o(t);s.call(this,t),this._transformState=new r(t,this);var e=this;this._readableState.needReadable=!0,this._readableState.sync=!1,this.once("prefinish",function(){u.isFunction(this._flush)?this._flush(function(t){a(e,t)}):a(e)})}function a(t,e){if(e)return t.emit("error",e);var n=t._writableState,r=t._transformState;if(n.length)throw new Error("calling transform done when ws.length != 0");if(r.transforming)throw new Error("calling transform done when still transforming");return t.push(null)}t.exports=o;var s=n(45),u=n(57);u.inherits=n(31),u.inherits(o,s),o.prototype.push=function(t,e){return this._transformState.needTransform=!1,s.prototype.push.call(this,t,e)},o.prototype._transform=function(t,e,n){throw new Error("not implemented")},o.prototype._write=function(t,e,n){var r=this._transformState;if(r.writecb=n,r.writechunk=t,r.writeencoding=e,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},o.prototype._read=function(t){var e=this._transformState;u.isNull(e.writechunk)||!e.writecb||e.transforming?e.needTransform=!0:(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform))}},135:function(t,e,n){(function(e){function r(t,e,n){this.chunk=t,this.encoding=e,this.callback=n}function i(t,e){var r=n(45);t=t||{};var i=t.highWaterMark,o=t.objectMode?16:16384;this.highWaterMark=i||0===i?i:o,this.objectMode=!!t.objectMode,e instanceof r&&(this.objectMode=this.objectMode||!!t.writableObjectMode),this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1;var a=t.decodeStrings===!1;this.decodeStrings=!a,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){p(e,t)},this.writecb=null,this.writelen=0,this.buffer=[],this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1}function o(t){var e=n(45);return this instanceof o||this instanceof e?(this._writableState=new i(t,this),this.writable=!0,void x.call(this)):new o(t)}function a(t,n,r){var i=new Error("write after end");t.emit("error",i),e.nextTick(function(){r(i)})}function s(t,n,r,i){var o=!0;if(!(A.isBuffer(r)||A.isString(r)||A.isNullOrUndefined(r)||n.objectMode)){var a=new TypeError("Invalid non-string/buffer chunk");t.emit("error",a),e.nextTick(function(){i(a)}),o=!1}return o}function u(t,e,n){return!t.objectMode&&t.decodeStrings!==!1&&A.isString(e)&&(e=new E(e,n)),e}function h(t,e,n,i,o){n=u(e,n,i),A.isBuffer(n)&&(i="buffer");var a=e.objectMode?1:n.length;e.length+=a;var s=e.length<e.highWaterMark;return s||(e.needDrain=!0),e.writing||e.corked?e.buffer.push(new r(n,i,o)):c(t,e,!1,a,n,i,o),s}function c(t,e,n,r,i,o,a){e.writelen=r,e.writecb=a,e.writing=!0,e.sync=!0,n?t._writev(i,e.onwrite):t._write(i,o,e.onwrite),e.sync=!1}function f(t,n,r,i,o){r?e.nextTick(function(){n.pendingcb--,o(i)}):(n.pendingcb--,o(i)),t._writableState.errorEmitted=!0,t.emit("error",i)}function l(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}function p(t,n){var r=t._writableState,i=r.sync,o=r.writecb;if(l(r),n)f(t,r,i,n,o);else{var a=v(t,r);a||r.corked||r.bufferProcessing||!r.buffer.length||y(t,r),i?e.nextTick(function(){d(t,r,a,o)}):d(t,r,a,o)}}function d(t,e,n,r){n||g(t,e),e.pendingcb--,r(),m(t,e)}function g(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}function y(t,e){if(e.bufferProcessing=!0,t._writev&&e.buffer.length>1){for(var n=[],r=0;r<e.buffer.length;r++)n.push(e.buffer[r].callback);e.pendingcb++,c(t,e,!0,e.length,e.buffer,"",function(t){for(var r=0;r<n.length;r++)e.pendingcb--,n[r](t)}),e.buffer=[]}else{for(var r=0;r<e.buffer.length;r++){var i=e.buffer[r],o=i.chunk,a=i.encoding,s=i.callback,u=e.objectMode?1:o.length;if(c(t,e,!1,u,o,a,s),e.writing){r++;break}}r<e.buffer.length?e.buffer=e.buffer.slice(r):e.buffer.length=0}e.bufferProcessing=!1}function v(t,e){return e.ending&&0===e.length&&!e.finished&&!e.writing}function b(t,e){e.prefinished||(e.prefinished=!0,t.emit("prefinish"))}function m(t,e){var n=v(t,e);return n&&(0===e.pendingcb?(b(t,e),e.finished=!0,t.emit("finish")):b(t,e)),n}function w(t,n,r){n.ending=!0,m(t,n),r&&(n.finished?e.nextTick(r):t.once("finish",r)),n.ended=!0}t.exports=o;var E=n(46).Buffer;o.WritableState=i;var A=n(57);A.inherits=n(31);var x=n(65);A.inherits(o,x),o.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe. Not readable."))},o.prototype.write=function(t,e,n){var r=this._writableState,i=!1;return A.isFunction(e)&&(n=e,e=null),A.isBuffer(t)?e="buffer":e||(e=r.defaultEncoding),A.isFunction(n)||(n=function(){}),r.ended?a(this,r,n):s(this,r,t,n)&&(r.pendingcb++,i=h(this,r,t,e,n)),i},o.prototype.cork=function(){var t=this._writableState;t.corked++},o.prototype.uncork=function(){var t=this._writableState;t.corked&&(t.corked--,t.writing||t.corked||t.finished||t.bufferProcessing||!t.buffer.length||y(this,t))},o.prototype._write=function(t,e,n){n(new Error("not implemented"))},o.prototype._writev=null,o.prototype.end=function(t,e,n){var r=this._writableState;A.isFunction(t)?(n=t,t=null,e=null):A.isFunction(e)&&(n=e,e=null),A.isNullOrUndefined(t)||this.write(t,e),r.corked&&(r.corked=1,this.uncork()),r.ending||r.finished||w(this,r,n)}}).call(e,n(79))},137:function(module,exports,__webpack_require__){var require,require;(function(global,Buffer){!function(t){module.exports=t()}(function(){var t;return function e(t,n,r){function i(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return require(a,!0);if(o)return o(a,!0);var h=new Error("Cannot find module '"+a+"'");throw h.code="MODULE_NOT_FOUND",h}var c=n[a]={exports:{}};t[a][0].call(c.exports,function(e){var n=t[a][1][e];return i(n?n:e)},c,c.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(t,e,n){e.exports=t("./lib/")},{"./lib/":2}],2:[function(t,e,n){e.exports=t("./socket"),e.exports.parser=t("engine.io-parser")},{"./socket":3,"engine.io-parser":20}],3:[function(t,e,n){(function(n){function r(t,e){if(!(this instanceof r))return new r(t,e);e=e||{},t&&"object"==typeof t&&(e=t,t=null),t?(t=c(t),e.hostname=t.host,e.secure="https"==t.protocol||"wss"==t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=c(e.host).host),this.secure=null!=e.secure?e.secure:n.location&&"https:"==location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.agent=e.agent||!1,this.hostname=e.hostname||(n.location?location.hostname:"localhost"),this.port=e.port||(n.location&&location.port?location.port:this.secure?443:80),this.query=e.query||{},"string"==typeof this.query&&(this.query=l.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.timestampParam=e.timestampParam||"t",this.timestampRequests=e.timestampRequests,this.transports=e.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate?e.perMessageDeflate||{}:!1,!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized?null:e.rejectUnauthorized;var i="object"==typeof n&&n;i.global===i&&e.extraHeaders&&Object.keys(e.extraHeaders).length>0&&(this.extraHeaders=e.extraHeaders),this.open()}function i(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var o=t("./transports"),a=t("component-emitter"),s=t("debug")("engine.io-client:socket"),u=t("indexof"),h=t("engine.io-parser"),c=t("parseuri"),f=t("parsejson"),l=t("parseqs");e.exports=r,r.priorWebsocketSuccess=!1,a(r.prototype),r.protocol=h.protocol,r.Socket=r,r.Transport=t("./transport"),r.transports=t("./transports"),r.parser=t("engine.io-parser"),r.prototype.createTransport=function(t){s('creating transport "%s"',t);var e=i(this.query);e.EIO=h.protocol,e.transport=t,this.id&&(e.sid=this.id);var n=new o[t]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:e,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders});return n},r.prototype.open=function(){var t;if(this.rememberUpgrade&&r.priorWebsocketSuccess&&-1!=this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(n){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},r.prototype.setTransport=function(t){s("setting transport %s",t.name);var e=this;this.transport&&(s("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},r.prototype.probe=function(t){function e(){if(l.onlyBinaryUpgrades){var e=!this.supportsBinary&&l.transport.supportsBinary;f=f||e}f||(s('probe transport "%s" opened',t),c.send([{type:"ping",data:"probe"}]),c.once("packet",function(e){if(!f)if("pong"==e.type&&"probe"==e.data){if(s('probe transport "%s" pong',t),l.upgrading=!0,l.emit("upgrading",c),!c)return;r.priorWebsocketSuccess="websocket"==c.name,s('pausing current transport "%s"',l.transport.name),l.transport.pause(function(){f||"closed"!=l.readyState&&(s("changing transport and sending upgrade packet"),h(),l.setTransport(c),c.send([{type:"upgrade"}]),l.emit("upgrade",c),c=null,l.upgrading=!1,l.flush())})}else{s('probe transport "%s" failed',t);var n=new Error("probe error");n.transport=c.name,l.emit("upgradeError",n)}}))}function n(){f||(f=!0,h(),c.close(),c=null)}function i(e){var r=new Error("probe error: "+e);r.transport=c.name,n(),s('probe transport "%s" failed because of error: %s',t,e),l.emit("upgradeError",r)}function o(){i("transport closed")}function a(){i("socket closed")}function u(t){c&&t.name!=c.name&&(s('"%s" works - aborting "%s"',t.name,c.name),n())}function h(){c.removeListener("open",e),c.removeListener("error",i),c.removeListener("close",o),l.removeListener("close",a),l.removeListener("upgrading",u)}s('probing transport "%s"',t);var c=this.createTransport(t,{probe:1}),f=!1,l=this;r.priorWebsocketSuccess=!1,c.once("open",e),c.once("error",i),c.once("close",o),this.once("close",a),this.once("upgrading",u),c.open()},r.prototype.onOpen=function(){if(s("socket open"),this.readyState="open",r.priorWebsocketSuccess="websocket"==this.transport.name,this.emit("open"),this.flush(),"open"==this.readyState&&this.upgrade&&this.transport.pause){s("starting upgrade probes");for(var t=0,e=this.upgrades.length;e>t;t++)this.probe(this.upgrades[t])}},r.prototype.onPacket=function(t){if("opening"==this.readyState||"open"==this.readyState)switch(s('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(f(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else s('packet received with socket readyState "%s"',this.readyState)},r.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!=this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},r.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!=e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},r.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){s("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},r.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},r.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},r.prototype.flush=function(){"closed"!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(s("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},r.prototype.write=r.prototype.send=function(t,e,n){return this.sendPacket("message",t,e,n),this},r.prototype.sendPacket=function(t,e,n,r){if("function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!=this.readyState&&"closed"!=this.readyState){n=n||{},n.compress=!1!==n.compress;var i={type:t,data:e,options:n};this.emit("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}},r.prototype.close=function(){function t(){r.onClose("forced close"),s("socket closing - telling transport to close"),r.transport.close()}function e(){r.removeListener("upgrade",e),r.removeListener("upgradeError",e),t()}function n(){r.once("upgrade",e),r.once("upgradeError",e)}if("opening"==this.readyState||"open"==this.readyState){this.readyState="closing";var r=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?n():t()}):this.upgrading?n():t()}return this},r.prototype.onError=function(t){s("socket error %j",t),r.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},r.prototype.onClose=function(t,e){if("opening"==this.readyState||"open"==this.readyState||"closing"==this.readyState){s('socket close with reason: "%s"',t);var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),n.writeBuffer=[],n.prevBufferLen=0}},r.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;r>n;n++)~u(this.transports,t[n])&&e.push(t[n]);return e}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./transport":4,"./transports":5,"component-emitter":16,debug:18,"engine.io-parser":20,indexof:24,parsejson:27,parseqs:28,parseuri:29}],4:[function(t,e,n){function r(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders}var i=t("engine.io-parser"),o=t("component-emitter");e.exports=r,o(r.prototype),r.prototype.onError=function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,this.emit("error",n),this},r.prototype.open=function(){return("closed"==this.readyState||""==this.readyState)&&(this.readyState="opening",this.doOpen()),this},r.prototype.close=function(){return("opening"==this.readyState||"open"==this.readyState)&&(this.doClose(),this.onClose()),this},r.prototype.send=function(t){if("open"!=this.readyState)throw new Error("Transport not open");this.write(t)},r.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},r.prototype.onData=function(t){var e=i.decodePacket(t,this.socket.binaryType);this.onPacket(e)},r.prototype.onPacket=function(t){this.emit("packet",t)},r.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},{"component-emitter":16,"engine.io-parser":20}],5:[function(t,e,n){(function(e){function r(t){var n,r=!1,s=!1,u=!1!==t.jsonp;if(e.location){var h="https:"==location.protocol,c=location.port;c||(c=h?443:80),r=t.hostname!=location.hostname||c!=t.port,s=t.secure!=h}if(t.xdomain=r,t.xscheme=s,n=new i(t),"open"in n&&!t.forceJSONP)return new o(t);if(!u)throw new Error("JSONP disabled");return new a(t)}var i=t("xmlhttprequest-ssl"),o=t("./polling-xhr"),a=t("./polling-jsonp"),s=t("./websocket");n.polling=r,n.websocket=s}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./polling-jsonp":6,"./polling-xhr":7,"./websocket":9,"xmlhttprequest-ssl":10}],6:[function(t,e,n){(function(n){function r(){}function i(t){o.call(this,t),this.query=this.query||{},s||(n.___eio||(n.___eio=[]),s=n.___eio),this.index=s.length;var e=this;s.push(function(t){e.onData(t)}),this.query.j=this.index,n.document&&n.addEventListener&&n.addEventListener("beforeunload",function(){e.script&&(e.script.onerror=r)},!1)}var o=t("./polling"),a=t("component-inherit");e.exports=i;var s,u=/\n/g,h=/\\n/g;a(i,o),i.prototype.supportsBinary=!1,i.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),o.prototype.doClose.call(this)},i.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var n=document.getElementsByTagName("script")[0];n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e;var r="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);r&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},i.prototype.doWrite=function(t,e){function n(){r(),e()}function r(){if(i.iframe)try{i.form.removeChild(i.iframe)}catch(t){i.onError("jsonp polling iframe removal error",t)}try{var e='<iframe src="javascript:0" name="'+i.iframeId+'">';o=document.createElement(e)}catch(t){o=document.createElement("iframe"),o.name=i.iframeId,o.src="javascript:0"}o.id=i.iframeId,i.form.appendChild(o),i.iframe=o}var i=this;if(!this.form){var o,a=document.createElement("form"),s=document.createElement("textarea"),c=this.iframeId="eio_iframe_"+this.index;a.className="socketio",a.style.position="absolute",a.style.top="-1000px",a.style.left="-1000px",a.target=c,a.method="POST",a.setAttribute("accept-charset","utf-8"),s.name="d",a.appendChild(s),document.body.appendChild(a),this.form=a,this.area=s}this.form.action=this.uri(),r(),t=t.replace(h,"\\\n"),this.area.value=t.replace(u,"\\n");try{this.form.submit()}catch(f){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"==i.iframe.readyState&&n()}:this.iframe.onload=n}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./polling":8,"component-inherit":17}],7:[function(t,e,n){(function(n){function r(){}function i(t){if(u.call(this,t),n.location){var e="https:"==location.protocol,r=location.port;r||(r=e?443:80),this.xd=t.hostname!=n.location.hostname||r!=t.port,this.xs=t.secure!=e}else this.extraHeaders=t.extraHeaders}function o(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!=t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function a(){for(var t in o.requests)o.requests.hasOwnProperty(t)&&o.requests[t].abort()}var s=t("xmlhttprequest-ssl"),u=t("./polling"),h=t("component-emitter"),c=t("component-inherit"),f=t("debug")("engine.io-client:polling-xhr");e.exports=i,e.exports.Request=o,c(i,u),i.prototype.supportsBinary=!0,i.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.extraHeaders=this.extraHeaders,new o(t)},i.prototype.doWrite=function(t,e){var n="string"!=typeof t&&void 0!==t,r=this.request({method:"POST",data:t,isBinary:n}),i=this;r.on("success",e),r.on("error",function(t){i.onError("xhr post error",t)}),this.sendXhr=r},i.prototype.doPoll=function(){f("xhr poll");var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},h(o.prototype),o.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var e=this.xhr=new s(t),r=this;try{f("xhr open %s: %s",this.method,this.uri),e.open(this.method,this.uri,this.async);try{if(this.extraHeaders){e.setDisableHeaderCheck(!0);for(var i in this.extraHeaders)this.extraHeaders.hasOwnProperty(i)&&e.setRequestHeader(i,this.extraHeaders[i])}}catch(a){}if(this.supportsBinary&&(e.responseType="arraybuffer"),"POST"==this.method)try{this.isBinary?e.setRequestHeader("Content-type","application/octet-stream"):e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(a){}"withCredentials"in e&&(e.withCredentials=!0),this.hasXDR()?(e.onload=function(){r.onLoad()},e.onerror=function(){r.onError(e.responseText)}):e.onreadystatechange=function(){4==e.readyState&&(200==e.status||1223==e.status?r.onLoad():setTimeout(function(){r.onError(e.status)},0))},f("xhr data %s",this.data),e.send(this.data)}catch(a){return void setTimeout(function(){r.onError(a)},0)}n.document&&(this.index=o.requestsCount++,o.requests[this.index]=this)},o.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},o.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},o.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},o.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=r:this.xhr.onreadystatechange=r,t)try{this.xhr.abort()}catch(e){}n.document&&delete o.requests[this.index],this.xhr=null}},o.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type").split(";")[0]}catch(n){}if("application/octet-stream"===e)t=this.xhr.response;else if(this.supportsBinary)try{t=String.fromCharCode.apply(null,new Uint8Array(this.xhr.response))}catch(n){for(var r=new Uint8Array(this.xhr.response),i=[],o=0,a=r.length;a>o;o++)i.push(r[o]);t=String.fromCharCode.apply(null,i)}else t=this.xhr.responseText}catch(n){this.onError(n)}null!=t&&this.onData(t)},o.prototype.hasXDR=function(){return"undefined"!=typeof n.XDomainRequest&&!this.xs&&this.enablesXDR},o.prototype.abort=function(){this.cleanup()},n.document&&(o.requestsCount=0,o.requests={},n.attachEvent?n.attachEvent("onunload",a):n.addEventListener&&n.addEventListener("beforeunload",a,!1))}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./polling":8,"component-emitter":16,"component-inherit":17,debug:18,"xmlhttprequest-ssl":10}],8:[function(t,e,n){function r(t){var e=t&&t.forceBase64;(!c||e)&&(this.supportsBinary=!1),i.call(this,t)}var i=t("../transport"),o=t("parseqs"),a=t("engine.io-parser"),s=t("component-inherit"),u=t("yeast"),h=t("debug")("engine.io-client:polling");e.exports=r;var c=function(){var e=t("xmlhttprequest-ssl"),n=new e({xdomain:!1});return null!=n.responseType}();s(r,i),r.prototype.name="polling",r.prototype.doOpen=function(){this.poll()},r.prototype.pause=function(t){function e(){h("paused"),n.readyState="paused",t()}var n=this;if(this.readyState="pausing",this.polling||!this.writable){var r=0;this.polling&&(h("we are currently polling - waiting to pause"),r++,this.once("pollComplete",function(){h("pre-pause polling complete"),--r||e()})),this.writable||(h("we are currently writing - waiting to pause"),r++,this.once("drain",function(){h("pre-pause writing complete"),--r||e()}))}else e()},r.prototype.poll=function(){h("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},r.prototype.onData=function(t){var e=this;h("polling got data %s",t);var n=function(t,n,r){return"opening"==e.readyState&&e.onOpen(),"close"==t.type?(e.onClose(),!1):void e.onPacket(t)};a.decodePayload(t,this.socket.binaryType,n),"closed"!=this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"==this.readyState?this.poll():h('ignoring poll - transport state "%s"',this.readyState))},r.prototype.doClose=function(){function t(){h("writing close packet"),e.write([{type:"close"}])}var e=this;"open"==this.readyState?(h("transport open - closing"),t()):(h("transport not open - deferring close"),this.once("open",t))},r.prototype.write=function(t){var e=this;this.writable=!1;var n=function(){e.writable=!0,e.emit("drain")},e=this;a.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,n)})},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",n="";!1!==this.timestampRequests&&(t[this.timestampParam]=u()),this.supportsBinary||t.sid||(t.b64=1),t=o.encode(t),this.port&&("https"==e&&443!=this.port||"http"==e&&80!=this.port)&&(n=":"+this.port),t.length&&(t="?"+t);var r=-1!==this.hostname.indexOf(":");return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t}},{"../transport":4,"component-inherit":17,debug:18,"engine.io-parser":20,parseqs:28,"xmlhttprequest-ssl":10,yeast:31}],9:[function(t,e,n){(function(n){function r(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,i.call(this,t)}var i=t("../transport"),o=t("engine.io-parser"),a=t("parseqs"),s=t("component-inherit"),u=t("yeast"),h=t("debug")("engine.io-client:websocket"),c=n.WebSocket||n.MozWebSocket,f=c;if(!f&&"undefined"==typeof window)try{f=t("ws")}catch(l){}e.exports=r,s(r,i),r.prototype.name="websocket",r.prototype.supportsBinary=!0,r.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=void 0,n={agent:this.agent,perMessageDeflate:this.perMessageDeflate};n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(n.headers=this.extraHeaders),this.ws=c?new f(t):new f(t,e,n),void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="buffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},r.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},"undefined"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)&&(r.prototype.onData=function(t){var e=this;setTimeout(function(){i.prototype.onData.call(e,t)},0)}),r.prototype.write=function(t){function e(){r.emit("flush"),setTimeout(function(){r.writable=!0,r.emit("drain")},0)}var r=this;this.writable=!1;for(var i=t.length,a=0,s=i;s>a;a++)!function(t){o.encodePacket(t,r.supportsBinary,function(o){if(!c){var a={};if(t.options&&(a.compress=t.options.compress),r.perMessageDeflate){var s="string"==typeof o?n.Buffer.byteLength(o):o.length;s<r.perMessageDeflate.threshold&&(a.compress=!1)}}try{c?r.ws.send(o):r.ws.send(o,a)}catch(u){h("websocket closed before onclose event")}--i||e()})}(t[a])},r.prototype.onClose=function(){i.prototype.onClose.call(this)},r.prototype.doClose=function(){
"undefined"!=typeof this.ws&&this.ws.close()},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",n="";this.port&&("wss"==e&&443!=this.port||"ws"==e&&80!=this.port)&&(n=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=u()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&&(t="?"+t);var r=-1!==this.hostname.indexOf(":");return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t},r.prototype.check=function(){return!(!f||"__initialize"in f&&this.name===r.prototype.name)}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"../transport":4,"component-inherit":17,debug:18,"engine.io-parser":20,parseqs:28,ws:15,yeast:31}],10:[function(t,e,n){var r=t("has-cors");e.exports=function(t){var e=t.xdomain,n=t.xscheme,i=t.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!e||r))return new XMLHttpRequest}catch(o){}try{if("undefined"!=typeof XDomainRequest&&!n&&i)return new XDomainRequest}catch(o){}if(!e)try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(o){}}},{"has-cors":23}],11:[function(t,e,n){function r(t,e,n){function r(t,i){if(r.count<=0)throw new Error("after called too many times");--r.count,t?(o=!0,e(t),e=n):0!==r.count||o||e(null,i)}var o=!1;return n=n||i,r.count=t,0===t?e():r}function i(){}e.exports=r},{}],12:[function(t,e,n){e.exports=function(t,e,n){var r=t.byteLength;if(e=e||0,n=n||r,t.slice)return t.slice(e,n);if(0>e&&(e+=r),0>n&&(n+=r),n>r&&(n=r),e>=r||e>=n||0===r)return new ArrayBuffer(0);for(var i=new Uint8Array(t),o=new Uint8Array(n-e),a=e,s=0;n>a;a++,s++)o[s]=i[a];return o.buffer}},{}],13:[function(t,e,n){!function(t){"use strict";n.encode=function(e){var n,r=new Uint8Array(e),i=r.length,o="";for(n=0;i>n;n+=3)o+=t[r[n]>>2],o+=t[(3&r[n])<<4|r[n+1]>>4],o+=t[(15&r[n+1])<<2|r[n+2]>>6],o+=t[63&r[n+2]];return i%3===2?o=o.substring(0,o.length-1)+"=":i%3===1&&(o=o.substring(0,o.length-2)+"=="),o},n.decode=function(e){var n,r,i,o,a,s=.75*e.length,u=e.length,h=0;"="===e[e.length-1]&&(s--,"="===e[e.length-2]&&s--);var c=new ArrayBuffer(s),f=new Uint8Array(c);for(n=0;u>n;n+=4)r=t.indexOf(e[n]),i=t.indexOf(e[n+1]),o=t.indexOf(e[n+2]),a=t.indexOf(e[n+3]),f[h++]=r<<2|i>>4,f[h++]=(15&i)<<4|o>>2,f[h++]=(3&o)<<6|63&a;return c}}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")},{}],14:[function(t,e,n){(function(t){function n(t){for(var e=0;e<t.length;e++){var n=t[e];if(n.buffer instanceof ArrayBuffer){var r=n.buffer;if(n.byteLength!==r.byteLength){var i=new Uint8Array(n.byteLength);i.set(new Uint8Array(r,n.byteOffset,n.byteLength)),r=i.buffer}t[e]=r}}}function r(t,e){e=e||{};var r=new o;n(t);for(var i=0;i<t.length;i++)r.append(t[i]);return e.type?r.getBlob(e.type):r.getBlob()}function i(t,e){return n(t),new Blob(t,e||{})}var o=t.BlobBuilder||t.WebKitBlobBuilder||t.MSBlobBuilder||t.MozBlobBuilder,a=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(e){return!1}}(),s=a&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(e){return!1}}(),u=o&&o.prototype.append&&o.prototype.getBlob;e.exports=function(){return a?s?t.Blob:i:u?r:void 0}()}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{}],15:[function(t,e,n){},{}],16:[function(t,e,n){function r(t){return t?i(t):void 0}function i(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}e.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){r.off(t,n),e.apply(this,arguments)}var r=this;return this._callbacks=this._callbacks||{},n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks[t];if(!n)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks[t];if(n){n=n.slice(0);for(var r=0,i=n.length;i>r;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}],17:[function(t,e,n){e.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},{}],18:[function(t,e,n){function r(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function i(){var t=arguments,e=this.useColors;if(t[0]=(e?"%c":"")+this.namespace+(e?" %c":" ")+t[0]+(e?"%c ":" ")+"+"+n.humanize(this.diff),!e)return t;var r="color: "+this.color;t=[t[0],r,"color: inherit"].concat(Array.prototype.slice.call(t,1));var i=0,o=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(i++,"%c"===t&&(o=i))}),t.splice(o,0,r),t}function o(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?n.storage.removeItem("debug"):n.storage.debug=t}catch(e){}}function s(){var t;try{t=n.storage.debug}catch(e){}return t}function u(){try{return window.localStorage}catch(t){}}n=e.exports=t("./debug"),n.log=o,n.formatArgs=i,n.save=a,n.load=s,n.useColors=r,n.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],n.formatters.j=function(t){return JSON.stringify(t)},n.enable(s())},{"./debug":19}],19:[function(t,e,n){function r(){return n.colors[c++%n.colors.length]}function i(t){function e(){}function i(){var t=i,e=+new Date,o=e-(h||e);t.diff=o,t.prev=h,t.curr=e,h=e,null==t.useColors&&(t.useColors=n.useColors()),null==t.color&&t.useColors&&(t.color=r());var a=Array.prototype.slice.call(arguments);a[0]=n.coerce(a[0]),"string"!=typeof a[0]&&(a=["%o"].concat(a));var s=0;a[0]=a[0].replace(/%([a-z%])/g,function(e,r){if("%%"===e)return e;s++;var i=n.formatters[r];if("function"==typeof i){var o=a[s];e=i.call(t,o),a.splice(s,1),s--}return e}),"function"==typeof n.formatArgs&&(a=n.formatArgs.apply(t,a));var u=i.log||n.log||console.log.bind(console);u.apply(t,a)}e.enabled=!1,i.enabled=!0;var o=n.enabled(t)?i:e;return o.namespace=t,o}function o(t){n.save(t);for(var e=(t||"").split(/[\s,]+/),r=e.length,i=0;r>i;i++)e[i]&&(t=e[i].replace(/\*/g,".*?"),"-"===t[0]?n.skips.push(new RegExp("^"+t.substr(1)+"$")):n.names.push(new RegExp("^"+t+"$")))}function a(){n.enable("")}function s(t){var e,r;for(e=0,r=n.skips.length;r>e;e++)if(n.skips[e].test(t))return!1;for(e=0,r=n.names.length;r>e;e++)if(n.names[e].test(t))return!0;return!1}function u(t){return t instanceof Error?t.stack||t.message:t}n=e.exports=i,n.coerce=u,n.disable=a,n.enable=o,n.enabled=s,n.humanize=t("ms"),n.names=[],n.skips=[],n.formatters={};var h,c=0},{ms:26}],20:[function(t,e,n){(function(e){function r(t,e){var r="b"+n.packets[t.type]+t.data.data;return e(r)}function i(t,e,r){if(!e)return n.encodeBase64Packet(t,r);var i=t.data,o=new Uint8Array(i),a=new Uint8Array(1+i.byteLength);a[0]=v[t.type];for(var s=0;s<o.length;s++)a[s+1]=o[s];return r(a.buffer)}function o(t,e,r){if(!e)return n.encodeBase64Packet(t,r);var i=new FileReader;return i.onload=function(){t.data=i.result,n.encodePacket(t,e,!0,r)},i.readAsArrayBuffer(t.data)}function a(t,e,r){if(!e)return n.encodeBase64Packet(t,r);if(y)return o(t,e,r);var i=new Uint8Array(1);i[0]=v[t.type];var a=new w([i.buffer,t.data]);return r(a)}function s(t,e,n){for(var r=new Array(t.length),i=l(t.length,n),o=function(t,n,i){e(n,function(e,n){r[t]=n,i(e,r)})},a=0;a<t.length;a++)o(a,t[a],i)}var u=t("./keys"),h=t("has-binary"),c=t("arraybuffer.slice"),f=t("base64-arraybuffer"),l=t("after"),p=t("utf8"),d=navigator.userAgent.match(/Android/i),g=/PhantomJS/i.test(navigator.userAgent),y=d||g;n.protocol=3;var v=n.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},b=u(v),m={type:"error",data:"parser error"},w=t("blob");n.encodePacket=function(t,n,o,s){"function"==typeof n&&(s=n,n=!1),"function"==typeof o&&(s=o,o=null);var u=void 0===t.data?void 0:t.data.buffer||t.data;if(e.ArrayBuffer&&u instanceof ArrayBuffer)return i(t,n,s);if(w&&u instanceof e.Blob)return a(t,n,s);if(u&&u.base64)return r(t,s);var h=v[t.type];return void 0!==t.data&&(h+=o?p.encode(String(t.data)):String(t.data)),s(""+h)},n.encodeBase64Packet=function(t,r){var i="b"+n.packets[t.type];if(w&&t.data instanceof e.Blob){var o=new FileReader;return o.onload=function(){var t=o.result.split(",")[1];r(i+t)},o.readAsDataURL(t.data)}var a;try{a=String.fromCharCode.apply(null,new Uint8Array(t.data))}catch(s){for(var u=new Uint8Array(t.data),h=new Array(u.length),c=0;c<u.length;c++)h[c]=u[c];a=String.fromCharCode.apply(null,h)}return i+=e.btoa(a),r(i)},n.decodePacket=function(t,e,r){if("string"==typeof t||void 0===t){if("b"==t.charAt(0))return n.decodeBase64Packet(t.substr(1),e);if(r)try{t=p.decode(t)}catch(i){return m}var o=t.charAt(0);return Number(o)==o&&b[o]?t.length>1?{type:b[o],data:t.substring(1)}:{type:b[o]}:m}var a=new Uint8Array(t),o=a[0],s=c(t,1);return w&&"blob"===e&&(s=new w([s])),{type:b[o],data:s}},n.decodeBase64Packet=function(t,n){var r=b[t.charAt(0)];if(!e.ArrayBuffer)return{type:r,data:{base64:!0,data:t.substr(1)}};var i=f.decode(t.substr(1));return"blob"===n&&w&&(i=new w([i])),{type:r,data:i}},n.encodePayload=function(t,e,r){function i(t){return t.length+":"+t}function o(t,r){n.encodePacket(t,a?e:!1,!0,function(t){r(null,i(t))})}"function"==typeof e&&(r=e,e=null);var a=h(t);return e&&a?w&&!y?n.encodePayloadAsBlob(t,r):n.encodePayloadAsArrayBuffer(t,r):t.length?void s(t,o,function(t,e){return r(e.join(""))}):r("0:")},n.decodePayload=function(t,e,r){if("string"!=typeof t)return n.decodePayloadAsBinary(t,e,r);"function"==typeof e&&(r=e,e=null);var i;if(""==t)return r(m,0,1);for(var o,a,s="",u=0,h=t.length;h>u;u++){var c=t.charAt(u);if(":"!=c)s+=c;else{if(""==s||s!=(o=Number(s)))return r(m,0,1);if(a=t.substr(u+1,o),s!=a.length)return r(m,0,1);if(a.length){if(i=n.decodePacket(a,e,!0),m.type==i.type&&m.data==i.data)return r(m,0,1);var f=r(i,u+o,h);if(!1===f)return}u+=o,s=""}}return""!=s?r(m,0,1):void 0},n.encodePayloadAsArrayBuffer=function(t,e){function r(t,e){n.encodePacket(t,!0,!0,function(t){return e(null,t)})}return t.length?void s(t,r,function(t,n){var r=n.reduce(function(t,e){var n;return n="string"==typeof e?e.length:e.byteLength,t+n.toString().length+n+2},0),i=new Uint8Array(r),o=0;return n.forEach(function(t){var e="string"==typeof t,n=t;if(e){for(var r=new Uint8Array(t.length),a=0;a<t.length;a++)r[a]=t.charCodeAt(a);n=r.buffer}e?i[o++]=0:i[o++]=1;for(var s=n.byteLength.toString(),a=0;a<s.length;a++)i[o++]=parseInt(s[a]);i[o++]=255;for(var r=new Uint8Array(n),a=0;a<r.length;a++)i[o++]=r[a]}),e(i.buffer)}):e(new ArrayBuffer(0))},n.encodePayloadAsBlob=function(t,e){function r(t,e){n.encodePacket(t,!0,!0,function(t){var n=new Uint8Array(1);if(n[0]=1,"string"==typeof t){for(var r=new Uint8Array(t.length),i=0;i<t.length;i++)r[i]=t.charCodeAt(i);t=r.buffer,n[0]=0}for(var o=t instanceof ArrayBuffer?t.byteLength:t.size,a=o.toString(),s=new Uint8Array(a.length+1),i=0;i<a.length;i++)s[i]=parseInt(a[i]);if(s[a.length]=255,w){var u=new w([n.buffer,s.buffer,t]);e(null,u)}})}s(t,r,function(t,n){return e(new w(n))})},n.decodePayloadAsBinary=function(t,e,r){"function"==typeof e&&(r=e,e=null);for(var i=t,o=[],a=!1;i.byteLength>0;){for(var s=new Uint8Array(i),u=0===s[0],h="",f=1;255!=s[f];f++){if(h.length>310){a=!0;break}h+=s[f]}if(a)return r(m,0,1);i=c(i,2+h.length),h=parseInt(h);var l=c(i,0,h);if(u)try{l=String.fromCharCode.apply(null,new Uint8Array(l))}catch(p){var d=new Uint8Array(l);l="";for(var f=0;f<d.length;f++)l+=String.fromCharCode(d[f])}o.push(l),i=c(i,h)}var g=o.length;o.forEach(function(t,i){r(n.decodePacket(t,e,!0),i,g)})}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{"./keys":21,after:11,"arraybuffer.slice":12,"base64-arraybuffer":13,blob:14,"has-binary":22,utf8:30}],21:[function(t,e,n){e.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&&e.push(r);return e}},{}],22:[function(t,e,n){(function(n){function r(t){function e(t){if(!t)return!1;if(n.Buffer&&n.Buffer.isBuffer(t)||n.ArrayBuffer&&t instanceof ArrayBuffer||n.Blob&&t instanceof Blob||n.File&&t instanceof File)return!0;if(i(t)){for(var r=0;r<t.length;r++)if(e(t[r]))return!0}else if(t&&"object"==typeof t){t.toJSON&&(t=t.toJSON());for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)&&e(t[o]))return!0}return!1}return e(t)}var i=t("isarray");e.exports=r}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{isarray:25}],23:[function(t,e,n){try{e.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(r){e.exports=!1}},{}],24:[function(t,e,n){var r=[].indexOf;e.exports=function(t,e){if(r)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1}},{}],25:[function(t,e,n){e.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},{}],26:[function(t,e,n){function r(t){if(t=""+t,!(t.length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*f;case"days":case"day":case"d":return n*c;case"hours":case"hour":case"hrs":case"hr":case"h":return n*h;case"minutes":case"minute":case"mins":case"min":case"m":return n*u;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n}}}}function i(t){return t>=c?Math.round(t/c)+"d":t>=h?Math.round(t/h)+"h":t>=u?Math.round(t/u)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return a(t,c,"day")||a(t,h,"hour")||a(t,u,"minute")||a(t,s,"second")||t+" ms"}function a(t,e,n){return e>t?void 0:1.5*e>t?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var s=1e3,u=60*s,h=60*u,c=24*h,f=365.25*c;e.exports=function(t,e){return e=e||{},"string"==typeof t?r(t):e["long"]?o(t):i(t)}},{}],27:[function(t,e,n){(function(t){var n=/^[\],:{}\s]*$/,r=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,i=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,o=/(?:^|:|,)(?:\s*\[)+/g,a=/^\s+/,s=/\s+$/;e.exports=function(e){return"string"==typeof e&&e?(e=e.replace(a,"").replace(s,""),t.JSON&&JSON.parse?JSON.parse(e):n.test(e.replace(r,"@").replace(i,"]").replace(o,""))?new Function("return "+e)():void 0):null}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{}],28:[function(t,e,n){n.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e},n.decode=function(t){for(var e={},n=t.split("&"),r=0,i=n.length;i>r;r++){var o=n[r].split("=");e[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return e}},{}],29:[function(t,e,n){var r=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,i=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];e.exports=function(t){var e=t,n=t.indexOf("["),o=t.indexOf("]");-1!=n&&-1!=o&&(t=t.substring(0,n)+t.substring(n,o).replace(/:/g,";")+t.substring(o,t.length));for(var a=r.exec(t||""),s={},u=14;u--;)s[i[u]]=a[u]||"";return-1!=n&&-1!=o&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),s.ipv6uri=!0),s}},{}],30:[function(e,n,r){(function(e){!function(i){function o(t){for(var e,n,r=[],i=0,o=t.length;o>i;)e=t.charCodeAt(i++),e>=55296&&56319>=e&&o>i?(n=t.charCodeAt(i++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),i--)):r.push(e);return r}function a(t){for(var e,n=t.length,r=-1,i="";++r<n;)e=t[r],e>65535&&(e-=65536,i+=w(e>>>10&1023|55296),e=56320|1023&e),i+=w(e);return i}function s(t){if(t>=55296&&57343>=t)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value")}function u(t,e){return w(t>>e&63|128)}function h(t){if(0==(4294967168&t))return w(t);var e="";return 0==(4294965248&t)?e=w(t>>6&31|192):0==(4294901760&t)?(s(t),e=w(t>>12&15|224),e+=u(t,6)):0==(4292870144&t)&&(e=w(t>>18&7|240),e+=u(t,12),e+=u(t,6)),e+=w(63&t|128)}function c(t){for(var e,n=o(t),r=n.length,i=-1,a="";++i<r;)e=n[i],a+=h(e);return a}function f(){if(m>=b)throw Error("Invalid byte index");var t=255&v[m];if(m++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function l(){var t,e,n,r,i;if(m>b)throw Error("Invalid byte index");if(m==b)return!1;if(t=255&v[m],m++,0==(128&t))return t;if(192==(224&t)){var e=f();if(i=(31&t)<<6|e,i>=128)return i;throw Error("Invalid continuation byte")}if(224==(240&t)){if(e=f(),n=f(),i=(15&t)<<12|e<<6|n,i>=2048)return s(i),i;throw Error("Invalid continuation byte")}if(240==(248&t)&&(e=f(),n=f(),r=f(),i=(15&t)<<18|e<<12|n<<6|r,i>=65536&&1114111>=i))return i;throw Error("Invalid UTF-8 detected")}function p(t){v=o(t),b=v.length,m=0;for(var e,n=[];(e=l())!==!1;)n.push(e);return a(n)}var d="object"==typeof r&&r,g="object"==typeof n&&n&&n.exports==d&&n,y="object"==typeof e&&e;(y.global===y||y.window===y)&&(i=y);var v,b,m,w=String.fromCharCode,E={version:"2.0.0",encode:c,decode:p};if("function"==typeof t&&"object"==typeof t.amd&&t.amd)t(function(){return E});else if(d&&!d.nodeType)if(g)g.exports=E;else{var A={},x=A.hasOwnProperty;for(var S in E)x.call(E,S)&&(d[S]=E[S])}else i.utf8=E}(this)}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})},{}],31:[function(t,e,n){"use strict";function r(t){var e="";do e=s[t%u]+e,t=Math.floor(t/u);while(t>0);return e}function i(t){var e=0;for(f=0;f<t.length;f++)e=e*u+h[t.charAt(f)];return e}function o(){var t=r(+new Date);return t!==a?(c=0,a=t):t+"."+r(c++)}for(var a,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),u=64,h={},c=0,f=0;u>f;f++)h[s[f]]=f;o.encode=r,o.decode=i,e.exports=o},{}]},{},[1])(1)}),function(ns){var CLIENT_VERSION="0.5.0",NODE_CLIENT=0;ns.wrapper=function(good,wd){function n(t){return void 0!==t}function ba(){}function ca(t){t.Xa=function(){return t.rd?t.rd:t.rd=new t}}function da(t){var e=typeof t;if("object"==e){if(!t)return"null";if(t instanceof Array)return"array";if(t instanceof Object)return e;var n=Object.prototype.toString.call(t);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof t.length&&"undefined"!=typeof t.splice&&"undefined"!=typeof t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||"undefined"!=typeof t.call&&"undefined"!=typeof t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==e&&"undefined"==typeof t.call)return"object";return e}function ea(t){return"array"==da(t)}function p(t){return"string"==typeof t}function fa(t){return"number"==typeof t}function ga(t){return"function"==da(t)}function ha(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function ia(t,e,n){return t.call.apply(t.bind,arguments)}function ja(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function q(t,e,n){return q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ia:ja,q.apply(null,arguments)}function la(t,e){function n(){}n.prototype=e.prototype,t.ze=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.te=function(t,n,r){for(var i=Array(arguments.length-2),o=2;o<arguments.length;o++)i[o-2]=arguments[o];return e.prototype[n].apply(t,i)}}function na(t,e){this.type=oa,this.source=pa,this.path=t,this.ad=e}function qa(t,e){this.type=ra,this.source=t,this.path=e}function sa(t,e,n){this.type=ta,this.source=t,this.path=e,this.Da=n}function v(){}function w(t,e){this.name=t,this.node=e}function ua(t,e){return new w(t,e)}function va(t,e){return wa(t.name,e.name)}function xa(t,e){return wa(t,e)}function ya(t){this.g=t,this.f=null}function Aa(t,e){this.yd={},this.Z=new ya(t),this.g=e;var n=1e4+2e4*Math.random();setTimeout(q(this.f,this),Math.floor(n))}function z(t,e){if(1==arguments.length){this.D=t.split("/");for(var n=0,r=0;r<this.D.length;r++)0<this.D[r].length&&(this.D[n]=this.D[r],n++);this.D.length=n,this.ca=0}else this.D=t,this.ca=e}function A(t,e){var n=B(t);if(null===n)return e;if(n===B(e))return A(r(t),r(e));throw Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function B(t){return t.ca>=t.D.length?null:t.D[t.ca]}function Ba(t){return t.D.length-t.ca}function r(t){var e=t.ca;return e<t.D.length&&e++,new z(t.D,e)}function Ca(t){return t.ca<t.D.length?t.D[t.D.length-1]:null}function Da(t,e){this.g=t.slice(),this.f=Math.max(1,this.g.length),this.m=e;for(var n=0;n<this.g.length;n++)this.f+=Ea(this.g[n]);Fa(this)}function Fa(t){if(768<t.f)throw Error(t.m+"has a key path longer than 768 bytes ("+t.f+").");if(32<t.g.length)throw Error(t.m+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Ga(t))}function Ga(t){return 0==t.g.length?"":"in property '"+t.g.join(".")+"'"}function Ha(t,e){return t&&"object"==typeof t?(C(".sv"in t,"Unexpected leaf node or priority contents"),e[t[".sv"]]):t}function Ia(t,e){var n=new Ja;return Ka(t,new z(""),function(t,r){n.Db(t,La(r,e))}),n}function La(t,e){var n,r=t.K().O(),r=Ha(r,e);if(t.S()){var i=Ha(t.wa(),e);return i!==t.wa()||r!==t.K().O()?new Ma(i,D(r)):t}return n=t,r!==t.K().O()&&(n=n.da(new Ma(r))),t.Y(E,function(t,r){var i=La(r,e);i!==r&&(n=n.U(t,i))}),n}function Na(t,e,n){this.f=t,this.ea=e,this.pb=n}function Oa(t){return t.ea}function Pa(t,e){return t.ea&&!t.pb||t.f.xa(e)}function F(t,e,n,r){this.type=t,this.Ea=e,this.La=n,this.Vc=r,this.pc=void 0}function Qa(t){return new F(Ra,t)}function Sa(){}function Ua(t,e,n){this.Cd=t,this.Fa=e,this.mc=n}function Wa(){}function Xa(t,e,n,r){this.Jc=e,this.sc=n,this.pc=r,this.ec=t}function Ya(t,e,n){this.Jc=t,this.error=e,this.path=n}function Za(){this.f=[]}function $a(t,e){for(var n=null,r=0;r<e.length;r++){var i=e[r],o=i.Ya();null===n||o.ba(n.Ya())||(t.f.push(n),n=null),null===n&&(n=new ab(o)),n.add(i)}n&&t.f.push(n)}function bb(t,e,n){$a(t,n),cb(t,function(t){return t.ba(e)})}function db(t,e,n){$a(t,n),cb(t,function(t){return t.contains(e)||e.contains(t)})}function cb(t,e){for(var n=!0,r=0;r<t.f.length;r++){var i=t.f[r];if(i)if(i=i.Ya(),e(i)){for(var i=t.f[r],o=0;o<i.fc.length;o++){var a=i.fc[o];if(null!==a){i.fc[o]=null;var s=a.Ra();eb&&fb("event: "+a.toString()),gb(s)}}t.f[r]=null}else n=!1}n&&(t.f=[])}function ab(t){this.pa=t,this.fc=[]}function I(t){var e=Error(J(hb,t),t);return e.code=t,e}function ib(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(navigator.userAgent)}function jb(){return"undefined"!=typeof location&&/^file:\//.test(location.href)}function kb(){if("undefined"==typeof navigator)return!1;var t=navigator.userAgent;if("Microsoft Internet Explorer"===navigator.appName){if((t=t.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/))&&1<t.length)return 8<=parseFloat(t[1])}else if(-1<t.indexOf("Trident")&&(t=t.match(/rv:([0-9]{2,2}[\.0-9]{0,})/))&&1<t.length)return 8<=parseFloat(t[1]);return!1}function x(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function J(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function lb(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mb(t){var e={};return lb(t,function(t,n){e[t]=n}),e}function nb(t){this.Mb=t,this.oc="wilddog:"}function pb(){this.Jb={}}function qb(t){try{if("undefined"!=typeof window&&"undefined"!=typeof window[t]){var e=window[t];return e.setItem("wilddog:sentinel","cache"),e.removeItem("wilddog:sentinel"),new nb(e)}}catch(n){}return new pb}function sb(t,e,n,r,i){this.host=t.toLowerCase(),this.domain=this.host.substr(this.host.indexOf(".")+1),this.eb=e,this.zb=n,this.nc=i||"",this.Ca=rb.get("host:"+t)||this.host,this.Pa=JSON.parse(K.get("failHosts"))||[]}function tb(t,e){null==e?(t.Ca=t.host,"s-"===t.Ca.substr(0,2)&&rb.remove("host:"+t.host)):e!==t.Ca&&(t.Ca=e,"s-"===t.Ca.substr(0,2)&&rb.set("host:"+t.host,t.Ca))}function vb(t,e,n){this.Zb=t||{},this.vc=e||{},this.Ma=n||{},this.Zb.remember||(this.Zb.remember="default")}function xb(t){var e={},n={};return lb(t||{},function(t,r){0<=yb(wb,t)?e[t]=r:n[t]=r}),new vb(e,{},n)}function L(t,e,n,r){var i;if(e>r?i="at least "+e:r>n&&(i=0===n?"none":"no more than "+n),i)throw Error(t+" failed: Was called with "+r+(1===r?" argument.":" arguments.")+" Expects "+i+".")}function M(t,e,n){var r="";switch(e){case 1:r=n?"first":"First";break;case 2:r=n?"second":"Second";break;case 3:r=n?"third":"Third";break;case 4:r=n?"fourth":"Fourth";break;default:throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?")}return t=t+" failed: "+(r+" argument ")}function N(t,e,r,i){if((!i||n(r))&&!ga(r))throw Error(M(t,e,i)+"must be a valid function.")}function zb(t,e,r){if(n(r)&&(!ha(r)||null===r))throw Error(M(t,e,!0)+"must be a valid context object.")}function Ab(){this.g=-1}function Bb(){this.g=-1,this.g=64,this.f=[],this.X=[],this.Z=[],this.B=[],this.B[0]=128;for(var t=1;t<this.g;++t)this.B[t]=0;this.H=this.m=0,this.f[0]=1732584193,this.f[1]=4023233417,this.f[2]=2562383102,this.f[3]=271733878,this.f[4]=3285377520,this.H=this.m=0}function Cb(t,e,n){n||(n=0);var r=t.Z;if(p(e))for(var i=0;16>i;i++)r[i]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(i=0;16>i;i++)r[i]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(i=16;80>i;i++){var o=r[i-3]^r[i-8]^r[i-14]^r[i-16];r[i]=4294967295&(o<<1|o>>>31)}e=t.f[0],n=t.f[1];for(var a,s=t.f[2],u=t.f[3],h=t.f[4],i=0;80>i;i++)40>i?20>i?(o=u^n&(s^u),a=1518500249):(o=n^s^u,a=1859775393):60>i?(o=n&s|u&(n|s),a=2400959708):(o=n^s^u,a=3395469782),o=(e<<5|e>>>27)+o+h+a+r[i]&4294967295,h=u,u=s,s=4294967295&(n<<30|n>>>2),n=e,e=o;t.f[0]=t.f[0]+e&4294967295,t.f[1]=t.f[1]+n&4294967295,t.f[2]=t.f[2]+s&4294967295,t.f[3]=t.f[3]+u&4294967295,t.f[4]=t.f[4]+h&4294967295}function Db(a){if(a=String(a),/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a)}function Eb(){}function Fb(t,e,n){if(null==e)n.push("null");else{if("object"==typeof e){if(ea(e)){var r=e;e=r.length,n.push("[");for(var i="",o=0;e>o;o++)n.push(i),Fb(t,r[o],n),i=",";return void n.push("]")}if(!(e instanceof String||e instanceof Number||e instanceof Boolean)){n.push("{"),i="";for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&(o=e[r],"function"!=typeof o&&(n.push(i),Gb(r,n),n.push(":"),Fb(t,o,n),i=","));return void n.push("}")}e=e.valueOf()}switch(typeof e){case"string":Gb(e,n);break;case"number":n.push(isFinite(e)&&!isNaN(e)?String(e):"null");break;case"boolean":n.push(String(e));break;case"function":n.push("null");break;default:throw Error("Unknown type: "+typeof e)}}}function Gb(t,e){e.push('"',t.replace(Ib,function(t){var e=Hb[t];return e||(e="\\u"+(65536|t.charCodeAt(0)).toString(16).substr(1),Hb[t]=e),e}),'"')}function Jb(t){var e=[];return lb(t,function(t,n){ea(n)?Kb(n,function(n){e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))}),e.length?"&"+e.join("&"):""}function Lb(t){var e={};return t=t.replace(/^\?/,"").split("&"),Kb(t,function(t){t&&(t=t.split("="),e[t[0]]=t[1])}),e}function ob(t){return"undefined"!=typeof JSON&&n(JSON.parse)?JSON.parse(t):Db(t)}function G(t){if("undefined"!=typeof JSON&&n(JSON.stringify))t=JSON.stringify(t);else{var e=[];Fb(new Eb,t,e),t=e.join("")}return t}function Mb(){this.rc=O}function Nb(){var t,e=window.opener.frames;for(t=e.length-1;t>=0;t--)try{if(e[t].location.protocol===window.location.protocol&&e[t].location.host===window.location.host&&"__winchan_relay_frame"===e[t].name)return e[t]}catch(n){}return null}function Ob(t,e,n){t.attachEvent?t.attachEvent("on"+e,n):t.addEventListener&&t.addEventListener(e,n,!1)}function Pb(t,e,n){t.detachEvent?t.detachEvent("on"+e,n):t.removeEventListener&&t.removeEventListener(e,n,!1)}function Qb(t){/^https?:\/\//.test(t)||(t=window.location.href);var e=/^(https?:\/\/[\-_a-zA-Z\.0-9:]+)/.exec(t);return e?e[1]:t}function Rb(t){var e="";try{t=t.replace("#","");var n=Lb(t);n&&x(n,"__wilddog_request_key")&&(e=J(n,"__wilddog_request_key"))}catch(r){}return e}function Sb(){var t=Tb(ub);return t.scheme+"://"+t.host+"/v1"}function Ub(t){return Sb()+"/"+t+"/auth/channel"}function Vb(t){t.callback_parameter||(t.callback_parameter="callback"),this.f=t,window.__wilddog_auth_jsonp=window.__wilddog_auth_jsonp||{}}function Xb(t,e,n){setTimeout(function(){try{var r=document.createElement("script");r.type="text/javascript",r.id=t,r.async=!0,r.src=e,r.onerror=function(){var e=document.getElementById(t);null!==e&&e.parentNode.removeChild(e),n&&n(I("NETWORK_ERROR"))};var i,o=document.getElementsByTagName("head");i=o&&0!=o.length?o[0]:document.documentElement,i.appendChild(r)}catch(a){n&&n(I("NETWORK_ERROR"))}},0)}function Yb(t){t.method||(t.method="GET"),t.headers||(t.headers={}),t.headers.content_type||(t.headers.content_type="application/json"),t.headers.content_type=t.headers.content_type.toLowerCase(),this.f=t}function $b(t){var e=this;if(this.f=t,this.B="*",kb()?this.g=this.m=Nb():(this.g=window.opener,this.m=window),!e.g)throw"Unable to find relay frame";Ob(this.m,"message",q(this.lc,this)),Ob(this.m,"message",q(this.H,this));try{ac(this,{a:"ready"})}catch(n){Ob(this.g,"load",function(){ac(e,{a:"ready"})})}Ob(window,"unload",q(this.Z,this))}function ac(t,e){e=G(e),kb()?t.g.doPost(e,t.B):t.g.postMessage(e,t.B)}function bc(){this.f=cc()+cc()+cc()}function dc(t){t.method||(t.method="GET"),t.headers||(t.headers={}),t.headers.content_type||(t.headers.content_type="application/json"),t.headers.content_type=t.headers.content_type.toLowerCase(),this.f=t}function P(t,e){for(var n in t)e.call(void 0,t[n],n,t)}function ec(t,e){var n,r={};for(n in t)r[n]=e.call(void 0,t[n],n,t);return r}function fc(t,e){for(var n in t)if(!e.call(void 0,t[n],n,t))return!1;return!0}function gc(t){var e,n=0;for(e in t)n++;return n}function hc(t){for(var e in t)return e}function ic(t){var e,n=[],r=0;for(e in t)n[r++]=t[e];return n}function jc(t){var e,n=[],r=0;for(e in t)n[r++]=e;return n}function kc(t,e){return null!==t&&e in t}function lc(t,e){for(var n in t)if(t[n]==e)return!0;return!1}function mc(t,e,n){for(var r in t)if(e.call(n,t[r],r,t))return r}function nc(t,e){var n=mc(t,e,void 0);return n&&t[n]}function Wb(t){for(var e in t)return!1;return!0}function za(t){var e,n={};for(e in t)n[e]=t[e];return n}function Zb(t,e){for(var n,r,i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];
for(var o=0;o<oc.length;o++)n=oc[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function cc(){return Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^ka()).toString(36)}function tc(t,e){var n=uc(t,e,void 0);return 0>n?null:p(t)?t.charAt(n):t[n]}function uc(t,e,n){for(var r=t.length,i=p(t)?t.split(""):t,o=0;r>o;o++)if(o in i&&e.call(n,i[o],o,t))return o;return-1}function vc(t,e){var n=yb(t,e);n>=0&&Array.prototype.splice.call(t,n,1)}function wc(t,e){t.sort(e||xc)}function xc(t,e){return t>e?1:e>t?-1:0}function yc(){this.f={}}function Bc(t){return t=t.toString(),zc[t]||(zc[t]=new yc),zc[t]}function Cc(t,e){var n=t.toString();return Ac[n]||(Ac[n]=e()),Ac[n]}function Dc(t,e){this.g=t,this.f=e?e:Ec}function Gc(t,e){for(var n,r=t.f,i=null;!r.j();){if(n=t.g(e,r.key),0===n){if(r.left.j())return i?i.key:null;for(r=r.left;!r.right.j();)r=r.right;return r.key}0>n?r=r.left:n>0&&(i=r,r=r.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}function Hc(t,e,n,r,i){for(this.f=i||null,this.g=r,this.Ia=[],i=1;!t.j();)if(i=e?n(t.key,e):1,r&&(i*=-1),0>i)t=this.g?t.left:t.right;else{if(0===i){this.Ia.push(t);break}this.Ia.push(t),t=this.g?t.right:t.left}}function Q(t){if(0===t.Ia.length)return null;var e,n=t.Ia.pop();if(e=t.f?t.f(n.key,n.value):{key:n.key,value:n.value},t.g)for(n=n.left;!n.j();)t.Ia.push(n),n=n.right;else for(n=n.right;!n.j();)t.Ia.push(n),n=n.left;return e}function Ic(t){if(0===t.Ia.length)return null;var e;return e=t.Ia,e=e[e.length-1],t.f?t.f(e.key,e.value):{key:e.key,value:e.value}}function Jc(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Kc,this.left=null!=r?r:Ec,this.right=null!=i?i:Ec}function Lc(t){return t.left.j()?t:Lc(t.left)}function Nc(t){return t.left.j()?Ec:(t.left.ha()||t.left.left.ha()||(t=Oc(t)),t=t.aa(null,null,null,Nc(t.left),null),Mc(t))}function Mc(t){return t.right.ha()&&!t.left.ha()&&(t=Rc(t)),t.left.ha()&&t.left.left.ha()&&(t=Pc(t)),t.left.ha()&&t.right.ha()&&(t=Qc(t)),t}function Oc(t){return t=Qc(t),t.right.left.ha()&&(t=t.aa(null,null,null,null,Pc(t.right)),t=Rc(t),t=Qc(t)),t}function Rc(t){return t.right.aa(null,null,t.color,t.aa(null,null,Kc,null,t.right.left),null)}function Pc(t){return t.left.aa(null,null,t.color,null,t.aa(null,null,Kc,t.left.right,null))}function Qc(t){return t.aa(null,null,!t.color,t.left.aa(null,null,!t.left.color,null,null),t.right.aa(null,null,!t.right.color,null,null))}function Sc(){}function $c(){var t=R;return Yc?/rv\:([^\);]+)(\)|;)/.exec(t):Xc?/Edge\/([\d\.]+)/.exec(t):Wc?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):Zc?/WebKit\/(\S+)/.exec(t):void 0}function cd(t){var e="";return dd(t,function(t){e+=String.fromCharCode(t)}),e}function dd(t,e){function n(e){for(;r<t.length;){var n=t.charAt(r++),i=bd[n];if(null!=i)return i;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n)}return e}ed();for(var r=0;;){var i=n(-1),o=n(0),a=n(64),s=n(64);if(64===s&&-1===i)break;e(i<<2|o>>4),64!=a&&(e(o<<4&240|a>>2),64!=s&&e(a<<6&192|s))}}function ed(){if(!ad){ad={},bd={};for(var t=0;65>t;t++)ad[t]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t),bd[ad[t]]=t,t>=62&&(bd["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t)]=t)}}function C(t,e){if(!t)throw gd(e)}function gd(t){return Error("Wilddog ("+hd+") INTERNAL ASSERT FAILED: "+t)}function id(t){try{return NODE_CLIENT?new Buffer(t,"base64").toString("utf8"):"undefined"!=typeof atob?atob(t):cd(t)}catch(e){fb("base64Decode failed: ",e)}return null}function jd(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i>=55296&&56319>=i&&(i-=55296,r++,C(r<t.length,"Surrogate pair missing trail surrogate."),i=65536+(i<<10)+(t.charCodeAt(r)-56320)),128>i?e[n++]=i:(2048>i?e[n++]=i>>6|192:(65536>i?e[n++]=i>>12|224:(e[n++]=i>>18|240,e[n++]=i>>12&63|128),e[n++]=i>>6&63|128),e[n++]=63&i|128)}for(t=new Bb,t.update(e),e=[],r=8*t.H,56>t.m?t.update(t.B,56-t.m):t.update(t.B,t.g-(t.m-56)),n=t.g-1;n>=56;n--)t.X[n]=255&r,r/=256;for(Cb(t,t.X),n=r=0;5>n;n++)for(i=24;i>=0;i-=8)e[r]=t.f[n]>>i&255,++r;for(ed(),t=ad,n=[],r=0;r<e.length;r+=3){var o=e[r],a=(i=r+1<e.length)?e[r+1]:0,s=r+2<e.length,u=s?e[r+2]:0,h=o>>2,o=(3&o)<<4|a>>4,a=(15&a)<<2|u>>6,u=63&u;s||(u=64,i||(a=64)),n.push(t[h],t[o],t[a],t[u])}return n.join("")}function kd(t){for(var e="",n=0;n<arguments.length;n++)var r=arguments[n],i=da(r),e="array"==i||"object"==i&&"number"==typeof r.length?e+kd.apply(null,arguments[n]):"object"==typeof arguments[n]?e+G(arguments[n]):e+arguments[n],e=e+" ";return e}function fb(t){if(!0===ld&&(ld=!1,null===eb&&!0===K.get("logging_enabled")&&md(!0)),eb){var e=kd.apply(null,arguments);eb(e)}}function nd(t){return function(){fb(t,arguments)}}function od(t){if("undefined"!=typeof console){var e="WILDDOG INTERNAL ERROR: "+kd.apply(null,arguments);"undefined"!=typeof console.error?console.error(e):console.log(e)}}function pd(t){var e=kd.apply(null,arguments);throw Error("WILDDOG FATAL ERROR: "+e)}function S(t){if("undefined"!=typeof console){var e="WILDDOG WARNING: "+kd.apply(null,arguments);"undefined"!=typeof console.warn?console.warn(e):console.log(e)}}function Tb(t){var e="",n="",r="",i="",o=!0,a="https",s=443;if(p(t)){var u=t.indexOf("//");for(u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2)),u=t.indexOf("/"),-1===u&&(u=t.length),e=t.substring(0,u),i="",t=t.substring(u).split("/"),u=0;u<t.length;u++)if(0<t[u].length){var h=t[u];try{h=decodeURIComponent(h.replace(/\+/g," "))}catch(c){}i+="/"+h}t=e.split("."),3===t.length?(n=t[1],r=t[0].toLowerCase()):2===t.length&&(n=t[0]),u=e.indexOf(":"),u>=0&&(o="https"===a||"wss"===a,s=e.substring(u+1),isFinite(s)&&(s=String(s)),s=p(s)?/^\s*-?0x/i.test(s)?parseInt(s,16):parseInt(s,10):NaN)}return{host:e,port:s,domain:n,le:r,eb:o,scheme:a,Bb:i}}function qd(t){return fa(t)&&(t!=t||t==Number.POSITIVE_INFINITY||t==Number.NEGATIVE_INFINITY)}function wa(t,e){if(t===e)return 0;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return-1;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return 1;var n=rd(t),r=rd(e);return null!==n?null!==r?0==n-r?t.length-e.length:n-r:-1:null!==r?1:e>t?-1:1}function sd(t){if("object"!=typeof t||null===t)return G(t);var e,n=[];for(e in t)n.push(e);n.sort(),e="{";for(var r=0;r<n.length;r++)0!==r&&(e+=","),e+=G(n[r]),e+=":",e+=sd(t[n[r]]);return e+"}"}function td(t,e){if(ea(t))for(var n=0;n<t.length;++n)e(n,t[n]);else P(t,e)}function ud(t){C(!qd(t),"Invalid JSON number");var e,n,r,i;for(0===t?(r=n=0,e=-(1/0)===1/t?1:0):(e=0>t,t=Math.abs(t),t>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(t)/Math.LN2),1023),n=r+1023,r=Math.round(t*Math.pow(2,52-r)-Math.pow(2,52))):(n=0,r=Math.round(t/Math.pow(2,-1074)))),i=[],t=52;t;--t)i.push(r%2?1:0),r=Math.floor(r/2);for(t=11;t;--t)i.push(n%2?1:0),n=Math.floor(n/2);for(i.push(e?1:0),i.reverse(),e=i.join(""),n="",t=0;64>t;t+=8)r=parseInt(e.substr(t,8),2).toString(16),1===r.length&&(r="0"+r),n+=r;return n.toLowerCase()}function rd(t){return wd.test(t)&&(t=Number(t),t>=-2147483648&&2147483647>=t)?t:null}function gb(t){try{t()}catch(e){setTimeout(function(){throw S("Exception was thrown by user callback.",e.stack||""),e},Math.floor(0))}}function T(t,e){if(ga(t)){var n=Array.prototype.slice.call(arguments,1).slice();gb(function(){t.apply(null,n)})}}function xd(t,e,n){this.type=yd,this.source=t,this.path=e,this.children=n}function zd(){}function Ad(t,e,n,r){this.Lc=t,this.od=e,this.cb=n,this.fd=r,C(!r||e,"Tagged queries must be from server.")}function Cd(){}function Ed(t){return q(t.compare,t)}function Gd(t){this.f=t}function Id(){}function Jd(){}function Ld(){}function Od(t,e){this.f=t,this.vb=e}function Pd(t,e,n){var r=ec(t.f,function(r,i){var o=J(t.vb,i);if(C(o,"Missing index implementation for "+i),r===Dd){if(o.Nb(e.node)){for(var a=[],s=n.rb(ua),u=Q(s);u;)u.name!=e.name&&a.push(u),u=Q(s);return a.push(e),Qd(a,Ed(o))}return Dd}return o=n.get(e.name),a=r,o&&(a=a.remove(new w(e.name,o))),a.Ha(e,e.node)});return new Od(r,t.vb)}function Rd(t,e,n){var r=ec(t.f,function(t){if(t===Dd)return t;var r=n.get(e.name);return r?t.remove(new w(e.name,r)):t});return new Od(r,t.vb)}function Ma(t,e){this.L=t,C(n(this.L)&&null!==this.L,"LeafNode shouldn't be created with null/undefined value."),this.ga=e||O,Td(this.ga),this.f=null}function Vd(t,e,n){this.C=t,(this.ga=e)&&Td(this.ga),t.j()&&C(!this.ga||this.ga.j(),"An empty node cannot have a priority"),this.f=n,this.g=null}function Zd(t,e){var n;return n=(n=Yd(t,e))?(n=n.Qb())&&n.name:t.C.Qb(),n?new w(n,t.C.get(n)):null}function $d(t,e){var n;return n=(n=Yd(t,e))?(n=n.yb())&&n.name:t.C.yb(),n?new w(n,t.C.get(n)):null}function Yd(t,e){return e===Kd?null:t.f.get(e.toString())}function D(t,e){if(null===t)return O;var n=null;if("object"==typeof t&&".priority"in t?n=t[".priority"]:"undefined"!=typeof e&&(n=e),C(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+typeof n),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t)return new Ma(t,D(n));if(t instanceof Array){var r=O,i=t;return P(i,function(t,e){if(x(i,e)&&"."!==e.substring(0,1)){var n=D(t);!n.S()&&n.j()||(r=r.U(e,n))}}),r.da(D(n))}var o=[],a=!1,s=t;if(lb(s,function(t){if("string"!=typeof t||"."!==t.substring(0,1)){var e=D(s[t]);e.j()||(a=a||!e.K().j(),o.push(new w(t,e)))}}),0==o.length)return O;var u=Qd(o,va,function(t){return t.name},xa);if(a){var h=Qd(o,Ed(E));return new Vd(u,D(n),new Od({".priority":h},{".priority":E}))}return new Vd(u,D(n),Sd)}function be(t){this.count=parseInt(Math.log(t+1)/ae,10),this.ld=this.count-1,this.Qd=t+1&parseInt(Array(this.count+1).join("1"),2)}function ce(t){var e=!(t.Qd&1<<t.ld);return t.ld--,e}function Qd(t,e,n,r){function i(e,r){var o=r-e;if(0==o)return null;if(1==o){var a=t[e],s=n?n(a):a;return new Jc(s,a.node,Fc,null,null)}var a=parseInt(o/2,10)+e,o=i(e,a),u=i(a+1,r),a=t[a],s=n?n(a):a;return new Jc(s,a.node,Fc,o,u)}t.sort(e);var o=function(e){function r(e,r){var u=s-e,h=s;s-=e;var h=i(u+1,h),u=t[u],c=n?n(u):u,h=new Jc(c,u.node,r,null,h);o?o.left=h:a=h,o=h}for(var o=null,a=null,s=t.length,u=0;u<e.count;++u){var h=ce(e),c=Math.pow(2,e.count-(u+1));h?r(c,Fc):(r(c,Fc),r(c,Kc))}return a}(new be(t.length));return null!==o?new Dc(r||e,o):new Dc(r||e)}function Ud(t){return"number"==typeof t?"number:"+ud(t):"string:"+t}function Td(t){if(t.S()){var e=t.O();C("string"==typeof e||"number"==typeof e||"object"==typeof e&&x(e,".sv"),"Priority must be a string or number.")}else C(t===Hd||t.j(),"priority of unexpected type.");C(t===Hd||t.K().j(),"Priority nodes can't have a priority of their own.")}function de(){Vd.call(this,new Dc(xa),O,Sd)}function ee(){this.set={}}function fe(t,e){P(t.set,function(t,n){e(n,t)})}function Ja(){this.C=this.L=null}function ge(t,e){if(e.j())return t.L=null,t.C=null,!0;if(null!==t.L){if(t.L.S())return!1;var n=t.L;return t.L=null,n.Y(E,function(e,n){t.Db(new z(e),n)}),ge(t,e)}return null!==t.C?(n=B(e),e=r(e),t.C.contains(n)&&ge(t.C.get(n),e)&&t.C.remove(n),t.C.j()?(t.C=null,!0):!1):!0}function Ka(t,e,n){null!==t.L?n(e,t.L):t.Y(function(t,r){var i=new z(e.toString()+"/"+t);Ka(r,i,n)})}function he(t){C(ea(t)&&0<t.length,"Requires a non-empty array"),this.ua=t,this.m={}}function ie(t,e){C(tc(t.ua,function(t){return t===e}),"Unknown event: "+e)}function je(t,e){this.value=t,this.children=e||ke}function le(t){var e=me;return P(t,function(t,n){e=e.set(new z(n),t)}),e}function ne(e,n,i){if(null!=e.value&&i(e.value))return{path:t,value:e.value};if(n.j())return null;var o=B(n);return e=e.children.get(o),null!==e?(n=ne(e,r(n),i),null!=n?{path:new z(o).I(n.path),value:n.value}:null):null}function oe(t,e){return ne(t,e,function(){return!0})}function pe(t,e,n){if(e.j())return n;var i=B(e);return e=pe(t.children.get(i)||me,r(e),n),i=e.j()?t.children.remove(i):t.children.Ha(i,e),new je(t.value,i)}function qe(e,n){return re(e,t,n)}function re(t,e,n){var r={};return t.children.ka(function(t,i){r[t]=re(i,e.I(t),n)}),n(e,t.value,r)}function se(e,n,r){return te(e,n,t,r)}function te(t,e,n,i){var o=t.value?i(n,t.value):!1;return o?o:e.j()?null:(o=B(e),(t=t.children.get(o))?te(t,r(e),n.I(o),i):null)}function ue(e,n,i){var o=t;if(!n.j()){var a=!0;e.value&&(a=i(o,e.value)),!0===a&&(a=B(n),(e=e.children.get(a))&&ve(e,r(n),o.I(a),i))}}function ve(t,e,n,i){if(e.j())return t;t.value&&i(n,t.value);var o=B(e);return(t=t.children.get(o))?ve(t,r(e),n.I(o),i):me}function we(e,n){xe(e,t,n)}function xe(t,e,n){t.children.ka(function(t,r){xe(r,e.I(t),n)}),t.value&&n(e,t.value)}function ye(t,e){t.children.ka(function(t,n){n.value&&e(t,n.value)})}function ze(t){this.$=t}function Be(t,e,n){if(e.j())return new ze(new je(n));var r=oe(t.$,e);if(null!=r){var i=r.path,r=r.value;return e=A(i,e),r=r.N(e,n),new ze(t.$.set(i,r))}return t=pe(t.$,e,new je(n)),new ze(t)}function Ce(t,e,n){var r=t;return lb(n,function(t,n){r=Be(r,e.I(t),n)}),r}function De(t,e){var n=oe(t.$,e);return null!=n?t.$.get(n.path).ja(A(n.path,e)):null}function Ee(t){var e=[],n=t.$.value;return null!=n?n.S()||n.Y(E,function(t,n){e.push(new w(t,n))}):t.$.children.ka(function(t,n){null!=n.value&&e.push(new w(t,n.value))}),e}function Fe(t,e){if(e.j())return t;var n=De(t,e);return new ze(null!=n?new je(n):t.$.subtree(e))}function Ge(t,e,n){if(null!=e.value)return n.N(t,e.value);var r=null;return e.children.ka(function(e,i){".priority"===e?(C(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Ge(t.I(e),i,n)}),n.ja(t).j()||null===r||(n=n.N(t.I(".priority"),r)),n}function He(){this.f=Ae,this.g=[],this.m=-1}function Ie(t,e){return t.Da?t.path.contains(e):!!mc(t.children,function(n,r){return t.path.I(r).contains(e)})}function Ke(t){return t.visible}function Je(e,n,i){for(var o=Ae,a=0;a<e.length;++a){var s=e[a];if(n(s)){var u=s.path;if(s.Da)i.contains(u)?(u=A(i,u),o=Be(o,u,s.Da)):u.contains(i)&&(u=A(u,i),o=Be(o,t,s.Da.ja(u)));else{if(!s.children)throw gd("WriteRecord should have .snap or .children");i.contains(u)?(u=A(i,u),o=Ce(o,u,s.children)):u.contains(i)&&(u=A(u,i),u.j()?o=Ce(o,t,s.children):(s=J(s.children,B(u)))&&(s=s.ja(r(u)),o=Be(o,t,s)))}}}return o}function Le(t,e){this.ib=t,this.$=e}function Me(){if(he.call(this,["online"]),this.f=!0,"undefined"!=typeof window&&"undefined"!=typeof window.addEventListener){var t=this;window.addEventListener("online",function(){t.f||(t.f=!0,t.B("online",!0))},!1),window.addEventListener("offline",function(){t.f&&(t.f=!1,t.B("online",!1))},!1)}}function Ne(){this.children={},this.Gc=0,this.value=null}function Oe(t,e,n){this.m=t?t:"",this.g=e?e:null,this.f=n?n:new Ne}function Pe(t,e){for(var n,i=e instanceof z?e:new z(e),o=t;null!==(n=B(i));)o=new Oe(n,o,J(o.f.children,n)||new Ne),i=r(i);return o}function Qe(t,e){C("undefined"!=typeof e,"Cannot set value to undefined"),t.f.value=e,Re(t)}function Se(t,e,n,r){n&&!r&&e(t),t.Y(function(t){Se(t,e,!0,r)}),n&&r&&e(t)}function Te(t,e){for(var n=t.parent();null!==n&&!e(n);)n=n.parent()}function Re(t){if(null!==t.g){var e=t.g,n=t.m,r=t.j(),i=x(e.f.children,n);r&&i?(delete e.f.children[n],e.f.Gc--,Re(e)):r||i||(e.f.children[n]=t.f,e.f.Gc++,Re(e))}}function Ue(){he.call(this,["visible"]);var t,e;if("undefined"!=typeof document&&"undefined"!=typeof document.addEventListener&&("undefined"!=typeof document.hidden?(e="visibilitychange",t="hidden"):"undefined"!=typeof document.mozHidden?(e="mozvisibilitychange",t="mozHidden"):"undefined"!=typeof document.msHidden?(e="msvisibilitychange",t="msHidden"):"undefined"!=typeof document.webkitHidden&&(e="webkitvisibilitychange",t="webkitHidden")),this.Z=!0,e){var n=this;document.addEventListener(e,function(){var e=!document[t];e!==n.Z&&(n.Z=e,n.B("visible",e))},!1)}}function We(){this.f={}}function Xe(t,e){var n=e.type,r=e.La;C("child_added"==n||"child_changed"==n||"child_removed"==n,"Only child changes supported for tracking"),C(".priority"!==r,"Only non-priority child changes can be tracked.");var i=J(t.f,r);if(i){var o=i.type;if("child_added"==n&&"child_removed"==o)t.f[r]=new F("child_changed",e.Ea,r,i.Ea);else if("child_removed"==n&&"child_added"==o)delete t.f[r];else if("child_removed"==n&&"child_changed"==o)t.f[r]=new F("child_removed",i.Vc,r);else if("child_changed"==n&&"child_added"==o)t.f[r]=new F("child_added",e.Ea,r);else{if("child_changed"!=n||"child_changed"!=o)throw gd("Illegal combination of changes: "+e+" occurred after "+i);t.f[r]=new F("child_changed",e.Ea,r,i.Vc)}}else t.f[r]=e}function Ye(t){this.g=t,this.u=t.F.W()}function Ze(t,e,n,r){var i=[],o=[];return Kb(e,function(e){"child_changed"===e.type&&t.u.jc(e.Vc,e.Ea)&&o.push(new F("child_moved",e.Ea,e.La))}),$e(t,i,"child_removed",e,r,n),$e(t,i,"child_added",e,r,n),$e(t,i,"child_moved",o,r,n),$e(t,i,"child_changed",e,r,n),$e(t,i,Ra,e,r,n),i}function $e(t,e,n,r,i,o){r=pc(r,function(t){return t.type===n}),wc(r,q(t.f,t)),Kb(r,function(n){var r=af(t,n,o);Kb(i,function(i){i.$c(n.type)&&e.push(i.createEvent(r,t.g))})})}function af(t,e,n){return"value"!==e.type&&"child_removed"!==e.type&&(e.pc=n.Pc(e.La,e.Ea,t.u)),e}function bf(){}function cf(t,e,n){this.lb=t,this.Va=e,this.Wa=n||null}function df(t,e,n){this.ia=t,this.Va=e,this.Wa=n}function ef(t,e){this.M=t,this.f=e}function ff(t,e,n,r){return new ef(new Na(e,n,r),t.f)}function gf(t){return t.M.ea?t.M.o():null}function Va(t){return t.f.ea?t.f.o():null}function hf(t,e){this.yc=t,this.Rd=e}function jf(t){this.P=t}function pf(t,e,n,i,o,a){var s=e.M;if(null!=i.Gb(n))return e;var u;if(n.j())C(Oa(e.G()),"If change path is empty, we must have complete server data"),e.G().pb?(o=Va(e),i=i.Kb(o instanceof Vd?o:O)):i=i.ra(Va(e)),a=t.P.qa(e.M.o(),i,a);else{var h=B(n);if(".priority"==h)C(1==Ba(n),"Can't have a priority with additional path components"),a=s.o(),u=e.G().o(),i=i.Wb(n,a,u),a=null!=i?t.P.da(a,i):s.o();else{var c=r(n);Pa(s,h)?(u=e.G().o(),i=i.Wb(n,s.o(),u),i=null!=i?s.o().R(h).N(c,i):s.o().R(h)):i=i.Ka(h,e.G()),a=null!=i?t.P.N(s.o(),h,i,o,a):s.o()}}return ff(e,a,s.ea||n.j(),t.P.Ba())}function lf(t,e,n,i,o,a,s,u){var h=e.G();if(s=s?t.P:t.P.qb(),n.j())i=s.qa(h.o(),i,null);else if(s.Ba()&&!h.pb)i=h.o().N(n,i),i=s.qa(h.o(),i,null);else{var c=B(n);if((n.j()?!h.ea||h.pb:!Pa(h,B(n)))&&1<Ba(n))return e;i=h.o().R(c).N(r(n),i),i=".priority"==c?s.da(h.o(),i):s.N(h.o(),c,i,Ta,null)}return h=h.ea||n.j(),e=new ef(e.M,new Na(i,h,s.Ba())),pf(t,e,n,o,new Ua(o,e,a),u)}function kf(t,e,n,i,o,a,s){var u=e.M;if(o=new Ua(o,e,a),n.j())i=t.P.qa(e.M.o(),i,s),t=ff(e,i,!0,t.P.Ba());else if(a=B(n),".priority"===a)i=t.P.da(e.M.o(),i),t=ff(e,i,u.ea,u.pb);else{n=r(n);var h,c=u.o().R(a);if(n.j())h=i;else{var f=o.pd(a);h=null!=f?".priority"===Ca(n)&&f.ja(n.parent()).j()?f:f.N(n,i):O}c.ba(h)?t=e:(i=t.P.N(u.o(),a,h,o,s),t=ff(e,i,u.ea,t.P.Ba()))}return t}function mf(t,e,n,r,i,o,a){var s=e;return we(r,function(r,u){var h=n.I(r);Pa(e.M,B(h))&&(s=kf(t,s,h,u,i,o,a))}),we(r,function(r,u){var h=n.I(r);Pa(e.M,B(h))||(s=kf(t,s,h,u,i,o,a))}),s}function qf(t,e){return we(e,function(e,n){t=t.N(e,n)}),t}function nf(t,e,n,r,i,o,a,s){if(e.G().o().j()&&!Oa(e.G()))return e;var u=e;n=n.j()?r:pe(me,n,r);var h=e.G().o();return n.children.ka(function(n,r){if(h.xa(n)){var c=e.G().o().R(n),c=qf(c,r);u=lf(t,u,new z(n),c,i,o,a,s)}}),n.children.ka(function(n,r){var c=!Oa(e.G())&&null==r.value;h.xa(n)||c||(c=e.G().o().R(n),c=qf(c,r),u=lf(t,u,new z(n),c,i,o,a,s))}),u}function of(t,e,n,r,i,o){if(null!=r.Gb(n))return e;var a=new Ua(r,e,i),s=i=e.M.o();if(Oa(e.G())){if(n.j())i=r.ra(Va(e)),s=t.P.qa(e.M.o(),i,o);else if(".priority"===B(n)){var u=r.Ka(B(n),e.G());null==u||i.j()||i.K().ba(u)||(s=t.P.da(i,u))}else u=B(n),i=r.Ka(u,e.G()),null!=i&&(s=t.P.N(e.M.o(),u,i,a,o));i=!0}else e.M.ea||n.j()?(s=i,i=e.M.o(),i.S()||i.Y(E,function(n){var i=r.Ka(n,e.G());null!=i&&(s=t.P.N(s,n,i,a,o))}),i=e.M.ea):(u=B(n),(1==Ba(n)||Pa(e.M,u))&&(n=r.Ka(u,e.G()),null!=n&&(s=t.P.N(i,u,n,a,o))),i=!1);return ff(e,s,i,t.P.Ba())}function rf(t,e){this.za=t;var n=t.F,r=new sf(n.W()),n=tf(n)?new sf(n.W()):n.la?new uf(n):new vf(n);this.g=new jf(n);var i=e.G(),o=e.M,a=r.qa(O,i.o(),null),s=n.qa(O,o.o(),null);this.Fa=new ef(new Na(s,o.ea,n.Ba()),new Na(a,i.ea,r.Ba())),this.f=[],this.m=new Ye(t)}function wf(t){return t.za}function yf(t,e){var n=t.Fa.M,r=[];return n.o().S()||n.o().Y(E,function(t,e){r.push(new F("child_added",e,t))}),n.ea&&r.push(Qa(n.o())),xf(t,r,n.o(),e)}function xf(t,e,n,r){return Ze(t.m,e,n,r?[r]:t.f)}function zf(){this.f={}}function Bf(t){return pc(ic(t.f),function(t){return!tf(t.za.F)})}function Cf(t,e){if(tf(e.F))return Af(t);var n=e.ta();return J(t.f,n)}function Af(t){return nc(t.f,function(t){return tf(t.za.F)})||null}function Df(t){this.f=me,this.g=new He,this.H={},this.m={},this.B=t}function Ef(t,e,r,i,o){var a=t.g,s=o;return C(i>a.m,"Stacking an older write on top of newer ones"),n(s)||(s=!0),a.g.push({path:e,Da:r,zc:i,visible:s}),s&&(a.f=Be(a.f,e,r)),a.m=i,o?Ff(t,new sa(pa,e,r)):[]}function Gf(t,e,n,r){var i=t.g;return C(r>i.m,"Stacking an older merge on top of newer ones"),i.g.push({path:e,children:n,zc:r,visible:!0}),i.f=Ce(i.f,e,n),i.m=r,n=le(n),Ff(t,new xd(pa,e,n))}function Hf(t,e,n){return n=n||!1,e=t.g.qc(e),null==e?[]:Ff(t,new na(e,n))}function If(t,e,n){return n=le(n),Ff(t,new xd(Bd,e,n))}function Jf(t,e,n,r){if(r=Kf(t,r),null!=r){var i=Lf(r);return r=i.path,i=i.cb,e=A(r,e),n=new sa(new Ad(!1,!0,i,!0),e,n),Mf(t,r,n)}return[]}function Nf(t,e,n,r){if(r=Kf(t,r)){var i=Lf(r);return r=i.path,i=i.cb,e=A(r,e),n=le(n),n=new xd(new Ad(!1,!0,i,!0),e,n),Mf(t,r,n)}return[]}function Rf(t){return qe(t,function(t,e,n){if(e&&null!=Af(e))return[Af(e)];var r=[];return e&&(r=Bf(e)),P(n,function(t){r=r.concat(t)}),r})}function Uf(t,e){for(var n=0;n<e.length;++n){var r=e[n];if(!tf(r.F)){var r=Of(r),i=t.m[r];delete t.m[r],delete t.H["_"+i]}}}function Qf(t,e,n){var r=e.path,i=Tf(t,e);if(n=Sf(t,n),e=t.B.cd(e,i,n.ic,n.T),r=t.f.subtree(r),i)C(null==Af(r.value),"If we're adding a query, it shouldn't be shadowed");else for(i=qe(r,function(t,e,n){if(!t.j()&&e&&null!=Af(e))return[wf(Af(e))];var r=[];return e&&(r=r.concat(qc(Bf(e),function(t){return t.za}))),P(n,function(t){r=r.concat(t)}),r}),r=0;r<i.length;++r)n=i[r],t.B.uc(n,Tf(t,n));return e}function Sf(t,e){var n=e.za,r=Tf(t,n);return{ic:function(){return(e.G()||O).hash()},T:function(e){if("ok"===e){if(r){var i=n.path;if(e=Kf(t,r)){var o=Lf(e);e=o.path,o=o.cb,i=A(e,i),i=new qa(new Ad(!1,!0,o,!0),i),e=Mf(t,e,i)}else e=[]}else e=Ff(t,new qa(Bd,n.path));return e}return i="Unknown Error","too_big"===e?i="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"==e?i="Client doesn't have permission to access the desired data.":"unavailable"==e&&(i="The service is unavailable"),i=Error(e+": "+i),i.code=e.toUpperCase(),t.Ta(n,null,i)}}}function Of(t){return t.path.toString()+"$"+t.ta()}function Lf(t){var e=t.indexOf("$");return C(-1!==e&&e<t.length-1,"Bad queryKey."),{cb:t.substr(e+1),path:new z(t.substr(0,e))}}function Kf(t,e){var n=t.H,r="_"+e;return null!==n&&r in n?n[r]:void 0}function Tf(t,e){var n=Of(e);return J(t.m,n)}function Mf(t,e,n){var r=t.f.get(e);return C(r,"Missing sync point for query tag that we're tracking"),r.Oa(n,new Le(e,t.g),null)}function Ff(e,n){return Vf(e,n,e.f,null,new Le(t,e.g))}function Vf(e,n,r,i,o){if(n.path.j())return Wf(e,n,r,i,o);var a=r.get(t);null==i&&null!=a&&(i=a.Qa(t));var s=[],u=B(n.path),h=n.Tb(u);if((r=r.children.get(u))&&h)var c=i?i.R(u):null,u=o.I(u),s=s.concat(Vf(e,h,r,c,u));return a&&(s=s.concat(a.Oa(n,o,i))),s}function Wf(e,n,r,i,o){var a=r.get(t);null==i&&null!=a&&(i=a.Qa(t));var s=[];return r.children.ka(function(t,r){var a=i?i.R(t):null,u=o.I(t),h=n.Tb(t);h&&(s=s.concat(Wf(e,h,r,a,u)))}),a&&(s=s.concat(a.Oa(n,o,i))),s}function sf(t){this.u=t}function vf(t){this.m=new sf(t.W()),this.u=t.W();var e;t.na?(e=Xf(t),e=t.W().Ob(Yf(t),e)):e=t.W().Rb(),this.g=e,t.oa?(e=Zf(t),t=t.W().Ob($f(t),e)):t=t.W().Pb(),this.f=t}function uf(t){this.f=new vf(t),this.u=t.W(),C(t.la,"Only valid if limit has been set"),this.ma=t.ma,this.g=!ag(t)}function bg(t,e,n,r,i,o){var a;if(t.g){var s=Ed(t.u);a=function(t,e){return s(e,t)}}else a=Ed(t.u);C(e.Sa()==t.ma,"");var u=new w(n,r),h=t.g?Zd(e,t.u):$d(e,t.u),c=t.f.matches(u);if(e.xa(n)){var f=e.R(n),h=i.Nc(t.u,h,t.g);return null!=h&&h.name==n&&(h=i.Nc(t.u,h,t.g)),i=null==h?1:a(h,u),c&&!r.j()&&i>=0?(null!=o&&Xe(o,new F("child_changed",r,n,f)),e.U(n,r)):(null!=o&&Xe(o,new F("child_removed",f,n)),e=e.U(n,O),null!=h&&t.f.matches(h)?(null!=o&&Xe(o,new F("child_added",h.node,h.name)),e.U(h.name,h.node)):e)}return r.j()?e:c&&0<=a(h,u)?(null!=o&&(Xe(o,new F("child_removed",h.node,h.name)),Xe(o,new F("child_added",r,n))),e.U(n,r).U(h.name,O)):e}function cg(){this.ob=this.oa=this.gb=this.na=this.la=!1,this.ma=0,this.jb="",this.wb=null,this.$a="",this.ub=null,this.Za="",this.u=E}function ag(t){return""===t.jb?t.na:"l"===t.jb}function Yf(t){return C(t.na,"Only valid if start has been set"),t.wb}function Xf(t){return C(t.na,"Only valid if start has been set"),t.gb?t.$a:"[MIN_NAME]"}function $f(t){return C(t.oa,"Only valid if end has been set"),t.ub}function Zf(t){return C(t.oa,"Only valid if end has been set"),t.ob?t.Za:"[MAX_NAME]"}function eg(t){var e=new cg;return e.la=t.la,e.ma=t.ma,e.na=t.na,e.wb=t.wb,e.gb=t.gb,e.$a=t.$a,e.oa=t.oa,e.ub=t.ub,e.ob=t.ob,e.Za=t.Za,e.u=t.u,e}function fg(t,e){var n=eg(t);return n.u=e,n}function gg(t){var e={};if(t.na&&(e.sp=t.wb,t.gb&&(e.sn=t.$a)),t.oa&&(e.ep=t.ub,t.ob&&(e.en=t.Za)),t.la){e.l=t.ma;var n=t.jb;""===n&&(n=ag(t)?"l":"r"),e.vf=n}return t.u!==E&&(e.i=t.u.toString()),e}function tf(t){return!(t.na||t.oa||t.la)}function hg(t){var e={};if(tf(t)&&t.u==E)return e;var n;return t.u===E?n="$priority":t.u===Nd?n="$value":t.u===Kd?n="$key":(C(t.u instanceof Gd,"Unrecognized index type!"),n=t.u.toString()),e.orderBy=G(n),t.na&&(e.startAt=G(t.wb),t.gb&&(e.startAt+=","+G(t.$a))),t.oa&&(e.endAt=G(t.ub),t.ob&&(e.endAt+=","+G(t.Za))),t.la&&(ag(t)?e.limitToFirst=t.ma:e.limitToLast=t.ma),e}function ig(t){this.f=cc()+cc()+cc(),this.g=t}function jg(t){(!t.window_features||"undefined"!=typeof navigator&&(-1!==navigator.userAgent.indexOf("Fennec/")||-1!==navigator.userAgent.indexOf("Firefox/")&&-1!==navigator.userAgent.indexOf("Android")))&&(t.window_features=void 0),t.window_name||(t.window_name="_blank"),this.f=t}function kg(t){var e={},n={},r={},i="";try{var o=t.split("."),e=ob(id(o[0])||""),n=ob(id(o[1])||""),i=o[2],r=n.d||{};delete n.d}catch(a){}return{ve:e,Yb:n,data:r,xe:i}}function lg(t){return t=kg(t).Yb,"object"==typeof t&&t.hasOwnProperty("iat")?J(t,"iat"):null}function mg(t,e){this.A=nd("p:rest:"),this.J=t,this.f=e,this.m=null,this.fa={}}function ng(t,e){if(n(e))return"tag$"+e;var r=t.F;return C(tf(r)&&r.u==E,"should have a tag if it's not a default query."),t.path.toString()}function og(t,e,n,r){n=n||{},n.format="export",t.m&&(n.auth=t.m);var i=(t.J.eb?"https://":"http://")+t.J.host+e+"?"+Jb(n);t.A("Sending REST request for "+i);var o=new XMLHttpRequest;o.onreadystatechange=function(){if(r&&4===o.readyState){t.A("REST Response for "+i+" received. status:",o.status,"response:",o.responseText);var e=null;if(200<=o.status&&300>o.status){try{e=ob(o.responseText)}catch(n){S("Failed to parse JSON response for "+i+": "+o.responseText)}r(null,e)}else 401!==o.status&&404!==o.status&&S("Got unsuccessful REST response for "+i+" Status: "+o.status),r(o.status);r=null}},o.open("GET",i,!0),o.send()}function pg(t,e){this.g=["session",t.nc,t.zb].join(":"),this.f=e}function qg(t){Kb(t.f,function(e){e.remove(t.g)})}function rg(t,e,n,r){he.call(this,["auth_status"]),this.J=t,this.X=e,this.Z=n,this.Aa=r,this.g=new pg(t,[rb,K]),this.f=null,this.H=!1,sg(this)}function sg(t){K.get("redirect_request_id")&&tg(t);var e=t.g.get();e&&e.token?(ug(t,e),t.X(e.token,function(n,r){vg(t,n,r,!1,e.token,e)},function(e,n){wg(t,"resumeSession()",e,n)})):ug(t,null)}function xg(t,e,n,r,i,o){"wilddogio-demo.com"===t.J.domain&&S("Wilddog authentication is not supported on demo Wilddogs (*.wilddogio-demo.com). To secure your Wilddog, create a production Wilddog at https://www.wilddog.com."),t.X(e,function(o,a){vg(t,o,a,!0,e,n,r||{},i)},function(e,n){wg(t,"auth()",e,n,o)})}function yg(t,e){qg(t.g),ug(t,null),t.Z(function(t,n){if("ok"===t)T(e,null);else{var r=(t||"error").toUpperCase(),i=r;n&&(i+=": "+n),i=Error(i),i.code=r,T(e,i)}})}function vg(t,e,n,r,i,o,a,s){"ok"===e?(r&&(e=n.auth,o.auth=e,o.expires=n.expires,o.token=i,n=null,e&&x(e,"uid")?n=J(e,"uid"):x(o,"uid")&&(n=J(o,"uid")),o.uid=n,n="custom",e&&x(e,"provider")?n=J(e,"provider"):x(o,"provider")&&(n=J(o,"provider")),o.provider=n,qg(t.g),a=a||{},n=rb,"sessionOnly"===a.remember&&(n=K),"none"!==a.remember&&t.g.set(o,n),ug(t,o)),T(s,null,o)):(qg(t.g),ug(t,null),o=t=(e||"error").toUpperCase(),n&&(o+=": "+n),o=Error(o),o.code=t,T(s,o))}function wg(t,e,n,r,i){S(e+" was canceled: "+r),qg(t.g),ug(t,null),t=Error(r),t.code=n.toUpperCase(),T(i,t)}function zg(t,e,n,r,i){Ag(t),n=new vb(r||{},{},n||{}),Bg(t,NODE_CLIENT?[Yb]:[dc,Vb],"/auth/"+e,n,i)}function Cg(t,e,n,r){Ag(t);var i=[jg,ig];n=xb(n),"anonymous"===e||"password"===e?setTimeout(function(){T(r,I("TRANSPORT_UNAVAILABLE"))},0):(n.vc.window_features="menubar=yes,modal=yes,alwaysRaised=yeslocation=yes,resizable=yes,scrollbars=yes,status=yes,height=625,width=625,top="+("object"==typeof screen?.5*(screen.height-625):0)+",left="+("object"==typeof screen?.5*(screen.width-625):0),n.vc.relay_url=Ub(t.J.zb),n.vc.requestWithCredential=q(t.Eb,t),Bg(t,i,"/auth/"+e,n,r))}function tg(t){var e=K.get("redirect_request_id");if(e){var n=K.get("redirect_client_options");K.remove("redirect_request_id"),K.remove("redirect_client_options");var r=[dc,Vb],e={requestId:e,requestKey:Rb(document.location.hash)},n=new vb(n,{},e);t.H=!0;try{document.location.hash=document.location.hash.replace(/&__wilddog_request_key=([a-zA-z0-9]*)/,"")}catch(i){}Bg(t,r,"/auth/session",n,function(){this.H=!1}.bind(t))}}function Bg(t,e,n,r,i){Dg(t,e,n,r,function(e,n){!e&&n&&n.token&&n.uid?xg(t,n.token,n,r.Zb,function(t,e){t?T(i,t):T(i,null,e)}):T(i,e||I("UNKNOWN_ERROR"))})}function Dg(t,e,n,r,i){e=pc(e,function(t){return"function"==typeof t.isAvailable&&t.isAvailable()}),0===e.length?setTimeout(function(){T(i,I("TRANSPORT_UNAVAILABLE"))},0):(e=new(e.shift())(r.vc),r=mb(r.Ma),r.v=(NODE_CLIENT?"node-":"js-")+CLIENT_VERSION,r.transport=e.mb(),r.suppress_status_codes=!0,t=Sb()+"/"+t.J.zb+n,e.open(t,r,function(t,e){if(t)T(i,t);else if(e&&e.error){var n=Error(e.error.message);n.code=e.error.code,n.details=e.error.details,T(i,n)}else T(i,null,e)}))}function ug(t,e){var n=null!==t.f||null!==e;t.f=e,n&&t.B("auth_status",e),t.Aa(null!==e)}function Ag(t){var e=t.J;if("wilddogio.com"!==e.domain&&"wilddogio-demo.com"!==e.domain&&"auth.wilddog.com"===ub)throw Error("This custom Wilddog server ('"+t.J.domain+"') does not support delegated login.")}function Ea(t){for(var e=0,n=0;n<t.length;n++){var r=t.charCodeAt(n);128>r?e++:2048>r?e+=2:r>=55296&&56319>=r?(e+=4,n++):e+=3}return e}function Gg(t){return p(t)&&0!==t.length&&!Eg.test(t)}function Hg(t){return null===t||p(t)||fa(t)&&!qd(t)||ha(t)&&x(t,".sv")}function Ig(t,e,r,i){i&&!n(e)||Jg(M(t,1,i),e,r)}function Jg(t,e,r){if(r instanceof z&&(r=new Da(r,t)),!n(e))throw Error(t+"contains undefined "+Ga(r));if(ga(e))throw Error(t+"contains a function "+Ga(r)+" with contents: "+e.toString());if(qd(e))throw Error(t+"contains "+e.toString()+" "+Ga(r));if(p(e)&&e.length>10485760/3&&10485760<Ea(e))throw Error(t+"contains a string greater than 10485760 utf8 bytes "+Ga(r)+" ('"+e.substring(0,50)+"...')");if(ha(e)){var i=!1,o=!1;if(lb(e,function(e,n){if(".value"===e)i=!0;else if(".priority"!==e&&".sv"!==e&&(o=!0,!Gg(e)))throw Error(t+" contains an invalid key ("+e+") "+Ga(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');r.push(e),Jg(t,n,r),r.pop()}),i&&o)throw Error(t+' contains ".value" child '+Ga(r)+" in addition to actual children.")}}function Kg(t,e,n){if(!ha(e)||ea(e))throw Error(M(t,1,!1)+" must be an Object containing the children to replace.");if(x(e,".value"))throw Error(M(t,1,!1)+' must not contain ".value".  To overwrite with a leaf value, just use .set() instead.');
Ig(t,e,n,!1)}function Lg(t,e,n){if(qd(n))throw Error(M(t,e,!1)+"is "+n.toString()+", but must be a valid Wilddog priority (a string, finite number, server value, or null).");if(!Hg(n))throw Error(M(t,e,!1)+"must be a valid Wilddog priority (a string, finite number, server value, or null).")}function Mg(t,e,r){if(!r||n(e))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw Error(M(t,1,r)+'must be a valid event type: "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}function Ng(t,e,r,i){if((!i||n(r))&&!Gg(r))throw Error(M(t,e,i)+'was an invalid key: "'+r+'".  Wilddog keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')}function Og(t,e){if(!p(e)||0===e.length||Fg.test(e))throw Error(M(t,1,!1)+'was an invalid path: "'+e+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')}function Pg(t,e){if(".info"===B(e))throw Error(t+" failed: Can't modify data under /.info/")}function Qg(t,e){if(!p(e))throw Error(M(t,1,!1)+"must be a valid credential (a string).")}function Rg(t,e,n){if(!p(n))throw Error(M(t,e,!1)+"must be a valid string.")}function Sg(t,e,r,i){if((!i||n(r))&&(!ha(r)||null===r))throw Error(M(t,e,i)+"must be a valid object.")}function Tg(t,e,n){if(!ha(e)||null===e||!x(e,n))throw Error(M(t,1,!1)+'must contain the key "'+n+'"');if(!p(J(e,n)))throw Error(M(t,1,!1)+'must contain the key "'+n+'" with type "string"')}function U(t,e,n){this.f=t,this.g=e,this.u=n}function W(t,e,n,r){this.w=t,this.path=e,this.F=n,this.f=r}function Ug(t){var e=null,n=null;if(t.na&&(e=Yf(t)),t.oa&&(n=$f(t)),t.W()===Kd){if(t.na){if("[MIN_NAME]"!=Xf(t))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!=typeof e)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.")}if(t.oa){if("[MAX_NAME]"!=Zf(t))throw Error("Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().");if("string"!=typeof n)throw Error("Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.")}}else if(t.W()===E){if(null!=e&&!Hg(e)||null!=n&&!Hg(n))throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(C(t.W()instanceof Gd||t.W()===Nd,"unknown index type."),null!=e&&"object"==typeof e||null!=n&&"object"==typeof n)throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")}function Vg(t){if(t.na&&t.oa&&t.la&&(!t.la||""===t.jb))throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")}function Wg(t,e){if(!0===t.f)throw Error(e+": You can't combine multiple orderBy calls.")}function Xg(t,e,n){var r={cancel:null,context:null};if(e&&n)r.cancel=e,N(t,3,r.cancel,!0),r.context=n,zb(t,4,r.context);else if(e)if("object"==typeof e&&null!==e)r.context=e;else{if("function"!=typeof e)throw Error(M(t,3,!0)+" must either be a cancel callback or a context object.");r.cancel=e}return r}function ah(t,e,n,r,i){this.id=t,this.A=nd("c:"+this.id+":"),this.lc=n,this.Sb=r,this.sa=i,this.J=e,this.hb=0,this.A("Connection created"),this.Ga=bh(this),this.Ga.on("open",ch(this)),this.Ga.on("error",dh(this))}function ch(t){return function(){t.Ga.on("message",eh(t)),t.Ga.on("close",fh(t))}}function eh(t){return function(e){if(null==e)throw Error("data is null");if(0!=e.charAt(0))if(2==e.charAt(0)){var n=null;try{n=JSON.parse(e.substr(1))}catch(r){throw r}if("object"!=typeof n||2>n.length)throw Error("decodedData in wrong format");if(e=n[1],"wd"==n[0])if("c"==e.t)if(n=e.d,"h"==n.t){e=n.d;var n=e.ts,i=e.v,o=e.h;t.sessionId=e.s,"1.0"!=i&&S("Protocol version mismatch detected"),0==t.hb&&(o!=t.J.Ca?(tb(t.J,o),t.A("updateHost ",o),t.Ga.close(),t.Ga=bh(t),t.Ga.on("open",ch(t)),t.Ga.on("error",dh(t))):(t.hb=1,t.A("realtime state connected"),e=t.J,i=e.Pa.indexOf(t.J.Ca),i>=0&&(e.Pa.splice(i,1),K.set("failHosts",JSON.stringify(e.Pa))),t.Sb&&(t.Sb(n),null==t.Sb)))}else"r"==n.t&&(n=n.d,t.A("Reset packet received.  New host: "+n),tb(t.J,n),t.close());else"d"==e.t&&t.lc(e.d);else t.A("eventType not known")}else 1!=e.charAt(0)&&t.A("data format error")}}function fh(t){return function(){2!==t.hb&&(t.A("Closing realtime connection."),t.hb=2,t.sa&&(t.sa(),t.sa=null))}}function dh(t){return function(e){if(t.A("error",e,n),0==t.hb){var n=t.J.Ca,r=t.J;0>r.Pa.indexOf(n)&&(r.Pa.push(n),K.set("failHosts",JSON.stringify(r.Pa))),t.A("error while connecting",e,n),tb(t.J)}t.close()}}function bh(t){var e=(t.J.eb?"https://":"http://")+t.J.Ca+"?v=1.0",n=t.J;return n.host!==n.Ca&&(e=e+"&ns="+t.J.zb),t.sessionId&&(e=e+"&s="+t.sessionId),0<t.J.Pa.length&&(e=e+"&fst="+encodeURIComponent(t.J.Pa.join(","))),$g(e,{path:"/.ws",rememberUpgrade:!0})}function gh(t,e,n,r){this.id=hh++,this.A=nd("p:"+this.id+":"),this.Ac=!1,this.fa={},this.g=[],this.Ua=0,this.Aa=[],this.f=!1,this.H=1e3,this.Ub=3e5,this.jd=e,this.hd=n,this.Id=r,this.J=t,this.bd=null,this.Vb={},this.Gd=0,this.gd=!0,this.ua=this.Bc=null,ih(this,0),Ue.Xa().bb("visible",this.ee,this),-1===t.host.indexOf("wd.local")&&Me.Xa().bb("online",this.de,this)}function kh(t,e){var n=e.fe,r=n.path.toString(),i=n.ta();t.A("Listen on "+r+" for "+i);var o={p:r};e.tag&&(o.q=gg(n.F),o.t=e.tag),o.h=e.ic(),t.ya("q",o,function(o){var a=o.d,s=o.s;if(a&&"object"==typeof a&&x(a,"w")){var u=J(a,"w");ea(u)&&0<=yb(u,"no_index")&&S("Using an unspecified index. Consider adding "+('".indexOn": "'+n.F.W().toString()+'"')+" at "+n.path.toString()+" to your security rules for better performance")}(t.fa[r]&&t.fa[r][i])===e&&(t.A("listen response",o),"ok"!==s&&lh(t,r,i),e.T&&e.T(s,a))})}function mh(t){var e=t.m;t.f&&e&&t.ya("auth",{cred:e.Sd},function(n){var r=n.s;n=n.d||"error","ok"!==r&&t.m===e&&delete t.m,e.nd?"ok"!==r&&e.Xb&&e.Xb(r,n):(e.nd=!0,e.Lb&&e.Lb(r,n))})}function nh(t,e,n,r,i){n={p:n,d:r},t.A("onDisconnect "+e,n),t.ya(e,n,function(t){i&&setTimeout(function(){i(t.s,t.d)},Math.floor(0))})}function oh(t,e,r,i,o,a){i={p:r,d:i},n(a)&&(i.h=a),t.g.push({action:e,request:i,T:o}),t.Ua++,e=t.g.length-1,t.f?ph(t,e):t.A("Buffering put: "+r)}function ph(t,e){var n=t.g[e].action,r=t.g[e].request,i=t.g[e].T;t.g[e].ge=t.f,t.ya(n,r,function(r){t.A(n+" response",r),delete t.g[e],t.Ua--,0===t.Ua&&(t.g=[]),i&&i(r.s,r.d)})}function ih(t,e){C(!t.B,"Scheduling a connect when we're already connected/ing?"),t.X&&clearTimeout(t.X),t.X=setTimeout(function(){if(t.X=null,sh(t)){t.A("Making a connection attempt"),t.Bc=(new Date).getTime(),t.ua=null;var e=q(t.be,t),n=q(t.Sb,t),r=q(t.vd,t),i=t.id+":"+jh++;t.B=new ah(i,t.J,e,n,r)}},Math.floor(e))}function qh(t,e,n){n=n?qc(n,function(t){return sd(t)}).join("$"):"default",(t=lh(t,e,n))&&t.T&&t.T("permission_denied")}function lh(t,e,r){e=new z(e).toString();var i;return n(t.fa[e])?(i=t.fa[e][r],delete t.fa[e][r],0===gc(t.fa[e])&&delete t.fa[e]):i=void 0,i}function rh(t){mh(t),P(t.fa,function(e){P(e,function(e){kh(t,e)})});for(var e=0;e<t.g.length;e++)t.g[e]&&ph(t,e);for(;t.Aa.length;)e=t.Aa.shift(),nh(t,e.action,e.Bb,e.data,e.T)}function sh(t){var e;return e=Me.Xa().f,!t.Ac&&e}function th(t,e){this.J=t,this.ua=Bc(t),this.g=new Za,this.X=1,this.Ja=null,this.m,e||0<=("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)?(this.m=new mg(this.J,q(this.Bd,this)),setTimeout(q(this.Ad,this,!0),0)):this.m=this.Ja=new gh(this.J,q(this.Bd,this),q(this.Ad,this),q(this.ne,this)),this.Ua=Cc(t,q(function(){return new Aa(this.ua,this.m)},this)),this.B=new Oe,this.Aa=new Mb;var n=this;this.H=new Df({cd:function(t,e,r,i){return e=[],r=n.Aa.o(t.path),r.j()||(e=Ff(n.H,new sa(Bd,t.path,r)),setTimeout(function(){i("ok")},0)),e},uc:ba}),uh(this,"connected",!1),this.sa=new Ja,this.V=new rg(t,q(this.m.V,this.m),q(this.m.wc,this.m),q(this.me,this)),this.cc=0,this.Rc=null,this.f=new Df({cd:function(t,e,r,i){return n.m.sd(t,r,e,function(e,r){var o=i(e,r);db(n.g,t.path,o)}),[]},uc:function(t,e){n.m.zd(t,e)}})}function vh(t){return t=t.Aa.o(new z(".info/serverTimeOffset")).O()||0,(new Date).getTime()+t}function wh(t){return t=t={timestamp:vh(t)},t.timestamp=t.timestamp||(new Date).getTime(),t}function uh(t,e,n){e=new z("/.info/"+e),n=D(n);var r=t.Aa;r.rc=r.rc.N(e,n),n=Ff(t.H,new sa(Bd,e,n)),db(t.g,e,n)}function yh(e){e.A("onDisconnectEvents");var n=wh(e),r=[];Ka(Ia(e.sa,n),t,function(t,n){r=r.concat(Ff(e.f,new sa(Bd,t,n)));var i=Ah(e,t);xh(e,i)}),e.sa=new Ja,db(e.g,t,r)}function Bh(t,e,n,r){var i=D(n);t.m.Wc(e.toString(),i.O(!0),function(n,o){"ok"===n&&t.sa.Db(e,i),zh(r,n,o)})}function Ch(t,e,n,r,i){var o=D(n,r);t.m.Wc(e.toString(),o.O(!0),function(n,r){"ok"===n&&t.sa.Db(e,o),zh(i,n,r)})}function Dh(t,e,n,r){var i,o=!0;for(i in n)o=!1;o?(fb("onDisconnect().update() called with empty data.  Don't do anything."),zh(r,"ok")):t.m.ud(e.toString(),n,function(i,o){if("ok"===i)for(var a in n){var s=D(n[a]);t.sa.Db(e.I(a),s)}zh(r,i,o)})}function Yg(t,e,n){n=".info"===B(e.path)?t.H.kb(e,n):t.f.kb(e,n),bb(t.g,e.path,n)}function zh(t,e,n){t&&gb(function(){if("ok"==e)t(null);else{var r=(e||"error").toUpperCase(),i=r;n&&(i+=": "+n),i=Error(i),i.code=r,t(i)}})}function Eh(t,e,r,i,o){function a(){}t.A("transaction on "+e);var s=new V(t,e);if(s.bb("value",a),r={path:e,update:r,T:i,status:null,wd:fd(),kd:o,xd:0,xc:function(){s.Ab("value",a)},Cc:null,va:null,$b:null,ac:null,bc:null},i=t.f.ra(e,void 0)||O,r.$b=i,i=r.update(i.O()),n(i)){Jg("transaction failed: Data returned ",i,r.path),r.status=1,o=Pe(t.B,e);var u=o.wa()||[];u.push(r),Qe(o,u),"object"==typeof i&&null!==i&&x(i,".priority")?(u=J(i,".priority"),C(Hg(u),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):u=(t.f.ra(e)||O).K().O(),o=wh(t),i=D(i,u),o=La(i,o),r.ac=i,r.bc=o,r.va=t.X++,r=Ef(t.f,e,o,r.va,r.kd),db(t.g,e,r),Fh(t)}else r.xc(),r.ac=null,r.bc=null,r.T&&(t=new U(r.$b,new V(t,r.path),E),r.T(null,!1,t))}function Fh(t,e){var n=e||t.B;if(e||Gh(t,n),null!==n.wa()){var r=Hh(t,n);C(0<r.length,"Sending zero length transaction queue"),sc(r,function(t){return 1===t.status})&&Ih(t,n.path(),r)}else n.hc()&&n.Y(function(e){Fh(t,e)})}function Ih(t,e,n){for(var r=qc(n,function(t){return t.va}),i=t.f.ra(e,r)||O,r=i,i=i.hash(),o=0;o<n.length;o++){var a=n[o];C(1===a.status,"tryToSendTransactionQueue_: items in queue should all be run."),a.status=2,a.xd++;var s=A(e,a.path),r=r.N(s,a.ac)}r=r.O(!0),t.m.Hb(e.toString(),r,function(r){t.A("transaction put response",{path:e.toString(),status:r});var i=[];if("ok"===r){for(r=[],o=0;o<n.length;o++){if(n[o].status=3,i=i.concat(Hf(t.f,n[o].va)),n[o].T){var a=n[o].bc,s=new V(t,n[o].path);r.push(q(n[o].T,null,null,!0,new U(a,s,E)))}n[o].xc()}for(Gh(t,Pe(t.B,e)),Fh(t),db(t.g,e,i),o=0;o<r.length;o++)gb(r[o])}else{if("datastale"===r)for(o=0;o<n.length;o++)n[o].status=4===n[o].status?5:1;else for(S("transaction at "+e.toString()+" failed: "+r),o=0;o<n.length;o++)n[o].status=5,n[o].Cc=r;xh(t,e)}},i)}function xh(t,e){var n=Jh(t,e),r=n.path(),n=Hh(t,n);return Kh(t,n,r),r}function Kh(t,e,r){if(0!==e.length){for(var i=[],o=[],a=qc(e,function(t){return t.va}),s=0;s<e.length;s++){var u,h=e[s],c=A(r,h.path),f=!1;if(C(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),5===h.status)f=!0,u=h.Cc,o=o.concat(Hf(t.f,h.va,!0));else if(1===h.status)if(25<=h.xd)f=!0,u="maxretry",o=o.concat(Hf(t.f,h.va,!0));else{var l=t.f.ra(h.path,a)||O;h.$b=l;var p=e[s].update(l.O());n(p)?(Jg("transaction failed: Data returned ",p,h.path),c=D(p),"object"==typeof p&&null!=p&&x(p,".priority")||(c=c.da(l.K())),l=h.va,p=wh(t),p=La(c,p),h.ac=c,h.bc=p,h.va=t.X++,vc(a,l),o=o.concat(Ef(t.f,h.path,p,h.va,h.kd)),o=o.concat(Hf(t.f,l,!0))):(f=!0,u="nodata",o=o.concat(Hf(t.f,h.va,!0)))}db(t.g,r,o),o=[],f&&(e[s].status=3,setTimeout(e[s].xc,Math.floor(0)),e[s].T&&("nodata"===u?(h=new V(t,e[s].path),i.push(q(e[s].T,null,null,!1,new U(e[s].$b,h,E)))):i.push(q(e[s].T,null,Error(u),!1,null))))}for(Gh(t,t.B),s=0;s<i.length;s++)gb(i[s]);Fh(t)}}function Jh(t,e){for(var n,i=t.B;null!==(n=B(e))&&null===i.wa();)i=Pe(i,n),e=r(e);return i}function Hh(t,e){var n=[];return Lh(t,e,n),n.sort(function(t,e){return t.wd-e.wd}),n}function Lh(t,e,n){var r=e.wa();if(null!==r)for(var i=0;i<r.length;i++)n.push(r[i]);e.Y(function(e){Lh(t,e,n)})}function Gh(t,e){var n=e.wa();if(n){for(var r=0,i=0;i<n.length;i++)3!==n[i].status&&(n[r]=n[i],r++);n.length=r,Qe(e,0<n.length?n:null)}e.Y(function(e){Gh(t,e)})}function Ah(t,e){var n=Jh(t,e).path(),r=Pe(t.B,e);return Te(r,function(e){Mh(t,e)}),Mh(t,r),Se(r,function(e){Mh(t,e)}),n}function Mh(t,e){var n=e.wa();if(null!==n){for(var r=[],i=[],o=-1,a=0;a<n.length;a++)4!==n[a].status&&(2===n[a].status?(C(o===a-1,"All SENT items should be at beginning of queue."),o=a,n[a].status=4,n[a].Cc="set"):(C(1===n[a].status,"Unexpected transaction status in abort"),n[a].xc(),i=i.concat(Hf(t.f,n[a].va,!0)),n[a].T&&r.push(q(n[a].T,null,Error("set"),!1,null))));for(-1===o?Qe(e,null):n.length=o+1,db(t.g,e.path(),i),a=0;a<r.length;a++)gb(r[a])}}function Nh(){this.f={},this.g=!1}function Y(t,e){this.f=t,this.pa=e}function V(t,e){var n,r,i;if(t instanceof th)n=t,r=e;else{L("new Wilddog",1,2,arguments.length),r=Tb(arguments[0]),n=r.le,"wilddog"===r.domain&&pd(r.host+" is no longer supported. Please use <YOUR WILDDOG>.wilddogio.com instead"),n||pd("Cannot parse Wilddog url. Please use https://<YOUR WILDDOG>.wilddogio.com"),r.eb||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&S("Insecure Wilddog access from a secure page. Please use https in calls to new Wilddog()."),n=new sb(r.host,r.eb,n),r=new z(r.Bb),i=r.toString();var o;if(!(o=!p(n.host)||0===n.host.length||!Gg(n.zb))&&(o=0!==i.length)&&(i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),o=!(p(i)&&0!==i.length&&!Fg.test(i))),o)throw Error(M("new Wilddog",1,!1)+'must be a valid wilddog URL and the path can\'t contain ".", "#", "$", "[", or "]".');if(e)if(e instanceof Nh)i=e;else{if(!p(e))throw Error("Expected a valid Wilddog.Context for second argument to new Wilddog()");i=Nh.Xa(),n.nc=e}else i=Nh.Xa();o=n.toString();var a=J(i.f,o);a||(a=new th(n,i.g),i.f[o]=a),n=a}W.call(this,n,r,dg,!1)}function md(t,e){C(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?("undefined"!=typeof console&&("function"==typeof console.log?eb=q(console.log,console):"object"==typeof console.log&&(eb=function(t){console.log(t)})),e&&K.set("logging_enabled",!0)):t?eb=t:(eb=null,K.remove("logging_enabled"))}var h,aa=this,ka=Date.now||function(){return+new Date},ma={};na.prototype.Tb=function(){return this.path.j()?this:new na(r(this.path),this.ad)},na.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" ack write revert="+this.ad+")"},qa.prototype.Tb=function(){return this.path.j()?new qa(this.source,t):new qa(this.source,r(this.path))},qa.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" listen_complete)"},sa.prototype.Tb=function(e){return this.path.j()?new sa(this.source,t,this.Da.R(e)):new sa(this.source,r(this.path),this.Da)},sa.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" overwrite: "+this.Da.toString()+")"},v.prototype.S,v.prototype.K,v.prototype.da,v.prototype.R,v.prototype.ja,v.prototype.Pc,v.prototype.U,v.prototype.N,v.prototype.xa,v.prototype.j,v.prototype.Sa,v.prototype.O,v.prototype.hash,v.prototype.nb,v.prototype.ba,v.prototype.Na,v.prototype.xb,ya.prototype.get=function(){var t=this.g.get(),e=za(t);if(this.f)for(var n in this.f)e[n]-=this.f[n];return this.f=t,e},Aa.prototype.f=function(){var t,e=this.Z.get(),n={},r=!1;for(t in e)0<e[t]&&x(this.yd,t)&&(n[t]=e[t],r=!0);r&&this.g.Yc(n),setTimeout(q(this.f,this),Math.floor(6e5*Math.random()))},h=z.prototype,h.toString=function(){for(var t="",e=this.ca;e<this.D.length;e++)""!==this.D[e]&&(t+="/"+this.D[e]);return t||"/"},h.slice=function(t){return this.D.slice(this.ca+(t||0))},h.parent=function(){if(this.ca>=this.D.length)return null;for(var t=[],e=this.ca;e<this.D.length-1;e++)t.push(this.D[e]);return new z(t,0)},h.I=function(t){for(var e=[],n=this.ca;n<this.D.length;n++)e.push(this.D[n]);if(t instanceof z)for(n=t.ca;n<t.D.length;n++)e.push(t.D[n]);else for(t=t.split("/"),n=0;n<t.length;n++)0<t[n].length&&e.push(t[n]);return new z(e,0)},h.j=function(){return this.ca>=this.D.length},h.ba=function(t){if(Ba(this)!==Ba(t))return!1;for(var e=this.ca,n=t.ca;e<=this.D.length;e++,n++)if(this.D[e]!==t.D[n])return!1;return!0},h.contains=function(t){var e=this.ca,n=t.ca;if(Ba(this)>Ba(t))return!1;for(;e<this.D.length;){if(this.D[e]!==t.D[n])return!1;++e,++n}return!0};var t=new z("");Da.prototype.push=function(t){0<this.g.length&&(this.f+=1),this.g.push(t),this.f+=Ea(t),Fa(this)},Da.prototype.pop=function(){var t=this.g.pop();this.f-=Ea(t),0<this.g.length&&--this.f},Na.prototype.o=function(){return this.f};var Ra="value";Sa.prototype.pd=function(){return null},Sa.prototype.Nc=function(){return null};var Ta=new Sa;Ua.prototype.pd=function(t){var e=this.Fa.M;return Pa(e,t)?e.o().R(t):(e=null!=this.mc?new Na(this.mc,!0,!1):this.Fa.G(),this.Cd.Ka(t,e))},Ua.prototype.Nc=function(t,e,n){var r=null!=this.mc?this.mc:Va(this.Fa);return t=this.Cd.Dc(r,e,1,n,t),0===t.length?null:t[0]},Wa.prototype.Ya,Wa.prototype.gc,Wa.prototype.Ra,Wa.prototype.toString,Xa.prototype.Ya=function(){var t=this.sc.Cb();return"value"===this.ec?t.path:t.parent().path},Xa.prototype.gc=function(){return this.ec},Xa.prototype.Ra=function(){return this.Jc.Ra(this)},Xa.prototype.toString=function(){return this.Ya().toString()+":"+this.ec+":"+G(this.sc.md())},Ya.prototype.Ya=function(){return this.path},Ya.prototype.gc=function(){return"cancel"},Ya.prototype.Ra=function(){return this.Jc.Ra(this)},Ya.prototype.toString=function(){return this.path.toString()+":cancel"},ab.prototype.add=function(t){this.fc.push(t)},ab.prototype.Ya=function(){return this.pa};var hb={NETWORK_ERROR:"Unable to contact the Wilddog server.",SERVER_ERROR:"An unknown server error occurred.",TRANSPORT_UNAVAILABLE:"There are no login transports available for the requested method.",REQUEST_INTERRUPTED:"The browser redirected the page before the login request could complete.",USER_CANCELLED:"The user cancelled authentication."};nb.prototype.set=function(t,e){null==e?this.Mb.removeItem(this.oc+t):this.Mb.setItem(this.oc+t,G(e))},nb.prototype.get=function(t){return t=this.Mb.getItem(this.oc+t),null==t?null:ob(t)},nb.prototype.remove=function(t){this.Mb.removeItem(this.oc+t)},nb.prototype.toString=function(){return this.Mb.toString()},pb.prototype.set=function(t,e){null==e?delete this.Jb[t]:this.Jb[t]=e},pb.prototype.get=function(t){return x(this.Jb,t)?this.Jb[t]:null},pb.prototype.remove=function(t){delete this.Jb[t]};var rb=qb("localStorage"),K=qb("sessionStorage");sb.prototype.toString=function(){var t=(this.eb?"https://":"http://")+this.host;return this.nc&&(t+="<"+this.nc+">"),t};var ub="auth.wilddog.com",wb=["remember","redirectTo"];la(Bb,Ab),Bb.prototype.update=function(t,e){if(null!=t){n(e)||(e=t.length);for(var r=e-this.g,i=0,o=this.X,a=this.m;e>i;){if(0==a)for(;r>=i;)Cb(this,t,i),i+=this.g;if(p(t)){for(;e>i;)if(o[a]=t.charCodeAt(i),++a,++i,a==this.g){Cb(this,o),a=0;break}}else for(;e>i;)if(o[a]=t[i],++a,++i,a==this.g){Cb(this,o),a=0;break}}this.m=a,this.H+=e}};var Hb={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t","\x0B":"\\u000b"},Ib=/\uffff/.test("￿")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;Mb.prototype.o=function(t){return this.rc.ja(t)},Mb.prototype.toString=function(){return this.rc.toString()},Vb.prototype.open=function(t,e,n){function r(){n&&(n(I("REQUEST_INTERRUPTED")),n=null)}function i(){setTimeout(function(){window.__wilddog_auth_jsonp[o]=void 0,Wb(window.__wilddog_auth_jsonp)&&(window.__wilddog_auth_jsonp=void 0);try{var t=document.getElementById(o);t&&t.parentNode.removeChild(t)}catch(e){}},1),Pb(window,"beforeunload",r)}var o="fn"+(new Date).getTime()+Math.floor(99999*Math.random());e[this.f.callback_parameter]="__wilddog_auth_jsonp."+o,t+=(/\?/.test(t)?"":"?")+Jb(e),Ob(window,"beforeunload",r),window.__wilddog_auth_jsonp[o]=function(t){n&&(n(null,t),n=null),i()},Xb(o,t,n)},Vb.isAvailable=function(){return!NODE_CLIENT},Vb.prototype.mb=function(){return"json"},Yb.prototype.open=function(t,e,n){var r=Tb(t),i=__webpack_require__("http"===r.scheme?150:267);t=this.f.method;var o,a={Accept:"application/json;text/plain"};if(Zb(a,this.f.headers),r={host:r.host.split(":")[0],port:r.port,path:r.Bb,method:this.f.method.toUpperCase()},"GET"===t)r.path+=(/\?/.test(r.path)?"":"?")+Jb(e),o=null;else{var s=this.f.headers.content_type;"application/json"===s&&(o=G(e)),"application/x-www-form-urlencoded"===s&&(o=Jb(e)),a["Content-Length"]=Buffer.byteLength(o,"utf8")}r.headers=a,e=i.request(r,function(t){var e="";t.setEncoding("utf8"),t.on("data",function(t){e+=t}),t.on("end",function(){try{e=ob(e+"")}catch(t){}n&&(n(null,e),n=null)})}),"GET"!==t&&e.write(o),e.on("error",function(t){n(t&&t.code&&("ENOTFOUND"===t.code||"ENETDOWN"===t.code)?I("NETWORK_ERROR"):I("SERVER_ERROR")),n=null}),e.end()},Yb.isAvailable=function(){return NODE_CLIENT},Yb.prototype.mb=function(){return"json"},$b.prototype.lc=function(t){var e,n=this;try{e=ob(t.data)}catch(r){}e&&"request"===e.a&&(Pb(window,"message",this.lc),this.B=t.origin,this.f&&setTimeout(function(){n.f(n.B,e.d,function(t,e){n.X=!e,n.f=void 0,ac(n,{a:"response",d:t,forceKeepWindowOpen:e})})},0))},$b.prototype.Z=function(){try{Pb(this.m,"message",this.H)}catch(t){}this.f&&(ac(this,{a:"error",d:"unknown closed window"}),this.f=void 0);try{window.close()}catch(t){}},$b.prototype.H=function(t){if(this.X&&"die"===t.data)try{window.close()}catch(e){}},bc.prototype.open=function(t,e){K.set("redirect_request_id",this.f),K.set("redirect_request_id",this.f),e.requestId=this.f,e.redirectTo=e.redirectTo||window.location.href,t+=(/\?/.test(t)?"":"?")+Jb(e),window.location=t},bc.isAvailable=function(){return!NODE_CLIENT&&!jb()&&!ib()},bc.prototype.mb=function(){return"redirect"},dc.prototype.open=function(t,e,n){function r(){n&&(n(I("REQUEST_INTERRUPTED")),n=null)}var i,o=new XMLHttpRequest,a=this.f.method.toUpperCase();if(Ob(window,"beforeunload",r),o.onreadystatechange=function(){if(n&&4===o.readyState){var t;if(200<=o.status&&300>o.status){try{t=ob(o.responseText)}catch(e){}n(null,t)}else n(500<=o.status&&600>o.status?I("SERVER_ERROR"):I("NETWORK_ERROR"));n=null,Pb(window,"beforeunload",r)}},"GET"===a)t+=(/\?/.test(t)?"":"?")+Jb(e),i=null;else{var s=this.f.headers.content_type;"application/json"===s&&(i=G(e)),"application/x-www-form-urlencoded"===s&&(i=Jb(e))}o.open(a,t,!0),t={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"},Zb(t,this.f.headers);for(var u in t)o.setRequestHeader(u,t[u]);o.send(i)},dc.isAvailable=function(){return!NODE_CLIENT&&!!window.XMLHttpRequest&&(!("undefined"!=typeof navigator&&(navigator.userAgent.match(/MSIE/)||navigator.userAgent.match(/Trident/)))||kb())},dc.prototype.mb=function(){return"json"};var oc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),yb=Array.prototype.indexOf?function(t,e,n){return Array.prototype.indexOf.call(t,e,n)}:function(t,e,n){if(n=null==n?0:0>n?Math.max(0,t.length+n):n,p(t))return p(e)&&1==e.length?t.indexOf(e,n):-1;for(;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Kb=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i=p(t)?t.split(""):t,o=0;r>o;o++)o in i&&e.call(n,i[o],o,t)},pc=Array.prototype.filter?function(t,e,n){return Array.prototype.filter.call(t,e,n)}:function(t,e,n){for(var r=t.length,i=[],o=0,a=p(t)?t.split(""):t,s=0;r>s;s++)if(s in a){var u=a[s];e.call(n,u,s,t)&&(i[o++]=u)}return i},qc=Array.prototype.map?function(t,e,n){return Array.prototype.map.call(t,e,n)}:function(t,e,n){for(var r=t.length,i=Array(r),o=p(t)?t.split(""):t,a=0;r>a;a++)a in o&&(i[a]=e.call(n,o[a],a,t));return i},rc=Array.prototype.reduce?function(t,e,n,r){return r&&(e=q(e,r)),Array.prototype.reduce.call(t,e,n)}:function(t,e,n,r){var i=n;return Kb(t,function(n,o){i=e.call(r,i,n,o,t)}),i},sc=Array.prototype.every?function(t,e,n){return Array.prototype.every.call(t,e,n)}:function(t,e,n){for(var r=t.length,i=p(t)?t.split(""):t,o=0;r>o;o++)if(o in i&&!e.call(n,i[o],o,t))return!1;return!0};yc.prototype.get=function(){return za(this.f)};var zc={},Ac={};({}).oe,h=Dc.prototype,h.Ha=function(t,e){return new Dc(this.g,this.f.Ha(t,e,this.g).aa(null,null,Fc,null,null))},h.remove=function(t){return new Dc(this.g,this.f.remove(t,this.g).aa(null,null,Fc,null,null))},h.get=function(t){for(var e,n=this.f;!n.j();){if(e=this.g(t,n.key),0===e)return n.value;0>e?n=n.left:e>0&&(n=n.right)}return null},h.j=function(){return this.f.j()},h.count=function(){return this.f.count()},h.Qb=function(){return this.f.Qb()},h.yb=function(){return this.f.yb()},h.ka=function(t){return this.f.ka(t)},h.rb=function(t){return new Hc(this.f,null,this.g,!1,t)},h.sb=function(t,e){return new Hc(this.f,t,this.g,!1,e)},h.tb=function(t,e){return new Hc(this.f,t,this.g,!0,e)},h.qd=function(t){return new Hc(this.f,null,this.g,!0,t)};var Kc=!0,Fc=!1;h=Jc.prototype,h.aa=function(t,e,n,r,i){return new Jc(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)},h.count=function(){return this.left.count()+1+this.right.count()},h.j=function(){return!1},h.ka=function(t){return this.left.ka(t)||t(this.key,this.value)||this.right.ka(t)},h.Qb=function(){return Lc(this).key},h.yb=function(){return this.right.j()?this.key:this.right.yb()},h.Ha=function(t,e,n){var r,i;return i=this,r=n(t,i.key),i=0>r?i.aa(null,null,null,i.left.Ha(t,e,n),null):0===r?i.aa(null,e,null,null,null):i.aa(null,null,null,null,i.right.Ha(t,e,n)),Mc(i)},h.remove=function(t,e){var n,r;if(n=this,0>e(t,n.key))n.left.j()||n.left.ha()||n.left.left.ha()||(n=Oc(n)),n=n.aa(null,null,null,n.left.remove(t,e),null);else{if(n.left.ha()&&(n=Pc(n)),n.right.j()||n.right.ha()||n.right.left.ha()||(n=Qc(n),n.left.left.ha()&&(n=Pc(n),n=Qc(n))),0===e(t,n.key)){if(n.right.j())return Ec;r=Lc(n.right),n=n.aa(r.key,r.value,null,null,Nc(n.right))}n=n.aa(null,null,null,null,n.right.remove(t,e))}return Mc(n)},h.ha=function(){return this.color},h=Sc.prototype,h.aa=function(){return this},h.Ha=function(t,e){return new Jc(t,e,null)},h.remove=function(){return this},h.count=function(){return 0},h.j=function(){return!0},h.ka=function(){return!1},h.Qb=function(){return null},h.yb=function(){return null},h.ha=function(){return!1};var Ec=new Sc,R;t:{var Tc=aa.navigator;if(Tc){var Uc=Tc.userAgent;if(Uc){R=Uc;break t}}R=""}var Vc=-1!=R.indexOf("Opera")||-1!=R.indexOf("OPR"),Wc=-1!=R.indexOf("Trident")||-1!=R.indexOf("MSIE"),Xc=-1!=R.indexOf("Edge"),Yc=!(-1==R.indexOf("Gecko")||-1!=R.toLowerCase().indexOf("webkit")&&-1==R.indexOf("Edge")||-1!=R.indexOf("Trident")||-1!=R.indexOf("MSIE")||-1!=R.indexOf("Edge")),Zc=-1!=R.toLowerCase().indexOf("webkit")&&-1==R.indexOf("Edge");!function(){if(Vc&&aa.opera){var t,e=aa.opera.version;try{t=e()}catch(n){t=e}return t}return t="",(e=$c())&&(t=e?e[1]:""),Wc&&(e=(e=aa.document)?e.documentMode:void 0,e>parseFloat(t))?String(e):t}();var ad=null,bd=null,fd=function(){var t=1;return function(){return t++}}(),eb=null,ld=!0,wd=/^-?\d{1,10}$/;xd.prototype.Tb=function(e){return this.path.j()?(e=this.children.subtree(new z(e)),e.j()?null:e.value?new sa(this.source,t,e.value):new xd(this.source,t,e)):(C(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new xd(this.source,r(this.path),this.children))},xd.prototype.toString=function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"};var ta=0,yd=1,oa=2,ra=3;zd.prototype.source,zd.prototype.type,zd.prototype.path;var pa=new Ad(!0,!1,null,!1),Bd=new Ad(!1,!0,null,!1);Ad.prototype.toString=function(){return this.Lc?"user":this.fd?"server(queryID="+this.cb+")":"server"},Cd.f;var Dd={};Cd.prototype.jc=function(t,e){return 0!==this.compare(new w("[MIN_NAME]",t),new w("[MIN_NAME]",e))},Cd.prototype.Rb=function(){return Fd},la(Gd,Cd),h=Gd.prototype,h.Nb=function(t){return!t.R(this.f).j()},h.compare=function(t,e){var n=t.node.R(this.f),r=e.node.R(this.f),n=n.nb(r);return 0===n?wa(t.name,e.name):n},h.Ob=function(t,e){var n=D(t),n=O.U(this.f,n);return new w(e,n)},h.Pb=function(){var t=O.U(this.f,Hd);return new w("[MAX_NAME]",t)},h.toString=function(){return this.f},la(Id,Cd),h=Id.prototype,h.compare=function(t,e){var n=t.node.K(),r=e.node.K(),n=n.nb(r);return 0===n?wa(t.name,e.name):n},h.Nb=function(t){return!t.K().j()},h.jc=function(t,e){return!t.K().ba(e.K())},h.Rb=function(){return Fd},h.Pb=function(){return new w("[MAX_NAME]",new Ma("[PRIORITY-POST]",Hd))},h.Ob=function(t,e){var n=D(t);return new w(e,new Ma("[PRIORITY-POST]",n))},h.toString=function(){return".priority"};var E=new Id;la(Jd,Cd),h=Jd.prototype,h.compare=function(t,e){return wa(t.name,e.name)},h.Nb=function(){throw gd("KeyIndex.isDefinedOn not expected to be called.")},h.jc=function(){return!1},h.Rb=function(){return Fd},h.Pb=function(){return new w("[MAX_NAME]",O)},h.Ob=function(t){return C(p(t),"KeyIndex indexValue must always be a string."),new w(t,O)},h.toString=function(){return".key"};var Kd=new Jd;la(Ld,Cd),h=Ld.prototype,h.compare=function(t,e){var n=t.node.nb(e.node);return 0===n?wa(t.name,e.name):n},h.Nb=function(){return!0},h.jc=function(t,e){return!t.ba(e)},h.Rb=function(){return Fd},h.Pb=function(){return Md},h.Ob=function(t,e){var n=D(t);return new w(e,n)},h.toString=function(){return".value"};var Nd=new Ld;Od.prototype.get=function(t){var e=J(this.f,t);if(!e)throw Error("No index defined for "+t);return e===Dd?null:e};var Sd=new Od({".priority":Dd},{".priority":E});h=Ma.prototype,h.S=function(){return!0},h.K=function(){return this.ga},h.da=function(t){return new Ma(this.L,t)},h.R=function(t){return".priority"===t?this.ga:O},h.ja=function(t){return t.j()?this:".priority"===B(t)?this.ga:O},h.xa=function(){return!1},h.Pc=function(){return null},h.U=function(t,e){return".priority"===t?this.da(e):e.j()&&".priority"!==t?this:O.U(t,e).da(this.ga)},h.N=function(t,e){var n=B(t);return null===n?e:e.j()&&".priority"!==n?this:(C(".priority"!==n||1===Ba(t),".priority must be the last token in a path"),this.U(n,O.N(r(t),e)))},h.j=function(){return!1},h.Sa=function(){return 0},h.O=function(t){return t&&!this.K().j()?{".value":this.wa(),".priority":this.K().O()}:this.wa()},h.hash=function(){if(null===this.f){var t="";this.ga.j()||(t+="priority:"+Ud(this.ga.O())+":");var e=typeof this.L,t=t+(e+":"),t="number"===e?t+ud(this.L):t+this.L;this.f=jd(t)}return this.f},h.wa=function(){return this.L},h.nb=function(t){if(t===O)return 1;if(t instanceof Vd)return-1;C(t.S(),"Unknown node type");var e=typeof t.L,n=typeof this.L,r=yb(Wd,e),i=yb(Wd,n);return C(r>=0,"Unknown leaf type: "+e),C(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.L<t.L?-1:this.L===t.L?0:1:i-r};var Wd=["object","boolean","number","string"];Ma.prototype.Na=function(){return this},Ma.prototype.xb=function(){return!0},Ma.prototype.ba=function(t){return t===this?!0:t.S()?this.L===t.L&&this.ga.ba(t.ga):!1},Ma.prototype.toString=function(){return G(this.O(!0))},h=Vd.prototype,h.S=function(){return!1},h.K=function(){return this.ga||O},h.da=function(t){return this.C.j()?this:new Vd(this.C,t,this.f)},h.R=function(t){return".priority"===t?this.K():(t=this.C.get(t),null===t?O:t)},h.ja=function(t){var e=B(t);return null===e?this:this.R(e).ja(r(t))},h.xa=function(t){return null!==this.C.get(t)},h.U=function(t,e){if(C(e,"We should always be passing snapshot nodes"),
".priority"===t)return this.da(e);var n,r,i=new w(t,e);return e.j()?(n=this.C.remove(t),i=Rd(this.f,i,this.C)):(n=this.C.Ha(t,e),i=Pd(this.f,i,this.C)),r=n.j()?O:this.ga,new Vd(n,r,i)},h.N=function(t,e){var n=B(t);if(null===n)return e;C(".priority"!==B(t)||1===Ba(t),".priority must be the last token in a path");var i=this.R(n).N(r(t),e);return this.U(n,i)},h.j=function(){return this.C.j()},h.Sa=function(){return this.C.count()};var Xd=/^(0|[1-9]\d*)$/;h=Vd.prototype,h.O=function(t){if(this.j())return null;var e={},n=0,r=0,i=!0;if(this.Y(E,function(o,a){e[o]=a.O(t),n++,i&&Xd.test(o)?r=Math.max(r,Number(o)):i=!1}),!t&&i&&2*n>r){var o,a=[];for(o in e)a[o]=e[o];return a}return t&&!this.K().j()&&(e[".priority"]=this.K().O()),e},h.hash=function(){if(null===this.g){var t="";this.K().j()||(t+="priority:"+Ud(this.K().O())+":"),this.Y(E,function(e,n){var r=n.hash();""!==r&&(t+=":"+e+":"+r)}),this.g=""===t?"":jd(t)}return this.g},h.Pc=function(t,e,n){return(n=Yd(this,n))?(t=Gc(n,new w(t,e)))?t.name:null:Gc(this.C,t)},h.Y=function(t,e){var n=Yd(this,t);return n?n.ka(function(t){return e(t.name,t.node)}):this.C.ka(e)},h.rb=function(t){return this.sb(t.Rb(),t)},h.sb=function(t,e){var n=Yd(this,e);if(n)return n.sb(t,function(t){return t});for(var n=this.C.sb(t.name,ua),r=Ic(n);null!=r&&0>e.compare(r,t);)Q(n),r=Ic(n);return n},h.qd=function(t){return this.tb(t.Pb(),t)},h.tb=function(t,e){var n=Yd(this,e);if(n)return n.tb(t,function(t){return t});for(var n=this.C.tb(t.name,ua),r=Ic(n);null!=r&&0<e.compare(r,t);)Q(n),r=Ic(n);return n},h.nb=function(t){return this.j()?t.j()?0:-1:t.S()||t.j()?1:t===Hd?-1:0},h.Na=function(t){if(t===Kd||lc(this.f.vb,t.toString()))return this;var e=this.f,n=this.C;C(t!==Kd,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r=[],i=!1,n=n.rb(ua),o=Q(n);o;)i=i||t.Nb(o.node),r.push(o),o=Q(n);var a;return a=i?Qd(r,Ed(t)):Dd,r=t.toString(),i=za(e.vb),i[r]=t,t=za(e.f),t[r]=a,new Vd(this.C,this.ga,new Od(t,i))},h.xb=function(t){return t===Kd||lc(this.f.vb,t.toString())},h.ba=function(t){if(t===this)return!0;if(t.S())return!1;if(this.K().ba(t.K())&&this.C.count()===t.C.count()){var e=this.rb(E);t=t.rb(E);for(var n=Q(e),r=Q(t);n&&r;){if(n.name!==r.name||!n.node.ba(r.node))return!1;n=Q(e),r=Q(t)}return null===n&&null===r}return!1},h.toString=function(){return G(this.O(!0))};var ae=Math.log(2),O=new Vd(new Dc(xa),null,Sd);la(de,Vd),h=de.prototype,h.nb=function(t){return t===this?0:1},h.ba=function(t){return t===this},h.K=function(){return this},h.R=function(){return O},h.j=function(){return!1};var Hd=new de,Fd=new w("[MIN_NAME]",O),Md=new w("[MAX_NAME]",Hd);h=ee.prototype,h.add=function(t,e){this.set[t]=null!==e?e:!0},h.contains=function(t){return x(this.set,t)},h.get=function(t){return this.contains(t)?this.set[t]:void 0},h.remove=function(t){delete this.set[t]},h.j=function(){return Wb(this.set)},h.count=function(){return gc(this.set)},Ja.prototype.find=function(t){if(null!=this.L)return this.L.ja(t);if(t.j()||null==this.C)return null;var e=B(t);return t=r(t),this.C.contains(e)?this.C.get(e).find(t):null},Ja.prototype.Db=function(t,e){if(t.j())this.L=e,this.C=null;else if(null!==this.L)this.L=this.L.N(t,e);else{null==this.C&&(this.C=new ee);var n=B(t);this.C.contains(n)||this.C.add(n,new Ja),n=this.C.get(n),t=r(t),n.Db(t,e)}},Ja.prototype.Y=function(t){null!==this.C&&fe(this.C,function(e,n){t(e,n)})},he.prototype.B=function(t,e){for(var n=this.m[t]||[],r=0;r<n.length;r++)n[r].Lb.apply(n[r].context,Array.prototype.slice.call(arguments,1))},he.prototype.bb=function(t,e,n){ie(this,t),this.m[t]=this.m[t]||[],this.m[t].push({Lb:e,context:n}),(t=this.Oc(t))&&e.apply(n,t)},he.prototype.Ab=function(t,e,n){ie(this,t),t=this.m[t]||[];for(var r=0;r<t.length;r++)if(t[r].Lb===e&&(!n||n===t[r].context)){t.splice(r,1);break}};var ke=new Dc(function(t,e){return t===e?0:e>t?-1:1});h=je.prototype,h.j=function(){return null===this.value&&this.children.j()},h.subtree=function(t){if(t.j())return this;var e=this.children.get(B(t));return null!==e?e.subtree(r(t)):me},h.set=function(t,e){if(t.j())return new je(e,this.children);var n=B(t),i=(this.children.get(n)||me).set(r(t),e),n=this.children.Ha(n,i);return new je(this.value,n)},h.remove=function(t){if(t.j())return this.children.j()?me:new je(null,this.children);var e=B(t),n=this.children.get(e);return n?(t=n.remove(r(t)),e=t.j()?this.children.remove(e):this.children.Ha(e,t),null===this.value&&e.j()?me:new je(this.value,e)):this},h.get=function(t){if(t.j())return this.value;var e=this.children.get(B(t));return e?e.get(r(t)):null};var me=new je(null);je.prototype.toString=function(){var t={};return we(this,function(e,n){t[e.toString()]=n.toString()}),G(t)};var Ae=new ze(new je(null));ze.prototype.qc=function(t){return t.j()?Ae:(t=pe(this.$,t,me),new ze(t))},ze.prototype.j=function(){return this.$.j()},ze.prototype.apply=function(e){return Ge(t,this.$,e)},ma.se,h=He.prototype,h.qc=function(e){var n=uc(this.g,function(t){return t.zc===e});C(n>=0,"removeWrite called with nonexistent writeId.");var r=this.g[n];this.g.splice(n,1);for(var i=r.visible,o=!1,a=this.g.length-1;i&&a>=0;){var s=this.g[a];s.visible&&(a>=n&&Ie(s,r.path)?i=!1:r.path.contains(s.path)&&(o=!0)),a--}if(i){if(o)this.f=Je(this.g,Ke,t),0<this.g.length?this.m=this.g[this.g.length-1].zc:this.m=-1;else if(r.Da)this.f=this.f.qc(r.path);else{var u=this;P(r.children,function(t,e){u.f=u.f.qc(r.path.I(e))})}return r.path}return null},h.ra=function(e,n,r,i){if(r||i){var o=Fe(this.f,e);return!i&&o.j()?n:i||null!=n||null!=De(o,t)?(o=Je(this.g,function(t){return(t.visible||i)&&(!r||!(0<=yb(r,t.zc)))&&(t.path.contains(e)||e.contains(t.path))},e),n=n||O,o.apply(n)):null}return o=De(this.f,e),null!=o?o:(o=Fe(this.f,e),o.j()?n:null!=n||null!=De(o,t)?(n=n||O,o.apply(n)):null)},h.Kb=function(t,e){var n=O,r=De(this.f,t);if(r)r.S()||r.Y(E,function(t,e){n=n.U(t,e)});else if(e){var i=Fe(this.f,t);e.Y(E,function(t,e){var r=Fe(i,new z(t)).apply(e);n=n.U(t,r)}),Kb(Ee(i),function(t){n=n.U(t.name,t.node)})}else i=Fe(this.f,t),Kb(Ee(i),function(t){n=n.U(t.name,t.node)});return n},h.Wb=function(t,e,n,r){return C(n||r,"Either existingEventSnap or existingServerSnap must exist"),t=t.I(e),null!=De(this.f,t)?null:(t=Fe(this.f,t),t.j()?r.ja(e):t.apply(r.ja(e)))},h.Ka=function(t,e,n){t=t.I(e);var r=De(this.f,t);return null!=r?r:Pa(n,e)?Fe(this.f,t).apply(n.o().R(e)):null},h.Gb=function(t){return De(this.f,t)},h.Dc=function(e,n,r,i,o,a){var s;if(e=Fe(this.f,e),s=De(e,t),null==s){if(null==n)return[];s=e.apply(n)}if(s=s.Na(a),s.j()||s.S())return[];for(n=[],e=Ed(a),o=o?s.tb(r,a):s.sb(r,a),a=Q(o);a&&n.length<i;)0!==e(a,r)&&n.push(a),a=Q(o);return n},h=Le.prototype,h.ra=function(t,e,n){return this.$.ra(this.ib,t,e,n)},h.Kb=function(t){return this.$.Kb(this.ib,t)},h.Wb=function(t,e,n){return this.$.Wb(this.ib,t,e,n)},h.Gb=function(t){return this.$.Gb(this.ib.I(t))},h.Dc=function(t,e,n,r,i){return this.$.Dc(this.ib,t,e,n,r,i)},h.Ka=function(t,e){return this.$.Ka(this.ib,t,e)},h.I=function(t){return new Le(this.ib.I(t),this.$)},la(Me,he),Me.prototype.Oc=function(t){return C("online"===t,"Unknown event type: "+t),[this.f]},ca(Me),h=Oe.prototype,h.wa=function(){return this.f.value},h.hc=function(){return 0<this.f.Gc},h.j=function(){return null===this.wa()&&!this.hc()},h.Y=function(t){var e=this;P(this.f.children,function(n,r){t(new Oe(r,e,n))})},h.path=function(){return new z(null===this.g?this.m:this.g.path()+"/"+this.m)},h.name=function(){return this.m},h.parent=function(){return this.g},la(Ue,he),Ue.prototype.Oc=function(t){return C("visible"===t,"Unknown event type: "+t),[this.Z]},ca(Ue);var Ve=function(){var t=0,e=[];return function(n){var r=n===t;t=n;for(var i=Array(8),o=7;o>=0;o--)i[o]="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(n%64),n=Math.floor(n/64);if(C(0===n,"Cannot push at time == 0"),n=i.join(""),r){for(o=11;o>=0&&63===e[o];o--)e[o]=0;e[o]++}else for(o=0;12>o;o++)e[o]=Math.floor(64*Math.random());for(o=0;12>o;o++)n+="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(e[o]);return C(20===n.length,"nextPushId: Length should be 20."),n}}();Ye.prototype.f=function(t,e){if(null==t.La||null==e.La)throw gd("Should only compare child_ events.");return this.u.compare(new w(t.La,t.Ea),new w(e.La,e.Ea))},bf.prototype.$c,bf.prototype.createEvent,bf.prototype.Ra,bf.prototype.Hc,bf.prototype.matches,bf.prototype.Qc,h=cf.prototype,h.$c=function(t){return"value"===t},h.createEvent=function(t,e){var n=e.F.W();return new Xa("value",this,new U(t.Ea,e.Cb(),n))},h.Ra=function(t){var e=this.Wa;if("cancel"===t.gc()){C(this.Va,"Raising a cancel event on a listener with no cancel callback");var n=this.Va;return function(){n.call(e,t.error)}}var r=this.lb;return function(){r.call(e,t.sc)}},h.Hc=function(t,e){return this.Va?new Ya(this,t,e):null},h.matches=function(t){return t instanceof cf?t.lb&&this.lb?t.lb===this.lb&&t.Wa===this.Wa:!0:!1},h.Qc=function(){return null!==this.lb},h=df.prototype,h.$c=function(t){return t="children_added"===t?"child_added":t,kc(this.ia,"children_removed"===t?"child_removed":t)},h.Hc=function(t,e){return this.Va?new Ya(this,t,e):null},h.createEvent=function(t,e){C(null!=t.La,"Child events should have a childName.");var n=e.Cb().I(t.La);return new Xa(t.type,this,new U(t.Ea,n,e.F.W()),t.pc)},h.Ra=function(t){var e=this.Wa;if("cancel"===t.gc()){C(this.Va,"Raising a cancel event on a listener with no cancel callback");var n=this.Va;return function(){n.call(e,t.error)}}var r=this.ia[t.ec];return function(){r.call(e,t.sc,t.pc)}},h.matches=function(t){if(t instanceof df){if(!this.ia||!t.ia)return!0;if(this.Wa===t.Wa){var e=gc(t.ia);if(e===gc(this.ia)){if(1===e){var e=hc(t.ia),n=hc(this.ia);return!(n!==e||t.ia[e]&&this.ia[n]&&t.ia[e]!==this.ia[n])}return fc(this.ia,function(e,n){return t.ia[n]===e})}}}return!1},h.Qc=function(){return null!==this.ia},ef.prototype.G=function(){return this.f},jf.prototype.Oa=function(e,n,r,i){var o,a=new We;if(n.type===ta)n.source.Lc?r=kf(this,e,n.path,n.Da,r,i,a):(C(n.source.od,"Unknown source."),o=n.source.fd,r=lf(this,e,n.path,n.Da,r,i,o,a));else if(n.type===yd)n.source.Lc?r=mf(this,e,n.path,n.children,r,i,a):(C(n.source.od,"Unknown source."),o=n.source.fd,r=nf(this,e,n.path,n.children,r,i,o,a));else if(n.type===oa)if(n.ad)if(o=n.path,null!=r.Gb(o))r=e;else{if(n=new Ua(r,e,i),i=e.M.o(),o.j()||".priority"===B(o))Oa(e.G())?n=r.ra(Va(e)):(n=e.G().o(),C(n instanceof Vd,"serverChildren would be complete if leaf node"),n=r.Kb(n)),n=this.P.qa(i,n,a);else{o=B(o);var s=r.Ka(o,e.G());null==s&&Pa(e.G(),o)&&(s=i.R(o)),n=null!=s?this.P.N(i,o,s,n,a):e.M.o().xa(o)?this.P.N(i,o,O,n,a):i,n.j()&&Oa(e.G())&&(i=r.ra(Va(e)),i.S()&&(n=this.P.qa(n,i,a)))}i=Oa(e.G())||null!=r.Gb(t),r=ff(e,n,i,this.P.Ba())}else r=of(this,e,n.path,r,i,a);else{if(n.type!==ra)throw gd("Unknown operation type: "+n.type);i=n.path,n=e.G(),o=n.o(),s=n.ea||i.j(),r=pf(this,new ef(e.M,new Na(o,s,n.pb)),i,r,Ta,a)}return a=ic(a.f),i=r,n=i.M,n.ea&&(o=n.o().S()||n.o().j(),s=gf(e),(0<a.length||!e.M.ea||o&&!n.o().ba(s)||!n.o().K().ba(s.K()))&&a.push(Qa(gf(i)))),new hf(r,a)},h=rf.prototype,h.G=function(){return this.Fa.G().o()},h.Qa=function(t){var e=Va(this.Fa);return e&&(tf(this.za.F)||!t.j()&&!e.R(B(t)).j())?e.ja(t):null},h.j=function(){return 0===this.f.length},h.kb=function(t){this.f.push(t)},h.Ta=function(t,e){var n=[];if(e){C(null==t,"A cancel should cancel all event registrations.");var r=this.za.path;Kb(this.f,function(t){(t=t.Hc(e,r))&&n.push(t)})}if(t){for(var i=[],o=0;o<this.f.length;++o){var a=this.f[o];if(a.matches(t)){if(t.Qc()){i=i.concat(this.f.slice(o+1));break}}else i.push(a)}this.f=i}else this.f=[];return n},h.Oa=function(t,e,n){t.type===yd&&null!==t.source.cb&&(C(Va(this.Fa),"We should always have a full cache before handling merges"),C(gf(this.Fa),"Missing event cache, even though we have a server cache"));var r=this.Fa;return t=this.g.Oa(r,t,e,n),e=this.g,n=t.yc,C(n.M.o().xb(e.P.W()),"Event snap not indexed"),C(n.G().o().xb(e.P.W()),"Server snap not indexed"),C(Oa(t.yc.G())||!Oa(r.G()),"Once a server snap is complete, it should never go back"),this.Fa=t.yc,xf(this,t.Rd,t.yc.M.o(),null)},h=zf.prototype,h.j=function(){return Wb(this.f)},h.Oa=function(t,e,n){var r=t.source.cb;if(null!==r)return r=J(this.f,r),C(null!=r,"SyncTree gave us an op for an invalid query."),r.Oa(t,e,n);var i=[];return P(this.f,function(r){i=i.concat(r.Oa(t,e,n))}),i},h.kb=function(t,e,n,r,i){var o=t.ta(),a=J(this.f,o);if(!a){var a=n.ra(i?r:null),s=!1;a?s=!0:(a=r instanceof Vd?n.Kb(r):O,s=!1),a=new rf(t,new ef(new Na(a,s,!1),new Na(r,i,!1))),this.f[o]=a}return a.kb(e),yf(a,e)},h.Ta=function(t,e,n){var r=t.ta(),i=[],o=[],a=null!=Af(this);if("default"===r){var s=this;P(this.f,function(t,r){o=o.concat(t.Ta(e,n)),t.j()&&(delete s.f[r],tf(t.za.F)||i.push(t.za))})}else{var u=J(this.f,r);u&&(o=o.concat(u.Ta(e,n)),u.j()&&(delete this.f[r],tf(u.za.F)||i.push(u.za)))}return a&&null==Af(this)&&i.push(new V(t.w,t.path)),{he:i,Td:o}},h.Qa=function(t){var e=null;return P(this.f,function(n){e=e||n.Qa(t)}),e},ma.pe,Df.prototype.kb=function(e,n){var r=e.path,i=null,o=!1;ue(this.f,r,function(t,e){var n=A(t,r);return i=e.Qa(n),o=o||null!=Af(e),!i});var a=this.f.get(r);a?(o=o||null!=Af(a),i=i||a.Qa(t)):(a=new zf,this.f=this.f.set(r,a));var s;null!=i?s=!0:(s=!1,i=O,ye(this.f.subtree(r),function(e,n){var r=n.Qa(t);r&&(i=i.U(e,r))}));var u=null!=Cf(a,e);if(!u&&!tf(e.F)){var h=Of(e);C(!kc(this.m,h),"View does not exist, but we have a tag");var c=Pf++;this.m[h]=c,this.H["_"+c]=h}return s=a.kb(e,n,new Le(r,this.g),i,s),u||o||(a=Cf(a,e),s=s.concat(Qf(this,e,a))),s},Df.prototype.Ta=function(t,e,n){var r=t.path,i=this.f.get(r),o=[];if(i&&("default"===t.ta()||null!=Cf(i,t))){o=i.Ta(t,e,n),i.j()&&(this.f=this.f.remove(r)),i=o.he,o=o.Td,e=-1!==uc(i,function(t){return tf(t.F)});var a=se(this.f,r,function(t,e){return null!=Af(e)});if(e&&!a&&(r=this.f.subtree(r),!r.j()))for(var r=Rf(r),s=0;s<r.length;++s){var u=r[s],h=u.za,u=Sf(this,u);this.B.cd(h,Tf(this,h),u.ic,u.T)}if(!a&&0<i.length&&!n)if(e)this.B.uc(t,null);else{var c=this;Kb(i,function(t){t.ta();var e=c.m[Of(t)];c.B.uc(t,e)})}Uf(this,i)}return o},Df.prototype.ra=function(t,e){var n=this.g,r=se(this.f,t,function(e,n){var r=A(e,t);return(r=n.Qa(r))?r:void 0});return n.ra(t,r,e,!0)};var Pf=1;h=sf.prototype,h.N=function(t,e,n,r,i){return C(t.xb(this.u),"A node must be indexed if only a child is updated"),r=t.R(e),r.ba(n)?t:(null!=i&&(n.j()?t.xa(e)?Xe(i,new F("child_removed",r,e)):C(t.S(),"A child remove without an old child only makes sense on a leaf node"):r.j()?Xe(i,new F("child_added",n,e)):Xe(i,new F("child_changed",n,e,r))),t.S()&&n.j()?t:t.U(e,n).Na(this.u))},h.qa=function(t,e,n){return null!=n&&(t.S()||t.Y(E,function(t,r){e.xa(t)||Xe(n,new F("child_removed",r,t))}),e.S()||e.Y(E,function(e,r){if(t.xa(e)){var i=t.R(e);i.ba(r)||Xe(n,new F("child_changed",r,e,i))}else Xe(n,new F("child_added",r,e))})),e.Na(this.u)},h.da=function(t,e){return t.j()?O:t.da(e)},h.Ba=function(){return!1},h.qb=function(){return this},h.W=function(){return this.u},h=vf.prototype,h.matches=function(t){return 0>=this.u.compare(this.g,t)&&0>=this.u.compare(t,this.f)},h.N=function(t,e,n,r,i){return this.matches(new w(e,n))||(n=O),this.m.N(t,e,n,r,i)},h.qa=function(t,e,n){e.S()&&(e=O);var r=e.Na(this.u),r=r.da(O),i=this;return e.Y(E,function(t,e){i.matches(new w(t,e))||(r=r.U(t,O))}),this.m.qa(t,r,n)},h.da=function(t){return t},h.Ba=function(){return!0},h.qb=function(){return this.m},h.W=function(){return this.u},h=uf.prototype,h.N=function(t,e,n,r,i){return this.f.matches(new w(e,n))||(n=O),t.R(e).ba(n)?t:t.Sa()<this.ma?this.f.qb().N(t,e,n,r,i):bg(this,t,e,n,r,i)},h.qa=function(t,e,n){var r;if(e.S()||e.j())r=O.Na(this.u);else if(2*this.ma<e.Sa()&&e.xb(this.u)){r=O.Na(this.u),e=this.g?e.tb(this.f.f,this.u):e.sb(this.f.g,this.u);for(var i=0;0<e.Ia.length&&i<this.ma;){var o,a=Q(e);if(!(o=this.g?0>=this.u.compare(this.f.g,a):0>=this.u.compare(a,this.f.f)))break;r=r.U(a.name,a.node),i++}}else{r=e.Na(this.u),r=r.da(O);var s,u,h;if(this.g){e=r.qd(this.u),s=this.f.f,u=this.f.g;var c=Ed(this.u);h=function(t,e){return c(e,t)}}else e=r.rb(this.u),s=this.f.g,u=this.f.f,h=Ed(this.u);for(var i=0,f=!1;0<e.Ia.length;)a=Q(e),!f&&0>=h(s,a)&&(f=!0),(o=f&&i<this.ma&&0>=h(a,u))?i++:r=r.U(a.name,O)}return this.f.qb().qa(t,r,n)},h.da=function(t){return t},h.Ba=function(){return!0},h.qb=function(){return this.f.qb()},h.W=function(){return this.u};var dg=new cg;h=cg.prototype,h.W=function(){return this.u},h.Sc=function(t){var e=eg(this);return e.la=!0,e.ma=t,e.jb="",e},h.Tc=function(t){var e=eg(this);return e.la=!0,e.ma=t,e.jb="l",e},h.Uc=function(t){var e=eg(this);return e.la=!0,e.ma=t,e.jb="r",e},h.tc=function(t,e){var r=eg(this);return r.na=!0,n(t)||(t=null),r.wb=t,null!=e?(r.gb=!0,r.$a=e):(r.gb=!1,r.$a=""),r},h.dc=function(t,e){var r=eg(this);return r.oa=!0,n(t)||(t=null),r.ub=t,n(e)?(r.ob=!0,r.Za=e):(r.ye=!1,r.Za=""),r},h.toString=function(){return G(gg(this))},ig.prototype.open=function(t,e,n){function r(){n&&(n(I("USER_CANCELLED")),n=null)}var i,o=this,a=Tb(ub);e.requestId=this.f,e.redirectTo=a.scheme+"://"+a.host+"/blank/page.html",t+=/\?/.test(t)?"":"?",t+=Jb(e),(i=window.open(t,"_blank","location=no"))&&ga(i.addEventListener)?(i.addEventListener("loadstart",function(t){var e;if(e=t&&t.url)t:{try{var s=document.createElement("a");s.href=t.url,e=s.host===a.host&&"/blank/page.html"===s.pathname;break t}catch(u){}e=!1}e&&(t=Rb(t.url),i.removeEventListener("exit",r),i.close(),t=new vb(null,null,{requestId:o.f,requestKey:t}),o.g.requestWithCredential("/auth/session",t,n),n=null)}),i.addEventListener("exit",r)):n(I("TRANSPORT_UNAVAILABLE"))},ig.isAvailable=function(){return!NODE_CLIENT&&ib()},ig.prototype.mb=function(){return"redirect"},jg.prototype.open=function(t,e,n){function r(t){if(o&&(document.body.removeChild(o),o=void 0),c&&(c=clearInterval(c)),Pb(window,"message",i),Pb(window,"unload",r),h&&!t)try{h.close()}catch(e){a.postMessage("die",u)}h=a=void 0}function i(t){if(t.origin===u)try{var e=ob(t.data);"ready"===e.a?a.postMessage(f,u):"error"===e.a?(r(!1),n&&(n(e.d),n=null)):"response"===e.a&&(r(e.forceKeepWindowOpen),n&&(n(null,e.d),n=null))}catch(i){}}var o,a,s=kb();if(!this.f.relay_url)return n(Error("invalid arguments: origin of url and relay_url must match"));var u=Qb(t);if(u!==Qb(this.f.relay_url))n&&setTimeout(function(){n(Error("invalid arguments: origin of url and relay_url must match"))},0);else{s&&(o=document.createElement("iframe"),o.setAttribute("src",this.f.relay_url),o.style.display="none",o.setAttribute("name","__winchan_relay_frame"),document.body.appendChild(o),a=o.contentWindow),t+=(/\?/.test(t)?"":"?")+Jb(e);var h=window.open(t,this.f.window_name,this.f.window_features);a||(a=h);var c=setInterval(function(){h&&h.closed&&(r(!1),n&&(n(I("USER_CANCELLED")),n=null))},500),f=G({a:"request",d:e});Ob(window,"unload",r),Ob(window,"message",i)}},jg.isAvailable=function(){return!NODE_CLIENT&&"postMessage"in window&&!jb()&&!(ib()||"undefined"!=typeof navigator&&(navigator.userAgent.match(/Windows Phone/)||window.Windows&&/^ms-appx:/.test(location.href))||"undefined"!=typeof navigator&&"undefined"!=typeof window&&(navigator.userAgent.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i)||navigator.userAgent.match(/CriOS/)||navigator.userAgent.match(/Twitter for iPhone/)||navigator.userAgent.match(/FBAN\/FBIOS/)||window.navigator.standalone))&&!("undefined"!=typeof navigator&&navigator.userAgent.match(/PhantomJS/))},jg.prototype.mb=function(){return"popup"},h=mg.prototype,h.sd=function(t,e,n,r){var i=t.path.toString();this.A("Listen called for "+i+" "+t.ta());var o=ng(t,n),a={};this.fa[o]=a,t=hg(t.F);var s=this;og(this,i+".json",t,function(t,e){var u=e;404===t&&(t=u=null),null===t&&s.f(i,u,!1,n),J(s.fa,o)===a&&r(t?401==t?"permission_denied":"rest_error:"+t:"ok",null)})},h.zd=function(t,e){var n=ng(t,e);delete this.fa[n]},h.V=function(t,e){this.m=t;var n=kg(t),r=n.data,n=n.Yb&&n.Yb.exp;e&&e("ok",{auth:r,expires:n})},h.wc=function(t){this.m=null,t("ok",null)},h.Wc=function(){},h.ud=function(){},h.kc=function(){},h.Hb=function(){},h.td=function(){},h.Yc=function(){},pg.prototype.set=function(t,e){if(!e){if(!this.f.length)throw Error("wd.login.SessionManager : No storage options available!");e=this.f[0]}e.set(this.g,t)},pg.prototype.get=function(){var t=qc(this.f,q(this.m,this)),t=pc(t,function(t){return null!==t});return wc(t,function(t,e){return lg(e.token)-lg(t.token)}),0<t.length?t.shift():null},pg.prototype.m=function(t){try{var e=t.get(this.g);if(e&&e.token)return e}catch(n){}return null},la(rg,he),h=rg.prototype,h.Mc=function(){return this.f||null},h.Ic=function(t,e){Ag(this);var n=xb(t);n.Ma._method="POST",this.Eb("/users",n,function(t,n){t?T(e,t):T(e,t,n)})},h.Xc=function(t,e){var n=this;Ag(this);var r="/users/"+encodeURIComponent(t.email),i=xb(t);i.Ma._method="DELETE",this.Eb(r,i,function(t,r){!t&&r&&r.uid&&n.f&&n.f.uid&&n.f.uid===r.uid&&yg(n),T(e,t)})},h.Fc=function(t,e){Ag(this);var n="/users/"+encodeURIComponent(t.email)+"/password",r=xb(t);r.Ma._method="PUT",r.Ma.password=t.newPassword,this.Eb(n,r,function(t){T(e,t)})},h.Ec=function(t,e){Ag(this);var n="/users/"+encodeURIComponent(t.oldEmail)+"/email",r=xb(t);r.Ma._method="PUT",r.Ma.email=t.newEmail,r.Ma.password=t.password,this.Eb(n,r,function(t){T(e,t)})},h.Zc=function(t,e){Ag(this);var n="/users/"+encodeURIComponent(t.email)+"/password",r=xb(t);r.Ma._method="POST",this.Eb(n,r,function(t){T(e,t)})},h.Eb=function(t,e,n){Dg(this,NODE_CLIENT?[Yb]:[dc,Vb],t,e,n)},h.Oc=function(t){return C("auth_status"===t,'initial event must be of type "auth_status"'),this.H?null:[this.f]};var Eg=/[\[\].#$\/\u0000-\u001F\u007F]/,Fg=/[\[\].#$\u0000-\u001F\u007F]/;U.prototype.O=function(){return L("Wilddog.DataSnapshot.val",0,0,arguments.length),this.f.O()},U.prototype.val=U.prototype.O,U.prototype.md=function(){return L("Wilddog.DataSnapshot.exportVal",0,0,arguments.length),this.f.O(!0)},U.prototype.exportVal=U.prototype.md,U.prototype.m=function(){return L("Wilddog.DataSnapshot.exists",0,0,arguments.length),!this.f.j()},U.prototype.exists=U.prototype.m,U.prototype.I=function(t){L("Wilddog.DataSnapshot.child",0,1,arguments.length),fa(t)&&(t=String(t)),Og("Wilddog.DataSnapshot.child",t);var e=new z(t),n=this.g.I(e);return new U(this.f.ja(e),n,E)},U.prototype.child=U.prototype.I,U.prototype.xa=function(t){L("Wilddog.DataSnapshot.hasChild",1,1,arguments.length),Og("Wilddog.DataSnapshot.hasChild",t);var e=new z(t);return!this.f.ja(e).j()},U.prototype.hasChild=U.prototype.xa,U.prototype.K=function(){return L("Wilddog.DataSnapshot.getPriority",0,0,arguments.length),this.f.K().O()},U.prototype.getPriority=U.prototype.K,U.prototype.B=function(t){if(L("Wilddog.DataSnapshot.forEach",1,1,arguments.length),N("Wilddog.DataSnapshot.forEach",1,t,!1),this.f.S())return!1;var e=this;return!!this.f.Y(this.u,function(n,r){return t(new U(r,e.g.I(n),E))})},U.prototype.forEach=U.prototype.B,U.prototype.hc=function(){return L("Wilddog.DataSnapshot.hasChildren",0,0,arguments.length),this.f.S()?!1:!this.f.j()},U.prototype.hasChildren=U.prototype.hc,U.prototype.name=function(){return S("Wilddog.DataSnapshot.name() being deprecated. Please use Wilddog.DataSnapshot.key() instead."),L("Wilddog.DataSnapshot.name",0,0,arguments.length),this.key()},U.prototype.name=U.prototype.name,U.prototype.key=function(){return L("Wilddog.DataSnapshot.key",0,0,arguments.length),this.g.key()},U.prototype.key=U.prototype.key,U.prototype.Sa=function(){return L("Wilddog.DataSnapshot.numChildren",0,0,arguments.length),this.f.Sa()},U.prototype.numChildren=U.prototype.Sa,U.prototype.Cb=function(){return L("Wilddog.DataSnapshot.ref",0,0,arguments.length),this.g},U.prototype.ref=U.prototype.Cb,W.prototype.Cb=function(){return L("Query.ref",0,0,arguments.length),new V(this.w,this.path)},W.prototype.ref=W.prototype.Cb,W.prototype.bb=function(t,e,n,r){L("Query.on",2,4,arguments.length),Mg("Query.on",t,!1),N("Query.on",2,e,!1);var i=Xg("Query.on",n,r);if("value"===t)Yg(this.w,this,new cf(e,i.cancel||null,i.context||null));else{var o={};o[t]=e,Yg(this.w,this,new df(o,i.cancel,i.context))}return e},W.prototype.on=W.prototype.bb,W.prototype.Ab=function(t,e,n){L("Query.off",0,3,arguments.length),Mg("Query.off",t,!0),N("Query.off",2,e,!0),zb("Query.off",3,n);var r=null,i=null;"value"===t?r=new cf(e||null,null,n||null):t&&(e&&(i={},i[t]=e),r=new df(i,null,n||null)),i=this.w,r=".info"===B(this.path)?i.H.Ta(this,r):i.f.Ta(this,r),bb(i.g,this.path,r)},W.prototype.off=W.prototype.Ab,W.prototype.m=function(t,e){function n(a){o&&(o=!1,i.Ab(t,n),e.call(r.context,a))}L("Query.once",2,4,arguments.length),Mg("Query.once",t,!1),N("Query.once",2,e,!1);var r=Xg("Query.once",arguments[2],arguments[3]),i=this,o=!0;this.bb(t,n,function(e){i.Ab(t,n),r.cancel&&r.cancel.call(r.context,e)})},W.prototype.once=W.prototype.m,W.prototype.Sc=function(t){if(S("Query.limit() being deprecated. Please use Query.limitToFirst() or Query.limitToLast() instead."),L("Query.limit",1,1,arguments.length),!fa(t)||Math.floor(t)!==t||0>=t)throw Error("Query.limit: First argument must be a positive integer.");if(this.F.la)throw Error("Query.limit: Limit was already set (by another call to limit, limitToFirst, orlimitToLast.");var e=this.F.Sc(t);return Vg(e),new W(this.w,this.path,e,this.f)},W.prototype.limit=W.prototype.Sc,W.prototype.Tc=function(t){if(L("Query.limitToFirst",1,1,arguments.length),!fa(t)||Math.floor(t)!==t||0>=t)throw Error("Query.limitToFirst: First argument must be a positive integer.");if(this.F.la)throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new W(this.w,this.path,this.F.Tc(t),this.f)},W.prototype.limitToFirst=W.prototype.Tc,W.prototype.Uc=function(t){if(L("Query.limitToLast",1,1,arguments.length),!fa(t)||Math.floor(t)!==t||0>=t)throw Error("Query.limitToLast: First argument must be a positive integer.");if(this.F.la)throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");return new W(this.w,this.path,this.F.Uc(t),this.f)},W.prototype.limitToLast=W.prototype.Uc,W.prototype.B=function(t){if(L("Query.orderByChild",1,1,arguments.length),"$key"===t)throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');if("$priority"===t)throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');if("$value"===t)throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');Ng("Query.orderByChild",1,t,!1),Wg(this,"Query.orderByChild");var e=fg(this.F,new Gd(t));return Ug(e),new W(this.w,this.path,e,!0)},W.prototype.orderByChild=W.prototype.B,W.prototype.H=function(){L("Query.orderByKey",0,0,arguments.length),Wg(this,"Query.orderByKey");var t=fg(this.F,Kd);return Ug(t),new W(this.w,this.path,t,!0)},W.prototype.orderByKey=W.prototype.H,W.prototype.X=function(){L("Query.orderByPriority",0,0,arguments.length),Wg(this,"Query.orderByPriority");var t=fg(this.F,E);return Ug(t),new W(this.w,this.path,t,!0)},W.prototype.orderByPriority=W.prototype.X,W.prototype.Z=function(){L("Query.orderByValue",0,0,arguments.length),Wg(this,"Query.orderByValue");var t=fg(this.F,Nd);return Ug(t),new W(this.w,this.path,t,!0)},W.prototype.orderByValue=W.prototype.Z,W.prototype.tc=function(t,e){L("Query.startAt",0,2,arguments.length),Ig("Query.startAt",t,this.path,!0),Ng("Query.startAt",2,e,!0);var r=this.F.tc(t,e);if(Vg(r),Ug(r),this.F.na)throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");return n(t)||(e=t=null),new W(this.w,this.path,r,this.f)},W.prototype.startAt=W.prototype.tc,W.prototype.dc=function(t,e){L("Query.endAt",0,2,arguments.length),Ig("Query.endAt",t,this.path,!0),Ng("Query.endAt",2,e,!0);var n=this.F.dc(t,e);if(Vg(n),Ug(n),this.F.oa)throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");return new W(this.w,this.path,n,this.f)},W.prototype.endAt=W.prototype.dc,W.prototype.g=function(t,e){if(L("Query.equalTo",1,2,arguments.length),Ig("Query.equalTo",t,this.path,!1),Ng("Query.equalTo",2,e,!0),this.F.na)throw Error("Query.equalTo: Starting point was already set (by another call to endAt or equalTo).");if(this.F.oa)throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");return this.tc(t,e).dc(t,e)},W.prototype.equalTo=W.prototype.g,W.prototype.toString=function(){L("Query.toString",0,0,arguments.length);for(var t=this.path,e="",n=t.ca;n<t.D.length;n++)""!==t.D[n]&&(e+="/"+encodeURIComponent(String(t.D[n])));return this.w.toString()+(e||"/")},W.prototype.toString=W.prototype.toString,W.prototype.ta=function(){var t=sd(gg(this.F));return"{}"===t?"default":t};var Zg={},$g=null;$g=__webpack_require__(237),ah.prototype.ya=function(t){t="2"+JSON.stringify(["wd",{t:"d",d:t}]),this.Ga.send(t)},ah.prototype.close=function(){2!==this.hb&&(this.A("Closing realtime connection."),this.hb=2,this.Ga.close(),this.sa&&(this.sa(),this.sa=null))};var hh=0,jh=0;h=gh.prototype,h.ya=function(t,e,n){var r=++this.Gd;t={r:r,a:t,b:e},this.A(G(t)),C(this.f,"sendRequest call when we're not connected not allowed."),this.B.ya(t),n&&(this.Vb[r]=n)},h.sd=function(t,e,n,r){var i=t.ta(),o=t.path.toString();this.A("Listen called for "+o+" "+i),this.fa[o]=this.fa[o]||{},C(!this.fa[o][i],"listen() called twice for same path/queryId."),t={T:r,ic:e,fe:t,tag:n},this.fa[o][i]=t,this.f&&kh(this,t)},h.V=function(t,e,n){this.m={Sd:t,nd:!1,Lb:e,Xb:n},this.A("Authenticating using credential: "+t),mh(this),(e=40==t.length)||(t=kg(t).Yb,e="object"==typeof t&&!0===J(t,"admin")),e&&(this.A("Admin auth credential detected.  Reducing max reconnect time."),this.Ub=3e4)},h.wc=function(t){delete this.m,this.f&&this.ya("unauth",{},function(e){t(e.s,e.d)})},h.zd=function(t,e){var n=t.path.toString(),r=t.ta();if(this.A("Unlisten called for "+n+" "+r),lh(this,n,r)&&this.f){var i=gg(t.F);this.A("Unlisten on "+n+" for "+r),n={p:n},e&&(n.q=i,n.t=e),this.ya("n",n)}},h.Wc=function(t,e,n){this.f?nh(this,"o",t,e,n):this.Aa.push({Bb:t,action:"o",data:e,T:n})},h.ud=function(t,e,n){this.f?nh(this,"om",t,e,n):this.Aa.push({Bb:t,action:"om",data:e,T:n})},h.kc=function(t,e){this.f?nh(this,"oc",t,null,e):this.Aa.push({Bb:t,action:"oc",data:null,T:e})},h.Hb=function(t,e,n,r){oh(this,"p",t,e,n,r)},h.td=function(t,e,n,r){oh(this,"m",t,e,n,r)},h.Yc=function(t){if(this.f){t={c:t},this.A("reportStats",t);var e=this;this.ya("s",t,function(t){"ok"!==t.s&&e.A("reportStats","Error sending stats: "+t.d)})}},h.be=function(t){if("r"in t){this.A("from server: "+G(t));var e=t.r,n=this.Vb[e];n&&(delete this.Vb[e],n(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&(e=t.a,n=t.b,this.A("handleServerMessage",e,n),"d"===e?this.jd(n.p,n.d,!1,n.t):"m"===e?this.jd(n.p,n.d,!0,n.t):"c"===e?qh(this,n.p,n.q):"ac"===e?(t=n.s,e=n.d,n=this.m,delete this.m,n&&n.Xb&&n.Xb(t,e)):"sd"===e?this.bd?this.bd(n):"msg"in n&&"undefined"!=typeof console&&console.log("WILDDOG: "+n.msg.replace("\n","\nWILDDOG: ")):od("Unrecognized action received from server: "+G(e)+"\nAre you using the latest client?"))}},h.Sb=function(t){this.A("connection ready"),this.f=!0,this.ua=(new Date).getTime(),this.Id({serverTimeOffset:t-(new Date).getTime()}),this.gd&&(t={},t["sdk.js."+CLIENT_VERSION.replace(/\./g,"-")]=1,ib()&&(t["framework.cordova"]=1),this.Yc(t)),rh(this),this.gd=!1,this.hd(!0)},h.ee=function(t){t&&!this.Z&&this.H===this.Ub&&(this.A("Window became visible.  Reducing delay."),this.H=1e3,this.B||ih(this,0)),this.Z=t},h.de=function(t){t?(this.A("Browser went online."),this.H=1e3,this.B||ih(this,0)):(this.A("Browser went offline.  Killing connection."),this.B&&this.B.close())},h.vd=function(){this.A("data client disconnected"),this.f=!1,this.B=null;for(var t=0;t<this.g.length;t++){var e=this.g[t];e&&"h"in e.request&&e.ge&&(e.T&&e.T("disconnect"),delete this.g[t],this.Ua--)}0===this.Ua&&(this.g=[]),this.Vb={},
sh(this)&&(this.Z?this.ua&&(3e4<(new Date).getTime()-this.ua&&(this.H=1e3),this.ua=null):(this.A("Window isn't visible.  Delaying reconnect."),this.H=this.Ub,this.Bc=(new Date).getTime()),t=Math.max(0,this.H-((new Date).getTime()-this.Bc)),t*=Math.random(),this.A("Trying to reconnect in "+t+"ms"),ih(this,t),this.H=Math.min(this.Ub,1.3*this.H)),this.hd(!1)},h.ab=function(){this.Ac=!0,this.B?this.B.close():(this.X&&(clearTimeout(this.X),this.X=null),this.f&&this.vd())},h.Fb=function(){this.Ac=!1,this.H=1e3,this.B||ih(this,0)},h=th.prototype,h.toString=function(){return(this.J.eb?"https://":"http://")+this.J.host},h.name=function(){return this.J.zb},h.Bd=function(t,e,n,r){this.cc++;var i=new z(t);e=this.Rc?this.Rc(t,e):e,t=[],r?n?(e=ec(e,function(t){return D(t)}),t=Nf(this.f,i,e,r)):(e=D(e),t=Jf(this.f,i,e,r)):n?(r=ec(e,function(t){return D(t)}),t=If(this.f,i,r)):(r=D(e),t=Ff(this.f,new sa(Bd,i,r))),r=i,0<t.length&&(r=xh(this,i)),db(this.g,r,t)},h.Ad=function(t){uh(this,"connected",t),!1===t&&yh(this)},h.ne=function(t){var e=this;td(t,function(t,n){uh(e,n,t)})},h.me=function(t){uh(this,"authenticated",t)},h.fb=function(t,e,n,r){this.A("set",{path:t.toString(),value:e,we:n});var i=wh(this);e=D(e,n);var i=La(e,i),o=this.X++,i=Ef(this.f,t,i,o,!0);$a(this.g,i);var a=this;this.m.Hb(t.toString(),e.O(!0),function(e,n){var i="ok"===e;i||S("set at "+t+" failed: "+e),i=Hf(a.f,o,!i),db(a.g,t,i),zh(r,e,n)}),i=Ah(this,t),xh(this,i),db(this.g,i,[])},h.update=function(t,e,n){this.A("update",{path:t.toString(),value:e});var r=!0,i=wh(this),o={};if(P(e,function(t,e){r=!1;var n=D(t);o[e]=La(n,i)}),r)fb("update() called with empty data.  Don't do anything."),zh(n,"ok");else{var a=this.X++,s=Gf(this.f,t,o,a);$a(this.g,s);var u=this;this.m.td(t.toString(),e,function(e,r){var i="ok"===e;i||S("update at "+t+" failed: "+e);var i=Hf(u.f,a,!i),o=t;0<i.length&&(o=xh(u,t)),db(u.g,o,i),zh(n,e,r)}),e=Ah(this,t),xh(this,e),db(this.g,t,[])}},h.kc=function(t,e){var n=this;this.m.kc(t.toString(),function(r,i){"ok"===r&&ge(n.sa,t),zh(e,r,i)})},h.ab=function(){this.Ja&&this.Ja.ab()},h.Fb=function(){this.Ja&&this.Ja.Fb()},h.dd=function(t){if("undefined"!=typeof console){t?(this.Z||(this.Z=new ya(this.ua)),t=this.Z.get()):t=this.ua.get();var e,n=rc(jc(t),function(t,e){return Math.max(e.length,t)},0);for(e in t){for(var r=t[e],i=e.length;n+2>i;i++)e+=" ";console.log(e+r)}}},h.ed=function(t){var e,r=this.ua;n(e)||(e=1),x(r.f,t)||(r.f[t]=0),r.f[t]+=e,this.Ua.yd[t]=!0},h.A=function(t){var e="";this.Ja&&(e=this.Ja.id+":"),fb(e,arguments)},ma.qe,ca(Nh),Nh.prototype.ab=function(){for(var t in this.f)this.f[t].ab()},Nh.prototype.interrupt=Nh.prototype.ab,Nh.prototype.Fb=function(){for(var t in this.f)this.f[t].Fb()},Nh.prototype.resume=Nh.prototype.Fb,Nh.prototype.Kc=function(){this.g=!0};var X={Vd:function(){Zg.re.Ud(),Zg.Dd.ue()}};X.forceLongPolling=X.Vd,X.Wd=function(){Zg.Dd.Ud()},X.forceWebSockets=X.Wd,X.ke=function(t,e){t.w.Ja.bd=e},X.setSecurityDebugCallback=X.ke,X.dd=function(t,e){t.w.dd(e)},X.stats=X.dd,X.ed=function(t,e){t.w.ed(e)},X.statsIncrementCounter=X.ed,X.cc=function(t){return t.w.cc},X.dataUpdateCount=X.cc,X.Yd=function(t,e){t.w.Rc=e},X.interceptServerData=X.Yd,X.ce=function(t){new $b(t)},X.onPopupOpen=X.ce,X.ie=function(t){ub=t},X.setAuthenticationServer=X.ie,Y.prototype.cancel=function(t){L("Wilddog.onDisconnect().cancel",0,1,arguments.length),N("Wilddog.onDisconnect().cancel",1,t,!0),this.f.kc(this.pa,t||null)},Y.prototype.cancel=Y.prototype.cancel,Y.prototype.remove=function(t){L("Wilddog.onDisconnect().remove",0,1,arguments.length),Pg("Wilddog.onDisconnect().remove",this.pa),N("Wilddog.onDisconnect().remove",1,t,!0),Bh(this.f,this.pa,null,t)},Y.prototype.remove=Y.prototype.remove,Y.prototype.set=function(t,e){L("Wilddog.onDisconnect().set",1,2,arguments.length),Pg("Wilddog.onDisconnect().set",this.pa),Ig("Wilddog.onDisconnect().set",t,this.pa,!1),N("Wilddog.onDisconnect().set",2,e,!0),Bh(this.f,this.pa,t,e)},Y.prototype.set=Y.prototype.set,Y.prototype.fb=function(t,e,n){L("Wilddog.onDisconnect().setWithPriority",2,3,arguments.length),Pg("Wilddog.onDisconnect().setWithPriority",this.pa),Ig("Wilddog.onDisconnect().setWithPriority",t,this.pa,!1),Lg("Wilddog.onDisconnect().setWithPriority",2,e),N("Wilddog.onDisconnect().setWithPriority",3,n,!0),Ch(this.f,this.pa,t,e,n)},Y.prototype.setWithPriority=Y.prototype.fb,Y.prototype.update=function(t,e){if(L("Wilddog.onDisconnect().update",1,2,arguments.length),Pg("Wilddog.onDisconnect().update",this.pa),ea(t)){for(var n={},r=0;r<t.length;++r)n[""+r]=t[r];t=n,S("Passing an Array to Wilddog.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Kg("Wilddog.onDisconnect().update",t,this.pa),N("Wilddog.onDisconnect().update",2,e,!0),Dh(this.f,this.pa,t,e)},Y.prototype.update=Y.prototype.update;var Z={};Z.Ib=gh,Z.DataConnection=Z.Ib,gh.prototype.Hd=function(t,e){this.ya("q",{p:t},e)},Z.Ib.prototype.simpleListen=Z.Ib.prototype.Hd,gh.prototype.Fd=function(t,e){this.ya("echo",{d:t},e)},Z.Ib.prototype.echo=Z.Ib.prototype.Fd,gh.prototype.interrupt=gh.prototype.ab,Z.Jd=ah,Z.RealTimeConnection=Z.Jd,ah.prototype.sendRequest=ah.prototype.ya,ah.prototype.close=ah.prototype.close,Z.Xd=function(t){var e=gh.prototype.Hb;return gh.prototype.Hb=function(r,i,o,a){n(a)&&(a=t()),e.call(this,r,i,o,a)},function(){gh.prototype.Hb=e}},Z.hijackHash=Z.Xd,Z.Ed=sb,Z.ConnectionTarget=Z.Ed,Z.ta=function(t){return t.ta()},Z.queryIdentifier=Z.ta,Z.Zd=function(t){return t.w.Ja.fa},Z.listens=Z.Zd,Z.Kc=function(t){t.Kc()},Z.forceRestClient=Z.Kc,la(V,W),"undefined"!=typeof module&&(module.exports=V),V.prototype.name=function(){return S("Wilddog.name() being deprecated. Please use Wilddog.key() instead."),L("Wilddog.name",0,0,arguments.length),this.key()},V.prototype.name=V.prototype.name,V.prototype.key=function(){return L("Wilddog.key",0,0,arguments.length),this.path.j()?null:Ca(this.path)},V.prototype.key=V.prototype.key,V.prototype.I=function(t){if(L("Wilddog.child",1,1,arguments.length),fa(t))t=String(t);else if(!(t instanceof z))if(null===B(this.path)){var e=t;e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Og("Wilddog.child",e)}else Og("Wilddog.child",t);return new V(this.w,this.path.I(t))},V.prototype.child=V.prototype.I,V.prototype.parent=function(){L("Wilddog.parent",0,0,arguments.length);var t=this.path.parent();return null===t?null:new V(this.w,t)},V.prototype.parent=V.prototype.parent,V.prototype.root=function(){L("Wilddog.ref",0,0,arguments.length);for(var t=this;null!==t.parent();)t=t.parent();return t},V.prototype.root=V.prototype.root,V.prototype.set=function(t,e){L("Wilddog.set",1,2,arguments.length),Pg("Wilddog.set",this.path),Ig("Wilddog.set",t,this.path,!1),N("Wilddog.set",2,e,!0),this.w.fb(this.path,t,null,e||null)},V.prototype.set=V.prototype.set,V.prototype.update=function(t,e){if(L("Wilddog.update",1,2,arguments.length),Pg("Wilddog.update",this.path),ea(t)){for(var n={},r=0;r<t.length;++r)n[""+r]=t[r];t=n,S("Passing an Array to Wilddog.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Kg("Wilddog.update",t,this.path),N("Wilddog.update",2,e,!0),this.w.update(this.path,t,e||null)},V.prototype.update=V.prototype.update,V.prototype.fb=function(t,e,n){if(L("Wilddog.setWithPriority",2,3,arguments.length),Pg("Wilddog.setWithPriority",this.path),Ig("Wilddog.setWithPriority",t,this.path,!1),Lg("Wilddog.setWithPriority",2,e),N("Wilddog.setWithPriority",3,n,!0),".length"===this.key()||".keys"===this.key())throw"Wilddog.setWithPriority failed: "+this.key()+" is a read-only object.";this.w.fb(this.path,t,e,n||null)},V.prototype.setWithPriority=V.prototype.fb,V.prototype.remove=function(t){L("Wilddog.remove",0,1,arguments.length),Pg("Wilddog.remove",this.path),N("Wilddog.remove",1,t,!0),this.set(null,t)},V.prototype.remove=V.prototype.remove,V.prototype.transaction=function(t,e,r){if(L("Wilddog.transaction",1,3,arguments.length),Pg("Wilddog.transaction",this.path),N("Wilddog.transaction",1,t,!1),N("Wilddog.transaction",2,e,!0),n(r)&&"boolean"!=typeof r)throw Error(M("Wilddog.transaction",3,!0)+"must be a boolean.");if(".length"===this.key()||".keys"===this.key())throw"Wilddog.transaction failed: "+this.key()+" is a read-only object.";"undefined"==typeof r&&(r=!0),Eh(this.w,this.path,t,e||null,r)},V.prototype.transaction=V.prototype.transaction,V.prototype.je=function(t,e){L("Wilddog.setPriority",1,2,arguments.length),Pg("Wilddog.setPriority",this.path),Lg("Wilddog.setPriority",1,t),N("Wilddog.setPriority",2,e,!0),this.w.fb(this.path.I(".priority"),t,null,e)},V.prototype.setPriority=V.prototype.je,V.prototype.push=function(t,e){L("Wilddog.push",0,2,arguments.length),Pg("Wilddog.push",this.path),Ig("Wilddog.push",t,this.path,!0),N("Wilddog.push",2,e,!0);var n=vh(this.w),n=Ve(n),n=this.I(n);return"undefined"!=typeof t&&null!==t&&n.set(t,e),n},V.prototype.push=V.prototype.push,V.prototype.onDisconnect=function(){return Pg("Wilddog.onDisconnect",this.path),new Y(this.w,this.path)},V.prototype.onDisconnect=V.prototype.onDisconnect,V.prototype.V=function(t,e,n){S("WilddogRef.auth() being deprecated. Please use WilddogRef.authWithCustomToken() instead."),L("Wilddog.auth",1,3,arguments.length),Qg("Wilddog.auth",t),N("Wilddog.auth",2,e,!0),N("Wilddog.auth",3,e,!0),xg(this.w.V,t,{},{remember:"none"},e,n)},V.prototype.auth=V.prototype.V,V.prototype.wc=function(t){L("Wilddog.unauth",0,1,arguments.length),N("Wilddog.unauth",1,t,!0),yg(this.w.V,t)},V.prototype.unauth=V.prototype.wc,V.prototype.Mc=function(){return L("Wilddog.getAuth",0,0,arguments.length),this.w.V.Mc()},V.prototype.getAuth=V.prototype.Mc,V.prototype.ae=function(t,e){L("Wilddog.onAuth",1,2,arguments.length),N("Wilddog.onAuth",1,t,!1),zb("Wilddog.onAuth",2,e),this.w.V.bb("auth_status",t,e)},V.prototype.onAuth=V.prototype.ae,V.prototype.$d=function(t,e){L("Wilddog.offAuth",1,2,arguments.length),N("Wilddog.offAuth",1,t,!1),zb("Wilddog.offAuth",2,e),this.w.V.Ab("auth_status",t,e)},V.prototype.offAuth=V.prototype.$d,V.prototype.Ld=function(t,e,n){L("Wilddog.authWithCustomToken",2,3,arguments.length),Qg("Wilddog.authWithCustomToken",t),N("Wilddog.authWithCustomToken",2,e,!1),Sg("Wilddog.authWithCustomToken",3,n,!0),xg(this.w.V,t,{},n||{},e)},V.prototype.authWithCustomToken=V.prototype.Ld,V.prototype.Md=function(t,e,n){L("Wilddog.authWithOAuthPopup",2,3,arguments.length),Rg("Wilddog.authWithOAuthPopup",1,t),N("Wilddog.authWithOAuthPopup",2,e,!1),Sg("Wilddog.authWithOAuthPopup",3,n,!0),Cg(this.w.V,t,n,e)},V.prototype.authWithOAuthPopup=V.prototype.Md,V.prototype.Nd=function(t,e,n){L("Wilddog.authWithOAuthRedirect",2,3,arguments.length),Rg("Wilddog.authWithOAuthRedirect",1,t),N("Wilddog.authWithOAuthRedirect",2,e,!1),Sg("Wilddog.authWithOAuthRedirect",3,n,!0);var r=this.w.V;Ag(r);var i=[bc],o=xb(n);"anonymous"===t||"wilddog"===t?T(e,I("TRANSPORT_UNAVAILABLE")):(K.set("redirect_client_options",o.Zb),Bg(r,i,"/auth/"+t,o,e))},V.prototype.authWithOAuthRedirect=V.prototype.Nd,V.prototype.Od=function(t,e,n,r){L("Wilddog.authWithOAuthToken",3,4,arguments.length),Rg("Wilddog.authWithOAuthToken",1,t),N("Wilddog.authWithOAuthToken",3,n,!1),Sg("Wilddog.authWithOAuthToken",4,r,!0),p(e)?(Rg("Wilddog.authWithOAuthToken",2,e),zg(this.w.V,t+"/token",{access_token:e},r,n)):(Sg("Wilddog.authWithOAuthToken",2,e,!1),zg(this.w.V,t+"/token",e,r,n))},V.prototype.authWithOAuthToken=V.prototype.Od,V.prototype.Kd=function(t,e){L("Wilddog.authAnonymously",1,2,arguments.length),N("Wilddog.authAnonymously",1,t,!1),Sg("Wilddog.authAnonymously",2,e,!0),zg(this.w.V,"anonymous",{},e,t)},V.prototype.authAnonymously=V.prototype.Kd,V.prototype.Pd=function(t,e,n){L("Wilddog.authWithPassword",2,3,arguments.length),Sg("Wilddog.authWithPassword",1,t,!1),Tg("Wilddog.authWithPassword",t,"email"),Tg("Wilddog.authWithPassword",t,"password"),N("Wilddog.authAnonymously",2,e,!1),Sg("Wilddog.authAnonymously",3,n,!0),zg(this.w.V,"password",t,n,e)},V.prototype.authWithPassword=V.prototype.Pd,V.prototype.Ic=function(t,e){L("Wilddog.createUser",2,2,arguments.length),Sg("Wilddog.createUser",1,t,!1),Tg("Wilddog.createUser",t,"email"),Tg("Wilddog.createUser",t,"password"),N("Wilddog.createUser",2,e,!1),this.w.V.Ic(t,e)},V.prototype.createUser=V.prototype.Ic,V.prototype.Xc=function(t,e){L("Wilddog.removeUser",2,2,arguments.length),Sg("Wilddog.removeUser",1,t,!1),Tg("Wilddog.removeUser",t,"email"),Tg("Wilddog.removeUser",t,"password"),N("Wilddog.removeUser",2,e,!1),this.w.V.Xc(t,e)},V.prototype.removeUser=V.prototype.Xc,V.prototype.Fc=function(t,e){L("Wilddog.changePassword",2,2,arguments.length),Sg("Wilddog.changePassword",1,t,!1),Tg("Wilddog.changePassword",t,"email"),Tg("Wilddog.changePassword",t,"oldPassword"),Tg("Wilddog.changePassword",t,"newPassword"),N("Wilddog.changePassword",2,e,!1),this.w.V.Fc(t,e)},V.prototype.changePassword=V.prototype.Fc,V.prototype.Ec=function(t,e){L("Wilddog.changeEmail",2,2,arguments.length),Sg("Wilddog.changeEmail",1,t,!1),Tg("Wilddog.changeEmail",t,"oldEmail"),Tg("Wilddog.changeEmail",t,"newEmail"),Tg("Wilddog.changeEmail",t,"password"),N("Wilddog.changeEmail",2,e,!1),this.w.V.Ec(t,e)},V.prototype.changeEmail=V.prototype.Ec,V.prototype.Zc=function(t,e){L("Wilddog.resetPassword",2,2,arguments.length),Sg("Wilddog.resetPassword",1,t,!1),Tg("Wilddog.resetPassword",t,"email"),N("Wilddog.resetPassword",2,e,!1),this.w.V.Zc(t,e)},V.prototype.resetPassword=V.prototype.Zc;var hd=CLIENT_VERSION;"undefined"!=typeof window&&(window.Wilddog=V),V.goOffline=function(){L("Wilddog.goOffline",0,0,arguments.length),Nh.Xa().ab()},V.goOnline=function(){L("Wilddog.goOnline",0,0,arguments.length),Nh.Xa().Fb()},V.enableLogging=md,V.ServerValue={TIMESTAMP:{".sv":"timestamp"}},V.SDK_VERSION=hd,V.INTERNAL=X,V.TEST_ACCESS=Z},ns.wrapper(ns.goog,ns.wd)}({goog:{},wd:{}})}).call(exports,function(){return this}(),__webpack_require__(46).Buffer)},138:function(t,e,n){(function(t){function r(e){var n,r=!1,s=!1,u=!1!==e.jsonp;if(t.location){var h="https:"==location.protocol,c=location.port;c||(c=h?443:80),r=e.hostname!=location.hostname||c!=e.port,s=e.secure!=h}if(e.xdomain=r,e.xscheme=s,n=new i(e),"open"in n&&!e.forceJSONP)return new o(e);if(!u)throw new Error("JSONP disabled");return new a(e)}var i=n(91),o=n(241),a=n(240),s=n(242);e.polling=r,e.websocket=s}).call(e,function(){return this}())},139:function(t,e,n){function r(t){var e=t&&t.forceBase64;c&&!e||(this.supportsBinary=!1),i.call(this,t)}var i=n(90),o=n(104),a=n(47),s=n(66),u=n(221),h=n(67)("engine.io-client:polling");t.exports=r;var c=function(){var t=n(91),e=new t({xdomain:!1});return null!=e.responseType}();s(r,i),r.prototype.name="polling",r.prototype.doOpen=function(){this.poll()},r.prototype.pause=function(t){function e(){h("paused"),n.readyState="paused",t()}var n=this;if(this.readyState="pausing",this.polling||!this.writable){var r=0;this.polling&&(h("we are currently polling - waiting to pause"),r++,this.once("pollComplete",function(){h("pre-pause polling complete"),--r||e()})),this.writable||(h("we are currently writing - waiting to pause"),r++,this.once("drain",function(){h("pre-pause writing complete"),--r||e()}))}else e()},r.prototype.poll=function(){h("polling"),this.polling=!0,this.doPoll(),this.emit("poll")},r.prototype.onData=function(t){var e=this;h("polling got data %s",t);var n=function(t,n,r){return"opening"==e.readyState&&e.onOpen(),"close"==t.type?(e.onClose(),!1):void e.onPacket(t)};a.decodePayload(t,this.socket.binaryType,n),"closed"!=this.readyState&&(this.polling=!1,this.emit("pollComplete"),"open"==this.readyState?this.poll():h('ignoring poll - transport state "%s"',this.readyState))},r.prototype.doClose=function(){function t(){h("writing close packet"),e.write([{type:"close"}])}var e=this;"open"==this.readyState?(h("transport open - closing"),t()):(h("transport not open - deferring close"),this.once("open",t))},r.prototype.write=function(t){var e=this;this.writable=!1;var n=function(){e.writable=!0,e.emit("drain")},e=this;a.encodePayload(t,this.supportsBinary,function(t){e.doWrite(t,n)})},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"https":"http",n="";!1!==this.timestampRequests&&(t[this.timestampParam]=u()),this.supportsBinary||t.sid||(t.b64=1),t=o.encode(t),this.port&&("https"==e&&443!=this.port||"http"==e&&80!=this.port)&&(n=":"+this.port),t.length&&(t="?"+t);var r=-1!==this.hostname.indexOf(":");return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t}},150:function(t,e,n){var r=t.exports,i=(n(93).EventEmitter,n(265)),o=n(478);r.request=function(t,e){"string"==typeof t&&(t=o.parse(t)),t||(t={}),t.host||t.port||(t.port=parseInt(window.location.port,10)),!t.host&&t.hostname&&(t.host=t.hostname),t.protocol||(t.scheme?t.protocol=t.scheme+":":t.protocol=window.location.protocol),t.host||(t.host=window.location.hostname||window.location.host),/:/.test(t.host)&&(t.port||(t.port=t.host.split(":")[1]),t.host=t.host.split(":")[0]),t.port||(t.port="https:"==t.protocol?443:80);var n=new i(new a,t);return e&&n.on("response",e),n},r.get=function(t,e){t.method="GET";var n=r.request(t,e);return n.end(),n},r.Agent=function(){},r.Agent.defaultMaxSockets=4;var a=function(){if("undefined"==typeof window)throw new Error("no window object present");if(window.XMLHttpRequest)return window.XMLHttpRequest;if(window.ActiveXObject){for(var t=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Microsoft.XMLHTTP"],e=0;e<t.length;e++)try{var n=new window.ActiveXObject(t[e]);return function(){if(n){var r=n;return n=null,r}return new window.ActiveXObject(t[e])}}catch(r){}throw new Error("ajax not supported in this browser")}throw new Error("ajax not supported in this browser")}();r.STATUS_CODES={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",300:"Multiple Choices",301:"Moved Permanently",302:"Moved Temporarily",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}},152:function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},217:function(t,e,n){function r(t){return this instanceof r?void i.call(this,t):new r(t)}t.exports=r;var i=n(134),o=n(57);o.inherits=n(31),o.inherits(r,i),r.prototype._transform=function(t,e,n){n(null,t)}},218:function(t,e,n){(function(e){function r(t,e){var r=n(45);t=t||{};var i=t.highWaterMark,o=t.objectMode?16:16384;this.highWaterMark=i||0===i?i:o,this.highWaterMark=~~this.highWaterMark,this.buffer=[],this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.objectMode=!!t.objectMode,e instanceof r&&(this.objectMode=this.objectMode||!!t.readableObjectMode),this.defaultEncoding=t.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(_||(_=n(219).StringDecoder),this.decoder=new _(t.encoding),this.encoding=t.encoding)}function i(t){n(45);return this instanceof i?(this._readableState=new r(t,this),this.readable=!0,void C.call(this)):new i(t)}function o(t,e,n,r,i){var o=h(e,n);if(o)t.emit("error",o);else if(T.isNullOrUndefined(n))e.reading=!1,e.ended||c(t,e);else if(e.objectMode||n&&n.length>0)if(e.ended&&!i){var s=new Error("stream.push() after EOF");t.emit("error",s)}else if(e.endEmitted&&i){var s=new Error("stream.unshift() after end event");t.emit("error",s)}else!e.decoder||i||r||(n=e.decoder.write(n)),i||(e.reading=!1),e.flowing&&0===e.length&&!e.sync?(t.emit("data",n),t.read(0)):(e.length+=e.objectMode?1:n.length,i?e.buffer.unshift(n):e.buffer.push(n),e.needReadable&&f(t)),p(t,e);else i||(e.reading=!1);return a(e)}function a(t){return!t.ended&&(t.needReadable||t.length<t.highWaterMark||0===t.length)}function s(t){if(t>=B)t=B;else{t--;for(var e=1;32>e;e<<=1)t|=t>>e;t++}return t}function u(t,e){return 0===e.length&&e.ended?0:e.objectMode?0===t?0:1:isNaN(t)||T.isNull(t)?e.flowing&&e.buffer.length?e.buffer[0].length:e.length:0>=t?0:(t>e.highWaterMark&&(e.highWaterMark=s(t)),t>e.length?e.ended?e.length:(e.needReadable=!0,0):t)}function h(t,e){var n=null;return T.isBuffer(e)||T.isString(e)||T.isNullOrUndefined(e)||t.objectMode||(n=new TypeError("Invalid non-string/buffer chunk")),n}function c(t,e){if(e.decoder&&!e.ended){var n=e.decoder.end();n&&n.length&&(e.buffer.push(n),e.length+=e.objectMode?1:n.length)}e.ended=!0,f(t)}function f(t){var n=t._readableState;n.needReadable=!1,n.emittedReadable||(O("emitReadable",n.flowing),n.emittedReadable=!0,n.sync?e.nextTick(function(){l(t)}):l(t))}function l(t){O("emit readable"),t.emit("readable"),b(t)}function p(t,n){n.readingMore||(n.readingMore=!0,e.nextTick(function(){d(t,n)}))}function d(t,e){for(var n=e.length;!e.reading&&!e.flowing&&!e.ended&&e.length<e.highWaterMark&&(O("maybeReadMore read 0"),t.read(0),n!==e.length);)n=e.length;e.readingMore=!1}function g(t){return function(){var e=t._readableState;O("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&k.listenerCount(t,"data")&&(e.flowing=!0,b(t))}}function y(t,n){n.resumeScheduled||(n.resumeScheduled=!0,e.nextTick(function(){v(t,n)}))}function v(t,e){e.resumeScheduled=!1,t.emit("resume"),b(t),e.flowing&&!e.reading&&t.read(0)}function b(t){var e=t._readableState;if(O("flow",e.flowing),e.flowing)do var n=t.read();while(null!==n&&e.flowing)}function m(t,e){var n,r=e.buffer,i=e.length,o=!!e.decoder,a=!!e.objectMode;if(0===r.length)return null;if(0===i)n=null;else if(a)n=r.shift();else if(!t||t>=i)n=o?r.join(""):S.concat(r,i),r.length=0;else if(t<r[0].length){var s=r[0];n=s.slice(0,t),r[0]=s.slice(t)}else if(t===r[0].length)n=r.shift();else{n=o?"":new S(t);for(var u=0,h=0,c=r.length;c>h&&t>u;h++){var s=r[0],f=Math.min(t-u,s.length);o?n+=s.slice(0,f):s.copy(n,u,0,f),f<s.length?r[0]=s.slice(f):r.shift(),u+=f}}return n}function w(t){var n=t._readableState;if(n.length>0)throw new Error("endReadable called on non-empty stream");n.endEmitted||(n.ended=!0,e.nextTick(function(){n.endEmitted||0!==n.length||(n.endEmitted=!0,t.readable=!1,t.emit("end"))}))}function E(t,e){for(var n=0,r=t.length;r>n;n++)e(t[n],n)}function A(t,e){for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n;return-1}t.exports=i;var x=n(152),S=n(46).Buffer;i.ReadableState=r;var k=n(93).EventEmitter;k.listenerCount||(k.listenerCount=function(t,e){return t.listeners(e).length});var C=n(65),T=n(57);T.inherits=n(31);var _,O=n(483);O=O&&O.debuglog?O.debuglog("stream"):function(){},T.inherits(i,C),i.prototype.push=function(t,e){var n=this._readableState;return T.isString(t)&&!n.objectMode&&(e=e||n.defaultEncoding,e!==n.encoding&&(t=new S(t,e),e="")),o(this,n,t,e,!1)},i.prototype.unshift=function(t){var e=this._readableState;return o(this,e,t,"",!0)},i.prototype.setEncoding=function(t){return _||(_=n(219).StringDecoder),this._readableState.decoder=new _(t),this._readableState.encoding=t,this};var B=8388608;i.prototype.read=function(t){O("read",t);var e=this._readableState,n=t;if((!T.isNumber(t)||t>0)&&(e.emittedReadable=!1),0===t&&e.needReadable&&(e.length>=e.highWaterMark||e.ended))return O("read: emitReadable",e.length,e.ended),0===e.length&&e.ended?w(this):f(this),null;if(t=u(t,e),0===t&&e.ended)return 0===e.length&&w(this),null;var r=e.needReadable;O("need readable",r),(0===e.length||e.length-t<e.highWaterMark)&&(r=!0,O("length less than watermark",r)),(e.ended||e.reading)&&(r=!1,O("reading or ended",r)),r&&(O("do read"),e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1),r&&!e.reading&&(t=u(n,e));var i;return i=t>0?m(t,e):null,T.isNull(i)&&(e.needReadable=!0,t=0),e.length-=t,0!==e.length||e.ended||(e.needReadable=!0),n!==t&&e.ended&&0===e.length&&w(this),T.isNull(i)||this.emit("data",i),i},i.prototype._read=function(t){this.emit("error",new Error("not implemented"))},i.prototype.pipe=function(t,n){function r(t){O("onunpipe"),t===f&&o()}function i(){O("onend"),t.end()}function o(){O("cleanup"),t.removeListener("close",u),t.removeListener("finish",h),t.removeListener("drain",y),t.removeListener("error",s),t.removeListener("unpipe",r),f.removeListener("end",i),f.removeListener("end",o),f.removeListener("data",a),!l.awaitDrain||t._writableState&&!t._writableState.needDrain||y()}function a(e){O("ondata");var n=t.write(e);!1===n&&(O("false write response, pause",f._readableState.awaitDrain),f._readableState.awaitDrain++,f.pause())}function s(e){O("onerror",e),c(),t.removeListener("error",s),0===k.listenerCount(t,"error")&&t.emit("error",e)}function u(){t.removeListener("finish",h),c()}function h(){O("onfinish"),t.removeListener("close",u),c()}function c(){O("unpipe"),f.unpipe(t)}var f=this,l=this._readableState;switch(l.pipesCount){case 0:l.pipes=t;break;case 1:l.pipes=[l.pipes,t];break;default:l.pipes.push(t)}l.pipesCount+=1,O("pipe count=%d opts=%j",l.pipesCount,n);var p=(!n||n.end!==!1)&&t!==e.stdout&&t!==e.stderr,d=p?i:o;l.endEmitted?e.nextTick(d):f.once("end",d),t.on("unpipe",r);var y=g(f);return t.on("drain",y),f.on("data",a),t._events&&t._events.error?x(t._events.error)?t._events.error.unshift(s):t._events.error=[s,t._events.error]:t.on("error",s),t.once("close",u),t.once("finish",h),t.emit("pipe",f),l.flowing||(O("pipe resume"),f.resume()),t},i.prototype.unpipe=function(t){var e=this._readableState;if(0===e.pipesCount)return this;if(1===e.pipesCount)return t&&t!==e.pipes?this:(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this),this);if(!t){var n=e.pipes,r=e.pipesCount;e.pipes=null,e.pipesCount=0,e.flowing=!1;for(var i=0;r>i;i++)n[i].emit("unpipe",this);return this}var i=A(e.pipes,t);return-1===i?this:(e.pipes.splice(i,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this),this)},i.prototype.on=function(t,n){var r=C.prototype.on.call(this,t,n);if("data"===t&&!1!==this._readableState.flowing&&this.resume(),"readable"===t&&this.readable){var i=this._readableState;if(!i.readableListening)if(i.readableListening=!0,i.emittedReadable=!1,i.needReadable=!0,i.reading)i.length&&f(this,i);else{var o=this;e.nextTick(function(){O("readable nexttick read 0"),o.read(0)})}}return r},i.prototype.addListener=i.prototype.on,i.prototype.resume=function(){var t=this._readableState;return t.flowing||(O("resume"),t.flowing=!0,t.reading||(O("resume read 0"),this.read(0)),y(this,t)),this},i.prototype.pause=function(){return O("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(O("pause"),this._readableState.flowing=!1,this.emit("pause")),this},i.prototype.wrap=function(t){var e=this._readableState,n=!1,r=this;t.on("end",function(){if(O("wrapped end"),e.decoder&&!e.ended){var t=e.decoder.end();t&&t.length&&r.push(t)}r.push(null)}),t.on("data",function(i){if(O("wrapped data"),e.decoder&&(i=e.decoder.write(i)),i&&(e.objectMode||i.length)){var o=r.push(i);o||(n=!0,t.pause())}});for(var i in t)T.isFunction(t[i])&&T.isUndefined(this[i])&&(this[i]=function(e){return function(){return t[e].apply(t,arguments)}}(i));var o=["error","close","destroy","pause","resume"];return E(o,function(e){t.on(e,r.emit.bind(r,e))}),r._read=function(e){O("wrapped _read",e),n&&(n=!1,t.resume())},r},i._fromList=m}).call(e,n(79))},219:function(t,e,n){function r(t){if(t&&!u(t))throw new Error("Unknown encoding: "+t)}function i(t){return t.toString(this.encoding)}function o(t){this.charReceived=t.length%2,this.charLength=this.charReceived?2:0}function a(t){this.charReceived=t.length%3,this.charLength=this.charReceived?3:0}var s=n(46).Buffer,u=s.isEncoding||function(t){switch(t&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}},h=e.StringDecoder=function(t){switch(this.encoding=(t||"utf8").toLowerCase().replace(/[-_]/,""),r(t),this.encoding){case"utf8":this.surrogateSize=3;break;case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=o;break;case"base64":this.surrogateSize=3,this.detectIncompleteChar=a;break;default:return void(this.write=i)}this.charBuffer=new s(6),this.charReceived=0,this.charLength=0};h.prototype.write=function(t){for(var e="";this.charLength;){var n=t.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:t.length;if(t.copy(this.charBuffer,this.charReceived,0,n),this.charReceived+=n,this.charReceived<this.charLength)return"";t=t.slice(n,t.length),e=this.charBuffer.slice(0,this.charLength).toString(this.encoding);var r=e.charCodeAt(e.length-1);if(!(r>=55296&&56319>=r)){if(this.charReceived=this.charLength=0,0===t.length)return e;break}this.charLength+=this.surrogateSize,e=""}this.detectIncompleteChar(t);var i=t.length;this.charLength&&(t.copy(this.charBuffer,0,t.length-this.charReceived,i),i-=this.charReceived),e+=t.toString(this.encoding,0,i);var i=e.length-1,r=e.charCodeAt(i);if(r>=55296&&56319>=r){var o=this.surrogateSize;return this.charLength+=o,this.charReceived+=o,this.charBuffer.copy(this.charBuffer,o,0,o),t.copy(this.charBuffer,0,0,o),e.substring(0,i)}return e},h.prototype.detectIncompleteChar=function(t){for(var e=t.length>=3?3:t.length;e>0;e--){var n=t[t.length-e];if(1==e&&n>>5==6){this.charLength=2;break}if(2>=e&&n>>4==14){this.charLength=3;break}if(3>=e&&n>>3==30){this.charLength=4;break}}this.charReceived=e},h.prototype.end=function(t){var e="";if(t&&t.length&&(e=this.write(t)),this.charReceived){var n=this.charReceived,r=this.charBuffer,i=this.encoding;e+=r.slice(0,n).toString(i)}return e}},220:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}},221:function(t,e){"use strict";function n(t){var e="";do e=a[t%s]+e,t=Math.floor(t/s);while(t>0);return e}function r(t){var e=0;for(c=0;c<t.length;c++)e=e*s+u[t.charAt(c)];return e}function i(){var t=n(+new Date);return t!==o?(h=0,o=t):t+"."+n(h++)}for(var o,a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),s=64,u={},h=0,c=0;s>c;c++)u[a[c]]=c;i.encode=n,i.decode=r,t.exports=i},222:function(t,e,n){!function(){function t(t){this.message=t}var n=e,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.prototype=new Error,t.prototype.name="InvalidCharacterError",n.btoa||(n.btoa=function(e){for(var n,i,o=0,a=r,s="";e.charAt(0|o)||(a="=",o%1);s+=a.charAt(63&n>>8-o%1*8)){if(i=e.charCodeAt(o+=.75),i>255)throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");n=n<<8|i}return s}),n.atob||(n.atob=function(e){if(e=e.replace(/=+$/,""),e.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,i,o=0,a=0,s="";i=e.charAt(a++);~i&&(n=o%4?64*n+i:i,o++%4)?s+=String.fromCharCode(255&n>>(-2*o&6)):0)i=r.indexOf(i);return s;
})}()},223:function(t,e){function n(t,e,n){function i(t,r){if(i.count<=0)throw new Error("after called too many times");--i.count,t?(o=!0,e(t),e=n):0!==i.count||o||e(null,r)}var o=!1;return n=n||r,i.count=t,0===t?e():i}function r(){}t.exports=n},224:function(t,e){t.exports=function(t,e,n){var r=t.byteLength;if(e=e||0,n=n||r,t.slice)return t.slice(e,n);if(0>e&&(e+=r),0>n&&(n+=r),n>r&&(n=r),e>=r||e>=n||0===r)return new ArrayBuffer(0);for(var i=new Uint8Array(t),o=new Uint8Array(n-e),a=e,s=0;n>a;a++,s++)o[s]=i[a];return o.buffer}},225:function(t,e){!function(t){"use strict";e.encode=function(e){var n,r=new Uint8Array(e),i=r.length,o="";for(n=0;i>n;n+=3)o+=t[r[n]>>2],o+=t[(3&r[n])<<4|r[n+1]>>4],o+=t[(15&r[n+1])<<2|r[n+2]>>6],o+=t[63&r[n+2]];return i%3===2?o=o.substring(0,o.length-1)+"=":i%3===1&&(o=o.substring(0,o.length-2)+"=="),o},e.decode=function(e){var n,r,i,o,a,s=.75*e.length,u=e.length,h=0;"="===e[e.length-1]&&(s--,"="===e[e.length-2]&&s--);var c=new ArrayBuffer(s),f=new Uint8Array(c);for(n=0;u>n;n+=4)r=t.indexOf(e[n]),i=t.indexOf(e[n+1]),o=t.indexOf(e[n+2]),a=t.indexOf(e[n+3]),f[h++]=r<<2|i>>4,f[h++]=(15&i)<<4|o>>2,f[h++]=(3&o)<<6|63&a;return c}}("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")},226:function(t,e,n){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(t){"use strict";function e(t){var e=t.charCodeAt(0);return e===a||e===f?62:e===s||e===l?63:u>e?-1:u+10>e?e-u+26+26:c+26>e?e-c:h+26>e?e-h+26:void 0}function n(t){function n(t){h[f++]=t}var r,i,a,s,u,h;if(t.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var c=t.length;u="="===t.charAt(c-2)?2:"="===t.charAt(c-1)?1:0,h=new o(3*t.length/4-u),a=u>0?t.length-4:t.length;var f=0;for(r=0,i=0;a>r;r+=4,i+=3)s=e(t.charAt(r))<<18|e(t.charAt(r+1))<<12|e(t.charAt(r+2))<<6|e(t.charAt(r+3)),n((16711680&s)>>16),n((65280&s)>>8),n(255&s);return 2===u?(s=e(t.charAt(r))<<2|e(t.charAt(r+1))>>4,n(255&s)):1===u&&(s=e(t.charAt(r))<<10|e(t.charAt(r+1))<<4|e(t.charAt(r+2))>>2,n(s>>8&255),n(255&s)),h}function i(t){function e(t){return r.charAt(t)}function n(t){return e(t>>18&63)+e(t>>12&63)+e(t>>6&63)+e(63&t)}var i,o,a,s=t.length%3,u="";for(i=0,a=t.length-s;a>i;i+=3)o=(t[i]<<16)+(t[i+1]<<8)+t[i+2],u+=n(o);switch(s){case 1:o=t[t.length-1],u+=e(o>>2),u+=e(o<<4&63),u+="==";break;case 2:o=(t[t.length-2]<<8)+t[t.length-1],u+=e(o>>10),u+=e(o>>4&63),u+=e(o<<2&63),u+="="}return u}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,a="+".charCodeAt(0),s="/".charCodeAt(0),u="0".charCodeAt(0),h="a".charCodeAt(0),c="A".charCodeAt(0),f="-".charCodeAt(0),l="_".charCodeAt(0);t.toByteArray=n,t.fromByteArray=i}(e)},227:function(t,e){(function(e){function n(t){for(var e=0;e<t.length;e++){var n=t[e];if(n.buffer instanceof ArrayBuffer){var r=n.buffer;if(n.byteLength!==r.byteLength){var i=new Uint8Array(n.byteLength);i.set(new Uint8Array(r,n.byteOffset,n.byteLength)),r=i.buffer}t[e]=r}}}function r(t,e){e=e||{};var r=new o;n(t);for(var i=0;i<t.length;i++)r.append(t[i]);return e.type?r.getBlob(e.type):r.getBlob()}function i(t,e){return n(t),new Blob(t,e||{})}var o=e.BlobBuilder||e.WebKitBlobBuilder||e.MSBlobBuilder||e.MozBlobBuilder,a=function(){try{var t=new Blob(["hi"]);return 2===t.size}catch(e){return!1}}(),s=a&&function(){try{var t=new Blob([new Uint8Array([1,2])]);return 2===t.size}catch(e){return!1}}(),u=o&&o.prototype.append&&o.prototype.getBlob;t.exports=function(){return a?s?e.Blob:i:u?r:void 0}()}).call(e,function(){return this}())},229:function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},233:function(t,e,n){function r(){return e.colors[c++%e.colors.length]}function i(t){function n(){}function i(){var t=i,n=+new Date,o=n-(h||n);t.diff=o,t.prev=h,t.curr=n,h=n,null==t.useColors&&(t.useColors=e.useColors()),null==t.color&&t.useColors&&(t.color=r());var a=Array.prototype.slice.call(arguments);a[0]=e.coerce(a[0]),"string"!=typeof a[0]&&(a=["%o"].concat(a));var s=0;a[0]=a[0].replace(/%([a-z%])/g,function(n,r){if("%%"===n)return n;s++;var i=e.formatters[r];if("function"==typeof i){var o=a[s];n=i.call(t,o),a.splice(s,1),s--}return n}),"function"==typeof e.formatArgs&&(a=e.formatArgs.apply(t,a));var u=i.log||e.log||console.log.bind(console);u.apply(t,a)}n.enabled=!1,i.enabled=!0;var o=e.enabled(t)?i:n;return o.namespace=t,o}function o(t){e.save(t);for(var n=(t||"").split(/[\s,]+/),r=n.length,i=0;r>i;i++)n[i]&&(t=n[i].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function a(){e.enable("")}function s(t){var n,r;for(n=0,r=e.skips.length;r>n;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;r>n;n++)if(e.names[n].test(t))return!0;return!1}function u(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=i,e.coerce=u,e.disable=a,e.enable=o,e.enabled=s,e.humanize=n(351),e.names=[],e.skips=[],e.formatters={};var h,c=0},237:function(t,e,n){t.exports=n(238)},238:function(t,e,n){t.exports=n(239),t.exports.parser=n(47)},239:function(t,e,n){(function(e){function r(t,n){if(!(this instanceof r))return new r(t,n);n=n||{},t&&"object"==typeof t&&(n=t,t=null),t?(t=c(t),n.hostname=t.host,n.secure="https"==t.protocol||"wss"==t.protocol,n.port=t.port,t.query&&(n.query=t.query)):n.host&&(n.hostname=c(n.host).host),this.secure=null!=n.secure?n.secure:e.location&&"https:"==location.protocol,n.hostname&&!n.port&&(n.port=this.secure?"443":"80"),this.agent=n.agent||!1,this.hostname=n.hostname||(e.location?location.hostname:"localhost"),this.port=n.port||(e.location&&location.port?location.port:this.secure?443:80),this.query=n.query||{},"string"==typeof this.query&&(this.query=l.decode(this.query)),this.upgrade=!1!==n.upgrade,this.path=(n.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!n.forceJSONP,this.jsonp=!1!==n.jsonp,this.forceBase64=!!n.forceBase64,this.enablesXDR=!!n.enablesXDR,this.timestampParam=n.timestampParam||"t",this.timestampRequests=n.timestampRequests,this.transports=n.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.policyPort=n.policyPort||843,this.rememberUpgrade=n.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=n.onlyBinaryUpgrades,this.perMessageDeflate=!1!==n.perMessageDeflate?n.perMessageDeflate||{}:!1,!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=n.pfx||null,this.key=n.key||null,this.passphrase=n.passphrase||null,this.cert=n.cert||null,this.ca=n.ca||null,this.ciphers=n.ciphers||null,this.rejectUnauthorized=void 0===n.rejectUnauthorized?null:n.rejectUnauthorized;var i="object"==typeof e&&e;i.global===i&&n.extraHeaders&&Object.keys(n.extraHeaders).length>0&&(this.extraHeaders=n.extraHeaders),this.open()}function i(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var o=n(138),a=n(92),s=n(67)("engine.io-client:socket"),u=n(269),h=n(47),c=n(353),f=n(352),l=n(104);t.exports=r,r.priorWebsocketSuccess=!1,a(r.prototype),r.protocol=h.protocol,r.Socket=r,r.Transport=n(90),r.transports=n(138),r.parser=n(47),r.prototype.createTransport=function(t){s('creating transport "%s"',t);var e=i(this.query);e.EIO=h.protocol,e.transport=t,this.id&&(e.sid=this.id);var n=new o[t]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:e,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders});return n},r.prototype.open=function(){var t;if(this.rememberUpgrade&&r.priorWebsocketSuccess&&-1!=this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length){var e=this;return void setTimeout(function(){e.emit("error","No transports available")},0)}t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(n){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},r.prototype.setTransport=function(t){s("setting transport %s",t.name);var e=this;this.transport&&(s("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},r.prototype.probe=function(t){function e(){if(l.onlyBinaryUpgrades){var e=!this.supportsBinary&&l.transport.supportsBinary;f=f||e}f||(s('probe transport "%s" opened',t),c.send([{type:"ping",data:"probe"}]),c.once("packet",function(e){if(!f)if("pong"==e.type&&"probe"==e.data){if(s('probe transport "%s" pong',t),l.upgrading=!0,l.emit("upgrading",c),!c)return;r.priorWebsocketSuccess="websocket"==c.name,s('pausing current transport "%s"',l.transport.name),l.transport.pause(function(){f||"closed"!=l.readyState&&(s("changing transport and sending upgrade packet"),h(),l.setTransport(c),c.send([{type:"upgrade"}]),l.emit("upgrade",c),c=null,l.upgrading=!1,l.flush())})}else{s('probe transport "%s" failed',t);var n=new Error("probe error");n.transport=c.name,l.emit("upgradeError",n)}}))}function n(){f||(f=!0,h(),c.close(),c=null)}function i(e){var r=new Error("probe error: "+e);r.transport=c.name,n(),s('probe transport "%s" failed because of error: %s',t,e),l.emit("upgradeError",r)}function o(){i("transport closed")}function a(){i("socket closed")}function u(t){c&&t.name!=c.name&&(s('"%s" works - aborting "%s"',t.name,c.name),n())}function h(){c.removeListener("open",e),c.removeListener("error",i),c.removeListener("close",o),l.removeListener("close",a),l.removeListener("upgrading",u)}s('probing transport "%s"',t);var c=this.createTransport(t,{probe:1}),f=!1,l=this;r.priorWebsocketSuccess=!1,c.once("open",e),c.once("error",i),c.once("close",o),this.once("close",a),this.once("upgrading",u),c.open()},r.prototype.onOpen=function(){if(s("socket open"),this.readyState="open",r.priorWebsocketSuccess="websocket"==this.transport.name,this.emit("open"),this.flush(),"open"==this.readyState&&this.upgrade&&this.transport.pause){s("starting upgrade probes");for(var t=0,e=this.upgrades.length;e>t;t++)this.probe(this.upgrades[t])}},r.prototype.onPacket=function(t){if("opening"==this.readyState||"open"==this.readyState)switch(s('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(f(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else s('packet received with socket readyState "%s"',this.readyState)},r.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!=this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},r.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!=e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},r.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){s("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},r.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},r.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},r.prototype.flush=function(){"closed"!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(s("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},r.prototype.write=r.prototype.send=function(t,e,n){return this.sendPacket("message",t,e,n),this},r.prototype.sendPacket=function(t,e,n,r){if("function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!=this.readyState&&"closed"!=this.readyState){n=n||{},n.compress=!1!==n.compress;var i={type:t,data:e,options:n};this.emit("packetCreate",i),this.writeBuffer.push(i),r&&this.once("flush",r),this.flush()}},r.prototype.close=function(){function t(){r.onClose("forced close"),s("socket closing - telling transport to close"),r.transport.close()}function e(){r.removeListener("upgrade",e),r.removeListener("upgradeError",e),t()}function n(){r.once("upgrade",e),r.once("upgradeError",e)}if("opening"==this.readyState||"open"==this.readyState){this.readyState="closing";var r=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?n():t()}):this.upgrading?n():t()}return this},r.prototype.onError=function(t){s("socket error %j",t),r.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},r.prototype.onClose=function(t,e){if("opening"==this.readyState||"open"==this.readyState||"closing"==this.readyState){s('socket close with reason: "%s"',t);var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),n.writeBuffer=[],n.prevBufferLen=0}},r.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;r>n;n++)~u(this.transports,t[n])&&e.push(t[n]);return e}}).call(e,function(){return this}())},240:function(t,e,n){(function(e){function r(){}function i(t){o.call(this,t),this.query=this.query||{},s||(e.___eio||(e.___eio=[]),s=e.___eio),this.index=s.length;var n=this;s.push(function(t){n.onData(t)}),this.query.j=this.index,e.document&&e.addEventListener&&e.addEventListener("beforeunload",function(){n.script&&(n.script.onerror=r)},!1)}var o=n(139),a=n(66);t.exports=i;var s,u=/\n/g,h=/\\n/g;a(i,o),i.prototype.supportsBinary=!1,i.prototype.doClose=function(){this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),this.form&&(this.form.parentNode.removeChild(this.form),this.form=null,this.iframe=null),o.prototype.doClose.call(this)},i.prototype.doPoll=function(){var t=this,e=document.createElement("script");this.script&&(this.script.parentNode.removeChild(this.script),this.script=null),e.async=!0,e.src=this.uri(),e.onerror=function(e){t.onError("jsonp poll error",e)};var n=document.getElementsByTagName("script")[0];n?n.parentNode.insertBefore(e,n):(document.head||document.body).appendChild(e),this.script=e;var r="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);r&&setTimeout(function(){var t=document.createElement("iframe");document.body.appendChild(t),document.body.removeChild(t)},100)},i.prototype.doWrite=function(t,e){function n(){r(),e()}function r(){if(i.iframe)try{i.form.removeChild(i.iframe)}catch(t){i.onError("jsonp polling iframe removal error",t)}try{var e='<iframe src="javascript:0" name="'+i.iframeId+'">';o=document.createElement(e)}catch(t){o=document.createElement("iframe"),o.name=i.iframeId,o.src="javascript:0"}o.id=i.iframeId,i.form.appendChild(o),i.iframe=o}var i=this;if(!this.form){var o,a=document.createElement("form"),s=document.createElement("textarea"),c=this.iframeId="eio_iframe_"+this.index;a.className="socketio",a.style.position="absolute",a.style.top="-1000px",a.style.left="-1000px",a.target=c,a.method="POST",a.setAttribute("accept-charset","utf-8"),s.name="d",a.appendChild(s),document.body.appendChild(a),this.form=a,this.area=s}this.form.action=this.uri(),r(),t=t.replace(h,"\\\n"),this.area.value=t.replace(u,"\\n");try{this.form.submit()}catch(f){}this.iframe.attachEvent?this.iframe.onreadystatechange=function(){"complete"==i.iframe.readyState&&n()}:this.iframe.onload=n}}).call(e,function(){return this}())},241:function(t,e,n){(function(e){function r(){}function i(t){if(u.call(this,t),e.location){var n="https:"==location.protocol,r=location.port;r||(r=n?443:80),this.xd=t.hostname!=e.location.hostname||r!=t.port,this.xs=t.secure!=n}else this.extraHeaders=t.extraHeaders}function o(t){this.method=t.method||"GET",this.uri=t.uri,this.xd=!!t.xd,this.xs=!!t.xs,this.async=!1!==t.async,this.data=void 0!=t.data?t.data:null,this.agent=t.agent,this.isBinary=t.isBinary,this.supportsBinary=t.supportsBinary,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.extraHeaders=t.extraHeaders,this.create()}function a(){for(var t in o.requests)o.requests.hasOwnProperty(t)&&o.requests[t].abort()}var s=n(91),u=n(139),h=n(92),c=n(66),f=n(67)("engine.io-client:polling-xhr");t.exports=i,t.exports.Request=o,c(i,u),i.prototype.supportsBinary=!0,i.prototype.request=function(t){return t=t||{},t.uri=this.uri(),t.xd=this.xd,t.xs=this.xs,t.agent=this.agent||!1,t.supportsBinary=this.supportsBinary,t.enablesXDR=this.enablesXDR,t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized,t.extraHeaders=this.extraHeaders,new o(t)},i.prototype.doWrite=function(t,e){var n="string"!=typeof t&&void 0!==t,r=this.request({method:"POST",data:t,isBinary:n}),i=this;r.on("success",e),r.on("error",function(t){i.onError("xhr post error",t)}),this.sendXhr=r},i.prototype.doPoll=function(){f("xhr poll");var t=this.request(),e=this;t.on("data",function(t){e.onData(t)}),t.on("error",function(t){e.onError("xhr poll error",t)}),this.pollXhr=t},h(o.prototype),o.prototype.create=function(){var t={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};t.pfx=this.pfx,t.key=this.key,t.passphrase=this.passphrase,t.cert=this.cert,t.ca=this.ca,t.ciphers=this.ciphers,t.rejectUnauthorized=this.rejectUnauthorized;var n=this.xhr=new s(t),r=this;try{f("xhr open %s: %s",this.method,this.uri),n.open(this.method,this.uri,this.async);try{if(this.extraHeaders){n.setDisableHeaderCheck(!0);for(var i in this.extraHeaders)this.extraHeaders.hasOwnProperty(i)&&n.setRequestHeader(i,this.extraHeaders[i])}}catch(a){}if(this.supportsBinary&&(n.responseType="arraybuffer"),"POST"==this.method)try{this.isBinary?n.setRequestHeader("Content-type","application/octet-stream"):n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(a){}"withCredentials"in n&&(n.withCredentials=!0),this.hasXDR()?(n.onload=function(){r.onLoad()},n.onerror=function(){r.onError(n.responseText)}):n.onreadystatechange=function(){4==n.readyState&&(200==n.status||1223==n.status?r.onLoad():setTimeout(function(){r.onError(n.status)},0))},f("xhr data %s",this.data),n.send(this.data)}catch(a){return void setTimeout(function(){r.onError(a)},0)}e.document&&(this.index=o.requestsCount++,o.requests[this.index]=this)},o.prototype.onSuccess=function(){this.emit("success"),this.cleanup()},o.prototype.onData=function(t){this.emit("data",t),this.onSuccess()},o.prototype.onError=function(t){this.emit("error",t),this.cleanup(!0)},o.prototype.cleanup=function(t){if("undefined"!=typeof this.xhr&&null!==this.xhr){if(this.hasXDR()?this.xhr.onload=this.xhr.onerror=r:this.xhr.onreadystatechange=r,t)try{this.xhr.abort()}catch(n){}e.document&&delete o.requests[this.index],this.xhr=null}},o.prototype.onLoad=function(){var t;try{var e;try{e=this.xhr.getResponseHeader("Content-Type").split(";")[0]}catch(n){}if("application/octet-stream"===e)t=this.xhr.response;else if(this.supportsBinary)try{t=String.fromCharCode.apply(null,new Uint8Array(this.xhr.response))}catch(n){for(var r=new Uint8Array(this.xhr.response),i=[],o=0,a=r.length;a>o;o++)i.push(r[o]);t=String.fromCharCode.apply(null,i)}else t=this.xhr.responseText}catch(n){this.onError(n)}null!=t&&this.onData(t)},o.prototype.hasXDR=function(){return"undefined"!=typeof e.XDomainRequest&&!this.xs&&this.enablesXDR},o.prototype.abort=function(){this.cleanup()},e.document&&(o.requestsCount=0,o.requests={},e.attachEvent?e.attachEvent("onunload",a):e.addEventListener&&e.addEventListener("beforeunload",a,!1))}).call(e,function(){return this}())},242:function(t,e,n){(function(e){function r(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,i.call(this,t)}var i=n(90),o=n(47),a=n(104),s=n(66),u=n(221),h=n(67)("engine.io-client:websocket"),c=e.WebSocket||e.MozWebSocket,f=c;if(!f&&"undefined"==typeof window)try{f=n(482)}catch(l){}t.exports=r,s(r,i),r.prototype.name="websocket",r.prototype.supportsBinary=!0,r.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e=void 0,n={agent:this.agent,perMessageDeflate:this.perMessageDeflate};n.pfx=this.pfx,n.key=this.key,n.passphrase=this.passphrase,n.cert=this.cert,n.ca=this.ca,n.ciphers=this.ciphers,n.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(n.headers=this.extraHeaders),this.ws=c?new f(t):new f(t,e,n),void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="buffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},r.prototype.addEventListeners=function(){var t=this;this.ws.onopen=function(){t.onOpen()},this.ws.onclose=function(){t.onClose()},this.ws.onmessage=function(e){t.onData(e.data)},this.ws.onerror=function(e){t.onError("websocket error",e)}},"undefined"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)&&(r.prototype.onData=function(t){var e=this;setTimeout(function(){i.prototype.onData.call(e,t)},0)}),r.prototype.write=function(t){function n(){r.emit("flush"),setTimeout(function(){r.writable=!0,r.emit("drain")},0)}var r=this;this.writable=!1;for(var i=t.length,a=0,s=i;s>a;a++)!function(t){o.encodePacket(t,r.supportsBinary,function(o){if(!c){var a={};if(t.options&&(a.compress=t.options.compress),r.perMessageDeflate){var s="string"==typeof o?e.Buffer.byteLength(o):o.length;s<r.perMessageDeflate.threshold&&(a.compress=!1)}}try{c?r.ws.send(o):r.ws.send(o,a)}catch(u){h("websocket closed before onclose event")}--i||n()})}(t[a])},r.prototype.onClose=function(){i.prototype.onClose.call(this)},r.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.close()},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",n="";this.port&&("wss"==e&&443!=this.port||"ws"==e&&80!=this.port)&&(n=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=u()),this.supportsBinary||(t.b64=1),t=a.encode(t),t.length&&(t="?"+t);var r=-1!==this.hostname.indexOf(":");return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t},r.prototype.check=function(){return!(!f||"__initialize"in f&&this.name===r.prototype.name)}}).call(e,function(){return this}())},243:function(t,e){t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&&e.push(r);return e}},244:function(t,e,n){(function(e){function r(t){function n(t){if(!t)return!1;if(e.Buffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer||e.Blob&&t instanceof Blob||e.File&&t instanceof File)return!0;if(i(t)){for(var r=0;r<t.length;r++)if(n(t[r]))return!0}else if(t&&"object"==typeof t){t.toJSON&&(t=t.toJSON());for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)&&n(t[o]))return!0}return!1}return n(t)}var i=n(152);t.exports=r}).call(e,function(){return this}())},259:function(t,e){try{t.exports="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(n){t.exports=!1}},265:function(t,e,n){var r=n(65),i=n(266),o=n(222),a=n(31),s=t.exports=function(t,e){var n=this;n.writable=!0,n.xhr=t,n.body=[],n.uri=(e.protocol||"http:")+"//"+e.host+(e.port?":"+e.port:"")+(e.path||"/"),"undefined"==typeof e.withCredentials&&(e.withCredentials=!0);try{t.withCredentials=e.withCredentials}catch(r){}if(e.responseType)try{t.responseType=e.responseType}catch(r){}if(t.open(e.method||"GET",n.uri,!0),t.onerror=function(t){n.emit("error",new Error("Network error"))},n._headers={},e.headers)for(var a=u(e.headers),s=0;s<a.length;s++){var h=a[s];if(n.isSafeRequestHeader(h)){var c=e.headers[h];n.setHeader(h,c)}}e.auth&&this.setHeader("Authorization","Basic "+o.btoa(e.auth));var f=new i;f.on("close",function(){n.emit("close")}),f.on("ready",function(){n.emit("response",f)}),f.on("error",function(t){n.emit("error",t)}),t.onreadystatechange=function(){t.__aborted||f.handle(t)}};a(s,r),s.prototype.setHeader=function(t,e){this._headers[t.toLowerCase()]=e},s.prototype.getHeader=function(t){return this._headers[t.toLowerCase()]},s.prototype.removeHeader=function(t){delete this._headers[t.toLowerCase()]},s.prototype.write=function(t){this.body.push(t)},s.prototype.destroy=function(t){this.xhr.__aborted=!0,this.xhr.abort(),this.emit("close")},s.prototype.end=function(t){void 0!==t&&this.body.push(t);for(var e=u(this._headers),n=0;n<e.length;n++){var r=e[n],i=this._headers[r];if(h(i))for(var o=0;o<i.length;o++)this.xhr.setRequestHeader(r,i[o]);else this.xhr.setRequestHeader(r,i)}if(0===this.body.length)this.xhr.send("");else if("string"==typeof this.body[0])this.xhr.send(this.body.join(""));else if(h(this.body[0])){for(var a=[],n=0;n<this.body.length;n++)a.push.apply(a,this.body[n]);this.xhr.send(a)}else if(/Array/.test(Object.prototype.toString.call(this.body[0]))){for(var s=0,n=0;n<this.body.length;n++)s+=this.body[n].length;for(var a=new this.body[0].constructor(s),c=0,n=0;n<this.body.length;n++)for(var l=this.body[n],o=0;o<l.length;o++)a[c++]=l[o];this.xhr.send(a)}else if(f(this.body[0]))this.xhr.send(this.body[0]);else{for(var a="",n=0;n<this.body.length;n++)a+=this.body[n].toString();this.xhr.send(a)}},s.unsafeHeaders=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","content-transfer-encoding","date","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","user-agent","via"],s.prototype.isSafeRequestHeader=function(t){return t?-1===c(s.unsafeHeaders,t.toLowerCase()):!1};var u=Object.keys||function(t){var e=[];for(var n in t)e.push(n);return e},h=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},c=function(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1},f=function(t){return"undefined"!=typeof Blob&&t instanceof Blob?!0:"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?!0:"undefined"!=typeof FormData&&t instanceof FormData?!0:void 0}},266:function(t,e,n){function r(t){for(var e=t.getAllResponseHeaders().split(/\r?\n/),n={},r=0;r<e.length;r++){var i=e[r];if(""!==i){var o=i.match(/^([^:]+):\s*(.*)/);if(o){var a=o[1].toLowerCase(),s=o[2];void 0!==n[a]?u(n[a])?n[a].push(s):n[a]=[n[a],s]:n[a]=s}else n[i]=!0}}return n}var i=n(65),o=n(481),a=t.exports=function(t){this.offset=0,this.readable=!0};o.inherits(a,i);var s={streaming:!0,status2:!0};a.prototype.getResponse=function(t){var e=String(t.responseType).toLowerCase();return"blob"===e?t.responseBlob||t.response:"arraybuffer"===e?t.response:t.responseText},a.prototype.getHeader=function(t){return this.headers[t.toLowerCase()]},a.prototype.handle=function(t){if(2===t.readyState&&s.status2){try{this.statusCode=t.status,this.headers=r(t)}catch(e){s.status2=!1}s.status2&&this.emit("ready")}else if(s.streaming&&3===t.readyState){try{this.statusCode||(this.statusCode=t.status,this.headers=r(t),this.emit("ready"))}catch(e){}try{this._emitData(t)}catch(e){s.streaming=!1}}else 4===t.readyState&&(this.statusCode||(this.statusCode=t.status,this.emit("ready")),this._emitData(t),t.error?this.emit("error",this.getResponse(t)):this.emit("end"),this.emit("close"))},a.prototype._emitData=function(t){var e=this.getResponse(t);return e.toString().match(/ArrayBuffer/)?(this.emit("data",new Uint8Array(e,this.offset)),void(this.offset=e.byteLength)):void(e.length>this.offset&&(this.emit("data",e.slice(this.offset)),this.offset=e.length))};var u=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},267:function(t,e,n){var r=n(150),i=t.exports;for(var o in r)r.hasOwnProperty(o)&&(i[o]=r[o]);i.request=function(t,e){return t||(t={}),t.scheme="https",r.request.call(this,t,e)}},268:function(t,e){e.read=function(t,e,n,r,i){var o,a,s=8*i-r-1,u=(1<<s)-1,h=u>>1,c=-7,f=n?i-1:0,l=n?-1:1,p=t[e+f];for(f+=l,o=p&(1<<-c)-1,p>>=-c,c+=s;c>0;o=256*o+t[e+f],f+=l,c-=8);for(a=o&(1<<-c)-1,o>>=-c,c+=r;c>0;a=256*a+t[e+f],f+=l,c-=8);if(0===o)o=1-h;else{if(o===u)return a?NaN:(p?-1:1)*(1/0);a+=Math.pow(2,r),o-=h}return(p?-1:1)*a*Math.pow(2,o-r)},e.write=function(t,e,n,r,i,o){var a,s,u,h=8*o-i-1,c=(1<<h)-1,f=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:o-1,d=r?1:-1,g=0>e||0===e&&0>1/e?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=c):(a=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-a))<1&&(a--,u*=2),e+=a+f>=1?l/u:l*Math.pow(2,1-f),e*u>=2&&(a++,u/=2),a+f>=c?(s=0,a=c):a+f>=1?(s=(e*u-1)*Math.pow(2,i),a+=f):(s=e*Math.pow(2,f-1)*Math.pow(2,i),a=0));i>=8;t[n+p]=255&s,p+=d,s/=256,i-=8);for(a=a<<i|s,h+=i;h>0;t[n+p]=255&a,p+=d,a/=256,h-=8);t[n+p-d]|=128*g}},269:function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}},351:function(t,e){function n(t){if(t=""+t,!(t.length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*c;case"days":case"day":case"d":return n*h;case"hours":case"hour":case"hrs":case"hr":case"h":return n*u;case"minutes":case"minute":case"mins":case"min":case"m":return n*s;case"seconds":case"second":case"secs":case"sec":case"s":return n*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n}}}}function r(t){return t>=h?Math.round(t/h)+"d":t>=u?Math.round(t/u)+"h":t>=s?Math.round(t/s)+"m":t>=a?Math.round(t/a)+"s":t+"ms"}function i(t){return o(t,h,"day")||o(t,u,"hour")||o(t,s,"minute")||o(t,a,"second")||t+" ms"}function o(t,e,n){return e>t?void 0:1.5*e>t?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var a=1e3,s=60*a,u=60*s,h=24*u,c=365.25*h;t.exports=function(t,e){return e=e||{},"string"==typeof t?n(t):e["long"]?i(t):r(t)}},352:function(t,e){(function(e){var n=/^[\],:{}\s]*$/,r=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,i=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,o=/(?:^|:|,)(?:\s*\[)+/g,a=/^\s+/,s=/\s+$/;t.exports=function(t){return"string"==typeof t&&t?(t=t.replace(a,"").replace(s,""),e.JSON&&JSON.parse?JSON.parse(t):n.test(t.replace(r,"@").replace(i,"]").replace(o,""))?new Function("return "+t)():void 0):null}}).call(e,function(){return this}())},353:function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,i=t.indexOf("["),o=t.indexOf("]");-1!=i&&-1!=o&&(t=t.substring(0,i)+t.substring(i,o).replace(/:/g,";")+t.substring(o,t.length));for(var a=n.exec(t||""),s={},u=14;u--;)s[r[u]]=a[u]||"";return-1!=i&&-1!=o&&(s.source=e,s.host=s.host.substring(1,s.host.length-1).replace(/;/g,":"),s.authority=s.authority.replace("[","").replace("]","").replace(/;/g,":"),
s.ipv6uri=!0),s}},354:function(t,e){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,i){e=e||"&",r=r||"=";var o={};if("string"!=typeof t||0===t.length)return o;var a=/\+/g;t=t.split(e);var s=1e3;i&&"number"==typeof i.maxKeys&&(s=i.maxKeys);var u=t.length;s>0&&u>s&&(u=s);for(var h=0;u>h;++h){var c,f,l,p,d=t[h].replace(a,"%20"),g=d.indexOf(r);g>=0?(c=d.substr(0,g),f=d.substr(g+1)):(c=d,f=""),l=decodeURIComponent(c),p=decodeURIComponent(f),n(o,l)?Array.isArray(o[l])?o[l].push(p):o[l]=[o[l],p]:o[l]=p}return o}},355:function(t,e){"use strict";var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,i){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?Object.keys(t).map(function(i){var o=encodeURIComponent(n(i))+r;return Array.isArray(t[i])?t[i].map(function(t){return o+encodeURIComponent(n(t))}).join(e):o+encodeURIComponent(n(t[i]))}).join(e):i?encodeURIComponent(n(i))+r+encodeURIComponent(n(t)):""}},356:function(t,e,n){"use strict";e.decode=e.parse=n(354),e.encode=e.stringify=n(355)},468:function(t,e,n){t.exports=n(45)},469:function(t,e,n){t.exports=n(217)},470:function(t,e,n){e=t.exports=n(218),e.Stream=n(65),e.Readable=e,e.Writable=n(135),e.Duplex=n(45),e.Transform=n(134),e.PassThrough=n(217)},471:function(t,e,n){t.exports=n(134)},472:function(t,e,n){t.exports=n(135)},477:function(t,e,n){var r;(function(t,i){!function(o){function a(t){throw RangeError(R[t])}function s(t,e){for(var n=t.length,r=[];n--;)r[n]=e(t[n]);return r}function u(t,e){var n=t.split("@"),r="";n.length>1&&(r=n[0]+"@",t=n[1]),t=t.replace(L,".");var i=t.split("."),o=s(i,e).join(".");return r+o}function h(t){for(var e,n,r=[],i=0,o=t.length;o>i;)e=t.charCodeAt(i++),e>=55296&&56319>=e&&o>i?(n=t.charCodeAt(i++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),i--)):r.push(e);return r}function c(t){return s(t,function(t){var e="";return t>65535&&(t-=65536,e+=U(t>>>10&1023|55296),t=56320|1023&t),e+=U(t)}).join("")}function f(t){return 10>t-48?t-22:26>t-65?t-65:26>t-97?t-97:E}function l(t,e){return t+22+75*(26>t)-((0!=e)<<5)}function p(t,e,n){var r=0;for(t=n?P(t/k):t>>1,t+=P(t/e);t>j*x>>1;r+=E)t=P(t/j);return P(r+(j+1)*t/(t+S))}function d(t){var e,n,r,i,o,s,u,h,l,d,g=[],y=t.length,v=0,b=T,m=C;for(n=t.lastIndexOf(_),0>n&&(n=0),r=0;n>r;++r)t.charCodeAt(r)>=128&&a("not-basic"),g.push(t.charCodeAt(r));for(i=n>0?n+1:0;y>i;){for(o=v,s=1,u=E;i>=y&&a("invalid-input"),h=f(t.charCodeAt(i++)),(h>=E||h>P((w-v)/s))&&a("overflow"),v+=h*s,l=m>=u?A:u>=m+x?x:u-m,!(l>h);u+=E)d=E-l,s>P(w/d)&&a("overflow"),s*=d;e=g.length+1,m=p(v-o,e,0==o),P(v/e)>w-b&&a("overflow"),b+=P(v/e),v%=e,g.splice(v++,0,b)}return c(g)}function g(t){var e,n,r,i,o,s,u,c,f,d,g,y,v,b,m,S=[];for(t=h(t),y=t.length,e=T,n=0,o=C,s=0;y>s;++s)g=t[s],128>g&&S.push(U(g));for(r=i=S.length,i&&S.push(_);y>r;){for(u=w,s=0;y>s;++s)g=t[s],g>=e&&u>g&&(u=g);for(v=r+1,u-e>P((w-n)/v)&&a("overflow"),n+=(u-e)*v,e=u,s=0;y>s;++s)if(g=t[s],e>g&&++n>w&&a("overflow"),g==e){for(c=n,f=E;d=o>=f?A:f>=o+x?x:f-o,!(d>c);f+=E)m=c-d,b=E-d,S.push(U(l(d+m%b,0))),c=P(m/b);S.push(U(l(c,0))),o=p(n,v,r==i),n=0,++r}++n,++e}return S.join("")}function y(t){return u(t,function(t){return O.test(t)?d(t.slice(4).toLowerCase()):t})}function v(t){return u(t,function(t){return B.test(t)?"xn--"+g(t):t})}var b=("object"==typeof e&&e&&!e.nodeType&&e,"object"==typeof t&&t&&!t.nodeType&&t,"object"==typeof i&&i);b.global!==b&&b.window!==b&&b.self!==b||(o=b);var m,w=2147483647,E=36,A=1,x=26,S=38,k=700,C=72,T=128,_="-",O=/^xn--/,B=/[^\x20-\x7E]/,L=/[\x2E\u3002\uFF0E\uFF61]/g,R={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},j=E-A,P=Math.floor,U=String.fromCharCode;m={version:"1.3.2",ucs2:{decode:h,encode:c},decode:d,encode:g,toASCII:v,toUnicode:y},r=function(){return m}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))}(this)}).call(e,n(220)(t),function(){return this}())},478:function(t,e,n){function r(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function i(t,e,n){if(t&&h(t)&&t instanceof r)return t;var i=new r;return i.parse(t,e,n),i}function o(t){return u(t)&&(t=i(t)),t instanceof r?t.format():r.prototype.format.call(t)}function a(t,e){return i(t,!1,!0).resolve(e)}function s(t,e){return t?i(t,!1,!0).resolveObject(e):e}function u(t){return"string"==typeof t}function h(t){return"object"==typeof t&&null!==t}function c(t){return null===t}function f(t){return null==t}var l=n(477);e.parse=i,e.resolve=a,e.resolveObject=s,e.format=o,e.Url=r;var p=/^([a-z0-9.+-]+:)/i,d=/:[0-9]*$/,g=["<",">",'"',"`"," ","\r","\n","	"],y=["{","}","|","\\","^","`"].concat(g),v=["'"].concat(y),b=["%","/","?",";","#"].concat(v),m=["/","?","#"],w=255,E=/^[a-z0-9A-Z_-]{0,63}$/,A=/^([a-z0-9A-Z_-]{0,63})(.*)$/,x={javascript:!0,"javascript:":!0},S={javascript:!0,"javascript:":!0},k={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},C=n(356);r.prototype.parse=function(t,e,n){if(!u(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var r=t;r=r.trim();var i=p.exec(r);if(i){i=i[0];var o=i.toLowerCase();this.protocol=o,r=r.substr(i.length)}if(n||i||r.match(/^\/\/[^@\/]+@[^@\/]+/)){var a="//"===r.substr(0,2);!a||i&&S[i]||(r=r.substr(2),this.slashes=!0)}if(!S[i]&&(a||i&&!k[i])){for(var s=-1,h=0;h<m.length;h++){var c=r.indexOf(m[h]);-1!==c&&(-1===s||s>c)&&(s=c)}var f,d;d=-1===s?r.lastIndexOf("@"):r.lastIndexOf("@",s),-1!==d&&(f=r.slice(0,d),r=r.slice(d+1),this.auth=decodeURIComponent(f)),s=-1;for(var h=0;h<b.length;h++){var c=r.indexOf(b[h]);-1!==c&&(-1===s||s>c)&&(s=c)}-1===s&&(s=r.length),this.host=r.slice(0,s),r=r.slice(s),this.parseHost(),this.hostname=this.hostname||"";var g="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!g)for(var y=this.hostname.split(/\./),h=0,T=y.length;T>h;h++){var _=y[h];if(_&&!_.match(E)){for(var O="",B=0,L=_.length;L>B;B++)O+=_.charCodeAt(B)>127?"x":_[B];if(!O.match(E)){var R=y.slice(0,h),j=y.slice(h+1),P=_.match(A);P&&(R.push(P[1]),j.unshift(P[2])),j.length&&(r="/"+j.join(".")+r),this.hostname=R.join(".");break}}}if(this.hostname.length>w?this.hostname="":this.hostname=this.hostname.toLowerCase(),!g){for(var U=this.hostname.split("."),W=[],h=0;h<U.length;++h){var I=U[h];W.push(I.match(/[^A-Za-z0-9_-]/)?"xn--"+l.encode(I):I)}this.hostname=W.join(".")}var D=this.port?":"+this.port:"",M=this.hostname||"";this.host=M+D,this.href+=this.host,g&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==r[0]&&(r="/"+r))}if(!x[o])for(var h=0,T=v.length;T>h;h++){var N=v[h],q=encodeURIComponent(N);q===N&&(q=escape(N)),r=r.split(N).join(q)}var F=r.indexOf("#");-1!==F&&(this.hash=r.substr(F),r=r.slice(0,F));var V=r.indexOf("?");if(-1!==V?(this.search=r.substr(V),this.query=r.substr(V+1),e&&(this.query=C.parse(this.query)),r=r.slice(0,V)):e&&(this.search="",this.query={}),r&&(this.pathname=r),k[o]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var D=this.pathname||"",I=this.search||"";this.path=D+I}return this.href=this.format(),this},r.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",n=this.pathname||"",r=this.hash||"",i=!1,o="";this.host?i=t+this.host:this.hostname&&(i=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&h(this.query)&&Object.keys(this.query).length&&(o=C.stringify(this.query));var a=this.search||o&&"?"+o||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||k[e])&&i!==!1?(i="//"+(i||""),n&&"/"!==n.charAt(0)&&(n="/"+n)):i||(i=""),r&&"#"!==r.charAt(0)&&(r="#"+r),a&&"?"!==a.charAt(0)&&(a="?"+a),n=n.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),a=a.replace("#","%23"),e+i+n+a+r},r.prototype.resolve=function(t){return this.resolveObject(i(t,!1,!0)).format()},r.prototype.resolveObject=function(t){if(u(t)){var e=new r;e.parse(t,!1,!0),t=e}var n=new r;if(Object.keys(this).forEach(function(t){n[t]=this[t]},this),n.hash=t.hash,""===t.href)return n.href=n.format(),n;if(t.slashes&&!t.protocol)return Object.keys(t).forEach(function(e){"protocol"!==e&&(n[e]=t[e])}),k[n.protocol]&&n.hostname&&!n.pathname&&(n.path=n.pathname="/"),n.href=n.format(),n;if(t.protocol&&t.protocol!==n.protocol){if(!k[t.protocol])return Object.keys(t).forEach(function(e){n[e]=t[e]}),n.href=n.format(),n;if(n.protocol=t.protocol,t.host||S[t.protocol])n.pathname=t.pathname;else{for(var i=(t.pathname||"").split("/");i.length&&!(t.host=i.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==i[0]&&i.unshift(""),i.length<2&&i.unshift(""),n.pathname=i.join("/")}if(n.search=t.search,n.query=t.query,n.host=t.host||"",n.auth=t.auth,n.hostname=t.hostname||t.host,n.port=t.port,n.pathname||n.search){var o=n.pathname||"",a=n.search||"";n.path=o+a}return n.slashes=n.slashes||t.slashes,n.href=n.format(),n}var s=n.pathname&&"/"===n.pathname.charAt(0),h=t.host||t.pathname&&"/"===t.pathname.charAt(0),l=h||s||n.host&&t.pathname,p=l,d=n.pathname&&n.pathname.split("/")||[],i=t.pathname&&t.pathname.split("/")||[],g=n.protocol&&!k[n.protocol];if(g&&(n.hostname="",n.port=null,n.host&&(""===d[0]?d[0]=n.host:d.unshift(n.host)),n.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===i[0]?i[0]=t.host:i.unshift(t.host)),t.host=null),l=l&&(""===i[0]||""===d[0])),h)n.host=t.host||""===t.host?t.host:n.host,n.hostname=t.hostname||""===t.hostname?t.hostname:n.hostname,n.search=t.search,n.query=t.query,d=i;else if(i.length)d||(d=[]),d.pop(),d=d.concat(i),n.search=t.search,n.query=t.query;else if(!f(t.search)){if(g){n.hostname=n.host=d.shift();var y=n.host&&n.host.indexOf("@")>0?n.host.split("@"):!1;y&&(n.auth=y.shift(),n.host=n.hostname=y.shift())}return n.search=t.search,n.query=t.query,c(n.pathname)&&c(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.href=n.format(),n}if(!d.length)return n.pathname=null,n.search?n.path="/"+n.search:n.path=null,n.href=n.format(),n;for(var v=d.slice(-1)[0],b=(n.host||t.host)&&("."===v||".."===v)||""===v,m=0,w=d.length;w>=0;w--)v=d[w],"."==v?d.splice(w,1):".."===v?(d.splice(w,1),m++):m&&(d.splice(w,1),m--);if(!l&&!p)for(;m--;m)d.unshift("..");!l||""===d[0]||d[0]&&"/"===d[0].charAt(0)||d.unshift(""),b&&"/"!==d.join("/").substr(-1)&&d.push("");var E=""===d[0]||d[0]&&"/"===d[0].charAt(0);if(g){n.hostname=n.host=E?"":d.length?d.shift():"";var y=n.host&&n.host.indexOf("@")>0?n.host.split("@"):!1;y&&(n.auth=y.shift(),n.host=n.hostname=y.shift())}return l=l||n.host&&d.length,l&&!E&&d.unshift(""),d.length?n.pathname=d.join("/"):(n.pathname=null,n.path=null),c(n.pathname)&&c(n.search)||(n.path=(n.pathname?n.pathname:"")+(n.search?n.search:"")),n.auth=t.auth||n.auth,n.slashes=n.slashes||t.slashes,n.href=n.format(),n},r.prototype.parseHost=function(){var t=this.host,e=d.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},479:function(t,e,n){var r;(function(t,i){!function(o){function a(t){for(var e,n,r=[],i=0,o=t.length;o>i;)e=t.charCodeAt(i++),e>=55296&&56319>=e&&o>i?(n=t.charCodeAt(i++),56320==(64512&n)?r.push(((1023&e)<<10)+(1023&n)+65536):(r.push(e),i--)):r.push(e);return r}function s(t){for(var e,n=t.length,r=-1,i="";++r<n;)e=t[r],e>65535&&(e-=65536,i+=w(e>>>10&1023|55296),e=56320|1023&e),i+=w(e);return i}function u(t){if(t>=55296&&57343>=t)throw Error("Lone surrogate U+"+t.toString(16).toUpperCase()+" is not a scalar value")}function h(t,e){return w(t>>e&63|128)}function c(t){if(0==(4294967168&t))return w(t);var e="";return 0==(4294965248&t)?e=w(t>>6&31|192):0==(4294901760&t)?(u(t),e=w(t>>12&15|224),e+=h(t,6)):0==(4292870144&t)&&(e=w(t>>18&7|240),e+=h(t,12),e+=h(t,6)),e+=w(63&t|128)}function f(t){for(var e,n=a(t),r=n.length,i=-1,o="";++i<r;)e=n[i],o+=c(e);return o}function l(){if(m>=b)throw Error("Invalid byte index");var t=255&v[m];if(m++,128==(192&t))return 63&t;throw Error("Invalid continuation byte")}function p(){var t,e,n,r,i;if(m>b)throw Error("Invalid byte index");if(m==b)return!1;if(t=255&v[m],m++,0==(128&t))return t;if(192==(224&t)){var e=l();if(i=(31&t)<<6|e,i>=128)return i;throw Error("Invalid continuation byte")}if(224==(240&t)){if(e=l(),n=l(),i=(15&t)<<12|e<<6|n,i>=2048)return u(i),i;throw Error("Invalid continuation byte")}if(240==(248&t)&&(e=l(),n=l(),r=l(),i=(15&t)<<18|e<<12|n<<6|r,i>=65536&&1114111>=i))return i;throw Error("Invalid UTF-8 detected")}function d(t){v=a(t),b=v.length,m=0;for(var e,n=[];(e=p())!==!1;)n.push(e);return s(n)}var g="object"==typeof e&&e,y=("object"==typeof t&&t&&t.exports==g&&t,"object"==typeof i&&i);y.global!==y&&y.window!==y||(o=y);var v,b,m,w=String.fromCharCode,E={version:"2.0.0",encode:f,decode:d};r=function(){return E}.call(e,n,e,t),!(void 0!==r&&(t.exports=r))}(this)}).call(e,n(220)(t),function(){return this}())},480:function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},481:function(t,e,n){(function(t,r){function i(t,n){var r={seen:[],stylize:a};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),g(n)?r.showHidden=n:n&&e._extend(r,n),E(r.showHidden)&&(r.showHidden=!1),E(r.depth)&&(r.depth=2),E(r.colors)&&(r.colors=!1),E(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=o),u(r,t,r.depth)}function o(t,e){var n=i.styles[e];return n?"["+i.colors[n][0]+"m"+t+"["+i.colors[n][1]+"m":t}function a(t,e){return t}function s(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}function u(t,n,r){if(t.customInspect&&n&&C(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var i=n.inspect(r,t);return m(i)||(i=u(t,i,r)),i}var o=h(t,n);if(o)return o;var a=Object.keys(n),g=s(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(n)),k(n)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return c(n);if(0===a.length){if(C(n)){var y=n.name?": "+n.name:"";return t.stylize("[Function"+y+"]","special")}if(A(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(S(n))return t.stylize(Date.prototype.toString.call(n),"date");if(k(n))return c(n)}var v="",b=!1,w=["{","}"];if(d(n)&&(b=!0,w=["[","]"]),C(n)){var E=n.name?": "+n.name:"";v=" [Function"+E+"]"}if(A(n)&&(v=" "+RegExp.prototype.toString.call(n)),S(n)&&(v=" "+Date.prototype.toUTCString.call(n)),k(n)&&(v=" "+c(n)),0===a.length&&(!b||0==n.length))return w[0]+v+w[1];if(0>r)return A(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special");t.seen.push(n);var x;return x=b?f(t,n,r,g,a):a.map(function(e){return l(t,n,r,g,e,b)}),t.seen.pop(),p(x,v,w)}function h(t,e){if(E(e))return t.stylize("undefined","undefined");if(m(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}return b(e)?t.stylize(""+e,"number"):g(e)?t.stylize(""+e,"boolean"):y(e)?t.stylize("null","null"):void 0}function c(t){return"["+Error.prototype.toString.call(t)+"]"}function f(t,e,n,r,i){for(var o=[],a=0,s=e.length;s>a;++a)L(e,String(a))?o.push(l(t,e,n,r,String(a),!0)):o.push("");return i.forEach(function(i){i.match(/^\d+$/)||o.push(l(t,e,n,r,i,!0))}),o}function l(t,e,n,r,i,o){var a,s,h;if(h=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]},h.get?s=h.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):h.set&&(s=t.stylize("[Setter]","special")),L(r,i)||(a="["+i+"]"),s||(t.seen.indexOf(h.value)<0?(s=y(n)?u(t,h.value,null):u(t,h.value,n-1),s.indexOf("\n")>-1&&(s=o?s.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+s.split("\n").map(function(t){return"   "+t}).join("\n"))):s=t.stylize("[Circular]","special")),E(a)){if(o&&i.match(/^\d+$/))return s;a=JSON.stringify(""+i),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+s}function p(t,e,n){var r=0,i=t.reduce(function(t,e){return r++,e.indexOf("\n")>=0&&r++,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0);return i>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function d(t){return Array.isArray(t)}function g(t){return"boolean"==typeof t}function y(t){return null===t}function v(t){return null==t}function b(t){return"number"==typeof t}function m(t){return"string"==typeof t}function w(t){return"symbol"==typeof t}function E(t){return void 0===t}function A(t){return x(t)&&"[object RegExp]"===_(t)}function x(t){return"object"==typeof t&&null!==t}function S(t){return x(t)&&"[object Date]"===_(t)}function k(t){return x(t)&&("[object Error]"===_(t)||t instanceof Error)}function C(t){return"function"==typeof t}function T(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||"undefined"==typeof t}function _(t){return Object.prototype.toString.call(t)}function O(t){return 10>t?"0"+t.toString(10):t.toString(10)}function B(){var t=new Date,e=[O(t.getHours()),O(t.getMinutes()),O(t.getSeconds())].join(":");return[t.getDate(),U[t.getMonth()],e].join(" ")}function L(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var R=/%[sdj%]/g;e.format=function(t){if(!m(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(i(arguments[n]));return e.join(" ")}for(var n=1,r=arguments,o=r.length,a=String(t).replace(R,function(t){if("%%"===t)return"%";if(n>=o)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return t}}),s=r[n];o>n;s=r[++n])a+=y(s)||!x(s)?" "+s:" "+i(s);return a},e.deprecate=function(n,i){function o(){if(!a){if(r.throwDeprecation)throw new Error(i);r.traceDeprecation?console.trace(i):console.error(i),a=!0}return n.apply(this,arguments)}if(E(t.process))return function(){return e.deprecate(n,i).apply(this,arguments)};if(r.noDeprecation===!0)return n;var a=!1;return o};var j,P={};e.debuglog=function(t){if(E(j)&&(j=r.env.NODE_DEBUG||""),t=t.toUpperCase(),!P[t])if(new RegExp("\\b"+t+"\\b","i").test(j)){var n=r.pid;P[t]=function(){var r=e.format.apply(e,arguments);console.error("%s %d: %s",t,n,r)}}else P[t]=function(){};return P[t]},e.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=d,e.isBoolean=g,e.isNull=y,e.isNullOrUndefined=v,e.isNumber=b,e.isString=m,e.isSymbol=w,e.isUndefined=E,e.isRegExp=A,e.isObject=x,e.isDate=S,e.isError=k,e.isFunction=C,e.isPrimitive=T,e.isBuffer=n(480);var U=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.log=function(){console.log("%s - %s",B(),e.format.apply(e,arguments))},e.inherits=n(31),e._extend=function(t,e){if(!e||!x(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t}}).call(e,function(){return this}(),n(79))},482:function(t,e){},483:function(t,e){}});
=======
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(412)
	var ieee754 = __webpack_require__(413)
	var isArray = __webpack_require__(414)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation

	var rootParent = {}

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
	 *     on objects.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	function typedArraySupport () {
	  function Bar () {}
	  try {
	    var arr = new Uint8Array(1)
	    arr.foo = function () { return 42 }
	    arr.constructor = Bar
	    return arr.foo() === 42 && // typed array instances can be augmented
	        arr.constructor === Bar && // constructor can be set
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (arg) {
	  if (!(this instanceof Buffer)) {
	    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
	    if (arguments.length > 1) return new Buffer(arg, arguments[1])
	    return new Buffer(arg)
	  }

	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    this.length = 0
	    this.parent = undefined
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    return fromNumber(this, arg)
	  }

	  // Slightly less common case.
	  if (typeof arg === 'string') {
	    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
	  }

	  // Unusual.
	  return fromObject(this, arg)
	}

	function fromNumber (that, length) {
	  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < length; i++) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'

	  // Assumption: byteLength() return value is always < kMaxLength.
	  var length = byteLength(string, encoding) | 0
	  that = allocate(that, length)

	  that.write(string, encoding)
	  return that
	}

	function fromObject (that, object) {
	  if (Buffer.isBuffer(object)) return fromBuffer(that, object)

	  if (isArray(object)) return fromArray(that, object)

	  if (object == null) {
	    throw new TypeError('must start with number, buffer, array or string')
	  }

	  if (typeof ArrayBuffer !== 'undefined') {
	    if (object.buffer instanceof ArrayBuffer) {
	      return fromTypedArray(that, object)
	    }
	    if (object instanceof ArrayBuffer) {
	      return fromArrayBuffer(that, object)
	    }
	  }

	  if (object.length) return fromArrayLike(that, object)

	  return fromJsonObject(that, object)
	}

	function fromBuffer (that, buffer) {
	  var length = checked(buffer.length) | 0
	  that = allocate(that, length)
	  buffer.copy(that, 0, 0, length)
	  return that
	}

	function fromArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Duplicate of fromArray() to keep fromArray() monomorphic.
	function fromTypedArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  // Truncating the elements is probably not what people expect from typed
	  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
	  // of the old Buffer constructor.
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    array.byteLength
	    that = Buffer._augment(new Uint8Array(array))
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromTypedArray(that, new Uint8Array(array))
	  }
	  return that
	}

	function fromArrayLike (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
	// Returns a zero-length buffer for inputs that don't conform to the spec.
	function fromJsonObject (that, object) {
	  var array
	  var length = 0

	  if (object.type === 'Buffer' && isArray(object.data)) {
	    array = object.data
	    length = checked(array.length) | 0
	  }
	  that = allocate(that, length)

	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	} else {
	  // pre-set for values that may exist in the future
	  Buffer.prototype.length = undefined
	  Buffer.prototype.parent = undefined
	}

	function allocate (that, length) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = Buffer._augment(new Uint8Array(length))
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that.length = length
	    that._isBuffer = true
	  }

	  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
	  if (fromPool) that.parent = rootParent

	  return that
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (subject, encoding) {
	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)

	  var buf = new Buffer(subject, encoding)
	  delete buf.parent
	  return buf
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  var i = 0
	  var len = Math.min(x, y)
	  while (i < len) {
	    if (a[i] !== b[i]) break

	    ++i
	  }

	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')

	  if (list.length === 0) {
	    return new Buffer(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; i++) {
	      length += list[i].length
	    }
	  }

	  var buf = new Buffer(length)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}

	function byteLength (string, encoding) {
	  if (typeof string !== 'string') string = '' + string

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'binary':
	      // Deprecated
	      case 'raw':
	      case 'raws':
	        return len
	      case 'utf8':
	      case 'utf-8':
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  start = start | 0
	  end = end === undefined || end === Infinity ? this.length : end | 0

	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'binary':
	        return binarySlice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return 0
	  return Buffer.compare(this, b)
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
	  byteOffset >>= 0

	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1

	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

	  if (typeof val === 'string') {
	    if (val.length === 0) return -1 // special case: looking for empty string always fails
	    return String.prototype.indexOf.call(this, val, byteOffset)
	  }
	  if (Buffer.isBuffer(val)) {
	    return arrayIndexOf(this, val, byteOffset)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset)
	  }

	  function arrayIndexOf (arr, val, byteOffset) {
	    var foundIndex = -1
	    for (var i = 0; byteOffset + i < arr.length; i++) {
	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
	      } else {
	        foundIndex = -1
	      }
	    }
	    return -1
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	// `get` is deprecated
	Buffer.prototype.get = function get (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}

	// `set` is deprecated
	Buffer.prototype.set = function set (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) throw new Error('Invalid hex string')
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    var swap = encoding
	    encoding = offset
	    offset = length | 0
	    length = swap
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'binary':
	        return binaryWrite(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function binarySlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  if (newBuf.length) newBuf.parent = this.parent || this

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	  if (offset < 0) throw new RangeError('index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; i--) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; i++) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), targetStart)
	  }

	  return len
	}

	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length

	  if (end < start) throw new RangeError('end < start')

	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return

	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')

	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }

	  return this
	}

	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}

	// HELPER FUNCTIONS
	// ================

	var BP = Buffer.prototype

	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function _augment (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true

	  // save reference to original Uint8Array set method before overwriting
	  arr._set = arr.set

	  // deprecated
	  arr.get = BP.get
	  arr.set = BP.set

	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.indexOf = BP.indexOf
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUIntLE = BP.readUIntLE
	  arr.readUIntBE = BP.readUIntBE
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readIntLE = BP.readIntLE
	  arr.readIntBE = BP.readIntBE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUIntLE = BP.writeUIntLE
	  arr.writeUIntBE = BP.writeUIntBE
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeIntLE = BP.writeIntLE
	  arr.writeIntBE = BP.writeIntBE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer

	  return arr
	}

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; i++) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(411).Buffer, (function() { return this; }())))

/***/ },

/***/ 412:
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

	;(function (exports) {
		'use strict';

	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array

		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
		var PLUS_URL_SAFE = '-'.charCodeAt(0)
		var SLASH_URL_SAFE = '_'.charCodeAt(0)

		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS ||
			    code === PLUS_URL_SAFE)
				return 62 // '+'
			if (code === SLASH ||
			    code === SLASH_URL_SAFE)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}

		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr

			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}

			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)

			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length

			var L = 0

			function push (v) {
				arr[L++] = v
			}

			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}

			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}

			return arr
		}

		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length

			function encode (num) {
				return lookup.charAt(num)
			}

			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}

			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}

			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}

			return output
		}

		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}( false ? (this.base64js = {}) : exports))


/***/ },

/***/ 413:
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },

/***/ 414:
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },

/***/ 415:
/***/ function(module, exports, __webpack_require__) {

	var http = module.exports;
	var EventEmitter = __webpack_require__(416).EventEmitter;
	var Request = __webpack_require__(417);
	var url = __webpack_require__(2)

	http.request = function (params, cb) {
	    if (typeof params === 'string') {
	        params = url.parse(params)
	    }
	    if (!params) params = {};
	    if (!params.host && !params.port) {
	        params.port = parseInt(window.location.port, 10);
	    }
	    if (!params.host && params.hostname) {
	        params.host = params.hostname;
	    }

	    if (!params.protocol) {
	        if (params.scheme) {
	            params.protocol = params.scheme + ':';
	        } else {
	            params.protocol = window.location.protocol;
	        }
	    }

	    if (!params.host) {
	        params.host = window.location.hostname || window.location.host;
	    }
	    if (/:/.test(params.host)) {
	        if (!params.port) {
	            params.port = params.host.split(':')[1];
	        }
	        params.host = params.host.split(':')[0];
	    }
	    if (!params.port) params.port = params.protocol == 'https:' ? 443 : 80;
	    
	    var req = new Request(new xhrHttp, params);
	    if (cb) req.on('response', cb);
	    return req;
	};

	http.get = function (params, cb) {
	    params.method = 'GET';
	    var req = http.request(params, cb);
	    req.end();
	    return req;
	};

	http.Agent = function () {};
	http.Agent.defaultMaxSockets = 4;

	var xhrHttp = (function () {
	    if (typeof window === 'undefined') {
	        throw new Error('no window object present');
	    }
	    else if (window.XMLHttpRequest) {
	        return window.XMLHttpRequest;
	    }
	    else if (window.ActiveXObject) {
	        var axs = [
	            'Msxml2.XMLHTTP.6.0',
	            'Msxml2.XMLHTTP.3.0',
	            'Microsoft.XMLHTTP'
	        ];
	        for (var i = 0; i < axs.length; i++) {
	            try {
	                var ax = new(window.ActiveXObject)(axs[i]);
	                return function () {
	                    if (ax) {
	                        var ax_ = ax;
	                        ax = null;
	                        return ax_;
	                    }
	                    else {
	                        return new(window.ActiveXObject)(axs[i]);
	                    }
	                };
	            }
	            catch (e) {}
	        }
	        throw new Error('ajax not supported in this browser')
	    }
	    else {
	        throw new Error('ajax not supported in this browser');
	    }
	})();

	http.STATUS_CODES = {
	    100 : 'Continue',
	    101 : 'Switching Protocols',
	    102 : 'Processing',                 // RFC 2518, obsoleted by RFC 4918
	    200 : 'OK',
	    201 : 'Created',
	    202 : 'Accepted',
	    203 : 'Non-Authoritative Information',
	    204 : 'No Content',
	    205 : 'Reset Content',
	    206 : 'Partial Content',
	    207 : 'Multi-Status',               // RFC 4918
	    300 : 'Multiple Choices',
	    301 : 'Moved Permanently',
	    302 : 'Moved Temporarily',
	    303 : 'See Other',
	    304 : 'Not Modified',
	    305 : 'Use Proxy',
	    307 : 'Temporary Redirect',
	    400 : 'Bad Request',
	    401 : 'Unauthorized',
	    402 : 'Payment Required',
	    403 : 'Forbidden',
	    404 : 'Not Found',
	    405 : 'Method Not Allowed',
	    406 : 'Not Acceptable',
	    407 : 'Proxy Authentication Required',
	    408 : 'Request Time-out',
	    409 : 'Conflict',
	    410 : 'Gone',
	    411 : 'Length Required',
	    412 : 'Precondition Failed',
	    413 : 'Request Entity Too Large',
	    414 : 'Request-URI Too Large',
	    415 : 'Unsupported Media Type',
	    416 : 'Requested Range Not Satisfiable',
	    417 : 'Expectation Failed',
	    418 : 'I\'m a teapot',              // RFC 2324
	    422 : 'Unprocessable Entity',       // RFC 4918
	    423 : 'Locked',                     // RFC 4918
	    424 : 'Failed Dependency',          // RFC 4918
	    425 : 'Unordered Collection',       // RFC 4918
	    426 : 'Upgrade Required',           // RFC 2817
	    428 : 'Precondition Required',      // RFC 6585
	    429 : 'Too Many Requests',          // RFC 6585
	    431 : 'Request Header Fields Too Large',// RFC 6585
	    500 : 'Internal Server Error',
	    501 : 'Not Implemented',
	    502 : 'Bad Gateway',
	    503 : 'Service Unavailable',
	    504 : 'Gateway Time-out',
	    505 : 'HTTP Version Not Supported',
	    506 : 'Variant Also Negotiates',    // RFC 2295
	    507 : 'Insufficient Storage',       // RFC 4918
	    509 : 'Bandwidth Limit Exceeded',
	    510 : 'Not Extended',               // RFC 2774
	    511 : 'Network Authentication Required' // RFC 6585
	};

/***/ },

/***/ 416:
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ },

/***/ 417:
/***/ function(module, exports, __webpack_require__) {

	var Stream = __webpack_require__(418);
	var Response = __webpack_require__(434);
	var Base64 = __webpack_require__(437);
	var inherits = __webpack_require__(22);

	var Request = module.exports = function (xhr, params) {
	    var self = this;
	    self.writable = true;
	    self.xhr = xhr;
	    self.body = [];
	    
	    self.uri = (params.protocol || 'http:') + '//'
	        + params.host
	        + (params.port ? ':' + params.port : '')
	        + (params.path || '/')
	    ;
	    
	    if (typeof params.withCredentials === 'undefined') {
	        params.withCredentials = true;
	    }

	    try { xhr.withCredentials = params.withCredentials }
	    catch (e) {}
	    
	    if (params.responseType) try { xhr.responseType = params.responseType }
	    catch (e) {}
	    
	    xhr.open(
	        params.method || 'GET',
	        self.uri,
	        true
	    );

	    xhr.onerror = function(event) {
	        self.emit('error', new Error('Network error'));
	    };

	    self._headers = {};
	    
	    if (params.headers) {
	        var keys = objectKeys(params.headers);
	        for (var i = 0; i < keys.length; i++) {
	            var key = keys[i];
	            if (!self.isSafeRequestHeader(key)) continue;
	            var value = params.headers[key];
	            self.setHeader(key, value);
	        }
	    }
	    
	    if (params.auth) {
	        //basic auth
	        this.setHeader('Authorization', 'Basic ' + Base64.btoa(params.auth));
	    }

	    var res = new Response;
	    res.on('close', function () {
	        self.emit('close');
	    });
	    
	    res.on('ready', function () {
	        self.emit('response', res);
	    });

	    res.on('error', function (err) {
	        self.emit('error', err);
	    });
	    
	    xhr.onreadystatechange = function () {
	        // Fix for IE9 bug
	        // SCRIPT575: Could not complete the operation due to error c00c023f
	        // It happens when a request is aborted, calling the success callback anyway with readyState === 4
	        if (xhr.__aborted) return;
	        res.handle(xhr);
	    };
	};

	inherits(Request, Stream);

	Request.prototype.setHeader = function (key, value) {
	    this._headers[key.toLowerCase()] = value
	};

	Request.prototype.getHeader = function (key) {
	    return this._headers[key.toLowerCase()]
	};

	Request.prototype.removeHeader = function (key) {
	    delete this._headers[key.toLowerCase()]
	};

	Request.prototype.write = function (s) {
	    this.body.push(s);
	};

	Request.prototype.destroy = function (s) {
	    this.xhr.__aborted = true;
	    this.xhr.abort();
	    this.emit('close');
	};

	Request.prototype.end = function (s) {
	    if (s !== undefined) this.body.push(s);

	    var keys = objectKeys(this._headers);
	    for (var i = 0; i < keys.length; i++) {
	        var key = keys[i];
	        var value = this._headers[key];
	        if (isArray(value)) {
	            for (var j = 0; j < value.length; j++) {
	                this.xhr.setRequestHeader(key, value[j]);
	            }
	        }
	        else this.xhr.setRequestHeader(key, value)
	    }

	    if (this.body.length === 0) {
	        this.xhr.send('');
	    }
	    else if (typeof this.body[0] === 'string') {
	        this.xhr.send(this.body.join(''));
	    }
	    else if (isArray(this.body[0])) {
	        var body = [];
	        for (var i = 0; i < this.body.length; i++) {
	            body.push.apply(body, this.body[i]);
	        }
	        this.xhr.send(body);
	    }
	    else if (/Array/.test(Object.prototype.toString.call(this.body[0]))) {
	        var len = 0;
	        for (var i = 0; i < this.body.length; i++) {
	            len += this.body[i].length;
	        }
	        var body = new(this.body[0].constructor)(len);
	        var k = 0;
	        
	        for (var i = 0; i < this.body.length; i++) {
	            var b = this.body[i];
	            for (var j = 0; j < b.length; j++) {
	                body[k++] = b[j];
	            }
	        }
	        this.xhr.send(body);
	    }
	    else if (isXHR2Compatible(this.body[0])) {
	        this.xhr.send(this.body[0]);
	    }
	    else {
	        var body = '';
	        for (var i = 0; i < this.body.length; i++) {
	            body += this.body[i].toString();
	        }
	        this.xhr.send(body);
	    }
	};

	// Taken from http://dxr.mozilla.org/mozilla/mozilla-central/content/base/src/nsXMLHttpRequest.cpp.html
	Request.unsafeHeaders = [
	    "accept-charset",
	    "accept-encoding",
	    "access-control-request-headers",
	    "access-control-request-method",
	    "connection",
	    "content-length",
	    "cookie",
	    "cookie2",
	    "content-transfer-encoding",
	    "date",
	    "expect",
	    "host",
	    "keep-alive",
	    "origin",
	    "referer",
	    "te",
	    "trailer",
	    "transfer-encoding",
	    "upgrade",
	    "user-agent",
	    "via"
	];

	Request.prototype.isSafeRequestHeader = function (headerName) {
	    if (!headerName) return false;
	    return indexOf(Request.unsafeHeaders, headerName.toLowerCase()) === -1;
	};

	var objectKeys = Object.keys || function (obj) {
	    var keys = [];
	    for (var key in obj) keys.push(key);
	    return keys;
	};

	var isArray = Array.isArray || function (xs) {
	    return Object.prototype.toString.call(xs) === '[object Array]';
	};

	var indexOf = function (xs, x) {
	    if (xs.indexOf) return xs.indexOf(x);
	    for (var i = 0; i < xs.length; i++) {
	        if (xs[i] === x) return i;
	    }
	    return -1;
	};

	var isXHR2Compatible = function (obj) {
	    if (typeof Blob !== 'undefined' && obj instanceof Blob) return true;
	    if (typeof ArrayBuffer !== 'undefined' && obj instanceof ArrayBuffer) return true;
	    if (typeof FormData !== 'undefined' && obj instanceof FormData) return true;
	};


/***/ },

/***/ 418:
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Stream;

	var EE = __webpack_require__(416).EventEmitter;
	var inherits = __webpack_require__(22);

	inherits(Stream, EE);
	Stream.Readable = __webpack_require__(419);
	Stream.Writable = __webpack_require__(430);
	Stream.Duplex = __webpack_require__(431);
	Stream.Transform = __webpack_require__(432);
	Stream.PassThrough = __webpack_require__(433);

	// Backwards-compat with node 0.4.x
	Stream.Stream = Stream;



	// old-style streams.  Note that the pipe method (the only relevant
	// part of this class) is overridden in the Readable class.

	function Stream() {
	  EE.call(this);
	}

	Stream.prototype.pipe = function(dest, options) {
	  var source = this;

	  function ondata(chunk) {
	    if (dest.writable) {
	      if (false === dest.write(chunk) && source.pause) {
	        source.pause();
	      }
	    }
	  }

	  source.on('data', ondata);

	  function ondrain() {
	    if (source.readable && source.resume) {
	      source.resume();
	    }
	  }

	  dest.on('drain', ondrain);

	  // If the 'end' option is not supplied, dest.end() will be called when
	  // source gets the 'end' or 'close' events.  Only dest.end() once.
	  if (!dest._isStdio && (!options || options.end !== false)) {
	    source.on('end', onend);
	    source.on('close', onclose);
	  }

	  var didOnEnd = false;
	  function onend() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    dest.end();
	  }


	  function onclose() {
	    if (didOnEnd) return;
	    didOnEnd = true;

	    if (typeof dest.destroy === 'function') dest.destroy();
	  }

	  // don't leave dangling pipes when there are errors.
	  function onerror(er) {
	    cleanup();
	    if (EE.listenerCount(this, 'error') === 0) {
	      throw er; // Unhandled stream error in pipe.
	    }
	  }

	  source.on('error', onerror);
	  dest.on('error', onerror);

	  // remove all the event listeners that were added.
	  function cleanup() {
	    source.removeListener('data', ondata);
	    dest.removeListener('drain', ondrain);

	    source.removeListener('end', onend);
	    source.removeListener('close', onclose);

	    source.removeListener('error', onerror);
	    dest.removeListener('error', onerror);

	    source.removeListener('end', cleanup);
	    source.removeListener('close', cleanup);

	    dest.removeListener('close', cleanup);
	  }

	  source.on('end', cleanup);
	  source.on('close', cleanup);

	  dest.on('close', cleanup);

	  dest.emit('pipe', source);

	  // Allow for unix-like usage: A.pipe(B).pipe(C)
	  return dest;
	};


/***/ },

/***/ 419:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(420);
	exports.Stream = __webpack_require__(418);
	exports.Readable = exports;
	exports.Writable = __webpack_require__(426);
	exports.Duplex = __webpack_require__(425);
	exports.Transform = __webpack_require__(428);
	exports.PassThrough = __webpack_require__(429);


/***/ },

/***/ 420:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	module.exports = Readable;

	/*<replacement>*/
	var isArray = __webpack_require__(422);
	/*</replacement>*/


	/*<replacement>*/
	var Buffer = __webpack_require__(411).Buffer;
	/*</replacement>*/

	Readable.ReadableState = ReadableState;

	var EE = __webpack_require__(416).EventEmitter;

	/*<replacement>*/
	if (!EE.listenerCount) EE.listenerCount = function(emitter, type) {
	  return emitter.listeners(type).length;
	};
	/*</replacement>*/

	var Stream = __webpack_require__(418);

	/*<replacement>*/
	var util = __webpack_require__(423);
	util.inherits = __webpack_require__(22);
	/*</replacement>*/

	var StringDecoder;


	/*<replacement>*/
	var debug = __webpack_require__(424);
	if (debug && debug.debuglog) {
	  debug = debug.debuglog('stream');
	} else {
	  debug = function () {};
	}
	/*</replacement>*/


	util.inherits(Readable, Stream);

	function ReadableState(options, stream) {
	  var Duplex = __webpack_require__(425);

	  options = options || {};

	  // the point at which it stops calling _read() to fill the buffer
	  // Note: 0 is a valid value, means "don't call _read preemptively ever"
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.buffer = [];
	  this.length = 0;
	  this.pipes = null;
	  this.pipesCount = 0;
	  this.flowing = null;
	  this.ended = false;
	  this.endEmitted = false;
	  this.reading = false;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // whenever we return null, then we set a flag to say
	  // that we're awaiting a 'readable' event emission.
	  this.needReadable = false;
	  this.emittedReadable = false;
	  this.readableListening = false;


	  // object stream flag. Used to make read(n) ignore n and to
	  // make all the buffer merging and length checks go away
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.readableObjectMode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // when piping, we only care about 'readable' events that happen
	  // after read()ing all the bytes and not getting any pushback.
	  this.ranOut = false;

	  // the number of writers that are awaiting a drain event in .pipe()s
	  this.awaitDrain = 0;

	  // if true, a maybeReadMore has been scheduled
	  this.readingMore = false;

	  this.decoder = null;
	  this.encoding = null;
	  if (options.encoding) {
	    if (!StringDecoder)
	      StringDecoder = __webpack_require__(427).StringDecoder;
	    this.decoder = new StringDecoder(options.encoding);
	    this.encoding = options.encoding;
	  }
	}

	function Readable(options) {
	  var Duplex = __webpack_require__(425);

	  if (!(this instanceof Readable))
	    return new Readable(options);

	  this._readableState = new ReadableState(options, this);

	  // legacy
	  this.readable = true;

	  Stream.call(this);
	}

	// Manually shove something into the read() buffer.
	// This returns true if the highWaterMark has not been hit yet,
	// similar to how Writable.write() returns true if you should
	// write() some more.
	Readable.prototype.push = function(chunk, encoding) {
	  var state = this._readableState;

	  if (util.isString(chunk) && !state.objectMode) {
	    encoding = encoding || state.defaultEncoding;
	    if (encoding !== state.encoding) {
	      chunk = new Buffer(chunk, encoding);
	      encoding = '';
	    }
	  }

	  return readableAddChunk(this, state, chunk, encoding, false);
	};

	// Unshift should *always* be something directly out of read()
	Readable.prototype.unshift = function(chunk) {
	  var state = this._readableState;
	  return readableAddChunk(this, state, chunk, '', true);
	};

	function readableAddChunk(stream, state, chunk, encoding, addToFront) {
	  var er = chunkInvalid(state, chunk);
	  if (er) {
	    stream.emit('error', er);
	  } else if (util.isNullOrUndefined(chunk)) {
	    state.reading = false;
	    if (!state.ended)
	      onEofChunk(stream, state);
	  } else if (state.objectMode || chunk && chunk.length > 0) {
	    if (state.ended && !addToFront) {
	      var e = new Error('stream.push() after EOF');
	      stream.emit('error', e);
	    } else if (state.endEmitted && addToFront) {
	      var e = new Error('stream.unshift() after end event');
	      stream.emit('error', e);
	    } else {
	      if (state.decoder && !addToFront && !encoding)
	        chunk = state.decoder.write(chunk);

	      if (!addToFront)
	        state.reading = false;

	      // if we want the data now, just emit it.
	      if (state.flowing && state.length === 0 && !state.sync) {
	        stream.emit('data', chunk);
	        stream.read(0);
	      } else {
	        // update the buffer info.
	        state.length += state.objectMode ? 1 : chunk.length;
	        if (addToFront)
	          state.buffer.unshift(chunk);
	        else
	          state.buffer.push(chunk);

	        if (state.needReadable)
	          emitReadable(stream);
	      }

	      maybeReadMore(stream, state);
	    }
	  } else if (!addToFront) {
	    state.reading = false;
	  }

	  return needMoreData(state);
	}



	// if it's past the high water mark, we can push in some more.
	// Also, if we have no data yet, we can stand some
	// more bytes.  This is to work around cases where hwm=0,
	// such as the repl.  Also, if the push() triggered a
	// readable event, and the user called read(largeNumber) such that
	// needReadable was set, then we ought to push more, so that another
	// 'readable' event will be triggered.
	function needMoreData(state) {
	  return !state.ended &&
	         (state.needReadable ||
	          state.length < state.highWaterMark ||
	          state.length === 0);
	}

	// backwards compatibility.
	Readable.prototype.setEncoding = function(enc) {
	  if (!StringDecoder)
	    StringDecoder = __webpack_require__(427).StringDecoder;
	  this._readableState.decoder = new StringDecoder(enc);
	  this._readableState.encoding = enc;
	  return this;
	};

	// Don't raise the hwm > 128MB
	var MAX_HWM = 0x800000;
	function roundUpToNextPowerOf2(n) {
	  if (n >= MAX_HWM) {
	    n = MAX_HWM;
	  } else {
	    // Get the next highest power of 2
	    n--;
	    for (var p = 1; p < 32; p <<= 1) n |= n >> p;
	    n++;
	  }
	  return n;
	}

	function howMuchToRead(n, state) {
	  if (state.length === 0 && state.ended)
	    return 0;

	  if (state.objectMode)
	    return n === 0 ? 0 : 1;

	  if (isNaN(n) || util.isNull(n)) {
	    // only flow one buffer at a time
	    if (state.flowing && state.buffer.length)
	      return state.buffer[0].length;
	    else
	      return state.length;
	  }

	  if (n <= 0)
	    return 0;

	  // If we're asking for more than the target buffer level,
	  // then raise the water mark.  Bump up to the next highest
	  // power of 2, to prevent increasing it excessively in tiny
	  // amounts.
	  if (n > state.highWaterMark)
	    state.highWaterMark = roundUpToNextPowerOf2(n);

	  // don't have that much.  return null, unless we've ended.
	  if (n > state.length) {
	    if (!state.ended) {
	      state.needReadable = true;
	      return 0;
	    } else
	      return state.length;
	  }

	  return n;
	}

	// you can override either this method, or the async _read(n) below.
	Readable.prototype.read = function(n) {
	  debug('read', n);
	  var state = this._readableState;
	  var nOrig = n;

	  if (!util.isNumber(n) || n > 0)
	    state.emittedReadable = false;

	  // if we're doing read(0) to trigger a readable event, but we
	  // already have a bunch of data in the buffer, then just trigger
	  // the 'readable' event and move on.
	  if (n === 0 &&
	      state.needReadable &&
	      (state.length >= state.highWaterMark || state.ended)) {
	    debug('read: emitReadable', state.length, state.ended);
	    if (state.length === 0 && state.ended)
	      endReadable(this);
	    else
	      emitReadable(this);
	    return null;
	  }

	  n = howMuchToRead(n, state);

	  // if we've ended, and we're now clear, then finish it up.
	  if (n === 0 && state.ended) {
	    if (state.length === 0)
	      endReadable(this);
	    return null;
	  }

	  // All the actual chunk generation logic needs to be
	  // *below* the call to _read.  The reason is that in certain
	  // synthetic stream cases, such as passthrough streams, _read
	  // may be a completely synchronous operation which may change
	  // the state of the read buffer, providing enough data when
	  // before there was *not* enough.
	  //
	  // So, the steps are:
	  // 1. Figure out what the state of things will be after we do
	  // a read from the buffer.
	  //
	  // 2. If that resulting state will trigger a _read, then call _read.
	  // Note that this may be asynchronous, or synchronous.  Yes, it is
	  // deeply ugly to write APIs this way, but that still doesn't mean
	  // that the Readable class should behave improperly, as streams are
	  // designed to be sync/async agnostic.
	  // Take note if the _read call is sync or async (ie, if the read call
	  // has returned yet), so that we know whether or not it's safe to emit
	  // 'readable' etc.
	  //
	  // 3. Actually pull the requested chunks out of the buffer and return.

	  // if we need a readable event, then we need to do some reading.
	  var doRead = state.needReadable;
	  debug('need readable', doRead);

	  // if we currently have less than the highWaterMark, then also read some
	  if (state.length === 0 || state.length - n < state.highWaterMark) {
	    doRead = true;
	    debug('length less than watermark', doRead);
	  }

	  // however, if we've ended, then there's no point, and if we're already
	  // reading, then it's unnecessary.
	  if (state.ended || state.reading) {
	    doRead = false;
	    debug('reading or ended', doRead);
	  }

	  if (doRead) {
	    debug('do read');
	    state.reading = true;
	    state.sync = true;
	    // if the length is currently zero, then we *need* a readable event.
	    if (state.length === 0)
	      state.needReadable = true;
	    // call internal read method
	    this._read(state.highWaterMark);
	    state.sync = false;
	  }

	  // If _read pushed data synchronously, then `reading` will be false,
	  // and we need to re-evaluate how much data we can return to the user.
	  if (doRead && !state.reading)
	    n = howMuchToRead(nOrig, state);

	  var ret;
	  if (n > 0)
	    ret = fromList(n, state);
	  else
	    ret = null;

	  if (util.isNull(ret)) {
	    state.needReadable = true;
	    n = 0;
	  }

	  state.length -= n;

	  // If we have nothing in the buffer, then we want to know
	  // as soon as we *do* get something into the buffer.
	  if (state.length === 0 && !state.ended)
	    state.needReadable = true;

	  // If we tried to read() past the EOF, then emit end on the next tick.
	  if (nOrig !== n && state.ended && state.length === 0)
	    endReadable(this);

	  if (!util.isNull(ret))
	    this.emit('data', ret);

	  return ret;
	};

	function chunkInvalid(state, chunk) {
	  var er = null;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    er = new TypeError('Invalid non-string/buffer chunk');
	  }
	  return er;
	}


	function onEofChunk(stream, state) {
	  if (state.decoder && !state.ended) {
	    var chunk = state.decoder.end();
	    if (chunk && chunk.length) {
	      state.buffer.push(chunk);
	      state.length += state.objectMode ? 1 : chunk.length;
	    }
	  }
	  state.ended = true;

	  // emit 'readable' now to make sure it gets picked up.
	  emitReadable(stream);
	}

	// Don't emit readable right away in sync mode, because this can trigger
	// another read() call => stack overflow.  This way, it might trigger
	// a nextTick recursion warning, but that's not so bad.
	function emitReadable(stream) {
	  var state = stream._readableState;
	  state.needReadable = false;
	  if (!state.emittedReadable) {
	    debug('emitReadable', state.flowing);
	    state.emittedReadable = true;
	    if (state.sync)
	      process.nextTick(function() {
	        emitReadable_(stream);
	      });
	    else
	      emitReadable_(stream);
	  }
	}

	function emitReadable_(stream) {
	  debug('emit readable');
	  stream.emit('readable');
	  flow(stream);
	}


	// at this point, the user has presumably seen the 'readable' event,
	// and called read() to consume some data.  that may have triggered
	// in turn another _read(n) call, in which case reading = true if
	// it's in progress.
	// However, if we're not ended, or reading, and the length < hwm,
	// then go ahead and try to read some more preemptively.
	function maybeReadMore(stream, state) {
	  if (!state.readingMore) {
	    state.readingMore = true;
	    process.nextTick(function() {
	      maybeReadMore_(stream, state);
	    });
	  }
	}

	function maybeReadMore_(stream, state) {
	  var len = state.length;
	  while (!state.reading && !state.flowing && !state.ended &&
	         state.length < state.highWaterMark) {
	    debug('maybeReadMore read 0');
	    stream.read(0);
	    if (len === state.length)
	      // didn't get any data, stop spinning.
	      break;
	    else
	      len = state.length;
	  }
	  state.readingMore = false;
	}

	// abstract method.  to be overridden in specific implementation classes.
	// call cb(er, data) where data is <= n in length.
	// for virtual (non-string, non-buffer) streams, "length" is somewhat
	// arbitrary, and perhaps not very meaningful.
	Readable.prototype._read = function(n) {
	  this.emit('error', new Error('not implemented'));
	};

	Readable.prototype.pipe = function(dest, pipeOpts) {
	  var src = this;
	  var state = this._readableState;

	  switch (state.pipesCount) {
	    case 0:
	      state.pipes = dest;
	      break;
	    case 1:
	      state.pipes = [state.pipes, dest];
	      break;
	    default:
	      state.pipes.push(dest);
	      break;
	  }
	  state.pipesCount += 1;
	  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

	  var doEnd = (!pipeOpts || pipeOpts.end !== false) &&
	              dest !== process.stdout &&
	              dest !== process.stderr;

	  var endFn = doEnd ? onend : cleanup;
	  if (state.endEmitted)
	    process.nextTick(endFn);
	  else
	    src.once('end', endFn);

	  dest.on('unpipe', onunpipe);
	  function onunpipe(readable) {
	    debug('onunpipe');
	    if (readable === src) {
	      cleanup();
	    }
	  }

	  function onend() {
	    debug('onend');
	    dest.end();
	  }

	  // when the dest drains, it reduces the awaitDrain counter
	  // on the source.  This would be more elegant with a .once()
	  // handler in flow(), but adding and removing repeatedly is
	  // too slow.
	  var ondrain = pipeOnDrain(src);
	  dest.on('drain', ondrain);

	  function cleanup() {
	    debug('cleanup');
	    // cleanup event handlers once the pipe is broken
	    dest.removeListener('close', onclose);
	    dest.removeListener('finish', onfinish);
	    dest.removeListener('drain', ondrain);
	    dest.removeListener('error', onerror);
	    dest.removeListener('unpipe', onunpipe);
	    src.removeListener('end', onend);
	    src.removeListener('end', cleanup);
	    src.removeListener('data', ondata);

	    // if the reader is waiting for a drain event from this
	    // specific writer, then it would cause it to never start
	    // flowing again.
	    // So, if this is awaiting a drain, then we just call it now.
	    // If we don't know, then assume that we are waiting for one.
	    if (state.awaitDrain &&
	        (!dest._writableState || dest._writableState.needDrain))
	      ondrain();
	  }

	  src.on('data', ondata);
	  function ondata(chunk) {
	    debug('ondata');
	    var ret = dest.write(chunk);
	    if (false === ret) {
	      debug('false write response, pause',
	            src._readableState.awaitDrain);
	      src._readableState.awaitDrain++;
	      src.pause();
	    }
	  }

	  // if the dest has an error, then stop piping into it.
	  // however, don't suppress the throwing behavior for this.
	  function onerror(er) {
	    debug('onerror', er);
	    unpipe();
	    dest.removeListener('error', onerror);
	    if (EE.listenerCount(dest, 'error') === 0)
	      dest.emit('error', er);
	  }
	  // This is a brutally ugly hack to make sure that our error handler
	  // is attached before any userland ones.  NEVER DO THIS.
	  if (!dest._events || !dest._events.error)
	    dest.on('error', onerror);
	  else if (isArray(dest._events.error))
	    dest._events.error.unshift(onerror);
	  else
	    dest._events.error = [onerror, dest._events.error];



	  // Both close and finish should trigger unpipe, but only once.
	  function onclose() {
	    dest.removeListener('finish', onfinish);
	    unpipe();
	  }
	  dest.once('close', onclose);
	  function onfinish() {
	    debug('onfinish');
	    dest.removeListener('close', onclose);
	    unpipe();
	  }
	  dest.once('finish', onfinish);

	  function unpipe() {
	    debug('unpipe');
	    src.unpipe(dest);
	  }

	  // tell the dest that it's being piped to
	  dest.emit('pipe', src);

	  // start the flow if it hasn't been started already.
	  if (!state.flowing) {
	    debug('pipe resume');
	    src.resume();
	  }

	  return dest;
	};

	function pipeOnDrain(src) {
	  return function() {
	    var state = src._readableState;
	    debug('pipeOnDrain', state.awaitDrain);
	    if (state.awaitDrain)
	      state.awaitDrain--;
	    if (state.awaitDrain === 0 && EE.listenerCount(src, 'data')) {
	      state.flowing = true;
	      flow(src);
	    }
	  };
	}


	Readable.prototype.unpipe = function(dest) {
	  var state = this._readableState;

	  // if we're not piping anywhere, then do nothing.
	  if (state.pipesCount === 0)
	    return this;

	  // just one destination.  most common case.
	  if (state.pipesCount === 1) {
	    // passed in one, but it's not the right one.
	    if (dest && dest !== state.pipes)
	      return this;

	    if (!dest)
	      dest = state.pipes;

	    // got a match.
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;
	    if (dest)
	      dest.emit('unpipe', this);
	    return this;
	  }

	  // slow case. multiple pipe destinations.

	  if (!dest) {
	    // remove all.
	    var dests = state.pipes;
	    var len = state.pipesCount;
	    state.pipes = null;
	    state.pipesCount = 0;
	    state.flowing = false;

	    for (var i = 0; i < len; i++)
	      dests[i].emit('unpipe', this);
	    return this;
	  }

	  // try to find the right one.
	  var i = indexOf(state.pipes, dest);
	  if (i === -1)
	    return this;

	  state.pipes.splice(i, 1);
	  state.pipesCount -= 1;
	  if (state.pipesCount === 1)
	    state.pipes = state.pipes[0];

	  dest.emit('unpipe', this);

	  return this;
	};

	// set up data events if they are asked for
	// Ensure readable listeners eventually get something
	Readable.prototype.on = function(ev, fn) {
	  var res = Stream.prototype.on.call(this, ev, fn);

	  // If listening to data, and it has not explicitly been paused,
	  // then call resume to start the flow of data on the next tick.
	  if (ev === 'data' && false !== this._readableState.flowing) {
	    this.resume();
	  }

	  if (ev === 'readable' && this.readable) {
	    var state = this._readableState;
	    if (!state.readableListening) {
	      state.readableListening = true;
	      state.emittedReadable = false;
	      state.needReadable = true;
	      if (!state.reading) {
	        var self = this;
	        process.nextTick(function() {
	          debug('readable nexttick read 0');
	          self.read(0);
	        });
	      } else if (state.length) {
	        emitReadable(this, state);
	      }
	    }
	  }

	  return res;
	};
	Readable.prototype.addListener = Readable.prototype.on;

	// pause() and resume() are remnants of the legacy readable stream API
	// If the user uses them, then switch into old mode.
	Readable.prototype.resume = function() {
	  var state = this._readableState;
	  if (!state.flowing) {
	    debug('resume');
	    state.flowing = true;
	    if (!state.reading) {
	      debug('resume read 0');
	      this.read(0);
	    }
	    resume(this, state);
	  }
	  return this;
	};

	function resume(stream, state) {
	  if (!state.resumeScheduled) {
	    state.resumeScheduled = true;
	    process.nextTick(function() {
	      resume_(stream, state);
	    });
	  }
	}

	function resume_(stream, state) {
	  state.resumeScheduled = false;
	  stream.emit('resume');
	  flow(stream);
	  if (state.flowing && !state.reading)
	    stream.read(0);
	}

	Readable.prototype.pause = function() {
	  debug('call pause flowing=%j', this._readableState.flowing);
	  if (false !== this._readableState.flowing) {
	    debug('pause');
	    this._readableState.flowing = false;
	    this.emit('pause');
	  }
	  return this;
	};

	function flow(stream) {
	  var state = stream._readableState;
	  debug('flow', state.flowing);
	  if (state.flowing) {
	    do {
	      var chunk = stream.read();
	    } while (null !== chunk && state.flowing);
	  }
	}

	// wrap an old-style stream as the async data source.
	// This is *not* part of the readable stream interface.
	// It is an ugly unfortunate mess of history.
	Readable.prototype.wrap = function(stream) {
	  var state = this._readableState;
	  var paused = false;

	  var self = this;
	  stream.on('end', function() {
	    debug('wrapped end');
	    if (state.decoder && !state.ended) {
	      var chunk = state.decoder.end();
	      if (chunk && chunk.length)
	        self.push(chunk);
	    }

	    self.push(null);
	  });

	  stream.on('data', function(chunk) {
	    debug('wrapped data');
	    if (state.decoder)
	      chunk = state.decoder.write(chunk);
	    if (!chunk || !state.objectMode && !chunk.length)
	      return;

	    var ret = self.push(chunk);
	    if (!ret) {
	      paused = true;
	      stream.pause();
	    }
	  });

	  // proxy all the other methods.
	  // important when wrapping filters and duplexes.
	  for (var i in stream) {
	    if (util.isFunction(stream[i]) && util.isUndefined(this[i])) {
	      this[i] = function(method) { return function() {
	        return stream[method].apply(stream, arguments);
	      }}(i);
	    }
	  }

	  // proxy certain important events.
	  var events = ['error', 'close', 'destroy', 'pause', 'resume'];
	  forEach(events, function(ev) {
	    stream.on(ev, self.emit.bind(self, ev));
	  });

	  // when we try to consume some more bytes, simply unpause the
	  // underlying stream.
	  self._read = function(n) {
	    debug('wrapped _read', n);
	    if (paused) {
	      paused = false;
	      stream.resume();
	    }
	  };

	  return self;
	};



	// exposed for testing purposes only.
	Readable._fromList = fromList;

	// Pluck off n bytes from an array of buffers.
	// Length is the combined lengths of all the buffers in the list.
	function fromList(n, state) {
	  var list = state.buffer;
	  var length = state.length;
	  var stringMode = !!state.decoder;
	  var objectMode = !!state.objectMode;
	  var ret;

	  // nothing in the list, definitely empty.
	  if (list.length === 0)
	    return null;

	  if (length === 0)
	    ret = null;
	  else if (objectMode)
	    ret = list.shift();
	  else if (!n || n >= length) {
	    // read it all, truncate the array.
	    if (stringMode)
	      ret = list.join('');
	    else
	      ret = Buffer.concat(list, length);
	    list.length = 0;
	  } else {
	    // read just some of it.
	    if (n < list[0].length) {
	      // just take a part of the first list item.
	      // slice is the same for buffers and strings.
	      var buf = list[0];
	      ret = buf.slice(0, n);
	      list[0] = buf.slice(n);
	    } else if (n === list[0].length) {
	      // first list is a perfect match
	      ret = list.shift();
	    } else {
	      // complex case.
	      // we have enough to cover it, but it spans past the first buffer.
	      if (stringMode)
	        ret = '';
	      else
	        ret = new Buffer(n);

	      var c = 0;
	      for (var i = 0, l = list.length; i < l && c < n; i++) {
	        var buf = list[0];
	        var cpy = Math.min(n - c, buf.length);

	        if (stringMode)
	          ret += buf.slice(0, cpy);
	        else
	          buf.copy(ret, c, 0, cpy);

	        if (cpy < buf.length)
	          list[0] = buf.slice(cpy);
	        else
	          list.shift();

	        c += cpy;
	      }
	    }
	  }

	  return ret;
	}

	function endReadable(stream) {
	  var state = stream._readableState;

	  // If we get here before consuming all the bytes, then that is a
	  // bug in node.  Should never happen.
	  if (state.length > 0)
	    throw new Error('endReadable called on non-empty stream');

	  if (!state.endEmitted) {
	    state.ended = true;
	    process.nextTick(function() {
	      // Check that we didn't get one last unshift.
	      if (!state.endEmitted && state.length === 0) {
	        state.endEmitted = true;
	        stream.readable = false;
	        stream.emit('end');
	      }
	    });
	  }
	}

	function forEach (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	function indexOf (xs, x) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    if (xs[i] === x) return i;
	  }
	  return -1;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(421)))

/***/ },

/***/ 421:
/***/ function(module, exports) {

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },

/***/ 422:
/***/ function(module, exports) {

	module.exports = Array.isArray || function (arr) {
	  return Object.prototype.toString.call(arr) == '[object Array]';
	};


/***/ },

/***/ 423:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.

	function isArray(arg) {
	  if (Array.isArray) {
	    return Array.isArray(arg);
	  }
	  return objectToString(arg) === '[object Array]';
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = Buffer.isBuffer;

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(411).Buffer))

/***/ },

/***/ 424:
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a duplex stream is just a stream that is both readable and writable.
	// Since JS doesn't have multiple prototypal inheritance, this class
	// prototypally inherits from Readable, and then parasitically from
	// Writable.

	module.exports = Duplex;

	/*<replacement>*/
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}
	/*</replacement>*/


	/*<replacement>*/
	var util = __webpack_require__(423);
	util.inherits = __webpack_require__(22);
	/*</replacement>*/

	var Readable = __webpack_require__(420);
	var Writable = __webpack_require__(426);

	util.inherits(Duplex, Readable);

	forEach(objectKeys(Writable.prototype), function(method) {
	  if (!Duplex.prototype[method])
	    Duplex.prototype[method] = Writable.prototype[method];
	});

	function Duplex(options) {
	  if (!(this instanceof Duplex))
	    return new Duplex(options);

	  Readable.call(this, options);
	  Writable.call(this, options);

	  if (options && options.readable === false)
	    this.readable = false;

	  if (options && options.writable === false)
	    this.writable = false;

	  this.allowHalfOpen = true;
	  if (options && options.allowHalfOpen === false)
	    this.allowHalfOpen = false;

	  this.once('end', onend);
	}

	// the no-half-open enforcer
	function onend() {
	  // if we allow half-open state, or if the writable side ended,
	  // then we're ok.
	  if (this.allowHalfOpen || this._writableState.ended)
	    return;

	  // no more data can be written.
	  // But allow more writes to happen in this tick.
	  process.nextTick(this.end.bind(this));
	}

	function forEach (xs, f) {
	  for (var i = 0, l = xs.length; i < l; i++) {
	    f(xs[i], i);
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(421)))

/***/ },

/***/ 426:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// A bit simpler than readable streams.
	// Implement an async ._write(chunk, cb), and it'll handle all
	// the drain event emission and buffering.

	module.exports = Writable;

	/*<replacement>*/
	var Buffer = __webpack_require__(411).Buffer;
	/*</replacement>*/

	Writable.WritableState = WritableState;


	/*<replacement>*/
	var util = __webpack_require__(423);
	util.inherits = __webpack_require__(22);
	/*</replacement>*/

	var Stream = __webpack_require__(418);

	util.inherits(Writable, Stream);

	function WriteReq(chunk, encoding, cb) {
	  this.chunk = chunk;
	  this.encoding = encoding;
	  this.callback = cb;
	}

	function WritableState(options, stream) {
	  var Duplex = __webpack_require__(425);

	  options = options || {};

	  // the point at which write() starts returning false
	  // Note: 0 is a valid value, means that we always return false if
	  // the entire buffer is not flushed immediately on write()
	  var hwm = options.highWaterMark;
	  var defaultHwm = options.objectMode ? 16 : 16 * 1024;
	  this.highWaterMark = (hwm || hwm === 0) ? hwm : defaultHwm;

	  // object stream flag to indicate whether or not this stream
	  // contains buffers or objects.
	  this.objectMode = !!options.objectMode;

	  if (stream instanceof Duplex)
	    this.objectMode = this.objectMode || !!options.writableObjectMode;

	  // cast to ints.
	  this.highWaterMark = ~~this.highWaterMark;

	  this.needDrain = false;
	  // at the start of calling end()
	  this.ending = false;
	  // when end() has been called, and returned
	  this.ended = false;
	  // when 'finish' is emitted
	  this.finished = false;

	  // should we decode strings into buffers before passing to _write?
	  // this is here so that some node-core streams can optimize string
	  // handling at a lower level.
	  var noDecode = options.decodeStrings === false;
	  this.decodeStrings = !noDecode;

	  // Crypto is kind of old and crusty.  Historically, its default string
	  // encoding is 'binary' so we have to make this configurable.
	  // Everything else in the universe uses 'utf8', though.
	  this.defaultEncoding = options.defaultEncoding || 'utf8';

	  // not an actual buffer we keep track of, but a measurement
	  // of how much we're waiting to get pushed to some underlying
	  // socket or file.
	  this.length = 0;

	  // a flag to see when we're in the middle of a write.
	  this.writing = false;

	  // when true all writes will be buffered until .uncork() call
	  this.corked = 0;

	  // a flag to be able to tell if the onwrite cb is called immediately,
	  // or on a later tick.  We set this to true at first, because any
	  // actions that shouldn't happen until "later" should generally also
	  // not happen before the first write call.
	  this.sync = true;

	  // a flag to know if we're processing previously buffered items, which
	  // may call the _write() callback in the same tick, so that we don't
	  // end up in an overlapped onwrite situation.
	  this.bufferProcessing = false;

	  // the callback that's passed to _write(chunk,cb)
	  this.onwrite = function(er) {
	    onwrite(stream, er);
	  };

	  // the callback that the user supplies to write(chunk,encoding,cb)
	  this.writecb = null;

	  // the amount that is being written when _write is called.
	  this.writelen = 0;

	  this.buffer = [];

	  // number of pending user-supplied write callbacks
	  // this must be 0 before 'finish' can be emitted
	  this.pendingcb = 0;

	  // emit prefinish if the only thing we're waiting for is _write cbs
	  // This is relevant for synchronous Transform streams
	  this.prefinished = false;

	  // True if the error was already emitted and should not be thrown again
	  this.errorEmitted = false;
	}

	function Writable(options) {
	  var Duplex = __webpack_require__(425);

	  // Writable ctor is applied to Duplexes, though they're not
	  // instanceof Writable, they're instanceof Readable.
	  if (!(this instanceof Writable) && !(this instanceof Duplex))
	    return new Writable(options);

	  this._writableState = new WritableState(options, this);

	  // legacy.
	  this.writable = true;

	  Stream.call(this);
	}

	// Otherwise people can pipe Writable streams, which is just wrong.
	Writable.prototype.pipe = function() {
	  this.emit('error', new Error('Cannot pipe. Not readable.'));
	};


	function writeAfterEnd(stream, state, cb) {
	  var er = new Error('write after end');
	  // TODO: defer error events consistently everywhere, not just the cb
	  stream.emit('error', er);
	  process.nextTick(function() {
	    cb(er);
	  });
	}

	// If we get something that is not a buffer, string, null, or undefined,
	// and we're not in objectMode, then that's an error.
	// Otherwise stream chunks are all considered to be of length=1, and the
	// watermarks determine how many objects to keep in the buffer, rather than
	// how many bytes or characters.
	function validChunk(stream, state, chunk, cb) {
	  var valid = true;
	  if (!util.isBuffer(chunk) &&
	      !util.isString(chunk) &&
	      !util.isNullOrUndefined(chunk) &&
	      !state.objectMode) {
	    var er = new TypeError('Invalid non-string/buffer chunk');
	    stream.emit('error', er);
	    process.nextTick(function() {
	      cb(er);
	    });
	    valid = false;
	  }
	  return valid;
	}

	Writable.prototype.write = function(chunk, encoding, cb) {
	  var state = this._writableState;
	  var ret = false;

	  if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  else if (!encoding)
	    encoding = state.defaultEncoding;

	  if (!util.isFunction(cb))
	    cb = function() {};

	  if (state.ended)
	    writeAfterEnd(this, state, cb);
	  else if (validChunk(this, state, chunk, cb)) {
	    state.pendingcb++;
	    ret = writeOrBuffer(this, state, chunk, encoding, cb);
	  }

	  return ret;
	};

	Writable.prototype.cork = function() {
	  var state = this._writableState;

	  state.corked++;
	};

	Writable.prototype.uncork = function() {
	  var state = this._writableState;

	  if (state.corked) {
	    state.corked--;

	    if (!state.writing &&
	        !state.corked &&
	        !state.finished &&
	        !state.bufferProcessing &&
	        state.buffer.length)
	      clearBuffer(this, state);
	  }
	};

	function decodeChunk(state, chunk, encoding) {
	  if (!state.objectMode &&
	      state.decodeStrings !== false &&
	      util.isString(chunk)) {
	    chunk = new Buffer(chunk, encoding);
	  }
	  return chunk;
	}

	// if we're already writing something, then just put this
	// in the queue, and wait our turn.  Otherwise, call _write
	// If we return false, then we need a drain event, so set that flag.
	function writeOrBuffer(stream, state, chunk, encoding, cb) {
	  chunk = decodeChunk(state, chunk, encoding);
	  if (util.isBuffer(chunk))
	    encoding = 'buffer';
	  var len = state.objectMode ? 1 : chunk.length;

	  state.length += len;

	  var ret = state.length < state.highWaterMark;
	  // we must ensure that previous needDrain will not be reset to false.
	  if (!ret)
	    state.needDrain = true;

	  if (state.writing || state.corked)
	    state.buffer.push(new WriteReq(chunk, encoding, cb));
	  else
	    doWrite(stream, state, false, len, chunk, encoding, cb);

	  return ret;
	}

	function doWrite(stream, state, writev, len, chunk, encoding, cb) {
	  state.writelen = len;
	  state.writecb = cb;
	  state.writing = true;
	  state.sync = true;
	  if (writev)
	    stream._writev(chunk, state.onwrite);
	  else
	    stream._write(chunk, encoding, state.onwrite);
	  state.sync = false;
	}

	function onwriteError(stream, state, sync, er, cb) {
	  if (sync)
	    process.nextTick(function() {
	      state.pendingcb--;
	      cb(er);
	    });
	  else {
	    state.pendingcb--;
	    cb(er);
	  }

	  stream._writableState.errorEmitted = true;
	  stream.emit('error', er);
	}

	function onwriteStateUpdate(state) {
	  state.writing = false;
	  state.writecb = null;
	  state.length -= state.writelen;
	  state.writelen = 0;
	}

	function onwrite(stream, er) {
	  var state = stream._writableState;
	  var sync = state.sync;
	  var cb = state.writecb;

	  onwriteStateUpdate(state);

	  if (er)
	    onwriteError(stream, state, sync, er, cb);
	  else {
	    // Check if we're actually ready to finish, but don't emit yet
	    var finished = needFinish(stream, state);

	    if (!finished &&
	        !state.corked &&
	        !state.bufferProcessing &&
	        state.buffer.length) {
	      clearBuffer(stream, state);
	    }

	    if (sync) {
	      process.nextTick(function() {
	        afterWrite(stream, state, finished, cb);
	      });
	    } else {
	      afterWrite(stream, state, finished, cb);
	    }
	  }
	}

	function afterWrite(stream, state, finished, cb) {
	  if (!finished)
	    onwriteDrain(stream, state);
	  state.pendingcb--;
	  cb();
	  finishMaybe(stream, state);
	}

	// Must force callback to be called on nextTick, so that we don't
	// emit 'drain' before the write() consumer gets the 'false' return
	// value, and has a chance to attach a 'drain' listener.
	function onwriteDrain(stream, state) {
	  if (state.length === 0 && state.needDrain) {
	    state.needDrain = false;
	    stream.emit('drain');
	  }
	}


	// if there's something in the buffer waiting, then process it
	function clearBuffer(stream, state) {
	  state.bufferProcessing = true;

	  if (stream._writev && state.buffer.length > 1) {
	    // Fast case, write everything using _writev()
	    var cbs = [];
	    for (var c = 0; c < state.buffer.length; c++)
	      cbs.push(state.buffer[c].callback);

	    // count the one we are adding, as well.
	    // TODO(isaacs) clean this up
	    state.pendingcb++;
	    doWrite(stream, state, true, state.length, state.buffer, '', function(err) {
	      for (var i = 0; i < cbs.length; i++) {
	        state.pendingcb--;
	        cbs[i](err);
	      }
	    });

	    // Clear buffer
	    state.buffer = [];
	  } else {
	    // Slow case, write chunks one-by-one
	    for (var c = 0; c < state.buffer.length; c++) {
	      var entry = state.buffer[c];
	      var chunk = entry.chunk;
	      var encoding = entry.encoding;
	      var cb = entry.callback;
	      var len = state.objectMode ? 1 : chunk.length;

	      doWrite(stream, state, false, len, chunk, encoding, cb);

	      // if we didn't call the onwrite immediately, then
	      // it means that we need to wait until it does.
	      // also, that means that the chunk and cb are currently
	      // being processed, so move the buffer counter past them.
	      if (state.writing) {
	        c++;
	        break;
	      }
	    }

	    if (c < state.buffer.length)
	      state.buffer = state.buffer.slice(c);
	    else
	      state.buffer.length = 0;
	  }

	  state.bufferProcessing = false;
	}

	Writable.prototype._write = function(chunk, encoding, cb) {
	  cb(new Error('not implemented'));

	};

	Writable.prototype._writev = null;

	Writable.prototype.end = function(chunk, encoding, cb) {
	  var state = this._writableState;

	  if (util.isFunction(chunk)) {
	    cb = chunk;
	    chunk = null;
	    encoding = null;
	  } else if (util.isFunction(encoding)) {
	    cb = encoding;
	    encoding = null;
	  }

	  if (!util.isNullOrUndefined(chunk))
	    this.write(chunk, encoding);

	  // .end() fully uncorks
	  if (state.corked) {
	    state.corked = 1;
	    this.uncork();
	  }

	  // ignore unnecessary end() calls.
	  if (!state.ending && !state.finished)
	    endWritable(this, state, cb);
	};


	function needFinish(stream, state) {
	  return (state.ending &&
	          state.length === 0 &&
	          !state.finished &&
	          !state.writing);
	}

	function prefinish(stream, state) {
	  if (!state.prefinished) {
	    state.prefinished = true;
	    stream.emit('prefinish');
	  }
	}

	function finishMaybe(stream, state) {
	  var need = needFinish(stream, state);
	  if (need) {
	    if (state.pendingcb === 0) {
	      prefinish(stream, state);
	      state.finished = true;
	      stream.emit('finish');
	    } else
	      prefinish(stream, state);
	  }
	  return need;
	}

	function endWritable(stream, state, cb) {
	  state.ending = true;
	  finishMaybe(stream, state);
	  if (cb) {
	    if (state.finished)
	      process.nextTick(cb);
	    else
	      stream.once('finish', cb);
	  }
	  state.ended = true;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(421)))

/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var Buffer = __webpack_require__(411).Buffer;

	var isBufferEncoding = Buffer.isEncoding
	  || function(encoding) {
	       switch (encoding && encoding.toLowerCase()) {
	         case 'hex': case 'utf8': case 'utf-8': case 'ascii': case 'binary': case 'base64': case 'ucs2': case 'ucs-2': case 'utf16le': case 'utf-16le': case 'raw': return true;
	         default: return false;
	       }
	     }


	function assertEncoding(encoding) {
	  if (encoding && !isBufferEncoding(encoding)) {
	    throw new Error('Unknown encoding: ' + encoding);
	  }
	}

	// StringDecoder provides an interface for efficiently splitting a series of
	// buffers into a series of JS strings without breaking apart multi-byte
	// characters. CESU-8 is handled as part of the UTF-8 encoding.
	//
	// @TODO Handling all encodings inside a single object makes it very difficult
	// to reason about this code, so it should be split up in the future.
	// @TODO There should be a utf8-strict encoding that rejects invalid UTF-8 code
	// points as used by CESU-8.
	var StringDecoder = exports.StringDecoder = function(encoding) {
	  this.encoding = (encoding || 'utf8').toLowerCase().replace(/[-_]/, '');
	  assertEncoding(encoding);
	  switch (this.encoding) {
	    case 'utf8':
	      // CESU-8 represents each of Surrogate Pair by 3-bytes
	      this.surrogateSize = 3;
	      break;
	    case 'ucs2':
	    case 'utf16le':
	      // UTF-16 represents each of Surrogate Pair by 2-bytes
	      this.surrogateSize = 2;
	      this.detectIncompleteChar = utf16DetectIncompleteChar;
	      break;
	    case 'base64':
	      // Base-64 stores 3 bytes in 4 chars, and pads the remainder.
	      this.surrogateSize = 3;
	      this.detectIncompleteChar = base64DetectIncompleteChar;
	      break;
	    default:
	      this.write = passThroughWrite;
	      return;
	  }

	  // Enough space to store all bytes of a single character. UTF-8 needs 4
	  // bytes, but CESU-8 may require up to 6 (3 bytes per surrogate).
	  this.charBuffer = new Buffer(6);
	  // Number of bytes received for the current incomplete multi-byte character.
	  this.charReceived = 0;
	  // Number of bytes expected for the current incomplete multi-byte character.
	  this.charLength = 0;
	};


	// write decodes the given buffer and returns it as JS string that is
	// guaranteed to not contain any partial multi-byte characters. Any partial
	// character found at the end of the buffer is buffered up, and will be
	// returned when calling write again with the remaining bytes.
	//
	// Note: Converting a Buffer containing an orphan surrogate to a String
	// currently works, but converting a String to a Buffer (via `new Buffer`, or
	// Buffer#write) will replace incomplete surrogates with the unicode
	// replacement character. See https://codereview.chromium.org/121173009/ .
	StringDecoder.prototype.write = function(buffer) {
	  var charStr = '';
	  // if our last write ended with an incomplete multibyte character
	  while (this.charLength) {
	    // determine how many remaining bytes this buffer has to offer for this char
	    var available = (buffer.length >= this.charLength - this.charReceived) ?
	        this.charLength - this.charReceived :
	        buffer.length;

	    // add the new bytes to the char buffer
	    buffer.copy(this.charBuffer, this.charReceived, 0, available);
	    this.charReceived += available;

	    if (this.charReceived < this.charLength) {
	      // still not enough chars in this buffer? wait for more ...
	      return '';
	    }

	    // remove bytes belonging to the current character from the buffer
	    buffer = buffer.slice(available, buffer.length);

	    // get the character that was split
	    charStr = this.charBuffer.slice(0, this.charLength).toString(this.encoding);

	    // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	    var charCode = charStr.charCodeAt(charStr.length - 1);
	    if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	      this.charLength += this.surrogateSize;
	      charStr = '';
	      continue;
	    }
	    this.charReceived = this.charLength = 0;

	    // if there are no more bytes in this buffer, just emit our char
	    if (buffer.length === 0) {
	      return charStr;
	    }
	    break;
	  }

	  // determine and set charLength / charReceived
	  this.detectIncompleteChar(buffer);

	  var end = buffer.length;
	  if (this.charLength) {
	    // buffer the incomplete character bytes we got
	    buffer.copy(this.charBuffer, 0, buffer.length - this.charReceived, end);
	    end -= this.charReceived;
	  }

	  charStr += buffer.toString(this.encoding, 0, end);

	  var end = charStr.length - 1;
	  var charCode = charStr.charCodeAt(end);
	  // CESU-8: lead surrogate (D800-DBFF) is also the incomplete character
	  if (charCode >= 0xD800 && charCode <= 0xDBFF) {
	    var size = this.surrogateSize;
	    this.charLength += size;
	    this.charReceived += size;
	    this.charBuffer.copy(this.charBuffer, size, 0, size);
	    buffer.copy(this.charBuffer, 0, 0, size);
	    return charStr.substring(0, end);
	  }

	  // or just emit the charStr
	  return charStr;
	};

	// detectIncompleteChar determines if there is an incomplete UTF-8 character at
	// the end of the given buffer. If so, it sets this.charLength to the byte
	// length that character, and sets this.charReceived to the number of bytes
	// that are available for this character.
	StringDecoder.prototype.detectIncompleteChar = function(buffer) {
	  // determine how many bytes we have to check at the end of this buffer
	  var i = (buffer.length >= 3) ? 3 : buffer.length;

	  // Figure out if one of the last i bytes of our buffer announces an
	  // incomplete char.
	  for (; i > 0; i--) {
	    var c = buffer[buffer.length - i];

	    // See http://en.wikipedia.org/wiki/UTF-8#Description

	    // 110XXXXX
	    if (i == 1 && c >> 5 == 0x06) {
	      this.charLength = 2;
	      break;
	    }

	    // 1110XXXX
	    if (i <= 2 && c >> 4 == 0x0E) {
	      this.charLength = 3;
	      break;
	    }

	    // 11110XXX
	    if (i <= 3 && c >> 3 == 0x1E) {
	      this.charLength = 4;
	      break;
	    }
	  }
	  this.charReceived = i;
	};

	StringDecoder.prototype.end = function(buffer) {
	  var res = '';
	  if (buffer && buffer.length)
	    res = this.write(buffer);

	  if (this.charReceived) {
	    var cr = this.charReceived;
	    var buf = this.charBuffer;
	    var enc = this.encoding;
	    res += buf.slice(0, cr).toString(enc);
	  }

	  return res;
	};

	function passThroughWrite(buffer) {
	  return buffer.toString(this.encoding);
	}

	function utf16DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 2;
	  this.charLength = this.charReceived ? 2 : 0;
	}

	function base64DetectIncompleteChar(buffer) {
	  this.charReceived = buffer.length % 3;
	  this.charLength = this.charReceived ? 3 : 0;
	}


/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.


	// a transform stream is a readable/writable stream where you do
	// something with the data.  Sometimes it's called a "filter",
	// but that's not a great name for it, since that implies a thing where
	// some bits pass through, and others are simply ignored.  (That would
	// be a valid example of a transform, of course.)
	//
	// While the output is causally related to the input, it's not a
	// necessarily symmetric or synchronous transformation.  For example,
	// a zlib stream might take multiple plain-text writes(), and then
	// emit a single compressed chunk some time in the future.
	//
	// Here's how this works:
	//
	// The Transform stream has all the aspects of the readable and writable
	// stream classes.  When you write(chunk), that calls _write(chunk,cb)
	// internally, and returns false if there's a lot of pending writes
	// buffered up.  When you call read(), that calls _read(n) until
	// there's enough pending readable data buffered up.
	//
	// In a transform stream, the written data is placed in a buffer.  When
	// _read(n) is called, it transforms the queued up data, calling the
	// buffered _write cb's as it consumes chunks.  If consuming a single
	// written chunk would result in multiple output chunks, then the first
	// outputted bit calls the readcb, and subsequent chunks just go into
	// the read buffer, and will cause it to emit 'readable' if necessary.
	//
	// This way, back-pressure is actually determined by the reading side,
	// since _read has to be called to start processing a new chunk.  However,
	// a pathological inflate type of transform can cause excessive buffering
	// here.  For example, imagine a stream where every byte of input is
	// interpreted as an integer from 0-255, and then results in that many
	// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
	// 1kb of data being output.  In this case, you could write a very small
	// amount of input, and end up with a very large amount of output.  In
	// such a pathological inflating mechanism, there'd be no way to tell
	// the system to stop doing the transform.  A single 4MB write could
	// cause the system to run out of memory.
	//
	// However, even in such a pathological case, only a single written chunk
	// would be consumed, and then the rest would wait (un-transformed) until
	// the results of the previous transformed chunk were consumed.

	module.exports = Transform;

	var Duplex = __webpack_require__(425);

	/*<replacement>*/
	var util = __webpack_require__(423);
	util.inherits = __webpack_require__(22);
	/*</replacement>*/

	util.inherits(Transform, Duplex);


	function TransformState(options, stream) {
	  this.afterTransform = function(er, data) {
	    return afterTransform(stream, er, data);
	  };

	  this.needTransform = false;
	  this.transforming = false;
	  this.writecb = null;
	  this.writechunk = null;
	}

	function afterTransform(stream, er, data) {
	  var ts = stream._transformState;
	  ts.transforming = false;

	  var cb = ts.writecb;

	  if (!cb)
	    return stream.emit('error', new Error('no writecb in Transform class'));

	  ts.writechunk = null;
	  ts.writecb = null;

	  if (!util.isNullOrUndefined(data))
	    stream.push(data);

	  if (cb)
	    cb(er);

	  var rs = stream._readableState;
	  rs.reading = false;
	  if (rs.needReadable || rs.length < rs.highWaterMark) {
	    stream._read(rs.highWaterMark);
	  }
	}


	function Transform(options) {
	  if (!(this instanceof Transform))
	    return new Transform(options);

	  Duplex.call(this, options);

	  this._transformState = new TransformState(options, this);

	  // when the writable side finishes, then flush out anything remaining.
	  var stream = this;

	  // start out asking for a readable event once data is transformed.
	  this._readableState.needReadable = true;

	  // we have implemented the _read method, and done the other things
	  // that Readable wants before the first _read call, so unset the
	  // sync guard flag.
	  this._readableState.sync = false;

	  this.once('prefinish', function() {
	    if (util.isFunction(this._flush))
	      this._flush(function(er) {
	        done(stream, er);
	      });
	    else
	      done(stream);
	  });
	}

	Transform.prototype.push = function(chunk, encoding) {
	  this._transformState.needTransform = false;
	  return Duplex.prototype.push.call(this, chunk, encoding);
	};

	// This is the part where you do stuff!
	// override this function in implementation classes.
	// 'chunk' is an input chunk.
	//
	// Call `push(newChunk)` to pass along transformed output
	// to the readable side.  You may call 'push' zero or more times.
	//
	// Call `cb(err)` when you are done with this chunk.  If you pass
	// an error, then that'll put the hurt on the whole operation.  If you
	// never call cb(), then you'll never get another chunk.
	Transform.prototype._transform = function(chunk, encoding, cb) {
	  throw new Error('not implemented');
	};

	Transform.prototype._write = function(chunk, encoding, cb) {
	  var ts = this._transformState;
	  ts.writecb = cb;
	  ts.writechunk = chunk;
	  ts.writeencoding = encoding;
	  if (!ts.transforming) {
	    var rs = this._readableState;
	    if (ts.needTransform ||
	        rs.needReadable ||
	        rs.length < rs.highWaterMark)
	      this._read(rs.highWaterMark);
	  }
	};

	// Doesn't matter what the args are here.
	// _transform does all the work.
	// That we got here means that the readable side wants more data.
	Transform.prototype._read = function(n) {
	  var ts = this._transformState;

	  if (!util.isNull(ts.writechunk) && ts.writecb && !ts.transforming) {
	    ts.transforming = true;
	    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
	  } else {
	    // mark that we need a transform, so that any data that comes in
	    // will get processed, now that we've asked for it.
	    ts.needTransform = true;
	  }
	};


	function done(stream, er) {
	  if (er)
	    return stream.emit('error', er);

	  // if there's nothing in the write buffer, then that means
	  // that nothing more will ever be provided
	  var ws = stream._writableState;
	  var ts = stream._transformState;

	  if (ws.length)
	    throw new Error('calling transform done when ws.length != 0');

	  if (ts.transforming)
	    throw new Error('calling transform done when still transforming');

	  return stream.push(null);
	}


/***/ },

/***/ 429:
/***/ function(module, exports, __webpack_require__) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	// a passthrough stream.
	// basically just the most minimal sort of Transform stream.
	// Every written chunk gets output as-is.

	module.exports = PassThrough;

	var Transform = __webpack_require__(428);

	/*<replacement>*/
	var util = __webpack_require__(423);
	util.inherits = __webpack_require__(22);
	/*</replacement>*/

	util.inherits(PassThrough, Transform);

	function PassThrough(options) {
	  if (!(this instanceof PassThrough))
	    return new PassThrough(options);

	  Transform.call(this, options);
	}

	PassThrough.prototype._transform = function(chunk, encoding, cb) {
	  cb(null, chunk);
	};


/***/ },

/***/ 430:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(426)


/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(425)


/***/ },

/***/ 432:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(428)


/***/ },

/***/ 433:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(429)


/***/ },

/***/ 434:
/***/ function(module, exports, __webpack_require__) {

	var Stream = __webpack_require__(418);
	var util = __webpack_require__(435);

	var Response = module.exports = function (res) {
	    this.offset = 0;
	    this.readable = true;
	};

	util.inherits(Response, Stream);

	var capable = {
	    streaming : true,
	    status2 : true
	};

	function parseHeaders (res) {
	    var lines = res.getAllResponseHeaders().split(/\r?\n/);
	    var headers = {};
	    for (var i = 0; i < lines.length; i++) {
	        var line = lines[i];
	        if (line === '') continue;
	        
	        var m = line.match(/^([^:]+):\s*(.*)/);
	        if (m) {
	            var key = m[1].toLowerCase(), value = m[2];
	            
	            if (headers[key] !== undefined) {
	            
	                if (isArray(headers[key])) {
	                    headers[key].push(value);
	                }
	                else {
	                    headers[key] = [ headers[key], value ];
	                }
	            }
	            else {
	                headers[key] = value;
	            }
	        }
	        else {
	            headers[line] = true;
	        }
	    }
	    return headers;
	}

	Response.prototype.getResponse = function (xhr) {
	    var respType = String(xhr.responseType).toLowerCase();
	    if (respType === 'blob') return xhr.responseBlob || xhr.response;
	    if (respType === 'arraybuffer') return xhr.response;
	    return xhr.responseText;
	}

	Response.prototype.getHeader = function (key) {
	    return this.headers[key.toLowerCase()];
	};

	Response.prototype.handle = function (res) {
	    if (res.readyState === 2 && capable.status2) {
	        try {
	            this.statusCode = res.status;
	            this.headers = parseHeaders(res);
	        }
	        catch (err) {
	            capable.status2 = false;
	        }
	        
	        if (capable.status2) {
	            this.emit('ready');
	        }
	    }
	    else if (capable.streaming && res.readyState === 3) {
	        try {
	            if (!this.statusCode) {
	                this.statusCode = res.status;
	                this.headers = parseHeaders(res);
	                this.emit('ready');
	            }
	        }
	        catch (err) {}
	        
	        try {
	            this._emitData(res);
	        }
	        catch (err) {
	            capable.streaming = false;
	        }
	    }
	    else if (res.readyState === 4) {
	        if (!this.statusCode) {
	            this.statusCode = res.status;
	            this.emit('ready');
	        }
	        this._emitData(res);
	        
	        if (res.error) {
	            this.emit('error', this.getResponse(res));
	        }
	        else this.emit('end');
	        
	        this.emit('close');
	    }
	};

	Response.prototype._emitData = function (res) {
	    var respBody = this.getResponse(res);
	    if (respBody.toString().match(/ArrayBuffer/)) {
	        this.emit('data', new Uint8Array(respBody, this.offset));
	        this.offset = respBody.byteLength;
	        return;
	    }
	    if (respBody.length > this.offset) {
	        this.emit('data', respBody.slice(this.offset));
	        this.offset = respBody.length;
	    }
	};

	var isArray = Array.isArray || function (xs) {
	    return Object.prototype.toString.call(xs) === '[object Array]';
	};


/***/ },

/***/ 435:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(436);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(22);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(421)))

/***/ },

/***/ 436:
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },

/***/ 437:
/***/ function(module, exports, __webpack_require__) {

	;(function () {

	  var object =  true ? exports : this; // #8: web workers
	  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	  function InvalidCharacterError(message) {
	    this.message = message;
	  }
	  InvalidCharacterError.prototype = new Error;
	  InvalidCharacterError.prototype.name = 'InvalidCharacterError';

	  // encoder
	  // [https://gist.github.com/999166] by [https://github.com/nignag]
	  object.btoa || (
	  object.btoa = function (input) {
	    for (
	      // initialize result and counter
	      var block, charCode, idx = 0, map = chars, output = '';
	      // if the next input index does not exist:
	      //   change the mapping table to "="
	      //   check if d has no fractional digits
	      input.charAt(idx | 0) || (map = '=', idx % 1);
	      // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	      output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	    ) {
	      charCode = input.charCodeAt(idx += 3/4);
	      if (charCode > 0xFF) {
	        throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
	      }
	      block = block << 8 | charCode;
	    }
	    return output;
	  });

	  // decoder
	  // [https://gist.github.com/1020396] by [https://github.com/atk]
	  object.atob || (
	  object.atob = function (input) {
	    input = input.replace(/=+$/, '');
	    if (input.length % 4 == 1) {
	      throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
	    }
	    for (
	      // initialize result and counters
	      var bc = 0, bs, buffer, idx = 0, output = '';
	      // get next character
	      buffer = input.charAt(idx++);
	      // character found in table? initialize bit storage and add its ascii value;
	      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
	        // and if not first of each 4 characters,
	        // convert the first 8 bits to one ascii character
	        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
	    ) {
	      // try to find character in table (0-63, not found => -1)
	      buffer = chars.indexOf(buffer);
	    }
	    return output;
	  });

	}());


/***/ },

/***/ 438:
/***/ function(module, exports, __webpack_require__) {

	var http = __webpack_require__(415);

	var https = module.exports;

	for (var key in http) {
	    if (http.hasOwnProperty(key)) https[key] = http[key];
	};

	https.request = function (params, cb) {
	    if (!params) params = {};
	    params.scheme = 'https';
	    return http.request.call(this, params, cb);
	}


/***/ },

/***/ 439:
/***/ function(module, exports, __webpack_require__) {

	
	module.exports =  __webpack_require__(440);


/***/ },

/***/ 440:
/***/ function(module, exports, __webpack_require__) {

	
	module.exports = __webpack_require__(441);

	/**
	 * Exports parser
	 *
	 * @api public
	 *
	 */
	module.exports.parser = __webpack_require__(448);


/***/ },

/***/ 441:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var transports = __webpack_require__(442);
	var Emitter = __webpack_require__(456);
	var debug = __webpack_require__(19)('engine.io-client:socket');
	var index = __webpack_require__(463);
	var parser = __webpack_require__(448);
	var parseuri = __webpack_require__(464);
	var parsejson = __webpack_require__(465);
	var parseqs = __webpack_require__(457);

	/**
	 * Module exports.
	 */

	module.exports = Socket;

	/**
	 * Noop function.
	 *
	 * @api private
	 */

	function noop(){}

	/**
	 * Socket constructor.
	 *
	 * @param {String|Object} uri or options
	 * @param {Object} options
	 * @api public
	 */

	function Socket(uri, opts){
	  if (!(this instanceof Socket)) return new Socket(uri, opts);

	  opts = opts || {};

	  if (uri && 'object' == typeof uri) {
	    opts = uri;
	    uri = null;
	  }

	  if (uri) {
	    uri = parseuri(uri);
	    opts.hostname = uri.host;
	    opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
	    opts.port = uri.port;
	    if (uri.query) opts.query = uri.query;
	  } else if (opts.host) {
	    opts.hostname = parseuri(opts.host).host;
	  }

	  this.secure = null != opts.secure ? opts.secure :
	    (global.location && 'https:' == location.protocol);

	  if (opts.hostname && !opts.port) {
	    // if no port is specified manually, use the protocol default
	    opts.port = this.secure ? '443' : '80';
	  }

	  this.agent = opts.agent || false;
	  this.hostname = opts.hostname ||
	    (global.location ? location.hostname : 'localhost');
	  this.port = opts.port || (global.location && location.port ?
	       location.port :
	       (this.secure ? 443 : 80));
	  this.query = opts.query || {};
	  if ('string' == typeof this.query) this.query = parseqs.decode(this.query);
	  this.upgrade = false !== opts.upgrade;
	  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
	  this.forceJSONP = !!opts.forceJSONP;
	  this.jsonp = false !== opts.jsonp;
	  this.forceBase64 = !!opts.forceBase64;
	  this.enablesXDR = !!opts.enablesXDR;
	  this.timestampParam = opts.timestampParam || 't';
	  this.timestampRequests = opts.timestampRequests;
	  this.transports = opts.transports || ['polling', 'websocket'];
	  this.readyState = '';
	  this.writeBuffer = [];
	  this.policyPort = opts.policyPort || 843;
	  this.rememberUpgrade = opts.rememberUpgrade || false;
	  this.binaryType = null;
	  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
	  this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;

	  if (true === this.perMessageDeflate) this.perMessageDeflate = {};
	  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
	    this.perMessageDeflate.threshold = 1024;
	  }

	  // SSL options for Node.js client
	  this.pfx = opts.pfx || null;
	  this.key = opts.key || null;
	  this.passphrase = opts.passphrase || null;
	  this.cert = opts.cert || null;
	  this.ca = opts.ca || null;
	  this.ciphers = opts.ciphers || null;
	  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? null : opts.rejectUnauthorized;

	  // other options for Node.js client
	  var freeGlobal = typeof global == 'object' && global;
	  if (freeGlobal.global === freeGlobal) {
	    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
	      this.extraHeaders = opts.extraHeaders;
	    }
	  }

	  this.open();
	}

	Socket.priorWebsocketSuccess = false;

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Socket.prototype);

	/**
	 * Protocol version.
	 *
	 * @api public
	 */

	Socket.protocol = parser.protocol; // this is an int

	/**
	 * Expose deps for legacy compatibility
	 * and standalone browser access.
	 */

	Socket.Socket = Socket;
	Socket.Transport = __webpack_require__(447);
	Socket.transports = __webpack_require__(442);
	Socket.parser = __webpack_require__(448);

	/**
	 * Creates transport of the given type.
	 *
	 * @param {String} transport name
	 * @return {Transport}
	 * @api private
	 */

	Socket.prototype.createTransport = function (name) {
	  debug('creating transport "%s"', name);
	  var query = clone(this.query);

	  // append engine.io protocol identifier
	  query.EIO = parser.protocol;

	  // transport name
	  query.transport = name;

	  // session id if we already have one
	  if (this.id) query.sid = this.id;

	  var transport = new transports[name]({
	    agent: this.agent,
	    hostname: this.hostname,
	    port: this.port,
	    secure: this.secure,
	    path: this.path,
	    query: query,
	    forceJSONP: this.forceJSONP,
	    jsonp: this.jsonp,
	    forceBase64: this.forceBase64,
	    enablesXDR: this.enablesXDR,
	    timestampRequests: this.timestampRequests,
	    timestampParam: this.timestampParam,
	    policyPort: this.policyPort,
	    socket: this,
	    pfx: this.pfx,
	    key: this.key,
	    passphrase: this.passphrase,
	    cert: this.cert,
	    ca: this.ca,
	    ciphers: this.ciphers,
	    rejectUnauthorized: this.rejectUnauthorized,
	    perMessageDeflate: this.perMessageDeflate,
	    extraHeaders: this.extraHeaders
	  });

	  return transport;
	};

	function clone (obj) {
	  var o = {};
	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      o[i] = obj[i];
	    }
	  }
	  return o;
	}

	/**
	 * Initializes transport to use and starts probe.
	 *
	 * @api private
	 */
	Socket.prototype.open = function () {
	  var transport;
	  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
	    transport = 'websocket';
	  } else if (0 === this.transports.length) {
	    // Emit error on next tick so it can be listened to
	    var self = this;
	    setTimeout(function() {
	      self.emit('error', 'No transports available');
	    }, 0);
	    return;
	  } else {
	    transport = this.transports[0];
	  }
	  this.readyState = 'opening';

	  // Retry with the next transport if the transport is disabled (jsonp: false)
	  try {
	    transport = this.createTransport(transport);
	  } catch (e) {
	    this.transports.shift();
	    this.open();
	    return;
	  }

	  transport.open();
	  this.setTransport(transport);
	};

	/**
	 * Sets the current transport. Disables the existing one (if any).
	 *
	 * @api private
	 */

	Socket.prototype.setTransport = function(transport){
	  debug('setting transport %s', transport.name);
	  var self = this;

	  if (this.transport) {
	    debug('clearing existing transport %s', this.transport.name);
	    this.transport.removeAllListeners();
	  }

	  // set up transport
	  this.transport = transport;

	  // set up transport listeners
	  transport
	  .on('drain', function(){
	    self.onDrain();
	  })
	  .on('packet', function(packet){
	    self.onPacket(packet);
	  })
	  .on('error', function(e){
	    self.onError(e);
	  })
	  .on('close', function(){
	    self.onClose('transport close');
	  });
	};

	/**
	 * Probes a transport.
	 *
	 * @param {String} transport name
	 * @api private
	 */

	Socket.prototype.probe = function (name) {
	  debug('probing transport "%s"', name);
	  var transport = this.createTransport(name, { probe: 1 })
	    , failed = false
	    , self = this;

	  Socket.priorWebsocketSuccess = false;

	  function onTransportOpen(){
	    if (self.onlyBinaryUpgrades) {
	      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
	      failed = failed || upgradeLosesBinary;
	    }
	    if (failed) return;

	    debug('probe transport "%s" opened', name);
	    transport.send([{ type: 'ping', data: 'probe' }]);
	    transport.once('packet', function (msg) {
	      if (failed) return;
	      if ('pong' == msg.type && 'probe' == msg.data) {
	        debug('probe transport "%s" pong', name);
	        self.upgrading = true;
	        self.emit('upgrading', transport);
	        if (!transport) return;
	        Socket.priorWebsocketSuccess = 'websocket' == transport.name;

	        debug('pausing current transport "%s"', self.transport.name);
	        self.transport.pause(function () {
	          if (failed) return;
	          if ('closed' == self.readyState) return;
	          debug('changing transport and sending upgrade packet');

	          cleanup();

	          self.setTransport(transport);
	          transport.send([{ type: 'upgrade' }]);
	          self.emit('upgrade', transport);
	          transport = null;
	          self.upgrading = false;
	          self.flush();
	        });
	      } else {
	        debug('probe transport "%s" failed', name);
	        var err = new Error('probe error');
	        err.transport = transport.name;
	        self.emit('upgradeError', err);
	      }
	    });
	  }

	  function freezeTransport() {
	    if (failed) return;

	    // Any callback called by transport should be ignored since now
	    failed = true;

	    cleanup();

	    transport.close();
	    transport = null;
	  }

	  //Handle any error that happens while probing
	  function onerror(err) {
	    var error = new Error('probe error: ' + err);
	    error.transport = transport.name;

	    freezeTransport();

	    debug('probe transport "%s" failed because of error: %s', name, err);

	    self.emit('upgradeError', error);
	  }

	  function onTransportClose(){
	    onerror("transport closed");
	  }

	  //When the socket is closed while we're probing
	  function onclose(){
	    onerror("socket closed");
	  }

	  //When the socket is upgraded while we're probing
	  function onupgrade(to){
	    if (transport && to.name != transport.name) {
	      debug('"%s" works - aborting "%s"', to.name, transport.name);
	      freezeTransport();
	    }
	  }

	  //Remove all listeners on the transport and on self
	  function cleanup(){
	    transport.removeListener('open', onTransportOpen);
	    transport.removeListener('error', onerror);
	    transport.removeListener('close', onTransportClose);
	    self.removeListener('close', onclose);
	    self.removeListener('upgrading', onupgrade);
	  }

	  transport.once('open', onTransportOpen);
	  transport.once('error', onerror);
	  transport.once('close', onTransportClose);

	  this.once('close', onclose);
	  this.once('upgrading', onupgrade);

	  transport.open();

	};

	/**
	 * Called when connection is deemed open.
	 *
	 * @api public
	 */

	Socket.prototype.onOpen = function () {
	  debug('socket open');
	  this.readyState = 'open';
	  Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
	  this.emit('open');
	  this.flush();

	  // we check for `readyState` in case an `open`
	  // listener already closed the socket
	  if ('open' == this.readyState && this.upgrade && this.transport.pause) {
	    debug('starting upgrade probes');
	    for (var i = 0, l = this.upgrades.length; i < l; i++) {
	      this.probe(this.upgrades[i]);
	    }
	  }
	};

	/**
	 * Handles a packet.
	 *
	 * @api private
	 */

	Socket.prototype.onPacket = function (packet) {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);

	    this.emit('packet', packet);

	    // Socket is live - any packet counts
	    this.emit('heartbeat');

	    switch (packet.type) {
	      case 'open':
	        this.onHandshake(parsejson(packet.data));
	        break;

	      case 'pong':
	        this.setPing();
	        this.emit('pong');
	        break;

	      case 'error':
	        var err = new Error('server error');
	        err.code = packet.data;
	        this.onError(err);
	        break;

	      case 'message':
	        this.emit('data', packet.data);
	        this.emit('message', packet.data);
	        break;
	    }
	  } else {
	    debug('packet received with socket readyState "%s"', this.readyState);
	  }
	};

	/**
	 * Called upon handshake completion.
	 *
	 * @param {Object} handshake obj
	 * @api private
	 */

	Socket.prototype.onHandshake = function (data) {
	  this.emit('handshake', data);
	  this.id = data.sid;
	  this.transport.query.sid = data.sid;
	  this.upgrades = this.filterUpgrades(data.upgrades);
	  this.pingInterval = data.pingInterval;
	  this.pingTimeout = data.pingTimeout;
	  this.onOpen();
	  // In case open handler closes socket
	  if  ('closed' == this.readyState) return;
	  this.setPing();

	  // Prolong liveness of socket on heartbeat
	  this.removeListener('heartbeat', this.onHeartbeat);
	  this.on('heartbeat', this.onHeartbeat);
	};

	/**
	 * Resets ping timeout.
	 *
	 * @api private
	 */

	Socket.prototype.onHeartbeat = function (timeout) {
	  clearTimeout(this.pingTimeoutTimer);
	  var self = this;
	  self.pingTimeoutTimer = setTimeout(function () {
	    if ('closed' == self.readyState) return;
	    self.onClose('ping timeout');
	  }, timeout || (self.pingInterval + self.pingTimeout));
	};

	/**
	 * Pings server every `this.pingInterval` and expects response
	 * within `this.pingTimeout` or closes connection.
	 *
	 * @api private
	 */

	Socket.prototype.setPing = function () {
	  var self = this;
	  clearTimeout(self.pingIntervalTimer);
	  self.pingIntervalTimer = setTimeout(function () {
	    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
	    self.ping();
	    self.onHeartbeat(self.pingTimeout);
	  }, self.pingInterval);
	};

	/**
	* Sends a ping packet.
	*
	* @api private
	*/

	Socket.prototype.ping = function () {
	  var self = this;
	  this.sendPacket('ping', function(){
	    self.emit('ping');
	  });
	};

	/**
	 * Called on `drain` event
	 *
	 * @api private
	 */

	Socket.prototype.onDrain = function() {
	  this.writeBuffer.splice(0, this.prevBufferLen);

	  // setting prevBufferLen = 0 is very important
	  // for example, when upgrading, upgrade packet is sent over,
	  // and a nonzero prevBufferLen could cause problems on `drain`
	  this.prevBufferLen = 0;

	  if (0 === this.writeBuffer.length) {
	    this.emit('drain');
	  } else {
	    this.flush();
	  }
	};

	/**
	 * Flush write buffers.
	 *
	 * @api private
	 */

	Socket.prototype.flush = function () {
	  if ('closed' != this.readyState && this.transport.writable &&
	    !this.upgrading && this.writeBuffer.length) {
	    debug('flushing %d packets in socket', this.writeBuffer.length);
	    this.transport.send(this.writeBuffer);
	    // keep track of current length of writeBuffer
	    // splice writeBuffer and callbackBuffer on `drain`
	    this.prevBufferLen = this.writeBuffer.length;
	    this.emit('flush');
	  }
	};

	/**
	 * Sends a message.
	 *
	 * @param {String} message.
	 * @param {Function} callback function.
	 * @param {Object} options.
	 * @return {Socket} for chaining.
	 * @api public
	 */

	Socket.prototype.write =
	Socket.prototype.send = function (msg, options, fn) {
	  this.sendPacket('message', msg, options, fn);
	  return this;
	};

	/**
	 * Sends a packet.
	 *
	 * @param {String} packet type.
	 * @param {String} data.
	 * @param {Object} options.
	 * @param {Function} callback function.
	 * @api private
	 */

	Socket.prototype.sendPacket = function (type, data, options, fn) {
	  if('function' == typeof data) {
	    fn = data;
	    data = undefined;
	  }

	  if ('function' == typeof options) {
	    fn = options;
	    options = null;
	  }

	  if ('closing' == this.readyState || 'closed' == this.readyState) {
	    return;
	  }

	  options = options || {};
	  options.compress = false !== options.compress;

	  var packet = {
	    type: type,
	    data: data,
	    options: options
	  };
	  this.emit('packetCreate', packet);
	  this.writeBuffer.push(packet);
	  if (fn) this.once('flush', fn);
	  this.flush();
	};

	/**
	 * Closes the connection.
	 *
	 * @api private
	 */

	Socket.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.readyState = 'closing';

	    var self = this;

	    if (this.writeBuffer.length) {
	      this.once('drain', function() {
	        if (this.upgrading) {
	          waitForUpgrade();
	        } else {
	          close();
	        }
	      });
	    } else if (this.upgrading) {
	      waitForUpgrade();
	    } else {
	      close();
	    }
	  }

	  function close() {
	    self.onClose('forced close');
	    debug('socket closing - telling transport to close');
	    self.transport.close();
	  }

	  function cleanupAndClose() {
	    self.removeListener('upgrade', cleanupAndClose);
	    self.removeListener('upgradeError', cleanupAndClose);
	    close();
	  }

	  function waitForUpgrade() {
	    // wait for upgrade to finish since we can't send packets while pausing a transport
	    self.once('upgrade', cleanupAndClose);
	    self.once('upgradeError', cleanupAndClose);
	  }

	  return this;
	};

	/**
	 * Called upon transport error
	 *
	 * @api private
	 */

	Socket.prototype.onError = function (err) {
	  debug('socket error %j', err);
	  Socket.priorWebsocketSuccess = false;
	  this.emit('error', err);
	  this.onClose('transport error', err);
	};

	/**
	 * Called upon transport close.
	 *
	 * @api private
	 */

	Socket.prototype.onClose = function (reason, desc) {
	  if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
	    debug('socket close with reason: "%s"', reason);
	    var self = this;

	    // clear timers
	    clearTimeout(this.pingIntervalTimer);
	    clearTimeout(this.pingTimeoutTimer);

	    // stop event from firing again for transport
	    this.transport.removeAllListeners('close');

	    // ensure transport won't stay open
	    this.transport.close();

	    // ignore further transport communication
	    this.transport.removeAllListeners();

	    // set ready state
	    this.readyState = 'closed';

	    // clear session id
	    this.id = null;

	    // emit close event
	    this.emit('close', reason, desc);

	    // clean buffers after, so users can still
	    // grab the buffers on `close` event
	    self.writeBuffer = [];
	    self.prevBufferLen = 0;
	  }
	};

	/**
	 * Filters upgrades, returning only those matching client transports.
	 *
	 * @param {Array} server upgrades
	 * @api private
	 *
	 */

	Socket.prototype.filterUpgrades = function (upgrades) {
	  var filteredUpgrades = [];
	  for (var i = 0, j = upgrades.length; i<j; i++) {
	    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
	  }
	  return filteredUpgrades;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 442:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies
	 */

	var XMLHttpRequest = __webpack_require__(443);
	var XHR = __webpack_require__(445);
	var JSONP = __webpack_require__(460);
	var websocket = __webpack_require__(461);

	/**
	 * Export transports.
	 */

	exports.polling = polling;
	exports.websocket = websocket;

	/**
	 * Polling transport polymorphic constructor.
	 * Decides on xhr vs jsonp based on feature detection.
	 *
	 * @api private
	 */

	function polling(opts){
	  var xhr;
	  var xd = false;
	  var xs = false;
	  var jsonp = false !== opts.jsonp;

	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    xd = opts.hostname != location.hostname || port != opts.port;
	    xs = opts.secure != isSSL;
	  }

	  opts.xdomain = xd;
	  opts.xscheme = xs;
	  xhr = new XMLHttpRequest(opts);

	  if ('open' in xhr && !opts.forceJSONP) {
	    return new XHR(opts);
	  } else {
	    if (!jsonp) throw new Error('JSONP disabled');
	    return new JSONP(opts);
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 443:
/***/ function(module, exports, __webpack_require__) {

	// browser shim for xmlhttprequest module
	var hasCORS = __webpack_require__(444);

	module.exports = function(opts) {
	  var xdomain = opts.xdomain;

	  // scheme must be same when usign XDomainRequest
	  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx
	  var xscheme = opts.xscheme;

	  // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
	  // https://github.com/Automattic/engine.io-client/pull/217
	  var enablesXDR = opts.enablesXDR;

	  // XMLHttpRequest can be disabled on IE
	  try {
	    if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
	      return new XMLHttpRequest();
	    }
	  } catch (e) { }

	  // Use XDomainRequest for IE8 if enablesXDR is true
	  // because loading bar keeps flashing when using jsonp-polling
	  // https://github.com/yujiosaka/socke.io-ie8-loading-example
	  try {
	    if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
	      return new XDomainRequest();
	    }
	  } catch (e) { }

	  if (!xdomain) {
	    try {
	      return new ActiveXObject('Microsoft.XMLHTTP');
	    } catch(e) { }
	  }
	}


/***/ },

/***/ 444:
/***/ function(module, exports) {

	
	/**
	 * Module exports.
	 *
	 * Logic borrowed from Modernizr:
	 *
	 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
	 */

	try {
	  module.exports = typeof XMLHttpRequest !== 'undefined' &&
	    'withCredentials' in new XMLHttpRequest();
	} catch (err) {
	  // if XMLHttp support is disabled in IE then it will throw
	  // when trying to create
	  module.exports = false;
	}


/***/ },

/***/ 445:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module requirements.
	 */

	var XMLHttpRequest = __webpack_require__(443);
	var Polling = __webpack_require__(446);
	var Emitter = __webpack_require__(456);
	var inherit = __webpack_require__(458);
	var debug = __webpack_require__(19)('engine.io-client:polling-xhr');

	/**
	 * Module exports.
	 */

	module.exports = XHR;
	module.exports.Request = Request;

	/**
	 * Empty function
	 */

	function empty(){}

	/**
	 * XHR Polling constructor.
	 *
	 * @param {Object} opts
	 * @api public
	 */

	function XHR(opts){
	  Polling.call(this, opts);

	  if (global.location) {
	    var isSSL = 'https:' == location.protocol;
	    var port = location.port;

	    // some user agents have empty `location.port`
	    if (!port) {
	      port = isSSL ? 443 : 80;
	    }

	    this.xd = opts.hostname != global.location.hostname ||
	      port != opts.port;
	    this.xs = opts.secure != isSSL;
	  } else {
	    this.extraHeaders = opts.extraHeaders;
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(XHR, Polling);

	/**
	 * XHR supports binary
	 */

	XHR.prototype.supportsBinary = true;

	/**
	 * Creates a request.
	 *
	 * @param {String} method
	 * @api private
	 */

	XHR.prototype.request = function(opts){
	  opts = opts || {};
	  opts.uri = this.uri();
	  opts.xd = this.xd;
	  opts.xs = this.xs;
	  opts.agent = this.agent || false;
	  opts.supportsBinary = this.supportsBinary;
	  opts.enablesXDR = this.enablesXDR;

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  // other options for Node.js client
	  opts.extraHeaders = this.extraHeaders;

	  return new Request(opts);
	};

	/**
	 * Sends data.
	 *
	 * @param {String} data to send.
	 * @param {Function} called upon flush.
	 * @api private
	 */

	XHR.prototype.doWrite = function(data, fn){
	  var isBinary = typeof data !== 'string' && data !== undefined;
	  var req = this.request({ method: 'POST', data: data, isBinary: isBinary });
	  var self = this;
	  req.on('success', fn);
	  req.on('error', function(err){
	    self.onError('xhr post error', err);
	  });
	  this.sendXhr = req;
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	XHR.prototype.doPoll = function(){
	  debug('xhr poll');
	  var req = this.request();
	  var self = this;
	  req.on('data', function(data){
	    self.onData(data);
	  });
	  req.on('error', function(err){
	    self.onError('xhr poll error', err);
	  });
	  this.pollXhr = req;
	};

	/**
	 * Request constructor
	 *
	 * @param {Object} options
	 * @api public
	 */

	function Request(opts){
	  this.method = opts.method || 'GET';
	  this.uri = opts.uri;
	  this.xd = !!opts.xd;
	  this.xs = !!opts.xs;
	  this.async = false !== opts.async;
	  this.data = undefined != opts.data ? opts.data : null;
	  this.agent = opts.agent;
	  this.isBinary = opts.isBinary;
	  this.supportsBinary = opts.supportsBinary;
	  this.enablesXDR = opts.enablesXDR;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;

	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;

	  this.create();
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Request.prototype);

	/**
	 * Creates the XHR object and sends the request.
	 *
	 * @api private
	 */

	Request.prototype.create = function(){
	  var opts = { agent: this.agent, xdomain: this.xd, xscheme: this.xs, enablesXDR: this.enablesXDR };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;

	  var xhr = this.xhr = new XMLHttpRequest(opts);
	  var self = this;

	  try {
	    debug('xhr open %s: %s', this.method, this.uri);
	    xhr.open(this.method, this.uri, this.async);
	    try {
	      if (this.extraHeaders) {
	        xhr.setDisableHeaderCheck(true);
	        for (var i in this.extraHeaders) {
	          if (this.extraHeaders.hasOwnProperty(i)) {
	            xhr.setRequestHeader(i, this.extraHeaders[i]);
	          }
	        }
	      }
	    } catch (e) {}
	    if (this.supportsBinary) {
	      // This has to be done after open because Firefox is stupid
	      // http://stackoverflow.com/questions/13216903/get-binary-data-with-xmlhttprequest-in-a-firefox-extension
	      xhr.responseType = 'arraybuffer';
	    }

	    if ('POST' == this.method) {
	      try {
	        if (this.isBinary) {
	          xhr.setRequestHeader('Content-type', 'application/octet-stream');
	        } else {
	          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
	        }
	      } catch (e) {}
	    }

	    // ie6 check
	    if ('withCredentials' in xhr) {
	      xhr.withCredentials = true;
	    }

	    if (this.hasXDR()) {
	      xhr.onload = function(){
	        self.onLoad();
	      };
	      xhr.onerror = function(){
	        self.onError(xhr.responseText);
	      };
	    } else {
	      xhr.onreadystatechange = function(){
	        if (4 != xhr.readyState) return;
	        if (200 == xhr.status || 1223 == xhr.status) {
	          self.onLoad();
	        } else {
	          // make sure the `error` event handler that's user-set
	          // does not throw in the same tick and gets caught here
	          setTimeout(function(){
	            self.onError(xhr.status);
	          }, 0);
	        }
	      };
	    }

	    debug('xhr data %s', this.data);
	    xhr.send(this.data);
	  } catch (e) {
	    // Need to defer since .create() is called directly fhrom the constructor
	    // and thus the 'error' event can only be only bound *after* this exception
	    // occurs.  Therefore, also, we cannot throw here at all.
	    setTimeout(function() {
	      self.onError(e);
	    }, 0);
	    return;
	  }

	  if (global.document) {
	    this.index = Request.requestsCount++;
	    Request.requests[this.index] = this;
	  }
	};

	/**
	 * Called upon successful response.
	 *
	 * @api private
	 */

	Request.prototype.onSuccess = function(){
	  this.emit('success');
	  this.cleanup();
	};

	/**
	 * Called if we have data.
	 *
	 * @api private
	 */

	Request.prototype.onData = function(data){
	  this.emit('data', data);
	  this.onSuccess();
	};

	/**
	 * Called upon error.
	 *
	 * @api private
	 */

	Request.prototype.onError = function(err){
	  this.emit('error', err);
	  this.cleanup(true);
	};

	/**
	 * Cleans up house.
	 *
	 * @api private
	 */

	Request.prototype.cleanup = function(fromError){
	  if ('undefined' == typeof this.xhr || null === this.xhr) {
	    return;
	  }
	  // xmlhttprequest
	  if (this.hasXDR()) {
	    this.xhr.onload = this.xhr.onerror = empty;
	  } else {
	    this.xhr.onreadystatechange = empty;
	  }

	  if (fromError) {
	    try {
	      this.xhr.abort();
	    } catch(e) {}
	  }

	  if (global.document) {
	    delete Request.requests[this.index];
	  }

	  this.xhr = null;
	};

	/**
	 * Called upon load.
	 *
	 * @api private
	 */

	Request.prototype.onLoad = function(){
	  var data;
	  try {
	    var contentType;
	    try {
	      contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
	    } catch (e) {}
	    if (contentType === 'application/octet-stream') {
	      data = this.xhr.response;
	    } else {
	      if (!this.supportsBinary) {
	        data = this.xhr.responseText;
	      } else {
	        try {
	          data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
	        } catch (e) {
	          var ui8Arr = new Uint8Array(this.xhr.response);
	          var dataArray = [];
	          for (var idx = 0, length = ui8Arr.length; idx < length; idx++) {
	            dataArray.push(ui8Arr[idx]);
	          }

	          data = String.fromCharCode.apply(null, dataArray);
	        }
	      }
	    }
	  } catch (e) {
	    this.onError(e);
	  }
	  if (null != data) {
	    this.onData(data);
	  }
	};

	/**
	 * Check if it has XDomainRequest.
	 *
	 * @api private
	 */

	Request.prototype.hasXDR = function(){
	  return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
	};

	/**
	 * Aborts the request.
	 *
	 * @api public
	 */

	Request.prototype.abort = function(){
	  this.cleanup();
	};

	/**
	 * Aborts pending requests when unloading the window. This is needed to prevent
	 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
	 * emitted.
	 */

	if (global.document) {
	  Request.requestsCount = 0;
	  Request.requests = {};
	  if (global.attachEvent) {
	    global.attachEvent('onunload', unloadHandler);
	  } else if (global.addEventListener) {
	    global.addEventListener('beforeunload', unloadHandler, false);
	  }
	}

	function unloadHandler() {
	  for (var i in Request.requests) {
	    if (Request.requests.hasOwnProperty(i)) {
	      Request.requests[i].abort();
	    }
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(447);
	var parseqs = __webpack_require__(457);
	var parser = __webpack_require__(448);
	var inherit = __webpack_require__(458);
	var yeast = __webpack_require__(459);
	var debug = __webpack_require__(19)('engine.io-client:polling');

	/**
	 * Module exports.
	 */

	module.exports = Polling;

	/**
	 * Is XHR2 supported?
	 */

	var hasXHR2 = (function() {
	  var XMLHttpRequest = __webpack_require__(443);
	  var xhr = new XMLHttpRequest({ xdomain: false });
	  return null != xhr.responseType;
	})();

	/**
	 * Polling interface.
	 *
	 * @param {Object} opts
	 * @api private
	 */

	function Polling(opts){
	  var forceBase64 = (opts && opts.forceBase64);
	  if (!hasXHR2 || forceBase64) {
	    this.supportsBinary = false;
	  }
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(Polling, Transport);

	/**
	 * Transport name.
	 */

	Polling.prototype.name = 'polling';

	/**
	 * Opens the socket (triggers polling). We write a PING message to determine
	 * when the transport is open.
	 *
	 * @api private
	 */

	Polling.prototype.doOpen = function(){
	  this.poll();
	};

	/**
	 * Pauses polling.
	 *
	 * @param {Function} callback upon buffers are flushed and transport is paused
	 * @api private
	 */

	Polling.prototype.pause = function(onPause){
	  var pending = 0;
	  var self = this;

	  this.readyState = 'pausing';

	  function pause(){
	    debug('paused');
	    self.readyState = 'paused';
	    onPause();
	  }

	  if (this.polling || !this.writable) {
	    var total = 0;

	    if (this.polling) {
	      debug('we are currently polling - waiting to pause');
	      total++;
	      this.once('pollComplete', function(){
	        debug('pre-pause polling complete');
	        --total || pause();
	      });
	    }

	    if (!this.writable) {
	      debug('we are currently writing - waiting to pause');
	      total++;
	      this.once('drain', function(){
	        debug('pre-pause writing complete');
	        --total || pause();
	      });
	    }
	  } else {
	    pause();
	  }
	};

	/**
	 * Starts polling cycle.
	 *
	 * @api public
	 */

	Polling.prototype.poll = function(){
	  debug('polling');
	  this.polling = true;
	  this.doPoll();
	  this.emit('poll');
	};

	/**
	 * Overloads onData to detect payloads.
	 *
	 * @api private
	 */

	Polling.prototype.onData = function(data){
	  var self = this;
	  debug('polling got data %s', data);
	  var callback = function(packet, index, total) {
	    // if its the first message we consider the transport open
	    if ('opening' == self.readyState) {
	      self.onOpen();
	    }

	    // if its a close packet, we close the ongoing requests
	    if ('close' == packet.type) {
	      self.onClose();
	      return false;
	    }

	    // otherwise bypass onData and handle the message
	    self.onPacket(packet);
	  };

	  // decode payload
	  parser.decodePayload(data, this.socket.binaryType, callback);

	  // if an event did not trigger closing
	  if ('closed' != this.readyState) {
	    // if we got data we're not polling
	    this.polling = false;
	    this.emit('pollComplete');

	    if ('open' == this.readyState) {
	      this.poll();
	    } else {
	      debug('ignoring poll - transport state "%s"', this.readyState);
	    }
	  }
	};

	/**
	 * For polling, send a close packet.
	 *
	 * @api private
	 */

	Polling.prototype.doClose = function(){
	  var self = this;

	  function close(){
	    debug('writing close packet');
	    self.write([{ type: 'close' }]);
	  }

	  if ('open' == this.readyState) {
	    debug('transport open - closing');
	    close();
	  } else {
	    // in case we're trying to close while
	    // handshaking is in progress (GH-164)
	    debug('transport not open - deferring close');
	    this.once('open', close);
	  }
	};

	/**
	 * Writes a packets payload.
	 *
	 * @param {Array} data packets
	 * @param {Function} drain callback
	 * @api private
	 */

	Polling.prototype.write = function(packets){
	  var self = this;
	  this.writable = false;
	  var callbackfn = function() {
	    self.writable = true;
	    self.emit('drain');
	  };

	  var self = this;
	  parser.encodePayload(packets, this.supportsBinary, function(data) {
	    self.doWrite(data, callbackfn);
	  });
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	Polling.prototype.uri = function(){
	  var query = this.query || {};
	  var schema = this.secure ? 'https' : 'http';
	  var port = '';

	  // cache busting is forced
	  if (false !== this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }

	  if (!this.supportsBinary && !query.sid) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // avoid port if default for schema
	  if (this.port && (('https' == schema && this.port != 443) ||
	     ('http' == schema && this.port != 80))) {
	    port = ':' + this.port;
	  }

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};


/***/ },

/***/ 447:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */

	var parser = __webpack_require__(448);
	var Emitter = __webpack_require__(456);

	/**
	 * Module exports.
	 */

	module.exports = Transport;

	/**
	 * Transport abstract constructor.
	 *
	 * @param {Object} options.
	 * @api private
	 */

	function Transport (opts) {
	  this.path = opts.path;
	  this.hostname = opts.hostname;
	  this.port = opts.port;
	  this.secure = opts.secure;
	  this.query = opts.query;
	  this.timestampParam = opts.timestampParam;
	  this.timestampRequests = opts.timestampRequests;
	  this.readyState = '';
	  this.agent = opts.agent || false;
	  this.socket = opts.socket;
	  this.enablesXDR = opts.enablesXDR;

	  // SSL options for Node.js client
	  this.pfx = opts.pfx;
	  this.key = opts.key;
	  this.passphrase = opts.passphrase;
	  this.cert = opts.cert;
	  this.ca = opts.ca;
	  this.ciphers = opts.ciphers;
	  this.rejectUnauthorized = opts.rejectUnauthorized;

	  // other options for Node.js client
	  this.extraHeaders = opts.extraHeaders;
	}

	/**
	 * Mix in `Emitter`.
	 */

	Emitter(Transport.prototype);

	/**
	 * Emits an error.
	 *
	 * @param {String} str
	 * @return {Transport} for chaining
	 * @api public
	 */

	Transport.prototype.onError = function (msg, desc) {
	  var err = new Error(msg);
	  err.type = 'TransportError';
	  err.description = desc;
	  this.emit('error', err);
	  return this;
	};

	/**
	 * Opens the transport.
	 *
	 * @api public
	 */

	Transport.prototype.open = function () {
	  if ('closed' == this.readyState || '' == this.readyState) {
	    this.readyState = 'opening';
	    this.doOpen();
	  }

	  return this;
	};

	/**
	 * Closes the transport.
	 *
	 * @api private
	 */

	Transport.prototype.close = function () {
	  if ('opening' == this.readyState || 'open' == this.readyState) {
	    this.doClose();
	    this.onClose();
	  }

	  return this;
	};

	/**
	 * Sends multiple packets.
	 *
	 * @param {Array} packets
	 * @api private
	 */

	Transport.prototype.send = function(packets){
	  if ('open' == this.readyState) {
	    this.write(packets);
	  } else {
	    throw new Error('Transport not open');
	  }
	};

	/**
	 * Called upon open
	 *
	 * @api private
	 */

	Transport.prototype.onOpen = function () {
	  this.readyState = 'open';
	  this.writable = true;
	  this.emit('open');
	};

	/**
	 * Called with data.
	 *
	 * @param {String} data
	 * @api private
	 */

	Transport.prototype.onData = function(data){
	  var packet = parser.decodePacket(data, this.socket.binaryType);
	  this.onPacket(packet);
	};

	/**
	 * Called with a decoded packet.
	 */

	Transport.prototype.onPacket = function (packet) {
	  this.emit('packet', packet);
	};

	/**
	 * Called upon close.
	 *
	 * @api private
	 */

	Transport.prototype.onClose = function () {
	  this.readyState = 'closed';
	  this.emit('close');
	};


/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var keys = __webpack_require__(449);
	var hasBinary = __webpack_require__(450);
	var sliceBuffer = __webpack_require__(451);
	var base64encoder = __webpack_require__(452);
	var after = __webpack_require__(453);
	var utf8 = __webpack_require__(454);

	/**
	 * Check if we are running an android browser. That requires us to use
	 * ArrayBuffer with polling transports...
	 *
	 * http://ghinda.net/jpeg-blob-ajax-android/
	 */

	var isAndroid = navigator.userAgent.match(/Android/i);

	/**
	 * Check if we are running in PhantomJS.
	 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
	 * https://github.com/ariya/phantomjs/issues/11395
	 * @type boolean
	 */
	var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);

	/**
	 * When true, avoids using Blobs to encode payloads.
	 * @type boolean
	 */
	var dontSendBlobs = isAndroid || isPhantomJS;

	/**
	 * Current protocol version.
	 */

	exports.protocol = 3;

	/**
	 * Packet types.
	 */

	var packets = exports.packets = {
	    open:     0    // non-ws
	  , close:    1    // non-ws
	  , ping:     2
	  , pong:     3
	  , message:  4
	  , upgrade:  5
	  , noop:     6
	};

	var packetslist = keys(packets);

	/**
	 * Premade error packet.
	 */

	var err = { type: 'error', data: 'parser error' };

	/**
	 * Create a blob api even for blob builder when vendor prefixes exist
	 */

	var Blob = __webpack_require__(455);

	/**
	 * Encodes a packet.
	 *
	 *     <packet type id> [ <data> ]
	 *
	 * Example:
	 *
	 *     5hello world
	 *     3
	 *     4
	 *
	 * Binary is encoded in an identical principle
	 *
	 * @api private
	 */

	exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
	  if ('function' == typeof supportsBinary) {
	    callback = supportsBinary;
	    supportsBinary = false;
	  }

	  if ('function' == typeof utf8encode) {
	    callback = utf8encode;
	    utf8encode = null;
	  }

	  var data = (packet.data === undefined)
	    ? undefined
	    : packet.data.buffer || packet.data;

	  if (global.ArrayBuffer && data instanceof ArrayBuffer) {
	    return encodeArrayBuffer(packet, supportsBinary, callback);
	  } else if (Blob && data instanceof global.Blob) {
	    return encodeBlob(packet, supportsBinary, callback);
	  }

	  // might be an object with { base64: true, data: dataAsBase64String }
	  if (data && data.base64) {
	    return encodeBase64Object(packet, callback);
	  }

	  // Sending data as a utf-8 string
	  var encoded = packets[packet.type];

	  // data fragment is optional
	  if (undefined !== packet.data) {
	    encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
	  }

	  return callback('' + encoded);

	};

	function encodeBase64Object(packet, callback) {
	  // packet data is an object { base64: true, data: dataAsBase64String }
	  var message = 'b' + exports.packets[packet.type] + packet.data.data;
	  return callback(message);
	}

	/**
	 * Encode packet helpers for binary types
	 */

	function encodeArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var data = packet.data;
	  var contentArray = new Uint8Array(data);
	  var resultBuffer = new Uint8Array(1 + data.byteLength);

	  resultBuffer[0] = packets[packet.type];
	  for (var i = 0; i < contentArray.length; i++) {
	    resultBuffer[i+1] = contentArray[i];
	  }

	  return callback(resultBuffer.buffer);
	}

	function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  var fr = new FileReader();
	  fr.onload = function() {
	    packet.data = fr.result;
	    exports.encodePacket(packet, supportsBinary, true, callback);
	  };
	  return fr.readAsArrayBuffer(packet.data);
	}

	function encodeBlob(packet, supportsBinary, callback) {
	  if (!supportsBinary) {
	    return exports.encodeBase64Packet(packet, callback);
	  }

	  if (dontSendBlobs) {
	    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
	  }

	  var length = new Uint8Array(1);
	  length[0] = packets[packet.type];
	  var blob = new Blob([length.buffer, packet.data]);

	  return callback(blob);
	}

	/**
	 * Encodes a packet with binary data in a base64 string
	 *
	 * @param {Object} packet, has `type` and `data`
	 * @return {String} base64 encoded message
	 */

	exports.encodeBase64Packet = function(packet, callback) {
	  var message = 'b' + exports.packets[packet.type];
	  if (Blob && packet.data instanceof global.Blob) {
	    var fr = new FileReader();
	    fr.onload = function() {
	      var b64 = fr.result.split(',')[1];
	      callback(message + b64);
	    };
	    return fr.readAsDataURL(packet.data);
	  }

	  var b64data;
	  try {
	    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
	  } catch (e) {
	    // iPhone Safari doesn't let you apply with typed arrays
	    var typed = new Uint8Array(packet.data);
	    var basic = new Array(typed.length);
	    for (var i = 0; i < typed.length; i++) {
	      basic[i] = typed[i];
	    }
	    b64data = String.fromCharCode.apply(null, basic);
	  }
	  message += global.btoa(b64data);
	  return callback(message);
	};

	/**
	 * Decodes a packet. Changes format to Blob if requested.
	 *
	 * @return {Object} with `type` and `data` (if any)
	 * @api private
	 */

	exports.decodePacket = function (data, binaryType, utf8decode) {
	  // String data
	  if (typeof data == 'string' || data === undefined) {
	    if (data.charAt(0) == 'b') {
	      return exports.decodeBase64Packet(data.substr(1), binaryType);
	    }

	    if (utf8decode) {
	      try {
	        data = utf8.decode(data);
	      } catch (e) {
	        return err;
	      }
	    }
	    var type = data.charAt(0);

	    if (Number(type) != type || !packetslist[type]) {
	      return err;
	    }

	    if (data.length > 1) {
	      return { type: packetslist[type], data: data.substring(1) };
	    } else {
	      return { type: packetslist[type] };
	    }
	  }

	  var asArray = new Uint8Array(data);
	  var type = asArray[0];
	  var rest = sliceBuffer(data, 1);
	  if (Blob && binaryType === 'blob') {
	    rest = new Blob([rest]);
	  }
	  return { type: packetslist[type], data: rest };
	};

	/**
	 * Decodes a packet encoded in a base64 string
	 *
	 * @param {String} base64 encoded message
	 * @return {Object} with `type` and `data` (if any)
	 */

	exports.decodeBase64Packet = function(msg, binaryType) {
	  var type = packetslist[msg.charAt(0)];
	  if (!global.ArrayBuffer) {
	    return { type: type, data: { base64: true, data: msg.substr(1) } };
	  }

	  var data = base64encoder.decode(msg.substr(1));

	  if (binaryType === 'blob' && Blob) {
	    data = new Blob([data]);
	  }

	  return { type: type, data: data };
	};

	/**
	 * Encodes multiple messages (payload).
	 *
	 *     <length>:data
	 *
	 * Example:
	 *
	 *     11:hello world2:hi
	 *
	 * If any contents are binary, they will be encoded as base64 strings. Base64
	 * encoded strings are marked with a b before the length specifier
	 *
	 * @param {Array} packets
	 * @api private
	 */

	exports.encodePayload = function (packets, supportsBinary, callback) {
	  if (typeof supportsBinary == 'function') {
	    callback = supportsBinary;
	    supportsBinary = null;
	  }

	  var isBinary = hasBinary(packets);

	  if (supportsBinary && isBinary) {
	    if (Blob && !dontSendBlobs) {
	      return exports.encodePayloadAsBlob(packets, callback);
	    }

	    return exports.encodePayloadAsArrayBuffer(packets, callback);
	  }

	  if (!packets.length) {
	    return callback('0:');
	  }

	  function setLengthHeader(message) {
	    return message.length + ':' + message;
	  }

	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
	      doneCallback(null, setLengthHeader(message));
	    });
	  }

	  map(packets, encodeOne, function(err, results) {
	    return callback(results.join(''));
	  });
	};

	/**
	 * Async array map using after
	 */

	function map(ary, each, done) {
	  var result = new Array(ary.length);
	  var next = after(ary.length, done);

	  var eachWithIndex = function(i, el, cb) {
	    each(el, function(error, msg) {
	      result[i] = msg;
	      cb(error, result);
	    });
	  };

	  for (var i = 0; i < ary.length; i++) {
	    eachWithIndex(i, ary[i], next);
	  }
	}

	/*
	 * Decodes data when a payload is maybe expected. Possible binary contents are
	 * decoded from their base64 representation
	 *
	 * @param {String} data, callback method
	 * @api public
	 */

	exports.decodePayload = function (data, binaryType, callback) {
	  if (typeof data != 'string') {
	    return exports.decodePayloadAsBinary(data, binaryType, callback);
	  }

	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var packet;
	  if (data == '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }

	  var length = ''
	    , n, msg;

	  for (var i = 0, l = data.length; i < l; i++) {
	    var chr = data.charAt(i);

	    if (':' != chr) {
	      length += chr;
	    } else {
	      if ('' == length || (length != (n = Number(length)))) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }

	      msg = data.substr(i + 1, n);

	      if (length != msg.length) {
	        // parser error - ignoring payload
	        return callback(err, 0, 1);
	      }

	      if (msg.length) {
	        packet = exports.decodePacket(msg, binaryType, true);

	        if (err.type == packet.type && err.data == packet.data) {
	          // parser error in individual packet - ignoring payload
	          return callback(err, 0, 1);
	        }

	        var ret = callback(packet, i + n, l);
	        if (false === ret) return;
	      }

	      // advance cursor
	      i += n;
	      length = '';
	    }
	  }

	  if (length != '') {
	    // parser error - ignoring payload
	    return callback(err, 0, 1);
	  }

	};

	/**
	 * Encodes multiple messages (payload) as binary.
	 *
	 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
	 * 255><data>
	 *
	 * Example:
	 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
	 *
	 * @param {Array} packets
	 * @return {ArrayBuffer} encoded payload
	 * @api private
	 */

	exports.encodePayloadAsArrayBuffer = function(packets, callback) {
	  if (!packets.length) {
	    return callback(new ArrayBuffer(0));
	  }

	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(data) {
	      return doneCallback(null, data);
	    });
	  }

	  map(packets, encodeOne, function(err, encodedPackets) {
	    var totalLength = encodedPackets.reduce(function(acc, p) {
	      var len;
	      if (typeof p === 'string'){
	        len = p.length;
	      } else {
	        len = p.byteLength;
	      }
	      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
	    }, 0);

	    var resultArray = new Uint8Array(totalLength);

	    var bufferIndex = 0;
	    encodedPackets.forEach(function(p) {
	      var isString = typeof p === 'string';
	      var ab = p;
	      if (isString) {
	        var view = new Uint8Array(p.length);
	        for (var i = 0; i < p.length; i++) {
	          view[i] = p.charCodeAt(i);
	        }
	        ab = view.buffer;
	      }

	      if (isString) { // not true binary
	        resultArray[bufferIndex++] = 0;
	      } else { // true binary
	        resultArray[bufferIndex++] = 1;
	      }

	      var lenStr = ab.byteLength.toString();
	      for (var i = 0; i < lenStr.length; i++) {
	        resultArray[bufferIndex++] = parseInt(lenStr[i]);
	      }
	      resultArray[bufferIndex++] = 255;

	      var view = new Uint8Array(ab);
	      for (var i = 0; i < view.length; i++) {
	        resultArray[bufferIndex++] = view[i];
	      }
	    });

	    return callback(resultArray.buffer);
	  });
	};

	/**
	 * Encode as Blob
	 */

	exports.encodePayloadAsBlob = function(packets, callback) {
	  function encodeOne(packet, doneCallback) {
	    exports.encodePacket(packet, true, true, function(encoded) {
	      var binaryIdentifier = new Uint8Array(1);
	      binaryIdentifier[0] = 1;
	      if (typeof encoded === 'string') {
	        var view = new Uint8Array(encoded.length);
	        for (var i = 0; i < encoded.length; i++) {
	          view[i] = encoded.charCodeAt(i);
	        }
	        encoded = view.buffer;
	        binaryIdentifier[0] = 0;
	      }

	      var len = (encoded instanceof ArrayBuffer)
	        ? encoded.byteLength
	        : encoded.size;

	      var lenStr = len.toString();
	      var lengthAry = new Uint8Array(lenStr.length + 1);
	      for (var i = 0; i < lenStr.length; i++) {
	        lengthAry[i] = parseInt(lenStr[i]);
	      }
	      lengthAry[lenStr.length] = 255;

	      if (Blob) {
	        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
	        doneCallback(null, blob);
	      }
	    });
	  }

	  map(packets, encodeOne, function(err, results) {
	    return callback(new Blob(results));
	  });
	};

	/*
	 * Decodes data when a payload is maybe expected. Strings are decoded by
	 * interpreting each byte as a key code for entries marked to start with 0. See
	 * description of encodePayloadAsBinary
	 *
	 * @param {ArrayBuffer} data, callback method
	 * @api public
	 */

	exports.decodePayloadAsBinary = function (data, binaryType, callback) {
	  if (typeof binaryType === 'function') {
	    callback = binaryType;
	    binaryType = null;
	  }

	  var bufferTail = data;
	  var buffers = [];

	  var numberTooLong = false;
	  while (bufferTail.byteLength > 0) {
	    var tailArray = new Uint8Array(bufferTail);
	    var isString = tailArray[0] === 0;
	    var msgLength = '';

	    for (var i = 1; ; i++) {
	      if (tailArray[i] == 255) break;

	      if (msgLength.length > 310) {
	        numberTooLong = true;
	        break;
	      }

	      msgLength += tailArray[i];
	    }

	    if(numberTooLong) return callback(err, 0, 1);

	    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
	    msgLength = parseInt(msgLength);

	    var msg = sliceBuffer(bufferTail, 0, msgLength);
	    if (isString) {
	      try {
	        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
	      } catch (e) {
	        // iPhone Safari doesn't let you apply to typed arrays
	        var typed = new Uint8Array(msg);
	        msg = '';
	        for (var i = 0; i < typed.length; i++) {
	          msg += String.fromCharCode(typed[i]);
	        }
	      }
	    }

	    buffers.push(msg);
	    bufferTail = sliceBuffer(bufferTail, msgLength);
	  }

	  var total = buffers.length;
	  buffers.forEach(function(buffer, i) {
	    callback(exports.decodePacket(buffer, binaryType, true), i, total);
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 449:
/***/ function(module, exports) {

	
	/**
	 * Gets the keys for an object.
	 *
	 * @return {Array} keys
	 * @api private
	 */

	module.exports = Object.keys || function keys (obj){
	  var arr = [];
	  var has = Object.prototype.hasOwnProperty;

	  for (var i in obj) {
	    if (has.call(obj, i)) {
	      arr.push(i);
	    }
	  }
	  return arr;
	};


/***/ },

/***/ 450:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/*
	 * Module requirements.
	 */

	var isArray = __webpack_require__(422);

	/**
	 * Module exports.
	 */

	module.exports = hasBinary;

	/**
	 * Checks for binary data.
	 *
	 * Right now only Buffer and ArrayBuffer are supported..
	 *
	 * @param {Object} anything
	 * @api public
	 */

	function hasBinary(data) {

	  function _hasBinary(obj) {
	    if (!obj) return false;

	    if ( (global.Buffer && global.Buffer.isBuffer(obj)) ||
	         (global.ArrayBuffer && obj instanceof ArrayBuffer) ||
	         (global.Blob && obj instanceof Blob) ||
	         (global.File && obj instanceof File)
	        ) {
	      return true;
	    }

	    if (isArray(obj)) {
	      for (var i = 0; i < obj.length; i++) {
	          if (_hasBinary(obj[i])) {
	              return true;
	          }
	      }
	    } else if (obj && 'object' == typeof obj) {
	      if (obj.toJSON) {
	        obj = obj.toJSON();
	      }

	      for (var key in obj) {
	        if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
	          return true;
	        }
	      }
	    }

	    return false;
	  }

	  return _hasBinary(data);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 451:
/***/ function(module, exports) {

	/**
	 * An abstraction for slicing an arraybuffer even when
	 * ArrayBuffer.prototype.slice is not supported
	 *
	 * @api public
	 */

	module.exports = function(arraybuffer, start, end) {
	  var bytes = arraybuffer.byteLength;
	  start = start || 0;
	  end = end || bytes;

	  if (arraybuffer.slice) { return arraybuffer.slice(start, end); }

	  if (start < 0) { start += bytes; }
	  if (end < 0) { end += bytes; }
	  if (end > bytes) { end = bytes; }

	  if (start >= bytes || start >= end || bytes === 0) {
	    return new ArrayBuffer(0);
	  }

	  var abv = new Uint8Array(arraybuffer);
	  var result = new Uint8Array(end - start);
	  for (var i = start, ii = 0; i < end; i++, ii++) {
	    result[ii] = abv[i];
	  }
	  return result.buffer;
	};


/***/ },

/***/ 452:
/***/ function(module, exports) {

	/*
	 * base64-arraybuffer
	 * https://github.com/niklasvh/base64-arraybuffer
	 *
	 * Copyright (c) 2012 Niklas von Hertzen
	 * Licensed under the MIT license.
	 */
	(function(chars){
	  "use strict";

	  exports.encode = function(arraybuffer) {
	    var bytes = new Uint8Array(arraybuffer),
	    i, len = bytes.length, base64 = "";

	    for (i = 0; i < len; i+=3) {
	      base64 += chars[bytes[i] >> 2];
	      base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
	      base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
	      base64 += chars[bytes[i + 2] & 63];
	    }

	    if ((len % 3) === 2) {
	      base64 = base64.substring(0, base64.length - 1) + "=";
	    } else if (len % 3 === 1) {
	      base64 = base64.substring(0, base64.length - 2) + "==";
	    }

	    return base64;
	  };

	  exports.decode =  function(base64) {
	    var bufferLength = base64.length * 0.75,
	    len = base64.length, i, p = 0,
	    encoded1, encoded2, encoded3, encoded4;

	    if (base64[base64.length - 1] === "=") {
	      bufferLength--;
	      if (base64[base64.length - 2] === "=") {
	        bufferLength--;
	      }
	    }

	    var arraybuffer = new ArrayBuffer(bufferLength),
	    bytes = new Uint8Array(arraybuffer);

	    for (i = 0; i < len; i+=4) {
	      encoded1 = chars.indexOf(base64[i]);
	      encoded2 = chars.indexOf(base64[i+1]);
	      encoded3 = chars.indexOf(base64[i+2]);
	      encoded4 = chars.indexOf(base64[i+3]);

	      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
	      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
	      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
	    }

	    return arraybuffer;
	  };
	})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");


/***/ },

/***/ 453:
/***/ function(module, exports) {

	module.exports = after

	function after(count, callback, err_cb) {
	    var bail = false
	    err_cb = err_cb || noop
	    proxy.count = count

	    return (count === 0) ? callback() : proxy

	    function proxy(err, result) {
	        if (proxy.count <= 0) {
	            throw new Error('after called too many times')
	        }
	        --proxy.count

	        // after first error, rest are passed to err_cb
	        if (err) {
	            bail = true
	            callback(err)
	            // future error callbacks will go to error handler
	            callback = err_cb
	        } else if (proxy.count === 0 && !bail) {
	            callback(null, result)
	        }
	    }
	}

	function noop() {}


/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/*! https://mths.be/utf8js v2.0.0 by @mathias */
	;(function(root) {

		// Detect free variables `exports`
		var freeExports = typeof exports == 'object' && exports;

		// Detect free variable `module`
		var freeModule = typeof module == 'object' && module &&
			module.exports == freeExports && module;

		// Detect free variable `global`, from Node.js or Browserified code,
		// and use it as `root`
		var freeGlobal = typeof global == 'object' && global;
		if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
			root = freeGlobal;
		}

		/*--------------------------------------------------------------------------*/

		var stringFromCharCode = String.fromCharCode;

		// Taken from https://mths.be/punycode
		function ucs2decode(string) {
			var output = [];
			var counter = 0;
			var length = string.length;
			var value;
			var extra;
			while (counter < length) {
				value = string.charCodeAt(counter++);
				if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
					// high surrogate, and there is a next character
					extra = string.charCodeAt(counter++);
					if ((extra & 0xFC00) == 0xDC00) { // low surrogate
						output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
					} else {
						// unmatched surrogate; only append this code unit, in case the next
						// code unit is the high surrogate of a surrogate pair
						output.push(value);
						counter--;
					}
				} else {
					output.push(value);
				}
			}
			return output;
		}

		// Taken from https://mths.be/punycode
		function ucs2encode(array) {
			var length = array.length;
			var index = -1;
			var value;
			var output = '';
			while (++index < length) {
				value = array[index];
				if (value > 0xFFFF) {
					value -= 0x10000;
					output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
					value = 0xDC00 | value & 0x3FF;
				}
				output += stringFromCharCode(value);
			}
			return output;
		}

		function checkScalarValue(codePoint) {
			if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
				throw Error(
					'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
					' is not a scalar value'
				);
			}
		}
		/*--------------------------------------------------------------------------*/

		function createByte(codePoint, shift) {
			return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
		}

		function encodeCodePoint(codePoint) {
			if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
				return stringFromCharCode(codePoint);
			}
			var symbol = '';
			if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
				symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
			}
			else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
				checkScalarValue(codePoint);
				symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
				symbol += createByte(codePoint, 6);
			}
			else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
				symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
				symbol += createByte(codePoint, 12);
				symbol += createByte(codePoint, 6);
			}
			symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
			return symbol;
		}

		function utf8encode(string) {
			var codePoints = ucs2decode(string);
			var length = codePoints.length;
			var index = -1;
			var codePoint;
			var byteString = '';
			while (++index < length) {
				codePoint = codePoints[index];
				byteString += encodeCodePoint(codePoint);
			}
			return byteString;
		}

		/*--------------------------------------------------------------------------*/

		function readContinuationByte() {
			if (byteIndex >= byteCount) {
				throw Error('Invalid byte index');
			}

			var continuationByte = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			if ((continuationByte & 0xC0) == 0x80) {
				return continuationByte & 0x3F;
			}

			// If we end up here, it’s not a continuation byte
			throw Error('Invalid continuation byte');
		}

		function decodeSymbol() {
			var byte1;
			var byte2;
			var byte3;
			var byte4;
			var codePoint;

			if (byteIndex > byteCount) {
				throw Error('Invalid byte index');
			}

			if (byteIndex == byteCount) {
				return false;
			}

			// Read first byte
			byte1 = byteArray[byteIndex] & 0xFF;
			byteIndex++;

			// 1-byte sequence (no continuation bytes)
			if ((byte1 & 0x80) == 0) {
				return byte1;
			}

			// 2-byte sequence
			if ((byte1 & 0xE0) == 0xC0) {
				var byte2 = readContinuationByte();
				codePoint = ((byte1 & 0x1F) << 6) | byte2;
				if (codePoint >= 0x80) {
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 3-byte sequence (may include unpaired surrogates)
			if ((byte1 & 0xF0) == 0xE0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
				if (codePoint >= 0x0800) {
					checkScalarValue(codePoint);
					return codePoint;
				} else {
					throw Error('Invalid continuation byte');
				}
			}

			// 4-byte sequence
			if ((byte1 & 0xF8) == 0xF0) {
				byte2 = readContinuationByte();
				byte3 = readContinuationByte();
				byte4 = readContinuationByte();
				codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) |
					(byte3 << 0x06) | byte4;
				if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
					return codePoint;
				}
			}

			throw Error('Invalid UTF-8 detected');
		}

		var byteArray;
		var byteCount;
		var byteIndex;
		function utf8decode(byteString) {
			byteArray = ucs2decode(byteString);
			byteCount = byteArray.length;
			byteIndex = 0;
			var codePoints = [];
			var tmp;
			while ((tmp = decodeSymbol()) !== false) {
				codePoints.push(tmp);
			}
			return ucs2encode(codePoints);
		}

		/*--------------------------------------------------------------------------*/

		var utf8 = {
			'version': '2.0.0',
			'encode': utf8encode,
			'decode': utf8decode
		};

		// Some AMD build optimizers, like r.js, check for specific condition patterns
		// like the following:
		if (
			true
		) {
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
				return utf8;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}	else if (freeExports && !freeExports.nodeType) {
			if (freeModule) { // in Node.js or RingoJS v0.8.0+
				freeModule.exports = utf8;
			} else { // in Narwhal or RingoJS v0.7.0-
				var object = {};
				var hasOwnProperty = object.hasOwnProperty;
				for (var key in utf8) {
					hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
				}
			}
		} else { // in Rhino or a web browser
			root.utf8 = utf8;
		}

	}(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module), (function() { return this; }())))

/***/ },

/***/ 455:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Create a blob builder even when vendor prefixes exist
	 */

	var BlobBuilder = global.BlobBuilder
	  || global.WebKitBlobBuilder
	  || global.MSBlobBuilder
	  || global.MozBlobBuilder;

	/**
	 * Check if Blob constructor is supported
	 */

	var blobSupported = (function() {
	  try {
	    var a = new Blob(['hi']);
	    return a.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();

	/**
	 * Check if Blob constructor supports ArrayBufferViews
	 * Fails in Safari 6, so we need to map to ArrayBuffers there.
	 */

	var blobSupportsArrayBufferView = blobSupported && (function() {
	  try {
	    var b = new Blob([new Uint8Array([1,2])]);
	    return b.size === 2;
	  } catch(e) {
	    return false;
	  }
	})();

	/**
	 * Check if BlobBuilder is supported
	 */

	var blobBuilderSupported = BlobBuilder
	  && BlobBuilder.prototype.append
	  && BlobBuilder.prototype.getBlob;

	/**
	 * Helper function that maps ArrayBufferViews to ArrayBuffers
	 * Used by BlobBuilder constructor and old browsers that didn't
	 * support it in the Blob constructor.
	 */

	function mapArrayBufferViews(ary) {
	  for (var i = 0; i < ary.length; i++) {
	    var chunk = ary[i];
	    if (chunk.buffer instanceof ArrayBuffer) {
	      var buf = chunk.buffer;

	      // if this is a subarray, make a copy so we only
	      // include the subarray region from the underlying buffer
	      if (chunk.byteLength !== buf.byteLength) {
	        var copy = new Uint8Array(chunk.byteLength);
	        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
	        buf = copy.buffer;
	      }

	      ary[i] = buf;
	    }
	  }
	}

	function BlobBuilderConstructor(ary, options) {
	  options = options || {};

	  var bb = new BlobBuilder();
	  mapArrayBufferViews(ary);

	  for (var i = 0; i < ary.length; i++) {
	    bb.append(ary[i]);
	  }

	  return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
	};

	function BlobConstructor(ary, options) {
	  mapArrayBufferViews(ary);
	  return new Blob(ary, options || {});
	};

	module.exports = (function() {
	  if (blobSupported) {
	    return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
	  } else if (blobBuilderSupported) {
	    return BlobBuilderConstructor;
	  } else {
	    return undefined;
	  }
	})();

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 456:
/***/ function(module, exports) {

	
	/**
	 * Expose `Emitter`.
	 */

	module.exports = Emitter;

	/**
	 * Initialize a new `Emitter`.
	 *
	 * @api public
	 */

	function Emitter(obj) {
	  if (obj) return mixin(obj);
	};

	/**
	 * Mixin the emitter properties.
	 *
	 * @param {Object} obj
	 * @return {Object}
	 * @api private
	 */

	function mixin(obj) {
	  for (var key in Emitter.prototype) {
	    obj[key] = Emitter.prototype[key];
	  }
	  return obj;
	}

	/**
	 * Listen on the given `event` with `fn`.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.on =
	Emitter.prototype.addEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};
	  (this._callbacks[event] = this._callbacks[event] || [])
	    .push(fn);
	  return this;
	};

	/**
	 * Adds an `event` listener that will be invoked a single
	 * time then automatically removed.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.once = function(event, fn){
	  var self = this;
	  this._callbacks = this._callbacks || {};

	  function on() {
	    self.off(event, on);
	    fn.apply(this, arguments);
	  }

	  on.fn = fn;
	  this.on(event, on);
	  return this;
	};

	/**
	 * Remove the given callback for `event` or all
	 * registered callbacks.
	 *
	 * @param {String} event
	 * @param {Function} fn
	 * @return {Emitter}
	 * @api public
	 */

	Emitter.prototype.off =
	Emitter.prototype.removeListener =
	Emitter.prototype.removeAllListeners =
	Emitter.prototype.removeEventListener = function(event, fn){
	  this._callbacks = this._callbacks || {};

	  // all
	  if (0 == arguments.length) {
	    this._callbacks = {};
	    return this;
	  }

	  // specific event
	  var callbacks = this._callbacks[event];
	  if (!callbacks) return this;

	  // remove all handlers
	  if (1 == arguments.length) {
	    delete this._callbacks[event];
	    return this;
	  }

	  // remove specific handler
	  var cb;
	  for (var i = 0; i < callbacks.length; i++) {
	    cb = callbacks[i];
	    if (cb === fn || cb.fn === fn) {
	      callbacks.splice(i, 1);
	      break;
	    }
	  }
	  return this;
	};

	/**
	 * Emit `event` with the given args.
	 *
	 * @param {String} event
	 * @param {Mixed} ...
	 * @return {Emitter}
	 */

	Emitter.prototype.emit = function(event){
	  this._callbacks = this._callbacks || {};
	  var args = [].slice.call(arguments, 1)
	    , callbacks = this._callbacks[event];

	  if (callbacks) {
	    callbacks = callbacks.slice(0);
	    for (var i = 0, len = callbacks.length; i < len; ++i) {
	      callbacks[i].apply(this, args);
	    }
	  }

	  return this;
	};

	/**
	 * Return array of callbacks for `event`.
	 *
	 * @param {String} event
	 * @return {Array}
	 * @api public
	 */

	Emitter.prototype.listeners = function(event){
	  this._callbacks = this._callbacks || {};
	  return this._callbacks[event] || [];
	};

	/**
	 * Check if this emitter has `event` handlers.
	 *
	 * @param {String} event
	 * @return {Boolean}
	 * @api public
	 */

	Emitter.prototype.hasListeners = function(event){
	  return !! this.listeners(event).length;
	};


/***/ },

/***/ 457:
/***/ function(module, exports) {

	/**
	 * Compiles a querystring
	 * Returns string representation of the object
	 *
	 * @param {Object}
	 * @api private
	 */

	exports.encode = function (obj) {
	  var str = '';

	  for (var i in obj) {
	    if (obj.hasOwnProperty(i)) {
	      if (str.length) str += '&';
	      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
	    }
	  }

	  return str;
	};

	/**
	 * Parses a simple querystring into an object
	 *
	 * @param {String} qs
	 * @api private
	 */

	exports.decode = function(qs){
	  var qry = {};
	  var pairs = qs.split('&');
	  for (var i = 0, l = pairs.length; i < l; i++) {
	    var pair = pairs[i].split('=');
	    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	  }
	  return qry;
	};


/***/ },

/***/ 458:
/***/ function(module, exports) {

	
	module.exports = function(a, b){
	  var fn = function(){};
	  fn.prototype = b.prototype;
	  a.prototype = new fn;
	  a.prototype.constructor = a;
	};

/***/ },

/***/ 459:
/***/ function(module, exports) {

	'use strict';

	var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split('')
	  , length = 64
	  , map = {}
	  , seed = 0
	  , i = 0
	  , prev;

	/**
	 * Return a string representing the specified number.
	 *
	 * @param {Number} num The number to convert.
	 * @returns {String} The string representation of the number.
	 * @api public
	 */
	function encode(num) {
	  var encoded = '';

	  do {
	    encoded = alphabet[num % length] + encoded;
	    num = Math.floor(num / length);
	  } while (num > 0);

	  return encoded;
	}

	/**
	 * Return the integer value specified by the given string.
	 *
	 * @param {String} str The string to convert.
	 * @returns {Number} The integer value represented by the string.
	 * @api public
	 */
	function decode(str) {
	  var decoded = 0;

	  for (i = 0; i < str.length; i++) {
	    decoded = decoded * length + map[str.charAt(i)];
	  }

	  return decoded;
	}

	/**
	 * Yeast: A tiny growing id generator.
	 *
	 * @returns {String} A unique id.
	 * @api public
	 */
	function yeast() {
	  var now = encode(+new Date());

	  if (now !== prev) return seed = 0, prev = now;
	  return now +'.'+ encode(seed++);
	}

	//
	// Map each character to its index.
	//
	for (; i < length; i++) map[alphabet[i]] = i;

	//
	// Expose the `yeast`, `encode` and `decode` functions.
	//
	yeast.encode = encode;
	yeast.decode = decode;
	module.exports = yeast;


/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module requirements.
	 */

	var Polling = __webpack_require__(446);
	var inherit = __webpack_require__(458);

	/**
	 * Module exports.
	 */

	module.exports = JSONPPolling;

	/**
	 * Cached regular expressions.
	 */

	var rNewline = /\n/g;
	var rEscapedNewline = /\\n/g;

	/**
	 * Global JSONP callbacks.
	 */

	var callbacks;

	/**
	 * Callbacks count.
	 */

	var index = 0;

	/**
	 * Noop.
	 */

	function empty () { }

	/**
	 * JSONP Polling constructor.
	 *
	 * @param {Object} opts.
	 * @api public
	 */

	function JSONPPolling (opts) {
	  Polling.call(this, opts);

	  this.query = this.query || {};

	  // define global callbacks array if not present
	  // we do this here (lazily) to avoid unneeded global pollution
	  if (!callbacks) {
	    // we need to consider multiple engines in the same page
	    if (!global.___eio) global.___eio = [];
	    callbacks = global.___eio;
	  }

	  // callback identifier
	  this.index = callbacks.length;

	  // add callback to jsonp global
	  var self = this;
	  callbacks.push(function (msg) {
	    self.onData(msg);
	  });

	  // append to query string
	  this.query.j = this.index;

	  // prevent spurious errors from being emitted when the window is unloaded
	  if (global.document && global.addEventListener) {
	    global.addEventListener('beforeunload', function () {
	      if (self.script) self.script.onerror = empty;
	    }, false);
	  }
	}

	/**
	 * Inherits from Polling.
	 */

	inherit(JSONPPolling, Polling);

	/*
	 * JSONP only supports binary as base64 encoded strings
	 */

	JSONPPolling.prototype.supportsBinary = false;

	/**
	 * Closes the socket.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doClose = function () {
	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  if (this.form) {
	    this.form.parentNode.removeChild(this.form);
	    this.form = null;
	    this.iframe = null;
	  }

	  Polling.prototype.doClose.call(this);
	};

	/**
	 * Starts a poll cycle.
	 *
	 * @api private
	 */

	JSONPPolling.prototype.doPoll = function () {
	  var self = this;
	  var script = document.createElement('script');

	  if (this.script) {
	    this.script.parentNode.removeChild(this.script);
	    this.script = null;
	  }

	  script.async = true;
	  script.src = this.uri();
	  script.onerror = function(e){
	    self.onError('jsonp poll error',e);
	  };

	  var insertAt = document.getElementsByTagName('script')[0];
	  if (insertAt) {
	    insertAt.parentNode.insertBefore(script, insertAt);
	  }
	  else {
	    (document.head || document.body).appendChild(script);
	  }
	  this.script = script;

	  var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
	  
	  if (isUAgecko) {
	    setTimeout(function () {
	      var iframe = document.createElement('iframe');
	      document.body.appendChild(iframe);
	      document.body.removeChild(iframe);
	    }, 100);
	  }
	};

	/**
	 * Writes with a hidden iframe.
	 *
	 * @param {String} data to send
	 * @param {Function} called upon flush.
	 * @api private
	 */

	JSONPPolling.prototype.doWrite = function (data, fn) {
	  var self = this;

	  if (!this.form) {
	    var form = document.createElement('form');
	    var area = document.createElement('textarea');
	    var id = this.iframeId = 'eio_iframe_' + this.index;
	    var iframe;

	    form.className = 'socketio';
	    form.style.position = 'absolute';
	    form.style.top = '-1000px';
	    form.style.left = '-1000px';
	    form.target = id;
	    form.method = 'POST';
	    form.setAttribute('accept-charset', 'utf-8');
	    area.name = 'd';
	    form.appendChild(area);
	    document.body.appendChild(form);

	    this.form = form;
	    this.area = area;
	  }

	  this.form.action = this.uri();

	  function complete () {
	    initIframe();
	    fn();
	  }

	  function initIframe () {
	    if (self.iframe) {
	      try {
	        self.form.removeChild(self.iframe);
	      } catch (e) {
	        self.onError('jsonp polling iframe removal error', e);
	      }
	    }

	    try {
	      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
	      var html = '<iframe src="javascript:0" name="'+ self.iframeId +'">';
	      iframe = document.createElement(html);
	    } catch (e) {
	      iframe = document.createElement('iframe');
	      iframe.name = self.iframeId;
	      iframe.src = 'javascript:0';
	    }

	    iframe.id = self.iframeId;

	    self.form.appendChild(iframe);
	    self.iframe = iframe;
	  }

	  initIframe();

	  // escape \n to prevent it from being converted into \r\n by some UAs
	  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side
	  data = data.replace(rEscapedNewline, '\\\n');
	  this.area.value = data.replace(rNewline, '\\n');

	  try {
	    this.form.submit();
	  } catch(e) {}

	  if (this.iframe.attachEvent) {
	    this.iframe.onreadystatechange = function(){
	      if (self.iframe.readyState == 'complete') {
	        complete();
	      }
	    };
	  } else {
	    this.iframe.onload = complete;
	  }
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Module dependencies.
	 */

	var Transport = __webpack_require__(447);
	var parser = __webpack_require__(448);
	var parseqs = __webpack_require__(457);
	var inherit = __webpack_require__(458);
	var yeast = __webpack_require__(459);
	var debug = __webpack_require__(19)('engine.io-client:websocket');
	var BrowserWebSocket = global.WebSocket || global.MozWebSocket;

	/**
	 * Get either the `WebSocket` or `MozWebSocket` globals
	 * in the browser or try to resolve WebSocket-compatible
	 * interface exposed by `ws` for Node-like environment.
	 */

	var WebSocket = BrowserWebSocket;
	if (!WebSocket && typeof window === 'undefined') {
	  try {
	    WebSocket = __webpack_require__(462);
	  } catch (e) { }
	}

	/**
	 * Module exports.
	 */

	module.exports = WS;

	/**
	 * WebSocket transport constructor.
	 *
	 * @api {Object} connection options
	 * @api public
	 */

	function WS(opts){
	  var forceBase64 = (opts && opts.forceBase64);
	  if (forceBase64) {
	    this.supportsBinary = false;
	  }
	  this.perMessageDeflate = opts.perMessageDeflate;
	  Transport.call(this, opts);
	}

	/**
	 * Inherits from Transport.
	 */

	inherit(WS, Transport);

	/**
	 * Transport name.
	 *
	 * @api public
	 */

	WS.prototype.name = 'websocket';

	/*
	 * WebSockets support binary
	 */

	WS.prototype.supportsBinary = true;

	/**
	 * Opens socket.
	 *
	 * @api private
	 */

	WS.prototype.doOpen = function(){
	  if (!this.check()) {
	    // let probe timeout
	    return;
	  }

	  var self = this;
	  var uri = this.uri();
	  var protocols = void(0);
	  var opts = {
	    agent: this.agent,
	    perMessageDeflate: this.perMessageDeflate
	  };

	  // SSL options for Node.js client
	  opts.pfx = this.pfx;
	  opts.key = this.key;
	  opts.passphrase = this.passphrase;
	  opts.cert = this.cert;
	  opts.ca = this.ca;
	  opts.ciphers = this.ciphers;
	  opts.rejectUnauthorized = this.rejectUnauthorized;
	  if (this.extraHeaders) {
	    opts.headers = this.extraHeaders;
	  }

	  this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);

	  if (this.ws.binaryType === undefined) {
	    this.supportsBinary = false;
	  }

	  if (this.ws.supports && this.ws.supports.binary) {
	    this.supportsBinary = true;
	    this.ws.binaryType = 'buffer';
	  } else {
	    this.ws.binaryType = 'arraybuffer';
	  }

	  this.addEventListeners();
	};

	/**
	 * Adds event listeners to the socket
	 *
	 * @api private
	 */

	WS.prototype.addEventListeners = function(){
	  var self = this;

	  this.ws.onopen = function(){
	    self.onOpen();
	  };
	  this.ws.onclose = function(){
	    self.onClose();
	  };
	  this.ws.onmessage = function(ev){
	    self.onData(ev.data);
	  };
	  this.ws.onerror = function(e){
	    self.onError('websocket error', e);
	  };
	};

	/**
	 * Override `onData` to use a timer on iOS.
	 * See: https://gist.github.com/mloughran/2052006
	 *
	 * @api private
	 */

	if ('undefined' != typeof navigator
	  && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
	  WS.prototype.onData = function(data){
	    var self = this;
	    setTimeout(function(){
	      Transport.prototype.onData.call(self, data);
	    }, 0);
	  };
	}

	/**
	 * Writes data to socket.
	 *
	 * @param {Array} array of packets.
	 * @api private
	 */

	WS.prototype.write = function(packets){
	  var self = this;
	  this.writable = false;

	  // encodePacket efficient as it uses WS framing
	  // no need for encodePayload
	  var total = packets.length;
	  for (var i = 0, l = total; i < l; i++) {
	    (function(packet) {
	      parser.encodePacket(packet, self.supportsBinary, function(data) {
	        if (!BrowserWebSocket) {
	          // always create a new object (GH-437)
	          var opts = {};
	          if (packet.options) {
	            opts.compress = packet.options.compress;
	          }

	          if (self.perMessageDeflate) {
	            var len = 'string' == typeof data ? global.Buffer.byteLength(data) : data.length;
	            if (len < self.perMessageDeflate.threshold) {
	              opts.compress = false;
	            }
	          }
	        }

	        //Sometimes the websocket has already been closed but the browser didn't
	        //have a chance of informing us about it yet, in that case send will
	        //throw an error
	        try {
	          if (BrowserWebSocket) {
	            // TypeError is thrown when passing the second argument on Safari
	            self.ws.send(data);
	          } else {
	            self.ws.send(data, opts);
	          }
	        } catch (e){
	          debug('websocket closed before onclose event');
	        }

	        --total || done();
	      });
	    })(packets[i]);
	  }

	  function done(){
	    self.emit('flush');

	    // fake drain
	    // defer to next tick to allow Socket to clear writeBuffer
	    setTimeout(function(){
	      self.writable = true;
	      self.emit('drain');
	    }, 0);
	  }
	};

	/**
	 * Called upon close
	 *
	 * @api private
	 */

	WS.prototype.onClose = function(){
	  Transport.prototype.onClose.call(this);
	};

	/**
	 * Closes socket.
	 *
	 * @api private
	 */

	WS.prototype.doClose = function(){
	  if (typeof this.ws !== 'undefined') {
	    this.ws.close();
	  }
	};

	/**
	 * Generates uri for connection.
	 *
	 * @api private
	 */

	WS.prototype.uri = function(){
	  var query = this.query || {};
	  var schema = this.secure ? 'wss' : 'ws';
	  var port = '';

	  // avoid port if default for schema
	  if (this.port && (('wss' == schema && this.port != 443)
	    || ('ws' == schema && this.port != 80))) {
	    port = ':' + this.port;
	  }

	  // append timestamp to URI
	  if (this.timestampRequests) {
	    query[this.timestampParam] = yeast();
	  }

	  // communicate binary support capabilities
	  if (!this.supportsBinary) {
	    query.b64 = 1;
	  }

	  query = parseqs.encode(query);

	  // prepend ? to query
	  if (query.length) {
	    query = '?' + query;
	  }

	  var ipv6 = this.hostname.indexOf(':') !== -1;
	  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
	};

	/**
	 * Feature detection for WebSocket.
	 *
	 * @return {Boolean} whether this transport is available.
	 * @api public
	 */

	WS.prototype.check = function(){
	  return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
	};

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 462:
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 463:
/***/ function(module, exports) {

	
	var indexOf = [].indexOf;

	module.exports = function(arr, obj){
	  if (indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ },

/***/ 464:
/***/ function(module, exports) {

	/**
	 * Parses an URI
	 *
	 * @author Steven Levithan <stevenlevithan.com> (MIT license)
	 * @api private
	 */

	var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

	var parts = [
	    'source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'
	];

	module.exports = function parseuri(str) {
	    var src = str,
	        b = str.indexOf('['),
	        e = str.indexOf(']');

	    if (b != -1 && e != -1) {
	        str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
	    }

	    var m = re.exec(str || ''),
	        uri = {},
	        i = 14;

	    while (i--) {
	        uri[parts[i]] = m[i] || '';
	    }

	    if (b != -1 && e != -1) {
	        uri.source = src;
	        uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
	        uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
	        uri.ipv6uri = true;
	    }

	    return uri;
	};


/***/ },

/***/ 465:
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * JSON parse.
	 *
	 * @see Based on jQuery#parseJSON (MIT) and JSON2
	 * @api private
	 */

	var rvalidchars = /^[\],:{}\s]*$/;
	var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
	var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
	var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
	var rtrimLeft = /^\s+/;
	var rtrimRight = /\s+$/;

	module.exports = function parsejson(data) {
	  if ('string' != typeof data || !data) {
	    return null;
	  }

	  data = data.replace(rtrimLeft, '').replace(rtrimRight, '');

	  // Attempt to parse using the native JSON parser first
	  if (global.JSON && JSON.parse) {
	    return JSON.parse(data);
	  }

	  if (rvalidchars.test(data.replace(rvalidescape, '@')
	      .replace(rvalidtokens, ']')
	      .replace(rvalidbraces, ''))) {
	    return (new Function('return ' + data))();
	  }
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }

/******/ });
>>>>>>> master
