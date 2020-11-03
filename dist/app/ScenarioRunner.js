"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioRunner = void 0;
const ScenarioDictionary_1 = require("./ScenarioDictionary");
class ScenarioRunner {
    constructor(scenario, credentials) {
        this.scenario = scenario;
        this.credentials = credentials;
    }
    async start() {
        if (ScenarioDictionary_1.Scenarios[this.scenario] === undefined || ScenarioDictionary_1.Scenarios[this.scenario] === null) {
            throw new Error(`No scenario called \'${this.scenario}\' found...`);
        }
        const currentScenario = new ScenarioDictionary_1.Scenarios[this.scenario](this.credentials);
        console.log(`Starting scenario: ${this.scenario} for user: ${this.credentials.username}`);
        await currentScenario.start();
    }
}
exports.ScenarioRunner = ScenarioRunner;
//# sourceMappingURL=ScenarioRunner.js.map