export enum AlertTheme {
    SUCCESS="success",
    WARNING="warning",
    ERROR="error",
    INFO="info",
    NONE="",
}

export interface AlertInterface {  
    show: boolean;
    text: string;
    theme: AlertTheme;    
    icon: boolean;
    iconClass: string;
    iconName: string;
}



