"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const crud_service_1 = require("./crud.service");
describe('CrudService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(crud_service_1.CrudService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
