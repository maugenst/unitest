"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Minimist = require("minimist");
const prompts = require("prompts");
const ScenarioRunner_1 = require("./app/ScenarioRunner");
class Index {
    constructor() {
    }
    async start() {
        const args = Minimist(process.argv.slice(2));
        const credentials = await prompts([
            {
                type: 'text',
                name: 'username',
                message: 'Username:'
            }, {
                type: 'password',
                name: 'password',
                message: 'Insert password:'
            }
        ]);
        const runner = new ScenarioRunner_1.ScenarioRunner(args.s, credentials);
        await runner.start();
    }
}
const i = new Index();
i.start();
//# sourceMappingURL=index.js.map