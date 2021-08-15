"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const router = express_1.Router();
//get data
router.get('/employee', controller_1.default.getEmployees);
router.get('/', controller_1.default.getEmployeesAndCustomer);
//Add a Employee
router.post('/', controller_1.default.addEmployee);
//GET DATA BY ID
router.get('/:id', controller_1.default.getEmployeesbyId);
//Update employee
router.put('/:id', controller_1.default.update);
//deleteUser
router.delete('/:id', controller_1.default.deleteUser);
exports.default = router;
