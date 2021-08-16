"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddEmpComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let AddEmpComponent = class AddEmpComponent {
    constructor(crud) {
        this.crud = crud;
        this.addEmp = new forms_1.FormGroup({
            firstname: new forms_1.FormControl(''),
            lastname: new forms_1.FormControl(''),
            email: new forms_1.FormControl(''),
            phone: new forms_1.FormControl(''),
            name: new forms_1.FormControl(''),
            website: new forms_1.FormControl(''),
            address: new forms_1.FormControl(''),
            role_name: new forms_1.FormControl(''),
        });
    }
    ngOnInit() {
    }
    collectEmp() {
        // console.warn(this.addEmp.value);
        this.crud.saveEmp(this.addEmp.value).subscribe((result) => {
            console.warn("REsult ", result);
        });
    }
};
AddEmpComponent = __decorate([
    core_1.Component({
        selector: 'app-add-emp',
        templateUrl: './add-emp.component.html',
        styleUrls: ['./add-emp.component.css']
    })
], AddEmpComponent);
exports.AddEmpComponent = AddEmpComponent;
