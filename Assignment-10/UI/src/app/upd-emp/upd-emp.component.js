"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdEmpComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
let UpdEmpComponent = class UpdEmpComponent {
    constructor(router, crud) {
        this.router = router;
        this.crud = crud;
        this.editEmp = new forms_1.FormGroup({
            firstname: new forms_1.FormControl(''),
            lastname: new forms_1.FormControl(''),
            email: new forms_1.FormControl(''),
            phone: new forms_1.FormControl(''),
            name: new forms_1.FormControl(''),
            website: new forms_1.FormControl(''),
            address: new forms_1.FormControl(''),
            role_name: new forms_1.FormControl(''),
        });
        this.res = [];
    }
    ngOnInit() {
        console.warn(this.router.snapshot.params.id);
        this.crud.getCurrentEmp(this.router.snapshot.params.id).subscribe((result) => {
            this.res = result;
            console.warn(this.res[0].firstname);
            this.editEmp = new forms_1.FormGroup({
                firstname: new forms_1.FormControl(this.res[0].firstname),
                lastname: new forms_1.FormControl(this.res[0].lastname),
                email: new forms_1.FormControl(this.res[0].email),
                phone: new forms_1.FormControl(this.res[0].phone),
                name: new forms_1.FormControl(this.res[0].name),
                website: new forms_1.FormControl(this.res[0].website),
                address: new forms_1.FormControl(this.res[0].address),
                role_name: new forms_1.FormControl(this.res[0].role_name),
            });
        });
    }
    collection() {
        console.warn(this.editEmp.value);
        this.crud.updateEmp(this.router.snapshot.params.id, this.editEmp.value).subscribe((result) => {
            console.warn(result);
        });
    }
};
UpdEmpComponent = __decorate([
    core_1.Component({
        selector: 'app-upd-emp',
        templateUrl: './upd-emp.component.html',
        styleUrls: ['./upd-emp.component.css']
    })
], UpdEmpComponent);
exports.UpdEmpComponent = UpdEmpComponent;
