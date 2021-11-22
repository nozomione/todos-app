export enum TodosStatus {
    ACTIVE ="active",
    COMPLETED ="completed",
    NULL=""
}

export interface TodoInterface {
    id: string;
    text: string;
    status: TodosStatus
}