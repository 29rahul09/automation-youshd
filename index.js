// NOTE- PLEASE RUN NPM I OR SUDO NPM I TO INSTALL PUPPETEER BEFORE RUN THE CODE.
const puppeteer = require('puppeteer');
(async () => {
    try {
 // Change the phone no every time if you want to run the automation with full flow.
 // And if automation throw error at some stage its due to phone no. 
 // So kindly change the phone no again and run the code again. thanks,
        const phoneNo = '1234512350';
        const userName = 'rahul290987'
        const passWord = 'rahul@123'
        const countryName = 'india'
        const delay = (time) => {
            return new Promise(function (resolve) { setTimeout(resolve, time) });
        }
        const browser = await puppeteer.launch({ "headless": false, defaultViewport: null, });
        const page = await browser.newPage();
        await page.setDefaultNavigationTimeout(30000);
        await page.goto("https://app-staging.youshd.com/", { waitUntil: 'networkidle0' });
        // signup or login part
        const signup = (await page.$x("//button[normalize-space()='Login/ Sign up']"))[0];
        await signup.click()
        await page.waitForNetworkIdle()
        const featureArticle = (await page.$x("//div[@title='United States: + 1']"))[0];
        await featureArticle.click()
        const country = (await page.$x("//input[@placeholder='search']"))[0];
        await delay(1000);
        await country.type(countryName);
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press("Enter");
        const mobile = (await page.$x("//input[@placeholder='1 (702) 123-4567']"))[0];
        await mobile.type(phoneNo);
        const cont = (await page.$x("//button[normalize-space()='Continue']"))[0];
        await cont.click();
        await page.waitForNetworkIdle()
        const digit1 = (await page.$x("//input[@aria-label='Please enter verification code. Digit 1']"))[0];
        await digit1.click();
        await delay(1000);
        await digit1.type('1');
        const digit2 = (await page.$x("//input[@aria-label='Digit 2']"))[0];
        await digit2.type('2');
        const digit3 = (await page.$x("//input[@aria-label='Digit 3']"))[0];
        await digit3.type('3');
        const digit4 = (await page.$x("//input[@aria-label='Digit 4']"))[0];
        await digit4.type('4');
        const digit5 = (await page.$x("//input[@aria-label='Digit 5']"))[0];
        await digit5.type('5');
        const digit6 = (await page.$x("//input[@aria-label='Digit 6']"))[0];
        await digit6.type('6');
        await page.waitForNetworkIdle()
        // continue to social account verification after login
        const cont1 = (await page.$x("//button[normalize-space()='Continue']"))[0];
        await cont1.click();
        await delay(1000);
        await cont1.click();
        await delay(1000);
        await cont1.click();
        await delay(1000);
        await cont1.click();
        await page.waitForNetworkIdle()
        // link the insta account with youshd
        const insta = (await page.$x("//div[@class='social-bx cursor']"))[0];
        await insta.click();
        await page.waitForNetworkIdle()
        const cont2 = (await page.$x("//button[normalize-space()='Continue']"))[0];
        await cont2.click();
        // enter insta credential
        await page.waitForXPath("//input[contains(@name,'username')]", { visible: true })
        const user = (await page.$x("//input[contains(@name,'username')]"))[0];
        await user.type(userName);
        const pass = (await page.$x("//input[@name='password']"))[0];
        await pass.type(passWord);
        const login = (await page.$x("//div[contains(text(),'Log in')]"))[0];
        await login.click()
        // save insta information 
        await page.waitForXPath("//button[normalize-space()='Save information']", { visible: true })
        const detail = (await page.$x("//button[normalize-space()='Save information']"))[0];
        await detail.click()
        // allow youshd to take information from insta aacount
        await page.waitForXPath("//button[normalize-space()='Allow']", { visible: true })
        const acess = (await page.$x("//button[normalize-space()='Allow']"))[0];
        await acess.click()
        // skip for now part
        await page.waitForXPath("//button[normalize-space()='Skip for now']", { visible: true })
        const auth = (await page.$x("//button[normalize-space()='Skip for now']"))[0];
        await auth.click()
        // redirected to dashboard
        await page.waitForNavigation()
        await delay(10000);
        await browser.close();

    } catch (error) {
        console.log(error);
    };

})();