import { Scenarios } from './ScenarioDictionary';

export class ScenarioRunner {
    scenario: string;
    credentials: {
        username: string,
        password: string
    };

    constructor(scenario: string, credentials: {
        username: string,
        password: string
    }) {
        this.scenario = scenario;
        this.credentials = credentials;
    }

    async start() {
        if (Scenarios[this.scenario] === undefined || Scenarios[this.scenario] === null) {
            throw new Error(`No scenario called \'${this.scenario}\' found...`);
        }
        const currentScenario = new Scenarios[this.scenario](this.credentials);

        console.log(`Starting scenario: ${this.scenario} for user: ${this.credentials.username}`);
        await currentScenario.start();
    }
}