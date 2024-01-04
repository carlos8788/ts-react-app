// types.d.ts
export interface Sub {
    nick: string;
    subMonths: number;
    avatar: string;
    description?: string;
}

export type SubsResponseFromApi = Array<{
    nick: string;
    subMonths: number;
    urlImage: string;
    description?: string;
}>
