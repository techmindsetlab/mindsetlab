import { WorksList } from "./home"

export interface HomeResponse {
    data: {
        works: WorksList[];
    };
}

export interface WorksResponse {
    data: WorksList[];
}