import { Scenario } from "../Scenario";
export declare class HisLogin implements Scenario {
    username: string;
    password: string;
    constructor(credentials: {
        username: string;
        password: string;
    });
    start(): Promise<void>;
}
