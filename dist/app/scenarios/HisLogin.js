"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HisLogin = void 0;
const puppeteer = require("puppeteer");
class HisLogin {
    constructor(credentials) {
        this.username = credentials.username;
        this.password = credentials.password;
    }
    async start() {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto(`https://foodsharing.de`, {
            waitUntil: 'networkidle0'
        });
        const usernameField = await page.$('#login-email');
        await (usernameField === null || usernameField === void 0 ? void 0 : usernameField.click());
        await (usernameField === null || usernameField === void 0 ? void 0 : usernameField.type(this.username));
        const passwordField = await page.$('#login-password');
        await (passwordField === null || passwordField === void 0 ? void 0 : passwordField.click());
        await (passwordField === null || passwordField === void 0 ? void 0 : passwordField.type(this.password));
        browser.close();
    }
}
exports.HisLogin = HisLogin;
//# sourceMappingURL=HisLogin.js.map