import puppeteer from "puppeteer";
import express from "express";
import { gerenerateANewPerson } from "./service/personService";

const app = express()

app.get('/', (response) => response.body('oi'))

gerenerateANewPerson()
    .then(console.log)