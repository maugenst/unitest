export declare class ScenarioRunner {
    scenario: string;
    credentials: {
        username: string;
        password: string;
    };
    constructor(scenario: string, credentials: {
        username: string;
        password: string;
    });
    start(): Promise<void>;
}
