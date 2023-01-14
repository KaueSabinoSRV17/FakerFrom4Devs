"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerenerateANewPerson = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
const newPersonScrapper_1 = require("../scrapper/newPersonScrapper");
function gerenerateANewPerson() {
    return __awaiter(this, void 0, void 0, function* () {
        const browser = yield puppeteer_1.default.launch();
        const page = yield browser.newPage();
        yield page.goto('https://www.4devs.com.br/gerador_de_pessoas', { waitUntil: 'load', timeout: 0 });
        const newPersonInJSON = yield page.evaluate(newPersonScrapper_1.pressNewPersonButtonAndGetTheJSON);
        yield browser.close();
        return newPersonInJSON;
    });
}
exports.gerenerateANewPerson = gerenerateANewPerson;
