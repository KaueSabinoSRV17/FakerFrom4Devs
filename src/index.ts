import puppeteer from "puppeteer";

async function gerenerateANewPerson() {

    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('https://www.4devs.com.br/gerador_de_pessoas', {waitUntil: 'load', timeout: 0})

    const newPersonInJSON = await page.evaluate(() => {

        const gerenrateNewPersonButton = document.querySelector('#bt_gerar_pessoa') as HTMLButtonElement
        const jsonTabButton = document.querySelector('#btn_json_tab') as HTMLButtonElement

        gerenrateNewPersonButton.click()
        jsonTabButton.click()

        const waitOneSecondAndGetJson = new Promise<any>((resolve, reject) => {

            setTimeout(() => resolve(document.querySelector('textarea')?.value), 1000)
            
        })

        return waitOneSecondAndGetJson.then(jsonString => JSON.parse(jsonString))

    })

    await browser.close()

    return newPersonInJSON


}

gerenerateANewPerson()
    .then(result => console.log(result))
