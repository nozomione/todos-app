export enum ButtonTheme {
    PRIMARY="primary",
    SECONDARY="secondary",
    TERTIARY="tertiary",
    ICON="icon",
    DISABLED="disabled"
}

export interface ButtonInterface {
    type: 'button' | 'submit' | 'reset';
    theme?: ButtonTheme; 
    clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode
}

