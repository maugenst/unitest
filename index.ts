import * as Minimist from 'minimist';
import * as prompts from 'prompts';
import { ScenarioRunner } from './app/ScenarioRunner';

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

        const runner = new ScenarioRunner(args.s, credentials)
        await runner.start();
    }
}

const i = new Index();

i.start();