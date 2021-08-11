import { Router } from "express";
import {Request,Response} from "express";
import controller from "./controller";

const router = Router();

//get data
router.get('/employee',controller.getEmployees);
router.get('/',controller.getEmployeesAndCustomer);


//Add a Employee
router.post('/',controller.addEmployee);

//GET DATA BY ID
router.get('/:id',controller.getEmployeesbyId);

//Update employee
router.put('/:id',controller.update);

//deleteUser
router.delete('/:id',controller.deleteUser);


export default router;