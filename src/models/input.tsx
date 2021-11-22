export enum InputRole {
    CHECKBOX="checkbox",
    RADIOBUTTON="radiobutton",
    SEARCH="search",
    TEXT="text"
}

export interface InputInterface {
    type: 'checkbox' | 'radiobutton' | 'search' | 'text';
    role:InputRole;
    changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    clickHandler?: (e: React.MouseEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder?: string;
    checked?: boolean;
    children?: React.ReactNode;
    focus?: boolean;
}