import {Scenario} from "../Scenario";
import * as puppeteer from 'puppeteer';

export class HisLogin implements Scenario {
    username: string;
    password: string;

    constructor(credentials: {
        username: string,
        password: string
    }) {
        this.username = credentials.username;
        this.password = credentials.password;
    }
    async start(): Promise<void> {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto(`https://foodsharing.de`, {
            waitUntil: 'networkidle0'
        });
        const usernameField = await page.$('#login-email');
        await usernameField?.click();
        await usernameField?.type(this.username)
        const passwordField = await page.$('#login-password');
        await passwordField?.click();
        await passwordField?.type(this.password)
        browser.close();
    }
}