export interface CheckboxInterface { 
    changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    clickHandler?: (e: React.MouseEvent<HTMLInputElement>) => void;
    value?: string;
    name?:string;
    placeholder?: string;
    checked?: boolean;
    grayOut?: boolean;
}
