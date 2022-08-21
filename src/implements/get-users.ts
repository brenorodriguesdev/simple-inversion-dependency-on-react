import { GetUsersUseCase, User } from "../contracts/get-users";
import { HttpClient } from "../contracts/http-client";

export class GetUsersService implements GetUsersUseCase {
    constructor(
        private readonly httpClient: HttpClient
    ) { }
    async get(): Promise<User[]> {
        return await this.httpClient.get('')
    }
}