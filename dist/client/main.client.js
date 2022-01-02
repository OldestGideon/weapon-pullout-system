/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/client.ts":
/*!******************************!*\
  !*** ./src/client/client.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst utils_1 = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.ts\");\r\nconst WeaponList = [\"WEAPON_PISTOL\", \"WEAPON_COMBATPISTOL\", \"WEAPON_STUNGUN\", \"WEAPON_NIGHTSTICK\", \"WEAPON_FLASHLIGHT\", \"WEAPON_FIREEXTINGUISHER\", \"WEAPON_FLARE\", \"WEAPON_SNSPISTOl\", \"WEAPON_MACHINEPISTOL\", \"WEAPON_FLARE\", \"WEAPON_FLARE\", \"WEAPON_FLARE\", \"WEAPON_KNIFE\", \"WEAPON_KNUCKLE\", \"WEAPON_NIGHTSTICK\", \"WEAPON_HAMMER\", \"WEAPON_BAT\", \"WEAPON_GOLFCLUB\", \"WEAPON_CROWBAR\", \"WEAPON_BOTTLE\", \"WEAPON_DAGGER\", \"WEAPON_HATCHET\", \"WEAPON_MACHETE\", \"WEAPON_SWITCHBLADE\", \"WEAPON_PROXMINE\", \"WEAPON_BZGAS\", \"WEAPON_SMOKEGRENADE\", \"WEAPON_MOLOTOV\", \"WEAPON_MACHINEPISTOL\"];\r\nlet IsHolstered = true;\r\nconsole.log('Loaded');\r\nconst CheckPedWeapon = () => {\r\n    let Ped = GetPlayerPed(-1);\r\n    let PedWeapon = GetSelectedPedWeapon(Ped);\r\n    let result = false;\r\n    WeaponList.forEach(weapon => {\r\n        if (GetHashKey(weapon) === PedWeapon) {\r\n            console.log('CheckPedWeapon: ', true);\r\n            result = true;\r\n        }\r\n    });\r\n    return result;\r\n};\r\nsetTick(() => __awaiter(void 0, void 0, void 0, function* () {\r\n    const Ped = PlayerPedId();\r\n    yield (0, utils_1.Delay)(1000);\r\n    if (DoesEntityExist(Ped) && !IsPedInAnyVehicle(Ped, true)) {\r\n        yield (0, utils_1.LoadAnimationDictionary)('reaction@intimidation@1h');\r\n        yield (0, utils_1.LoadAnimationDictionary)('weapons@pistol_1h@gang');\r\n        let PedHasNormalWeapon = CheckPedWeapon();\r\n        if (PedHasNormalWeapon) {\r\n            console.log('Ped has Weapon');\r\n            if (IsHolstered) {\r\n                console.log('Pull Out Weapon');\r\n                TaskPlayAnim(Ped, 'reaction@intimidation@1h', 'intro', 8, 8, -1, 48, 0, false, false, false);\r\n                DisablePlayerFiring(Ped, true);\r\n                yield (0, utils_1.Delay)(2500);\r\n                DisablePlayerFiring(Ped, false);\r\n                ClearPedTasks(Ped);\r\n                IsHolstered = false;\r\n            }\r\n        }\r\n        else {\r\n            console.log('PedHasNormalWeapon: ', PedHasNormalWeapon);\r\n        }\r\n        if (!CheckPedWeapon()) {\r\n            if (!IsHolstered) {\r\n                console.log('Pull In Weapon');\r\n                TaskPlayAnim(Ped, 'reaction@intimidation@1h', 'outro', 8, 8, -1, 48, 0, false, false, false);\r\n                DisablePlayerFiring(Ped, true);\r\n                yield (0, utils_1.Delay)(1500);\r\n                DisablePlayerFiring(Ped, false);\r\n                ClearPedTasks(Ped);\r\n                IsHolstered = true;\r\n            }\r\n        }\r\n    }\r\n}));\r\n\n\n//# sourceURL=webpack://typescript-resource/./src/client/client.ts?");

/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.LoadAnimationDictionary = exports.GetPlayerVector = exports.GetVectorDistance = exports.Delay = void 0;\r\nconst Delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));\r\nexports.Delay = Delay;\r\nfunction GetVectorDistance(vec1, vec2) {\r\n    let dx = vec1.x - vec2.x;\r\n    let dy = vec1.y - vec2.y;\r\n    let dz = vec1.z - vec2.z;\r\n    return Math.sqrt((Math.pow(dx, 2)) + (Math.pow(dy, 2)) + (Math.pow(dz, 2)));\r\n}\r\nexports.GetVectorDistance = GetVectorDistance;\r\nconst Player = GetPlayerPed(-1);\r\nfunction GetPlayerVector() {\r\n    let playerCoords = GetEntityCoords(Player);\r\n    return {\r\n        x: playerCoords[0],\r\n        y: playerCoords[1],\r\n        z: playerCoords[2]\r\n    };\r\n}\r\nexports.GetPlayerVector = GetPlayerVector;\r\nconst LoadAnimationDictionary = (dictionary) => __awaiter(void 0, void 0, void 0, function* () {\r\n    while (!HasAnimDictLoaded(dictionary)) {\r\n        RequestAnimDict(dictionary);\r\n        yield (0, exports.Delay)(50);\r\n    }\r\n});\r\nexports.LoadAnimationDictionary = LoadAnimationDictionary;\r\n\n\n//# sourceURL=webpack://typescript-resource/./src/utils/utils.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/client/client.ts");
/******/ 	
/******/ })()
;