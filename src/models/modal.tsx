export enum ModalTheme {
    DARK="dark",
    LIGHT="light"
}

export interface ModalInterface {
    show: boolean;
    theme?: ModalTheme;
    todoId?: string; 
    name?: string,
}