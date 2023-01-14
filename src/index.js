"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const personService_1 = require("./service/personService");
const app = (0, express_1.default)();
app.get('/', (response) => response.body('oi'));
(0, personService_1.gerenerateANewPerson)()
    .then(console.log);
