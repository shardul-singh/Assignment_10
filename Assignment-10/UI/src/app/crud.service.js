"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudService = void 0;
const core_1 = require("@angular/core");
let CrudService = class CrudService {
    constructor(http) {
        this.http = http;
        this.url = "http://localhost:5555/todo";
    }
    getData() {
        return this.http.get(this.url);
    }
    saveEmp(data) {
        return this.http.post(this.url, data);
    }
    deleteEmp(id) {
        return this.http.delete(`${this.url}/${id}`);
    }
    getCurrentEmp(id) {
        return this.http.get(`${this.url}/${id}`);
    }
    updateEmp(id, data) {
        return this.http.put(`${this.url}/${id}`, data);
    }
};
CrudService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], CrudService);
exports.CrudService = CrudService;
