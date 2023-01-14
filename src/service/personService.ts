import puppeteer from "puppeteer"
const pressNewPersonButtonAndGetTheJSON = require("../scrapper/newPersonScrapper")

export async function gerenerateANewPerson() {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://www.4devs.com.br/gerador_de_pessoas', {waitUntil: 'load', timeout: 0})

    const newPersonInJSON = await page.evaluate(pressNewPersonButtonAndGetTheJSON)

    await browser.close()

    return newPersonInJSON


}