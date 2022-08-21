export interface User {
    id: string;
    name: string;
}

export interface GetUsersUseCase {
    get: () => Promise<User[]>
}