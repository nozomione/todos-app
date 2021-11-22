import { createContext, useState } from 'react';
import { AlertInterface, AlertTheme } from '../models';

const initialState: AlertInterface = {
    show: false,
    text:'',
    theme: AlertTheme.NONE,
    icon: false,
    iconClass:'',
    iconName: ''
}

export const  alertContext = createContext<AlertInterface>(initialState);
export const  setAlertContext = createContext<React.Dispatch<React.SetStateAction<AlertInterface>> | null >(null);
const  AlertContextProvider = alertContext.Provider;
const  SetAlertontextProvider = setAlertContext.Provider;

const AlertProvider: React.FC = ({ children }) => {
    const [alert, setAlert] = useState<AlertInterface>(initialState);

    return(
       <AlertContextProvider value={ alert }>
           <SetAlertontextProvider value={ setAlert }>   
                { children }
           </SetAlertontextProvider>
        </AlertContextProvider>
    );
}

export default AlertProvider;