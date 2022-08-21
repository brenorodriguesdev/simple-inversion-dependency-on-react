import { HttpClient } from "../contracts/http-client";

export class FetchClient implements HttpClient {
    async get(url: string): Promise<any> {
        const data = await new Promise(resolve => fetch(url).then(value => resolve(value.json())))
        return data
    }
}